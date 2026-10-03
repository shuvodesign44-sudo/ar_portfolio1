import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-bg/80 backdrop-blur-md"
        aria-label="Close video"
        onClick={onClose}
      />
      <div className="relative z-10 flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-eyebrow tracking-eyebrow text-muted uppercase">
              {project.category}
            </p>
            <h3
              id="video-modal-title"
              className="mt-1 font-display text-2xl text-text-primary italic md:text-3xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-stroke bg-surface text-text-primary transition-colors hover:border-muted"
            aria-label="Close"
          >
            <X className="size-4" strokeWidth={1.75} />
          </button>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-stroke bg-surface">
          <iframe
            src={project.videoUrl}
            title={project.title}
            allow="autoplay"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
