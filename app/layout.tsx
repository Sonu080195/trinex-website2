import Script from "next/script";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.rudrongts.com"
  ),

  title: {
    default:
      "RUDRON Global Talent Solutions | Construction, Engineering & MEP Recruitment",
    template: "%s | RUDRON",
  },

  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/icon.png", type: "image/png" },
  ],
  apple: [
    { url: "/apple-icon.png" },
  ],
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
    "construction executive search",
    "engineering executive search",
    "construction headhunter",
    "engineering headhunter",
    "construction talent acquisition",
    "engineering talent acquisition",
    "architecture recruitment",
    "architecture recruiters",
    "general contractor recruitment",
    "construction staffing agency",
    "engineering staffing agency",
    "MEP staffing agency",
    "construction recruitment agency",
    "engineering recruitment agency",
    "recruitment firm",
  ],

  authors: [
    {
      name: "RUDRON",
    },
  ],

  creator: "RUDRON",

  publisher: "RUDRON",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rudrongts.com",
    siteName: "RUDRON",

    title:
      "RUDRON | Construction, Engineering & MEP Recruitment",

    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",

    images: [
      {
        url: "https://www.rudrongts.com/og-image.jpg",
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
      "Specialist recruitment solutions across AEC and MEP sectors.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.rudrongts.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">

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
          logo: "https://www.rudrongts.com/logo.webp",
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
        },
        {
          "@type": "WebSite",
          "@id": "https://www.rudrongts.com/#website",
          "name": "RUDRON Global Talent Solutions",
          "url": "https://www.rudrongts.com",
          "publisher": { "@id": "https://www.rudrongts.com/#organization" }
        }
      ]
    }),
  }}
/>

<body>
  <Navbar />
  {children}
  <script type="application/ld+json" />
  <SpeedInsights />
</body>
</html>
  );
}