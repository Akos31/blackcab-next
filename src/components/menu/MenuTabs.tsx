"use client";

import { useState } from "react";
import { menu, sizeGuide } from "@/lib/site-data";
import MenuItemCard from "./MenuItemCard";

export default function MenuTabs() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((category) => category.id === activeId) ?? menu[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menü kategóriák"
        className="flex flex-wrap justify-center gap-2"
      >
        {menu.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(category.id)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-bold transition-colors ${
                isActive
                  ? "border-cab-red bg-cab-red text-white"
                  : "border-ink/15 text-ink hover:border-ink/40"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {active.items.map((item, index) => {
          const isLastOdd =
            active.items.length % 2 === 1 &&
            index === active.items.length - 1;
          return (
            <div
              key={item.name}
              className={isLastOdd ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}
            >
              <MenuItemCard item={item} />
            </div>
          );
        })}
      </div>

      {(activeId === "klasszikus" || activeId === "specialitas") && (
        <p className="mt-10 rounded-xl border border-ink/10 bg-paper px-5 py-4 text-center text-sm text-ink/60">
          {sizeGuide}
        </p>
      )}
    </div>
  );
}
