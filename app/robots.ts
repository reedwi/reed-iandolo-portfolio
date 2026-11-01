import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Open to all crawlers, including AI answer engines (GPTBot, ClaudeBot, PerplexityBot).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
