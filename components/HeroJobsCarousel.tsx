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

    <section className="bg-[#07111F] py-14 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-8 sm:mb-10">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Featured Opportunities

          </p>

          <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

            Executive & Project
            Leadership Opportunities

          </h2>

        </div>

        {/* CARD */}
        <div className="relative overflow-hidden rounded-[32px] h-[420px] lg:h-[500px]">

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
          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

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
                <h3 className="text-white text-[24px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.02] mb-4">

                  {activeJob.title}

                </h3>

                {/* COMPANY */}
                <p className="text-[#C89B3C] text-[18px] sm:text-[20px] mb-6">

                  {activeJob.company}

                </p>

                {/* DETAILS */}
                <div className="flex flex-wrap gap-5 mb-7">

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
                <p className="text-gray-300 text-[15px] sm:text-[16px] leading-8 mb-8 max-w-[650px]">

                  {activeJob.description}

                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">

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
                <div className="mt-8 flex items-center gap-3">

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

          {/* INDICATORS */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

          {[
            ["100+", "Placements"],
            ["30+", "Markets Served"],
            ["95%", "Retention Rate"],
            ["USA", "Nationwide Reach"],
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#0D1726] border border-white/8 rounded-[16px] p-4 text-center"
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