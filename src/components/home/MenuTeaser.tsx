import Link from "next/link";
import Section from "@/components/ui/Section";
import MenuItemCard from "@/components/menu/MenuItemCard";
import { menu } from "@/lib/site-data";

const highlightNames = ["Cabbie Burger", "Black Smash", "Giga Double Decker"];

export default function MenuTeaser() {
  const highlights = menu
    .flatMap((category) => category.items)
    .filter((item) => highlightNames.includes(item.name));

  return (
    <Section className="border-b border-ink/10 bg-paper/40">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-cab-red">Kínálatunk</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Black Cab Selection
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {highlights.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/menu"
          className="inline-block rounded-full bg-cab-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cab-red-dark"
        >
          Teljes étlap
        </Link>
      </div>
    </Section>
  );
}
