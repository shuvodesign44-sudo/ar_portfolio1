import { journal } from "@/lib/projects";
import { SectionHeading } from "@/components/section-heading";

export function Journal() {
  return (
    <section id="journal" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Insights"
          heading={
            <>
              How we{" "}
              <span className="font-display font-normal italic">build worlds</span>
            </>
          }
          subtext="A short field guide to making VR, AR and mixed reality feel inevitable — not ornamental."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journal.map((item) => (
            <article
              key={item.index}
              className="rounded-3xl border border-stroke bg-surface p-6 md:p-7"
            >
              <p className="font-display text-sm tracking-eyebrow text-muted italic">
                {item.index}
              </p>
              <h3 className="mt-5 text-lg font-medium text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
