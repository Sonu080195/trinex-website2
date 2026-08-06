"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import HomeCTA from "@/components/HomeCTA";
import JobCard from "@/components/JobCard";
import { Job, jobs } from "@/data/jobs";

type SortOption = "newest" | "oldest" | "title";
type StatusFilter = "all" | "featured" | "urgent";

const ALL_VALUE = "all";

function uniqueValues(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export default function JobsContent() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState(ALL_VALUE);
  const [specialisation, setSpecialisation] = useState(ALL_VALUE);
  const [employmentType, setEmploymentType] = useState(ALL_VALUE);
  const [status, setStatus] = useState<StatusFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const industries = useMemo(
    () => uniqueValues(jobs.map((job) => job.industry)),
    [],
  );

  const specialisations = useMemo(
    () => uniqueValues(jobs.map((job) => job.specialisation)),
    [],
  );

  const employmentTypes = useMemo(
    () => uniqueValues(jobs.map((job) => job.type)),
    [],
  );

  const filteredJobs = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    const result = jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.company,
        job.location,
        job.salary,
        job.type,
        job.industry,
        job.specialisation,
        job.description,
        ...job.responsibilities,
        ...job.requirements,
      ]
        .join(" ")
        .toLowerCase();

      const matchesKeyword =
        !normalizedKeyword || searchableText.includes(normalizedKeyword);
      const matchesLocation =
        !normalizedLocation ||
        job.location.toLowerCase().includes(normalizedLocation);
      const matchesIndustry =
        industry === ALL_VALUE || job.industry === industry;
      const matchesSpecialisation =
        specialisation === ALL_VALUE ||
        job.specialisation === specialisation;
      const matchesEmploymentType =
        employmentType === ALL_VALUE || job.type === employmentType;
      const matchesStatus =
        status === "all" ||
        (status === "featured" && Boolean(job.featured)) ||
        (status === "urgent" && Boolean(job.urgent));

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesIndustry &&
        matchesSpecialisation &&
        matchesEmploymentType &&
        matchesStatus
      );
    });

    return [...result].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      const aDate = new Date(a.datePosted).getTime();
      const bDate = new Date(b.datePosted).getTime();

      return sortBy === "oldest" ? aDate - bDate : bDate - aDate;
    });
  }, [
    employmentType,
    industry,
    keyword,
    location,
    sortBy,
    specialisation,
    status,
  ]);

  const hasActiveFilters =
    keyword.trim() !== "" ||
    location.trim() !== "" ||
    industry !== ALL_VALUE ||
    specialisation !== ALL_VALUE ||
    employmentType !== ALL_VALUE ||
    status !== "all";

  function clearFilters() {
    setKeyword("");
    setLocation("");
    setIndustry(ALL_VALUE);
    setSpecialisation(ALL_VALUE);
    setEmploymentType(ALL_VALUE);
    setStatus("all");
  }

  return (
    <main className="min-h-screen bg-[#f4f5f6] text-[#07111F]">
      <section className="relative overflow-hidden bg-[#07111F] px-5 pb-16 pt-36 text-white sm:px-6 lg:pb-20 lg:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/jobs/jobs-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Current opportunities
              </p>
            </div>

            <h1 className="text-[34px] font-bold leading-[1.06] sm:text-[48px] lg:text-[62px]">
              Find Your Next Opportunity In
              <span className="block text-[#C89B3C]">
                Construction, Engineering & MEP
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-gray-300 sm:text-base">
              Search current positions with contractors, developers, engineering
              firms and mission-critical organizations across leading markets.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[22px] border border-black/5 bg-white p-4 shadow-[0_18px_55px_rgba(7,17,31,0.12)] sm:p-6">
          <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr_auto]">
            <SearchInput
              label="Keyword"
              placeholder="Job title, skill or sector"
              value={keyword}
              onChange={setKeyword}
            />

            <SearchInput
              label="Location"
              placeholder="City, state or remote"
              value={location}
              onChange={setLocation}
            />

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("job-results")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="mt-auto flex h-[52px] items-center justify-center gap-2 rounded-[12px] bg-[#C89B3C] px-7 text-sm font-bold text-[#07111F] transition hover:bg-[#d8ab4a] lg:min-w-[150px]"
            >
              <Search size={17} />
              Search jobs
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileFiltersOpen((current) => !current)}
            className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-[#07111F] lg:hidden"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal size={17} />
              Additional filters
            </span>
            <ChevronDown
              size={17}
              className={`transition-transform ${
                mobileFiltersOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`${
              mobileFiltersOpen ? "grid" : "hidden"
            } mt-4 gap-3 border-t border-gray-100 pt-4 lg:grid lg:grid-cols-4`}
          >
            <FilterSelect
              label="Industry"
              value={industry}
              onChange={setIndustry}
              options={industries}
              allLabel="All industries"
            />
            <FilterSelect
              label="Specialisation"
              value={specialisation}
              onChange={setSpecialisation}
              options={specialisations}
              allLabel="All specialisations"
            />
            <FilterSelect
              label="Employment type"
              value={employmentType}
              onChange={setEmploymentType}
              options={employmentTypes}
              allLabel="All types"
            />
            <FilterSelect
              label="Opportunity"
              value={status}
              onChange={(value) => setStatus(value as StatusFilter)}
              options={["featured", "urgent"]}
              optionLabels={{ featured: "Featured", urgent: "Urgent" }}
              allLabel="All opportunities"
            />
          </div>
        </div>
      </section>

      <section id="job-results" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C89B3C]">
                Open positions
              </p>
              <h2 className="mt-2 text-[28px] font-bold sm:text-[36px]">
                {filteredJobs.length} {filteredJobs.length === 1 ? "role" : "roles"} found
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Results update automatically as you refine your search.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-600 transition hover:border-[#C89B3C]/50 hover:text-[#07111F]"
                >
                  <X size={15} />
                  Clear filters
                </button>
              )}

              <label className="relative">
                <span className="sr-only">Sort jobs</span>
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value as SortOption)
                  }
                  className="h-11 appearance-none rounded-xl border border-gray-200 bg-white py-0 pl-4 pr-10 text-sm font-medium text-[#07111F] outline-none focus:border-[#C89B3C]"
                >
                  <option value="newest">Most recent</option>
                  <option value="oldest">Oldest first</option>
                  <option value="title">Job title A–Z</option>
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </label>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.slug}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  type={job.type}
                  industry={job.specialisation}
                  slug={job.slug}
                  datePosted={job.datePosted}
                  featured={job.featured}
                  urgent={job.urgent}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[22px] border border-gray-200 bg-white px-6 py-14 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07111F]/5 text-[#C89B3C]">
                <Search size={24} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">No matching positions found</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
                We do not currently have a role matching these criteria. Clear
                the filters or submit your profile for future opportunities.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-[#07111F] transition hover:border-[#C89B3C]/50"
                >
                  Clear filters
                </button>
                <Link
                  href="/candidates"
                  className="rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-bold text-[#07111F] transition hover:bg-[#d8ab4a]"
                >
                  Submit your profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:pb-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[26px] bg-[#07111F] text-white lg:grid-cols-[1fr_auto]">
          <div className="p-7 sm:p-9 lg:p-11">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C89B3C]">
                Join our talent network
              </p>
            </div>
            <h2 className="mt-4 text-[27px] font-bold sm:text-[34px]">
              Cannot find the right opportunity today?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-[15px]">
              Share your profile with RUDRON. Our recruiters can consider your
              experience for future construction, engineering, MEP and
              mission-critical assignments.
            </p>
          </div>
          <div className="flex items-center border-t border-white/10 p-7 lg:border-l lg:border-t-0 lg:p-10">
            <Link
              href="/candidates"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-6 py-3.5 text-sm font-bold text-[#07111F] transition hover:bg-[#d8ab4a] lg:w-auto"
            >
              <BriefcaseBusiness size={17} />
              Submit your profile
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </main>
  );
}

function SearchInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
        {label}
      </span>
      <div className="relative">
        <Search
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-[12px] border border-gray-200 bg-white pl-11 pr-4 text-sm text-[#07111F] outline-none transition placeholder:text-gray-400 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10"
        />
      </div>
    </label>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  allLabel,
  optionLabels,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  allLabel: string;
  optionLabels?: Record<string, string>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-[48px] w-full appearance-none rounded-xl border border-gray-200 bg-white py-0 pl-4 pr-10 text-sm text-[#07111F] outline-none transition focus:border-[#C89B3C]"
        >
          <option value={ALL_VALUE}>{allLabel}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {optionLabels?.[option] ?? option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </label>
  );
}