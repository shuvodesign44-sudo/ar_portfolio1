import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  heading: ReactNode;
  subtext?: string;
  actionHref?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionExpanded?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  actionHref,
  actionLabel,
  onAction,
  actionExpanded,
  className,
}: Props) {
  const showAction = Boolean(actionLabel) && Boolean(onAction || actionHref);

  return (
    <motion.div
      className={cn(
        "mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 md:mb-16",
        className,
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" aria-hidden />
          <p className="text-eyebrow tracking-eyebrow text-muted uppercase">{eyebrow}</p>
        </div>
        <h2 className="text-3xl leading-tight font-medium tracking-tight text-text-primary md:text-5xl">
          {heading}
        </h2>
        {subtext ? (
          <p className="mt-4 max-w-lg text-sm text-muted md:text-base">{subtext}</p>
        ) : null}
      </div>
      {showAction ? (
        <ActionButton
          href={onAction ? undefined : actionHref}
          onClick={onAction}
          expanded={actionExpanded}
        >
          {actionLabel}
        </ActionButton>
      ) : null}
    </motion.div>
  );
}

function ActionButton({
  href,
  onClick,
  expanded,
  children,
}: {
  href?: string;
  onClick?: () => void;
  expanded?: boolean;
  children: ReactNode;
}) {
  const inner = (
    <>
      <span className="accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
        {children}
        {expanded ? (
          <ChevronUp className="size-4" strokeWidth={1.75} />
        ) : (
          <ArrowUpRight className="size-4" strokeWidth={1.75} />
        )}
      </span>
    </>
  );
  const className = "group relative inline-flex shrink-0 self-start rounded-full sm:self-auto";
  if (href) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className} aria-expanded={expanded}>
      {inner}
    </button>
  );
}
