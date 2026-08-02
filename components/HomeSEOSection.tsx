"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Cable,
  Check,
  Droplets,
  Factory,
  HardHat,
  HeartPulse,
  Home,
  Server,
  Sparkles,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const industries = [
  {
    name: "Commercial Construction",
    description:
      "Healthcare, education, offices, retail and complex commercial developments.",
    href: "/commercial",
    icon: Building2,
  },
  {
    name: "Industrial Construction",
    description:
      "Manufacturing, logistics, power, process and industrial facility projects.",
    href: "/industrial",
    icon: Factory,
  },
  {
    name: "Residential Construction",
    description:
      "Multifamily, single-family, high-rise, student and senior housing.",
    href: "/residential",
    icon: Home,
  },
  {
    name: "Civil Infrastructure",
    description:
      "Roadways, bridges, rail, tunnels, airports and public infrastructure.",
    href: "/civil",
    icon: HardHat,
  },
  {
    name: "Healthcare",
    description:
      "Specialist talent for hospitals, medical facilities and occupied projects.",
    href: "/commercial/healthcare",
    icon: HeartPulse,
  },
  {
    name: "Data Centers",
    description:
      "Project, MEP and field leadership for mission-critical construction.",
    href: "/commercial/data-centers",
    icon: Server,
  },
  {
    name: "Mission Critical",
    description:
      "Experienced professionals for fast-track, technically complex facilities.",
    href: "/commercial/data-centers",
    icon: Zap,
  },
  {
    name: "Power",
    description:
      "Construction and operational leadership for power and energy projects.",
    href: "/industrial/powerplant",
    icon: Zap,
  },
  {
    name: "Wastewater",
    description:
      "Talent for treatment plants, utilities and water infrastructure projects.",
    href: "/industrial/wastewater",
    icon: Droplets,
  },
  {
    name: "Warehousing & Distribution",
    description:
      "Professionals for logistics, fulfillment and distribution facilities.",
    href: "/industrial/warehouse",
    icon: Warehouse,
  },
  {
    name: "Mechanical Construction",
    description:
      "Project leaders across HVAC, plumbing, piping and mechanical systems.",
    href: "/industries",
    icon: Wrench,
  },
  {
    name: "Electrical Construction",
    description:
      "Electrical project management, estimating and field operations talent.",
    href: "/industries",
    icon: Cable,
  },
];

const roles = [
  "Project Executives",
  "Senior Project Managers",
  "Project Managers",
  "Superintendents",
  "Preconstruction Leaders",
  "Chief Estimators",
  "MEP Managers",
  "Mechanical Project Managers",
  "Electrical Project Managers",
  "BIM & VDC Professionals",
  "Commissioning Managers",
  "Safety & QA/QC Leaders",
];

const employerBenefits = [
  "Construction and MEP market specialization",
  "Pre-vetted, role-aligned professionals",
  "Permanent hiring and executive search",
  "Quality-focused candidate submissions",
  "Support across the United States and global markets",
  "Recruitment aligned with project and business requirements",
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function HomeSEOSection() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2);
  const { ref: industryRef, visible: industryVisible } = useInView(0.05);
  const { ref: lowerRef, visible: lowerVisible } = useInView(0.08);

  return (
    <section className="relative overflow-hidden bg-[#F4F4F0] px-4 py-8 sm:px-5 lg:px-20 lg:py-10">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[300px] w-[650px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#C89B3C]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 bottom-[-160px] h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-10 max-w-5xl text-center lg:mb-14"
        >
          <div
            className="mb-4 flex items-center justify-center gap-3 transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Specialist Recruitment Expertise
              </p>
            </div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2
            className="text-[30px] font-bold leading-[1.05] text-[#07111F] transition-all delay-100 duration-700 sm:text-[40px] lg:text-[54px]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible
                ? "translateY(0)"
                : "translateY(24px)",
            }}
          >
            Construction, Engineering &amp; MEP
            <span className="relative ml-2 inline-block bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
              Recruitment Specialists

              <span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent opacity-25 transition-all delay-500 duration-1000"
                style={{
                  width: headerVisible ? "100%" : "0%",
                }}
              />
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-4xl text-[15px] leading-8 text-gray-600 transition-all delay-200 duration-700 sm:text-[17px]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            RUDRON Global Talent Solutions connects construction, engineering,
            architecture and MEP organizations with experienced professionals
            across the United States, Canada, UAE and India. We support general
            contractors, developers, EPC firms, mechanical contractors,
            electrical contractors and engineering consultancies through
            permanent recruitment and executive search.
          </p>
        </div>

        {/* Industries */}
        <div ref={industryRef}>
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Industry Coverage
              </p>

              <h3 className="text-[26px] font-bold text-[#07111F] sm:text-[32px]">
                Markets We Support
              </h3>
            </div>

            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#07111F]"
            >
              Explore All Industries

              <ArrowRight
                size={18}
                className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]"
                  style={{
                    opacity: industryVisible ? 1 : 0,
                    transform: industryVisible
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transitionDelay: `${index * 55}ms`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.05] bg-[#07111F]/[0.05] text-[#07111F] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-[#C89B3C]/20 group-hover:bg-[#C89B3C]/10 group-hover:text-[#C89B3C]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[2px] text-black/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="mt-6 text-[18px] font-bold text-[#07111F] transition-colors duration-300 group-hover:text-[#C89B3C]">
                      {industry.name}
                    </h4>

                    <p className="mt-3 text-[14px] leading-7 text-gray-500">
                      {industry.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                      <span className="text-[13px] font-semibold text-[#07111F]">
                        Explore Market
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 text-[#C89B3C] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#C89B3C] group-hover:text-[#07111F]">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Roles and employer value */}
        <div
          ref={lowerRef}
          className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div
            className="rounded-[30px] border border-black/[0.06] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-700 sm:p-9"
            style={{
              opacity: lowerVisible ? 1 : 0,
              transform: lowerVisible
                ? "translateX(0)"
                : "translateX(-35px)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Talent Coverage
            </p>

            <h3 className="mt-3 text-[26px] font-bold text-[#07111F] sm:text-[32px]">
              Construction Roles We Recruit
            </h3>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-gray-500">
              We recruit professionals across project delivery, field
              operations, estimating, preconstruction, MEP coordination,
              commissioning, safety, quality and executive leadership.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role}
                  className="group flex items-center gap-3 rounded-[14px] border border-black/[0.06] bg-[#F8F7F3] px-4 py-3.5 text-[13px] font-medium text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/30 hover:bg-[#C89B3C]/[0.05]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C] transition-transform duration-300 group-hover:scale-110">
                    <Check size={14} strokeWidth={2.2} />
                  </span>

                  {role}
                </div>
              ))}
            </div>

            <Link
              href="/jobs"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#07111F]"
            >
              Explore Current Opportunities

              <ArrowRight
                size={18}
                className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#07111F] p-7 text-white transition-all delay-150 duration-700 sm:p-9"
            style={{
              opacity: lowerVisible ? 1 : 0,
              transform: lowerVisible
                ? "translateX(0)"
                : "translateX(35px)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
                `,
                backgroundSize: "42px 42px",
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C89B3C]/15 blur-3xl" />
            <div className="pointer-events-none absolute left-7 right-7 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />

            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#C89B3C]" />

                <p className="text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                  For Employers
                </p>
              </div>

              <h3 className="text-[26px] font-bold leading-tight sm:text-[32px]">
                Why Employers Choose RUDRON
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-gray-400">
                Our recruitment process is built around market knowledge,
                candidate quality and a clear understanding of each
                organization&apos;s projects, culture and hiring priorities.
              </p>

              <div className="mt-7 space-y-4">
                {employerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 text-[#C89B3C]">
                      <Check size={14} strokeWidth={2.2} />
                    </span>

                    <p className="text-[14px] leading-6 text-gray-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <HireTalentButton
                  ariaLabel="Request construction and MEP talent"
                  className="group inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D5A943] hover:shadow-[0_10px_28px_rgba(200,155,60,0.28)]"
                >
                  Request Talent

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </HireTalentButton>

                <Link
                  href="/employers"
                  className="group inline-flex items-center justify-center gap-2 rounded-[12px] border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/40 hover:bg-white/[0.08]"
                >
                  Employer Solutions

                  <ArrowRight
                    size={17}
                    className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}