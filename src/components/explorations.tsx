import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explorations, projects, type Project } from "@/lib/projects";
import { prefersReducedMotion } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  onOpen: (project: Project) => void;
};

export function Explorations({ onOpen }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const left = explorations.filter((_, i) => i % 2 === 0);
  const right = explorations.filter((_, i) => i % 2 === 1);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    let raf = 0;
    const scheduleRefresh = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        refresh();
      });
    };

    if (prefersReducedMotion()) {
      window.addEventListener("works-layout", refresh);
      window.addEventListener("resize", refresh);
      const t = window.setTimeout(refresh, 80);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener("works-layout", refresh);
        window.removeEventListener("resize", refresh);
      };
    }

    const trigger = sectionRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".explore-col-a",
        { yPercent: 8 },
        {
          yPercent: -28,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
      gsap.fromTo(
        ".explore-col-b",
        { yPercent: -12 },
        {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      );
    }, sectionRef);

    window.addEventListener("works-layout", scheduleRefresh);
    window.addEventListener("resize", scheduleRefresh);
    const t = window.setTimeout(refresh, 80);

    return () => {
      window.clearTimeout(t);
      window.cancelAnimationFrame(raf);
      window.removeEventListener("works-layout", scheduleRefresh);
      window.removeEventListener("resize", scheduleRefresh);
      ctx.revert();
    };
  }, []);

  const openById = (id: number) => {
    const project = projects.find((p) => p.id === id);
    if (project) onOpen(project);
  };

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[220vh] bg-bg md:min-h-[300vh]"
    >
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_0%_4%/0.78)_0%,hsl(0_0%_4%/0.2)_55%,transparent_75%)]" />
          <p className="relative text-eyebrow tracking-eyebrow text-muted uppercase">
            Explorations
          </p>
          <h2 className="relative mt-4 font-display text-5xl text-text-primary italic md:text-7xl lg:text-8xl">
            Visual <span className="font-body font-medium not-italic">playground</span>
          </h2>
        </div>

        <div className="mx-auto grid h-full w-full max-w-[1400px] grid-cols-2 gap-3 px-3 pt-24 md:grid-cols-12 md:gap-8 md:px-10">
          <div className="explore-col-a col-span-1 flex flex-col gap-3 md:col-span-4 md:gap-6">
            {left.map((item) => (
              <ExploreStill key={item.src} item={item} onOpen={() => openById(item.projectId)} />
            ))}
          </div>
          <div className="hidden md:col-span-4 md:block" />
          <div className="explore-col-b col-span-1 flex flex-col gap-3 pt-16 md:col-span-4 md:gap-6 md:pt-32">
            {right.map((item) => (
              <ExploreStill key={item.src} item={item} onOpen={() => openById(item.projectId)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreStill({
  item,
  onOpen,
}: {
  item: (typeof explorations)[number];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-stroke bg-surface"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-bg/20 transition-colors duration-300 group-hover:bg-bg/40" />
    </button>
  );
}
