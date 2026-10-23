import { existsSync } from "node:fs";
import path from "node:path";
import VideoPlayer from "./VideoPlayer";
import Reveal from "./Reveal";

// Video-slot contract (studio-wide): videos live at
// public/videos/<subject-slug>/{walkthrough,flyover}.mp4 with poster-<family>.jpg.
// Checked at build time — a pushed file enables its section on the next deploy.
const hasFile = (slug: string, file: string) =>
  existsSync(path.join(process.cwd(), "public", "videos", slug, file));

type Family = "walkthrough" | "flyover";

function source(slug: string, family: Family, fallbackPoster: string) {
  if (!hasFile(slug, `${family}.mp4`)) return null;
  const poster = hasFile(slug, `poster-${family}.jpg`) ? `/videos/${slug}/poster-${family}.jpg` : fallbackPoster;
  return { src: `/videos/${slug}/${family}.mp4`, poster };
}

/** Per-robot video slot: a walkaround (walkthrough.mp4) and, if ever delivered, flyover.mp4. */
export default function VideoSlot({ slug, name, fallbackPoster }: { slug: string; name: string; fallbackPoster: string }) {
  const walk = source(slug, "walkthrough", fallbackPoster);
  const fly = source(slug, "flyover", fallbackPoster);
  if (!walk && !fly) return null;

  return (
    <div className={`mt-10 grid gap-6 ${walk && fly ? "md:grid-cols-2" : ""}`}>
      {walk && (
        <Reveal>
          <VideoPlayer {...walk} label={`Walkaround video of ${name}`} />
          <p className="label mt-3 text-muted">Walkaround</p>
        </Reveal>
      )}
      {fly && (
        <Reveal delay={0.06}>
          <VideoPlayer {...fly} label={`Aerial video of ${name}`} />
          <p className="label mt-3 text-muted">Aerial</p>
        </Reveal>
      )}
    </div>
  );
}
