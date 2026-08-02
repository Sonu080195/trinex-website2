import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Hammer,
  HardHat,
  Layers3,
  MapPin,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/superintendent-recruitment`;

export const metadata: Metadata = {
  title: "Construction Superintendent Recruitment Specialists",
  description:
    "Hire experienced construction Superintendents for commercial, industrial, civil, residential, healthcare, data center, mechanical and electrical projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Construction Superintendent Recruitment Specialists",
    description:
      "Specialist recruitment for General Superintendents, Senior Superintendents, Mechanical Superintendents, Electrical Superintendents and field operations leaders.",
    images: [
      {
        url: `${SITE_URL}/Commercial.webp`,
        width: 1200,
        height: 630,
        alt: "Construction Superintendent recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Superintendent Recruitment Specialists",
    description:
      "Hire experienced construction Superintendents across commercial, industrial, civil, residential and MEP markets.",
    images: [`${SITE_URL}/Commercial.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectors = [
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Superintendents for healthcare, education, office, retail, hospitality and complex commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Field leadership for manufacturing, warehouse, power, wastewater, process and distribution projects.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Superintendents for multifamily, high-rise, student housing, senior housing and single-family construction.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Heavy civil Superintendents for roadway, bridge, rail, tunnel, airport and public infrastructure programs.",
  },
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    description:
      "Mission-critical field leaders experienced with fast-track, high-value and technically complex projects.",
  },
  {
    title: "Healthcare",
    href: "/commercial/healthcare",
    description:
      "Superintendents familiar with occupied facilities, infection control, phasing and healthcare compliance.",
  },
];

const responsibilities = [
  "Lead daily field operations and jobsite execution",
  "Coordinate subcontractors, trades and manpower",
  "Maintain short-term and master schedule alignment",
  "Enforce site safety standards and reporting",
  "Manage inspections, testing and quality control",
  "Coordinate deliveries, logistics and material flow",
  "Review drawings, RFIs and field documentation",
  "Resolve field conflicts and sequencing issues",
  "Conduct daily huddles and subcontractor meetings",
  "Track progress, productivity and schedule impacts",
  "Manage punch lists, turnover and closeout",
  "Communicate field status to project leadership",
];

const superintendentTypes = [
  {
    title: "General Superintendent",
    description:
      "Leads multiple projects, senior field teams, staffing strategy and operational standards across a business unit or region.",
  },
  {
    title: "Senior Superintendent",
    description:
      "Owns large, complex or technically demanding projects from mobilization through completion.",
  },
  {
    title: "Project Superintendent",
    description:
      "Directs day-to-day site operations, subcontractor coordination, safety, schedule and quality.",
  },
  {
    title: "MEP Superintendent",
    description:
      "Coordinates mechanical, electrical, plumbing, controls, testing, commissioning and technical turnover.",
  },
];

const hiringChallenges = [
  {
    title: "Project-Type Experience",
    description:
      "Healthcare, data center, industrial, civil and high-rise work each require different field knowledge, sequencing and risk awareness.",
  },
  {
    title: "Leadership Under Pressure",
    description:
      "Superintendents must make fast decisions, maintain standards and lead multiple trades through changing field conditions.",
  },
  {
    title: "Schedule Ownership",
    description:
      "Strong field leaders understand look-ahead planning, critical path activities, recovery plans and subcontractor accountability.",
  },
  {
    title: "Safety and Quality",
    description:
      "The role demands consistent site safety leadership, inspection readiness and control over workmanship and rework.",
  },
  {
    title: "Communication",
    description:
      "Superintendents must communicate clearly with Project Managers, owners, inspectors, design teams and trade partners.",
  },
  {
    title: "Geographic Mobility",
    description:
      "Travel, relocation and project-specific location requirements can significantly narrow the qualified candidate pool.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define the project type, size, phase, schedule, location, reporting structure and field leadership expectations.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, sector and site leadership experience.",
  },
  {
    number: "03",
    title: "Field Leadership Screening",
    description:
      "Candidates are reviewed for project history, safety, scheduling, trade coordination, team leadership and mobility.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the project instead of a broad list of loosely matched resumes.",
  },
  {
    number: "05",
    title: "Interview Support",
    description:
      "We coordinate interviews, maintain engagement and help clarify project expectations and candidate priorities.",
  },
  {
    number: "06",
    title: "Offer and Closing",
    description:
      "We support compensation, travel, relocation, notice periods and offer acceptance.",
  },
];

const interviewQuestions = [
  "Describe the largest or most complex project you have supervised.",
  "How do you build and manage a three-week look-ahead schedule?",
  "How do you hold subcontractors accountable for manpower and production?",
  "Describe your approach to jobsite safety leadership.",
  "How do you manage inspections and quality control?",
  "Tell us about a major field conflict and how you resolved it.",
  "How do you coordinate MEP trades with structural and architectural work?",
  "How do you communicate schedule risk to the Project Manager?",
  "Describe your experience with occupied or phased construction.",
  "How do you manage deliveries, logistics and site access?",
  "What information do you include in daily reports?",
  "How do you manage punch lists, turnover and final completion?",
];

const faqs = [
  {
    question: "Which Superintendent roles does RUDRON recruit?",
    answer:
      "We recruit General Superintendents, Senior Superintendents, Project Superintendents, Mechanical Superintendents, Electrical Superintendents, Civil Superintendents and other field operations leaders.",
  },
  {
    question: "Do you recruit MEP Superintendents?",
    answer:
      "Yes. We support searches for Mechanical, Electrical, Plumbing and MEP Superintendents with relevant technical project experience.",
  },
  {
    question: "Can RUDRON support confidential Superintendent searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Which construction sectors do you support?",
    answer:
      "We support commercial, industrial, residential, civil infrastructure, healthcare, data centers, mission critical, power, wastewater and other construction markets.",
  },
  {
    question: "Do you recruit Superintendents across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based Superintendent searches across major U.S. construction markets.",
  },
  {
    question: "What information helps start a Superintendent search?",
    answer:
      "The most useful details include project type, size, phase, schedule, location, reporting structure, travel expectations, compensation and required technical experience.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced Superintendents are not actively applying, so targeted direct search is an important part of the recruitment process.",
  },
  {
    question: "Can you recruit for both general contractors and subcontractors?",
    answer:
      "Yes. We support general contractors, developers, EPC firms, mechanical contractors, electrical contractors and other specialty contractors.",
  },
];

export default function SuperintendentRecruitmentPage() {
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
        name: "Employers",
        item: `${SITE_URL}/employers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Superintendent Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Construction Superintendent Recruitment",
    serviceType: [
      "Construction Superintendent Recruitment",
      "General Superintendent Recruitment",
      "Senior Superintendent Recruitment",
      "MEP Superintendent Recruitment",
      "Mechanical Superintendent Recruitment",
      "Electrical Superintendent Recruitment",
    ],
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
    ],
    url: PAGE_URL,
    description:
      "Specialist recruitment for construction Superintendents and field operations leaders.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Commercial.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/25" />

        <div
          className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(200,155,60,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[860px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Construction Superintendent Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Construction Superintendent
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[780px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps general contractors, developers, EPC firms,
              mechanical contractors, electrical contractors and heavy civil
              organizations hire field leaders who can control safety,
              schedule, quality, logistics and subcontractor performance.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

            <HireTalentButton
            ariaLabel="Hire a Superintendent"
            className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]">
                        Hire Construction Superintendents

            <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
            />
            </HireTalentButton>

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
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Specialist Search Expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Strong Field Leadership Drives Safer, More Predictable Projects
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Construction Superintendents influence every trade, inspection,
                delivery and field decision on a project. Their ability to plan,
                communicate and lead directly affects safety, schedule, quality
                and project profitability.
              </p>

              <p>
                The strongest Superintendent is not simply experienced onsite.
                They understand sequencing, manpower, logistics, short-term
                planning, documentation, quality control and how to maintain
                accountability across multiple subcontractors.
              </p>

              <p>
                RUDRON evaluates candidates against your actual project type,
                technical complexity, location, team structure and leadership
                expectations rather than treating every Superintendent role as
                interchangeable.
              </p>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "General Contractors",
                "Developers",
                "EPC Firms",
                "Mechanical Contractors",
                "Electrical Contractors",
                "Heavy Civil Contractors",
                "Specialty Subcontractors",
                "Construction Managers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-white/10 bg-[#07111F]/70 px-4 py-4 text-sm text-gray-200"
                >
                  <span className="mr-2 text-[#C89B3C]">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Sector Coverage
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Superintendent Recruitment Across Major Construction Markets
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group rounded-[22px] border border-black/[0.06] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-[#C89B3C]">
                    0{index + 1}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {sector.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Role Scope
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Key Construction Superintendent Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor, market and seniority, but
                these capabilities are central to most Superintendent searches.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[14px] border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-gray-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#C89B3C]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Field Leadership
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Core Superintendent Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Successful field leaders combine construction knowledge with
                planning discipline, communication and accountability.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Look-Ahead Planning",
                  "Trade Coordination",
                  "Safety Leadership",
                  "Daily Reporting",
                  "Inspection Readiness",
                  "Site Logistics",
                  "Quality Control",
                  "Schedule Recovery",
                  "Punch List Management",
                  "Manpower Planning",
                  "Owner Communication",
                  "Closeout Leadership",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[12px] border border-white/10 bg-[#07111F] px-4 py-4 text-sm text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Clock3,
                  title: "Schedule Control",
                  description:
                    "Maintaining short-term plans, sequencing and subcontractor accountability.",
                },
                {
                  icon: Users,
                  title: "Team Leadership",
                  description:
                    "Leading field teams, trade partners and foremen through changing project conditions.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safety and Quality",
                  description:
                    "Creating consistent standards for safe work, inspections and workmanship.",
                },
                {
                  icon: MapPin,
                  title: "Site Logistics",
                  description:
                    "Managing access, deliveries, laydown, cranes, temporary systems and site flow.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-white/10 bg-[#07111F] p-6"
                  >
                    <Icon
                      size={26}
                      className="text-[#C89B3C]"
                      strokeWidth={1.7}
                    />
                    <h3 className="mt-5 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Career Levels
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Field Operations Leadership Roles
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {superintendentTypes.map((level) => (
              <article
                key={level.title}
                className="rounded-[22px] border border-black/[0.06] bg-white p-7"
              >
                <Layers3
                  size={24}
                  className="text-[#C89B3C]"
                  strokeWidth={1.7}
                />
                <h3 className="mt-5 text-xl font-bold">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {level.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Search Challenges
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Why Superintendent Hiring Requires Specialization
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hiringChallenges.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-7"
              >
                <span className="text-sm font-bold text-[#C89B3C]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
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
              A Focused Superintendent Search Process
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Interview Guidance
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Construction Superintendent Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Strong interviews test how candidates plan, communicate, lead
                trades, control risk and respond when field conditions change.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {interviewQuestions.map((question) => (
                <div
                  key={question}
                  className="flex items-start gap-3 rounded-[16px] border border-black/[0.06] bg-white p-5 text-sm leading-7 text-gray-700"
                >
                  <MessageSquareText
                    size={18}
                    className="mt-1 shrink-0 text-[#C89B3C]"
                  />
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ClipboardCheck,
                title: "Detailed Role Qualification",
                description:
                  "We define project type, size, schedule, technical complexity, team structure and travel expectations before beginning the search.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant project, contractor, safety, schedule and field leadership experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant field leaders, not a high volume of loosely matched resumes.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#C89B3C]/20 bg-[#C89B3C]/[0.05] p-8"
                >
                  <Icon
                    size={30}
                    className="text-[#C89B3C]"
                    strokeWidth={1.7}
                  />
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
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
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Related Recruitment Services
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Explore Related Construction Searches
              </h2>
            </div>

            <Link
              href="/employers"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C89B3C]"
            >
              View Employer Solutions
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Estimator Recruitment", "/estimator-recruitment"],
              ["Commercial Recruitment", "/commercial"],
              ["Industrial Recruitment", "/industrial"],
              ["Data Center Recruitment", "/commercial/data-centers"],
              ["Healthcare Recruitment", "/commercial/healthcare"],
            ].map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="group rounded-[18px] border border-white/10 bg-[#07111F] p-6 transition hover:-translate-y-1 hover:border-[#C89B3C]/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{title}</h3>
                  <ArrowRight
                    size={17}
                    className="shrink-0 text-[#C89B3C] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
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
              Construction Superintendent Recruitment FAQs
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
            Looking to Hire a Construction Superintendent?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project type, size, location, schedule, technical
            requirements and level of seniority. RUDRON will help identify field
            leaders aligned with the way your organization builds and delivers
            work.
          </p>

        <HireTalentButton
        ariaLabel="Hire a Superintendent"
        className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
        Start a Superintendent Search

        <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
        />
        </HireTalentButton>
        </div>
      </section>

    </main>
  );
}