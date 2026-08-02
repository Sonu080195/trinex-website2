"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  DollarSign,
  MapPin,
} from "lucide-react";

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
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs") || "[]"
      ) as string[];

      setSaved(savedJobs.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  const toggleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs") || "[]"
      ) as string[];

      const updatedJobs = savedJobs.includes(slug)
        ? savedJobs.filter((item) => item !== slug)
        : [...savedJobs, slug];

      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
      setSaved(updatedJobs.includes(slug));
    } catch {
      setSaved((previous) => !previous);
    }
  };

  return (
    <Link
      href={`/jobs/${slug}`}
      className="group block h-full"
      aria-label={`View ${title} at ${company}`}
    >
      <article className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0D1726] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_24px_65px_rgba(200,155,60,0.12)]">
        {/* Decorative effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute left-5 right-5 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#C89B3C]/10 transition-transform duration-700 group-hover:scale-125" />

        {/* Save button */}
        <button
          type="button"
          onClick={toggleSave}
          className={`absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${
            saved
              ? "border-[#C89B3C] bg-[#C89B3C] text-[#07111F] shadow-[0_8px_24px_rgba(200,155,60,0.28)]"
              : "border-white/10 bg-white/[0.06] text-white hover:border-[#C89B3C]/50 hover:bg-white/[0.1] hover:text-[#C89B3C]"
          }`}
          aria-label={saved ? "Remove from saved jobs" : "Save this job"}
          title={saved ? "Remove from saved jobs" : "Save this job"}
        >
          <Bookmark
            size={17}
            className={saved ? "fill-current" : ""}
          />
        </button>

        <div className="relative z-10 flex h-full flex-col">
          {/* Badges */}
          <div className="mb-5 flex flex-wrap gap-2 pr-12">
            <span className="rounded-full bg-[#C89B3C] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#07111F] shadow-[0_8px_20px_rgba(200,155,60,0.18)]">
              {industry}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white">
              {type}
            </span>
          </div>

          {/* Role */}
          <h3 className="max-w-[90%] text-[21px] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#C89B3C] lg:text-[24px]">
            {title}
          </h3>

          {/* Company */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#C89B3C]/20 bg-[#C89B3C]/10">
              <Building2
                size={15}
                className="text-[#C89B3C]"
                strokeWidth={1.8}
              />
            </div>

            <p className="text-[14px] font-medium text-[#C89B3C]">
              {company}
            </p>
          </div>

          {/* Details */}
          <div className="mt-5 grid gap-2.5">
            <JobDetail icon={MapPin} value={location} />
            <JobDetail icon={DollarSign} value={salary} />
            <JobDetail icon={BriefcaseBusiness} value={type} />
          </div>

          {/* CTA */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
              <span className="text-[14px] font-semibold text-white">
                View Position
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 text-[#C89B3C] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#C89B3C] group-hover:text-[#07111F]">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function JobDetail({
  icon: Icon,
  value,
}: {
  icon: typeof MapPin;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.035] px-3.5 py-3 text-[13px] text-gray-400 transition-colors duration-300 group-hover:border-[#C89B3C]/15 group-hover:text-gray-300">
      <Icon
        size={15}
        className="shrink-0 text-[#C89B3C]"
        strokeWidth={1.8}
      />

      <span className="line-clamp-1">{value}</span>
    </div>
  );
}