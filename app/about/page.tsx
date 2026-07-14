import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About", // renders as "About - RUDRON Global Talent Solutions"
  description:
    "RUDRON Global Talent Solutions partners with construction, engineering, infrastructure and mission-critical organizations to secure exceptional professionals and strengthen leadership teams. Backed by 10+ years of AEC & MEP recruitment expertise.",
  alternates: {
    canonical: "https://www.rudrongts.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}