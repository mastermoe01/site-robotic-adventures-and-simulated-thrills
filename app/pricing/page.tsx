import type { Metadata } from "next";
import { CloudLightning, MapPinned, Ruler, Trees } from "lucide-react";
import PageHero from "@/components/PageHero";
import Packages from "@/components/Packages";
import TravelCalculator from "@/components/TravelCalculator";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { setupRequirements, travel, travelChart, travelFee } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing & Booking",
  description:
    "Robot ride pricing: $15 individual 5-minute rides; Bronze $400, Silver $600 and Gold $800 two-hour party packages. 20 miles of travel included from Valrico, FL; travel fee calculator.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero kicker="Pricing & booking guide" title={<>Clear prices. <span className="text-cyan">No surprises.</span></>}>
        <p>
          Bring the ultimate futuristic excitement to your next event! Below you will find our standard individual rates, special group packages, and
          booking requirements.
        </p>
      </PageHero>

      <section aria-labelledby="pk-h" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
            <h2 id="pk-h" className="display text-[clamp(2.25rem,5vw,4rem)]">
              Private group &amp; event rates
            </h2>
            <p className="text-[17px] text-muted">
              Perfect for birthday parties, school festivals, and large celebrations. All group packages feature a 2-hour minimum duration.
            </p>
          </Reveal>
          <div className="mt-12">
            <Packages />
          </div>
          <Reveal className="cut mt-5 border border-line p-6 md:p-7">
            <h3 className="label text-cyan-soft">How capacity works</h3>
            <p className="mt-3 text-[16px] text-muted">
              To guarantee every child gets a full experience, guest counts are calculated at a comfortable pace of{" "}
              <strong className="text-text">10 kids per robot, per hour</strong> (based on 5-minute ride times plus brief boarding switchovers).
            </p>
          </Reveal>
        </div>
      </section>

      <section id="travel" aria-labelledby="travel-h" className="scroll-mt-16 border-b border-line bg-hangar-deep">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="label text-cyan-soft">Travel &amp; mileage policy</p>
              <h2 id="travel-h" className="display mt-5 text-[clamp(2.25rem,5vw,4rem)]">
                Your travel fee, worked out.
              </h2>
            </div>
            <p className="text-[17px] text-muted">
              All event packages include up to 20 miles of travel (one-way) from our base in Valrico, Florida. For locations beyond this 20-mile radius,
              an additional mileage fee is charged to cover fuel, heavy-duty towing logistics, and travel time for our multi-robot trailer setup:{" "}
              <strong className="text-text">${travel.ratePerMile.toFixed(2)} per mile</strong>, calculated on the total round-trip distance exceeding
              the included zone.
            </p>
          </Reveal>
          <div className="mt-12">
            <Reveal>
              <TravelCalculator />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="label text-cyan-soft">Mileage fee quick-reference</h3>
              <table className="mt-4 w-full font-mono text-[14px]">
                <caption className="sr-only">Travel fee by one-way distance from Valrico</caption>
                <thead>
                  <tr className="border-b border-line text-left text-muted">
                    <th scope="col" className="py-2 font-medium">One-way</th>
                    <th scope="col" className="py-2 font-medium">Round-trip</th>
                    <th scope="col" className="py-2 font-medium">Billable</th>
                    <th scope="col" className="py-2 text-right font-medium">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {travelChart.map((m) => (
                    <tr key={m} className="border-b border-line">
                      <td className="py-2.5">{m === 20 ? "0–20 mi" : `${m} mi`}</td>
                      <td className="py-2.5">{m === 20 ? "Up to 40 mi" : `${m * 2} mi`}</td>
                      <td className="py-2.5">{Math.max(0, m * 2 - 40)} mi</td>
                      <td className="py-2.5 text-right text-cyan">{m === 20 ? "$0.00 (included)" : `$${travelFee(m).toFixed(2)}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className="label text-cyan-soft">Real-world example</h3>
              <ol className="mt-4 space-y-3 text-[15px] text-muted">
                <li>
                  <span className="text-text">The scenario:</span> a birthday party at a park or venue in Lakeland, Florida.
                </li>
                <li>
                  <span className="text-text">Map the route:</span> Google Maps shows the venue is 35 miles from our Valrico base.
                </li>
                <li>
                  <span className="text-text">Total round-trip:</span> <span className="font-mono">35 × 2 = 70 miles</span>.
                </li>
                <li>
                  <span className="text-text">Subtract the included miles:</span> <span className="font-mono">70 − 40 free miles = 30 billable miles</span>.
                </li>
                <li>
                  <span className="text-text">Apply the rate:</span> <span className="font-mono">30 × $2.00 = $60.00</span>.
                </li>
                <li>
                  <span className="text-text">Client quote:</span> the standard birthday party package price plus a $60.00 travel fee.
                </li>
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="setup-h" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="label text-cyan-soft">Location &amp; setup requirements</p>
            <h2 id="setup-h" className="display mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4rem)]">
              We bring the adventure straight to you.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] text-muted">
              {setupRequirements.venues} Before booking, please ensure your venue meets the following conditions:
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            <Reveal as="li" className="cut bg-surface p-7">
              <Ruler className="h-6 w-6 text-cyan" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold">Surface condition</h3>
              <p className="mt-3 text-[15px] text-muted">{setupRequirements.surface}</p>
            </Reveal>
            <Reveal as="li" delay={0.06} className="cut bg-surface p-7">
              <Trees className="h-6 w-6 text-cyan" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold">Park approvals</h3>
              <p className="mt-3 text-[15px] text-muted">{setupRequirements.parks}</p>
            </Reveal>
            <Reveal as="li" delay={0.12} className="cut bg-surface p-7">
              <MapPinned className="h-6 w-6 text-cyan" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold">Base location</h3>
              <p className="mt-3 text-[15px] text-muted">
                Valrico, FL. The first 20 miles (one-way) are free of charge; beyond that, $2.00 per mile on the round-trip miles over 40.
              </p>
            </Reveal>
          </ul>
        </div>
      </section>

      <section aria-labelledby="policy-h" className="border-b border-line bg-hangar-deep">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <CloudLightning className="h-7 w-7 text-cyan" aria-hidden="true" />
            <h2 id="policy-h" className="display mt-5 text-[clamp(2rem,4vw,3rem)]">
              Inclement weather &amp; safety
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-muted">
              <p>Because our robotic experiences and simulators involve high-tech components, safety is our top priority.</p>
              <p>
                If Robotic Adventures and Simulated Thrills deems the weather or environmental conditions unsafe to operate (e.g., severe
                thunderstorms, high winds, heavy rain), we will work with you to reschedule the event at no additional cost.
              </p>
              <p>If the client chooses to cancel due to weather but conditions are deemed safe by our team, the standard cancellation policy applies.</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display text-[clamp(2rem,4vw,3rem)]">Deposits &amp; cancellations</h2>
            <p className="mt-6 text-[16px] text-muted">
              We dedicate significant time, specialized equipment, and staff to prepare for your event, and we reserve our robots and team
              exclusively for your date. A non-refundable deposit secures your date and time slot. Deposit, balance and cancellation terms are
              confirmed with you when you book.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready to book your adventure?" />
    </>
  );
}
