import { site } from '@/data/content';
import { RED } from '@/config/crt';
import type { SiteState } from '@/lib/state';

// Logo bar + full-screen menu. The menu opens from Lil Benji (fx/Mascot) in the top-right.
export default function Nav({ state }: { state: SiteState }) {
  const links = site.nav.map((n) => ({ ...n, on: state.active === n.href.slice(1) }));
  return (
    <>
      <nav data-bb="nav" className="fixed inset-x-0 top-0 z-[90] opacity-0 bg-gradient-to-b from-ink/85 to-ink/0">
        <div className="mx-auto flex max-w-[var(--max)] items-center justify-between gap-6 px-[var(--gutter)] py-[clamp(14px,2.4vh,24px)]">
          <a data-bb="logo" href="#top" aria-label="Back to top" className="font-display text-[clamp(14px,1.3vw,17px)] font-black tracking-[-.02em] [text-shadow:var(--rgb)]">
            {site.artist.stageName}
          </a>
          <span aria-hidden="true" className="w-[clamp(48px,7vh,64px)]" />
        </div>
      </nav>

      {state.menuOpen && (
        <div data-bb="menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[89] grid grid-rows-[1fr_auto] bg-ink px-[var(--gutter)] pb-9 pt-24">
          <div className="grid content-center gap-1.5">
            {links.map((n) => (
              <a key={n.href} data-bb="mlink" href={n.href} className="flex items-baseline gap-4 py-2 font-display text-[clamp(34px,11vw,64px)] font-black uppercase leading-none tracking-[-.04em] [text-shadow:var(--rgb)]" style={{ color: n.on ? RED : undefined }}>
                {n.label}
              </a>
            ))}
          </div>
          <div data-bb="mlink" className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[.18em]">
            {site.socials.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener" className="flex min-h-[44px] items-center">{s.label} ↗</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
