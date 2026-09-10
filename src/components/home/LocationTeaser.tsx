import Link from "next/link";
import Section from "@/components/ui/Section";
import MapEmbed from "@/components/ui/MapEmbed";
import OpeningStatusBadge from "@/components/ui/OpeningStatusBadge";
import { contact, openingHoursDisplay, paymentMethods } from "@/lib/site-data";

export default function LocationTeaser() {
  return (
    <Section className="border-b border-ink/10">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-cab-red">Elérhetőség</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Helyszín &amp; nyitvatartás
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
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

          <Link
            href="/helyszin"
            className="mt-2 text-sm font-bold text-cab-red underline decoration-2 underline-offset-4"
          >
            Útvonaltervezés és részletek →
          </Link>
        </div>

        <MapEmbed className="h-full min-h-[360px]" />
      </div>
    </Section>
  );
}
