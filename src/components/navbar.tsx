import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const line = window.scrollY + window.innerHeight * 0.4;
      const order = [
        ["home", "home"],
        ["work", "work"],
        ["journal", "work"],
        ["explorations", "work"],
        ["contact", "contact"],
      ] as const;
      let next: "home" | "work" | "contact" = "home";
      for (const [id, mapped] of order) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) next = mapped;
      }
      setActive(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-nav flex justify-center px-3 pt-4 sm:px-4 md:pt-6">
      <nav
        aria-label="Primary"
        className={cn(
          "inline-flex max-w-full flex-nowrap items-center rounded-full border border-hairline bg-surface/90 px-1.5 py-1.5 backdrop-blur-md sm:px-2 sm:py-2",
          scrolled && "shadow-nav",
        )}
      >
        <a
          href="#home"
          className="group relative grid size-8 shrink-0 place-items-center sm:size-9"
          aria-label="Singularity Immersive home"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-x-[-1]" />
          <span className="absolute inset-px grid place-items-center rounded-full bg-bg font-display text-logo italic leading-none text-text-primary transition-transform duration-300 group-hover:scale-110">
            SI
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden />

        <div className="flex flex-nowrap items-center">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm",
                  isActive
                    ? "bg-stroke/50 text-text-primary"
                    : "text-muted hover:bg-stroke/50 hover:text-text-primary",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden />

        <a
          href="#contact"
          className="group relative ml-0.5 inline-flex shrink-0 items-center"
        >
          <span className="accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-2 text-xs text-muted backdrop-blur-md transition-colors duration-200 group-hover:text-text-primary sm:px-4 sm:text-sm">
            <span className="hidden sm:inline">Say hi</span>
            <span className="sm:hidden">Hi</span>
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </span>
        </a>
      </nav>
    </header>
  );
}
