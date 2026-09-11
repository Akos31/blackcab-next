import Section from "@/components/ui/Section";
import { googleRating, reviews } from "@/lib/site-data";
import Link from "next/link";

function SourceIcon({ source }: { source: "google" | "facebook" }) {
    if (source === "facebook") {
        return (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13.5 9H15V6.5h-1.8c-2 0-3.2 1.2-3.2 3.3V11H8v2.5h2v6.5h2.6V13.5h2l.4-2.5h-2.4V9.9c0-.6.3-.9.9-.9Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21.6 12.23c0-.75-.07-1.47-.19-2.16H12v4.1h5.4a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.96-4.33 2.96-7.46Z" />
            <path d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.6-4.12H3.06v2.58A10 10 0 0 0 12 22Z" />
            <path d="M6.4 13.94a6 6 0 0 1 0-3.86V7.5H3.06a10 10 0 0 0 0 9l3.34-2.56Z" />
            <path d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.94 5.5l3.34 2.58c.8-2.36 3-4.1 5.6-4.1Z" />
        </svg>
    );
}

function Stars() {
    return (
        <div aria-hidden className="flex gap-0.5 text-cab-red">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <Section className="border-b border-ink/10 bg-paper/40">
            <div className="mb-10 text-center">
                <p className="text-sm font-semibold text-cab-red">Vélemények</p>
                <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
                    Amit a vendégeink mondanak
                </h2>
                <div className="mt-4 flex items-center justify-center gap-2 text-ink/70">
                    <Stars />
                    <span className="font-semibold text-ink">{googleRating.value.toString().replace(".", ",")}</span>
                    <span className="text-sm">· {googleRating.count.toLocaleString("hu-HU")}+ Google-értékelés</span>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
                {reviews.map((review) => (
                    <figure
                        key={review.name}
                        className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-paper p-6"
                    >
                        <Stars />
                        <blockquote className="text-sm text-ink/80">&ldquo;{review.quote}&rdquo;</blockquote>
                        <figcaption className="mt-auto flex items-center gap-2 text-sm font-semibold text-ink/70">
                            <SourceIcon source={review.source} />
                            {review.name}
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Link
                    href={googleRating.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-cab-red underline decoration-2 underline-offset-4"
                >
                    Összes vélemény a Google-on →
                </Link>
            </div>
        </Section>
    );
}