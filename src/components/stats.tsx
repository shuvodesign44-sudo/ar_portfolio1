import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/projects";
import { prefersReducedMotion } from "@/lib/utils";

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-8 md:px-10 lg:px-16">
        {stats.map((stat) => (
          <Stat key={stat.label} target={stat.value} suffix={stat.suffix} label={stat.label} start={start} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  target,
  suffix,
  label,
  start,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const value = useCountUp(target, start);
  return (
    <div className="border-t border-stroke pt-8 text-center md:text-left">
      <p className="font-display text-5xl tracking-tight text-text-primary tabular-nums md:text-7xl">
        {value}
        {suffix}
      </p>
      <p className="mt-3 text-sm tracking-scroll text-muted uppercase">{label}</p>
    </div>
  );
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}
