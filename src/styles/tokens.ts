// Design tokens — mirrored as CSS vars in app/globals.css and as Tailwind theme in tailwind.config.ts.
export const colors = {
  ink: '#0A0A0A', // background
  ink2: '#141414', // raised surface
  line: '#2A2A2A', // hairlines
  mute: '#8C8C8C', // secondary text
  paper: '#F2F2F2', // primary text
  paperDim: '#BDBDBD',
  signal: '#E1301C', // the ONLY accent
  signalHot: '#FF4128', // glow / phosphor bloom
  signalDeep: '#6E1206',
} as const;

export const fonts = {
  display: ['var(--font-display)', 'Unbounded', 'sans-serif'],
  body: ['var(--font-body)', 'General Sans', 'sans-serif'],
  mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
  marker: ['var(--font-marker)', 'cursive'],
  neon: ['var(--font-neon)', 'cursive'],
  glitch: ['var(--font-glitch)', 'sans-serif'],
  serif: ['var(--font-serif)', 'serif'],
};

export const motion = {
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeInOut: 'cubic-bezier(0.76, 0, 0.24, 1)',
};
