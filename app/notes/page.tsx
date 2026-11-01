import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { formatDate, getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes | Reed Iandolo",
  description:
    "Practical notes on Salesforce, data, and fitting technology to how a business actually works.",
  alternates: { canonical: "/notes" },
};

export default function Notes() {
  const notes = getNotes();
  return (
    <div className="wrap">
      <header className="hero">
        <span className="eyebrow">Notes</span>
        <h1>
          Practical advice, <em>from the work</em>.
        </h1>
        <p>
          What I see working (and not) across Salesforce, data, and the small
          systems that make a business run. Each one is something you can act on.
        </p>
      </header>

      <section className="block flush">
        {notes.length ? (
          <div className="audiences">
            {notes.map((n) => (
              <Link className="aud" href={`/notes/${n.slug}`} key={n.slug}>
                <b>
                  {n.title}
                  {n.draft ? <span className="draft-tag">Draft</span> : null}
                </b>
                <span>
                  {n.summary}
                  {n.date ? <span className="note-date"> · {formatDate(n.date)}</span> : null}
                </span>
                <i aria-hidden>→</i>
              </Link>
            ))}
          </div>
        ) : (
          <p className="block-intro">The first notes are on the way.</p>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
