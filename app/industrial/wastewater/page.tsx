import type { Metadata } from "next";
import WastewaterContent from "./WastewaterContent";

export const metadata: Metadata = {
  title: "Wastewater Treatment Construction Recruitment", // renders as "Wastewater Treatment Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON provides recruitment solutions for wastewater treatment and utility infrastructure projects—connecting contractors with highly skilled construction and engineering professionals.",
  alternates: {
    canonical: "https://www.rudrongts.com/industrial/wastewater",
  },
};

export default function WastewaterPage() {
  return <WastewaterContent />;
}