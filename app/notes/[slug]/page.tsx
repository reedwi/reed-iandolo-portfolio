import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { bookingHref, bookingLinkProps } from "@/lib/data";
import { landingList } from "@/lib/landings";
import { formatDate, getNote, getNotes } from "@/lib/notes";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getNotes().map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const note = getNote(params.slug);
  if (!note) return {};
  return { title: `${note.title} | Reed Iandolo`, description: note.summary };
}

export default function NotePage({ params }: Props) {
  const note = getNote(params.slug);
  if (!note) notFound();
  const landing = landingList.find((l) => l.slug === note.audience);

  return (
    <div className="wrap">
      <article>
        <header className="hero note-hero">
          <Link className="eyebrow" href="/notes">
            ← Notes
          </Link>
          <h1>{note.title}</h1>
          {note.summary ? <p>{note.summary}</p> : null}
          <div className="note-meta">
            Reed Iandolo{note.date ? ` · ${formatDate(note.date)}` : ""}
            {note.draft ? <span className="draft-tag">Draft</span> : null}
          </div>
        </header>
        <div className="prose" dangerouslySetInnerHTML={{ __html: note.html }} />
      </article>

      <div className="invite">
        <div className="txt">
          <b>Sound familiar?</b>{" "}
          {landing
            ? "This is the kind of problem I fix. Start with a 30-minute call, or see how I work."
            : "Start with a 30-minute call about what's slowing you down."}
        </div>
        <div className="cta-row">
          {landing ? (
            <Link className="btn ghost" href={`/${landing.slug}`}>
              How I work
            </Link>
          ) : null}
          <a className="btn" href={bookingHref} {...bookingLinkProps}>
            Book a call →
          </a>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
