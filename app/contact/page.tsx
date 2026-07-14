import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact", // renders as "Contact - RUDRON Global Talent Solutions"
  description:
    "Get in touch with RUDRON Global Talent Solutions. Reach our construction, engineering and MEP recruitment specialists across the United States, Canada, UAE and India.",
  alternates: {
    canonical: "https://www.rudrongts.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}