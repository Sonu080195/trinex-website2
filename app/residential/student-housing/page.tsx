import type { Metadata } from "next";
import StudentHousingContent from "./Student-HousingContent";

export const metadata: Metadata = {
  title: "Student Housing Construction Recruitment", // renders as "Student Housing Construction Recruitment - RUDRON Global Talent Solutions"
  description:
    "RUDRON partners with developers and contractors to deliver experienced professionals specializing in student housing communities, campus developments, and modern residential learning environments.",
  alternates: {
    canonical: "https://www.rudrongts.com/residential/student-housing",
  },
};

export default function StudentHousingPage() {
  return <StudentHousingContent />;
}