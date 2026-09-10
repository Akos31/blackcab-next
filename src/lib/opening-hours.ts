import { openingHours } from "./site-data";

const TIME_ZONE = "Europe/Budapest";

/**
 * Visszaadja a jelenlegi budapesti időt "wall clock" alakban, függetlenül
 * attól, hogy a szervert/böngészőt más időzónában futtatják.
 */
function getBudapestParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const day = weekdayMap[get("weekday")] ?? date.getDay();

  return { day, minutesSinceMidnight: hour * 60 + minute };
}

export type OpeningStatus = {
  isOpen: boolean;
  label: string;
};

/**
 * Kiszámolja, hogy éppen nyitva vagy zárva vagyunk-e, a valós budapesti idő
 * alapján. Szándékosan nincs hardcode-olva "nyitva" — ez direkt válasz arra
 * a problémára, hogy a régi oldalon a jelző félrevezető lehetett.
 */
export function getOpeningStatus(now: Date = new Date()): OpeningStatus {
  const { day, minutesSinceMidnight } = getBudapestParts(now);
  const today = openingHours[day];

  if (!today) {
    return { isOpen: false, label: "Ma zárva vagyunk" };
  }

  const [openH, openM, closeH, closeM] = today;
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const isOpen = minutesSinceMidnight >= openMinutes && minutesSinceMidnight < closeMinutes;

  if (isOpen) {
    const closeLabel = `${String(closeH).padStart(2, "0")}:${String(closeM).padStart(2, "0")}`;
    return { isOpen: true, label: `Nyitva vagyunk — ${closeLabel}-ig` };
  }

  const openLabel = `${String(openH).padStart(2, "0")}:${String(openM).padStart(2, "0")}`;
  return { isOpen: false, label: `Zárva — ${openLabel}-kor nyitunk` };
}
