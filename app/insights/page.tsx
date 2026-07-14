import type { Metadata } from "next";
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = {
  title: "Insights", // renders as "Insights - RUDRON Global Talent Solutions"
  description:
    "Construction market intelligence from RUDRON Global Talent Solutions — hiring trends, salary guides, executive search strategies and workforce insights across AEC, MEP, infrastructure and mission critical recruitment.",
  alternates: {
    canonical: "https://www.rudrongts.com/insights",
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}