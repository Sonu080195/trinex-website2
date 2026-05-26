import { jobs } from "@/data/jobs";

import JobDetailsClient from "@/components/JobDetailsClient";

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