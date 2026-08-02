"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  Clock3,
  Compass,
  HardHat,
  Network,
  Search,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import HomeCTA from "@/components/HomeCTA";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const sectors = [
  "Commercial Construction",
  "Industrial Construction",
  "Civil Infrastructure",
  "Residential Construction",
  "Data Centers",
  "Healthcare",
  "Mission Critical",
  "MEP Construction",
];

const challenges = [
  {
    title: "Specialist talent shortages",
    description:
      "Experienced construction and MEP professionals are approached frequently and rarely remain active in the market for long.",
    icon: Users,
  },
  {
    title: "Project-critical vacancies",
    description:
      "Unfilled leadership and delivery roles can affect schedules, team performance, client relationships and project profitability.",
    icon: Clock3,
  },
  {
    title: "Highly specific requirements",
    description:
      "Project type, contractor background, location, systems knowledge and leadership scope all influence candidate suitability.",
    icon: Target,
  },
  {
    title: "Competitive hiring markets",
    description:
      "Strong candidates often manage several conversations at once, making speed, communication and positioning essential.",
    icon: Zap,
  },
];

const solutions = [
  {
    title: "Permanent Recruitment",
    description:
      "Targeted direct-hire recruitment for construction, engineering, architecture and MEP professionals.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Executive Search",
    description:
      "Confidential search for Project Executives, Operations leaders, Directors and other senior appointments.",
    icon: Search,
  },
  {
    title: "MEP Recruitment",
    description:
      "Specialist hiring across mechanical, electrical, plumbing, piping, BIM/VDC and commissioning disciplines.",
    icon: Wrench,
  },
  {
    title: "Project & Contract Staffing",
    description:
      "Flexible talent support for urgent, project-led and time-sensitive workforce requirements.",
    icon: HardHat,
  },
  {
    title: "Market Mapping",
    description:
      "Structured identification of relevant talent pools, competitors and likely candidate availability.",
    icon: Compass,
  },
  {
    title: "Talent Advisory",
    description:
      "Practical guidance on compensation, search difficulty, candidate expectations and hiring strategy.",
    icon: Network,
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We review the role, project environment, reporting structure, compensation, location and business priorities.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Targeted Search",
    description:
      "We identify professionals with relevant contractor, project, technical and leadership experience.",
    icon: Search,
  },
  {
    number: "03",
    title: "Candidate Qualification",
    description:
      "We assess experience, motivation, compensation expectations, location and alignment before submission.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Interview Support",
    description:
      "We coordinate interviews, maintain candidate engagement and keep both parties informed throughout the process.",
    icon: Users,
  },
  {
    number: "05",
    title: "Offer Management",
    description:
      "We support offer discussions, expectations, notice periods, counteroffers and closing considerations.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Placement Follow-Through",
    description:
      "We remain connected through resignation, onboarding and the early stages of the placement.",
    icon: Check,
  },
];

const advantages = [
  "Construction and MEP specialization",
  "Pre-vetted, role-aligned candidates",
  "Quality-focused submissions instead of volume",
  "Access to passive professionals",
  "Support across major U.S. construction markets",
  "Transparent communication throughout the search",
];

const faqs = [
  {
    question: "Which employers does RUDRON support?",
    answer:
      "We support general contractors, developers, construction managers, EPC firms, mechanical contractors, electrical contractors, engineering firms and other organizations across the built environment.",
  },
  {
    question: "Which roles can RUDRON recruit?",
    answer:
      "We recruit Project Executives, Project Managers, Superintendents, Estimators, Preconstruction professionals, MEP leaders, BIM/VDC professionals, Safety leaders, QA/QC professionals and other technical or operational appointments.",
  },
  {
    question: "Does RUDRON provide executive search?",
    answer:
      "Yes. We support targeted and confidential searches for senior construction, engineering and operational leadership positions.",
  },
  {
    question: "How quickly can candidates be presented?",
    answer:
      "Timing depends on role complexity, location and market availability. RUDRON prioritizes speed without compromising candidate relevance or qualification.",
  },
  {
    question: "Which locations does RUDRON cover?",
    answer:
      "We support employers across the United States and also serve selected requirements in Canada, the UAE and India.",
  },
];

export default function EmployersContent() {
  const [heroVisible, setHeroVisible] = useState(false);
  const { ref: challengeRef, inView: challengeVisible } = useInView();
  const { ref: solutionRef, inView: solutionVisible } = useInView();
  const { ref: processRef, inView: processVisible } = useInView();
  const { ref: advantageRef, inView: advantageVisible } = useInView();
  const { ref: faqRef, inView: faqVisible } = useInView();

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden bg-[#07111F] text-white">
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
          style={{
            backgroundImage: "url('/employers/employers-hero.webp')",
            transform: heroVisible ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/92 to-[#07111F]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/15" />
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#C89B3C] to-transparent opacity-70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div
              className="mb-6 flex items-center gap-3 transition-all duration-700"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(18px)",
              }}
            >
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Recruitment Solutions For Employers
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1
              className="text-[38px] font-bold leading-[1.03] transition-all delay-100 duration-700 sm:text-[52px] lg:text-[68px]"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(26px)",
              }}
            >
              Build High-Performing
              <br />
              <span className="text-[#C89B3C]">Construction & MEP Teams</span>
            </h1>

            <p
              className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 transition-all delay-200 duration-700 sm:text-[17px]"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              RUDRON helps general contractors, developers, EPC firms,
              mechanical contractors, electrical contractors and engineering
              organizations identify experienced professionals across project
              delivery, field operations, preconstruction, estimating, MEP and
              executive leadership.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 transition-all delay-300 duration-700"
              style={{ opacity: heroVisible ? 1 : 0 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-[11px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Submit A Hiring Requirement
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 rounded-[11px] border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold transition hover:border-[#C89B3C]/50 hover:bg-white/10"
              >
                Explore Our Markets
                <ArrowRight size={17} className="text-[#C89B3C] transition group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className="mt-9 flex flex-wrap gap-2 transition-all delay-500 duration-700"
              style={{ opacity: heroVisible ? 1 : 0 }}
            >
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs text-gray-200 backdrop-blur"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] px-5 py-20 text-[#07111F] sm:px-6 lg:px-8">
        <div ref={challengeRef} className="mx-auto max-w-7xl">
          <div
            className="mx-auto max-w-4xl text-center transition-all duration-700"
            style={{
              opacity: challengeVisible ? 1 : 0,
              transform: challengeVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
              The Hiring Challenge
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight sm:text-[40px] lg:text-[52px]">
              Construction Hiring Requires More Than A Generic Search
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-gray-600">
              The strongest candidates are often passive, highly selective and
              evaluated by several employers at once. Successful recruitment
              requires focused market knowledge, accurate qualification and a
              clear understanding of the role and project environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_18px_50px_rgba(200,155,60,0.12)]"
                  style={{
                    opacity: challengeVisible ? 1 : 0,
                    transform: challengeVisible ? "translateY(0)" : "translateY(28px)",
                    transitionDelay: `${index * 90}ms`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-[#060D18] py-5">
        <div className="flex min-w-max animate-[marquee_30s_linear_infinite]">
          {[...sectors, ...sectors, ...sectors].map((sector, index) => (
            <div key={`${sector}-${index}`} className="flex items-center">
              <span className="mx-6 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/65">
                {sector}
              </span>
              <span className="text-[7px] text-[#C89B3C]">◆</span>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#F4F4F0] px-5 py-20 text-[#07111F] sm:px-6 lg:px-8">
        <div ref={solutionRef} className="mx-auto max-w-7xl">
          <div
            className="text-center transition-all duration-700"
            style={{
              opacity: solutionVisible ? 1 : 0,
              transform: solutionVisible ? "translateY(0)" : "translateY(22px)",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
              Recruitment Solutions
            </p>
            <h2 className="mt-4 text-[30px] font-bold sm:text-[40px] lg:text-[52px]">
              Focused Hiring Support For The Built Environment
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-black/[0.06] bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_18px_55px_rgba(200,155,60,0.12)]"
                  style={{
                    opacity: solutionVisible ? 1 : 0,
                    transform: solutionVisible ? "translateY(0)" : "translateY(26px)",
                    transitionDelay: `${index * 85}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111F]/[0.05] text-[#07111F] transition group-hover:bg-[#C89B3C]/10 group-hover:text-[#C89B3C]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <span className="text-sm font-bold text-[#C89B3C]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111F] px-5 py-20 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div ref={processRef} className="relative mx-auto max-w-7xl">
          <div
            className="text-center transition-all duration-700"
            style={{
              opacity: processVisible ? 1 : 0,
              transform: processVisible ? "translateY(0)" : "translateY(22px)",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
              Our Process
            </p>
            <h2 className="mt-4 text-[30px] font-bold sm:text-[40px] lg:text-[52px]">
              A Structured Search From Requirement To Placement
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#C89B3C]/35 hover:bg-[#C89B3C]/[0.055]"
                  style={{
                    opacity: processVisible ? 1 : 0,
                    transform: processVisible ? "translateY(0)" : "translateY(26px)",
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C89B3C]/10 text-[#C89B3C]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                    <span className="text-2xl font-bold text-[#C89B3C]">{item.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] px-5 py-20 text-[#07111F] sm:px-6 lg:px-8">
        <div ref={advantageRef} className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="rounded-[28px] bg-[#07111F] p-8 text-white sm:p-10"
            style={{
              opacity: advantageVisible ? 1 : 0,
              transform: advantageVisible ? "translateX(0)" : "translateX(-28px)",
              transition: "all 700ms ease",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
              Why RUDRON
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight sm:text-[40px]">
              Recruitment Built Around Relevance, Not Volume
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-gray-400">
              We focus on understanding the requirement, identifying aligned
              professionals and presenting candidates who can genuinely support
              the organization and its projects.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-[11px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
            >
              Start A Search
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2"
            style={{
              opacity: advantageVisible ? 1 : 0,
              transform: advantageVisible ? "translateX(0)" : "translateX(28px)",
              transition: "all 700ms ease 120ms",
            }}
          >
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="flex items-start gap-3 rounded-[18px] border border-black/[0.06] bg-white p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C]">
                  <Check size={15} strokeWidth={2.2} />
                </span>
                <p className="text-sm font-medium leading-6">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0A1520] px-5 py-20 sm:px-6 lg:px-8">
        <div ref={faqRef} className="mx-auto max-w-5xl">
          <div
            className="text-center transition-all duration-700"
            style={{
              opacity: faqVisible ? 1 : 0,
              transform: faqVisible ? "translateY(0)" : "translateY(22px)",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-[30px] font-bold sm:text-[40px]">
              Employer Recruitment FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[18px] border border-white/10 bg-[#07111F] p-6"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </main>
  );
}