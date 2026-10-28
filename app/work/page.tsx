import type { Metadata } from "next";
import { SiteBar } from "@/components/site-bar";
import { bookingHref, contact, newWay, oldWay, steps, tiers, workProof } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work with Reed Iandolo | Independent advisory",
  description:
    "Reed Iandolo helps teams get more out of the systems they already have, then builds the 10% those systems can't do.",
};

const mailto = `mailto:${contact.email}?subject=Hello%20Reed`;

export default function Work() {
  return (
    <div className="wrap">
      <SiteBar subtitle="Independent advisory" active="work" />

      <header className="hero wide">
        <span className="eyebrow">Independent advisory</span>
        <h1>
          Get more out of the systems you have, then build the{" "}
          <em>10%</em> they can&apos;t.
        </h1>
        <p>
          I&apos;m Reed, a technical architect who understands the business side.
          I pinpoint what&apos;s slowing you down, then fix it, fast.
        </p>
        <div className="cta-row">
          <a className="btn" href={bookingHref}>
            Book a 30-minute call
          </a>
          <a className="btn ghost" href="#how">
            How it works
          </a>
        </div>
      </header>

      <section className="block">
        <div className="vs">
          <div className="then">
            <div className="case-lbl">The old way</div>
            <ul>
              {oldWay.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="now">
            <div className="case-lbl">How I work</div>
            <ul>
              {newWay.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" id="how">
        <div className="block-head">
          <h2>How it works</h2>
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

      <section className="block">
        <div className="block-head">
          <h2>Recent work</h2>
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
        </div>
        <div className="tiers">
          {tiers.map((t) => (
            <div className="tier" key={t.name}>
              <div className="tier-size">{t.scope}</div>
              <b>{t.name}</b>
              <p>{t.body}</p>
              <div className="price">
                From {t.price} <span>/ month</span>
              </div>
            </div>
          ))}
        </div>
        <p className="fine">
          Month to month after the first three months. Bigger one-off builds can
          be scoped as fixed-fee projects.
        </p>
        <div className="invite">
          <div className="txt">
            <b>Not sure where to start?</b> That&apos;s what the first call is for.
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
