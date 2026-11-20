// ═══════════ CRT CONFIG — tune every signal effect here (0–1 unless noted) ═══════════
export const CRT = {
  strength: 0.4, // master intensity (multiplies everything below)
  scanlines: 0.32, // CSS scanline opacity
  grille: 0.9, // faint vertical aperture grille
  curvature: 0.22, // barrel bend of the screen edge
  vignette: 0.8, // edge darkening
  glow: 0.7, // phosphor bloom on text + red edge glow
  grain: 0.11, // animated film grain
  flicker: 0.5, // chance/strength of rare micro-flicker
  roll: 0, // slow rolling refresh bar (off)
  aberration: 1.0, // RGB split amount
  transitions: 1.0, // section-to-section signal warp
  domShake: 1.0, // horizontal jitter of sections during transitions (desktop only)
  scrollReact: 1.0, // how much scroll speed boosts waves + distortion
  burstEvery: [3, 7] as [number, number], // seconds between logo glitch bursts
  levels: { full: 1, low: 0.45, off: 0 },
  mobileScale: 0.6,
  lowPowerScale: 0.75,
  overlayRes: 0.5, // overlay canvas resolution (fraction of CSS px)
  scrollWarp: true, // hero exit warp
  skipIntro: false, // skip the power-on intro
};

export const MOTION = {
  ease: { out: 'expo.out', inOut: 'expo.inOut', soft: 'power3.out', in: 'power3.in' },
  dur: { fast: 0.5, base: 1.0, slow: 1.3, media: 1.6 },
  stagger: { word: 0.06, line: 0.09, item: 0.08, row: 0.14 },
  scrub: 0.8,
  start: 'top 85%',
  toggle: 'play none none reverse',
};

export const MQ_MOBILE = '(max-width: 860px)';
export const RED = '#E1301C';
export const HOT = '#FF4128';
export type Level = keyof typeof CRT.levels;
