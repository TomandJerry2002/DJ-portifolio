import { site } from '@/data/content';
import type { Actions, SiteState } from '@/lib/state';

// Lil Benji — pixel mascot in the top-right that IS the menu button (engine: moveMascot / hop)
export default function Mascot({ state, act }: { state: SiteState; act: Actions }) {
  const m = site.mascot;
  return (
    <div data-bb="mascot" className="pointer-events-none fixed right-[var(--gutter)] top-[clamp(6px,1.4vh,14px)] z-[95] opacity-0 will-change-transform">
      <div data-bb="bubble" role="status" aria-live="polite" className="absolute right-0 top-[calc(100%+10px)] whitespace-nowrap bg-paper px-2.5 py-[7px] font-mono text-[11px] font-medium uppercase tracking-[.12em] text-ink opacity-0 shadow-[3px_3px_0_#E1301C]" />
      <div data-bb="mascotBody" className="will-change-transform">
        <button data-bb="mascotBtn" data-cursor={state.menuOpen ? 'Close' : 'Menu'} onClick={(e) => { e.stopPropagation(); act.toggleMenu(); }}
          aria-label={state.menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={state.menuOpen} aria-haspopup="dialog"
          className="pointer-events-auto block min-h-[44px] min-w-[44px] cursor-pointer border-0 bg-transparent p-0">
          <span data-bb="mascotImg" className="relative block aspect-[230/365] h-[clamp(52px,7.5vh,76px)] drop-shadow-[0_0_8px_rgba(225,48,28,.25)]">
            {Object.entries(m.frames).map(([key, src]) => (
              <img key={key} data-frame={key} src={src} alt="" draggable={false} className="absolute inset-0 h-full w-full [image-rendering:pixelated]" style={{ visibility: key === 'idle' ? 'visible' : 'hidden' }} />
            ))}
          </span>
        </button>
      </div>
    </div>
  );
}
