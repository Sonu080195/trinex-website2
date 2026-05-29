import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rudron.com"),

  title: {
    default: "RUDRON | Construction, Engineering & MEP Recruitment",
    template: "%s | RUDRON",
  },

  description:
    "RUDRON is a specialist recruitment partner connecting top talent with leading Construction, Engineering, Architecture, Mechanical, Electrical and Plumbing organizations across North America and global markets.",

  keywords: [
  "construction recruitment",
  "construction recruiters",
  "engineering recruitment",
  "engineering recruiters",
  "MEP recruitment",
  "AEC recruitment",
  "executive search",
  "construction staffing",
  "project manager recruitment",
  "superintendent recruitment",
  "commercial construction recruitment",
  "industrial construction recruitment",
  "civil construction recruitment",
  "residential construction recruitment",
  "data center recruitment",
  "mission critical recruitment",
  "construction jobs",
  "construction careers",
  "engineering jobs",
  "MEP jobs",
],

  authors: [
    {
      name: "RUDRON",
    },
  ],

  creator: "RUDRON",

  publisher: "RUDRON",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rudron.com",
    siteName: "RUDRON",

    title:
      "RUDRON | Construction, Engineering & MEP Recruitment",

    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RUDRON Global Talent Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "RUDRON | Construction, Engineering & MEP Recruitment",

    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.rudrongts.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.rudrongts.com/#organization",
          name: "RUDRON Global Talent Solutions",
          url: "https://www.rudrongts.com",
          logo: "https://www.rudrongts.com/logo.png",
          description:
            "Specialist recruitment solutions across Construction, Engineering, Architecture, Mechanical, Electrical and Plumbing sectors.",
          sameAs: [
            "https://www.linkedin.com/company/rudrongts"
          ]
        },
        {
          "@type": "EmploymentAgency",
          "@id": "https://www.rudrongts.com/#agency",
          name: "RUDRON Global Talent Solutions",
          url: "https://www.rudrongts.com",
          areaServed: [
            "United States",
            "Canada",
            "United Arab Emirates",
            "India"
          ],
          serviceType: [
            "Construction Recruitment",
            "Engineering Recruitment",
            "MEP Recruitment",
            "Executive Search",
            "Talent Acquisition"
          ]
        }
      ]
    }),
  }}
/>

      </body>

    </html>
  );
}