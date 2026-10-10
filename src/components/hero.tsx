import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ROLES } from "@/lib/projects";
import { prefersReducedMotion } from "@/lib/utils";
import { ParticleField } from "@/components/particle-field";

type Props = {
  ready: boolean;
};

export function Hero({ ready }: Props) {
  const root = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!ready) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [ready]);

  useLayoutEffect(() => {
    if (!ready || !root.current) return;
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      );
      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3,
      );
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-[60svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/explore-01.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/40" />
        <ParticleField />
        <div className="grain pointer-events-none absolute inset-0 z-[3] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 z-[4] h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-36 pb-20 text-center md:px-10 md:pt-36 md:pb-20">
        <h1 className="name-reveal mb-8 font-display text-6xl leading-[0.9] font-normal tracking-tight text-text-primary italic md:text-8xl lg:text-9xl">
          Singularity Immersive
        </h1>
        <p className="blur-in mb-2 text-base text-muted md:text-lg">
          A{" "}
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display text-text-primary italic"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          studio in Dhaka.
        </p>
      </div>

    </section>
  );
}
