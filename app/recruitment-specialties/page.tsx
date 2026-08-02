import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Factory,
  HardHat,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/recruitment-specialties`;

export const metadata: Metadata = {
  title: "Construction, Engineering & MEP Recruitment Specialties",
  description:
    "Explore RUDRON recruitment specialties across project management, estimating, preconstruction, MEP, BIM/VDC, commissioning, quality and construction safety.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "RUDRON Global Talent Solutions",
    title: "Construction, Engineering & MEP Recruitment Specialties",
    description:
      "Specialist recruitment solutions for construction, engineering, MEP, project leadership, quality, safety and digital construction roles.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "RUDRON recruitment specialties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction, Engineering & MEP Recruitment Specialties",
    description:
      "Explore specialist recruitment services across construction, engineering and MEP leadership.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
};

const specialtyGroups = [
  {
    title: "Project Leadership",
    icon: BriefcaseBusiness,
    description:
      "Construction leaders who control delivery, field execution, client communication, cost and schedule performance.",
    links: [
      {
        title: "Project Manager Recruitment",
        href: "/project-manager-recruitment",
        description:
          "Project Managers, Senior Project Managers and construction delivery leaders.",
      },
      {
        title: "Superintendent Recruitment",
        href: "/superintendent-recruitment",
        description:
          "Field leaders responsible for safety, schedule, coordination and site execution.",
      },
      {
        title: "Estimator Recruitment",
        href: "/estimator-recruitment",
        description:
          "Estimators and senior cost professionals across major construction markets.",
      },
      {
        title: "Preconstruction Manager Recruitment",
        href: "/preconstruction-manager-recruitment",
        description:
          "Preconstruction leaders for budgets, design coordination, procurement and value engineering.",
      },
    ],
  },
  {
    title: "MEP Leadership",
    icon: Cog,
    description:
      "Mechanical, electrical, plumbing and multidisciplinary leaders for technically complex projects.",
    links: [
      {
        title: "MEP Project Manager Recruitment",
        href: "/mep-project-manager-recruitment",
        description:
          "Multidisciplinary MEP leaders managing systems, coordination and commissioning.",
      },
      {
        title: "Mechanical Project Manager Recruitment",
        href: "/mechanical-project-manager-recruitment",
        description:
          "Mechanical PMs across HVAC, plumbing, piping and equipment-intensive construction.",
      },
      {
        title: "Electrical Project Manager Recruitment",
        href: "/electrical-project-manager-recruitment",
        description:
          "Electrical PMs across power distribution, mission critical and low-voltage systems.",
      },
      {
        title: "BIM / VDC Manager Recruitment",
        href: "/bim-vdc-manager-recruitment",
        description:
          "Digital construction leaders for coordination, clash detection, prefabrication and field integration.",
      },
    ],
  },
  {
    title: "Quality, Safety & Commissioning",
    icon: ShieldCheck,
    description:
      "Specialists who protect people, quality, compliance, operational readiness and successful project turnover.",
    links: [
      {
        title: "Commissioning Manager Recruitment",
        href: "/commissioning-manager-recruitment",
        description:
          "Cx leaders for startup, testing, integrated systems verification and turnover.",
      },
      {
        title: "QA / QC Manager Recruitment",
        href: "/qa-qc-manager-recruitment",
        description:
          "Construction quality leaders for inspections, corrective action and documented closeout.",
      },
      {
        title: "Safety Manager Recruitment",
        href: "/safety-manager-recruitment",
        description:
          "Construction safety and EHS professionals for compliance, risk control and field culture.",
      },
    ],
  },
];

const industries = [
  {
    title: "Commercial Construction",
    href: "/commercial",
    icon: Building2,
    description:
      "Recruitment for offices, education, healthcare, retail, hospitality and mixed-use projects.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    icon: Factory,
    description:
      "Talent for manufacturing, power, process, warehouse, wastewater and heavy industrial work.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    icon: Layers3,
    description:
      "Professionals for multifamily, high-rise, student housing, senior housing and residential delivery.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    icon: HardHat,
    description:
      "Recruitment across roadways, bridges, rail, airports, utilities and public infrastructure.",
  },
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    icon: Zap,
    description:
      "Mission-critical professionals across MEP, commissioning, controls, quality and project delivery.",
  },
  {
    title: "Healthcare",
    href: "/commercial/healthcare",
    icon: ClipboardCheck,
    description:
      "Construction leaders experienced with hospitals, medical facilities, phasing and occupied environments.",
  },
];

const advantages = [
  {
    icon: SearchCheck,
    title: "Specialist Market Search",
    description:
      "We target professionals with relevant project sectors, contractor backgrounds, systems and leadership scope.",
  },
  {
    icon: Users,
    title: "Quality Over Volume",
    description:
      "Our focus is a concise shortlist of relevant candidates rather than a high volume of loosely matched resumes.",
  },
  {
    icon: Wrench,
    title: "Technical Role Qualification",
    description:
      "Searches are aligned with project values, delivery methods, software, systems, location and reporting structure.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Search Support",
    description:
      "We can support sensitive replacement, succession, expansion and leadership searches where discretion matters.",
  },
];

const process = [
  {
    number: "01",
    title: "Define the Requirement",
    description:
      "We clarify the role, project sectors, technical requirements, location, compensation and team structure.",
  },
  {
    number: "02",
    title: "Map the Market",
    description:
      "We identify relevant contractors, competitors, project environments and candidate populations.",
  },
  {
    number: "03",
    title: "Screen for Relevance",
    description:
      "Candidates are assessed against the actual responsibilities and project context of the role.",
  },
  {
    number: "04",
    title: "Present a Focused Shortlist",
    description:
      "You receive profiles aligned with the requirement, supported by clear candidate context.",
  },
];

const faqs = [
  {
    question: "Which construction roles does RUDRON recruit?",
    answer:
      "RUDRON recruits Project Managers, Superintendents, Estimators, Preconstruction Managers, MEP Project Managers, Mechanical and Electrical Project Managers, BIM/VDC Managers, Commissioning Managers, QA/QC Managers, Safety Managers and related construction leaders.",
  },
  {
    question: "Which types of companies do you support?",
    answer:
      "We support general contractors, mechanical contractors, electrical contractors, EPC firms, developers, owners, engineering firms, commissioning firms and specialist construction organizations.",
  },
  {
    question: "Which industries does RUDRON cover?",
    answer:
      "Our focus includes commercial, healthcare, data center, industrial, residential, civil infrastructure, power, wastewater and other technically complex construction markets.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based searches across major U.S. construction markets.",
  },
  {
    question: "Can RUDRON support confidential recruitment?",
    answer:
      "Yes. Confidential replacement, succession, team expansion and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Direct search is an important part of our process because many experienced construction professionals are not actively applying through job boards.",
  },
  {
    question: "What information is needed to start a search?",
    answer:
      "Useful details include the role, project sectors, contractor type, technical scope, location, compensation, reporting structure, travel expectations and preferred experience.",
  },
  {
    question: "Can you help with multiple roles at once?",
    answer:
      "Yes. We can support individual searches, multiple project hires and broader team-building requirements across related construction functions.",
  },
];

export default function RecruitmentSpecialtiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Recruitment Specialties",
        item: PAGE_URL,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#collection`,
    name: "Construction, Engineering and MEP Recruitment Specialties",
    url: PAGE_URL,
    description:
      "A collection of specialist construction, engineering and MEP recruitment services provided by RUDRON Global Talent Solutions.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: specialtyGroups.flatMap((group) =>
      group.links.map((link) => ({
        "@type": "Service",
        name: link.title,
        url: `${SITE_URL}${link.href}`,
      }))
    ),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden bg-[#07111F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden pb-24 pt-40 sm:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/recruitment/recruitment-specialties.webp')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,155,60,0.15),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                RUDRON Recruitment Specialties
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[40px] font-bold leading-[1.05] sm:text-[56px] lg:text-[72px]">
              Construction, Engineering
              <br />
              <span className="text-[#C89B3C]">& MEP Recruitment</span>
            </h1>

            <p className="mt-7 max-w-3xl text-[15px] leading-8 text-gray-300 sm:text-[18px]">
              RUDRON connects contractors, developers, EPC firms, owners and
              engineering organizations with experienced professionals across
              project leadership, preconstruction, MEP, digital construction,
              commissioning, quality and safety.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <HireTalentButton
                ariaLabel="Hire construction and MEP talent"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire Specialist Talent
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </HireTalentButton>

              <Link
                href="/jobs"
                className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#C89B3C]/50 hover:bg-white/10"
              >
                Explore Current Jobs
                <ArrowRight
                  size={17}
                  className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["11", "Specialist Pages"],
              ["4", "Core Markets"],
              ["AEC", "Sector Focus"],
              ["MEP", "Technical Expertise"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[18px] border border-white/10 bg-white/[0.035] px-6 py-5"
              >
                <p className="text-3xl font-bold text-[#C89B3C]">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Specialist Recruitment Services
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Explore Our Construction Recruitment Specialties
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-gray-400">
              Each specialty page provides dedicated information about the
              roles, project sectors, responsibilities, systems, software,
              interview considerations and recruitment challenges associated
              with that function.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {specialtyGroups.map((group) => {
              const Icon = group.icon;

              return (
                <section
                  key={group.title}
                  className="rounded-[28px] border border-white/10 bg-[#07111F] p-6 sm:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C89B3C]/25 bg-[#C89B3C]/10">
                        <Icon
                          size={24}
                          className="text-[#C89B3C]"
                          strokeWidth={1.7}
                        />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold">{group.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {group.description}
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group rounded-[18px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35 hover:bg-white/[0.055]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-semibold leading-6 text-white">
                              {link.title}
                            </h4>
                            <ArrowRight
                              size={17}
                              className="mt-1 shrink-0 text-[#C89B3C] transition-transform group-hover:translate-x-1"
                            />
                          </div>
                          <p className="mt-3 text-sm leading-7 text-gray-400">
                            {link.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Industries We Support
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Recruitment Across Major Construction Markets
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-gray-600">
              Our search strategy is shaped by the project environment,
              contractor type, technical systems and delivery challenges
              associated with each market.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group rounded-[22px] border border-black/[0.06] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={27}
                      className="text-[#C89B3C]"
                      strokeWidth={1.7}
                    />
                    <ArrowRight
                      size={18}
                      className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {industry.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Why RUDRON
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Recruitment Built Around Role Relevance
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-7"
                >
                  <Icon
                    size={28}
                    className="text-[#C89B3C]"
                    strokeWidth={1.7}
                  />
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Recruitment Process
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Focused Search From Requirement to Offer
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-[22px] border border-white/10 bg-[#07111F] p-7"
              >
                <p className="text-3xl font-bold text-[#C89B3C]">
                  {step.number}
                </p>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Employer Support
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Building Teams Across Related Construction Functions
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-gray-600">
              Many searches involve more than one role. A contractor may need a
              Project Manager, Superintendent, Estimator and Safety Manager for
              the same expansion or project pipeline.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-gray-600">
              RUDRON can support connected hiring requirements across project
              leadership, field operations, preconstruction, MEP, quality,
              safety and commissioning.
            </p>
          </div>

          <div className="rounded-[26px] border border-black/[0.06] bg-white p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Common Hiring Needs
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "New Office Expansion",
                "Project Team Buildout",
                "Leadership Replacement",
                "Succession Planning",
                "New Market Entry",
                "Project Backlog Growth",
                "Confidential Search",
                "Multi-Role Recruitment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[12px] border border-black/[0.06] bg-[#F7F7F3] px-4 py-4 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#C89B3C]"
                  />
                  {item}
                </div>
              ))}
            </div>

            <HireTalentButton
              ariaLabel="Discuss your construction hiring requirements"
              className="group mt-7 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Discuss Your Hiring Needs
              <ArrowRight
                size={17}
                className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
              />
            </HireTalentButton>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Recruitment Specialties FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[16px] border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#C89B3C]/30"
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
        </div>
      </section>

      <section className="bg-[#C89B3C] py-20 text-[#07111F]">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <HardHat size={48} className="mx-auto" strokeWidth={1.5} />
          <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
            Need Specialist Construction Talent?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your roles, project sectors, location, technical requirements
            and hiring timeline. RUDRON will help identify professionals aligned
            with your business and project needs.
          </p>
          <HireTalentButton
            ariaLabel="Start a specialist construction recruitment search"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a Specialist Search
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </HireTalentButton>
        </div>
      </section>
    </main>
  );
}