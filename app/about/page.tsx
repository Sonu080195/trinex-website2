import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about RUDRON Global Talent Solutions LLP, a specialist Construction, Engineering, Architecture and MEP recruitment partner helping employers across the USA, Canada, UAE and India hire exceptional talent.",

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
    canonical: "https://www.rudrongts.com/about",
  },

  openGraph: {
    title: "About RUDRON Global Talent Solutions",
    description:
      "Discover RUDRON's mission, values and specialist expertise in Construction, Engineering, Architecture and MEP recruitment.",
    url: "https://www.rudrongts.com/about",
    siteName: "RUDRON Global Talent Solutions",
    type: "website",
    images: [
      {
        url: "https://www.rudrongts.com/og-image.png",
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
      "Construction, Engineering, Architecture and MEP recruitment specialists.",
    images: ["https://www.rudrongts.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}