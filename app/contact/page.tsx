import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book 8ft ride-on robots for your party or event. Call 813-993-6483 or 813-784-5543, or email roboticadventuresandthrills@gmail.com. Serving Brandon, FL and surrounding areas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Get in touch" title={<>Lock in your <span className="text-cyan">date</span>.</>}>
        <p>Contact us today to lock in your date and time! Serving {site.serviceArea}.</p>
      </PageHero>

      <section aria-label="Contact details and inquiry form">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
          <Reveal className="space-y-8">
            <div>
              <h2 className="label flex items-center gap-2 text-cyan-soft">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call
              </h2>
              <ul className="mt-3 space-y-1">
                {site.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="font-display text-3xl font-bold hover:text-glow md:text-4xl">
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label flex items-center gap-2 text-cyan-soft">
                <Mail className="h-4 w-4" aria-hidden="true" /> Email
              </h2>
              <a href={`mailto:${site.email}`} className="mt-3 block break-all text-[17px] hover:text-glow">
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="label flex items-center gap-2 text-cyan-soft">
                <Clock className="h-4 w-4" aria-hidden="true" /> Opening hours
              </h2>
              <dl className="mt-3 max-w-xs space-y-1.5 font-mono text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-muted">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="label flex items-center gap-2 text-cyan-soft">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Service area
              </h2>
              <p className="mt-3 text-[16px] text-muted">
                Based in {site.base.city}, {site.base.region}. Up to 20 miles of travel (one-way) is included with every package;{" "}
                <Link href="/pricing#travel" className="text-cyan hover:text-glow">
                  see the travel calculator
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="cut cut-lg bg-surface p-6 md:p-10">
            <h2 className="display text-3xl md:text-4xl">Send an inquiry</h2>
            <p className="mt-3 text-[15px] text-muted">
              Tell us your date, venue and number of kids, and we&apos;ll confirm availability. The setup area must be a hard, completely flat
              surface.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
