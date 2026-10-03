const DOTS = Array.from({ length: 32 }, (_, i) => ({
  left: `${((i * 37) % 97) + 1}%`,
  top: `${((i * 53) % 97) + 1}%`,
  size: 1 + (i % 3),
  delay: `${(i % 8) * 0.35}s`,
  duration: `${7 + (i % 6)}s`,
  opacity: 0.15 + (i % 5) * 0.06,
}));

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent-from animate-pulse-soft"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}
