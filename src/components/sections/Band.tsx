import { site } from '@/data/content';

const ROW = 'flex w-max gap-[.4em] whitespace-nowrap font-display text-[clamp(56px,11vw,190px)] font-black uppercase leading-[.92] tracking-[-.045em]';

// Kinetic band: two oversized rows that slide in opposite directions with scroll
export default function Band() {
  const items = [...site.band, ...site.band, ...site.band];
  return (
    <section aria-hidden="true" data-sec="" className="grid gap-[clamp(4px,1vw,12px)] overflow-hidden border-t border-line py-[clamp(40px,6vw,88px)]">
      <div data-band-row="" className={`${ROW} [text-shadow:var(--rgb)]`}>
        {items.map((b, i) => <span key={i}>{b}</span>)}
      </div>
      <div data-band-row="" className={`${ROW} text-transparent [-webkit-text-stroke:1.5px_var(--paper)]`}>
        {items.map((b, i) => <span key={i}>{b}</span>)}
      </div>
    </section>
  );
}
