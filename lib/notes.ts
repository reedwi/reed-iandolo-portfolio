import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Notes are plain markdown files in content/notes/<slug>.md with a small
// frontmatter block:
//
// ---
// title: Your board numbers come from a spreadsheet
// summary: One line shown on the notes index and in link previews.
// date: 2026-11-15
// audience: salesforce        (salesforce | law-firms | small-business | general)
// draft: true                 (drafts show in local dev only)
// ---

export type Audience = "salesforce" | "law-firms" | "small-business" | "general";

export type Note = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  audience: Audience;
  draft: boolean;
  html: string;
};

const DIR = path.join(process.cwd(), "content", "notes");
const showDrafts = process.env.NODE_ENV !== "production";

function parse(file: string): Note {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`content/notes/${file} is missing its frontmatter block`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title ?? "Untitled",
    summary: meta.summary ?? "",
    date: meta.date ?? "",
    audience: (meta.audience as Audience) ?? "general",
    draft: meta.draft === "true",
    html: marked.parse(match[2], { async: false }) as string,
  };
}

export function getNotes(): Note[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parse)
    .filter((n) => showDrafts || !n.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | undefined {
  return getNotes().find((n) => n.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
