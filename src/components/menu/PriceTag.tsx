export default function PriceTag({ priceHuf }: { priceHuf: number }) {
  return (
    <span className="whitespace-nowrap font-display text-lg text-cab-red">
      {priceHuf.toLocaleString("hu-HU")} Ft
    </span>
  );
}
