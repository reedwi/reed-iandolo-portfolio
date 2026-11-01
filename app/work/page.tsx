import type { Metadata } from "next";
import Link from "next/link";
import { landingList } from "@/lib/landings";
import { SiteFooter } from "@/components/site-footer";
import { bookingHref, bookingLinkProps, newWay, oldWay, steps, tiers, workProof } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work with Reed Iandolo | Independent advisory",
  description:
    "Reed Iandolo helps teams get more out of the systems they already have, then builds the 10% those systems can't do.",
};

export default function Work() {
  return (
    <div className="wrap">
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
          <a className="btn" href={bookingHref} {...bookingLinkProps}>
            Book a 30-minute call
          </a>
          <a className="btn ghost" href="#how">
            How it works
          </a>
        </div>
      </header>

      <section className="block flush">
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
        <div className="proof log">
          {workProof.map((p) => (
            <div className="pf" key={p.id}>
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
          <h2>Who I work with</h2>
        </div>
        <div className="audiences">
          {landingList.map((l) => (
            <Link className="aud" href={`/${l.slug}`} key={l.slug}>
              <b>{l.nav}</b>
              <span>{l.blurb}</span>
              <i aria-hidden>→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="block" id="ways">
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
          Async by default: you get written updates as work ships, not more
          meetings. Month to month after the first three months. Bigger one-off
          builds can be scoped as fixed-fee projects.
        </p>
        <div className="invite">
          <div className="txt">
            <b>Not sure where to start?</b> That&apos;s what the first call is for.
          </div>
          <a className="btn" href={bookingHref} {...bookingLinkProps}>
            Book a call →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
