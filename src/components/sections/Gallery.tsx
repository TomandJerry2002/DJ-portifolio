import { site } from '@/data/content';
import { pad2 } from '@/lib/text';
import type { Actions } from '@/lib/state';
import SplitHeading from '@/components/ui/SplitHeading';

// ═══ 05 GALLERY — masonry columns; photos shown uncropped; click opens the lightbox
export default function Gallery({ act }: { act: Actions }) {
  const g = site.gallery;
  return (
    <section id="gallery" data-sec="" className="border-t border-line px-[var(--gutter)] py-[var(--section-y)]">
      <div className="mx-auto grid max-w-[var(--max)] gap-[clamp(48px,6vw,88px)]">
        <header><SplitHeading text={g.heading} /></header>
        <div data-bb="gal" className="columns-3 gap-[clamp(12px,1.6vw,24px)] [column-width:300px]">
          {g.items.map((p, i) => (
            <button key={p.src + i} data-gitem="" data-glitch="" data-cursor="View" onClick={() => act.openLb('image', i)} aria-label={`Open photo ${i + 1}: ${p.alt}`}
              className="group relative mb-[clamp(12px,1.6vw,24px)] block w-full cursor-zoom-in overflow-hidden border-0 bg-ink-2 p-0 [break-inside:avoid]">
              <img data-gimg="" src={p.src} alt={p.alt} loading="lazy" decoding="async" className="block h-auto w-full" style={{ filter: 'grayscale(1) brightness(1.25) contrast(1.05)' }} />
              <span className="absolute inset-0 bg-signal opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-45" />
              <span className="pointer-events-none absolute bottom-2.5 left-2.5 bg-ink px-[7px] py-[5px] font-mono text-[10px] tracking-[.16em] text-paper">{pad2(i + 1)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
