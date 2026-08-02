"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  Compass,
  FileText,
  HardHat,
  Lightbulb,
  MapPin,
  MessageSquareText,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import CandidateModal from "@/components/CandidateModal";
import HomeCTA from "@/components/HomeCTA";

function useInView(threshold = 0.1) {
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

const roleGroups = [
  {
    title: "Project Leadership",
    icon: BriefcaseBusiness,
    roles: [
      "Project Executive",
      "Senior Project Manager",
      "Project Manager",
      "Assistant Project Manager",
      "Project Engineer",
    ],
  },
  {
    title: "Field Operations",
    icon: HardHat,
    roles: [
      "General Superintendent",
      "Senior Superintendent",
      "Superintendent",
      "Field Operations Manager",
      "General Foreman",
    ],
  },
  {
    title: "Preconstruction & Estimating",
    icon: ClipboardCheck,
    roles: [
      "Preconstruction Director",
      "Preconstruction Manager",
      "Chief Estimator",
      "Senior Estimator",
      "Estimator",
    ],
  },
  {
    title: "MEP & Technical",
    icon: Wrench,
    roles: [
      "Mechanical Project Manager",
      "Electrical Project Manager",
      "Plumbing Project Manager",
      "MEP Manager",
      "BIM/VDC Professional",
    ],
  },
  {
    title: "Safety, Quality & Controls",
    icon: ShieldCheck,
    roles: [
      "Safety Director",
      "Safety Manager",
      "QA/QC Manager",
      "Scheduler",
      "Commissioning Manager",
    ],
  },
  {
    title: "Executive Leadership",
    icon: Users,
    roles: [
      "Operations Director",
      "Regional Director",
      "Vice President",
      "Division Manager",
      "Business Unit Leader",
    ],
  },
];

const sectors = [
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Healthcare, education, offices, retail, data centers and complex commercial developments.",
    icon: Building2,
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Manufacturing, process, power, wastewater, warehouse and distribution projects.",
    icon: Zap,
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Multifamily, high-rise, student housing, senior housing and single-family construction.",
    icon: MapPin,
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Roadways, bridges, rail, tunnels, airports and public infrastructure programs.",
    icon: Compass,
  },
];

const journey = [
  {
    number: "01",
    title: "Submit Your Profile",
    description:
      "Share your resume, preferred role, location and career goals so our team can understand your background.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Candidate Consultation",
    description:
      "We discuss your project experience, responsibilities, compensation expectations and long-term priorities.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Relevant Opportunity Matching",
    description:
      "We consider opportunities aligned with your sector expertise, leadership scope, location and career objectives.",
    icon: Search,
  },
  {
    number: "04",
    title: "Interview Preparation",
    description:
      "We help you understand the role, company, interview process and the experience most relevant to the employer.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Offer Support",
    description:
      "We support communication, compensation discussions, offer review and expectations on both sides.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Long-Term Career Partnership",
    description:
      "Our relationship continues beyond a single vacancy as your experience and career goals evolve.",
    icon: TrendingUp,
  },
];

const candidateBenefits = [
  "Access to specialist construction, engineering and MEP opportunities",
  "Confidential career conversations",
  "Clear information about the role, project and hiring process",
  "Interview preparation and market guidance",
  "Support during compensation and offer discussions",
  "A quality-focused approach rather than mass submissions",
];

const resources = [
  {
    title: "Construction Job Search",
    description:
      "Browse current project management, field operations, estimating, MEP and executive vacancies.",
    href: "/jobs",
  },
  {
    title: "Construction Market Insights",
    description:
      "Read hiring trends, workforce updates and salary-focused market content.",
    href: "/insights",
  },
  {
    title: "Industry Specialisations",
    description:
      "Explore the commercial, industrial, residential and civil markets we support.",
    href: "/industries",
  },
];

const faqs = [
  {
    question: "Does RUDRON charge candidates a fee?",
    answer:
      "No. Candidates are not charged a recruitment fee for being considered for opportunities through RUDRON.",
  },
  {
    question: "Can I submit my resume without applying to a specific job?",
    answer:
      "Yes. You can submit your profile for future opportunities, and our team can review it against relevant current or upcoming searches.",
  },
  {
    question: "Which construction roles does RUDRON recruit?",
    answer:
      "We recruit across project management, field operations, estimating, preconstruction, MEP, BIM/VDC, commissioning, safety, quality, scheduling and executive leadership.",
  },
  {
    question: "Which markets does RUDRON support?",
    answer:
      "We support construction, engineering, architecture and MEP opportunities across the United States, Canada, the UAE and India, depending on the vacancy.",
  },
  {
    question: "Will my profile be shared without my knowledge?",
    answer:
      "RUDRON aims to discuss relevant opportunities and candidate interest before presenting a profile to an employer.",
  },
  {
    question: "Can RUDRON help with interview preparation?",
    answer:
      "Yes. For active opportunities, we can help you understand the role, company, project environment and interview expectations.",
  },
];

export default function CandidatesContent() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [candidateModalOpen, setCandidateModalOpen] = useState(false);

  const { ref: introRef, visible: introVisible } = useInView(0.08);
  const { ref: rolesRef, visible: rolesVisible } = useInView(0.06);
  const { ref: sectorsRef, visible: sectorsVisible } = useInView(0.08);
  const { ref: journeyRef, visible: journeyVisible } = useInView(0.05);
  const { ref: benefitsRef, visible: benefitsVisible } = useInView(0.08);
  const { ref: resourcesRef, visible: resourcesVisible } = useInView(0.08);
  const { ref: faqRef, visible: faqVisible } = useInView(0.08);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="overflow-hidden bg-[#07111F] text-white">
        <section className="relative min-h-[88vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: "url('/candidates/candidates-hero.webp')",
              transform: heroVisible ? "scale(1.05)" : "scale(1)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/92 to-[#07111F]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

          <div
            className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(200,155,60,0.11) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
            <div className="max-w-[820px]">
              <div
                className="mb-6 flex items-center gap-3 transition-all duration-700"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0)"
                    : "translateY(18px)",
                }}
              >
                <span className="h-px w-10 bg-[#C89B3C]" />
                <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                  Construction & MEP Careers
                </p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>

              <h1
                className="text-[38px] font-bold leading-[1.06] transition-all delay-100 duration-700 sm:text-[52px] lg:text-[68px]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0)"
                    : "translateY(26px)",
                }}
              >
                Build Your Next Career Move
                <br />
                <span className="text-[#C89B3C]">
                  With The Right Opportunity
                </span>
              </h1>

              <p
                className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 transition-all delay-200 duration-700 sm:text-[17px]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                RUDRON connects construction, engineering, architecture and MEP
                professionals with employers seeking proven project, field,
                technical and executive leadership experience.
              </p>

              <div
                className="mt-9 flex flex-wrap gap-3 transition-all delay-300 duration-700"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0)"
                    : "translateY(16px)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setCandidateModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
                >
                  Submit Your Profile
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <Link
                  href="/jobs"
                  className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#C89B3C]/50 hover:bg-white/10"
                >
                  Browse Current Jobs
                  <ArrowRight
                    size={17}
                    className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div
                className="mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3 transition-all delay-500 duration-700"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                {[
                  ["Confidential", "Career conversations"],
                  ["Specialist", "Construction & MEP focus"],
                  ["Targeted", "Opportunity matching"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[18px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md"
                  >
                    <p className="font-semibold text-[#C89B3C]">{title}</p>
                    <p className="mt-1 text-xs text-gray-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0A1520] py-18">
          <div
            ref={introRef}
            className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
          >
            <div
              className="transition-all duration-700"
              style={{
                opacity: introVisible ? 1 : 0,
                transform: introVisible
                  ? "translateX(0)"
                  : "translateX(-30px)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Candidate Partnership
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                More Than A Resume Submission
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
                <p>
                  A successful career move depends on more than a matching job
                  title. The project type, leadership scope, reporting
                  structure, culture, compensation, location and long-term
                  opportunity all matter.
                </p>

                <p>
                  Our candidate process is designed to understand your actual
                  experience and what you want next. We consider contractor
                  background, sector expertise, project size, technical
                  responsibilities and professional goals before discussing an
                  opportunity.
                </p>

                <p>
                  We aim to present relevant opportunities clearly so you can
                  make informed decisions throughout the hiring process.
                </p>
              </div>
            </div>

            <div
              className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 transition-all delay-150 duration-700 sm:p-9"
              style={{
                opacity: introVisible ? 1 : 0,
                transform: introVisible
                  ? "translateX(0)"
                  : "translateX(30px)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                What You Can Expect
              </p>

              <div className="mt-7 space-y-4">
                {candidateBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 text-[#C89B3C]">
                      <Check size={14} strokeWidth={2.2} />
                    </span>
                    <p className="text-sm leading-7 text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
          <div ref={rolesRef} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Career Paths
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Construction Roles We Support
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                We work across project leadership, field operations,
                preconstruction, estimating, MEP, safety, quality, controls and
                executive management.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {roleGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]"
                    style={{
                      opacity: rolesVisible ? 1 : 0,
                      transform: rolesVisible
                        ? "translateY(0)"
                        : "translateY(28px)",
                      transitionDelay: `${index * 70}ms`,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">{group.title}</h3>

                    <div className="mt-5 space-y-3">
                      {group.roles.map((role) => (
                        <div
                          key={role}
                          className="flex items-center gap-3 text-sm text-gray-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div
            ref={sectorsRef}
            className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
          >
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Industry Coverage
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Markets Where We Recruit
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Explore the major construction sectors supported by RUDRON and
                the project environments where your experience may be relevant.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;

                return (
                  <Link
                    key={sector.title}
                    href={sector.href}
                    className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/[0.055]"
                    style={{
                      opacity: sectorsVisible ? 1 : 0,
                      transform: sectorsVisible
                        ? "translateY(0)"
                        : "translateY(28px)",
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C89B3C]/10 text-[#C89B3C]">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {sector.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {sector.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0A1520] py-20">
          <div
            ref={journeyRef}
            className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Candidate Journey
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What The Recruitment Process Looks Like
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-[22px] border border-white/10 bg-[#07111F] p-7"
                    style={{
                      opacity: journeyVisible ? 1 : 0,
                      transform: journeyVisible
                        ? "translateY(0)"
                        : "translateY(28px)",
                      transition: "all 700ms ease",
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-[#C89B3C]">
                        {step.number}
                      </p>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#C89B3C]">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
          <div
            ref={benefitsRef}
            className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
          >
            <div
              className="rounded-[28px] bg-[#07111F] p-8 text-white transition-all duration-700 sm:p-10"
              style={{
                opacity: benefitsVisible ? 1 : 0,
                transform: benefitsVisible
                  ? "translateX(0)"
                  : "translateX(-30px)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Career Guidance
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Prepare For A Stronger Hiring Process
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-300">
                The strongest candidates can explain project scope,
                responsibilities, team size, contract value, technical
                complexity and measurable outcomes clearly.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Keep your resume focused on project scope and achievements",
                  "Be ready to discuss project values, schedules and delivery methods",
                  "Clarify your leadership responsibilities and reporting structure",
                  "Explain the sectors and project types where you add the most value",
                  "Set realistic compensation, location and travel expectations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C]">
                      <Check size={14} strokeWidth={2.2} />
                    </span>
                    <p className="text-sm leading-7 text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[28px] border border-black/[0.06] bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all delay-150 duration-700 sm:p-10"
              style={{
                opacity: benefitsVisible ? 1 : 0,
                transform: benefitsVisible
                  ? "translateX(0)"
                  : "translateX(30px)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Resume Checklist
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Information Employers Look For
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Project types and sectors",
                  "Project values and sizes",
                  "Ground-up or renovation experience",
                  "Team and subcontractor leadership",
                  "Schedule and budget responsibility",
                  "Software and technical systems",
                  "Safety and quality achievements",
                  "Certifications and licenses",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-black/[0.06] bg-[#F8F7F3] px-4 py-4 text-sm font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCandidateModalOpen(true)}
                className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Submit Your Resume
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div
            ref={resourcesRef}
            className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
          >
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Candidate Resources
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Continue Your Career Research
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {resources.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/40"
                  style={{
                    opacity: resourcesVisible ? 1 : 0,
                    transform: resourcesVisible
                      ? "translateY(0)"
                      : "translateY(28px)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-semibold text-[#C89B3C]">
                      0{index + 1}
                    </p>
                    <ArrowRight
                      size={18}
                      className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0A1520] py-20">
          <div ref={faqRef} className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div
              className="text-center transition-all duration-700"
              style={{
                opacity: faqVisible ? 1 : 0,
                transform: faqVisible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Frequently Asked Questions
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Candidate FAQs
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-[16px] border border-white/10 bg-[#07111F] p-6 transition hover:border-[#C89B3C]/30"
                  style={{
                    opacity: faqVisible ? 1 : 0,
                    transform: faqVisible
                      ? "translateY(0)"
                      : "translateY(18px)",
                    transition: "all 600ms ease",
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setCandidateModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Submit Your Candidate Profile
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>

      <CandidateModal
        isOpen={candidateModalOpen}
        onClose={() => setCandidateModalOpen(false)}
      />
    </>
  );
}