import type { Metadata } from "next";
import { NoteList } from "@/components/note-list";
import { SiteFooter } from "@/components/site-footer";
import { getNotes, type Audience } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes | Reed Iandolo",
  description:
    "Practical notes on Salesforce, data, and fitting technology to how a business actually works.",
  alternates: { canonical: "/notes" },
};

const GROUPS: { audience: Audience; heading: string }[] = [
  { audience: "general", heading: "Start here" },
  { audience: "salesforce", heading: "Nonprofits & associations on Salesforce" },
  { audience: "law-firms", heading: "Small law firms" },
  { audience: "small-business", heading: "Owners and small teams" },
];

export default function Notes() {
  const notes = getNotes();
  const groups = GROUPS.map((g) => ({ ...g, notes: notes.filter((n) => n.audience === g.audience) })).filter(
    (g) => g.notes.length
  );

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

      {groups.length ? (
        groups.map((g, i) => (
          <section className={i === 0 ? "block flush" : "block"} key={g.audience}>
            <div className="block-head">
              <h2>{g.heading}</h2>
            </div>
            <NoteList notes={g.notes} />
          </section>
        ))
      ) : (
        <section className="block flush">
          <p className="block-intro">The first notes are on the way.</p>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
