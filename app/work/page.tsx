import type { Metadata } from "next";
import Link from "next/link";
import { SiteBar } from "@/components/site-bar";
import { bookingHref, contact, problems, steps, tiers, workProof } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work with Reed Iandolo | Independent advisory",
  description:
    "Reed Iandolo helps teams get more out of the systems they already have, then designs and builds the 10% those systems can't do: integrations, automations and internal tools.",
};

const mailto = `mailto:${contact.email}?subject=Hello%20Reed`;

export default function Work() {
  return (
    <div className="wrap">
      <SiteBar
        subtitle="Independent advisory"
        link={{ href: "/", label: "About me" }}
      />

      <header className="hero wide">
        <span className="eyebrow">Independent advisory</span>
        <h1>
          Get more out of the systems you have, then build the{" "}
          <em>10%</em> they can&apos;t.
        </h1>
        <p>
          I&apos;m Reed, a technical architect who understands the business side.
          I push your core platforms, like Salesforce, to their real limits, then
          design and build the tools, integrations and automations that live
          beyond them. Built properly, delivered fast.
        </p>
        <div className="cta-row">
          <a className="btn" href={bookingHref}>
            Book a 30-minute call
          </a>
          <a className="btn ghost" href="#how">
            How I work
          </a>
        </div>
      </header>

      <section className="block">
        <div className="block-head">
          <h2>Sound familiar?</h2>
          <span className="note">where most conversations start</span>
        </div>
        <div className="caps">
          {problems.map((p) => (
            <div className="cap" key={p.title}>
              <b>{p.title}</b>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block" id="how">
        <div className="block-head">
          <h2>How I work</h2>
          <span className="note">four steps, visible checkpoints</span>
        </div>
        <div className="caps">
          {steps.map((s) => (
            <div className="cap" key={s.n}>
              <div className="case-lbl">{s.n}</div>
              <b>{s.title}</b>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="thesis">
        <span className="eyebrow">The approach</span>
        <h2>
          Don&apos;t rebuild your core systems. Finally build the{" "}
          <em>10%</em> they can&apos;t do.
        </h2>
        <p>
          Rebuilding a CRM or any core system from scratch almost never pays off.
          The honest move is to{" "}
          <strong>
            get everything you can out of the platform you already have, and
            purpose-build only the piece that genuinely can&apos;t live inside it
          </strong>
          . That last piece used to take forever or cost a fortune. Now it&apos;s
          something you can actually build.
        </p>
        <div className="split">
          <div className="s90">90%</div>
          <div className="s10">10%</div>
        </div>
        <div className="split-legend">
          <span className="l">what the core system already does well</span>
          <span className="r">the part I build ↑</span>
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Recent work</h2>
          <span className="note">fractional engagements</span>
        </div>
        <div className="proof">
          {workProof.map((p) => (
            <div className="pf" key={p.tag}>
              <div className="tag">{p.tag}</div>
              <p>
                <b>{p.strong}</b> {p.rest}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Ways to work together</h2>
          <span className="note">monthly retainers, no hourly billing</span>
        </div>
        <div className="tiers">
          {tiers.map((t) => (
            <div className="tier" key={t.name}>
              <div className="tier-size">{t.size}</div>
              <b>{t.name}</b>
              <p>{t.body}</p>
              <div className="price">
                From {t.price} <span>/ month</span>
              </div>
            </div>
          ))}
        </div>
        <p className="fine">
          Retainers start with a three-month term, then run month to month.
          Well-defined builds can also be scoped as fixed-fee projects.
        </p>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>About me</h2>
        </div>
        <p className="block-intro">
          By day I lead technology at a go-to-market systems consultancy, across
          pre-sales, solution engineering, development and internal product.
          Independently, I work directly with a small number of teams at a time.{" "}
          <Link href="/">Full background →</Link>
        </p>
        <div className="invite">
          <div className="txt">
            <b>Not sure where your 10% is?</b> That&apos;s what the first call is
            for. Thirty minutes, no pitch deck.
          </div>
          <a className="btn" href={bookingHref}>
            Book a call →
          </a>
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
        </div>
        <div className="foot-meta">Reed Iandolo · © 2026</div>
      </footer>
    </div>
  );
}
