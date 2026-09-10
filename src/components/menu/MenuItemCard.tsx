import type { MenuItem } from "@/lib/site-data";
import PriceTag from "./PriceTag";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-paper p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg text-ink">{item.name}</h3>
        <PriceTag priceHuf={item.priceHuf} />
      </div>
      <p className="text-sm text-ink/70">{item.description}</p>
      {item.sizes && item.sizes.length > 0 && (
        <ul className="mt-1 flex flex-wrap gap-2">
          {item.sizes.map((size) => (
            <li
              key={size}
              className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70"
            >
              {size}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
