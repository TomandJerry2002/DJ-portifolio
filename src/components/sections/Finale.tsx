import { site } from '@/data/content';
import { words } from '@/lib/text';
import type { SiteState } from '@/lib/state';

// ═══ 06 FINALE — pinned CRT power-on → push-in → words fly in → power-off (desktop); one screen on mobile
export default function Finale({ state }: { state: SiteState }) {
  const f = site.finale;
  return (
    <section id="finale" data-sec="" data-bb="finale" className="relative border-t border-line bg-ink" style={{ height: state.reduced || state.mobile ? '100svh' : '300vh' }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-bb="finScreen" className="absolute inset-0 overflow-hidden will-change-[clip-path]">
          <img data-bb="finImg" src={f.image} alt={f.imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover will-change-transform" style={{ objectPosition: '62% 38%', filter: 'grayscale(1) contrast(1.25) brightness(.9)' }} />
          <div data-bb="finTint" className="absolute inset-0 bg-signal opacity-0 mix-blend-multiply" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(10,10,10,.7) 0%,rgba(10,10,10,.08) 55%,rgba(10,10,10,0)),linear-gradient(0deg,rgba(10,10,10,.85) 0%,rgba(10,10,10,0) 50%)' }} />
        </div>
        <div className="absolute inset-x-0 bottom-[clamp(64px,12vh,140px)] px-[var(--gutter)]">
          <h2 aria-label={f.text} className="m-0 max-w-[11ch] font-display text-[clamp(44px,8.6vw,164px)] font-black uppercase leading-[.88] tracking-[-.045em] [text-shadow:var(--rgb)]">
            {words(f.text).map((w, i) => <span key={i} data-fw="" aria-hidden="true" className="inline-block whitespace-pre">{w}</span>)}
          </h2>
        </div>
        <div data-bb="finFlash" aria-hidden="true" className="pointer-events-none absolute inset-0 bg-paper opacity-0" />
      </div>
    </section>
  );
}
