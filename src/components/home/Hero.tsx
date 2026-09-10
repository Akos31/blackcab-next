import Image from "next/image";
import Link from "next/link";
import OpeningStatusBadge from "@/components/ui/OpeningStatusBadge";

export default function Hero() {
  return (
    <div className="border-b border-ink/10">
      <br />
      <div className="checker-strip" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cab-red px-4 py-1.5 text-xs font-bold tracking-wide text-white">
              15+ ÉVE FERENCVÁROSBAN
            </span>
            <OpeningStatusBadge />
          </div>

          <h1 className="font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            NICE TO <span className="text-cab-red">MEAT</span> YOU!
          </h1>

          <p className="mt-6 max-w-lg text-lg text-ink/75">
            Londonban a taxisok mindig tudják, hol a legjobb burger a
            sarkon. Mi ezt a tudást hoztuk haza — szaftos marhahús, egyedi
            feltétek, és a saját fuvarod, ahogy szereted.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-cab-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cab-red-dark"
            >
              ★ Étlap
            </Link>
            <Link
              href="/helyszin"
              className="rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-cab-red hover:text-cab-red"
            >
              Helyszín
            </Link>
          </div>
        </div>

        <div className="hero-photo relative">
          <div className="aspect-[4/3] w-full rounded-2xl border border-ink/10 bg-paper shadow-[8px_8px_0_0_var(--color-ink)] sm:shadow-[12px_12px_0_0_var(--color-ink)]">
            {/* Hero kép – next/image optimalizálással */}
            <Image
              src="/images/hero.png"
              alt="Black Cab Burger hero – szaftos burger közelről"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
