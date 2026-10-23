import Image from "next/image";
import { photoAlt, photoSize } from "@/lib/site";

/** A client photo from public/photos, with real dimensions and data-derived alt text. */
export default function Photo({
  id,
  sizes,
  className = "",
  priority = false,
  alt,
}: {
  id: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const [w, h] = photoSize[id];
  return (
    <Image
      src={`/photos/${id}.jpg`}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      alt={alt ?? photoAlt[id]}
      className={`object-cover ${className}`}
    />
  );
}
