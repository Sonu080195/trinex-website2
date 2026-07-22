import type { Metadata } from "next";
import DistributionCenterContent from "./DistributioncenterContent";

export const metadata: Metadata = {
  title: "Distribution Center Construction Recruitment", // renders as "Distribution Center Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON connects industrial contractors and developers with top-tier professionals specializing in large-scale distribution center and logistics facility construction projects.",
  alternates: {
    canonical: "https://www.rudrongts.com/industrial/distribution-center",
  },
};

export default function DistributionCenterPage() {
  return <DistributionCenterContent />;
}