import { contact } from "@/lib/data";

const mailto = `mailto:${contact.email}?subject=Hello%20Reed`;

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="foot-links">
        <a href={mailto}>Email</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.substack} target="_blank" rel="noreferrer">
          Substack
        </a>
      </div>
      <div className="foot-meta">Reed Iandolo · © 2026</div>
    </footer>
  );
}
