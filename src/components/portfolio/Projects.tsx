import { useMemo, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, CONTACT, type Project } from "./data";
import { SectionHeading } from "./Sections";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Turning ideas into practical technology."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              filter === f
                ? "border-transparent text-primary-foreground shadow-[var(--glow-primary)]"
                : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
            style={filter === f ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i * 60}
            className={cn(p.featured && "md:col-span-2")}
          >
            <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-3xl">
              <div className={cn("relative overflow-hidden", p.featured ? "aspect-[16/7]" : "aspect-[16/9]")}>
                <img
                  src={p.image}
                  alt={`${p.title} project cover`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/70 px-3 py-1 font-mono text-xs text-cyan backdrop-blur">
                  {p.no}
                </span>
                {p.featured && (
                  <span
                    className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Full-Stack Highlight
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/35 px-3 py-1 text-xs text-foreground/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2 pt-1">
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium transition-colors hover:border-primary/60"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium transition-colors hover:border-primary/60"
                    >
                      <ExternalLink className="size-4" /> Live Demo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} details`}
          className="fixed inset-0 z-60 grid place-items-center bg-background/80 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold">{active.title}</h3>
              <button
                type="button"
                aria-label="Close details"
                onClick={() => setActive(null)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.description}</p>
            <h4 className="mt-6 text-xs font-semibold tracking-[0.18em] text-cyan uppercase">Highlights</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {active.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/35 px-3 py-1 text-xs text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
