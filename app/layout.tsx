import Script from "next/script";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";

const SITE_NAME = "RUDRON Global Talent Solutions";
const SITE_URL = "https://www.rudrongts.com";
const LOGO_URL = `${SITE_URL}/images/rudron-logo.webp`; // keep ONE canonical logo URL used everywhere

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Construction, Engineering & MEP Recruitment`,
    template: `%s - ${SITE_NAME}`, // e.g. "About - RUDRON Global Talent Solutions"
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

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME, // was "RUDRON Global" — must match JSON-LD name exactly

    title: `${SITE_NAME} | Construction, Engineering & MEP Recruitment`,

    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",

    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Construction, Engineering & MEP Recruitment`,
    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",
    images: ["/og-image.jpg"],
  },

  // NOTE: this is only the site-wide fallback. Every page.tsx should override
  // this with its own canonical (see template below) — otherwise every route
  // reports itself as a duplicate of the homepage to Google.
  alternates: {
    canonical: SITE_URL,
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
      <body>
        <Navbar />

        {children}

        {/* Structured data: Organization + WebSite, cross-linked.
            Switched ProfessionalService -> Organization as the primary type
            so Google's Logo rich-result matcher reliably picks this up. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "EmploymentAgency"],
                  "@id": `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  legalName: SITE_NAME,
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: LOGO_URL,
                    width: 512,
                    height: 512,
                  },
                  image: LOGO_URL,
                  description:
                    "Specialist recruitment solutions across Construction, Engineering, Architecture, Mechanical, Electrical and Plumbing sectors.",
                  sameAs: [
                    "https://www.linkedin.com/company/rudrongts",
                    "https://instagram.com/rudron_gts",
                    "https://facebook.com/share/1HQMr8GCcd/?mibextid=wwXlfr",
                  ],
                  email: "admin@rudrongts.com",
                  telephone: "+1-239-309-3969",
                  foundingDate: "2026",
                  areaServed: [
                    "United States",
                    "Canada",
                    "United Arab Emirates",
                    "India",
                  ],
                  serviceType: [
                    "Construction Recruitment",
                    "Engineering Recruitment",
                    "MEP Recruitment",
                    "Executive Search",
                    "Talent Acquisition",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
              ],
            }),
          }}
        />

        <SpeedInsights />
      </body>
    </html>
  );
}