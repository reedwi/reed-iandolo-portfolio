import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteBarProps = {
  subtitle: string;
  active: "about" | "work";
};

export function SiteBar({ subtitle, active }: SiteBarProps) {
  return (
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
          <span>{subtitle}</span>
        </div>
      </Link>
      <div className="right">
        <span className="avail">
          <span className="pulse" /> Washington, DC · Remote
        </span>
        <nav className="nav" aria-label="Site">
          <Link href="/" aria-current={active === "about" ? "page" : undefined}>
            About
          </Link>
          <Link href="/work" aria-current={active === "work" ? "page" : undefined}>
            <span className="full">Work with me</span>
            <span className="short">Work</span>
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}
