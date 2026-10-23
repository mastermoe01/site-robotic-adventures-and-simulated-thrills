import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { packages, ticket } from "@/lib/site";

/** The three flat-rate party packages plus the individual ride ticket, as published. */
export default function Packages() {
  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.06}>
            <article
              className={`cut cut-lg relative flex h-full flex-col p-7 md:p-8 ${
                p.name === "Gold" ? "bg-raised ring-1 ring-cyan/60 ring-inset" : "bg-surface"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl font-bold">{p.name}</h3>
                <span className="label text-muted">
                  {p.robots} {p.robots === 1 ? "robot" : "robots"}
                </span>
              </div>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-cyan">${p.price}</span>
                <span className="font-mono text-[14px] text-muted">/ 2-hr event</span>
              </p>
              <p className="mt-1 h-6 font-mono text-[13px] text-cyan-soft">{p.save > 0 ? `Save $${p.save}` : ""}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[15px]">
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  Up to {p.kids} kids ({p.perHour} kids per hour)
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  2-hour minimum duration
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  Up to 20 miles of travel (one-way) included
                </li>
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
      <Reveal>
        <div className="cut mt-5 flex flex-col gap-4 border border-line bg-hangar-deep p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <h3 className="font-display text-2xl font-bold">Individual ride tickets</h3>
            <p className="mt-1 text-[15px] text-muted">
              Perfect for public festivals, community events, and pop-up locations hosted by Robotic Adventures.
            </p>
          </div>
          <p className="flex shrink-0 items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-cyan">${ticket.price}</span>
            <span className="font-mono text-[14px] text-muted">per rider · {ticket.minutes} minutes of ride time</span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
