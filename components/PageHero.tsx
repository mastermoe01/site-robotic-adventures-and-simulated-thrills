import type { ReactNode } from "react";

/** Inner-page header band: mono kicker, display H1, optional lede. */
export default function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="floor-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <p className="label text-cyan-soft">{kicker}</p>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.75rem,7vw,5.75rem)]">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-[18px] text-muted">{children}</div>}
      </div>
    </section>
  );
}
