import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { brandStory, pillars } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "A Black Cab Burger története: hogyan lett egy londoni taxis-kedvenc sarki burgeresből Ferencváros egyik legendás étterme.",
};

export default function AboutPage() {
  return (
    <Section className="max-w-3xl">
      <p className="text-sm font-semibold text-cab-red">{brandStory.eyebrow}</p>
      <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">
        {brandStory.title}
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
        {brandStory.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <blockquote className="mt-8 border-l-4 border-cab-red pl-5 text-ink/80 italic">
        &ldquo;{brandStory.quote.text}&rdquo;
        <footer className="mt-2 text-sm font-semibold text-ink/60 not-italic">
          — {brandStory.quote.source}
        </footer>
      </blockquote>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {brandStory.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-ink/10 bg-paper p-6 text-center">
            <div className="font-display text-4xl text-cab-red">{stat.value}</div>
            <div className="mt-1 text-sm text-ink/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl text-ink">Amiben senki nem ver meg</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
            <h3 className="font-display text-lg text-ink">{pillar.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
