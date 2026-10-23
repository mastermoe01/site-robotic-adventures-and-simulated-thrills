import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import VideoSlot from "@/components/VideoSlot";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { ourRobots, robots, setupRequirements } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Robots",
  description:
    "Meet the 8ft tall ride-on robots: dual-joystick controls, LED lighting and smooth, controlled motion, with 10 riders per robot per hour. Plus our robot ride FAQ.",
  alternates: { canonical: "/robots" },
  openGraph: { images: [{ url: "/photos/10.jpg", width: 900, height: 1600, alt: "Girl seated in the cockpit of the red robot" }] },
};

export default function RobotsPage() {
  return (
    <>
      <PageHero kicker="Our robots" title={<>Futuristic machinery, built for <span className="text-cyan">riders</span>.</>}>
        <p>{ourRobots[0]}</p>
      </PageHero>

      {robots.map((r, i) => (
        <section key={r.slug} id={r.slug} aria-labelledby={`${r.slug}-h`} className={`scroll-mt-20 border-b border-line ${i % 2 ? "bg-hangar-deep" : ""}`}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id={`${r.slug}-h`} className="display text-[clamp(2.25rem,5vw,4rem)]">
                <span className="mr-4 font-mono text-[0.35em] font-medium tracking-[0.16em] text-cyan-soft align-middle">0{i + 1}</span>
                {r.name}
              </h2>
              <p className="label text-muted">8ft tall · ride-on</p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {r.photos.slice(0, 4).map((id, k) => (
                <Reveal as="li" key={id} delay={k * 0.05} className={k === 0 ? "col-span-2 row-span-2" : ""}>
                  <div className="cut h-full overflow-hidden">
                    <Photo
                      id={id}
                      sizes={k === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                      className={`h-full w-full ${k === 0 ? "aspect-[4/5]" : "aspect-[3/4]"}`}
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
            <VideoSlot slug={r.slug} name={r.name} fallbackPoster={`/photos/${r.photos[0]}.jpg`} />
          </div>
        </section>
      ))}

      <section aria-labelledby="where-h" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <p className="label text-cyan-soft">Where they can ride</p>
            <h2 id="where-h" className="display mt-5 text-[clamp(2.25rem,5vw,4rem)]">
              Any flat, hard surface.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="space-y-5 text-[17px] text-muted">
            <p>{ourRobots[1]}</p>
            <p className="cut border-l-2 border-cyan bg-surface p-5 text-text">{setupRequirements.surface}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq-h">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="label text-cyan-soft">Frequently asked questions</p>
            <h2 id="faq-h" className="display mt-5 text-[clamp(2.25rem,5vw,4rem)]">
              Robot rides, explained.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
