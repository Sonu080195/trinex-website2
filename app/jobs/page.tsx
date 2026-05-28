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
        ${job.specialisation}
        ${job.industry}
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

  const featuredJobs =
    jobs.filter((job) => job.featured);

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 12%, rgba(7,17,31,0.76) 42%, rgba(7,17,31,0.25) 85%), url('/jobs/jobs-hero.png')",
          }}
        />

        {/* MOBILE OVERLAY */}
        <div className="absolute inset-0 bg-[#07111F]/35 sm:hidden" />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-32 lg:pt-20 pb-20 sm:pb-24 lg:pb-32">

            <div className="max-w-[700px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[10px] sm:text-sm mb-4">

                Career Opportunities

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[36px] sm:text-[52px] lg:text-[64px] mb-5 sm:mb-6">

                Explore Construction
                Career Opportunities

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[680px]">

                Discover opportunities across commercial,
                industrial, infrastructure, mission critical,
                and executive construction sectors.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SEARCH FLOATING PANEL */}
      <section className="relative z-30 px-4 sm:px-6 lg:px-6 -mt-10 sm:-mt-24 lg:-mt-34">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] p-4 sm:p-6 lg:p-7 max-w-5xl">

            {/* FILTERS */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_190px_190px] gap-3">

              {/* SEARCH */}
              <div>

                <label className="text-[#07111F] text-[12px] sm:text-[13px] font-semibold mb-2 block">

                  Search Opportunities

                </label>

                <input
                  type="text"
                  placeholder="Project Manager, BIM, Procore, Superintendent..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  className="w-full h-[48px] sm:h-[52px] rounded-[14px] border border-gray-200 px-4 sm:px-5 text-[#07111F] text-[14px] sm:text-[15px] outline-none focus:border-[#C89B3C]"
                />

              </div>

              {/* INDUSTRY */}
              <div>

                <label className="text-[#07111F] text-[12px] sm:text-[13px] font-semibold mb-2 block">

                  Industry

                </label>

                <select
                  value={selectedIndustry}
                  onChange={(e) =>
                    setSelectedIndustry(
                      e.target.value
                    )
                  }
                  className="w-full h-[48px] sm:h-[52px] rounded-[14px] border border-gray-200 px-4 text-[#07111F] text-[14px] sm:text-[15px] outline-none focus:border-[#C89B3C]"
                >

                  <option value="">
                    All Industries
                  </option>

                  <option value="Construction">
                    Construction
                  </option>

                  <option value="MEP">
                    MEP
                  </option>

                  <option value="Engineering">
                    Engineering
                  </option>

                </select>

              </div>

              {/* LOCATION */}
              <div>

                <label className="text-[#07111F] text-[12px] sm:text-[13px] font-semibold mb-2 block">

                  Location

                </label>

                <select
                  value={selectedCountry}
                  onChange={(e) =>
                    setSelectedCountry(
                      e.target.value
                    )
                  }
                  className="w-full h-[48px] sm:h-[52px] rounded-[14px] border border-gray-200 px-4 text-[#07111F] text-[14px] sm:text-[15px] outline-none focus:border-[#C89B3C]"
                >

                  <option value="">
                    All Countries
                  </option>

                  <option value="United States">
                    United States
                  </option>

                  <option value="Canada">
                    Canada
                  </option>

                  <option value="UAE">
                    UAE
                  </option>

                  <option value="India">
                    India
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED */}
     <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[10px] sm:text-sm mb-4">

              Featured Opportunities

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.05] max-w-[980px] mx-auto">

              Executive &
              Construction Careers
              Across Leading Markets

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {featuredJobs.slice(0, 3).map(
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
            )}

          </div>

        </div>

      </section>

      {/* ALL JOBS */}
      <section className="bg-[#07111F] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 sm:gap-6">

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

          <div>

            {/* TOP */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-7">

              <div>

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[10px] sm:text-sm mb-3">

                  Current Openings

                </p>

                <h2 className="text-white text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.06]">

                  Explore Open Positions

                </h2>

              </div>

              <div className="bg-[#0D1726] border border-white/10 rounded-[18px] px-5 py-4 min-w-[160px]">

                <p className="text-gray-400 text-[10px] sm:text-[11px] uppercase tracking-[2px] mb-1">

                  Available Roles

                </p>

                <p className="text-white text-[22px] sm:text-[24px] font-bold">

                  {filteredJobs.length}

                </p>

              </div>

            </div>

            {/* JOBS */}
            <div className="space-y-4">

              {filteredJobs.length > 0 ? (

                filteredJobs.map(
                  (
                    job: any,
                    index: number
                  ) => (

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

                <div className="bg-[#0D1726] border border-white/10 rounded-[24px] p-8 sm:p-10 text-center">

                  <h3 className="text-white text-[24px] sm:text-[28px] font-bold mb-4">

                    No Matching Positions Found

                  </h3>

                  <p className="text-gray-400 text-[14px] sm:text-[15px] leading-7 sm:leading-8 max-w-[520px] mx-auto">

                    Try adjusting your filters or search
                    keywords to discover additional opportunities.

                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      <HomeCTA />

      <Footer />

    </main>

  );
}