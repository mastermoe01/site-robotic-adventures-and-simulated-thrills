import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { press, servicesOffered, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Robotic Adventures and Simulated Thrills is a mobile ride-on robot business from Valrico, FL, started by career firefighter Vick Brown, bringing 8ft robots to parties, festivals and community events.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About us" title={<>A firefighter&apos;s <span className="text-cyan">next adventure</span>.</>}>
        <p>
          Robotic Adventures and Simulated Thrills delivers an unparalleled, high-tech entertainment experience that transforms any ordinary
          gathering into an unforgettable event.
        </p>
      </PageHero>

      <section aria-labelledby="story-h" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
          <Reveal>
            <div className="cut cut-lg overflow-hidden">
              <Photo id="22" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] w-full" alt="The Robotic Adventures tent at an event, with riders signing up" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="story-h" className="display text-[clamp(2.25rem,4.5vw,3.75rem)]">
              The story
            </h2>
            <div className="mt-6 space-y-5 text-[17px] text-muted">
              <p>
                {site.owner} has spent 23 years as a career firefighter. As he neared retirement, he set his sights on something new: an interactive
                entertainment business built around 8-foot robots that riders operate from the inside, joysticks in hand.
              </p>
              <p>
                The spark came from family. His brother runs a stationary robot business in Florida&apos;s Panhandle, and Vick saw the chance to take
                the idea mobile, bringing the robots to birthday parties, fairs, festivals and community showcases around Brandon and beyond.
              </p>
              <p>
                Vick wants to bring the rides to children&apos;s hospitals, burn units, schools and camps, too.
              </p>
            </div>
            <figure className="cut mt-10 border-l-2 border-cyan bg-surface p-6">
              <blockquote className="font-display text-2xl font-semibold leading-snug">
                &ldquo;If you have any type of idea you want to pursue, go for it and have faith, because you only live once.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[14px] text-muted">
                {site.owner}, founder, to{" "}
                <a href={press.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-cyan hover:text-glow">
                  {press.outlet}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
            <figure className="mt-5 px-6">
              <blockquote className="text-[17px] text-text">
                &ldquo;Oh, yeah, this is it, and the kids love it. And the adults love to get on the robots as well.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[14px] text-muted">{site.owner}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="svc-h" className="border-b border-line bg-hangar-deep">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="max-w-3xl">
            <p className="label text-cyan-soft">Services offered</p>
            <h2 id="svc-h" className="display mt-5 text-[clamp(2.25rem,5vw,4rem)]">
              The future of amusement, at your venue.
            </h2>
            <p className="mt-6 text-[17px] text-muted">
              Specializing in cutting-edge, interactive robotic rides, the company brings the thrilling sensation of futuristic motion technology
              directly to communities, festivals, and private celebrations.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {servicesOffered.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 0.06} className="cut bg-surface p-7 md:p-9">
                <p className="font-mono text-[13px] text-cyan-soft">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-4 text-[15px] text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
