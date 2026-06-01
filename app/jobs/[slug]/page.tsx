import type { Metadata } from "next";

import { jobs } from "@/data/jobs";
import JobDetailsClient from "@/components/JobDetailsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const job = jobs.find(
    (item) => item.slug === slug
  );

  if (!job) {
    return {
      title: "Job Not Found | RUDRON",
    };
  }

  return {
    title: `${job.title} | ${job.location}`,
    description:
      `${job.title} opportunity with ${job.company} in ${job.location}. Apply through RUDRON Global Talent Solutions.`,
    alternates: {
      canonical:
        `https://www.rudrongts.com/jobs/${job.slug}`,
    },
    openGraph: {
      title: job.title,
      description: job.description,
      url:
        `https://www.rudrongts.com/jobs/${job.slug}`,
      type: "article",
    },
  };
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const job = jobs.find(
    (item) => item.slug === slug
  );

  if (!job) {

    return (
      <div className="bg-[#07111F] text-white min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold">

          Job Not Found

        </h1>

      </div>
    );
  }

  return <JobDetailsClient job={job} />;
}