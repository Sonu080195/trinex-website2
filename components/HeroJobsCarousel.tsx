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

    <section className="bg-[#07111F] py-8 lg:py-10 px-4 sm:px-4 lg:px-20 overflow-hidden">

      <div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-10 lg:mb-14">

  <div className="inline-flex items-center gap-3 mb-4">

    <span className="h-px w-8 bg-[#C89B3C]" />

    <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

      Featured Opportunities

    </p>

    <span className="h-px w-8 bg-[#C89B3C]" />

  </div>

          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.02] mb-5">

            Executive & Project
            Leadership 
            
            <br />

    <span className="relative inline-block text-[#C89B3C]">

      Opportunities

      <span
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[3px]
        bg-[#C89B3C]
        opacity-20
        rounded-full
        "
      />

    </span>

          </h2>

          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-7xl mx-auto">

  Explore executive, leadership and project
  delivery opportunities across construction,
  mission critical, healthcare and infrastructure markets.

</p>

        </div>

        {/* CARD */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.35) min-h-[720px] sm:min-h-[560px] lg:h-[560px]">

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

                <div className="absolute right-0 top-0 hidden lg:block">

  <div className="text-[180px] font-black text-white/[0.03] leading-none">

    0{activeIndex + 1}

  </div>

</div>

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
<p className="text-[#C89B3C] text-[15px] sm:text-[20px] mb-5 font-medium tracking-[1px]">

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
className="
group
bg-[#C89B3C]
hover:bg-[#d6ab52]
text-black
font-semibold
px-8
py-4
rounded-xl
text-center
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_12px_30px_rgba(200,155,60,0.35)]
"
        >

View Position

</Link>

<Link
href="/jobs"
className="
border
border-white/20
hover:border-[#C89B3C]
bg-white/[0.03]
backdrop-blur-sm
text-white
font-semibold
px-8
py-4
rounded-xl
text-center
transition-all
duration-300
hover:-translate-y-1
"
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

              <h3 className="text-[#C89B3C] text-[14px] sm:text-[22px] font-bold">

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