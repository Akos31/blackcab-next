import { contact } from "@/lib/site-data";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(contact.address.full);

  return (
    <div className={`overflow-hidden rounded-2xl border border-ink/10 ${className}`}>
      <iframe
        title="Black Cab Burger térkép"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 360 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
