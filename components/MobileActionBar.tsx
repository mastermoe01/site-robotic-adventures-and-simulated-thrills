import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { primaryPhone } from "@/lib/site";

/** Phone-width errand bar: the two primary actions, always one tap away. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-hangar/95 backdrop-blur-md sm:hidden">
      <a href={`tel:${primaryPhone.tel}`} className="flex items-center justify-center gap-2 py-3.5 font-semibold">
        <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
        Call
      </a>
      <Link href="/contact" className="flex items-center justify-center gap-2 bg-cyan py-3.5 font-semibold text-hangar">
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        Check your date
      </Link>
    </div>
  );
}
