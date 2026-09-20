import { useEffect, useState, type ReactNode } from "react";
import {
  Brain,
  BarChart3,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Plug,
  Puzzle,
  Server,
  Wrench,
  Users,
  LineChart,
  ScanFace,
} from "lucide-react";
import { Reveal, useInView } from "./Reveal";
import { EXPERIENCE, PROFICIENCY, SERVICES, SKILLS, STATS } from "./data";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.22em] text-cyan uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return setN(target);
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round((target * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <div className="glass grid gap-4 rounded-3xl p-6 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 70}
            className="rounded-2xl border border-border/60 bg-secondary/25 p-5 text-center"
          >
            <p className="gradient-text font-display text-3xl font-bold">
              {"display" in s && s.display ? s.display : <Counter target={s.value as number} suffix={s.suffix} />}
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const FOCUS = [
  "Software Development",
  "Full-Stack Development",
  "Data Science",
  "Artificial Intelligence & Machine Learning",
  "Computer Vision",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        subtitle="Practical experience across software, data, and intelligent systems."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass rounded-3xl p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m Anupriya Singh, a final-year B.Tech Computer Science &amp; Engineering student with hands-on
            experience in software development, full-stack development, data science, artificial intelligence,
            machine learning, and computer vision.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            I have developed practical projects, participated in hackathons and technical competitions, attended
            technical workshops, and gained internship and training experience across software and data-driven work.
          </p>
          <blockquote className="mt-7 rounded-2xl border-l-2 border-cyan bg-secondary/30 px-5 py-4 font-display text-lg text-foreground/90">
            “My goal is to grow as a software developer and data science professional while building technology
            that creates meaningful impact.”
          </blockquote>
        </Reveal>

        <Reveal delay={120} className="glass gradient-surface rounded-3xl p-8">
          <h3 className="font-display text-xl font-semibold">Currently Focused On</h3>
          <ul className="mt-6 grid gap-3">
            {FOCUS.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground/90">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                  aria-hidden
                />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="Education" title="Academic Background" />
      <div className="relative mx-auto mt-12 max-w-3xl pl-8">
        <span aria-hidden className="absolute top-2 bottom-2 left-2 w-px bg-border" />
        <Reveal className="relative">
          <span
            aria-hidden
            className="ring-glow absolute top-6 -left-[26px] size-3.5 rounded-full"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <div className="glass glass-hover rounded-3xl p-7">
            <div className="flex flex-wrap items-center gap-3">
              <GraduationCap className="size-5 text-cyan" />
              <h3 className="font-display text-xl font-semibold">
                B.Tech — Computer Science &amp; Engineering
              </h3>
            </div>
            <p className="mt-3 text-sm text-foreground/90">Buddha Institute of Technology</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Affiliated with Dr. APJ Abdul Kalam Technical University
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
                CSE • Undergraduate
              </span>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-foreground/90">
                Expected Graduation: 2027
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Experience"
        subtitle="Learning through real-world projects and industry exposure."
      />
      <div className="relative mx-auto mt-12 max-w-4xl pl-8">
        <span aria-hidden className="absolute top-2 bottom-2 left-2 w-px bg-border" />
        <div className="grid gap-6">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.org} delay={i * 90} className="relative">
              <span
                aria-hidden
                className="absolute top-8 -left-[26px] size-3.5 rounded-full"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              />
              <article className="glass glass-hover rounded-3xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-cyan">{exp.org}</p>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_ICONS = [Code2, LineChart, ScanFace, Layers, Wrench] as const;

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Toolkit"
        subtitle="Technologies and abilities I use to design, build, and analyse."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = SKILL_ICONS[i % SKILL_ICONS.length] ?? Code2;
          return (
            <Reveal key={group.title} delay={i * 70}>
              <div className="glass glass-hover h-full rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/40">
                    <Icon className="size-5 text-cyan" />
                  </span>
                  <h3 className="font-display text-base font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {PROFICIENCY.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <ProficiencyBar {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProficiencyBar({ name, level, value }: { name: string; level: string; value: number }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{name}</p>
        <span className="text-xs text-cyan">{level}</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${value}%` : "0%", backgroundImage: "var(--gradient-brand)" }}
        />
      </div>
    </div>
  );
}

const SERVICE_ICONS = [Code2, Server, BarChart3, Brain, LineChart, Plug] as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="What I Can Build"
        subtitle="From full-stack applications to data-driven insight."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length]!;
          return (
            <Reveal key={s.no} delay={i * 70}>
              <article className="glass glass-hover group h-full rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary/40 transition-colors group-hover:border-primary/50">
                    <Icon className="size-5 text-cyan" />
                  </span>
                  <span className="font-display text-2xl font-bold text-muted-foreground/40">{s.no}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export const PuzzleIcon = Puzzle;
