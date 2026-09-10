import Link from "next/link";
import { orderLinks } from "@/lib/site-data";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/rolunk", label: "Rólunk" },
  { href: "/menu", label: "Menü" },
  { href: "/helyszin", label: "Helyszín" },
  { href: "/galeria", label: "Galéria" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wide text-cab-red sm:text-2xl">
            BLACK CAB BURGER
          </span>
          <span aria-hidden className="text-cab-red">★</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Fő navigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-cab-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={orderLinks.wolt}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#00c2e8] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Rendelj Wolt-ról
          </a>
          <a
            href={orderLinks.foodora}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#d60265] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Rendelj Foodora-ról
          </a>
        </div>

        <MobileNav navLinks={navLinks} />
      </div>
    </header>
  );
}
