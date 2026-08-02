"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  DollarSign,
  MapPin,
  Sparkles,
} from "lucide-react";

import { jobs } from "@/data/jobs";

const marketStats = [
  ["Executive", "Search"],
  ["Mission Critical", "Markets"],
  ["Healthcare", "Construction"],
  ["Nationwide", "Talent Network"],
];

const jobTags = [
  "Executive Search",
  "Career Growth",
  "Confidential Search",
];

export default function HeroJobsCarousel() {
  const featuredJobs = useMemo(
    () => jobs.filter((job) => job.featured),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSectionVisible(true), 120);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (paused || featuredJobs.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previous) =>
        previous === featuredJobs.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => window.clearInterval(interval);
  }, [featuredJobs.length, paused]);

  useEffect(() => {
    if (activeIndex > featuredJobs.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, featuredJobs.length]);

  const activeJob = featuredJobs[activeIndex];

  if (!activeJob) return null;

  const showPreviousJob = () => {
    setActiveIndex((previous) =>
      previous === 0 ? featuredJobs.length - 1 : previous - 1
    );
  };

  const showNextJob = () => {
    setActiveIndex((previous) =>
      previous === featuredJobs.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#07111F] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-6 lg:py-16">
      {/* Animated section background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[850px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[145px] animate-pulse" />
        <div className="absolute -left-48 bottom-[-210px] h-[440px] w-[440px] rounded-full bg-blue-500/10 blur-[135px]" />
        <div className="absolute -right-44 top-1/3 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/10 blur-[135px]" />

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />

        <div className="absolute left-[8%] top-28 h-px w-44 rotate-[-17deg] bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />
        <div className="absolute right-[9%] top-36 hidden h-px w-52 rotate-[16deg] bg-gradient-to-r from-transparent via-[#C89B3C]/35 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Centered section heading */}
        <div
          className="mx-auto mb-12 max-w-4xl text-center transition-all duration-700 lg:mb-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible
              ? "translateY(0)"
              : "translateY(22px)",
          }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:tracking-[5px]">
                Featured Opportunities
              </p>
            </div>

            <span className="h-px w-9 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2 className="text-[30px] font-bold leading-[1.04] sm:text-[42px] lg:text-[58px]">
            Executive &amp; Project Leadership
            <br />

            <span className="relative inline-block bg-gradient-to-r from-[#C89B3C] via-[#E0B55D] to-[#C89B3C] bg-clip-text text-transparent">
              Opportunities
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent opacity-30" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-gray-400 sm:text-[16px] sm:leading-8">
            Explore executive, leadership and project-delivery opportunities
            across construction, mission critical, healthcare and
            infrastructure markets.
          </p>
        </div>

        {/* Featured job */}
        <div
          className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.42)] transition-all duration-700 sm:rounded-[36px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible
              ? "translateY(0)"
              : "translateY(28px)",
          }}
        >
          {/* Background changes with active job */}
          <div
            key={`${activeJob.slug}-background`}
            className="absolute inset-0 animate-[fadeIn_700ms_ease-out] bg-cover bg-center transition-transform duration-[6000ms] ease-out hover:scale-[1.03]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(7,17,31,0.99) 7%,
                  rgba(7,17,31,0.93) 39%,
                  rgba(7,17,31,0.65) 66%,
                  rgba(7,17,31,0.27) 100%
                ),
                url(${activeJob.heroImage})
              `,
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-transparent to-[#07111F]/25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(200,155,60,0.12),transparent_36%)]" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#C89B3C]/10" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#C89B3C]/10" />

          {/* Large slide number */}
          <div className="pointer-events-none absolute right-5 top-4 hidden lg:block">
            <div className="text-[180px] font-black leading-none text-white/[0.035]">
              0{activeIndex + 1}
            </div>
          </div>

          {/* Job content */}
          <div className="relative z-10 flex min-h-[690px] items-start sm:min-h-[590px] sm:items-center lg:min-h-[560px]">
            <div className="w-full px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
              <div
                key={activeJob.slug}
                className="max-w-[730px] animate-[fadeSlideUp_600ms_ease-out]"
              >
                {/* Badges */}
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#C89B3C] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#07111F] shadow-[0_8px_24px_rgba(200,155,60,0.24)] sm:text-xs">
                    {activeJob.specialisation}
                  </span>

                  {activeJob.urgent && (
                    <span className="rounded-full border border-red-400/30 bg-red-500/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white shadow-[0_8px_24px_rgba(239,68,68,0.18)] sm:text-xs">
                      Urgent Hiring
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[26px] font-bold leading-[1.06] text-white sm:text-[40px] lg:text-[52px]">
                  {activeJob.title}
                </h3>

                <p className="mt-3 text-[15px] font-medium tracking-[1px] text-[#C89B3C] sm:text-[20px]">
                  {activeJob.company}
                </p>

                {/* Search tags */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {jobTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[11px] text-gray-200 backdrop-blur-md transition hover:border-[#C89B3C]/30 hover:bg-[#C89B3C]/10 sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Job details */}
                <div className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
                  <JobDetail icon={MapPin} value={activeJob.location} />
                  <JobDetail icon={DollarSign} value={activeJob.salary} />
                </div>

                {/* Description */}
                <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-gray-300 sm:text-[16px] sm:leading-8">
                  {activeJob.description}
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/jobs/${activeJob.slug}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-7 py-4 text-center text-[14px] font-semibold text-[#07111F] shadow-[0_12px_32px_rgba(200,155,60,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7AA4E] hover:shadow-[0_16px_40px_rgba(200,155,60,0.36)]"
                  >
                    View Position
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/jobs"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-center text-[14px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/60 hover:bg-white/[0.08]"
                  >
                    Explore All Opportunities
                    <ArrowRight
                      size={17}
                      className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Recruiter */}
                <div className="mt-7 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C89B3C]/20 bg-[#C89B3C]/10">
                    <BriefcaseBusiness
                      size={16}
                      className="text-[#C89B3C]"
                    />
                  </div>

                  <p className="text-[11px] uppercase tracking-[2px] text-gray-400 sm:text-sm">
                    Managed By
                    <span className="ml-2 font-medium text-white">
                      {activeJob.recruiter}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop arrows */}
          {featuredJobs.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousJob}
                className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#07111F]/65 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-[55%] hover:border-[#C89B3C]/60 hover:bg-[#C89B3C] hover:text-[#07111F] lg:flex"
                aria-label="Show previous featured job"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={showNextJob}
                className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#07111F]/65 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-[55%] hover:border-[#C89B3C]/60 hover:bg-[#C89B3C] hover:text-[#07111F] lg:flex"
                aria-label="Show next featured job"
              >
                <ArrowRight size={19} />
              </button>
            </>
          )}

          {/* Indicators and mobile controls */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-7">
            <button
              type="button"
              onClick={showPreviousJob}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#07111F]/70 text-white backdrop-blur-md transition hover:border-[#C89B3C]/50 hover:text-[#C89B3C] lg:hidden"
              aria-label="Show previous featured job"
            >
              <ArrowLeft size={14} />
            </button>

            <div className="flex items-center gap-2">
              {featuredJobs.map((job, index) => (
                <button
                  key={job.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-10 bg-[#C89B3C]"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Show featured job ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNextJob}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#07111F]/70 text-white backdrop-blur-md transition hover:border-[#C89B3C]/50 hover:text-[#C89B3C] lg:hidden"
              aria-label="Show next featured job"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Market cards */}
        <div
          className="mt-5 grid grid-cols-2 gap-4 transition-all duration-700 delay-300 lg:grid-cols-4"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >
          {marketStats.map(([title, subtitle], index) => (
            <article
              key={`${title}-${subtitle}`}
              className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0D1726] p-4 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#C89B3C]/30 hover:shadow-[0_18px_45px_rgba(200,155,60,0.1)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.13),transparent_44%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-4 right-4 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative">
                <span className="text-[10px] font-semibold tracking-[2px] text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-[16px] font-bold text-[#C89B3C] sm:text-[21px]">
                  {title}
                </h3>

                <p className="mt-1 text-[12px] text-gray-400 sm:text-sm">
                  {subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
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
    <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3.5 py-3 backdrop-blur-md">
      <Icon size={16} className="shrink-0 text-[#C89B3C]" />
      <span className="line-clamp-1">{value}</span>
    </div>
  );
}