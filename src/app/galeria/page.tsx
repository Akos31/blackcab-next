import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { galleryPlaceholders } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galéria",
  description: "Fotók a Black Cab Burger burgereiről, krumplijáról és hangulatáról.",
};

export default function GalleryPage() {
  return (
    <Section>
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-cab-red">Galéria</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">
          Ínycsiklandó pillanatok
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Élőben még jobb, gyere és kóstold meg!
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
