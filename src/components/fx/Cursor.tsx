// Custom cursor dot + label (engine shows it on fine pointers only)
export default function Cursor() {
  return (
    <>
      <div data-bb="cursor" aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[99] -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-paper opacity-0 will-change-transform" />
      <div data-bb="cursorLabel" aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[99] whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[.16em] text-ink opacity-0" />
    </>
  );
}
