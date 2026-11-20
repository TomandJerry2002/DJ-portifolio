import { site } from '@/data/content';
import { RED } from '@/config/crt';
import type { Actions, SiteState } from '@/lib/state';
import SplitHeading from '@/components/ui/SplitHeading';

// static bar heights for the EQ (engine animates scaleY)
const BARS = Array.from({ length: 64 }, (_, i) => {
  const v = 0.18 + 0.82 * Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11 + 1) + 0.25 * Math.sin(i * 1.7));
  const red = i < 22;
  return { h: `${Math.min(100, v * 100).toFixed(0)}%`, c: red ? RED : 'rgba(242,242,242,.38)', glow: red ? '0 0 6px rgba(255,65,40,.55)' : '0 0 4px rgba(242,242,242,.18)' };
});

// ═══ 03 THE DJ — hype shout, genres, featured-track player
export default function DJ({ state, act }: { state: SiteState; act: Actions }) {
  const d = site.dj, m = d.mix;
  return (
    <section id="dj" data-sec="" className="border-t border-line px-[var(--gutter)] py-[var(--section-y)]">
      <div className="mx-auto grid max-w-[var(--max)] gap-[clamp(48px,7vw,104px)]">
        <header><SplitHeading text={d.heading} /></header>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(36px,6vw,96px)]">
          <div className="grid min-w-0 content-start gap-[clamp(28px,3.5vw,40px)]">
            <div data-reveal="" className="grid min-w-0 gap-3.5 [container-type:inline-size]">
              <p data-bb="shout" aria-live="off" className="m-0 min-h-[2.7em] max-w-full text-balance break-words font-display text-[clamp(28px,9cqi,96px)] font-black uppercase leading-[.9] tracking-[-.04em] [text-shadow:var(--rgb)] will-change-transform" style={{ transformOrigin: '0 50%' }}>
                {d.shouts[0]}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {d.genres.map((g) => (
                <span key={g} data-tag="" data-glitch="" className="border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-[.12em] transition-colors hover:border-signal hover:text-signal">{g}</span>
              ))}
            </div>

            <div data-bb="mix" className="relative grid gap-[18px] overflow-hidden border border-line bg-ink-2 p-[clamp(18px,2vw,26px)]" style={{ boxShadow: 'inset 0 0 60px rgba(225,48,28,.09),0 0 40px rgba(225,48,28,.04)' }}>
              <div className="flex min-w-0 items-center gap-4">
                <button data-magnetic="" data-glitch="" data-cursor={state.playing ? 'Pause' : 'Play'} onClick={act.togglePlay} aria-label={(state.playing ? 'Pause ' : 'Play preview of ') + m.title} aria-pressed={state.playing}
                  className="grid h-14 w-14 flex-none cursor-pointer place-items-center rounded-full border-0 bg-signal p-0 shadow-[0_0_14px_rgba(255,65,40,.4)] transition-shadow hover:shadow-[0_0_28px_#FF4128]">
                  <span data-mag-inner="" className="grid place-items-center">
                    {state.playing ? (
                      <span className="flex gap-[5px]"><span className="h-[18px] w-[5px] bg-ink" /><span className="h-[18px] w-[5px] bg-ink" /></span>
                    ) : (
                      <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-ink" />
                    )}
                  </span>
                </button>
                <div className="grid min-w-0 gap-1">
                  <span className="truncate font-display text-[clamp(14px,1.3vw,17px)] font-bold">{m.title}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[.14em] text-mute">{m.artists} · {m.year}</span>
                </div>
              </div>
              <div aria-hidden="true" className="flex h-14 items-center gap-0.5">
                {BARS.map((b, i) => <span key={i} data-bar="" className="flex-1" style={{ height: b.h, background: b.c, boxShadow: b.glow }} />)}
              </div>
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[.14em] text-mute">
                <span data-bb="mixTime" className="tabular-nums">0:30 Preview · {m.length} full</span>
                <a data-scramble="" href={m.url} target="_blank" rel="noopener" className="flex min-h-[44px] items-center text-paper">{m.cta} ↗</a>
              </div>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'repeating-linear-gradient(to bottom,transparent 0 2px,rgba(0,0,0,.35) 2px 3px)' }} />
            </div>
          </div>
          <figure data-mask="" data-glitch="" className="relative m-0 aspect-[4/5] overflow-hidden bg-ink-2">
            <img data-par="" src={d.image} alt={d.imageAlt} loading="lazy" decoding="async" className="absolute left-0 top-[-7%] block h-[114%] w-full object-cover" style={{ filter: 'grayscale(1) contrast(1.15)' }} />
          </figure>
        </div>
      </div>
    </section>
  );
}
