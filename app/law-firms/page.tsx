import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { landings } from "@/lib/landings";

const page = landings.law;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function LawFirmsLanding() {
  return <LandingPage page={page} />;
}
