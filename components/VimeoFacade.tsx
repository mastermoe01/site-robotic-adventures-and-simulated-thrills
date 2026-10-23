"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

/** The client's own Vimeo clips. The iframe loads only on click, so no third-party script runs at page load. */
export default function VimeoFacade({ id, ratio, seconds, label }: { id: string; ratio: string; seconds: number; label: string }) {
  const [on, setOn] = useState(false);
  const length = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  return (
    <div className="cut cut-lg relative overflow-hidden bg-hangar-deep" style={{ aspectRatio: ratio }}>
      {on ? (
        <iframe
          src={`https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`}
          title={label}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="group absolute inset-0" aria-label={`Play video: ${label} (${length})`}>
          <Image src={`/video-thumbs/${id}.jpg`} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-gradient-to-t from-hangar/80 via-transparent to-transparent" />
          <span className="cut cut-sm absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-cyan text-hangar">
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 font-mono text-[13px] text-text">{length}</span>
        </button>
      )}
    </div>
  );
}
