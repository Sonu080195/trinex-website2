"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  industry: string;
  slug: string;
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  type,
  industry,
  slug,
}: JobCardProps) {

  const [saved, setSaved] =
    useState(false);

  useEffect(() => {

    const savedJobs =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        ) || "[]"
      );

    setSaved(
      savedJobs.includes(slug)
    );

  }, [slug]);

  const toggleSave = (
    e: React.MouseEvent
  ) => {

    e.preventDefault();

    const savedJobs =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        ) || "[]"
      );

    let updatedJobs = [];

    if (savedJobs.includes(slug)) {

      updatedJobs =
        savedJobs.filter(
          (item: string) =>
            item !== slug
        );

      setSaved(false);

    } else {

      updatedJobs = [
        ...savedJobs,
        slug,
      ];

      setSaved(true);
    }

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (

    <Link
      href={`/jobs/${slug}`}
      className="group block"
    >

      <div className="relative bg-[#0D1726] border border-white/5 rounded-[24px] p-5 hover:border-[#C89B3C]/30 transition-all duration-500">

        {/* SAVE BUTTON */}
        <button
          onClick={toggleSave}
          className={`absolute top-5 right-5 w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center ${
            saved
              ? "bg-[#C89B3C] border-[#C89B3C] text-black"
              : "bg-white/5 border-white/10 text-white hover:border-[#C89B3C]/40"
          }`}
        >

          {saved ? "★" : "☆"}

        </button>

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mb-4">

          <div className="bg-[#C89B3C] text-black text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

            {industry}

          </div>

          <div className="bg-white/5 text-white text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

            {type}

          </div>

        </div>

        {/* TITLE */}
        <h3 className="text-white text-[20px] lg:text-[24px] font-bold leading-tight mb-3 max-w-[85%]">

          {title}

        </h3>

        {/* COMPANY */}
        <p className="text-[#C89B3C] text-[15px] mb-4">

          {company}

        </p>

        {/* DETAILS */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-[13px] mb-5">

          <p>{location}</p>

          <p>{salary}</p>

        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">

          <p className="text-white text-[14px] font-medium">

            View Position

          </p>

          <span className="text-[#C89B3C] text-lg transition duration-300 group-hover:translate-x-2">

            →

          </span>

        </div>

      </div>

    </Link>
  );
}