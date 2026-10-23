import { packages, site, ticket } from "@/lib/site";

/** EntertainmentBusiness (a LocalBusiness subtype) — real data only. City-level address by
 *  design; no aggregateRating because no reviews have been captured. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: [`${site.url}/og.jpg`, `${site.url}/photos/10.jpg`],
    telephone: site.phones.map((p) => p.tel),
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.base.city,
      addressRegion: site.base.region,
      postalCode: site.base.zip,
      addressCountry: "US",
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Individual ride ticket (5 minutes)", price: ticket.price, priceCurrency: "USD" },
      ...packages.map((p) => ({
        "@type": "Offer",
        name: `${p.name} Package — ${p.robots} ${p.robots === 1 ? "robot" : "robots"}, 2 hours, up to ${p.kids} kids`,
        price: p.price,
        priceCurrency: "USD",
      })),
    ],
    description:
      "Mobile entertainment with 8ft tall ride-on robots for birthday parties, summer camps, festivals and custom events in Brandon, Florida and surrounding areas.",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
