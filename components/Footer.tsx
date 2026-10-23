import Link from "next/link";
import Wordmark from "./Wordmark";
import { nav, press, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-hangar-deep pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Wordmark />
          <p className="mt-5 text-[15px] text-muted">
            8ft tall ride-on robots for parties, camps, festivals and custom events. Based in {site.base.city}, {site.base.region} · serving{" "}
            {site.serviceArea}.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="label text-cyan-soft">Explore</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            {[{ href: "/", label: "Home" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted hover:text-glow">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="label text-cyan-soft">Call or email</h2>
          <ul className="mt-4 space-y-2 font-mono text-[14px]">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="hover:text-glow">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="break-all">
              <a href={`mailto:${site.email}`} className="hover:text-glow">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="label text-cyan-soft">Office hours</h2>
          <dl className="mt-4 space-y-1.5 font-mono text-[14px]">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-muted">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[14px] text-muted">
            As featured in{" "}
            <a href={press.url} className="text-text underline decoration-line underline-offset-4 hover:text-glow" target="_blank" rel="noopener">
              {press.outlet}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-[13px] text-muted md:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
