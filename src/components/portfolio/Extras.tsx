import { ArrowRight, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./Sections";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Understand the Problem",
    body: "Clarify goals, users, and data before writing a single line of code.",
  },
  {
    icon: PenTool,
    title: "Plan & Design",
    body: "Map the architecture, data flow, and interface into a clear, workable plan.",
  },
  {
    icon: Code2,
    title: "Build & Test",
    body: "Develop iteratively with clean code, real datasets, and continuous testing.",
  },
  {
    icon: Rocket,
    title: "Deliver & Improve",
    body: "Ship the solution, measure results, and refine based on real feedback.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="How I Work"
        subtitle="A simple, repeatable approach from idea to shipped solution."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="relative text-center">
              {i < STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute top-8 -right-6 hidden size-6 text-primary/40 lg:block"
                />
              )}
              <span
                className="ring-glow mx-auto grid size-16 place-items-center rounded-full"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <s.icon className="size-6 text-primary-foreground" />
              </span>
              <span className="mt-4 block font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[2rem] px-7 py-12 sm:px-12"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl leading-tight font-bold text-primary-foreground sm:text-4xl">
                Got a project? Let&apos;s talk.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
                Open to internships, full-time roles, and collaborations in software development, data
                science, and AI/ML.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Contact Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
