import type { Metadata } from "next";
import TiltUpContent from "./TiltupContent";

export const metadata: Metadata = {
  title: "Tilt-Up Construction Recruitment", // renders as "Tilt-Up Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON delivers specialized recruitment solutions for tilt-up and concrete construction projects—connecting contractors with highly experienced industrial construction professionals.",
  alternates: {
    canonical: "https://www.rudrongts.com/industrial/tiltup",
  },
};

export default function TiltUpPage() {
  return <TiltUpContent />;
}