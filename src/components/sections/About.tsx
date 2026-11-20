import { site } from '@/data/content';
import { words } from '@/lib/text';
import SplitHeading from '@/components/ui/SplitHeading';
import WordPara from '@/components/ui/WordPara';

const GRID = 'grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(36px,6vw,96px)]';

// ═══ 02 ABOUT — bio, pull quote, and his statement with accent typefaces
export default function About() {
  const a = site.about;
  const quote = [
    ...words('“' + a.quote.before + ' ').filter(Boolean).map((w) => ({ w, hl: false })),
    { w: a.quote.highlight, hl: true },
    { w: a.quote.after + '”', hl: false },
  ];
  const accent = (pi: number) => (w: string) =>
    pi === a.statement.length - 1 ? a.statementLastLine : a.statementAccents[w.toLowerCase().replace(/[^a-z]/g, '')];

  return (
    <section id="about" data-sec="" className="border-t border-line px-[var(--gutter)] py-[var(--section-y)]">
      <div className="mx-auto grid max-w-[var(--max)] gap-[clamp(48px,7vw,104px)]">
        <header><SplitHeading text={a.heading} /></header>

        <div className={`${GRID} items-start`}>
          <figure data-mask="" data-glitch="" className="relative m-0 aspect-[4/5] overflow-hidden bg-ink-2">
            <img data-par="" src={a.image} alt={a.imageAlt} loading="lazy" decoding="async" className="absolute left-0 top-[-7%] block h-[114%] w-full object-cover" style={{ objectPosition: '40% 30%', filter: 'grayscale(1) contrast(1.2)' }} />
            <figcaption className="absolute bottom-3.5 left-3.5 bg-ink px-2.5 py-[7px] font-mono text-[11px] uppercase tracking-[.18em]">{a.caption}</figcaption>
          </figure>
          <div className="grid gap-[clamp(28px,4vw,44px)]">
            <blockquote data-bb="quote" className="m-0 font-display text-[clamp(28px,3.6vw,56px)] font-bold leading-[1.04] tracking-[-.03em]">
              {quote.map((q, i) =>
                q.hl ? <span key={i} data-qhl="" className="inline-block whitespace-pre text-signal">{q.w}</span>
                     : <span key={i} data-qw="" className="inline-block whitespace-pre">{q.w}</span>,
              )}
            </blockquote>
            <div className="grid max-w-[600px] gap-[18px]">
              {a.bio.map((p) => <WordPara key={p} text={p} className="text-[clamp(16px,1.25vw,19px)] leading-[1.6] text-paper-dim" />)}
            </div>
          </div>
        </div>

        {/* Statement: text left, photo right */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(36px,6vw,96px)] border-t border-line pt-[clamp(36px,5vw,64px)]">
          <div className="grid min-w-0 max-w-[720px] gap-[clamp(20px,2.4vw,32px)]">
            {a.statement.map((p, pi) => (
              <WordPara key={p} text={p} accent={accent(pi)} className="text-pretty text-[clamp(19px,1.9vw,28px)] font-medium leading-[1.5] tracking-[-.01em]" />
            ))}
            <span data-reveal="" className="font-mono text-xs uppercase tracking-[.18em] text-signal">{a.signature}</span>
          </div>
          <figure data-mask="" data-glitch="" className="relative m-0 aspect-[4/5] overflow-hidden bg-ink-2">
            <img data-par="" src={a.statementImage} alt={a.statementImageAlt} loading="lazy" decoding="async" className="absolute left-0 top-[-7%] block h-[114%] w-full object-cover" style={{ filter: 'grayscale(1) brightness(1.15) contrast(1.1)' }} />
          </figure>
        </div>
      </div>
    </section>
  );
}
