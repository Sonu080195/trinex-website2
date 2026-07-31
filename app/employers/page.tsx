import type { Metadata } from "next";
import EmployersContent from "./EmployersContent";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

export const metadata: Metadata = {
  title: "Construction, Engineering & MEP Recruitment for Employers",

  description:
    "Hire pre-vetted construction, engineering and MEP professionals through RUDRON. Specialist permanent recruitment, executive search and project staffing across the United States.",

  alternates: {
    canonical: `${SITE_URL}/employers`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/employers`,
    siteName: SITE_NAME,
    title: "Construction, Engineering & MEP Recruitment for Employers",
    description:
      "Specialist recruitment solutions for general contractors, developers, EPC firms, mechanical contractors and electrical contractors.",
    images: [
      {
        url: `${SITE_URL}/employers/employers-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Construction recruitment solutions for employers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction, Engineering & MEP Recruitment for Employers",
    description:
      "Hire construction, engineering and MEP professionals through RUDRON Global Talent Solutions.",
    images: [`${SITE_URL}/employers/employers-hero.webp`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/employers#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employers",
        item: `${SITE_URL}/employers`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/employers#service`,
    name: "Construction, Engineering and MEP Recruitment",
    serviceType: [
      "Permanent Recruitment",
      "Executive Search",
      "Construction Recruitment",
      "Engineering Recruitment",
      "MEP Recruitment",
      "Project Staffing",
    ],
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    url: `${SITE_URL}/employers`,
    description:
      "Specialist recruitment services for construction, engineering, architecture and MEP employers.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <EmployersContent />
    </>
  );
}