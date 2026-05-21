/** Decorative hero particles — CSS-only, no layout impact */
export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-ride-accent/40 shadow-[0_0_12px_rgba(255,149,0,0.5)]" />
      <span className="absolute right-[20%] top-[28%] h-1.5 w-1.5 rounded-full bg-ride-accent/30" />
      <span className="absolute bottom-[30%] left-[35%] h-1 w-1 rounded-full bg-white/20" />
    </div>
  );
}
