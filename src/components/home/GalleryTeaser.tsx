import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { galleryPlaceholders } from "@/lib/site-data";

export default function GalleryTeaser() {
  return (
    <Section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-cab-red">Galéria</p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            Ínycsiklandó pillanatok
          </h2>
        </div>
        <Link
          href="/galeria"
          className="text-sm font-bold text-cab-red underline decoration-2 underline-offset-4"
        >
          Teljes galéria →
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {galleryPlaceholders.map((photo) => (
          <figure
            key={photo.id}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-paper"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm font-medium text-ink/80">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
