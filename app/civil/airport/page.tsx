import type { Metadata } from "next";
import AirportContent from "./AirportContent";

export const metadata: Metadata = {
  title: "Airport Construction Recruitment", // renders as "Airport Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for airport and aviation infrastructure projects—connecting contractors with highly experienced construction professionals across complex transportation developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/civil/airport",
  },
};

export default function AirportPage() {
  return <AirportContent />;
}