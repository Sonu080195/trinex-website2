import type { Metadata } from "next";
import JobsContent from "./JobsContent";

export const metadata: Metadata = {
  title: "Jobs", // renders as "Jobs - RUDRON Global Talent Solutions"
  description:
    "Explore construction, engineering and MEP career opportunities with RUDRON Global Talent Solutions. Browse live roles across commercial, mission critical, healthcare and infrastructure sectors in the United States, Canada, UAE and India.",
  alternates: {
    canonical: "https://www.rudrongts.com/jobs",
  },
};

export default function JobsPage() {
  return <JobsContent />;
}