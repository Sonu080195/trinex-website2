import type { Metadata } from "next";
import SingleFamilyContent from "./Single-FamilyContent";

export const metadata: Metadata = {
  title: "Single-Family Construction Recruitment", // renders as "Single-Family Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with developers and contractors to deliver experienced professionals specializing in single-family residential construction projects.",
  alternates: {
    canonical: "https://www.rudrongts.com/residential/singlefamily",
  },
};

export default function SingleFamilyPage() {
  return <SingleFamilyContent />;
}