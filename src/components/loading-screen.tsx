import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

const WORDS = ["Design", "Create", "Immerse"] as const;
const DURATION_MS = 2700;

type Props = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const completed = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(100);
      const t = window.setTimeout(onComplete, 200);
      return () => window.clearTimeout(t);
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(100, ((now - start) / DURATION_MS) * 100);
      setCount(progress);
      setWordIndex(Math.min(2, Math.floor((now - start) / 900)));
      if (progress < 100) {
        raf = requestAnimationFrame(tick);
        return;
      }
      if (!completed.current) {
        completed.current = true;
        window.setTimeout(onComplete, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  const display = String(Math.round(count)).padStart(3, "0");
  const scale = count / 100;

  return (
    <motion.div
      className="fixed inset-0 z-loader flex flex-col bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <motion.p
        className="absolute top-8 left-6 text-eyebrow font-medium tracking-eyebrow text-muted uppercase md:top-10 md:left-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Immersive
      </motion.p>

      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={WORDS[wordIndex]}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="absolute right-6 bottom-16 font-display text-6xl text-text-primary tabular-nums md:right-10 md:bottom-20 md:text-8xl lg:text-9xl">
        {display}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${scale})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
