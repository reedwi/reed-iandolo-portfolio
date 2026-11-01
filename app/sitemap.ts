import type { MetadataRoute } from "next";
import { landingList } from "@/lib/landings";
import { getNotes } from "@/lib/notes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/notes", ...landingList.map((l) => `/${l.slug}`)].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const notes = getNotes().map((n) => ({
    url: `${SITE_URL}/notes/${n.slug}`,
    lastModified: n.date ? new Date(`${n.date}T12:00:00`) : undefined,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [...pages, ...notes];
}
