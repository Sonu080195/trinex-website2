import type { Metadata } from "next";
import HighriseContent from "./HighriseContent";

export const metadata: Metadata = {
  title: "High-Rise Construction Recruitment", // renders as "High-Rise Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with developers and contractors to deliver experienced professionals specializing in high-rise residential towers, mixed-use developments, and luxury urban construction projects.",
  alternates: {
    canonical: "https://www.rudrongts.com/residential/highrise",
  },
};

export default function HighrisePage() {
  return <HighriseContent />;
}