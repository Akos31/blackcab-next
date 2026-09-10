import Link from "next/link";
import {
  contact,
  openingHoursDisplay,
  siteConfig,
  socialLinks,
} from "@/lib/site-data";

function SocialIcon({ type }: { type: "facebook" | "instagram" | "tiktok" }) {
  const paths: Record<typeof type, React.ReactNode> = {
    facebook: (
      <path d="M13.5 9H15V6.5h-1.8c-2 0-3.2 1.2-3.2 3.3V11H8v2.5h2v6.5h2.6V13.5h2l.4-2.5h-2.4V9.9c0-.6.3-.9.9-.9Z" />
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" />
      </>
    ),
    tiktok: (
      <path d="M14.5 4.2c.4 2 1.7 3.3 3.7 3.5v2.4c-1.3 0-2.5-.4-3.6-1.1v5.3a4.9 4.9 0 1 1-4.9-4.9c.2 0 .5 0 .7.1v2.5a2.4 2.4 0 1 0 1.7 2.3V4.2Z" />
    ),
  };

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {paths[type]}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-cab-red">{siteConfig.name}</div>
          <p className="mt-1 font-display text-sm tracking-wide text-ink">
            {siteConfig.tagline.toUpperCase()}
          </p>
          <p className="mt-4 max-w-xs text-sm text-ink/70">{siteConfig.shortDescription}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Elérhetőségek
          </h3>
          <p className="mt-3 text-sm text-ink/80">Cím: {contact.address.full}</p>
          <p className="text-sm text-ink/80">
            E-mail:{" "}
            <a href={`mailto:${contact.email}`} className="underline decoration-cab-red/40 underline-offset-2">
              {contact.email}
            </a>
          </p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/60">
            Nyitvatartás
          </h3>
          <p className="mt-3 text-sm text-ink/80">{openingHoursDisplay}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Kövess minket
          </h3>
          <div className="mt-3 flex gap-3">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-cab-red hover:text-cab-red"
            >
              <SocialIcon type="facebook" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-cab-red hover:text-cab-red"
            >
              <SocialIcon type="instagram" />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-cab-red hover:text-cab-red"
            >
              <SocialIcon type="tiktok" />
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/70">
            Rendelj házhoz a népszerű szállítási partnereinken keresztül.
          </p>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <p className="mx-auto max-w-6xl px-4 text-xs text-ink/50 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name}. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
