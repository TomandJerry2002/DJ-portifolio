/* eslint-disable @typescript-eslint/no-explicit-any */
// ═══════════ MOTION ENGINE ═══════════
// Imperative layer that drives everything animated: Lenis smooth scroll, GSAP/ScrollTrigger
// choreography, the two WebGL canvases, glitch/scramble FX, the Shorts reel + 3D ring,
// the mascot and the featured-track player. React renders the markup; the engine finds
// elements by their `data-bb="…"` / `data-*` hooks and animates them.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { site } from '@/data/content';
import { CRT, MOTION, RED, HOT } from '@/config/crt';
import { VS, FS_CRT, FS_HERO } from './shaders';
import { sstep } from './text';
import { crtK, type SiteState, type Store } from './state';

const SECTION_IDS = site.nav.map((n) => n.href.slice(1));
const SCRAMBLE = '<>/\\_-=+*#01[]';

export class BenjiEngine {
  [key: string]: any; // engine keeps a lot of loosely-typed runtime state
  root: HTMLElement;
  store: Store;

  constructor(root: HTMLElement, store: Store) {
    this.root = root;
    this.store = store;
    this.alive = true;
    this.reduced = this.state.reduced;
    this.fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.waveAmp = 1; this.waveIn = 0; this.t0 = performance.now(); this.last = this.t0;
    this.vel = 0; this.lastY = window.scrollY; this.heroWarp = 0; this.heroIntroWarp = 0;
    this.flick = 0; this.flickT = 0; this.fpsAcc = 0; this.fpsN = 0; this.degraded = false;
    this.applyRgbVar();

    this.onVis = () => {
      if (document.hidden) { cancelAnimationFrame(this.raf); this.raf = 0; gsap.ticker.sleep(); }
      else if (this.ready && !this.raf) { this.last = performance.now(); gsap.ticker.wake(); this.raf = requestAnimationFrame(this.frame); }
    };
    document.addEventListener('visibilitychange', this.onVis);
    this.onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { if (this.state.ring != null && !this.state.lb) this.closeRing(); this.setState({ lb: null, menuOpen: false }); }
      if (e.key === 'Tab') this.trapFocus(e);
      if (this.state.lb && this.state.lb.type === 'image') {
        if (e.key === 'ArrowRight') this.stepLb(1);
        if (e.key === 'ArrowLeft') this.stepLb(-1);
      }
    };
    window.addEventListener('keydown', this.onKey);
    this.onImgLoad = (e: Event) => {
      if ((e.target as HTMLElement).tagName !== 'IMG') return;
      clearTimeout(this.refreshT); this.refreshT = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    root.addEventListener('load', this.onImgLoad, true);
    this.onRootClick = (e: MouseEvent) => this.handleAnchor(e);
    root.addEventListener('click', this.onRootClick);

    this.waitFonts().then(() => { if (this.alive) this.init(); });
  }

  // ── state bridge (React owns the state; engine reads/writes through the store)
  get state(): SiteState { return this.store.get(); }
  setState(p: any, cb?: () => void) { this.store.set(p, cb); }
  kNow() { return crtK(this.state); }
  fxOn() { return !this.reduced && this.state.level !== 'off'; }
  $(k: string): any { return this.root.querySelector(`[data-bb="${k}"]`); }
  $$(k: string): any[] { return [...this.root.querySelectorAll(`[data-bb="${k}"]`)]; }

  restRgb() {
    const k = this.kNow();
    if (k <= 0.01) return 'none';
    const a = (0.6 + 0.8 * k) * CRT.aberration, m = Math.min(1, 0.4 + 0.6 * k), gl = CRT.glow * Math.min(1.2, k);
    return `${(-2 * a).toFixed(2)}px 0 rgba(225,48,28,${(0.75 * m).toFixed(2)}), ${(2 * a).toFixed(2)}px 0 rgba(242,242,242,${(0.18 * m).toFixed(2)}), 0 0 ${(18 * gl).toFixed(1)}px rgba(242,242,242,${(0.14 * gl).toFixed(2)})`;
  }
  splitRgb() {
    const a = 12 * Math.max(0.4, this.kNow()) * CRT.aberration;
    return `${-a}px 0 rgba(225,48,28,.9), ${a * 0.7}px 0 rgba(242,242,242,.45), 0 0 0px rgba(242,242,242,0)`;
  }
  applyRgbVar() {
    const v = this.restRgb();
    this.root.style.setProperty('--rgb', v);
    if (this.introDone) this.$$('char').forEach((c) => { c.style.textShadow = v; });
  }

  // Called by React after every state change (replaces componentDidUpdate)
  onStateChange(prev: SiteState) {
    const s = this.state;
    const locked = !!(s.lb || s.menuOpen);
    if (locked !== !!(prev.lb || prev.menuOpen)) {
      if (this.lenis) locked ? this.lenis.stop() : this.lenis.start();
      else document.documentElement.style.overflow = locked ? 'hidden' : '';
      if (locked) this.showNav(true);
    }
    const closed = (!s.lb && prev.lb) || (!s.menuOpen && prev.menuOpen);
    if (closed && !s.lb && !s.menuOpen) {
      const r = this.returnFocus; this.returnFocus = null;
      if (r && document.contains(r) && !this.navJump) r.focus({ preventScroll: true });
      this.navJump = false;
    }
    if (!this.reduced) {
      if (s.menuOpen && !prev.menuOpen) gsap.fromTo(this.$$('mlink'), { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, ease: MOTION.ease.out, stagger: 0.05 });
      if (s.lb && s.lb !== prev.lb) gsap.fromTo(this.$('lbbody'), { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.5, ease: MOTION.ease.out });
    }
    if (prev.level !== s.level) this.applyRgbVar();
    if (prev.lb && !s.lb && s.ring != null) this.closeRing();
    if (prev.mobile !== s.mobile && this.ready) requestAnimationFrame(() => this.buildSections());
  }

  dialogFocusables(): HTMLElement[] {
    const box = this.state.lb ? this.$('lb') : this.state.menuOpen ? this.$('menu') : null;
    if (!box) return [];
    const list: HTMLElement[] = [...box.querySelectorAll('a[href],button,iframe,[tabindex]:not([tabindex="-1"])')] as HTMLElement[];
    if (this.state.menuOpen) { const btn = this.$('mascotBtn'); if (btn) list.unshift(btn); }
    return list;
  }
  trapFocus(e: KeyboardEvent) {
    const f = this.dialogFocusables(); if (!f.length) return;
    const first = f[0], last = f[f.length - 1], a = document.activeElement as HTMLElement;
    if (!f.includes(a)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
  }

  destroy() {
    this.alive = false;
    document.removeEventListener('visibilitychange', this.onVis);
    cancelAnimationFrame(this.raf);
    clearTimeout(this.burstT); clearTimeout(this.sayT); clearInterval(this.shoutT);
    this.audio && this.audio.pause();
    this.tick && gsap.ticker.remove(this.tick);
    this.lenis && this.lenis.destroy();
    this.ctx && this.ctx.revert();
    this.secCtx && this.secCtx.revert();
    this.ringTl && this.ringTl.kill();
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('scroll', this.onWinScroll);
    this.root.removeEventListener('load', this.onImgLoad, true);
    this.root.removeEventListener('click', this.onRootClick);
    document.removeEventListener('pointermove', this.onMove);
    document.removeEventListener('pointerover', this.onOver);
    document.removeEventListener('pointerover', this.onFxOver);
    document.documentElement.classList.remove('bb-cursor');
    (this.anims || []).forEach((a: Animation) => a.cancel());
  }

  async waitFonts() {
    try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]); } catch { /* noop */ }
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    if (!this.reduced) {
      this.lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.3 });
      this.lenis.on('scroll', ScrollTrigger.update);
      this.tick = (t: number) => this.lenis.raf(t * 1000);
      gsap.ticker.add(this.tick);
      gsap.ticker.lagSmoothing(0);
    }
    this.setupGL();
    this.setupWave();
    this.setupChrome();
    this.setupCursor();
    this.setupFxHover();
    this.ctx = gsap.context(() => {
      if (this.reduced || CRT.skipIntro) this.revealAll(); else this.intro();
      this.setupScroll();
    }, this.root);
    this.ready = true;
    this.buildSections();
    ScrollTrigger.addEventListener('refresh', () => this.computeBounds());
    this.computeBounds();
    this.scheduleBurst();
    this.raf = requestAnimationFrame(this.frame);
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  }

  // ── in-page anchors scroll with Lenis and move focus to the section
  handleAnchor(e: MouseEvent) {
    const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const hash = a.getAttribute('href') as string;
    const focusTarget = () => {
      const t = (hash === '#top' ? this.root.querySelector('#main') : document.querySelector(hash)) as HTMLElement | null;
      if (t) { if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); }
    };
    const go = () => { this.scrollToHash(hash === '#main' ? '#top' : hash); focusTarget(); };
    if (this.state.menuOpen) { this.navJump = true; this.setState({ menuOpen: false }, () => setTimeout(go, 30)); }
    else go();
  }
  scrollToHash(hash: string) {
    const el = hash === '#top' ? 0 : (document.querySelector(hash) as HTMLElement | null);
    if (el === null) return;
    if (this.lenis) this.lenis.scrollTo(el, { duration: 1.6, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    else window.scrollTo({ top: el === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY, behavior: this.reduced ? 'auto' : 'smooth' });
  }

  revealAll() {
    const set = (el: any, s: Partial<CSSStyleDeclaration>) => el && Object.assign(el.style, s);
    set(this.$('screen'), { clipPath: 'inset(0% 0% 0% 0%)' });
    set(this.$('flash'), { opacity: '0' });
    set(this.$('photo'), { opacity: '1' });
    set(this.$('nav'), { opacity: '1' });
    set(this.$('wave'), { opacity: '0.9' });
    this.waveIn = 1; this.introDone = true;
    setTimeout(() => this.mascotIn(), 300);
    this.$$('char').forEach((c) => set(c, { opacity: '1', textShadow: this.restRgb() }));
  }

  // ═══ HERO INTRO: CRT power-on → glitch title → signal locks in (≈2.7s)
  intro() {
    const R = gsap.utils.random;
    this.lenis && this.lenis.stop();
    this.heroIntroWarp = this.fxOn() ? 0.9 : 0;
    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => { this.introDone = true; this.applyRgbVar(); this.mascotIn(); if (this.lenis && !this.state.lb && !this.state.menuOpen) this.lenis.start(); },
    });
    const screen = this.$('screen'), flash = this.$('flash'), chars = this.$$('char');
    const rest = this.restRgb();
    tl.set(screen, { clipPath: 'inset(50% 50% 50% 50%)' })
      .to(screen, { clipPath: 'inset(49.85% 0% 49.85% 0%)', duration: 0.32, ease: 'power3.out' }, 0.1)
      .to(screen, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.38, ease: 'expo.inOut' }, 0.42)
      .to(flash, { keyframes: [{ opacity: 0.35, duration: 0.06 }, { opacity: 0.8, duration: 0.04 }, { opacity: 0.1, duration: 0.06 }, { opacity: 0.4, duration: 0.03 }, { opacity: 0, duration: 0.25 }] }, 0.62)
      .fromTo(this.$('static'), { opacity: 0.55 }, { opacity: 0, duration: 1.1, ease: 'power2.out' }, 0.7)
      .fromTo(chars,
        { opacity: 0, x: () => R(-80, 80), y: () => R(-24, 24), skewX: () => R(-35, 35), textShadow: () => `${R(-26, -10)}px 0 ${RED}, ${R(10, 26)}px 0 rgba(242,242,242,.6), 0 0 0px rgba(242,242,242,0)` },
        { opacity: 1, x: 0, y: 0, skewX: 0, duration: 0.55, ease: 'steps(5)', stagger: { each: 0.045, from: 'random' } }, 0.85)
      .to(chars, { textShadow: () => `${R(-14, -6)}px 0 ${RED}, ${R(4, 10)}px 0 rgba(242,242,242,.4), 0 0 0px rgba(242,242,242,0)`, duration: 0.08, ease: 'steps(1)', stagger: { each: 0.02, from: 'random' } }, 1.45)
      .to(chars, { textShadow: rest === 'none' ? '0px 0 rgba(225,48,28,0), 0px 0 rgba(242,242,242,0), 0 0 0px rgba(242,242,242,0)' : rest, duration: 0.45, ease: 'power2.out' }, 1.6)
      .fromTo(this.$('photo'), { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 1.3, ease: 'power2.out' }, 1.55)
      .to(this, { heroIntroWarp: 0, duration: 1.4, ease: 'power3.out' }, 1.55)
      .to(this, { waveIn: 1, duration: 0.9, ease: 'power2.out' }, 1.85)
      .fromTo(this.$('wave'), { opacity: 0 }, { opacity: 0.9, duration: 0.6 }, 1.85)
      .fromTo(this.$('nav'), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 2.05);
  }

  // ═══ HERO SCROLL: title parallax + photo push-in + shader signal warp → CRT switch-off
  setupScroll() {
    const hero = this.$('hero'), title = this.$('title'), lines = this.$$('line');
    const strips = this.$$('strip'), ghost = this.$('ghost'), screen = this.$('screen');
    const sx = strips.map((s) => gsap.quickSetter(s, 'x', 'px'));
    const gx = ghost && gsap.quickSetter(ghost, 'x', 'px');
    const warpOn = !this.reduced && CRT.scrollWarp;
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.to(this.$('photo'), { scale: 1.5, duration: 1 }, 0)
      .to(lines[0] || {}, { xPercent: -16, duration: 0.7 }, 0)
      .to(lines[1] || {}, { xPercent: 16, duration: 0.7 }, 0)
      .to(title, { scale: 1.22, yPercent: -18, duration: 0.7 }, 0)
      .to(title, { opacity: 0, duration: 0.25 }, 0.45)
      .to(this.$('wave'), { top: '18%', duration: 0.8 }, 0);
    if (warpOn) {
      tl.to(this.$('track'), { top: '110%', opacity: 1, duration: 0.35 }, 0.5)
        .to(screen, { clipPath: 'inset(49.7% 0% 49.7% 0%)', duration: 0.12, ease: 'power3.in' }, 0.86)
        .to(this.$('flash'), { opacity: 0.85, duration: 0.06 }, 0.92)
        .to(screen, { clipPath: 'inset(49.7% 50% 49.7% 50%)', duration: 0.04 }, 0.98)
        .to(this.$('flash'), { opacity: 0, duration: 0.02 }, 0.98);
    } else {
      tl.to(this.$('photo'), { opacity: 0, duration: 0.3 }, 0.7);
    }
    const seed = strips.map((_, i) => (Math.sin(i * 12.9898) * 43758.5453) % 1);
    ScrollTrigger.create({
      trigger: hero, start: 'top top', end: 'bottom bottom', scrub: this.reduced ? true : 0.6, animation: tl,
      onUpdate: (self) => {
        const p = self.progress;
        this.heroP = p;
        this.waveAmp = 1 + p * 3.5;
        const w = warpOn ? sstep(0.32, 0.82, p) : 0;
        this.heroWarp = w;
        if (!strips.length || !warpOn) return;
        const W = window.innerWidth, k = Math.max(0.3, this.kNow());
        strips.forEach((_, i) => {
          const tear = Math.abs(seed[i]) > 0.72 ? Math.sin(p * 90 + i) * 0.05 : 0;
          sx[i](w * W * k * (0.07 * Math.sin(i * 0.85 + p * 16) + tear));
        });
        if (ghost) { ghost.style.opacity = (w * 0.55 * Math.min(1.4, k + 0.3)).toFixed(3); gx(-w * W * 0.035); }
      },
    });
  }

  // ═══ SECTION CHOREOGRAPHY — rebuilt on breakpoint change. Mobile gets a lighter set.
  buildSections() {
    const M = MOTION, R = this.reduced, root = this.root, mobile = this.state.mobile;
    this.secCtx && this.secCtx.revert();
    this.secCtx = gsap.context(() => {
      const q = (s: string, el: Element = root): any[] => [...el.querySelectorAll(s)];
      const st = (trigger: any, o: any = {}) => ({ trigger, start: M.start, toggleActions: M.toggle, ...o });
      const fade = (el: any, o: any = {}) => gsap.from(el, { opacity: 0, duration: M.dur.base, ease: M.ease.soft, scrollTrigger: st(o.trigger || el) });
      const cleanups: (() => void)[] = [];

      // Headings: masked word slide-up with an RGB split that settles to clean white
      q('[data-split]').forEach((h) => {
        const w = q('[data-hw]', h);
        if (R) return fade(w, { trigger: h });
        gsap.from(w, { yPercent: 115, duration: M.dur.slow, ease: M.ease.out, stagger: M.stagger.word, scrollTrigger: st(h) });
        if (this.fxOn()) gsap.fromTo(w, { textShadow: () => this.splitRgb() }, { textShadow: () => this.restRgb(), duration: 1.1, ease: 'power2.out', stagger: M.stagger.word, scrollTrigger: st(h), onComplete: () => { gsap.set(w, { clearProps: 'textShadow' }); } });
        if (h.hasAttribute('data-drift') && !mobile) gsap.fromTo(h, { xPercent: 5 }, { xPercent: -5, ease: 'none', scrollTrigger: { trigger: h, start: 'top bottom', end: 'bottom top', scrub: M.scrub } });
      });

      // Paragraphs: line-by-line rise on desktop, whole-paragraph fade on mobile
      q('[data-lines]').forEach((p) => {
        if (R || mobile) return fade(p);
        const ws = q('[data-lw]', p);
        gsap.set(ws, { opacity: 0, y: 18 });
        let tl: any = null;
        ScrollTrigger.create({
          trigger: p, start: 'top 88%',
          onEnter: () => {
            if (tl) return tl.play();
            const tops = ws.map((w) => w.offsetTop), rows = [...new Set(tops)].sort((a, b) => a - b);
            this.secCtx.add(() => {
              tl = gsap.timeline();
              ws.forEach((w, i) => tl.to(w, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out }, rows.indexOf(tops[i]) * M.stagger.line));
            });
          },
          onLeaveBack: () => tl && tl.reverse(),
        });
      });

      q('[data-reveal]').forEach((el) => gsap.from(el, { opacity: 0, y: R ? 0 : 40, duration: M.dur.base, ease: M.ease.out, scrollTrigger: st(el) }));

      // Image masks: wipe up + scale settle + parallax
      q('[data-mask]').forEach((f) => {
        if (R) return fade(f);
        const img = f.querySelector('[data-par]');
        gsap.fromTo(f, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: M.dur.media, ease: M.ease.inOut, scrollTrigger: st(f, { start: 'top 80%' }) });
        if (!img) return;
        gsap.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 2, ease: M.ease.out, scrollTrigger: st(f, { start: 'top 80%' }) });
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: M.scrub } });
      });

      const quote = this.$('quote');
      if (quote) {
        if (R) fade(quote);
        else {
          gsap.fromTo(q('[data-qw]', quote), { opacity: 0.12 }, { opacity: 1, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: quote, start: 'top 82%', end: 'bottom 52%', scrub: M.scrub } });
          gsap.fromTo(q('[data-qhl]', quote), { opacity: 0, y: 26, textShadow: '0 0 0px rgba(255,65,40,0)' }, { opacity: 1, y: 0, textShadow: '0 0 24px rgba(255,65,40,.55)', ease: 'none', scrollTrigger: { trigger: quote, start: 'top 56%', end: 'top 38%', scrub: M.scrub } });
        }
      }

      if (!R) q('[data-band-row]').forEach((r, i) => gsap.fromTo(r, { xPercent: i % 2 ? -30 : 0 }, { xPercent: i % 2 ? 0 : -30, ease: 'none', scrollTrigger: { trigger: r.parentElement, start: 'top bottom', end: 'bottom top', scrub: M.scrub } }));

      const tags = q('[data-tag]');
      if (tags.length) gsap.from(tags, { opacity: 0, y: R ? 0 : 24, scale: R ? 1 : 0.92, duration: M.dur.base, ease: M.ease.out, stagger: M.stagger.item, scrollTrigger: st(tags[0].parentElement) });
      const mix = this.$('mix');
      this.bars = mix ? q('[data-bar]', mix) : [];
      this.barsReady = R;
      if (mix) {
        gsap.from(mix, { opacity: 0, x: R ? 0 : 90, duration: M.dur.slow, ease: M.ease.out, scrollTrigger: st(mix) });
        if (!R) gsap.from(this.bars, { scaleY: 0, duration: 0.9, ease: M.ease.out, stagger: { each: 0.012 }, delay: 0.2, scrollTrigger: st(mix, { toggleActions: 'play none none none' }), onComplete: () => { this.barsReady = true; } });
      }

      // Beatboxer: featured card grows from a small window to full frame while pinned (desktop)
      const stage = this.$('bbStage'), card = this.$('bbCard'), head = this.$('bbHead');
      if (stage && card && !R && !mobile) {
        gsap.timeline({ scrollTrigger: { trigger: stage, start: 'top top', end: 'bottom bottom', scrub: M.scrub } })
          .fromTo(card, { scale: 0.34 }, { scale: 1, ease: 'power2.inOut' }, 0)
          .fromTo(card.querySelector('img'), { scale: 1.35 }, { scale: 1, ease: 'power2.inOut' }, 0)
          .fromTo(head, { scale: 1, opacity: 1 }, { scale: 0.84, opacity: 0.08, ease: 'none' }, 0);
      }

      q('ol').forEach((list) => {
        const rows = q('[data-row]', list), lines = q('[data-rowline]', list);
        if (!rows.length) return;
        if (R) return gsap.from(rows, { opacity: 0, duration: M.dur.base, stagger: 0.08, scrollTrigger: st(list) });
        gsap.timeline({ scrollTrigger: st(list, { start: 'top 82%' }) })
          .fromTo(lines, { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.7, ease: 'power3.inOut', stagger: M.stagger.row }, 0)
          .fromTo(rows, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% -2px 0%)', duration: 0.9, ease: 'power3.inOut', stagger: M.stagger.row }, 0.06)
          .to(lines, { opacity: 0, duration: 0.6, stagger: M.stagger.row }, 0.75);
      });

      // Gallery: simple fade-rise; photos always end fully visible
      const gal = this.$('gal');
      if (gal) q('[data-gitem]', gal).forEach((it) => {
        if (R) return fade(it);
        const col = Math.round(it.offsetLeft / Math.max(1, it.offsetWidth + 12));
        gsap.fromTo(it, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out, delay: col * 0.08, scrollTrigger: st(it, { start: 'top 95%', toggleActions: 'play none none none' }), onComplete: () => { gsap.set(it, { clearProps: 'transform,opacity' }); } });
      });

      // Finale: pinned CRT power-on → push-in → words fly in → duotone hit → power-off (desktop); one-shot reveal on mobile
      const fin = this.$('finale');
      if (fin && !R && mobile) {
        gsap.fromTo(this.$('finImg'), { scale: 1.15 }, { scale: 1, duration: 1.6, ease: M.ease.out, scrollTrigger: st(fin, { start: 'top 70%' }) });
        gsap.fromTo(q('[data-fw]', fin), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out, stagger: 0.08, scrollTrigger: st(fin, { start: 'top 45%' }) });
      }
      if (fin && !R && !mobile) {
        const scr = this.$('finScreen'), img = this.$('finImg'), fw = q('[data-fw]', fin), flash = this.$('finFlash'), tint = this.$('finTint');
        gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: fin, start: 'top top', end: 'bottom bottom', scrub: M.scrub } })
          .fromTo(scr, { clipPath: 'inset(49.6% 0% 49.6% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.2, ease: 'expo.inOut' }, 0.02)
          .fromTo(flash, { opacity: 0.7 }, { opacity: 0, duration: 0.1, ease: 'steps(4)' }, 0.02)
          .fromTo(img, { scale: 1.55, xPercent: 6 }, { scale: 1.04, xPercent: -2, duration: 0.82 }, 0)
          .fromTo(fw, { xPercent: -140, opacity: 0, skewX: -28, textShadow: () => this.splitRgb() },
            { xPercent: 0, opacity: 1, skewX: 0, textShadow: () => this.restRgb(), duration: 0.22, stagger: 0.07, ease: 'power3.out' }, 0.28)
          .to(tint, { keyframes: [{ opacity: 0.55, duration: 0.02 }, { opacity: 0.1, duration: 0.02 }, { opacity: 0.45, duration: 0.02 }, { opacity: 0, duration: 0.1 }] }, 0.66)
          .to(fw, { opacity: 0, duration: 0.05 }, 0.86)
          .to(scr, { clipPath: 'inset(49.7% 0% 49.7% 0%)', duration: 0.07, ease: 'power3.in' }, 0.88)
          .to(flash, { opacity: 0.9, duration: 0.03 }, 0.93)
          .to(scr, { clipPath: 'inset(49.7% 50% 49.7% 50%)', duration: 0.04 }, 0.96)
          .to(flash, { opacity: 0, duration: 0.02 }, 0.98);
      }

      // DJ shout: cycles hype lines with a punch, shake and RGB split while on screen
      const shout = this.$('shout');
      if (shout && !R) {
        clearInterval(this.shoutT);
        let idx = 0, onScreen = false;
        const punch = () => {
          const k = Math.max(0.5, this.kNow());
          gsap.timeline()
            .fromTo(shout, { scale: 1.12, x: 0, textShadow: `${-14 * k}px 0 rgba(225,48,28,.95), ${10 * k}px 0 rgba(242,242,242,.5)` }, { scale: 1, textShadow: this.restRgb(), duration: 0.5, ease: 'expo.out' })
            .to(shout, { keyframes: [{ x: -6 }, { x: 5 }, { x: -3 }, { x: 2 }, { x: 0 }], duration: 0.25, ease: 'none' }, 0);
        };
        const next = () => {
          if (!onScreen || document.hidden || !this.fxOn()) return;
          const L = site.dj.shouts; idx = (idx + 1) % L.length;
          shout.textContent = L[idx];
          this.scramble(shout); punch();
        };
        ScrollTrigger.create({ trigger: shout, start: 'top bottom', end: 'bottom top', onToggle: (s) => { onScreen = s.isActive; if (s.isActive) punch(); } });
        this.shoutT = setInterval(next, (site.dj.shoutEvery || 2.6) * 1000);
        cleanups.push(() => { clearInterval(this.shoutT); shout.textContent = site.dj.shouts[0]; });
      }

      const fc = q('[data-fchar]'), foot = this.$('foot');
      if (fc.length && foot) {
        if (R) fade(fc, { trigger: foot });
        else gsap.fromTo(fc, { yPercent: 105 }, { yPercent: 0, ease: 'none', stagger: 0.06, scrollTrigger: { trigger: foot, start: 'top bottom', end: 'bottom bottom', scrub: M.scrub } });
      }

      SECTION_IDS.forEach((id, i) => {
        const el = root.querySelector('#' + id); if (!el) return;
        ScrollTrigger.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => {
          if (s.isActive) this.setActive(id);
          else if (i === 0 && s.direction < 0) this.setActive(null);
          else if (i === SECTION_IDS.length - 1 && s.direction > 0) this.setActive(null);
        } });
      });

      // Magnetic buttons (fine pointers only)
      if (!R && this.fine) q('[data-magnetic]').forEach((b) => {
        const inner = b.querySelector('[data-mag-inner]');
        const o = { duration: 0.6, ease: 'power3' };
        const bx = gsap.quickTo(b, 'x', o), by = gsap.quickTo(b, 'y', o);
        const ix = inner && gsap.quickTo(inner, 'x', o), iy = inner && gsap.quickTo(inner, 'y', o);
        const mv = (e: PointerEvent) => { const r = b.getBoundingClientRect(), dx = e.clientX - r.left - r.width / 2, dy = e.clientY - r.top - r.height / 2; bx(dx * 0.3); by(dy * 0.4); ix && ix(dx * 0.15); iy && iy(dy * 0.15); };
        const lv = () => { bx(0); by(0); ix && ix(0); iy && iy(0); };
        b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', lv);
        cleanups.push(() => { b.removeEventListener('pointermove', mv); b.removeEventListener('pointerleave', lv); });
      });

      return () => cleanups.forEach((f) => f());
    }, root);
    ScrollTrigger.refresh();
  }

  setActive(id: string | null) { if (this.state.active !== id) this.setState({ active: id }); }

  showNav(v: boolean) {
    const nav = this.$('nav');
    if (!nav || this.navShown === v) return;
    this.navShown = v;
    gsap.to(nav, { yPercent: v ? 0 : -110, duration: v ? 0.7 : 0.5, ease: v ? MOTION.ease.out : MOTION.ease.in, overwrite: 'auto' });
  }
  setupChrome() {
    const setP = gsap.quickSetter(this.$('progress'), 'scaleX');
    this.navShown = true;
    let last = 0;
    const onScroll = (y: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, y / max) : 0);
      const dir = y - last; last = y;
      if (!this.introDone || this.state.menuOpen || this.state.lb) return;
      if (y < 120) this.showNav(true);
      else if (Math.abs(dir) > 2) this.showNav(dir < 0);
    };
    if (this.lenis) this.lenis.on('scroll', (e: any) => onScroll(e.scroll));
    else { this.onWinScroll = () => onScroll(window.scrollY); window.addEventListener('scroll', this.onWinScroll, { passive: true }); }
  }

  setupCursor() {
    if (!this.fine) return;
    const dot = this.$('cursor'), lab = this.$('cursorLabel');
    if (!dot) return;
    document.documentElement.classList.add('bb-cursor');
    gsap.set(lab, { xPercent: -50, yPercent: -50 });
    const o = { duration: 0.35, ease: 'power3' };
    const dx = gsap.quickTo(dot, 'x', o), dy = gsap.quickTo(dot, 'y', o);
    const lx = gsap.quickTo(lab, 'x', o), ly = gsap.quickTo(lab, 'y', o);
    let shown = false;
    this.onMove = (e: PointerEvent) => {
      dx(e.clientX); dy(e.clientY); lx(e.clientX); ly(e.clientY);
      if (!shown) { shown = true; gsap.to(dot, { opacity: 1, duration: 0.3 }); }
    };
    this.onOver = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest?.('[data-cursor],a,button');
      if (t === this.curT) return;
      this.curT = t;
      const label = t ? t.getAttribute('data-cursor') : '';
      gsap.to(dot, { scale: t ? (label ? 6.4 : 3.2) : 1, backgroundColor: t ? RED : '#F2F2F2', boxShadow: t ? '0 0 14px rgba(255,65,40,.6)' : '0 0 0px rgba(255,65,40,0)', duration: 0.5, ease: MOTION.ease.out, overwrite: 'auto' });
      lab.textContent = label || '';
      gsap.to(lab, { opacity: label ? 1 : 0, duration: 0.25, overwrite: 'auto' });
    };
    document.addEventListener('pointermove', this.onMove, { passive: true });
    document.addEventListener('pointerover', this.onOver, { passive: true });
  }

  // ═══ GLITCH + SCRAMBLE ═══
  setupFxHover() {
    this.onFxOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement;
      if (!this.fxOn() || !el.closest) return;
      const s = el.closest('[data-scramble]'); if (s) this.scramble(s);
      const gl = el.closest('[data-glitch]');
      if (gl && gl !== this.lastGlitch) { this.lastGlitch = gl; this.glitch(gl); }
      if (!gl) this.lastGlitch = null;
    };
    document.addEventListener('pointerover', this.onFxOver, { passive: true });
  }
  scramble(el: any) {
    if (!this.fxOn() || el._scr) return;
    const node = [...el.childNodes].find((n: any) => n.nodeType === 3 && n.nodeValue.trim()) as Text | undefined;
    if (!node) return;
    const orig = node.nodeValue || '';
    el._scr = true;
    let f = 0; const total = 12;
    const step = () => {
      if (!this.alive) return;
      f++;
      const p = f / total;
      node.nodeValue = orig.split('').map((ch, i) => (ch === ' ' || i / orig.length < p ? ch : SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0])).join('');
      if (f < total) setTimeout(step, 30); else { node.nodeValue = orig; el._scr = false; }
    };
    step();
  }
  glitch(el: any) {
    if (el._gl) return;
    el._gl = true;
    const R = gsap.utils.random, k = Math.max(0.4, this.kNow()), mag = el.hasAttribute('data-magnetic');
    const tl = gsap.timeline({ onComplete: () => { gsap.set(el, { clearProps: 'filter' }); el._gl = false; } });
    for (let i = 0; i < 3; i++) {
      const o = R(3, 8) * k * CRT.aberration;
      const v: any = { filter: `drop-shadow(${(-o).toFixed(1)}px 0 0 rgba(225,48,28,.85)) drop-shadow(${(o * 0.7).toFixed(1)}px 0 0 rgba(242,242,242,.35))` };
      if (!mag) v.x = R(-4, 4) * k;
      tl.set(el, v, i * 0.05);
    }
    tl.set(el, mag ? { filter: 'none' } : { filter: 'none', x: 0 }, 0.16);
  }
  scheduleBurst() {
    const [a, b] = CRT.burstEvery;
    this.burstT = setTimeout(() => { if (!this.alive) return; this.burst(); this.scheduleBurst(); }, (a + Math.random() * (b - a)) * 1000);
  }
  burst() {
    if (!this.fxOn() || document.hidden || !this.introDone) return;
    const R = gsap.utils.random, k = Math.max(0.4, this.kNow());
    const targets = [this.$('logo')];
    if ((this.heroP || 0) < 0.3) targets.push(this.$('title'));
    targets.forEach((el) => {
      if (!el) return;
      const tl = gsap.timeline();
      for (let i = 0; i < 5; i++) {
        tl.set(el, {
          clipPath: i % 2 === 0 ? `inset(${R(0, 40).toFixed(0)}% 0% ${R(0, 40).toFixed(0)}% 0%)` : 'inset(0% 0% 0% 0%)',
          x: R(-6, 6) * k,
          filter: `drop-shadow(${R(-10, -4).toFixed(1)}px 0 0 rgba(225,48,28,.9)) drop-shadow(${R(3, 7).toFixed(1)}px 0 0 rgba(242,242,242,.4))`,
        }, i * 0.045);
      }
      tl.set(el, { clearProps: 'clipPath,filter', x: 0 }, 0.24);
    });
  }

  // ═══ WEBGL: global CRT overlay + hero signal shader ═══
  makeGL(canvas: HTMLCanvasElement | null, fs: string) {
    if (!canvas) return null;
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!gl) return null;
    const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; };
    const vs = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, fs);
    if (!vs || !f) return null;
    const p = gl.createProgram()!; gl.attachShader(p, vs); gl.attachShader(p, f); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
    gl.useProgram(p);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(p, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const cache: Record<string, WebGLUniformLocation | null> = {};
    const U = (k: string) => (k in cache ? cache[k] : (cache[k] = gl.getUniformLocation(p, k)));
    return { gl, U, canvas, scale: 1, ready: false, aspI: 1 };
  }
  sizeGL(o: any, scale: number) {
    const w = Math.max(2, Math.round(o.canvas.clientWidth * scale)), h = Math.max(2, Math.round(o.canvas.clientHeight * scale));
    if (o.canvas.width !== w || o.canvas.height !== h) { o.canvas.width = w; o.canvas.height = h; o.gl.viewport(0, 0, w, h); }
  }
  setupGL() {
    this.crt = this.makeGL(this.$('crtgl'), FS_CRT);
    if (this.crt) this.crt.scale = CRT.overlayRes * (this.state.mobile ? 0.8 : 1);
    this.hero = this.makeGL(this.$('herogl'), FS_HERO);
    if (!this.hero) return;
    this.hero.scale = Math.min(1.5, window.devicePixelRatio || 1) * (this.state.mobile ? 0.75 : 0.9);
    const img = new Image();
    img.onload = () => {
      const gl = this.hero.gl, tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach((p: number) => gl.texParameteri(gl.TEXTURE_2D, p, gl.CLAMP_TO_EDGE));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this.hero.aspI = img.width / img.height; this.hero.ready = true;
    };
    img.src = site.hero.image;
  }
  computeBounds() {
    if (!this.alive) return;
    const secs = [...this.root.querySelectorAll('[data-sec]')] as HTMLElement[];
    this.bounds = secs.slice(1).map((el, i) => ({ y: el.getBoundingClientRect().top + window.scrollY, type: i % 3, out: secs[i], inc: el }));
  }

  // ═══ MAIN LOOP: overlay, hero shader, oscilloscope, transitions, EQ, reel, mascot
  frame = (now: number) => {
    if (!this.alive) return;
    this.raf = requestAnimationFrame(this.frame);
    const dt = Math.min(0.1, (now - this.last) / 1000); this.last = now;
    const t = this.reduced ? 1.3 : (now - this.t0) / 1000;
    const k = this.kNow(), fx = this.fxOn(), mobile = this.state.mobile;
    const sy = window.scrollY, vh = window.innerHeight;
    const raw = this.lenis ? Math.abs(this.lenis.velocity || 0) : Math.abs(sy - this.lastY);
    this.lastY = sy;
    this.vel += (Math.min(1, raw / 40) * CRT.scrollReact - this.vel) * 0.08;
    const vel = fx ? this.vel : 0;

    // adaptive quality: drop canvas resolution if we can't hold ~40fps
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsN >= 90) {
      if (!this.degraded && this.fpsAcc / this.fpsN > 0.024) { this.degraded = true; if (this.crt) this.crt.scale *= 0.7; if (this.hero) this.hero.scale *= 0.7; }
      this.fpsAcc = 0; this.fpsN = 0;
    }

    // rare micro-flicker
    if (fx && this.flickT <= 0 && Math.random() < dt * CRT.flicker * 0.12) this.flickT = 0.14;
    if (this.flickT > 0) { this.flickT -= dt; this.flick = (Math.random() < 0.5 ? 0.07 : 0.02) * k; } else this.flick = 0;

    // section transitions: strongest boundary near viewport centre
    let best: any = null, bestI = 0;
    if (fx && this.bounds && CRT.transitions > 0) {
      for (const b of this.bounds) {
        const s = (b.y - sy) / vh, d = Math.abs(s - 0.5);
        if (d > 0.34) continue;
        const I = Math.pow(1 - sstep(0, 0.34, d), 1.4) * (0.28 + 0.72 * Math.min(1, this.vel * 2.6)) * CRT.transitions * k;
        if (I > bestI) { bestI = I; best = { ...b, s }; }
      }
    }
    if (this.shaken && (!best || this.shaken.b !== best.y)) { this.shaken.els.forEach((el: HTMLElement) => { el.style.transform = ''; }); this.shaken = null; }
    if (best && bestI > 0.01 && CRT.domShake > 0 && !mobile) {
      const amp = bestI * 9 * CRT.domShake;
      const x = Math.sin(t * 37) * amp + (Math.random() < 0.08 ? (Math.random() - 0.5) * amp * 2 : 0);
      best.out.style.transform = `translate3d(${x.toFixed(2)}px,0,0) skewX(${(Math.sin(t * 11) * bestI * 1.2).toFixed(3)}deg)`;
      best.inc.style.transform = `translate3d(${(-x * 0.6).toFixed(2)}px,0,0)`;
      this.shaken = { b: best.y, els: [best.out, best.inc] };
    }

    // global overlay
    if (this.crt) {
      const o = this.crt, gl = o.gl, U = o.U;
      this.sizeGL(o, o.scale);
      if (k <= 0.005) { if (!this.crtCleared) { gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); this.crtCleared = true; } }
      else {
        this.crtCleared = false;
        gl.uniform2f(U('uRes'), o.canvas.width, o.canvas.height);
        gl.uniform1f(U('uTime'), t);
        gl.uniform1f(U('uGrain'), CRT.grain * k * (1 + vel * 0.6));
        gl.uniform1f(U('uVig'), Math.min(1, CRT.vignette * k));
        gl.uniform1f(U('uCurve'), CRT.curvature * Math.min(1, k + 0.3));
        gl.uniform1f(U('uGlow'), CRT.glow * k);
        gl.uniform1f(U('uFlick'), this.reduced ? 0 : this.flick);
        gl.uniform1f(U('uRoll'), fx ? CRT.roll * k : 0);
        gl.uniform3f(U('uB'), best ? best.s : 0, best ? Math.min(1, bestI) : 0, best ? best.type : 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    this.moveMascot(dt);
    this.moveReel(dt);

    // hero (only while on screen)
    const hero = this.$('hero');
    if (!hero || hero.getBoundingClientRect().bottom <= 0) return this.jitterBars(t, vel);
    if (this.hero && this.hero.ready) {
      const o = this.hero, gl = o.gl, U = o.U;
      this.sizeGL(o, o.scale);
      const lv = CRT.levels[this.state.level];
      gl.uniform2f(U('uRes'), o.canvas.width, o.canvas.height);
      gl.uniform1f(U('uAspI'), o.aspI);
      gl.uniform1f(U('uTime'), t);
      gl.uniform1f(U('uWarp'), Math.min(1, Math.max(this.heroWarp * Math.max(0.35, lv), this.heroIntroWarp) * (0.85 + vel * 0.4)));
      gl.uniform1f(U('uAb'), CRT.aberration * Math.max(0.2, k));
      gl.uniform1f(U('uVel'), vel);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    this.drawWave(t, k, vel);
  };

  // ═══ LIL BENJI: top-right menu button. Walks in place while you scroll, smiles when you stop.
  mascotIn() {
    const m = this.$('mascot'); if (!m || this.mOn) return;
    this.mOn = true; this.mStill = 0; this.mWalk = 0;
    const op = site.mascot.opacity;
    if (this.reduced) { m.style.opacity = String(op); this.setFrame('smile'); return; }
    gsap.fromTo(m, { opacity: 0 }, { opacity: op, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo(this.$('mascotBody'), { y: -40 }, { y: 0, duration: 0.9, ease: 'back.out(1.8)', onComplete: () => { setTimeout(() => { if (!this.state.menuOpen) this.say(site.mascot.hint, 3000); }, 500); } });
  }
  setFrame(key: string) {
    if (this.mFrame === key) return;
    const box = this.$('mascotImg'); if (!box) return;
    box.querySelectorAll('[data-frame]').forEach((f: HTMLElement) => { f.style.visibility = f.dataset.frame === key ? 'visible' : 'hidden'; });
    this.mFrame = key;
  }
  moveMascot(dt: number) {
    const m = this.$('mascot'); if (!m || !this.mOn) return;
    const hide = !!this.state.lb;
    if (hide !== this.mHidden) { this.mHidden = hide; m.style.visibility = hide ? 'hidden' : 'visible'; }
    if (this.reduced) return;
    const MS = site.mascot;
    const walking = !this.state.menuOpen && this.vel > 0.04;
    if (walking) { this.mStill = 0; this.mWalk += dt * (6 + this.vel * 10); this.setFrame(MS.walkCycle[Math.floor(this.mWalk) % MS.walkCycle.length]); }
    else { this.mStill += dt; this.setFrame(this.state.menuOpen || this.mStill > MS.smileAfter ? 'smile' : 'idle'); }
    const img = this.$('mascotImg');
    if (img && !this.mBusy) img.style.transform = `translateY(${walking && this.mFrame === 'idle' ? -2 : 0}px) scaleX(-1)`;
  }
  hop() {
    const img = this.$('mascotImg'); if (this.reduced || !img) return;
    this.mBusy = true;
    gsap.timeline({ onComplete: () => { this.mBusy = false; } })
      .add(() => this.setFrame('smile'))
      .to(img, { y: -10, scaleX: -0.94, scaleY: 1.06, duration: 0.14, ease: 'power2.out' })
      .to(img, { y: 0, scaleX: -1.06, scaleY: 0.92, duration: 0.12, ease: 'power2.in' })
      .to(img, { scaleX: -1, scaleY: 1, duration: 0.22, ease: 'back.out(3)' });
    const b = this.$('bubble'); if (b) gsap.to(b, { opacity: 0, duration: 0.2 });
  }
  say(text: string, ms = 2600) {
    const b = this.$('bubble'); if (!b) return;
    b.textContent = text;
    clearTimeout(this.sayT);
    if (!this.reduced) gsap.fromTo(b, { opacity: 0, y: 8, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(2)', overwrite: true });
    else b.style.opacity = '1';
    this.sayT = setTimeout(() => { if (!this.reduced) gsap.to(b, { opacity: 0, y: -6, duration: 0.3 }); else b.style.opacity = '0'; }, ms);
    if (this.fxOn()) this.scramble(b);
  }

  // ═══ FEATURED TRACK PLAYER (30s Spotify preview)
  togglePlay() {
    const m = site.dj.mix;
    if (!this.audio) {
      this.audio = new Audio(m.preview);
      this.audio.preload = 'none';
      this.audio.addEventListener('ended', () => { this.audio.currentTime = 0; this.setState({ playing: false }); this.paintProgress(0); });
      this.audio.addEventListener('error', () => { this.setState({ playing: false }); window.open(m.url, '_blank', 'noopener'); });
      this.audio.addEventListener('timeupdate', () => {
        const a = this.audio, p = a.duration ? a.currentTime / a.duration : 0;
        const el = this.$('mixTime'); if (el) el.textContent = this.fmtTime(a.currentTime) + ' / ' + this.fmtTime(a.duration || 30) + ' · Preview';
        if (this.reduced || !this.barsReady) this.paintProgress(p);
      });
    }
    if (this.state.playing) { this.audio.pause(); this.setState({ playing: false }); }
    else this.audio.play().then(() => this.setState({ playing: true })).catch(() => window.open(m.url, '_blank', 'noopener'));
  }
  fmtTime(s: number) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  paintProgress(p: number) {
    const bars = this.bars || [], n = bars.length;
    bars.forEach((b: HTMLElement, i: number) => {
      const on = (i + 0.5) / n <= p;
      b.style.background = on ? RED : 'rgba(242,242,242,.38)';
      b.style.boxShadow = on ? '0 0 6px rgba(255,65,40,.55)' : '0 0 4px rgba(242,242,242,.18)';
    });
  }

  // ═══ SHORTS: endless reel + 3D ring spin on click
  setReelPaused(v: boolean) { this.reelPaused = v; }
  openShort(i: number) {
    if (this.reduced || this.state.ring != null) return this.openLb('clip', i);
    this.setState({ ring: i }, () => setTimeout(() => this.spinRing(), 0));
  }
  spinRing() {
    const wrap = this.$('ringWrap'), ring = this.$('ring'), i = this.state.ring;
    if (!wrap || !ring) { if ((this.ringTries = (this.ringTries || 0) + 1) < 30 && i != null) setTimeout(() => this.spinRing(), 30); else this.ringTries = 0; return; }
        this.ringTries = 0;
    if (i == null) return;
    
    const n = site.beatbox.clips.length, end = (-i * 360) / n;
    this.lenis && this.lenis.stop();
    if (this.ringTl) return;
    this.ringTl = gsap.timeline({ onComplete: () => { this.ringTl = null; if (this.state.ring === i) this.openLb('clip', i); } })
      .to(wrap, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0)
      .fromTo(ring, { rotateX: 72, rotateY: end + 540, scale: 0.35, z: -400 }, { rotateX: -6, rotateY: end + 90, scale: 1, z: 0, duration: 1.1, ease: 'power3.out' }, 0)
      .to(ring, { rotateY: end, rotateX: 0, duration: 0.8, ease: 'back.out(1.4)' }, 1.0)
      .to(ring, { scale: 1.6, z: 260, duration: 0.45, ease: 'power3.in' }, 1.85);
  }
  closeRing() {
    const wrap = this.$('ringWrap');
    if (this.ringTl) { this.ringTl.kill(); this.ringTl = null; }
    if (!this.state.lb && this.lenis) this.lenis.start();
    if (!wrap) return this.setState({ ring: null });
    gsap.to(wrap, { opacity: 0, duration: 0.35, onComplete: () => this.setState({ ring: null }) });
  }
  moveReel(dt: number) {
    const tr = this.$('reelTrack'); if (!tr || this.reduced) return;
    const r = this.$('reel').getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const half = tr.scrollWidth / 2; if (!half) return;
    this.reelSp = (this.reelSp ?? 1) + ((this.reelPaused ? 0 : 1) - (this.reelSp ?? 1)) * Math.min(1, dt * 4);
    this.reelX = ((this.reelX || 0) - dt * (46 + this.vel * 260) * this.reelSp) % half;
    tr.style.transform = `translate3d(${this.reelX.toFixed(2)}px,0,0)`;
  }

  jitterBars(t: number, vel: number) {
    if (!this.barsReady || !this.bars || !this.bars.length || this.reduced) return;
    const mix = this.$('mix'); if (!mix) return;
    const a = this.audio, live = a && !a.paused;
    if (a && a.currentTime > 0) this.paintProgress(a.duration ? a.currentTime / a.duration : 0);
    const r = mix.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const k = Math.max(0.3, this.kNow());
    const beat = Math.exp(-((t % 0.46875) / 0.46875) * 4);
    this.bars.forEach((b: HTMLElement, i: number) => {
      const s = (live ? 0.62 + 0.38 * Math.abs(Math.sin(t * 9 + i * 1.7)) * (0.5 + beat) : 0.78) + 0.14 * Math.sin(t * 7 + i * 0.6) * k + 0.1 * beat + (Math.random() - 0.5) * 0.08 * k + vel * 0.35 * Math.sin(i * 1.3 + t * 20);
      b.style.transform = `scaleY(${Math.max(0.08, Math.min(1.35, s)).toFixed(3)})`;
    });
  }

  setupWave() {
    const cv = this.$('wave'); if (!cv) return;
    this.wctx = cv.getContext('2d');
    this.onResize = () => { const d = Math.min(2, window.devicePixelRatio || 1); cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d; this.dpr = d; };
    this.onResize(); window.addEventListener('resize', this.onResize);
  }
  drawWave(t: number, k: number, vel: number) {
    const cv = this.$('wave'), ctx = this.wctx; if (!cv || !ctx) return;
    const w = cv.width, h = cv.height, d = this.dpr || 1, mid = h / 2;
    ctx.clearRect(0, 0, w, h);
    if (this.waveIn <= 0.001) return;
    const env = Math.exp(-((t % 0.46875) / 0.46875) * 5);
    const amp = h * 0.2 * (0.35 + env * 0.65) * Math.min(this.waveAmp + vel * 1.5, 4) * this.waveIn;
    const jit = this.reduced ? 0 : 1.6 * d * Math.max(0.2, k);
    const trace = (off: number, col: string, lw: number, blur: number) => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3 * d) {
        const u = x / w, taper = Math.pow(Math.sin(u * Math.PI), 0.7) * Math.min(1, this.waveIn * 1.4);
        const y = mid + amp * taper * (Math.sin(u * 22 + t * 6 + off) * 0.55 + Math.sin(u * 61 - t * 11) * 0.28 * env + Math.sin(u * 7 + t * 2) * 0.22) + (Math.random() - 0.5) * jit;
        if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.strokeStyle = col; ctx.lineWidth = lw * d; ctx.shadowColor = HOT; ctx.shadowBlur = blur * d; ctx.stroke();
    };
    trace(0.9, 'rgba(242,242,242,.22)', 1, 0);
    trace(0, RED, 2, 10 + 10 * Math.min(1, k));
  }

  // ═══ DIALOGS
  focusDialog(kind: 'lb' | 'menu') {
    if (!this.returnFocus) this.returnFocus = document.activeElement;
    let tries = 0;
    const go = () => {
      const box = this.$(kind);
      if (!box) { if (tries++ < 40) setTimeout(go, 25); return; }
      const t = kind === 'lb' ? box.querySelector('button') : box.querySelector('a[href]');
      if (t) t.focus({ preventScroll: true });
    };
    setTimeout(go, 0);
  }
  toggleMenu() { if (!this.state.menuOpen) this.focusDialog('menu'); this.hop(); this.setState((s: SiteState) => ({ menuOpen: !s.menuOpen })); }
  openLb(type: 'image' | 'clip' | 'featured', i: number) { this.focusDialog('lb'); this.setState({ lb: { type, i } }); }
  closeLb() { this.setState({ lb: null }); }
  stepLb(d: number) { const n = site.gallery.items.length; this.setState((s: SiteState) => ({ lb: { type: 'image', i: ((s.lb?.i ?? 0) + d + n) % n } })); }
}
