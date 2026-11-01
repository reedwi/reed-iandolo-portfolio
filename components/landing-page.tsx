import Link from "next/link";
import type { Landing } from "@/lib/landings";
import { SiteFooter } from "@/components/site-footer";
import { bookingHref, bookingLinkProps, steps, tiers, workProof } from "@/lib/data";

export function LandingPage({ page }: { page: Landing }) {
  const proof = page.proofIds
    .map((id) => workProof.find((p) => p.id === id))
    .filter((p): p is (typeof workProof)[number] => Boolean(p));

  return (
    <div className="wrap">
      <header className="hero wide">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>
          {page.title.lead}
          <em>{page.title.em}</em>
          {page.title.tail}
        </h1>
        <p>{page.intro}</p>
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
            <div className="case-lbl">{page.vs.thenLabel}</div>
            <ul>
              {page.vs.then.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="now">
            <div className="case-lbl">{page.vs.nowLabel}</div>
            <ul>
              {page.vs.now.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>{page.capsHeading}</h2>
        </div>
        {page.capsIntro ? <p className="block-intro">{page.capsIntro}</p> : null}
        <div className="caps">
          {page.caps.map((c) => (
            <div className="cap" key={c.title}>
              <b>{c.title}</b>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="thesis full">
        <span className="eyebrow">Why me</span>
        <h2>
          {page.why.heading.lead}
          {page.why.heading.em ? <em>{page.why.heading.em}</em> : null}
          {page.why.heading.tail}
        </h2>
        {page.why.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
        {proof.length ? (
          <div className="proof log">
            {proof.map((p) => (
              <div className="pf" key={p.id}>
                <div className="tag">{p.tag}</div>
                <p>
                  <b>{p.strong}</b> {p.rest}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="block" id="how">
        <div className="block-head">
          <h2>How it works</h2>
        </div>
        <div className="caps">
          {(page.steps ?? steps).map((s) => (
            <div className="cap" key={s.n}>
              <div className="case-lbl">{s.n}</div>
              <b>{s.title}</b>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="fine">
          {page.pricingNote ?? (
            <>
              Monthly plans start at {tiers[0].price}.{" "}
              <Link href="/work#ways">See ways to work together</Link>.
            </>
          )}
        </p>
        <div className="invite">
          <div className="txt">
            <b>{page.inviteLead}</b> {page.inviteRest}
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
