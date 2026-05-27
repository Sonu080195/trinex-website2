"use client";

import { useState } from "react";

import {
  Users,
  Target,
  Globe,
} from "lucide-react";

import EmployerModal from "@/components/EmployerModal";
import CandidateModal from "@/components/CandidateModal";

export default function Hero() {

  const [employerOpen, setEmployerOpen] =
    useState(false);

  const [candidateOpen, setCandidateOpen] =
    useState(false);

  const features = [
    {
      icon: Users,
      title: "AEC & MEP",
      subtitle: "Recruitment Experts",
    },
    {
      icon: Target,
      title: "Industry Focused",
      subtitle: "Technical. Skilled. Professional.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      subtitle: "USA | Canada | UAE | India",
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

      <section className="relative min-h-screen w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-cover
            bg-[76%]
            sm:bg-center
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,10,10,0.92) 12%, rgba(7,17,31,0.78) 40%, rgba(7,17,31,0.22) 100%), url('/hero-bg.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="max-w-7xl mx-auto w-full px-5 lg:px-18">

            {/* CONTENT WRAPPER */}
            <div className="max-w-[760px] pt-28 sm:pt-36 lg:pt-48 pb-12 sm:pb-16">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-sm mb-4 sm:mb-5 leading-6">

                AEC & MEP Recruitment Specialists

              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.04] text-[34px] sm:text-[48px] lg:text-[64px] mb-5 sm:mb-7">

                Enabling
                <span className="text-[#C89B3C]">
                  {" "}AEC & MEP
                </span>

                <br />

                Leaders To Hire

                <br />

                The Right Talent.

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] sm:text-[18px] leading-7 sm:leading-9 mb-8 sm:mb-10 max-w-[680px]">

                RUDRON helps in precision hiring for AEC & MEP leaders—delivering project-ready talent from engineers to directors, across the country.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">

                <button
                  onClick={() =>
                    setEmployerOpen(true)
                  }
                  className="bg-[#C89B3C] text-black px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-[14px] sm:text-base font-semibold hover:opacity-90 transition w-full sm:w-auto"
                >

                  For Employers

                </button>

                <button
                  onClick={() =>
                    setCandidateOpen(true)
                  }
                  className="border border-white/20 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-[14px] sm:text-base hover:border-[#C89B3C] transition w-full sm:w-auto"
                >

                  For Candidates

                </button>

              </div>

              {/* FEATURE POINTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-5 sm:gap-7 lg:gap-12">

                {features.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >

                      {/* ICON */}
                      <div className="mt-1 shrink-0">

                        <Icon
                          className="text-[#C89B3C]"
                          size={22}
                          strokeWidth={1.8}
                        />

                      </div>

                      {/* TEXT */}
                      <div>

                        <h4 className="text-white font-semibold text-[14px] sm:text-base mb-1">

                          {item.title}

                        </h4>

                        <p className="text-gray-300 text-[12px] sm:text-sm leading-6">

                          {item.subtitle}

                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );
}