import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import VimeoFacade from "@/components/VimeoFacade";
import CtaBand from "@/components/CtaBand";
import { photoSize, vimeo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event Gallery",
  description: "Photos and videos of kids and adults riding our 8ft tall robots at parties, festivals and community events around Tampa Bay.",
  alternates: { canonical: "/gallery" },
  openGraph: { images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Yellow and red ride-on robots giving rides" }] },
};

const order = ["20", "10", "13", "26", "09", "04", "24", "18", "27", "06", "28", "21", "16", "05", "29", "07", "11", "12", "01", "25", "15", "23", "17", "08", "19", "02", "14", "22"];

export default function GalleryPage() {
  const unused = Object.keys(photoSize).filter((id) => !order.includes(id));
  return (
    <>
      <PageHero kicker="Event gallery" title={<>See the robots <span className="text-cyan">in action</span>.</>}>
        <p>
          Smooth, captivating motion, vibrant music, and dazzling lights. And the excitement and wonder on kids&apos; faces at every turn.
        </p>
      </PageHero>

      <section aria-labelledby="vid-h" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 id="vid-h" className="label text-cyan-soft">
              Experience the thrill in motion
            </h2>
          </Reveal>
          <ul className="mt-8 grid items-start gap-5 md:grid-cols-3">
            {vimeo.map((v, i) => (
              <Reveal as="li" key={v.id} delay={i * 0.06}>
                <VimeoFacade {...v} label={`Robotic Adventures ride video ${i + 1}`} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ph-h">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 id="ph-h" className="sr-only">
            Photos
          </h2>
          <ul className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>li]:mb-3">
            {[...order, ...unused].map((id) => (
              <li key={id} className="cut cut-sm break-inside-avoid overflow-hidden">
                <Photo id={id} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-auto w-full" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
