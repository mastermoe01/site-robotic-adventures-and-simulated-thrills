import { Plus } from "lucide-react";
import { faq } from "@/lib/site";

/** The client's FAQ, verbatim, as native disclosure widgets (no JS needed). */
export default function Faq() {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      {faq.map((g) => (
        <div key={g.group}>
          <h3 className="label text-cyan-soft">{g.group}</h3>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {g.items.map((it) => (
              <details key={it.q} className="group py-4">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold">
                  {it.q}
                  <Plus className="mt-1 h-4 w-4 shrink-0 text-cyan transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <div className="mt-3 space-y-2 text-[15px] text-muted">
                  {it.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
