import { contact } from "@/lib/data";

// Canonical origin: reediandolo.com redirects here.
export const SITE_URL = "https://www.reediandolo.com";

// Who the site is about, for search engines and AI answer engines (schema.org Person).
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Reed Iandolo",
  url: SITE_URL,
  image: `${SITE_URL}/reed_headshot.png`,
  jobTitle: "VP of Technology",
  worksFor: { "@type": "Organization", name: "Aptitude 8" },
  description:
    "Technical architect and independent advisor in Washington, DC. Helps nonprofits, small law firms, and small businesses get more out of the systems they have and build the custom pieces those systems can't do.",
  address: { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
  knowsAbout: [
    "Salesforce",
    "CRM architecture",
    "Data warehousing",
    "Nonprofit technology",
    "Legal technology",
    "AI implementation",
  ],
  sameAs: [contact.linkedin, contact.github, contact.substack.split("?")[0]],
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own constants and note frontmatter.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
