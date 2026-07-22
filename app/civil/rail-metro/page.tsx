import type { Metadata } from "next";
import RailMetroContent from "./Rail-MetroContent";

export const metadata: Metadata = {
  title: "Rail & Metro Construction Recruitment", // renders as "Rail & Metro Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON provides specialized recruitment solutions for rail, metro, and transit infrastructure projects—connecting contractors with experienced transportation construction professionals.",
  alternates: {
    canonical: "https://www.rudrongts.com/civil/rail-metro",
  },
};

export default function RailMetroPage() {
  return <RailMetroContent />;
}