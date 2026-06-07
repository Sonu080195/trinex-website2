"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  MapPin,
  DollarSign,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react";

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

    }, 6000);

    return () => clearInterval(interval);

  }, [featuredJobs.length]);

  const activeJob =
    featuredJobs[activeIndex];

  if (!activeJob) return null;

  return (

    <section className="bg-[#07111F] py-14 sm:py-16 lg:py-10 px-5 sm:px-6 lg:px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-6 sm:mb-8">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Featured Opportunities

          </p>

          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] mb-5">

            Executive & Project
            Leadership Opportunities

          </h2>

          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-3xl mx-auto">

  Explore executive, leadership and project
  delivery opportunities across construction,
  mission critical, healthcare and infrastructure markets.

</p>

        </div>

        {/* CARD */}
        <div className="relative overflow-hidden rounded-[32px] min-h-[720px] sm:min-h-[560px] lg:h-[560px]">

          {/* BG */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(7,17,31,0.97) 10%,
                  rgba(7,17,31,0.82) 45%,
                  rgba(7,17,31,0.35) 100%
                ),
                url(${activeJob.heroImage})
              `,
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-start sm:items-center">

            <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-10 py-8 sm:py-0">

              <div className="max-w-[700px]">

                {/* BADGES */}
                <div className="flex flex-wrap gap-3 mb-5">

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
                <h3 className="text-white text-[22px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.08] mb-3">

                  {activeJob.title}

                </h3>

{/* COMPANY */}
<p className="text-[#C89B3C] text-[15px] sm:text-[20px] mb-4">

{activeJob.company}

</p>

<div className="flex flex-wrap gap-3 mb-5">

  {[
    "Executive Search",
    "Career Growth",
    "Confidential Search",
  ].map((item) => (

    <span
      key={item}
      className="
      px-4
      py-2
      rounded-full
      bg-white/5
      border
      border-white/10
      text-white
      text-xs
      "
    >

      {item}

    </span>

  ))}

</div>

                {/* DETAILS */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mb-4">

                  <div className="flex items-center gap-2 text-gray-300">

                    <MapPin size={16} />

                    <span>{activeJob.location}</span>

                  </div>

                  <div className="flex items-center gap-2 text-gray-300">

                    <DollarSign size={16} />

                    <span>{activeJob.salary}</span>

                  </div>

                  <div className="flex items-center gap-2 text-gray-300">

                    <Clock3 size={16} />

                    <span>{activeJob.postedDate}</span>

                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-[14px] sm:text-[16px] leading-7 mb-6 max-w-[650px] line-clamp-4 sm:line-clamp-none">

                  {activeJob.description}

                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">

                  <Link
                    href={`/jobs/${activeJob.slug}`}
                    className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold px-8 py-4 rounded-xl text-center transition"
                  >

                    View Position

                  </Link>

                  <Link
                    href="/jobs"
                    className="border border-white/20 hover:border-[#C89B3C] text-white font-semibold px-8 py-4 rounded-xl text-center transition"
                  >

                    Explore All Opportunities

                  </Link>

                </div>

                {/* RECRUITER */}
                <div className="mt-5 sm:mt-8 flex items-center gap-2">

                  <BriefcaseBusiness
                    size={16}
                    className="text-[#C89B3C]"
                  />

                  <p className="text-gray-400 text-sm uppercase tracking-[2px]">

                    Managed By

                    <span className="text-white ml-2">

                      {activeJob.recruiter}

                    </span>

                  </p>

                </div>

              </div>

            </div>

          </div>

<div className="hidden xl:block absolute top-8 right-8 z-20">

  <div className="bg-[#07111F]/90 backdrop-blur-md border border-white/10 rounded-[24px] p-5 w-[250px]">

    <p className="text-[#C89B3C] text-xs uppercase tracking-[2px] mb-2">

      Featured Search

    </p>

    <h4 className="text-white text-lg font-bold mb-3">

      {activeJob.title}

    </h4>

    <p className="text-gray-400 text-sm">

      {activeJob.location}

    </p>

  </div>

</div>

          {/* INDICATORS */}
          <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

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

        </div>

{/* STATS */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

{[
  ["Executive", "Search"],
  ["Mission Critical", "Markets"],
  ["Healthcare", "Construction"],
  ["Nationwide", "Talent Network"],
].map((item, index) => (

            <div
              key={index}
              className="bg-[#0D1726] border border-white/8 rounded-[16px] p-2 text-center"
            >

              <h3 className="text-[#C89B3C] text-[24px] font-bold">

                {item[0]}

              </h3>

              <p className="text-gray-400 text-sm mt-1">

                {item[1]}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}