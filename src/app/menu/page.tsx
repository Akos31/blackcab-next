import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import MenuTabs from "@/components/menu/MenuTabs";

export const metadata: Metadata = {
  title: "Étlap",
  description:
    "Black Cab Burger étlap: smash burgerek, klasszikus burgerek, specialitások, hot dog, saláták és italok — árakkal, méretekkel.",
};

export default function MenuPage() {
  return (
    <Section>
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-cab-red">Kínálatunk</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">
          Black Cab Selection
        </h1>
      </div>
      <MenuTabs />
    </Section>
  );
}
