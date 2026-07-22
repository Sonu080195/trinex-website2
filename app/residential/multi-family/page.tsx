import type { Metadata } from "next";
import MultiFamilyContent from "./Multi-FamilyContent";

export const metadata: Metadata = {
  title: "Multifamily Construction Recruitment", // renders as "Multifamily Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON connects multifamily developers and contractors with experienced professionals specializing in apartment communities, mixed-use developments, and large-scale residential construction projects.",
  alternates: {
    canonical: "https://www.rudrongts.com/residential/multifamily",
  },
};

export default function MultiFamilyPage() {
  return <MultiFamilyContent />;
}