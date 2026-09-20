import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import { ACHIEVEMENTS, CONTACT, NAV_LINKS, TECH_CLOUD, WHY } from "./data";
import { SectionHeading } from "./Sections";
import { Reveal } from "./Reveal";

const ICONS = { trophy: Trophy, rocket: Rocket, graduation: GraduationCap } as const;

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition & Milestones"
        subtitle="Competitions, hackathons, and continuous learning."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[a.icon as keyof typeof ICONS];
          return (
            <Reveal key={a.title} delay={i * 80}>
              <article className="glass glass-hover h-full rounded-3xl p-7 text-center">
                <span
                  className="ring-glow mx-auto grid size-14 place-items-center rounded-2xl"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Icon className="size-6 text-primary-foreground" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
                <p className="gradient-text mt-1 font-display text-sm font-bold tracking-wide uppercase">
                  {a.badge}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function TechCloud() {
  const row = [...TECH_CLOUD, ...TECH_CLOUD];
  return (
    <section className="py-16">
      <SectionHeading eyebrow="Tech Stack" title="Technologies I Work With" />
      <div
        className="relative mt-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-foreground/85"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithMe() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="Value" title="Why Work With Me?" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 70}>
            <article className="glass glass-hover h-full rounded-3xl p-7">
              <h3 className="font-display text-lg font-semibold">
                <span className="gradient-text">{w.title}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CareerGoal() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <Reveal className="glass gradient-surface relative overflow-hidden rounded-[2rem] p-10 text-center lg:p-16">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            What I&apos;m <span className="gradient-text">Looking For</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I am looking for opportunities where I can contribute as a Software Developer or Data Science
            professional, work on challenging real-world problems, learn from experienced teams, and
            continuously grow my technical and professional capabilities.
          </p>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.03]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Let&apos;s Build Something Together
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:+919919797257` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
  { icon: Linkedin, label: "LinkedIn", value: "anupriya-singh234", href: CONTACT.linkedin },
  { icon: Github, label: "GitHub", value: "anupriya345", href: CONTACT.github },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      await emailjs.sendForm("service_0eooe8i", "template_6m4ctax", form, {
        publicKey: "IffF2sjsPvYa-fZVN",
      });
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Couldn't send the message. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have an opportunity, project, or idea? Let's talk."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-3xl p-8">
          <ul className="grid gap-5">
            {DETAILS.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/40">
                  <d.icon className="size-4.5 text-cyan" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="block truncate text-sm text-foreground transition-colors hover:text-cyan"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-11 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/60"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-11 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/60"
            >
              <Github className="size-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="glass rounded-3xl p-8">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field name="subject" label="Subject" placeholder="What is this about?" />
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs tracking-wide text-muted-foreground uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little more..."
                className="rounded-2xl border border-input bg-secondary/25 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.02] disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Send Message
              <ArrowRight className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-2xl border border-input bg-secondary/25 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
      />
    </div>
  );
}

export function Footer() {
  const links = NAV_LINKS.filter((l) => ["Home", "About", "Skills", "Projects", "Learning", "Contact"].includes(l.label));
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold">
            <span className="gradient-text">Anupriya Singh</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Software Developer • Data Science Enthusiast
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-x-5 gap-y-2 lg:justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3 lg:justify-end">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid size-10 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/60"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid size-10 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/60"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-1 px-5 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Anupriya Singh. All rights reserved.</p>
        <p>Designed &amp; Built with passion for technology.</p>
      </div>
    </footer>
  );
}
