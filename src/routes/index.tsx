import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Contact } from "@/components/contact";
import { Explorations } from "@/components/explorations";
import { Hero } from "@/components/hero";
import { Journal } from "@/components/journal";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { Stats } from "@/components/stats";
import { VideoModal } from "@/components/video-modal";
import { Works } from "@/components/works";
import type { Project } from "@/lib/projects";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState<Project | null>(null);

  const complete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-full focus:bg-text-primary focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <AnimatePresence>{isLoading ? <LoadingScreen onComplete={complete} /> : null}</AnimatePresence>
      <Navbar />
      <main>
        <Hero ready={!isLoading} />
        <Works onOpen={setActive} />
        <Journal />
        <Explorations onOpen={setActive} />
        <Stats />
        <Contact />
      </main>
      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
