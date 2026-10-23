import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/robots", "/pricing", "/events", "/gallery", "/about", "/contact"];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "/events" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
