import type { Metadata } from "next";
import EmployersContent from "./EmployersContent";

export const metadata: Metadata = {
  title: "Employers", // renders as "About - RUDRON Global Talent Solutions"
  description:
    "RUDRON Global Talent Solutions delivers specialist recruitment solutions across construction, engineering, infrastructure, mission critical and MEP sectors, helping organizations secure the talent needed to drive growth and project success.",
  alternates: {
    canonical: "https://www.rudrongts.com/employers",
  },
};

export default function EmployersPage() {
  return <EmployersContent />;
}