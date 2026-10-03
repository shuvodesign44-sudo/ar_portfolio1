import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { socials, STUDIO_EMAIL } from "@/lib/projects";
import { prefersReducedMotion } from "@/lib/utils";
import { ParticleField } from "@/components/particle-field";

const MARQUEE = "BUILDING THE FUTURE OF IMMERSIVE  •  ";

export function Contact() {
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!track.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: "none",
      });
    }, track);
    return () => ctx.revert();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_EMAIL);
      toast.success("Email copied");
    } catch {
      toast.error("Could not copy — use the mail link");
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg pt-8">
      <div className="absolute inset-0 opacity-25">
        <video
          className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/explore-04.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/70" />
        <ParticleField />
      </div>

      <div className="relative z-10">
        <div ref={track} className="overflow-hidden border-y border-stroke py-4">
          <div className="marquee-track flex w-max font-display text-4xl text-text-primary/80 italic md:text-6xl">
            <span className="pr-6 whitespace-nowrap">{MARQUEE.repeat(8)}</span>
            <span className="pr-6 whitespace-nowrap" aria-hidden>
              {MARQUEE.repeat(8)}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-pulse-soft rounded-full bg-signal" />
                  <span className="relative size-2 rounded-full bg-signal" />
                </span>
                Available for projects
              </p>
              <h2 className="max-w-xl text-3xl leading-tight font-medium tracking-tight md:text-5xl">
                Let’s build the next world{" "}
                <span className="font-display font-normal italic">together.</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="group relative inline-flex self-start rounded-full"
            >
              <span className="accent-gradient pointer-events-none absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm font-medium text-bg group-hover:bg-bg group-hover:text-text-primary">
                Copy email
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </span>
            </button>
          </div>

          <a
            href={`mailto:${STUDIO_EMAIL}`}
            className="mt-12 block font-display text-2xl text-text-primary italic transition-opacity hover:opacity-70 md:text-5xl lg:text-6xl"
          >
            {STUDIO_EMAIL}
          </a>

          <div className="mt-16 flex flex-col gap-8 border-t border-stroke pt-8 md:flex-row md:items-center md:justify-between">
            <nav aria-label="Social" className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stroke px-4 py-2 text-sm text-muted transition-colors hover:border-muted hover:text-text-primary"
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <p className="text-sm text-muted">
              Dhaka, Bangladesh · © {new Date().getFullYear()} Singularity Immersive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
