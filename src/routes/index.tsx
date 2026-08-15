import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Services, Skills, Stats } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { CtaBand, Process } from "@/components/portfolio/Extras";
import {
  Achievements,
  CareerGoal,
  Contact,
  Footer,
  TechCloud,
  WhyWorkWithMe,
} from "@/components/portfolio/Closing";

const TITLE = "Anupriya Singh | Software Developer & Data Science Enthusiast";
const DESCRIPTION =
  "Portfolio of Anupriya Singh, a final-year Computer Science & Engineering student specializing in software development, MERN stack, data science, AI/ML, and data visualization.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anupriya Singh",
          jobTitle: "Software Developer & Data Science Enthusiast",
          email: "mailto:singhanupriya991979@gmail.com",
          telephone: "+91 9919797257",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kushinagar",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          alumniOf: "Buddha Institute of Technology",
          sameAs: [
            "https://www.linkedin.com/in/anupriya-singh234",
            "https://github.com/anupriya345",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Process />
        <Projects />
        <CtaBand />
        <Achievements />
        <TechCloud />
        <WhyWorkWithMe />
        <CareerGoal />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
