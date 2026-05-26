"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { jobs } from "@/data/jobs";

export default function HeroJobsCarousel() {

  const featuredJobs =
    jobs.filter((job) => job.featured);

  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === featuredJobs.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [featuredJobs.length]);

  const activeJob =
    featuredJobs[activeIndex];

  if (!activeJob) return null;

  return (

    <section className="relative h-[560px] overflow-hidden">

      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(7,17,31,0.95) 15%,
              rgba(7,17,31,0.75) 45%,
              rgba(7,17,31,0.30) 100%
            ),
            url(${activeJob.heroImage})
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <div className="max-w-[620px]">

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-4">

              <div className="bg-[#C89B3C] text-black text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                {activeJob.specialisation}

              </div>

              {activeJob.urgent && (

                <div className="bg-red-500 text-white text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                  Urgent Hiring

                </div>

              )}

            </div>

            {/* TITLE */}
            <h1 className="text-white text-[42px] md:text-[54px] font-bold leading-[1.02] mb-4">

              {activeJob.title}

            </h1>

            {/* COMPANY */}
            <p className="text-[#C89B3C] text-[18px] mb-4">

              {activeJob.company}

            </p>

            {/* DETAILS */}
            <div className="flex flex-wrap gap-6 text-gray-300 text-[17px] mb-8">

              <p>{activeJob.location}</p>

              <p>{activeJob.salary}</p>

              <p>{activeJob.postedDate}</p>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[15px] leading-7 max-w-2xl mb-7">

              {activeJob.description}

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <Link
                href={`/jobs/${activeJob.slug}`}
                className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >

                View Position

              </Link>

              <Link
                href="/jobs"
                className="border border-white/20 hover:border-[#C89B3C] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >

                Explore Opportunities

              </Link>

            </div>

            {/* RECRUITER */}
            <div className="mt-8 text-gray-400 text-sm uppercase tracking-[3px]">

              Managed By:
              <span className="text-white ml-2">

                {activeJob.recruiter}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {featuredJobs.map((_, index) => (

          <button
            key={index}
            onClick={() =>
              setActiveIndex(index)
            }
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-12 bg-[#C89B3C]"
                : "w-2 bg-white/40"
            }`}
          />

        ))}

      </div>

    </section>
  );
}