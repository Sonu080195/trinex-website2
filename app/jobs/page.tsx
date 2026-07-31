import type { Metadata } from "next";

import JobsContent from "./JobsContent";
import { jobs } from "@/data/jobs";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

export const metadata: Metadata = {
  title: "Construction, Engineering & MEP Jobs",

  description:
    "Explore construction, engineering, MEP, mechanical, electrical, mission critical and executive career opportunities with RUDRON Global Talent Solutions.",

  alternates: {
    canonical: `${SITE_URL}/jobs`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/jobs`,
    siteName: SITE_NAME,
    title: "Construction, Engineering & MEP Jobs",
    description:
      "Browse current construction, engineering, MEP, mechanical, electrical, mission critical and executive career opportunities.",
    images: [
      {
        url: `${SITE_URL}/jobs/jobs-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Construction, engineering and MEP career opportunities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction, Engineering & MEP Jobs",
    description:
      "Browse construction, engineering, MEP and executive career opportunities with RUDRON Global Talent Solutions.",
    images: [`${SITE_URL}/jobs/jobs-hero.webp`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JobsPage() {
  const jobsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/jobs#job-list`,
    name: "Current Construction, Engineering and MEP Jobs",
    description:
      "Current construction, engineering, MEP, mechanical, electrical, mission critical and executive career opportunities.",
    numberOfItems: jobs.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",

    itemListElement: jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: job.title,
      url: `${SITE_URL}/jobs/${job.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/jobs#breadcrumb`,

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
        name: "Jobs",
        item: `${SITE_URL}/jobs`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/jobs#webpage`,
    url: `${SITE_URL}/jobs`,
    name: "Construction, Engineering & MEP Jobs",
    description:
      "Explore current construction, engineering, MEP, mechanical, electrical, mission critical and executive career opportunities.",

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    about: {
      "@id": `${SITE_URL}/#organization`,
    },

    mainEntity: {
      "@id": `${SITE_URL}/jobs#job-list`,
    },

    breadcrumb: {
      "@id": `${SITE_URL}/jobs#breadcrumb`,
    },

    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobsListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <JobsContent />
    </>
  );
}