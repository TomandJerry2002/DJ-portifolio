// Split a string into words, keeping the trailing space on each (for per-word animation spans).
export const words = (s: string) => {
  const a = s.split(' ');
  return a.map((w, i) => (i < a.length - 1 ? w + ' ' : w));
};
export const sstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
export const pad2 = (n: number) => String(n).padStart(2, '0');
