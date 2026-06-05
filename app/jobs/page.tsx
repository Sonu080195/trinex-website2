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

    const opportunityCards = [
  {
    sector: "Healthcare Construction",
    role: "Senior Project Manager",
    salary: "$185K+",
  },
  {
    sector: "Mission Critical",
    role: "MEP Superintendent",
    salary: "$175K+",
  },
  {
    sector: "Electrical Construction",
    role: "Field Operations Manager",
    salary: "$250K+",
  },
  {
    sector: "Process Piping",
    role: "Project Manager",
    salary: "$180K+",
  },
];

const marqueeRoles = [
  "PROJECT EXECUTIVE",
  "PROJECT MANAGER",
  "SUPERINTENDENT",
  "ESTIMATOR",
  "PRECONSTRUCTION",
  "MEP LEADERSHIP",
  "DATA CENTERS",
  "HEALTHCARE",
  "MISSION CRITICAL",
  "FIELD OPERATIONS",
];

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
              "linear-gradient(to right, rgba(7,17,31,0.96) 12%, rgba(7,17,31,0.76) 42%, rgba(7,17,31,0.25) 85%), url('/jobs/jobs-hero.webp')",
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

      {/* CAREER INTELLIGENCE SHOWCASE */}

<section className="py-12 lg:py-16 px-4 sm:px-6 bg-[#F7F7F7] overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14">

    {/* LEFT */}

    <div className="lg:sticky lg:top-32 self-start">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Career Intelligence

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.08] mb-6">

        The Best
        Opportunities
        Aren't Always
        Advertised

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        RUDRON partners with leading contractors,
        developers, mission critical operators,
        engineering consultancies and owners
        across North America.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        From project management and estimating
        to executive leadership and mission-critical
        construction, we connect professionals with
        career-defining opportunities.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

        Explore opportunities aligned with your
        technical expertise, leadership experience,
        and long-term career goals.

      </p>

    </div>

    {/* RIGHT */}

    <div className="relative min-h-[520px] lg:min-h-[620px]">

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">

          Healthcare Construction

        </p>

        <h3 className="text-lg lg:text-xl font-bold mb-3">

          Senior Project Manager

        </h3>

        <p className="text-3xl font-bold">

          $185K+

        </p>

      </div>

      <div className="floating-card-2 absolute top-24 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">

          Mission Critical

        </p>

        <h3 className="text-lg lg:text-xl font-bold mb-3">

          MEP Superintendent

        </h3>

        <p className="text-3xl font-bold">

          $175K+

        </p>

      </div>

      <div className="floating-card absolute bottom-20 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">

          Electrical Construction

        </p>

        <h3 className="text-lg lg:text-xl font-bold mb-3">

          Field Operations Manager

        </h3>

        <p className="text-3xl font-bold">

          $250K+

        </p>

      </div>

      <div className="floating-card-2 absolute bottom-0 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">

          Process Piping

        </p>

        <h3 className="text-lg lg:text-xl font-bold mb-3">

          Project Manager

        </h3>

        <p className="text-3xl font-bold">

          $180K+

        </p>

      </div>

    </div>

  </div>

</section>

{/* JOBS MARQUEE */}

<section className="bg-[#07111F] py-4 lg:py-6 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...marqueeRoles, ...marqueeRoles].map((role, index) => (

      <div
        key={index}
        className="flex items-center"
      >

        <span className="text-white text-[18px] sm:text-[26px] lg:text-[38px] font-bold mx-6">

          {role}

        </span>

        <span className="text-[#C89B3C] text-[30px]">

          •

        </span>

      </div>

    ))}

  </div>

</section>

      {/* SEARCH FLOATING PANEL */}
      <section className="relative z-30 px-4 sm:px-6 lg:px-6 py-6 sm:py-8 lg:py-6 bg-[#F7F7F7]">

        <div className="max-w-9xl mx-auto">

          <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-4 sm:p-6 lg:p-7 max-w-7xl mx-auto">

          <div className="flex flex-wrap gap-3 mb-6">

  {[
    "Featured Roles",
    "Urgent Openings",
    "Executive Search",
    "Confidential Searches",
  ].map((item) => (

    <div
      key={item}
      className="
      px-4
      py-2
      rounded-full
      bg-[#07111F]
      text-white
      text-sm
      "
    >
      {item}
    </div>

  ))}

</div>

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
                    Mechanical
                  </option>

                  <option value="Engineering">
                    Electrical
                  </option>

                  <option value="Engineering">
                    Plumbing
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
     <section className="bg-[#F7F7F7] py-6 sm:py-8 lg:py-9 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[10px] sm:text-sm mb-4">

              Featured Opportunities

            </p>

            <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] max-w-[980px] mx-auto">

              Executive &
              Construction Careers
              Across Leading Markets

            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 max-w-3xl mx-auto mt-6">
              Explore high-impact opportunities across
              commercial construction, mission critical,
              healthcare, infrastructure, and executive
              leadership markets.
          
          </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

  {featuredJobs.slice(0, 3).map(
    (job: any, index: number) => (

      <a
        key={job.slug}
        href={`/jobs/${job.slug}`}
        className="
        group
        relative
        bg-white
        rounded-[30px]
        border
        border-black/5
        overflow-hidden
        hover:-translate-y-2
        hover:border-[#C89B3C]/30
        transition-all
        duration-500
        "
      >

        {/* NUMBER */}

        <div className="absolute right-4 top-0 text-[90px] font-bold text-black/[0.04]">

          0{index + 1}

        </div>

        {/* TOP */}

        <div className="p-6 pb-4">

          <div className="flex items-center justify-between mb-5">

            <span className="text-[#C89B3C] text-sm font-semibold">

              Featured Opportunity

            </span>

            {job.urgent && (

              <span className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full">

                Urgent

              </span>

            )}

          </div>

          <h3 className="text-[#07111F] text-[22px] lg:text-[26px] font-bold leading-[1.15] mb-4">

            {job.title}

          </h3>

          <p className="text-gray-600 mb-6">

            {job.company}

          </p>

        </div>

        {/* DETAILS */}

        <div className="px-6 pb-6">

          <div className="grid grid-cols-2 gap-3 mb-6">

            <div className="bg-[#F7F7F7] rounded-[16px] p-3">

              <p className="text-xs text-gray-500 mb-1">

                Location

              </p>

              <p className="text-[#07111F] font-semibold">

                {job.location}
              </p>

            </div>

            <div className="bg-[#F7F7F7] rounded-[16px] p-3">

              <p className="text-xs text-gray-500 mb-1">

                Salary

              </p>

              <p className="text-[#07111F] font-semibold">

                {job.salary}
              </p>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-[#07111F] font-semibold">

              View Opportunity

            </span>

            <span className="text-[#C89B3C] text-xl group-hover:translate-x-2 transition-transform">

              →
            </span>

          </div>

        </div>

      </a>

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

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-3">
                  
                  Career Marketplace
                  
                  </p>
                  
              <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.05]">
                
                Discover Opportunities
                Aligned With
                Your Expertise
                
                </h2>
                
          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-2xl mt-5">
              
              Browse opportunities across construction,
              engineering, mission critical, healthcare,
              infrastructure and executive leadership sectors.
              
              </p>

              </div>

              <div className="flex flex-wrap gap-3 mt-6">

  {[
    "Featured",
    "Urgent",
    "Full Time",
    "Executive",
    "Mission Critical",
  ].map((item) => (

    <div
      key={item}
      className="
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-[#0D1726]
      text-white
      text-sm
      "
    >

      {item}

    </div>

  ))}

</div>

              <div className="bg-[#0D1726] border border-white/10 rounded-[18px] px-5 py-4 min-w-[160px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">

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

      {/* WHY TALENT WORKS WITH RUDRON */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Why Candidates Choose RUDRON

      </p>

      <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        More Than Job Listings.
        A Career Partner.

      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        {
          title: "Industry Specialists",
          desc: "Dedicated recruiters focused exclusively on construction and engineering markets.",
        },
        {
          title: "Executive Opportunities",
          desc: "Access confidential leadership and executive search assignments.",
        },
        {
          title: "Career Guidance",
          desc: "Strategic support throughout interviews, offers, and career transitions.",
        },
        {
          title: "National Network",
          desc: "Opportunities across major North American construction markets.",
        },
        {
          title: "Long-Term Relationships",
          desc: "We support careers, not just individual placements.",
        },
        {
          title: "Market Intelligence",
          desc: "Gain insights into salaries, hiring trends and workforce demand.",
        },
      ].map((item, index) => (

        <div
          key={item.title}
          className="
          group
          bg-white
          rounded-[28px]
          border
          border-black/5
          p-6
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          relative
          overflow-hidden
          "
        >

          <div className="absolute right-4 top-0 text-[70px] font-bold text-black/[0.04]">

            0{index + 1}

          </div>

          <h3 className="text-[#07111F] text-xl font-bold mb-4">

            {item.title}

          </h3>

          <p className="text-gray-600 leading-7">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      <HomeCTA />

      <Footer />

    </main>

  );
}