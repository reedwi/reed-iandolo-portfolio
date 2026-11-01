"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", full: "About", short: "About", subtitle: "VP of Technology · Aptitude 8" },
  { href: "/work", full: "Work with me", short: "Work", subtitle: "Independent advisory" },
] as const;

// Lives in the root layout so it persists across routes; that persistence is
// what lets the active pill slide between links instead of jumping.
export function SiteBar() {
  const pathname = usePathname();
  const activeIndex = Math.max(
    0,
    links.findIndex((l) => (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)))
  );
  const active = links[activeIndex];

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const el = linkRefs.current[activeIndex];
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth });
    };
    measure();
    // Link widths change at the mobile breakpoint (full vs. short labels).
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <div className="wrap">
      <div className="bar">
        <Link className="brand" href="/">
          <Image
            className="avatar"
            src="/reed_headshot.png"
            alt="Reed Iandolo"
            width={84}
            height={84}
            quality={90}
            priority
          />
          <div>
            <b>Reed Iandolo</b>
            <span>{active.subtitle}</span>
          </div>
        </Link>
        <div className="right">
          <span className="avail">
            <span className="pulse" /> Washington, DC · Remote
          </span>
          <nav className="nav" aria-label="Site" ref={navRef} data-ready={pill ? "" : undefined}>
            {pill ? (
              <span
                className="nav-pill"
                aria-hidden
                style={{ transform: `translateX(${pill.x}px)`, width: pill.w }}
              />
            ) : null}
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                aria-current={i === activeIndex ? "page" : undefined}
              >
                {l.full === l.short ? (
                  l.full
                ) : (
                  <>
                    <span className="full">{l.full}</span>
                    <span className="short">{l.short}</span>
                  </>
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
