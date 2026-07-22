import type { Metadata } from "next";
import HealthcareContent from "./HealthcareContent";

export const metadata: Metadata = {
  title: "Healthcare Construction Recruitment", // renders as "Healthcare Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with contractors, health systems, and owner's representatives to place construction leaders built for the demands of clinical environments—from occupied hospital renovations to ground-up medical campus developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/commercial/healthcare",
  },
};

export default function HealthcarePage() {
  return <HealthcareContent />;
}