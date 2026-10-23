import Link from "next/link";
import { ArrowRight, Phone, Quote } from "lucide-react";
import HeroCanvas from "@/components/three/HeroCanvas";
import HeroFallback from "@/components/three/HeroFallback";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Packages from "@/components/Packages";
import Schedule from "@/components/Schedule";
import PhotoReel from "@/components/PhotoReel";
import CtaBand from "@/components/CtaBand";
import { eventTypes, press, primaryPhone, robots } from "@/lib/site";

const specs = [
  { k: "$15", v: "5-minute ride" },
  { k: "$400", v: "parties from" },
  { k: "10", v: "riders / robot / hour" },
  { k: "20 mi", v: "travel included" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="floor-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-[75%] md:block" aria-hidden="true">
          <HeroCanvas />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-24 md:pt-16">
          <div>
            <p className="label text-cyan-soft">Mobile robot rides · Brandon &amp; Valrico, FL</p>
            <h1 className="display mt-6 text-[clamp(3.25rem,8vw,7.5rem)]">
              Ride an <span className="whitespace-nowrap text-cyan">8‑foot</span> robot.
            </h1>
            <p className="mt-7 max-w-xl text-[19px] text-muted">
              We bring unique, unforgettable entertainment to kids&apos; parties and events with our amazing 8ft tall ride-on robots.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary cut cut-sm">
                Check your date
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={`tel:${primaryPhone.tel}`} className="btn-ghost cut cut-sm font-mono">
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                {primaryPhone.display}
              </a>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
              {specs.map((s) => (
                <div key={s.v} className="bg-hangar/90 px-4 py-4">
                  <dt className="sr-only">{s.v}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-cyan">{s.k}</span>
                    <span className="mt-1 block font-mono text-[12px] leading-tight text-muted">{s.v}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-[420px]">
            {/* Phones never load three.js: the static track sits behind the photo instead. */}
            <div className="absolute -inset-10 md:hidden" aria-hidden="true">
              <HeroFallback />
            </div>
            <div className="cut cut-lg relative overflow-hidden ring-1 ring-cyan/40">
              <Photo id="10" priority sizes="(min-width: 768px) 420px, 90vw" className="aspect-[4/5] w-full" />
              <span className="label absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hangar/90 to-transparent px-5 pb-4 pt-12 text-glow">
                Joysticks in hand · 8ft tall
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section aria-labelledby="types-h" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-3xl">
            <p className="label text-cyan-soft">Entertainment for kids and adults</p>
            <h2 id="types-h" className="display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Pick your adventure.
            </h2>
            <p className="mt-6 text-[18px] text-muted">
              Our spectacular 8ft tall robots are perfect for any event where you want to create a truly memorable experience. From birthday parties
              to large festivals, we bring the excitement directly to you in Brandon, Florida, and surrounding areas.
            </p>
          </Reveal>
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.06}>
                <Link href="/contact" className="cut group flex h-full flex-col overflow-hidden bg-surface">
                  <div className="overflow-hidden">
                    <Photo id={t.photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-bold">{t.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] text-muted">{t.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan">
                      {t.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Robots */}
      <section aria-labelledby="robots-h" className="border-t border-line bg-hangar-deep">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label text-cyan-soft">The fleet</p>
              <h2 id="robots-h" className="display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Meet the robots.
              </h2>
            </div>
            <Link href="/robots" className="btn-ghost cut cut-sm">
              Discover our robots
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {robots.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 0.08}>
                <Link href={`/robots#${r.slug}`} className="cut cut-lg group relative block overflow-hidden">
                  <Photo id={r.photos[0]} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hangar via-hangar/70 to-transparent p-6 pt-20">
                    <p className="label text-cyan-soft">0{i + 1}</p>
                    <h3 className="mt-1 font-display text-3xl font-bold">{r.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Packages */}
      <section aria-labelledby="pkg-h" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="label text-cyan-soft">Private group &amp; event rates</p>
              <h2 id="pkg-h" className="display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Flat-rate party packages.
              </h2>
            </div>
            <p className="text-[17px] text-muted">
              To guarantee every child gets a full experience, guest counts are calculated at a comfortable pace of 10 kids per robot, per hour
              (based on 5-minute ride times plus brief boarding switchovers).
            </p>
          </Reveal>
          <div className="mt-14">
            <Packages />
          </div>
          <Reveal className="mt-8">
            <Link href="/pricing" className="inline-flex items-center gap-2 font-semibold text-cyan hover:text-glow">
              Travel fees, setup requirements &amp; the mileage calculator
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Public events */}
      <section aria-labelledby="events-h" className="border-t border-line bg-hangar-deep">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-32">
          <Reveal>
            <p className="label text-cyan-soft">Next events</p>
            <h2 id="events-h" className="display mt-5 text-[clamp(2.5rem,5vw,4rem)]">
              Catch us in public.
            </h2>
            <p className="mt-6 text-[17px] text-muted">Try a $15 ride at a festival near you before you book a party.</p>
            <Link href="/events" className="btn-ghost cut cut-sm mt-8">
              Full schedule
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <Schedule limit={3} publicOnly />
          </Reveal>
        </div>
      </section>

      {/* Press */}
      <section aria-labelledby="press-h" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 id="press-h" className="label text-cyan-soft">
              In the news · {press.outlet}
            </h2>
            <figure className="mt-8">
              <Quote className="h-10 w-10 text-cyan" aria-hidden="true" />
              <blockquote className="display mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05]">
                &ldquo;{press.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-[15px] text-muted">
                <span className="font-semibold text-text">{press.quoteBy}</span>, {press.quoteRole}, quoted in{" "}
                <a href={press.url} target="_blank" rel="noopener" className="text-cyan underline decoration-cyan/40 underline-offset-4 hover:text-glow">
                  &ldquo;{press.title}&rdquo;
                </a>{" "}
                ({press.outlet}, July 16, 2026)
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Reel */}
      <section aria-label="Photos from recent events" className="overflow-hidden border-t border-line py-16 md:py-20">
        <PhotoReel ids={["20", "06", "13", "26", "18", "24", "27", "09", "28", "22", "15"]} />
        <div className="mx-auto mt-10 max-w-7xl px-5 md:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 font-semibold text-cyan hover:text-glow">
            View event gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
