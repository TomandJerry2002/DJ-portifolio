import { site } from '@/data/content';
import type { Actions, SiteState } from '@/lib/state';
import SplitHeading from '@/components/ui/SplitHeading';
import WordPara from '@/components/ui/WordPara';
import PlayIcon from '@/components/ui/PlayIcon';
import ShortsReel from '@/components/ui/ShortsReel';

// ═══ 04 THE BEATBOXER — pinned featured-video zoom (desktop), credits, Shorts reel
export default function Beatbox({ state, act }: { state: SiteState; act: Actions }) {
  const b = site.beatbox;
  const lite = state.reduced || state.mobile; // no pinning on mobile / reduced motion
  return (
    <section id="beatbox" data-sec="" className="border-t border-line py-[var(--section-y)]">
      <div data-bb="bbStage" className="relative" style={{ height: lite ? 'auto' : '230vh' }}>
        <div className="top-0 grid place-items-center overflow-hidden"
          style={{ position: lite ? 'relative' : 'sticky', height: state.mobile ? 'auto' : '100svh', gap: state.mobile ? 28 : 0, paddingTop: state.mobile ? 40 : 0 }}>
          <div data-bb="bbHead" className="inset-x-0 text-center"
            style={state.mobile ? { position: 'relative' } : { position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
            <SplitHeading text={b.heading} drift={false} className="px-[var(--gutter)] text-[clamp(40px,10.5vw,200px)] !leading-[.86]" />
          </div>
          <button data-bb="bbCard" data-glitch="" data-cursor="Play" onClick={() => act.openLb('featured', 0)} aria-label="Play featured beatbox video"
            className="group relative block aspect-video cursor-pointer overflow-hidden border-0 bg-ink-2 p-0 will-change-transform"
            style={{ width: 'min(calc(100vw - 2 * var(--gutter)), calc((100vh - 140px) * 16 / 9), 1328px)' }}>
            <img src={b.featured.thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: '50% 35%', filter: 'grayscale(1) contrast(1.25) brightness(.75)' }} />
            <span className="absolute inset-0 bg-signal opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-50" />
            <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-[clamp(72px,8vw,112px)] w-[clamp(72px,8vw,112px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-paper shadow-[0_0_24px_rgba(242,242,242,.15)]"><PlayIcon size={20} /></span>
            <span className="pointer-events-none absolute bottom-[clamp(14px,2vw,28px)] left-[clamp(14px,2vw,28px)] font-mono text-[11px] uppercase tracking-[.18em]">{b.featured.title}</span>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-[clamp(48px,7vw,104px)] grid max-w-[var(--max)] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-[clamp(36px,6vw,96px)] px-[var(--gutter)]">
        <div className="grid gap-[18px]">
          {b.intro.map((p) => <WordPara key={p} text={p} className="text-[clamp(16px,1.25vw,19px)] leading-[1.6] text-paper-dim" />)}
        </div>
        <ol className="m-0 list-none border-t border-line p-0">
          {b.highlights.map((h) => (
            <li key={h.title} data-row="" className="relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-line py-5">
              <span className="font-display text-[clamp(15px,1.4vw,19px)] font-bold leading-[1.2]">{h.title}</span>
              <span className="font-mono text-[11px] uppercase tracking-[.14em] text-signal">{h.result}</span>
              <span data-rowline="" className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-signal shadow-[0_0_8px_#FF4128]" />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-[clamp(56px,7vw,104px)]"><ShortsReel act={act} /></div>
    </section>
  );
}
