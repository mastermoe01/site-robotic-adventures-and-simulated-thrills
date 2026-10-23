"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Photo from "./Photo";

/** A strip of real event photos that drifts sideways as the page scrolls past it. */
export default function PhotoReel({ ids }: { ids: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-18%"]);

  return (
    <div ref={ref} className="no-scrollbar overflow-x-auto md:overflow-hidden">
      <motion.ul style={reduce ? undefined : { x }} className="flex w-max gap-4 px-5 md:px-8">
        {ids.map((id) => (
          <li key={id} className="cut w-[220px] shrink-0 overflow-hidden md:w-[280px]">
            <Photo id={id} sizes="280px" className="aspect-[9/14] h-full w-full" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
