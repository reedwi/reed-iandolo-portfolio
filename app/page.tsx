import Link from "next/link";
import { SplitBar } from "@/components/split-bar";
import { capabilities, cases, contact } from "@/lib/data";

const mailto = `mailto:${contact.email}?subject=Hello%20Reed`;

export default function Home() {
  return (
    <div className="wrap">
      <header className="hero">
        <span className="eyebrow">VP of Technology · Aptitude 8</span>
        <h1>
          I shape how technology gets{" "}
          <em>architected, sold, and delivered</em>.
        </h1>
        <p>
          I run the technology organization at Aptitude 8, a go-to-market systems
          consultancy. We&apos;re the partner companies bring in to make their
          sales, marketing, and service tools actually work, from strategy through
          implementation. My side spans pre-sales, solution engineering,
          development, and internal product. Lately, most of my energy goes into
          putting AI directly into how we build.
        </p>
        <div className="cta-row">
          <a className="btn" href={mailto}>
            Get in touch
          </a>
          <nav className="hero-links" aria-label="Elsewhere">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={contact.substack} target="_blank" rel="noreferrer">Substack</a>
            <a href={contact.resume} target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <section className="block">
        <div className="block-head">
          <h2>What I&apos;m good at</h2>
          <span className="note">the short version</span>
        </div>
        <p className="block-intro">
          A quick primer: the things I do well and genuinely enjoy, with a bit of
          where I&apos;ve proven them out at Aptitude 8.
        </p>
        <div className="caps">
          {capabilities.map((c) => (
            <div className="cap" key={c.title}>
              <b>{c.title}</b>
              <p>
                {c.body}
                {c.ev ? <> <span className="ev">{c.ev}</span></> : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="thesis">
        <span className="eyebrow">Advisory · what I&apos;m building toward</span>
        <h2>
          The real shift isn&apos;t rebuilding your core systems. It&apos;s
          finally building the <em>10%</em> they can&apos;t do.
        </h2>
        <p>
          There&apos;s a lot of noise about building your own CRM, or any core
          system, from scratch. It usually gets framed as saving on licensing,
          with AI as the thing that finally makes it cheap enough to try. In
          theory, sure. In practice, I&apos;ve never once seen it pay off.
        </p>

        <div className="cases">
          {cases.map((c) => (
            <div className="case" key={c.label}>
              <div className="case-lbl">{c.label}</div>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <p>
          So the move is almost always the same:{" "}
          <strong>
            trust the core system, get everything you can out of it, and
            purpose-build only the piece that genuinely can&apos;t live inside it
          </strong>
          . That last part is where AI truly changes the math. The adjacent tool
          that used to take forever to build, cost a fortune, or mean a six-figure
          add-on is now something you can actually build.
        </p>

        <p>
          As a <strong>trusted advisor</strong>, the real skill is knowing where
          that line is. First I help your team push the system to its limits, so
          you&apos;re getting every bit of ROI it can actually give. That&apos;s
          usually further than people expect, and it&apos;s the honest way to find
          the true edge of the platform. Then, and only then, I build what lives
          beyond it: sometimes an AI feature that couldn&apos;t exist before,
          sometimes software that finally got cheap enough to be worth it.
        </p>

        <SplitBar />

        <div className="invite">
          <div className="txt">
            <b>I&apos;m actively expanding this.</b> If your software gets you most
            of the way and the last 10% is quietly costing you, that&apos;s exactly
            the conversation I want.
          </div>
          <Link className="btn" href="/work">
            Work with me →
          </Link>
        </div>
      </section>

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
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <div className="foot-meta">Reed Iandolo · © 2026</div>
      </footer>
    </div>
  );
}
