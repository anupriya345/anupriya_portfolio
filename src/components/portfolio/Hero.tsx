import { ArrowRight, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const BADGES = [
  { label: "Python", pos: "-left-4 top-10 sm:-left-8", delay: "0s" },
  { label: "MERN", pos: "-right-3 top-20 sm:-right-8", delay: "1.2s" },
  { label: "Data Science", pos: "-left-6 bottom-24 sm:-left-14", delay: "2.1s" },
  { label: "AI / ML", pos: "-right-4 bottom-16 sm:-right-10", delay: "0.6s" },
  { label: "JavaScript", pos: "left-1/2 -translate-x-1/2 -bottom-5", delay: "1.7s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -top-32 left-1/4 size-[520px] rounded-full blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal" data-visible="true">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Sparkles className="size-3.5 text-cyan" />
            Final year CSE · Software Development · Data Science
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Anupriya Singh</span>
          </h1>

          <p className="mt-5 max-w-xl font-display text-xl text-foreground/90 sm:text-2xl">
            Building intelligent software and turning data into meaningful solutions.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I&apos;m a final-year Computer Science &amp; Engineering student passionate about Software
            Development, Data Science, AI, and modern web technologies. I enjoy transforming ideas into
            practical, user-focused applications and data-driven solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.03]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-2 py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-cyan hover:underline"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="animate-glow absolute inset-6 rounded-full blur-3xl"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
          />
          <div
            className="relative aspect-square rounded-[2rem] p-[2px]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <div className="size-full overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
              <img
                src={profileImg}
                width={800}
                height={800}
                alt="Placeholder for the professional headshot of Anupriya Singh"
                className="size-full object-cover"
              />
            </div>
            <span className="absolute inset-x-0 bottom-3 mx-auto w-fit rounded-full bg-background/80 px-3 py-1 text-[10px] tracking-wide text-muted-foreground uppercase backdrop-blur">
              Photo placeholder — upload real headshot
            </span>
          </div>

          {BADGES.map((b) => (
            <span
              key={b.label}
              style={{ animationDelay: b.delay }}
              className={`glass animate-float absolute ${b.pos} rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/90`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
