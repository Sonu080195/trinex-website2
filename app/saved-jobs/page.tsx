"use client";

import { useEffect, useState } from "react";
import HomeCTA from "@/components/HomeCTA";
import JobCard from "@/components/JobCard";

import { jobs } from "@/data/jobs";

export default function SavedJobsPage() {

  const [savedJobs, setSavedJobs] =
    useState<any[]>([]);

  useEffect(() => {

    const savedSlugs =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        ) || "[]"
      );

    const matchedJobs = jobs.filter(
      (job: any) =>
        savedSlugs.includes(job.slug)
    );

    setSavedJobs(matchedJobs);

  }, []);

  return (

    <main className="bg-[#07111F] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[42vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.25) 80%), url('/jobs/jobs-hero.webp')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24">

            <div className="max-w-[700px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs mb-4">

                Candidate Dashboard

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[40px] md:text-[52px] mb-5">

                Saved Jobs

              </h1>

              <p className="text-gray-300 text-[15px] leading-7 max-w-[620px]">

                Review your shortlisted opportunities and revisit positions that match your career goals.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SAVED JOBS */}
      <section className="py-10 px-6 lg:px-12">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex items-center justify-between mb-7">

            <h2 className="text-white text-[24px] font-bold">

              Your Saved Opportunities

            </h2>

            <div className="text-gray-400 text-sm">

              {savedJobs.length} Saved

            </div>

          </div>

          {/* JOBS */}
          <div className="space-y-4">

            {savedJobs.length > 0 ? (

              savedJobs.map(
                (job: any, index: number) => (

                  <JobCard
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    type={job.type}
                    industry={job.specialisation}
                    slug={job.slug} datePosted={""}                  />

                )
              )

            ) : (

              <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-8 text-center">

                <h3 className="text-white text-[24px] font-bold mb-3">

                  No Saved Jobs

                </h3>

                <p className="text-gray-400 text-sm">

                  Save opportunities to revisit them later.

                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      <HomeCTA />

    </main>
  );
}