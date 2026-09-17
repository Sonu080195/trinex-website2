import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

export const metadata: Metadata = {
  title: "Contact RUDRON",

  description:
    "Contact RUDRON Global Talent Solutions for construction, engineering and MEP recruitment support, employer hiring needs and candidate enquiries.",

  alternates: {
    canonical: `${SITE_URL}/contact`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: "Contact RUDRON Global Talent Solutions",
    description:
      "Connect with RUDRON for construction, engineering and MEP recruitment support.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "RUDRON Global Talent Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact RUDRON Global Talent Solutions",
    description:
      "Contact RUDRON for construction, engineering and MEP recruitment support.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}