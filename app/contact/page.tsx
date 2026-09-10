import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact RUDRON Global Talent Solutions for specialist Construction, Engineering and MEP recruitment support. Reach our team in the United States and across international markets.",

  alternates: {
    canonical: "https://www.rudrongts.com/contact",
  },

  openGraph: {
    title: "Contact RUDRON Global Talent Solutions",
    description:
      "Connect with RUDRON for Construction, Engineering, Architecture and MEP recruitment support.",
    url: "https://www.rudrongts.com/contact",
    siteName: "RUDRON Global Talent Solutions",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}