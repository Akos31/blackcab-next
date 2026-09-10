import type { Metadata } from "next";
import { Anton, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RestaurantJsonLd from "@/components/seo/RestaurantJsonLd";
import { siteConfig } from "@/lib/site-data";

// `next/font/google` build időben tölti le és hosztolja saját magát a
// szerveren — NEM futásidejű CDN-hívás a Google felé, tehát ez már megoldja
// a Flutter-verzió `google_fonts` runtime-hívásának sebességi/adatvédelmi
// problémáját.
//
// FONTOS: az "Anton" egy ideiglenes helyettesítő a márka saját
// "WhiskeyTown" fejléc-fontjáért. Ha megvan a licencelt fontfájl, cseréld
// `next/font/local`-ra (lásd a komment alul), hogy a valódi márkakarakter
// jelenjen meg.
// Példa a saját fontfájl bekötésére, ha megérkezik a WhiskeyTown licenc:
//
import localFont from "next/font/local";
const display = localFont({
  variable: "--font-display",
  src: "../../public/fonts/WhiskeyTown-Sober-HU.ttf",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.shortDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink antialiased">
        <RestaurantJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
