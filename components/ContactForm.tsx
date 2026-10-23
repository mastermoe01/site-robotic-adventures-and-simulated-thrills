import { packages, site } from "@/lib/site";

/** Formspree when `site.formspreeId` is set; otherwise a mailto: fallback to the business email. */
export default function ContactForm() {
  if (!site.formspreeId && !site.email) return null;
  const action = site.formspreeId ? `https://formspree.io/f/${site.formspreeId}` : `mailto:${site.email}?subject=Robot%20ride%20booking%20inquiry`;
  const field =
    "mt-1.5 w-full border border-line bg-hangar px-4 py-3 text-[16px] text-text outline-none placeholder:text-muted/60 focus:border-cyan";
  return (
    <form action={action} method="POST" encType={site.formspreeId ? undefined : "text/plain"} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="text-[14px] font-medium">Name</label>
        <input id="cf-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-phone" className="text-[14px] font-medium">Phone</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="cf-date" className="text-[14px] font-medium">Event date</label>
        <input id="cf-date" name="event_date" type="date" className={field} />
      </div>
      <div>
        <label htmlFor="cf-pkg" className="text-[14px] font-medium">Package</label>
        <select id="cf-pkg" name="package" className={field} defaultValue="">
          <option value="">Not sure yet</option>
          {packages.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}: {p.robots} {p.robots === 1 ? "robot" : "robots"}, ${p.price}
            </option>
          ))}
          <option value="Custom event">Custom event</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-where" className="text-[14px] font-medium">Event city / venue</label>
        <input id="cf-where" name="venue" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-msg" className="text-[14px] font-medium">Message</label>
        <textarea id="cf-msg" name="message" rows={4} required className={field} placeholder="Number of kids, setup surface, anything else we should know" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary cut cut-sm">
          Send inquiry
        </button>
        {!site.formspreeId && <p className="mt-3 text-[13px] text-muted">Opens your email app with the details filled in.</p>}
      </div>
    </form>
  );
}
