import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

export const metadata: Metadata = {
  title: "About RUDRON",

  description:
    "Learn about RUDRON Global Talent Solutions, a specialist recruitment firm serving construction, engineering and MEP employers across the USA, Canada, UAE and India.",

  keywords: [
    "About RUDRON",
    "Construction Recruiters",
    "Engineering Recruitment",
    "MEP Recruitment",
    "AEC Recruiters",
    "Executive Search",
    "Construction Staffing",
    "Engineering Staffing",
  ],

  alternates: {
    canonical: `${SITE_URL}/about`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: "About RUDRON Global Talent Solutions",
    description:
      "Learn about RUDRON's specialist expertise in construction, engineering and MEP recruitment.",
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
    title: "About RUDRON Global Talent Solutions",
    description:
      "Specialist construction, engineering and MEP recruitment.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}