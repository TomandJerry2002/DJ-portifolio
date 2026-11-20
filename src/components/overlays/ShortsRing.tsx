import { site, ytThumb } from '@/data/content';
import { RED } from '@/config/crt';
import type { Actions, SiteState } from '@/lib/state';

const ringW = () => Math.round(Math.min(160, window.innerWidth * 0.22, window.innerHeight * 0.26));

// 3D ring of Shorts that spins before a Short opens (engine animates [data-bb="ring"])
export default function ShortsRing({ state, act }: { state: SiteState; act: Actions }) {
  if (state.ring == null) return null;
  const clips = site.beatbox.clips, n = clips.length, w = ringW();
  const r = Math.round((w / 2) / Math.tan(Math.PI / n) * 1.12);
  return (
    <div data-bb="ringWrap" aria-hidden="true" onClick={act.closeRing} className="fixed inset-0 z-[104] grid place-items-center overflow-hidden bg-ink/95 opacity-0 [perspective:1100px]">
      <div data-bb="ring" className="relative aspect-[9/16] will-change-transform [transform-style:preserve-3d]" style={{ width: w }}>
        {clips.map((c, i) => {
          const on = state.ring === i;
          return (
            <div key={c.youtubeId} className="absolute inset-0 overflow-hidden bg-ink-2 [backface-visibility:hidden]"
              style={{ transform: `rotateY(${((i * 360) / n).toFixed(2)}deg) translateZ(${r}px)`, outline: `1px solid ${on ? RED : 'rgba(242,242,242,.12)'}`, boxShadow: on ? '0 0 28px rgba(255,65,40,.55)' : 'none' }}>
              <img src={ytThumb(c.youtubeId)} alt="" className="block h-full w-full object-cover" style={{ filter: 'grayscale(1) contrast(1.25) brightness(.75)' }} />
              <span className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[.16em] text-paper">{c.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
