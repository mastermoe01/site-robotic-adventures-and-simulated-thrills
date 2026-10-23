"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { nav, primaryPhone } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-hangar/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" aria-label="Robotic Adventures and Simulated Thrills — home">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-glow ${active ? "text-cyan" : "text-muted"}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${primaryPhone.tel}`} className="hidden items-center gap-2 whitespace-nowrap font-mono text-[14px] text-text hover:text-glow xl:flex">
            <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
            {primaryPhone.display}
          </a>
          <Link href="/contact" className="btn-primary cut cut-sm hidden whitespace-nowrap text-[15px] sm:inline-flex">
            Check your date
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-3">
            {[{ href: "/", label: "Home" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={pathname === n.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-display text-2xl font-semibold ${pathname === n.href ? "text-cyan" : "text-text"}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
