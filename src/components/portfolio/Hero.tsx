import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import profileImg from "@/assets/profile-anu.jpg";
import { CONTACT } from "./data";

const CAPABILITIES = ["AI / ML", "Data Science", "Full-stack"];

const QUICK_STATS = [
  { value: "07+", label: "Projects built" },
  { value: "04", label: "Internships" },
  { value: "SIH", label: "Finalist" },
];

const SOCIALS = [
  { href: CONTACT.github, label: "GitHub profile", Icon: Github },
  { href: CONTACT.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  { href: `mailto:${CONTACT.email}`, label: "Send an email", Icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-18 sm:pt-32 lg:pt-36 lg:pb-24">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-20" />
      <div aria-hidden className="hero-beam pointer-events-none absolute inset-x-0 top-0 -z-10 h-px" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
        <div className="reveal" data-visible="true">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan uppercase">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan" />
              </span>
              Available for opportunities
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground">CSE · 2026</span>
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[0.98] font-bold sm:text-6xl lg:text-[4.7rem]">
            Anupriya Singh
          </h1>
          <p className="mt-4 max-w-2xl font-display text-2xl leading-tight font-medium text-foreground/90 sm:text-3xl">
            I build software that thinks with <span className="gradient-text">data &amp; AI.</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Final-year Computer Science engineer creating intelligent products—from machine-learning systems and
            data experiences to modern full-stack applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Core capabilities">
            {CAPABILITIES.map((capability) => (
              <span key={capability} className="inline-flex items-center gap-2 font-mono text-xs text-foreground/80">
                <span className="size-1 rounded-full bg-violet" />
                {capability}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 text-sm font-semibold text-foreground transition-colors hover:border-cyan/50 hover:bg-secondary"
            >
              Let&apos;s connect
              <ArrowDownRight className="size-4 text-cyan" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 px-2 text-sm text-muted-foreground transition-colors hover:text-cyan"
            >
              <Download className="size-4" />
              Résumé
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-border/70 pt-6">
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-violet" />
              {CONTACT.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[29rem] lg:justify-self-end">
          <div aria-hidden className="hero-orbit absolute -inset-6 rounded-full border border-primary/15" />
          <div aria-hidden className="hero-orbit hero-orbit-reverse absolute inset-2 rounded-full border border-dashed border-cyan/20" />

          <div className="relative aspect-square overflow-hidden rounded-2xl border border-primary/40 bg-surface p-2 shadow-[var(--shadow-portrait)]">
            <div className="relative size-full overflow-hidden rounded-xl bg-secondary">
              <img
                src={profileImg}
                width={800}
                height={800}
                alt="Anupriya Singh, software developer and data science enthusiast"
                className="size-full object-cover object-top"
              />
              <div aria-hidden className="portrait-grid pointer-events-none absolute inset-0" />
              <div aria-hidden className="portrait-scan pointer-events-none absolute inset-x-0 top-0 h-px" />
              <div aria-hidden className="portrait-fade pointer-events-none absolute inset-0" />

              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3">
                <div className="rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                  <p className="font-mono text-[10px] text-cyan uppercase">Current focus</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">Intelligent systems</p>
                </div>
                <div className="grid size-11 place-items-center rounded-lg border border-cyan/30 bg-background/80 text-cyan backdrop-blur-md">
                  <BrainCircuit className="size-5" />
                </div>
              </div>
            </div>

            <span className="absolute top-4 left-4 size-4 border-t border-l border-cyan" />
            <span className="absolute top-4 right-4 size-4 border-t border-r border-cyan" />
            <span className="absolute right-4 bottom-4 size-4 border-r border-b border-violet" />
            <span className="absolute bottom-4 left-4 size-4 border-b border-l border-violet" />
          </div>

          <div className="glass absolute -top-4 -right-2 hidden items-center gap-2 rounded-lg px-3 py-2 sm:flex">
            <Sparkles className="size-3.5 text-cyan" />
            <span className="font-mono text-[10px] text-foreground">AI-DRIVEN BUILDER</span>
          </div>
          <div className="glass absolute top-1/3 -left-7 hidden items-center gap-2 rounded-lg px-3 py-2 sm:flex">
            <Code2 className="size-3.5 text-violet" />
            <span className="font-mono text-[10px] text-foreground">BUILDING / LEARNING</span>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-14 grid max-w-7xl grid-cols-3 border-y border-border/70 px-5 lg:px-8">
        {QUICK_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`py-5 text-center sm:flex sm:items-baseline sm:justify-center sm:gap-3 ${index > 0 ? "border-l border-border/70" : ""}`}
          >
            <dt className="font-display text-xl font-bold text-foreground sm:text-2xl">{stat.value}</dt>
            <dd className="mt-1 text-[10px] text-muted-foreground uppercase sm:text-xs">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}