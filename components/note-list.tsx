import Link from "next/link";
import { formatDate, type Note } from "@/lib/notes";

export function NoteList({ notes }: { notes: Note[] }) {
  return (
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
  );
}
