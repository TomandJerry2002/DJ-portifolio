import { words } from '@/lib/text';

// Section heading: words slide up out of a mask (engine: [data-split] / [data-hw])
export default function SplitHeading({ text, drift = true, className = '' }: { text: string; drift?: boolean; className?: string }) {
  return (
    <h2
      data-split=""
      data-drift={drift ? '' : undefined}
      aria-label={text}
      className={`m-0 font-display font-black uppercase leading-[.88] tracking-[-.045em] [text-shadow:var(--rgb)] ${className || 'text-[clamp(40px,7.5vw,120px)]'}`}
    >
      {words(text).map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-top px-[.05em] pt-[.08em] pb-[.12em] -mx-[.05em] -mt-[.08em] -mb-[.12em]">
          <span data-hw="" className="inline-block whitespace-pre">{w}</span>
        </span>
      ))}
    </h2>
  );
}
