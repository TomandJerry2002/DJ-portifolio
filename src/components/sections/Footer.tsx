import { site } from '@/data/content';
import WordPara from '@/components/ui/WordPara';

// ═══ FOOTER — collaborations note, socials, giant wordmark
export default function Footer() {
  const f = site.footer;
  return (
    <footer data-bb="foot" data-sec="" className="overflow-hidden border-t border-line px-[var(--gutter)] pb-24 pt-[clamp(72px,10vw,140px)]">
      <div className="mx-auto grid max-w-[var(--max)] gap-[clamp(56px,8vw,120px)]">
        {f.note && (
          <div className="grid max-w-[900px] gap-[18px]">
            <WordPara text={f.note} className="font-display text-[clamp(20px,2.2vw,32px)] font-normal leading-[1.3] tracking-[-.02em]" />
            {f.from && <span data-reveal="" className="font-mono text-xs uppercase tracking-[.18em] text-mute">— {f.from}</span>}
          </div>
        )}
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] border-t border-line p-0">
          {site.socials.map((s) => (
            <li key={s.url} data-reveal="" className="border-b border-line">
              <a data-glitch="" href={s.url} target="_blank" rel="noopener" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-1 py-[clamp(18px,2.2vw,28px)]">
                <span className="grid min-w-0 gap-1.5">
                  <span className="font-display text-[clamp(20px,2.2vw,30px)] font-black uppercase leading-none tracking-[-.03em]">{s.label}</span>
                  <span data-scramble="" className="truncate font-mono text-[11px] tracking-[.12em] text-mute">{s.handle}</span>
                </span>
                <span className="font-mono text-lg">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <div role="img" aria-label={site.artist.stageName} className="overflow-hidden whitespace-nowrap pb-[.08em] pt-[.04em] text-center font-display text-[clamp(32px,10.2vw,170px)] font-black leading-[.86] tracking-[-.05em] [text-shadow:var(--rgb)]">
          {site.artist.stageName.split('').map((c, i) => <span key={i} data-fchar="" aria-hidden="true" className="inline-block">{c === ' ' ? '\u00A0' : c}</span>)}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[.16em] text-mute">
          <span>{f.copyright}</span>
          <a data-magnetic="" href="#top" className="flex min-h-[44px] items-center px-1 text-paper-dim">
            <span data-mag-inner="" data-scramble="" className="inline-block">Back to top ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
