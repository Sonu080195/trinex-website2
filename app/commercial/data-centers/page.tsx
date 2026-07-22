import type { Metadata } from "next";
import DataCentersContent from "./Data-centersContent";

export const metadata: Metadata = {
  title: "Data Center Construction Recruitment", // renders as "Data Center Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with mission critical contractors and developers to place construction professionals built for the demands of hyperscale, colocation, and enterprise data center projects—where schedule compression, MEP complexity, and zero-downtime delivery are the standard.",
  alternates: {
    canonical: "https://www.rudrongts.com/commercial/data-centers",
  },
};

export default function DataCentersPage() {
  return <DataCentersContent />;
}