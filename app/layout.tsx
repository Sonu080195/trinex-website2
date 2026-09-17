// app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";

import ConsentAwareSpeedInsights from "@/components/ConsentAwareSpeedInsights";
import ConsentAwareGoogleAnalytics from "@/components/ConsentAwareGoogleAnalytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookieConsent from "@/components/CookieConsent";
import EmployerModalProvider from "@/components/EmployerModalProvider";

import { SITE } from "@/lib/site";

const SITE_NAME = SITE.name;
const SITE_URL = SITE.url;
const LOGO_URL = `${SITE_URL}/images/rudron-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Construction, AEC & MEP Recruitment`,
    template: `%s - ${SITE_NAME}`,
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Construction, Engineering & MEP Recruitment`,
    description:
      "Specialist recruitment solutions across Construction, Engineering, Architecture and MEP sectors.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
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
    images: [`${SITE_URL}/og-image.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,

      name: "RUDRON Global Talent Solutions",
      legalName: "RUDRON Global Talent Solutions LLC",

      alternateName: ["RUDRON", "RUDRON GTS"],

      url: `${SITE_URL}/`,

        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/rudron-logo-square.png`,
          contentUrl: `${SITE_URL}/images/rudron-logo-square.png`,
          width: 512,
          height: 512,
          caption: "RUDRON Global Talent Solutions",
        },

        image: `${SITE_URL}/images/rudron-logo.png`,


        description:
          "RUDRON Global Talent Solutions is a specialist recruitment firm connecting Construction, AEC and MEP employers with experienced professionals across the USA, Canada, UAE and India.",

        sameAs: [
          SITE.social.linkedin,
          SITE.social.instagram,
          SITE.social.facebook,
          ].filter(Boolean),

        email: SITE.emails.general,

        telephone: SITE.phone.international,

        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.countryCode,
        },

        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone.international,
            contactType: "customer service",
            email: SITE.emails.general,
            areaServed: ["US", "CA"],
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            email: SITE.emails.jobs,
            contactType: "recruitment",
            areaServed: ["US", "CA", "AE", "IN"],
            availableLanguage: ["English"],
          },
        ],

        foundingDate: "2026",

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

        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: [
          "RUDRON",
          "RUDRON Global",
          "RUDRON GTS",
          "RUDRON Global Talent Solutions",
        ],

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en-US">
      <body>
        <EmployerModalProvider>
          <Navbar />

          {children}

          <Footer />

          <ScrollToTopButton />

          <ConsentAwareSpeedInsights />

          <ConsentAwareGoogleAnalytics />

          <CookieConsent />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </EmployerModalProvider>
      </body>
    </html>
  );
}