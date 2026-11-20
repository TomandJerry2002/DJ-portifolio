import { site } from '@/data/content';
import type { SiteState } from '@/lib/state';

const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
const STRIPS = 12;
const GRADE = 'grayscale(1) contrast(1.3) brightness(.82)';

// ═══ 01 HERO — pinned; engine runs the power-on intro and the scroll-out signal warp
export default function Hero({ state }: { state: SiteState }) {
  const h = site.hero;
  const useGL = state.gl && !h.video;
  return (
    <section id="top" data-bb="hero" className="relative bg-ink" style={{ height: state.reduced ? '100vh' : state.mobile ? '160vh' : '280vh' }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-bb="screen" className="absolute inset-0 overflow-hidden bg-ink will-change-[clip-path]" style={{ clipPath: 'inset(50% 50% 50% 50%)' }}>
          <div data-bb="photo" className="absolute inset-0 opacity-0 will-change-transform" style={{ transformOrigin: '47% 26%' }}>
            {useGL && <canvas data-bb="herogl" role="img" aria-label={h.imageAlt} className="absolute inset-0 block h-full w-full" />}
            {!useGL && !h.video && (
              <>
                {Array.from({ length: STRIPS }, (_, i) => (
                  <div key={i} data-bb="strip" className="absolute -inset-x-[6%] -inset-y-[2%] will-change-transform" style={{ clipPath: `inset(${((i / STRIPS) * 100).toFixed(3)}% 0 ${(100 - ((i + 1) / STRIPS) * 100 - 0.01).toFixed(3)}% 0)` }}>
                    <img src={h.image} alt={i === 0 ? h.imageAlt : ''} className="block h-full w-full object-cover" style={{ objectPosition: '45% 32%', filter: GRADE }} fetchPriority="high" />
                  </div>
                ))}
                <div data-bb="ghost" className="absolute -inset-x-[6%] -inset-y-[2%] bg-signal opacity-0 mix-blend-screen">
                  <img src={h.image} alt="" className="block h-full w-full object-cover mix-blend-multiply" style={{ objectPosition: '45% 32%', filter: 'grayscale(1) contrast(1.6)' }} />
                </div>
              </>
            )}
            {h.video && <video src={h.video} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" style={{ filter: GRADE }} />}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(10,10,10,.35) 0%,rgba(10,10,10,0) 30%,rgba(10,10,10,.25) 55%,rgba(10,10,10,.92) 100%)' }} />
          </div>
          <div data-bb="static" className="absolute -inset-1/2 opacity-0 mix-blend-screen" style={{ backgroundImage: NOISE }} />
          <canvas data-bb="wave" aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[34%] h-[32%] w-full opacity-0 mix-blend-screen" />
          <div className="absolute inset-0 grid content-end justify-items-center px-[clamp(12px,3vw,48px)] pb-[clamp(104px,17vh,180px)]">
            <h1 data-bb="title" aria-label={site.artist.stageName} className="m-0 text-center font-display text-[clamp(58px,min(20.5vw,30vh),330px)] font-black leading-[.84] tracking-[-.045em] text-paper will-change-transform">
              {h.titleLines.map((line) => (
                <span key={line} data-bb="line" aria-hidden="true" className="block whitespace-nowrap will-change-transform">
                  {line.split('').map((c, i) => (
                    <span key={i} data-bb="char" className="inline-block opacity-0 will-change-transform">{c}</span>
                  ))}
                </span>
              ))}
            </h1>
          </div>
          <div data-bb="track" className="pointer-events-none absolute inset-x-0 -top-[20%] h-[14%] opacity-0 mix-blend-screen" style={{ background: 'linear-gradient(180deg,transparent,rgba(242,242,242,.14) 40%,rgba(225,48,28,.18) 60%,transparent)' }} />
          <div data-bb="flash" className="pointer-events-none absolute inset-0 bg-paper" />
        </div>
      </div>
    </section>
  );
}
