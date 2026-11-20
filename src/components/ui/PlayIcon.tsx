// CSS triangle play glyph
export default function PlayIcon({ size = 14, color = 'var(--paper)' }: { size?: number; color?: string }) {
  return (
    <span
      aria-hidden="true"
      className="block h-0 w-0"
      style={{ borderLeft: `${size}px solid ${color}`, borderTop: `${size * 0.6}px solid transparent`, borderBottom: `${size * 0.6}px solid transparent`, marginLeft: size * 0.3 }}
    />
  );
}
