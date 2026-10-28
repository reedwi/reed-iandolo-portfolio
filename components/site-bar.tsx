import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteBarProps = {
  subtitle: string;
  link: { href: string; label: string };
};

export function SiteBar({ subtitle, link }: SiteBarProps) {
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
        <Link className="nav-link" href={link.href}>
          {link.label}
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
