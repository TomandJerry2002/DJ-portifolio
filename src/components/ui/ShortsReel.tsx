import { site, ytThumb } from '@/data/content';
import type { Actions } from '@/lib/state';
import PlayIcon from './PlayIcon';

// Endless horizontal film strip of Shorts. The list is rendered twice so the engine can loop it seamlessly.
// Click → engine spins all cards into a 3D ring, then opens the video.
export default function ShortsReel({ act }: { act: Actions }) {
  const clips = site.beatbox.clips;
  return (
    <div
      data-bb="reel" data-reveal=""
      onPointerEnter={() => act.setReelPaused(true)} onPointerLeave={() => act.setReelPaused(false)}
      onFocus={() => act.setReelPaused(true)} onBlur={() => act.setReelPaused(false)}
      className="relative mt-6 overflow-hidden border-y border-line py-3.5"
    >
      <div data-bb="reelTrack" className="flex w-max gap-[clamp(10px,1.4vw,18px)] will-change-transform">
        {[0, 1].flatMap((dupe) => clips.map((c, i) => (
          <button key={`${dupe}-${i}`} data-glitch="" data-cursor="Play" onClick={() => act.openShort(i)} aria-label={`Play ${c.title}`} aria-hidden={dupe ? true : undefined} tabIndex={dupe ? -1 : 0}
            className="group relative block aspect-[9/16] w-[clamp(140px,15vw,210px)] flex-none cursor-pointer overflow-hidden border-0 bg-ink-2 p-0">
            <img src={ytThumb(c.youtubeId)} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ filter: 'grayscale(1) contrast(1.25) brightness(.7)' }} />
            <span className="absolute inset-0 bg-signal opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-50" />
            <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-paper"><PlayIcon size={12} /></span>
            <span className="pointer-events-none absolute bottom-2.5 left-2.5 font-mono text-[10px] uppercase tracking-[.16em]">{c.title}</span>
          </button>
        )))}
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(90deg,#0A0A0A 0%,rgba(10,10,10,0) 8%,rgba(10,10,10,0) 92%,#0A0A0A 100%)' }} />
    </div>
  );
}
