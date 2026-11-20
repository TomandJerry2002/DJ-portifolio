import { site } from '@/data/content';
import { pad2 } from '@/lib/text';
import type { Actions, SiteState } from '@/lib/state';

const BTN = 'h-12 w-12 cursor-pointer border border-line bg-transparent font-mono text-base hover:border-signal hover:text-signal';

// Photo / video lightbox. Videos play as YouTube embeds (vertical for Shorts).
export default function Lightbox({ state, act }: { state: SiteState; act: Actions }) {
  const lb = state.lb;
  if (!lb) return null;
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const isImage = lb.type === 'image';
  const clips = site.beatbox.clips;
  const img = isImage ? site.gallery.items[lb.i] : null;
  const vid = lb.type === 'clip' ? clips[lb.i] : site.beatbox.featured;
  const vertical = lb.type === 'clip';
  const title = isImage ? img!.alt : vid.title;
  const counter = isImage ? `${pad2(lb.i + 1)} / ${pad2(site.gallery.items.length)}` : vertical ? `Short ${pad2(lb.i + 1)} / ${pad2(clips.length)}` : 'Featured';

  return (
    <div data-bb="lb" role="dialog" aria-modal="true" aria-label={title} onClick={act.closeLb} className="fixed inset-0 z-[105] grid grid-rows-[auto_minmax(0,1fr)_auto] bg-ink/[.97] p-[clamp(14px,2.5vw,32px)]">
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[.18em]">
        <span className="text-signal">{counter}</span>
        <button data-glitch="" onClick={act.closeLb} className="min-h-12 cursor-pointer border-0 bg-transparent px-1 font-mono text-[11px] uppercase tracking-[.18em] hover:text-signal">Close ✕</button>
      </div>
      <div data-bb="lbbody" className="grid min-h-0 place-items-center py-3">
        {isImage ? (
          <img onClick={stop} src={img!.src} alt={img!.alt} className="block max-h-full max-w-full object-contain" style={{ filter: 'grayscale(1) brightness(1.2) contrast(1.05)' }} />
        ) : (
          <iframe onClick={stop} src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1&rel=0`} title={vid.title}
            allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="border-0 bg-black"
            style={{ width: vertical ? 'min(100%,calc((100vh - 200px)*9/16))' : 'min(100%,calc((100vh - 200px)*16/9))', aspectRatio: vertical ? '9/16' : '16/9', filter: 'grayscale(1) contrast(1.15)' }} />
        )}
      </div>
      <div className="flex min-h-12 items-center justify-between gap-4">
        <span className="min-w-0 truncate text-[15px] text-paper-dim">{isImage ? img!.alt : site.beatbox.heading}</span>
        {isImage && (
          <div className="flex gap-2">
            <button data-glitch="" onClick={(e) => { stop(e); act.stepLb(-1); }} aria-label="Previous photo" className={BTN}>←</button>
            <button data-glitch="" onClick={(e) => { stop(e); act.stepLb(1); }} aria-label="Next photo" className={BTN}>→</button>
          </div>
        )}
      </div>
    </div>
  );
}
