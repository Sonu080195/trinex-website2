import type { Metadata } from "next";
import SeniorHousingContent from "./Senior-HousingContent";

export const metadata: Metadata = {
  title: "Senior Housing Construction Recruitment", // renders as "Senior Housing Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with developers and contractors to deliver experienced professionals specializing in senior living communities, assisted living facilities, and modern residential care developments.",
  alternates: {
    canonical: "https://www.rudrongts.com/residential/senior-housing",
  },
};

export default function SeniorHousingPage() {
  return <SeniorHousingContent />;
}