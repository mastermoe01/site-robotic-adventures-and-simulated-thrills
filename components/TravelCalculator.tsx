"use client";

import { useId, useState } from "react";
import { packages, travel, travelFee } from "@/lib/site";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** The client's published mileage formula, made interactive. */
export default function TravelCalculator() {
  const id = useId();
  const [miles, setMiles] = useState(35);
  const [pkg, setPkg] = useState(packages[0].name);
  const roundTrip = miles * 2;
  const billable = Math.max(0, roundTrip - travel.freeOneWay * 2);
  const fee = travelFee(miles);
  const price = packages.find((p) => p.name === pkg)!.price;

  return (
    <div className="cut cut-lg grid gap-8 bg-surface p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
      <div>
        <label htmlFor={`${id}-miles`} className="label text-cyan-soft">
          One-way distance from Valrico
        </label>
        <div className="mt-4 flex items-baseline gap-3">
          <output htmlFor={`${id}-miles`} className="font-display text-6xl font-bold">
            {miles}
          </output>
          <span className="font-mono text-muted">miles</span>
        </div>
        <input
          id={`${id}-miles`}
          type="range"
          min={0}
          max={80}
          step={1}
          value={miles}
          onChange={(e) => setMiles(Number(e.target.value))}
          className="mt-6 w-full accent-[#48bcf5]"
        />
        <div className="mt-2 flex justify-between font-mono text-[12px] text-muted">
          <span>0</span>
          <span>40</span>
          <span>80</span>
        </div>
        <fieldset className="mt-8">
          <legend className="label text-cyan-soft">Package</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {packages.map((p) => (
              <label
                key={p.name}
                className={`cut cut-sm cursor-pointer border px-3 py-2.5 text-center text-[15px] font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-cyan ${
                  pkg === p.name ? "border-cyan bg-cyan text-hangar" : "border-line hover:border-cyan"
                }`}
              >
                <input type="radio" name={`${id}-pkg`} value={p.name} checked={pkg === p.name} onChange={() => setPkg(p.name)} className="sr-only" />
                {p.name}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <dl className="flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[15px] md:border-l md:border-t-0 md:pl-8 md:pt-0" aria-live="polite">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Total round-trip</dt>
          <dd>{roundTrip} mi</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Free miles</dt>
          <dd>− {travel.freeOneWay * 2} mi</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Billable miles × ${travel.ratePerMile.toFixed(2)}</dt>
          <dd>{billable} mi</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-line pt-3">
          <dt className="text-muted">Travel fee</dt>
          <dd className="text-cyan">{fee === 0 ? "$0.00 (included)" : money(fee)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{pkg} package</dt>
          <dd>{money(price)}</dd>
        </div>
        <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-line pt-4">
          <dt className="font-sans font-semibold">Estimated total</dt>
          <dd className="font-display text-4xl font-bold text-cyan">{money(price + fee)}</dd>
        </div>
        <p className="font-sans text-[13px] text-muted">
          Estimate from our published rates. Measure the one-way distance from Valrico in Google Maps; your quote is confirmed when you book.
        </p>
      </dl>
    </div>
  );
}
