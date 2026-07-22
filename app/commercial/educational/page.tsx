import type { Metadata } from "next";
import EducationalContent from "./EducationalContent";

export const metadata: Metadata = {
  title: "Educational Construction Recruitment", // renders as "Educational Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with contractors, developers, and owner's representatives to deliver construction leaders built for the unique demands of educational facilities—from occupied K–12 campuses to large-scale university programs.",
  alternates: {
    canonical: "https://www.rudrongts.com/commercial/educational",
  },
};

export default function EducationalPage() {
  return <EducationalContent />;
}