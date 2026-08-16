import { ArrowRight, Download, Github, Linkedin, Mail, MousePointerClick, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-anu.jpg";
import { CONTACT } from "./data";

const BADGES = [
  { label: "Python", pos: "-left-4 top-10 sm:-left-8", delay: "0s" },
  { label: "MERN", pos: "-right-3 top-20 sm:-right-8", delay: "1.2s" },
  { label: "Data Science", pos: "-left-6 bottom-24 sm:-left-14", delay: "2.1s" },
  { label: "AI / ML", pos: "-right-4 bottom-16 sm:-right-10", delay: "0.6s" },
  { label: "JavaScript", pos: "left-1/2 -translate-x-1/2 -bottom-5", delay: "1.7s" },
];

const QUICK_STATS = [
  { value: "6+", label: "Projects shipped" },
  { value: "4", label: "Internships" },
  { value: "SIH", label: "Hackathon finalist" },
];

const SOCIALS = [
  { href: CONTACT.github, label: "GitHub profile", Icon: Github },
  { href: CONTACT.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  { href: `mailto:${CONTACT.email}`, label: "Send an email", Icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -top-32 left-1/4 size-[520px] rounded-full blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute right-[-6rem] bottom-0 size-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)", opacity: 0.18 }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal" data-visible="true">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              <Sparkles className="size-3.5 text-cyan" />
              Final year CSE · Software Development · Data Science
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] text-cyan uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              Open to opportunities
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-[4.1rem]">
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

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-cyan"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <span className="ml-1 hidden text-xs text-muted-foreground sm:inline">
              {CONTACT.location}
            </span>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-2xl px-4 py-3.5">
                <dt className="gradient-text font-display text-2xl font-bold">{s.value}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="animate-glow absolute inset-6 rounded-full blur-3xl"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
          />
          <div
            className="group relative aspect-square rounded-[2rem] p-[2px] transition-transform duration-500 hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <div className="relative size-full overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
              <img
                src={profileImg}
                width={600}
                height={800}
                alt="Professional headshot of Anupriya Singh"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in oklab, var(--background) 85%, transparent), transparent 55%)",
                }}
              />
            </div>
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

      <a
        href="#about"
        className="relative mx-auto mt-14 hidden w-fit items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-cyan lg:flex"
      >
        <MousePointerClick className="size-3.5 animate-float" />
        Scroll to explore
      </a>
    </section>
  );
}
