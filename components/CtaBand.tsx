import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { primaryPhone } from "@/lib/site";

export default function CtaBand({ title = "Ready to book your adventure?" }: { title?: string }) {
  return (
    <section aria-labelledby="cta-h" className="relative overflow-hidden border-t border-line">
      <div className="floor-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="label text-cyan-soft">Contact us today to lock in your date and time</p>
        <h2 id="cta-h" className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,6vw,5rem)]">
          {title}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary cut cut-sm">
            Check your date
          </Link>
          <a href={`tel:${primaryPhone.tel}`} className="btn-ghost cut cut-sm font-mono">
            <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
            {primaryPhone.display}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
