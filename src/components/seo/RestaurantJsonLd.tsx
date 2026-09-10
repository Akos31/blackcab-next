import { contact, openingHours, orderLinks, siteConfig, socialLinks } from "@/lib/site-data";

const dayCodes = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function toHoursSpecification() {
  return Object.entries(openingHours)
    .filter(([, hours]) => hours !== null)
    .map(([day, hours]) => {
      const [openH, openM, closeH, closeM] = hours!;
      const pad = (n: number) => String(n).padStart(2, "0");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayCodes[Number(day)]}`,
        opens: `${pad(openH)}:${pad(openM)}`,
        closes: `${pad(closeH)}:${pad(closeM)}`,
      };
    });
}

export default function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    url: siteConfig.url,
    servesCuisine: ["Burgers", "American", "Street Food"],
    priceRange: "$$",
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.lat,
      longitude: contact.geo.lng,
    },
    openingHoursSpecification: toHoursSpecification(),
    sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.tiktok],
    menu: `${siteConfig.url}/menu`,
    acceptsReservations: "False",
    hasMenu: `${siteConfig.url}/menu`,
    orderMenu: [orderLinks.wolt, orderLinks.foodora],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
