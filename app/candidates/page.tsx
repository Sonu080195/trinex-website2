import type { Metadata } from "next";
import CandidatesContent from "./CandidatesContent";

export const metadata: Metadata = {
  title: "Candidates", // renders as "Candidates - RUDRON Global Talent Solutions"
  description:
    "RUDRON Global Talent Solutions partners with leading construction, engineering and mission-critical organizations to connect exceptional professionals with career-defining opportunities across the United States of America, Canada, UAE, & India.",
  alternates: {
    canonical: "https://www.rudrongts.com/candidates",
  },
};

export default function CandidatePage() {
    return <CandidatesContent />;

}