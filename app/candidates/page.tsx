import type { Metadata } from "next";
import CandidatesContent from "./CandidatesContent";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

export const metadata: Metadata = {
  title: "Construction & MEP Careers",

  description:
    "Explore construction, engineering and MEP career opportunities with RUDRON. Connect with specialist recruiters for project, field, estimating and leadership roles.",

  alternates: {
    canonical: `${SITE_URL}/candidates`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/candidates`,
    siteName: SITE_NAME,
    title: "Construction & MEP Careers | RUDRON",
    description:
      "Explore construction, engineering and MEP career opportunities with RUDRON Global Talent Solutions.",
    images: [
      {
        url: `${SITE_URL}/candidates/candidates-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Construction and MEP careers with RUDRON",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction & MEP Careers | RUDRON",
    description:
      "Explore specialist construction, engineering and MEP career opportunities.",
    images: [`${SITE_URL}/candidates/candidates-hero.webp`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CandidatesPage() {
  return <CandidatesContent />;
}