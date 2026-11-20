import { CRT } from '@/config/crt';
import { crtK, type SiteState } from '@/lib/state';

const GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

// Global CRT layer: CSS scanlines + aperture grille, plus one WebGL canvas (vignette, curvature,
// grain, flicker, section transitions). Falls back to CSS grain/vignette without WebGL.
export default function CrtLayer({ state }: { state: SiteState }) {
  const k = crtK(state);
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(to bottom,rgba(0,0,0,0) 0 2px,rgba(0,0,0,.95) 2px 3px)', opacity: Math.min(1, CRT.scanlines * k) }} />
      <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(to right,rgba(225,48,28,.05) 0 1px,rgba(242,242,242,.03) 1px 2px,transparent 2px 3px)', opacity: Math.min(1, CRT.grille * k) }} />
      {state.gl ? (
        <canvas data-bb="crtgl" className="absolute inset-0 block h-full w-full" />
      ) : (
        <>
          <div className="absolute -inset-full mix-blend-overlay" style={{ backgroundImage: GRAIN, opacity: Math.min(0.5, 0.16 * k) }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(130% 100% at 50% 50%,transparent 50%,rgba(0,0,0,.55) 85%,rgba(0,0,0,.9) 100%)', opacity: Math.min(1, CRT.vignette * k) }} />
        </>
      )}
    </div>
  );
}
