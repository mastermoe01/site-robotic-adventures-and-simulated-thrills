"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

/** Click-to-play from poster (design brief: nothing plays on its own). */
export default function VideoPlayer({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  return (
    <div className="cut cut-lg relative overflow-hidden bg-hangar-deep">
      <video ref={ref} className="aspect-video w-full" controls={started} playsInline preload="metadata" poster={poster} aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <button
          type="button"
          onClick={() => {
            setStarted(true);
            ref.current?.play();
          }}
          className="absolute inset-0 flex items-center justify-center bg-hangar/30 transition-colors hover:bg-hangar/10"
          aria-label={`Play: ${label}`}
        >
          <span className="cut cut-sm flex h-16 w-16 items-center justify-center bg-cyan text-hangar">
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
