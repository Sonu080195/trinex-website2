"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import JobsSidebar from "@/components/JobsSidebar";
import JobCard from "@/components/JobCard";

import { jobs } from "@/data/jobs";

export default function JobsPage() {

  const [searchQuery, setSearchQuery] =
    useState("");

  const [selectedIndustry, setSelectedIndustry] =
    useState("");

  const [
    selectedSpecialisation,
    setSelectedSpecialisation,
  ] = useState("");

  const [selectedCountry, setSelectedCountry] =
    useState("");

  const [selectedState, setSelectedState] =
    useState("");

  const [selectedEmployment, setSelectedEmployment] =
    useState("");

  const [featuredOnly, setFeaturedOnly] =
    useState(false);

  const [urgentOnly, setUrgentOnly] =
    useState(false);

  const filteredJobs = useMemo(() => {

    return jobs.filter((job: any) => {

      const searchableContent = `
        ${job.title}
        ${job.company}
        ${job.location}
        ${job.description}
        ${job.responsibilities?.join(" ")}
        ${job.requirements?.join(" ")}
        ${job.benefits?.join(" ")}
      `.toLowerCase();

      const queryMatch =
        !searchQuery ||
        searchableContent.includes(
          searchQuery.toLowerCase()
        );

      const industryMatch =
        !selectedIndustry ||
        job.industry === selectedIndustry;

      const specialisationMatch =
        !selectedSpecialisation ||
        job.specialisation ===
          selectedSpecialisation;

      const countryMatch =
        !selectedCountry ||
        job.country === selectedCountry;

      const stateMatch =
        !selectedState ||
        job.state === selectedState;

      const employmentMatch =
        !selectedEmployment ||
        job.type === selectedEmployment;

      const featuredMatch =
        !featuredOnly || job.featured;

      const urgentMatch =
        !urgentOnly || job.urgent;

      return (
        queryMatch &&
        industryMatch &&
        specialisationMatch &&
        countryMatch &&
        stateMatch &&
        employmentMatch &&
        featuredMatch &&
        urgentMatch
      );
    });

  }, [
    searchQuery,
    selectedIndustry,
    selectedSpecialisation,
    selectedCountry,
    selectedState,
    selectedEmployment,
    featuredOnly,
    urgentOnly,
  ]);

  return (

    <main className="bg-[#07111F] text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[62vh] md:min-h-[58vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.25) 80%), url('/jobs/jobs-hero.png')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-28 sm:pt-30 lg:pt-24 pb-20 sm:pb-24">

            <div className="max-w-[720px]">

              <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-xs mb-4">

                Career Opportunities

              </p>

              <h1 className="text-white font-bold leading-[1.04] text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] mb-5">

                Explore Construction
                Career Opportunities

              </h1>

              <p className="text-gray-300 text-[14px] sm:text-[15px] leading-7 sm:leading-8 max-w-[620px]">

                Discover opportunities across commercial,
                infrastructure, mission critical,
                architecture, and executive construction sectors.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="px-5 sm:px-6 lg:px-12 -mt-10 sm:-mt-14 lg:-mt-16 relative z-20">

        <div className="max-w-7xl mx-auto">

          <div className="bg-[#0D1726]/95 backdrop-blur-xl border border-white/5 rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 shadow-2xl">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-3 items-center">

              {/* SEARCH INPUT */}
              <input
                type="text"
                placeholder="Search skills, titles, locations..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                className="w-full h-[48px] sm:h-[50px] bg-[#07111F] border border-white/10 rounded-xl px-4 sm:px-5 text-white outline-none text-[14px] sm:text-sm"
              />

              {/* FEATURED */}
              <button
                onClick={() =>
                  setFeaturedOnly(
                    !featuredOnly
                  )
                }
                className={`h-[48px] sm:h-[50px] px-5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all duration-300 ${
                  featuredOnly
                    ? "bg-[#C89B3C] text-black"
                    : "bg-white/10 text-white"
                }`}
              >

                Featured Jobs

              </button>

              {/* URGENT */}
              <button
                onClick={() =>
                  setUrgentOnly(
                    !urgentOnly
                  )
                }
                className={`h-[48px] sm:h-[50px] px-5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all duration-300 ${
                  urgentOnly
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-white"
                }`}
              >

                Urgent Hiring

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* JOBS */}
      <section className="py-8 sm:py-10 px-5 sm:px-6 lg:px-12">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-5 sm:gap-6">

          {/* SIDEBAR */}
          <JobsSidebar
            selectedIndustry={selectedIndustry}
            selectedSpecialisation={selectedSpecialisation}
            selectedCountry={selectedCountry}
            selectedState={selectedState}
            selectedEmployment={selectedEmployment}

            setSelectedIndustry={setSelectedIndustry}
            setSelectedSpecialisation={setSelectedSpecialisation}
            setSelectedCountry={setSelectedCountry}
            setSelectedState={setSelectedState}
            setSelectedEmployment={setSelectedEmployment}
          />

          {/* JOB LIST */}
          <div className="space-y-4">

            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">

              <h2 className="text-white text-[22px] sm:text-[24px] font-bold">

                Open Positions

              </h2>

              <div className="text-gray-400 text-[13px] sm:text-sm">

                {filteredJobs.length} Jobs Found

              </div>

            </div>

            {filteredJobs.length > 0 ? (

              filteredJobs.map(
                (job: any, index: number) => (

                  <JobCard
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    type={job.type}
                    industry={job.specialisation}
                    slug={job.slug}
                  />

                )
              )

            ) : (

              <div className="bg-[#0D1726] border border-white/5 rounded-[22px] sm:rounded-[24px] p-6 sm:p-8 text-center">

                <h3 className="text-white text-[22px] sm:text-[24px] font-bold mb-3">

                  No Jobs Found

                </h3>

                <p className="text-gray-400 text-[13px] sm:text-sm leading-7">

                  No positions currently available for the selected filters.

                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      <HomeCTA />

      <Footer />

    </main>
  );
}