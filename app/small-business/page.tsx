import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { landings } from "@/lib/landings";

const page = landings.business;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function SmallBusinessLanding() {
  return <LandingPage page={page} />;
}
