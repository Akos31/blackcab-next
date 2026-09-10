"use client";

import { useEffect, useState } from "react";
import { getOpeningStatus, type OpeningStatus } from "@/lib/opening-hours";

/**
 * A jelző a VALÓS idő alapján számolja ki a nyitva/zárva állapotot
 * (Europe/Budapest időzóna), nem hardcode-olt szöveg — ez direkt válasz
 * arra, hogy a korábbi verzión ez félrevezető lehetett.
 *
 * Szerveroldalon is renderelünk egy kezdeti állapotot (a build/request
 * idejéből), majd kliensoldalon percenként frissítjük.
 */
export default function OpeningStatusBadge() {
  const [status, setStatus] = useState<OpeningStatus>(() => getOpeningStatus());

  useEffect(() => {
    // A kezdeti értéket már a useState inicializátora beállítja — itt csak
    // a percenkénti frissítést indítjuk el, hogy elkerüljük a felesleges,
    // szinkron setState-hívást az effect törzsében.
    const interval = setInterval(() => setStatus(getOpeningStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
        status.isOpen
          ? "border-meter-green/40 text-meter-green"
          : "border-ink/20 text-ink/60"
      }`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-meter-green" : "bg-ink/40"}`}
      />
      {status.label}
    </span>
  );
}
