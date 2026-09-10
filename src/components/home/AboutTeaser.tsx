import Link from "next/link";
import Section from "@/components/ui/Section";
import { brandStory, pillars } from "@/lib/site-data";

export default function AboutTeaser() {
  return (
    <Section className="border-b border-ink/10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-cab-red">{brandStory.eyebrow}</p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            {brandStory.title}
          </h2>
          <p className="mt-5 text-ink/75">{brandStory.paragraphs[0]}</p>

          <blockquote className="mt-6 border-l-4 border-cab-red pl-4 text-ink/80 italic">
            &ldquo;{brandStory.quote.text}&rdquo;
            <footer className="mt-2 text-sm font-semibold text-ink/60 not-italic">
              — {brandStory.quote.source}
            </footer>
          </blockquote>

          <Link
            href="/rolunk"
            className="mt-6 inline-block text-sm font-bold text-cab-red underline decoration-2 underline-offset-4"
          >
            A teljes történet →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-ink/10 bg-paper p-6"
            >
              <h3 className="font-display text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
