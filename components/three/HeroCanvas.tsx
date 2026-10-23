"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroFallback from "./HeroFallback";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

/** Real GPU-backed WebGL only — software rasterizers (SwiftShader, llvmpipe) would
 *  pin the main thread, so they get the static track instead. */
function hasHardwareWebGL() {
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}

function shouldRender3D() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  // Phones get the static track (design principles §4): no three.js download at all.
  if (!window.matchMedia("(min-width: 768px)").matches) return false;
  return hasHardwareWebGL();
}

/** Lazy 3D hero track. Styled static fallback while loading, on phones, or without GPU WebGL. */
export default function HeroCanvas() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    // Defer until the browser is idle so the canvas never competes with first paint.
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const run = () => setOk(shouldRender3D());
    if (w.requestIdleCallback) w.requestIdleCallback(run, { timeout: 2500 });
    else setTimeout(run, 400);
  }, []);
  if (!ok) return <HeroFallback />;
  return <HeroScene />;
}
