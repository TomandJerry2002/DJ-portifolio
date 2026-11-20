import { words } from '@/lib/text';
import type { Accent } from '@/data/content';

const ACCENT: Record<Accent, string> = {
  marker: 'font-marker text-[1.3em] leading-none tracking-normal text-signal -rotate-3',
  serif: 'font-serif italic text-[1.32em] leading-none tracking-normal',
  neon: 'font-neon text-[1.12em] leading-none tracking-[.02em] [text-shadow:0_0_14px_rgba(242,242,242,.35)]',
  glitch: 'font-glitch text-[1.25em] leading-none tracking-normal text-signal',
};

// Paragraph split into words so the engine can reveal it line by line ([data-lines] / [data-lw]).
// `accent` picks an alternate typeface per word.
export default function WordPara({ text, className = '', accent }: { text: string; className?: string; accent?: (word: string) => Accent | undefined }) {
  return (
    <p data-lines="" className={`m-0 ${className}`}>
      {words(text).map((w, i) => {
        const a = accent?.(w);
        return (
          <span key={i} data-lw="" className={`inline-block whitespace-pre font-normal ${a ? ACCENT[a] : ''}`} style={a ? undefined : { fontWeight: 'inherit' }}>
            {w}
          </span>
        );
      })}
    </p>
  );
}
