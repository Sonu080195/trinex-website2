import type { Metadata } from "next";
import RetailContent from "./RetailContent";

export const metadata: Metadata = {
  title: "Retail Construction Recruitment", // renders as "Retail Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with contractors and developers to place construction professionals built for the pace and precision of retail development—from ground-up shopping centers and lifestyle destinations to fast-track tenant improvements where grand opening dates are non-negotiable.",
  alternates: {
    canonical: "https://www.rudrongts.com/commercial/retail",
  },
};

export default function RetailPage() {
  return <RetailContent />;
}