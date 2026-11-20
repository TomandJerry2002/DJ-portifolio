// ═══════════ SITE ROOT ═══════════
// Owns UI state, renders every section, and boots the motion engine on the client.
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CRT, MQ_MOBILE } from '@/config/crt';
import { BenjiEngine } from '@/lib/engine';
import { initialState, type Actions, type Patch, type SiteState, type Store } from '@/lib/state';
import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Band from '@/components/sections/Band';
import DJ from '@/components/sections/DJ';
import Beatbox from '@/components/sections/Beatbox';
import Gallery from '@/components/sections/Gallery';
import Finale from '@/components/sections/Finale';
import Footer from '@/components/sections/Footer';
import ShortsRing from '@/components/overlays/ShortsRing';
import Lightbox from '@/components/overlays/Lightbox';
import Cursor from '@/components/fx/Cursor';
import Mascot from '@/components/fx/Mascot';
import CrtLayer from '@/components/fx/CrtLayer';

const hasWebGL = () => { try { return !!document.createElement('canvas').getContext('webgl'); } catch { return false; } };

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const engine = useRef<BenjiEngine | null>(null);
  const [state, setS] = useState<SiteState>(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;
  const prevRef = useRef(state);
  const pending = useRef<(() => void)[]>([]);

  const set = useCallback<Store['set']>((p: Patch, cb) => {
    setS((s) => ({ ...s, ...(typeof p === 'function' ? p(s) : p) }));
    if (cb) pending.current.push(cb);
  }, []);
  const store = useMemo<Store>(() => ({ get: () => stateRef.current, set }), [set]);

  // 1) read the real device environment once on the client
  useLayoutEffect(() => {
    const mobile = window.matchMedia(MQ_MOBILE).matches;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowPower = (nav.hardwareConcurrency || 8) <= 4 || (nav.deviceMemory || 8) <= 4;
    set({
      envReady: true, mobile, gl: hasWebGL(),
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      deviceScale: (mobile ? CRT.mobileScale : 1) * (lowPower ? CRT.lowPowerScale : 1),
    });
    const mq = window.matchMedia(MQ_MOBILE);
    const onMq = (e: MediaQueryListEvent) => set({ mobile: e.matches, menuOpen: false });
    mq.addEventListener('change', onMq);
    return () => mq.removeEventListener('change', onMq);
  }, [set]);

  // 2) boot the engine once the environment-specific markup has rendered
  useEffect(() => {
    if (!state.envReady || !rootRef.current || engine.current) return;
    engine.current = new BenjiEngine(rootRef.current, store);
    prevRef.current = stateRef.current;
    return () => { engine.current?.destroy(); engine.current = null; };
  }, [state.envReady, store]);

  // 3) after each render: notify the engine of state changes and flush setState callbacks
  useEffect(() => {
    if (engine.current && prevRef.current !== state) engine.current.onStateChange(prevRef.current);
    prevRef.current = state;
    const cbs = pending.current; pending.current = [];
    cbs.forEach((f) => f());
  });

  const act = useMemo<Actions>(() => ({
    toggleMenu: () => engine.current?.toggleMenu(),
    openLb: (t, i) => engine.current?.openLb(t, i),
    closeLb: () => engine.current?.closeLb(),
    stepLb: (d) => engine.current?.stepLb(d),
    openShort: (i) => engine.current?.openShort(i),
    closeRing: () => engine.current?.closeRing(),
    setReelPaused: (v) => engine.current?.setReelPaused(v),
    togglePlay: () => engine.current?.togglePlay(),
  }), []);

  return (
    <div ref={rootRef} className="relative overflow-x-clip bg-ink font-body text-paper">
      <a href="#main" className="fixed -top-16 left-3 z-[110] bg-signal px-4 py-3 font-mono text-xs uppercase tracking-[.14em] text-ink transition-[top] focus:top-3 focus:text-ink">Skip to content</a>
      <div data-bb="progress" aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[92] h-0.5 origin-left scale-x-0 bg-signal shadow-[0_0_10px_#FF4128]" />
      <Nav state={state} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero state={state} />
        <About />
        <Band />
        <DJ state={state} act={act} />
        <Beatbox state={state} act={act} />
        <Gallery act={act} />
        <Finale state={state} />
      </main>
      <Footer />
      <ShortsRing state={state} act={act} />
      <Lightbox state={state} act={act} />
      <Cursor />
      <Mascot state={state} act={act} />
      <CrtLayer state={state} />
    </div>
  );
}
