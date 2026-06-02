"use client";

import { useState } from "react";

import {
  Users,
  Target,
  Globe,
  BriefcaseBusiness,
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
      icon: BriefcaseBusiness,
      title: "Executive Search",
      subtitle:
        "Leadership & Strategic Hiring",
    },
    {
      icon: Target,
      title: "Project Staffing",
      subtitle:
        "Project-Ready Professionals",
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      subtitle:
        "USA • Canada • UAE • India",
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
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-6">

            <div className="max-w-[820px] pt-28 sm:pt-36 lg:pt-44 pb-12">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-5">

                AEC • MEP • Construction Recruitment

              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.08] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

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
              <div className="flex flex-col sm:flex-row gap-4 mb-12">

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

                  Explore Opportunities

                </button>

              </div>

              

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

                {features.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <div className="mt-1 shrink-0">

                        <Icon
                          className="text-[#C89B3C]"
                          size={22}
                          strokeWidth={1.8}
                        />

                      </div>

                      <div>

                        <h4 className="text-white font-semibold text-[15px] sm:text-base mb-1">

                          {item.title}

                        </h4>

                        <p className="text-gray-400 text-[13px] sm:text-sm leading-6">

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