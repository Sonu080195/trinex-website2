"use client";

import { useEffect, useState } from "react";

import EmployerModal from "@/components/EmployerModal";
import CandidateModal from "@/components/CandidateModal";

const features = [
  { title: "Executive Search",     subtitle: "Leadership & Strategic Hiring" },
  { title: "Project Staffing",     subtitle: "Project-Ready Professionals" },
  { title: "Global Talent Network", subtitle: "USA • Canada • UAE • India" },
  { title: "5000+ Professionals",  subtitle: "Construction Talent Network" },
];

const stats = [
  ["100+", "Placements Supported"],
  ["4", "Global Markets"],
  ["20+", "Industry Specialisations"],
];

export default function Hero() {
  const [employerOpen, setEmployerOpen] = useState(false);
  const [candidateOpen, setCandidateOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* EMPLOYER MODAL */}
      <EmployerModal
        isOpen={employerOpen}
        onClose={() => setEmployerOpen(false)}
      />

      {/* CANDIDATE MODAL */}
      <CandidateModal
        isOpen={candidateOpen}
        onClose={() => setCandidateOpen(false)}
      />

      <section className="relative min-h-[85vh] overflow-hidden">

        {/* GRID PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none transition-opacity duration-[1500ms]"
          style={{
            background: "radial-gradient(circle, rgba(200,155,60,0.12) 0%, transparent 70%)",
            opacity: heroVisible ? 1 : 0,
          }}
        />

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-[76%] sm:bg-center transition-transform duration-[9000ms] ease-out pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 10%, rgba(7,17,31,0.88) 42%, rgba(7,17,31,0.30) 100%), url('/hero-bg.webp')",
            transform: heroVisible ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Left gold accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
            opacity: heroVisible ? 0.6 : 0,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-32 sm:pt-36 lg:pt-40 pb-16">
            <div className="max-w-[760px]">

              {/* LABEL */}
              <div
                className="flex items-center gap-3 mb-6 transition-all duration-700"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(18px)",
                }}
              >
                <span className="h-px w-10 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">
                  AEC • MEP • Construction Recruitment
                </p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>

              {/* HEADING */}
              <h1
                className="text-white font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-4 transition-all duration-700 delay-150"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                }}
              >
                Connecting Exceptional
                <br />
                <span className="relative inline-block text-[#C89B3C]">
                  {" "}AEC &amp; MEP
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />
                </span>
                {" "}Talent
                <br />
                With Industry Leaders
              </h1>

              {/* DESCRIPTION */}
              <p
                className="text-gray-300 text-[13px] lg:text-[15px] sm:text-[17px] leading-6 sm:leading-7 mb-6 lg:mb-10 max-w-[860px] transition-all duration-700 delay-300"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                RUDRON is a specialist executive search and recruitment partner serving the AEC &amp; MEP industries.
                We help employers secure project-ready professionals, leadership talent and hard-to-find
                technical specialists across commercial, industrial, infrastructure and mission-critical markets.
              </p>

              {/* BUTTONS */}
              <div
                className="flex flex-col sm:flex-row gap-3 mb-6 transition-all duration-700 delay-[450ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(18px)",
                }}
              >
                <button
                  onClick={() => setEmployerOpen(true)}
                  className="group bg-[#C89B3C] text-black px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[13px] lg:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,155,60,0.35)]"
                >
                  Hire Talent
                </button>

                <button
                  onClick={() => setCandidateOpen(true)}
                  className="border border-white/20 text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[13px] lg:text-[15px] font-medium hover:border-[#C89B3C] hover:bg-white/5 transition-all duration-300"
                >
                  Find Opportunity
                </button>
              </div>

              {/* STATS */}
              <div
                className="grid grid-cols-3 gap-3 mb-8 transition-all duration-700 delay-[600ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {stats.map(([value, label]) => (
                  <div
                    key={label}
                    className="bg-white/[0.04] border border-white/10 rounded-[18px] p-2 backdrop-blur-md hover:border-[#C89B3C]/30 transition-colors duration-300"
                  >
                    <h3 className="text-[#C89B3C] text-xl lg:text-2xl font-bold">{value}</h3>
                    <p className="text-gray-400 text-[11px] lg:text-sm">{label}</p>
                  </div>
                ))}
              </div>

              {/* FEATURE CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {features.map((item, index) => (
                  <FeatureCard key={item.title} item={item} index={index} inView={heroVisible} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Feature card ── */
function FeatureCard({ item, index, inView }: {
  item: typeof features[0]; index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white/5 backdrop-blur-md border rounded-[16px] p-2.5 lg:p-3 overflow-hidden cursor-default"
      style={{
        borderColor: hovered ? "rgba(200,155,60,0.3)" : "rgba(255,255,255,0.1)",
        boxShadow: hovered ? "0 16px 40px rgba(200,155,60,0.12)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(24px)",
        transition: `opacity 0.6s ease ${750 + index * 100}ms, transform 0.5s ease ${750 + index * 100}ms, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      <div
        className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />

      <div
        className="text-[22px] lg:text-[32px] font-bold mb-3 transition-opacity duration-300"
        style={{ color: "#C89B3C", opacity: hovered ? 0.6 : 0.3 }}
      >
        0{index + 1}
      </div>

      <h4
        className="font-semibold text-[13px] lg:text-[15px] mb-2 transition-colors duration-300"
        style={{ color: hovered ? "#C89B3C" : "#fff" }}
      >
        {item.title}
      </h4>

      <p className="text-gray-400 text-[11px] lg:text-sm leading-6">
        {item.subtitle}
      </p>
    </div>
  );
}