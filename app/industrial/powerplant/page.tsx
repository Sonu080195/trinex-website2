import type { Metadata } from "next";
import PowerPlantContent from "./PowerplantContent";

export const metadata: Metadata = {
  title: "Power Plant Construction Recruitment", // renders as "Power Plant Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON provides specialized recruitment solutions for power generation and energy infrastructure projects—connecting contractors with experienced professionals across complex industrial developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/industrial/powerplant",
  },
};

export default function PowerPlantPage() {
  return <PowerPlantContent />;
}