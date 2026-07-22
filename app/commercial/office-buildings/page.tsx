import type { Metadata } from "next";
import OfficeBuildingsContent from "./Office-BuildingsContent";

export const metadata: Metadata = {
  title: "Office Buildings Construction Recruitment", // renders as "Office Buildings Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with contractors and developers to place construction professionals built for the demands of Class-A office towers, corporate campuses, tenant improvements, and mixed-use workplace developments—where finish quality, tenant timelines, and market velocity all converge.",
  alternates: {
    canonical: "https://www.rudrongts.com/commercial/office-buildings",
  },
};

export default function OfficeBuildingsPage() {
  return <OfficeBuildingsContent />;
}