import { BarChart3, Bot, BrainCircuit, CheckCircle2, Map, Presentation, Rocket, Trophy } from "lucide-react";
import { LEARNING_HIGHLIGHTS, WORKSHOPS } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Sections";

const WORKSHOP_ICONS = {
  geospatial: Map,
  analysis: BarChart3,
  automation: Bot,
} as const;

export function Workshops() {
  return (
    <section id="learning" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Continuous Learning"
        title="Workshops & Technical Learning"
        subtitle="Focused training that complements practical project and internship experience."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {WORKSHOPS.map((workshop, index) => {
          const Icon = WORKSHOP_ICONS[workshop.icon];
          return (
            <Reveal key={workshop.title} delay={index * 80}>
              <article className="glass glass-hover h-full rounded-3xl p-7">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/40">
                  <Icon className="size-5 text-cyan" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{workshop.title}</h3>
                <p className="mt-2 text-sm font-medium text-cyan">{workshop.provider}</p>
                {"meta" in workshop && workshop.meta && (
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{workshop.meta}</p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{workshop.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const COMPETITIONS = [
  { icon: Rocket, title: "Smart India Hackathon (SIH)", label: "Grand Finale / Finalist", body: "Collaborative problem solving and solution development for a real-world challenge." },
  { icon: Trophy, title: "TechYuva Coding Competition", label: "Winner", body: "Recognised for coding, problem-solving, and performance under time constraints." },
  { icon: Presentation, title: "Project Demonstration", label: "Hands-on Experience", body: "Experience presenting technical ideas, demonstrating projects, and communicating solution decisions." },
] as const;

export function Hackathons() {
  return (
    <section id="hackathons" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Collaboration & Competition"
        title="Hackathons & Technical Competitions"
        subtitle="Hands-on experience in collaborative problem solving, rapid prototyping, project development, and technical presentations."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {COMPETITIONS.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="glass glass-hover h-full rounded-3xl p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                  <item.icon className="size-5 text-cyan" />
                </span>
                <span className="text-right font-mono text-[10px] font-semibold text-violet uppercase">{item.label}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 glass rounded-3xl p-7">
        <div className="flex items-start gap-4">
          <BrainCircuit className="mt-0.5 size-5 shrink-0 text-cyan" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Participated in multiple hackathons and technical competitions, gaining hands-on experience in collaborative problem solving, project development, rapid prototyping, technical presentations, and innovative solution building.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function ExperienceHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8" aria-labelledby="experience-highlights-title">
      <Reveal>
        <div className="glass rounded-3xl p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <BrainCircuit className="size-5 text-cyan" />
            <h2 id="experience-highlights-title" className="font-display text-xl font-semibold">Experience & Learning Highlights</h2>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}