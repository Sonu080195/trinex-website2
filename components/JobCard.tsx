"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  Clock3,
  DollarSign,
  MapPin,
} from "lucide-react";

import { getRelativeTime } from "@/lib/relativeTime";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  industry: string;
  slug: string;
  datePosted: string;
  featured?: boolean;
  urgent?: boolean;
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  type,
  industry,
  slug,
  datePosted,
  featured = false,
  urgent = false,
}: JobCardProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs") || "[]",
      ) as string[];
      setSaved(savedJobs.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  function toggleSave(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    try {
      const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs") || "[]",
      ) as string[];
      const updatedJobs = savedJobs.includes(slug)
        ? savedJobs.filter((savedSlug) => savedSlug !== slug)
        : [...savedJobs, slug];

      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
      setSaved(updatedJobs.includes(slug));
    } catch {
      setSaved((current) => !current);
    }
  }

  return (
    <Link
      href={`/jobs/${slug}`}
      className="group block rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2"
      aria-label={`View ${title} at ${company}`}
    >
      <article className="relative overflow-hidden rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(7,17,31,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/45 hover:shadow-[0_14px_42px_rgba(7,17,31,0.09)] sm:p-6">
        <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-[#C89B3C] transition-transform duration-300 group-hover:scale-y-100" />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#07111F]/5 px-3 py-1 text-[11px] font-semibold text-[#07111F]">
                {industry}
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-[11px] font-medium text-gray-500">
                {type}
              </span>
              {featured && (
                <span className="rounded-full bg-[#C89B3C]/12 px-3 py-1 text-[11px] font-semibold text-[#9a6e14]">
                  Featured
                </span>
              )}
              {urgent && (
                <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600">
                  Urgent
                </span>
              )}
            </div>

            <h3 className="pr-12 text-[20px] font-bold leading-snug text-[#07111F] transition-colors group-hover:text-[#9a6e14] sm:text-[23px]">
              {title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Building2 size={15} className="shrink-0 text-[#C89B3C]" />
              <span className="truncate">{company}</span>
            </div>

            <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-2 xl:grid-cols-4">
              <Detail icon={MapPin} value={location} />
              <Detail icon={DollarSign} value={salary} />
              <Detail icon={BriefcaseBusiness} value={type} />
              <Detail icon={Clock3} value={getRelativeTime(datePosted)} />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4 lg:min-w-[165px] lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <button
              type="button"
              onClick={toggleSave}
              aria-label={saved ? "Remove from saved jobs" : "Save this job"}
              title={saved ? "Remove from saved jobs" : "Save this job"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                saved
                  ? "border-[#C89B3C] bg-[#C89B3C] text-[#07111F]"
                  : "border-gray-200 bg-white text-gray-500 hover:border-[#C89B3C]/60 hover:text-[#9a6e14]"
              }`}
            >
              <Bookmark size={17} className={saved ? "fill-current" : ""} />
            </button>

            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#07111F] transition-colors group-hover:text-[#9a6e14]">
              View job
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07111F] text-white transition group-hover:translate-x-0.5 group-hover:bg-[#C89B3C] group-hover:text-[#07111F]">
                <ArrowRight size={16} />
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Detail({
  icon: Icon,
  value,
}: {
  icon: typeof MapPin;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <Icon size={15} className="shrink-0 text-[#C89B3C]" strokeWidth={1.8} />
      <span className="truncate">{value}</span>
    </div>
  );
}