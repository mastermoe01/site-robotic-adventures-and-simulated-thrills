"use client";

import { useSyncExternalStore } from "react";
import { Lock, MapPin } from "lucide-react";
import { mapsLink, schedule } from "@/lib/site";

const fmt = (iso: string) => {
  const d = new Date(`${iso}T12:00:00`);
  return {
    mon: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    dow: d.toLocaleDateString("en-US", { weekday: "short" }),
  };
};

const noop = () => () => {};

const localToday = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/** The published event calendar. Past dates drop off by the visitor's own date. */
export default function Schedule({ limit, publicOnly = false }: { limit?: number; publicOnly?: boolean }) {
  // null during prerender: the static HTML lists every date; the visitor's clock then drops past ones.
  const today = useSyncExternalStore(noop, localToday, () => null);

  let items = schedule.filter((e) => (today ? e.date >= today : true));
  if (publicOnly) items = items.filter((e) => !e.private);
  if (limit) items = items.slice(0, limit);

  if (today && items.length === 0) {
    return (
      <p className="cut border border-line bg-surface p-6 text-muted">
        New dates are on the way. Call or email to hear where the robots will be next, or to book your own.
      </p>
    );
  }

  return (
    <ol className="divide-y divide-line border-y border-line">
      {items.map((e) => {
        const d = fmt(e.date);
        return (
          <li key={`${e.date}-${e.title}`} className="grid grid-cols-[72px_1fr] gap-5 py-5 md:grid-cols-[96px_1fr_auto] md:items-center md:gap-8">
            <time dateTime={e.date} className="font-mono leading-tight">
              <span className="block text-[12px] tracking-[0.16em] text-cyan-soft">
                {d.mon} · {d.dow}
              </span>
              <span className="font-display text-4xl font-bold">{d.day}</span>
            </time>
            <div>
              <h3 className={`font-display text-xl font-semibold md:text-2xl ${e.private ? "text-muted" : ""}`}>
                {e.private && <Lock className="mr-2 inline h-4 w-4 -translate-y-0.5" aria-hidden="true" />}
                {e.private ? "Booked — private event" : e.title}
                {e.kind && <span className="ml-3 align-middle font-mono text-[12px] font-normal tracking-[0.12em] text-cyan-soft">{e.kind.toUpperCase()}</span>}
              </h3>
              {e.address && (
                <a
                  href={mapsLink(e.address)}
                  target="_blank"
                  rel="noopener"
                  className="mt-1 inline-flex items-center gap-1.5 text-[15px] text-muted hover:text-glow"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {e.address}
                </a>
              )}
            </div>
            {e.time && <p className="col-start-2 font-mono text-[14px] md:col-start-auto md:text-right">{e.time}</p>}
          </li>
        );
      })}
    </ol>
  );
}
