import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";

type Props = {
  onOpen: (project: Project) => void;
};

function notifyWorksLayout() {
  window.dispatchEvent(new Event("works-layout"));
}

export function Works({ onOpen }: Props) {
  const [showAll, setShowAll] = useState(false);
  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const extra = useMemo(() => projects.filter((p) => !p.featured), []);

  // Expanding/collapsing the grid changes document height. Visual playground
  // (GSAP ScrollTrigger) must refresh or the page can stop scrolling.
  useEffect(() => {
    notifyWorksLayout();
    const t1 = window.setTimeout(notifyWorksLayout, 80);
    const t2 = window.setTimeout(notifyWorksLayout, 480);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [showAll]);

  const toggle = () => setShowAll((v) => !v);

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Selected Work"
          heading={
            <>
              Featured{" "}
              <span className="font-display font-normal italic">projects</span>
            </>
          }
          subtext="A selection of immersive experiences, games and interactive installations we've built for leading brands."
        />

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-12 md:gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpen} />
          ))}
          <AnimatePresence initial={false} onExitComplete={notifyWorksLayout}>
            {showAll
              ? extra.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className={cn(project.span)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(i, 8) * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onAnimationComplete={notifyWorksLayout}
                  >
                    <ProjectCard project={project} onOpen={onOpen} fill />
                  </motion.div>
                ))
              : null}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            className="group relative inline-flex rounded-full"
            aria-expanded={showAll}
          >
            <span className="accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-3 text-sm text-text-primary">
              {showAll ? "Show less" : `View all work — ${extra.length} more`}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
  fill,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  fill?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "group relative h-60 w-full overflow-hidden rounded-3xl border border-stroke bg-surface text-left sm:h-72 md:h-80",
        !fill && project.span,
      )}
    >
      <img
        src={project.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      <span className="halftone pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/75 to-transparent" />
      <span className="absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      <span className="absolute top-4 left-4 rounded-full border border-hairline bg-bg/55 px-3 py-1 text-eyebrow tracking-scroll text-muted uppercase backdrop-blur-md">
        {project.category}
      </span>

      <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="accent-gradient absolute inset-0 rounded-full opacity-80" />
        <span className="relative grid size-[calc(100%-4px)] place-items-center rounded-full bg-bg">
          <Play className="size-5 fill-text-primary text-text-primary" strokeWidth={1.5} />
        </span>
      </span>

      <span className="absolute bottom-4 left-1/2 w-max max-w-[90%] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <span className="relative inline-flex max-w-full">
          <span className="accent-gradient pointer-events-none absolute -inset-[2px] rounded-full" />
          <span className="relative flex max-w-full flex-nowrap items-center rounded-full bg-surface px-4 py-2 text-sm leading-none text-text-primary">
            <span className="shrink-0">View —</span>
            <span className="ml-1 min-w-0 truncate font-display italic">
              {project.title}
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}
