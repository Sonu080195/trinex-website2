import type { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries", // renders as "Industries - RUDRON Global Talent Solutions"
  description:
    "RUDRON Global Talent Solutions partners with organizations across architecture, engineering, construction, mechanical, electrical and plumbing markets, delivering specialist recruitment solutions that support project success and long-term growth.",
  alternates: {
    canonical: "https://www.rudrongts.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}