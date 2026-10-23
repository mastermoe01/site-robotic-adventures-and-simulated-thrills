import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Schedule from "@/components/Schedule";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ticket } from "@/lib/site";

export const metadata: Metadata = {
  title: "Next Events",
  description:
    "Where to ride the 8ft robots next: festivals, trunk-or-treats and pop-up events around Wesley Chapel, Riverview, Dade City and St. Petersburg. $15 per 5-minute ride.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero kicker="Next events" title={<>Where the robots <span className="text-cyan">ride next</span>.</>}>
        <p>
          At public festivals and pop-ups, individual rides are ${ticket.price} per rider for {ticket.minutes} minutes of ride time. Dates marked
          private are booked parties. Want your own?{" "}
          <Link href="/contact" className="text-cyan underline decoration-cyan/40 underline-offset-4 hover:text-glow">
            Check your date
          </Link>
          .
        </p>
      </PageHero>
      <section aria-label="Event schedule">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Schedule />
          </Reveal>
        </div>
      </section>
      <CtaBand title="Put the robots on your calendar." />
    </>
  );
}
