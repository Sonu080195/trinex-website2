"use client";

import { useState } from "react";

import EmployerModal from "@/components/EmployerModal";
import CandidateModal from "@/components/CandidateModal";

export default function Hero() {

  const [employerOpen, setEmployerOpen] =
    useState(false);

  const [candidateOpen, setCandidateOpen] =
    useState(false);

  const features = [
  {
    title: "Executive Search",
    subtitle: "Leadership & Strategic Hiring",
  },
  {
    title: "Project Staffing",
    subtitle: "Project-Ready Professionals",
  },
  {
    title: "Global Talent Network",
    subtitle: "USA • Canada • UAE • India",
  },
  {
    title: "5000+ Professionals",
    subtitle: "Construction Talent Network",
  },
];

  return (
    <>

      {/* EMPLOYER MODAL */}
      <EmployerModal
        isOpen={employerOpen}
        onClose={() =>
          setEmployerOpen(false)
        }
      />

      {/* CANDIDATE MODAL */}
      <CandidateModal
        isOpen={candidateOpen}
        onClose={() =>
          setCandidateOpen(false)
        }
      />

      <section className="relative min-h-[85vh] overflow-hidden pointer-events-none">

        {/* GRID PATTERN */}
<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
    `,
    backgroundSize: "70px 70px",
  }}
/>

{/* GOLD GLOW */}
<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
  style={{
    background:
      "radial-gradient(circle, rgba(200,155,60,0.12) 0%, transparent 70%)",
  }}
/>

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-[76%] sm:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 10%, rgba(7,17,31,0.88) 42%, rgba(7,17,31,0.30) 100%), url('/hero-bg.webp')",
          }}
        />

        {/* GOLD GLOW */}

<div
  className="
  absolute
  top-0
  left-1/2
  -translate-x-1/2
  w-[700px]
  h-[350px]
  pointer-events-none
  "
  style={{
    background:
      "radial-gradient(circle, rgba(200,155,60,0.12) 0%, transparent 70%)",
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10 w-full pointer-events-auto">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-28">
            <div className="max-w-[760px] pb-8">

              </div>

              {/* LABEL */}

<div className="mb-6">

  <div className="inline-flex items-center gap-3">

    <span className="h-px w-8 bg-[#C89B3C]" />

    <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">

      AEC • MEP • Construction Recruitment

    </p>

    <span className="h-px w-8 bg-[#C89B3C]" />

  </div>

</div>


              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-4">

                Connecting Exceptional
                
<br/>
<span className="relative inline-block text-[#C89B3C]">

  {" "}AEC & MEP

  <span
    className="
    absolute
    left-0
    bottom-0
    w-full
    h-[3px]
    bg-[#C89B3C]
    rounded-full
    opacity-20
    "
  />

</span>

{" "} Talent

<br />

With Industry Leaders

</h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[13px] lg:text-[15px] sm:text-[17px] leading-8 sm:leading-9 mb-6 lg:mb-10 max-w-[860px]">

                RUDRON is a specialist executive search and
                recruitment partner serving the AEC & MEP industries.

                We help employers secure project-ready
                professionals, leadership talent and
                hard-to-find technical specialists across
                commercial, industrial, infrastructure and
                mission-critical markets.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">

                <button
                  onClick={() =>
                    setEmployerOpen(true)
                  }
                  className="bg-[#C89B3C] text-black px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[13px] lg:text-[15px] font-semibold hover:opacity-90 transition"
                >

                  Hire Talent

                </button>

                <button
                  onClick={() =>
                    setCandidateOpen(true)
                  }
                  className="border border-white/20 text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[13px] lg:text-[15px] font-medium hover:border-[#C89B3C] transition"
                >

                  Find Opportunity

                </button>

              </div>

<div className="grid grid-cols-3 gap-3 mb-8">

  {[
    ["100+", "Placements Supported"],
    ["4", "Global Markets"],
    ["20+", "Industry Specialisations"],
  ].map((item) => (

    <div
      key={item[1]}
      className="
      bg-white/[0.04]
      border
      border-white/10
      rounded-[18px]
      p-2
      backdrop-blur-md
      "
    >

      <h3 className="text-[#C89B3C] text-xl lg:text-2xl font-bold">

        {item[0]}

      </h3>

      <p className="text-gray-400 text-[11px] lg:text-sm">

        {item[1]}

      </p>

    </div>

  ))}

</div>

{/* FEATURE CARDS */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

  {features.map((item, index) => (

    <div
      key={index}
      className="
      floating-card
      bg-white/5
      backdrop-blur-md
      border
      border-white/10
      rounded-[16px]
      p-2.5 lg:p-3
      hover:-translate-y-2
      hover:border-[#C89B3C]/30
      transition-all
      duration-500"
    >

      <div className="text-[#C89B3C] text-[22px] lg:text-[32px] font-bold opacity-30 mb-3">

        0{index + 1}

      </div>

      <h4 className="text-white font-semibold text-[13px] lg:text-[15px] mb-2">

        {item.title}

      </h4>

      <p className="text-gray-400 text-[11px] lg:text-sm leading-6">

        {item.subtitle}

      </p>

    </div>

  ))}

</div>

</div>

</div>

      </section>

    </>
  );
}