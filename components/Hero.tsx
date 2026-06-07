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

      <section className="relative min-h-[85vh] overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-[76%] sm:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 10%, rgba(7,17,31,0.88) 42%, rgba(7,17,31,0.30) 100%), url('/hero-bg.webp')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 pt-28">
            <div className="max-w-[760px] pb-8">

              </div>

              {/* LABEL */}
              <div className="mb-4">

  <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm mb-5">

    AEC • MEP • Construction Recruitment

  </p>

</div>

<div className="flex flex-wrap gap-3 mb-6">

  {[
    "Data Centers",
    "Mission Critical",
    "Healthcare",
    "Commercial",
    "Infrastructure",
  ].map((item) => (

    <span
      key={item}
      className="
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-sm
      text-white
      text-sm
      "
    >

      {item}

    </span>

  ))}

</div>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.08] text-[34px] sm:text-[48px] lg:text-[64px] mb-4">

                Connecting Exceptional
                
                <br/>
                <span className="text-[#C89B3C]">
                  {" "} AEC & MEP
                </span>

                {" "} Talent

                <br />

                With Industry Leaders

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-8 sm:leading-9 mb-10 max-w-[860px]">

                RUDRON is a specialist executive search and
                recruitment partner serving the AEC & MEP industries.

                We help employers secure project-ready
                professionals, leadership talent and
                hard-to-find technical specialists across
                commercial, industrial, infrastructure and
                mission-critical markets.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">

                <button
                  onClick={() =>
                    setEmployerOpen(true)
                  }
                  className="bg-[#C89B3C] text-black px-8 py-4 rounded-xl text-[15px] font-semibold hover:opacity-90 transition"
                >

                  Hire Talent

                </button>

                <button
                  onClick={() =>
                    setCandidateOpen(true)
                  }
                  className="border border-white/20 text-white px-8 py-4 rounded-xl text-[15px] font-medium hover:border-[#C89B3C] transition"
                >

                  Find Opportunity

                </button>

              </div>

              <div className="flex flex-wrap gap-8 mb-8">

  <div>
    <p className="text-[#C89B3C] text-2xl font-bold">

      100+

    </p>

    <p className="text-gray-400 text-sm">

      Placements Supported

    </p>
  </div>

  <div>
    <p className="text-[#C89B3C] text-2xl font-bold">

      4

    </p>

    <p className="text-gray-400 text-sm">

      Global Markets

    </p>
  </div>

  <div>
    <p className="text-[#C89B3C] text-2xl font-bold">

      20+

    </p>

    <p className="text-gray-400 text-sm">

      Industry Specialisations

    </p>
  </div>

</div>

{/* FEATURE CARDS */}

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

  {features.map((item, index) => (

    <div
      key={index}
      className="
      floating-card
      bg-white/5
      backdrop-blur-md
      border
      border-white/10
      rounded-[18px]
      p-3
      hover:-translate-y-2
      hover:border-[#C89B3C]/30
      transition-all
      duration-500"
    >

      <div className="text-[#C89B3C] text-[32px] font-bold opacity-30 mb-3">

        0{index + 1}

      </div>

      <h4 className="text-white font-semibold text-[15px] mb-2">

        {item.title}

      </h4>

      <p className="text-gray-400 text-sm leading-6">

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