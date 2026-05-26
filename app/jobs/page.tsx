"use client";

import { jobs } from "@/data/jobs";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import JobsSidebar from "@/components/JobsSidebar";
import JobCard from "@/components/JobCard";

export default function JobsPage() {

  const jobs = [

    {
      title: "Senior Project Manager",
      company: "Confidential ENR Contractor",
      location: "Dallas, TX",
      state: "Texas",
      country: "United States",
      salary: "$160K - $190K",
      type: "Full Time",
      industry: "Construction",
      specialisation: "Commercial",
      slug: "senior-project-manager-dallas",
    },

    {
      title: "MEP Superintendent",
      company: "Mission Critical GC",
      location: "Phoenix, AZ",
      state: "Arizona",
      country: "United States",
      salary: "$145K - $175K",
      type: "Full Time",
      industry: "MEP",
      specialisation: "Data Centers",
      slug: "mep-superintendent-phoenix",
    },

    {
      title: "Project Executive",
      company: "National Builder",
      location: "Toronto, ON",
      state: "Ontario",
      country: "Canada",
      salary: "$220K - $260K",
      type: "Executive",
      industry: "Construction",
      specialisation: "Infrastructure",
      slug: "project-executive-toronto",
    },

    {
      title: "Construction Estimator",
      company: "Commercial Contractor",
      location: "Dubai, UAE",
      state: "Dubai",
      country: "UAE",
      salary: "$110K - $140K",
      type: "Full Time",
      industry: "Construction",
      specialisation: "Commercial",
      slug: "construction-estimator-dubai",
    },

    {
      title: "Senior Architect",
      company: "Design Studio",
      location: "Mumbai, India",
      state: "Maharashtra",
      country: "India",
      salary: "$90K - $120K",
      type: "Hybrid",
      industry: "Architecture",
      specialisation: "Residential",
      slug: "senior-architect-mumbai",
    },
  ];

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

  const filteredJobs = jobs.filter((job) => {

    const industryMatch =
      !selectedIndustry ||
      job.industry === selectedIndustry;

    const specialisationMatch =
      !selectedSpecialisation ||
      job.specialisation === selectedSpecialisation;

    const countryMatch =
      !selectedCountry ||
      job.country === selectedCountry;

    const stateMatch =
      !selectedState ||
      job.state === selectedState;

    const employmentMatch =
      !selectedEmployment ||
      job.type === selectedEmployment;

    return (
      industryMatch &&
      specialisationMatch &&
      countryMatch &&
      stateMatch &&
      employmentMatch
    );
  });

  return (

    <main className="bg-[#07111F] text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[58vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.25) 80%), url('/jobs/jobs-hero.png')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

                Career Opportunities

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[42px] md:text-[52px] lg:text-[64px] mb-5">

                Explore Construction
                Career Opportunities

              </h1>

              <p className="text-gray-300 text-[16px] leading-8 max-w-[680px]">

                Discover opportunities across commercial,
                industrial, infrastructure, mission critical,
                and executive construction sectors.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* JOBS */}
      <section className="py-12 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-6">

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
          <div className="space-y-5">

            {filteredJobs.length > 0 ? (

              filteredJobs.map((job, index) => (

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

              ))

            ) : (

              <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-10 text-center">

                <h3 className="text-white text-2xl font-bold mb-3">

                  No Jobs Found

                </h3>

                <p className="text-gray-400">

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