import type { Metadata } from "next";
import RoadwaysContent from "./RoadwaysContent";

export const metadata: Metadata = {
  title: "Roadways Construction Recruitment", // renders as "Roadways Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for roadway and transportation infrastructure projects—connecting contractors with highly experienced construction professionals across complex transportation developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/civil/roadways",
  },
};

export default function RoadwaysPage() {
  return <RoadwaysContent />;
}