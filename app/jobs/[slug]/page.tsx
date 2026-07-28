import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { jobs } from "@/data/jobs";
import JobDetailsClient from "@/components/JobDetailsClient";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

function createJobDescription(job: {
  title: string;
  company: string;
  location: string;
  description: string;
}) {
  const fallbackDescription = `${job.title} opportunity with ${job.company} in ${job.location}. View the position and apply through RUDRON Global Talent Solutions.`;

  const cleanedDescription = job.description
    ?.replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanedDescription) {
    return fallbackDescription;
  }

  return cleanedDescription.length > 155
    ? `${cleanedDescription.slice(0, 152).trim()}...`
    : cleanedDescription;
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found",
      description:
        "The requested job opportunity could not be found on RUDRON Global Talent Solutions.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/jobs/${job.slug}`;
  const description = createJobDescription(job);

  return {
    title: `${job.title} – ${job.location}`,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${job.title} | ${job.location}`,
      description,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${job.title} job opportunity through RUDRON Global Talent Solutions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${job.title} | ${job.location}`,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function JobDetailsPage({
  params,
}: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/jobs/${job.slug}`;

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${canonicalUrl}#jobposting`,

    title: job.title,
    description: job.description,

    url: canonicalUrl,

    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },

    directApply: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,

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
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <JobDetailsClient job={job} />
    </>
  );
}