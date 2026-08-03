"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Sparkles,
  Users,
} from "lucide-react";

import CandidateModal from "@/components/CandidateModal";
import HireTalentButton from "@/components/HireTalentButton";

const features = [
  {
    title: "Executive Search",
    subtitle: "Leadership & Strategic Hiring",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project Staffing",
    subtitle: "Project-Ready Professionals",
    icon: Building2,
  },
  {
    title: "Global Talent Network",
    subtitle: "USA • Canada • UAE • India",
    icon: Globe2,
  },
  {
    title: "5000+ Professionals",
    subtitle: "Construction Talent Network",
    icon: Users,
  },
];

const stats = [
  ["100+", "Successful Placements"],
  ["20+", "Industry Specializations"],
  ["USA, Canada, UAE & India", "Talent Coverage"],
];

export default function Hero() {
  const [candidateOpen, setCandidateOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <CandidateModal
        isOpen={candidateOpen}
        onClose={() => setCandidateOpen(false)}
      />

      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#07111F]">
        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[76%] transition-transform duration-[9000ms] ease-out sm:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.99) 8%, rgba(7,17,31,0.93) 42%, rgba(7,17,31,0.45) 72%, rgba(7,17,31,0.18) 100%), url('/hero-bg.webp')",
            transform: heroVisible ? "scale(1.055)" : "scale(1)",
          }}
        />

        {/* Layered visual effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/35" />

        <div
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[145px] transition-opacity duration-[1600ms]"
          style={{ opacity: heroVisible ? 1 : 0 }}
        />

        <div className="pointer-events-none absolute -left-52 bottom-[-240px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
            `,
            backgroundSize: "68px 68px",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] transition-opacity duration-1000 delay-500"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
            opacity: heroVisible ? 0.6 : 0,
          }}
        />

        <div className="pointer-events-none absolute left-[9%] top-32 h-px w-44 rotate-[-16deg] bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />
        <div className="pointer-events-none absolute right-[8%] top-40 hidden h-px w-56 rotate-[15deg] bg-gradient-to-r from-transparent via-[#C89B3C]/35 to-transparent lg:block" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <div className="w-full max-w-[820px]">
            {/* Eyebrow */}
            <div
              className="mb-6 flex items-center gap-3 transition-all duration-700"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0)"
                  : "translateY(18px)",
              }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C89B3C]" />

              <div className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/20 bg-[#C89B3C]/10 px-3 py-2 backdrop-blur-md">
                <Sparkles size={13} className="text-[#C89B3C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-[11px]">
                  AEC • MEP • Construction Recruitment
                </p>
              </div>

              <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-[#C89B3C] sm:block" />
            </div>

            {/* Heading */}
            <h1
              className="mb-5 text-[34px] font-bold leading-[1.05] text-white transition-all duration-700 delay-150 sm:text-[50px] lg:text-[68px]"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0)"
                  : "translateY(28px)",
              }}
            >
              Connecting Exceptional
              <br />

              <span className="relative inline-block bg-gradient-to-r from-[#C89B3C] via-[#E0B55D] to-[#C89B3C] bg-clip-text text-transparent">
                AEC &amp; MEP Talent
                <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-100 rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent opacity-35" />
              </span>

              <br />
              With Industry Leaders
            </h1>

            {/* Description */}
            <p
              className="mb-8 max-w-[760px] text-[14px] leading-7 text-gray-300 transition-all duration-700 delay-300 sm:text-[14px] lg:text-[16px] lg:leading-8"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              <p className="text-[20px] font-semibold text-[#C89B3C]">
                Hire exceptional AEC and MEP professionals with confidence.
              </p>
              RUDRON is a specialist executive search and recruitment partner
              serving the Architecture, Engineering, Construction, Mechanical, Electrical and Plumbing industries. We help employers secure
              project-ready professionals, leadership talent and hard-to-find
              technical specialists across commercial, industrial,
              infrastructure and mission-critical markets.

            </p>

            {/* Buttons */}
            <div
              className="mb-8 flex flex-col gap-3 transition-all duration-700 delay-[450ms] sm:flex-row"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0)"
                  : "translateY(18px)",
              }}
            >
              <HireTalentButton
                ariaLabel="Hire construction and MEP talent"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-7 py-4 text-[14px] font-semibold text-[#07111F] shadow-[0_12px_35px_rgba(200,155,60,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7AA4E] hover:shadow-[0_16px_45px_rgba(200,155,60,0.34)]"
              >
                Hire Talent
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </HireTalentButton>

              <button
                type="button"
                onClick={() => setCandidateOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/60 hover:bg-white/[0.08]"
              >
                Find Opportunity
                <ArrowRight
                  size={17}
                  className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Stats */}
            <div
              className="mb-8 grid grid-cols-3 gap-3 lg:grid-cols-3 transition-all duration-700 delay-[600ms]"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35 hover:bg-white/[0.065]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <h3 className="text-md font-bold text-[#C89B3C] lg:text-md">
                      {value}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-400 sm:text-[11px] lg:text-[13px]">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {features.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  item={item}
                  index={index}
                  inView={heroVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  item,
  index,
  inView,
}: {
  item: (typeof features)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className="group relative cursor-default overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:bg-white/[0.065] hover:shadow-[0_18px_50px_rgba(200,155,60,0.13)] lg:p-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${750 + index * 110}ms`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.15),transparent_44%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-4 right-4 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C89B3C]/20 bg-[#C89B3C]/10 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
            <Icon
              size={19}
              className="text-[#C89B3C]"
              strokeWidth={1.8}
            />
          </div>

          <span className="text-[11px] font-semibold tracking-[2px] text-white/20">
            0{index + 1}
          </span>
        </div>

        <h4 className="mt-4 text-[13px] font-semibold text-white transition-colors duration-300 group-hover:text-[#C89B3C] lg:text-[15px]">
          {item.title}
        </h4>

        <p className="mt-2 text-[11px] leading-5 text-gray-400 lg:text-[13px] lg:leading-6">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}