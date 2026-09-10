import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import MapEmbed from "@/components/ui/MapEmbed";
import OpeningStatusBadge from "@/components/ui/OpeningStatusBadge";
import { contact, openingHoursDisplay, paymentMethods } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Helyszín & nyitvatartás",
  description:
    "Black Cab Burger, Budapest, Mester u. 46, 1095. Nyitvatartás, útvonaltervezés, fizetési módok.",
};

export default function LocationPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    contact.address.full
  )}`;

  return (
    <Section>
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-cab-red">Elérhetőség</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">
          Helyszín &amp; nyitvatartás
        </h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-4">
          <OpeningStatusBadge />

          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Címünk
            </p>
            <p className="mt-1 font-semibold text-ink">{contact.address.full}</p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Nyitvatartás
            </p>
            <p className="mt-1 font-semibold text-ink">{openingHoursDisplay}</p>
            <p className="mt-1 text-xs text-ink/50">
              Konyha 21:50-kor zár.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              E-mail
            </p>
            <p className="mt-1 font-semibold text-ink">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Fizetési módok
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <li
                  key={method.id}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {method.label}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block w-fit rounded-full bg-cab-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cab-red-dark"
          >
            ▲ Útvonaltervezés
          </a>
        </div>

        <MapEmbed className="h-full min-h-[420px]" />
      </div>
    </Section>
  );
}
