import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  HardHat,
  Layers3,
  MessageSquareText,
  MonitorCheck,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/commissioning-manager-recruitment`;

export const metadata: Metadata = {
  title: "Commissioning Manager Recruitment Specialists",
  description:
    "Hire experienced Commissioning Managers, Commissioning Engineers and Cx leaders for data center, healthcare, commercial, industrial and mission critical projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Commissioning Manager Recruitment Specialists",
    description:
      "Specialist recruitment for Commissioning Managers, Commissioning Engineers and Cx leaders across complex construction projects.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/commissioning-manager.webp`,
        width: 1600,
        height: 900,
        alt: "Commissioning Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commissioning Manager Recruitment Specialists",
    description:
      "Hire experienced commissioning professionals across data center, healthcare, commercial and industrial markets.",
    images: [`${SITE_URL}/images/recruitment/commissioning-manager.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectors = [
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    description:
      "Commissioning leaders experienced with mission-critical power, cooling, controls, redundancy and integrated systems testing.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Cx professionals familiar with hospitals, laboratories, medical facilities, life safety and occupied environments.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Commissioning leadership for offices, education, high-rise, hospitality and large commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Commissioning expertise for manufacturing, process, warehouse, power and heavy industrial facilities.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Commissioning professionals for multifamily, high-rise, student housing and senior housing developments.",
  },
  {
    title: "Civil & Infrastructure",
    href: "/civil",
    description:
      "Commissioning support for airports, transit, utilities, water, wastewater and public infrastructure projects.",
  },
];

const responsibilities = [
  "Develop and manage commissioning plans and schedules",
  "Coordinate pre-functional and functional testing",
  "Lead commissioning meetings and issue resolution",
  "Manage systems readiness and startup activities",
  "Coordinate mechanical, electrical and controls teams",
  "Review submittals, sequences and commissioning documentation",
  "Track deficiencies, punch items and corrective actions",
  "Support integrated systems testing and turnover",
  "Coordinate TAB, controls validation and equipment startup",
  "Maintain client, contractor and design-team communication",
  "Prepare commissioning reports and closeout documentation",
  "Support training, handover and warranty transition",
];

const systems = [
  "HVAC Systems",
  "Chilled Water",
  "Hot Water",
  "Building Automation",
  "Electrical Distribution",
  "Generators",
  "UPS Systems",
  "Fire Alarm",
  "Life Safety",
  "Plumbing Systems",
  "Controls Integration",
  "Integrated Systems Testing",
];

const tools = [
  "CxAlloy",
  "Facility Grid",
  "Procore",
  "Bluebeam Revu",
  "Autodesk Construction Cloud",
  "BIM 360",
  "Microsoft Project",
  "Primavera P6",
  "Microsoft Excel",
  "Revit",
  "Navisworks",
  "Building Automation Platforms",
];

const hiringChallenges = [
  {
    title: "Cross-Discipline Knowledge",
    description:
      "Commissioning leaders must understand mechanical, electrical, controls, life safety and integrated system performance.",
  },
  {
    title: "Testing Leadership",
    description:
      "The role requires disciplined planning, documentation and coordination across multiple contractors and systems.",
  },
  {
    title: "Mission-Critical Experience",
    description:
      "Data centers and healthcare projects demand deep familiarity with redundancy, resilience, failover and integrated testing.",
  },
  {
    title: "Issue Resolution",
    description:
      "Commissioning professionals must identify deficiencies, drive corrective action and maintain momentum toward turnover.",
  },
  {
    title: "Client Communication",
    description:
      "The role often requires direct communication with owners, engineers, contractors, vendors and facilities teams.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced Commissioning Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, systems, testing scope, location, team structure and leadership expectations.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant commissioning, systems, contractor and project backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for systems knowledge, testing leadership, documentation, issue management and client-facing experience.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual commissioning scope and business need.",
  },
  {
    number: "05",
    title: "Interview Support",
    description:
      "We coordinate interviews, maintain candidate engagement and help clarify expectations on both sides.",
  },
  {
    number: "06",
    title: "Offer and Closing",
    description:
      "We support compensation, notice periods, relocation, travel expectations and offer acceptance.",
  },
];

const interviewQuestions = [
  "Describe the most complex commissioning project you have led.",
  "Which mechanical and electrical systems have you commissioned?",
  "How do you build and manage a commissioning plan?",
  "How do you coordinate pre-functional and functional testing?",
  "Describe your experience with integrated systems testing.",
  "How do you manage deficiencies and corrective actions?",
  "How do you coordinate TAB, controls and equipment startup?",
  "Tell us about a commissioning issue that threatened turnover.",
  "How do you communicate testing status to owners and project teams?",
  "Which commissioning platforms and documentation tools do you use?",
  "How do you support training, closeout and facilities handover?",
  "How do you manage multiple systems and contractors under schedule pressure?",
];

const roleLevels = [
  {
    title: "Commissioning Engineer",
    description:
      "Supports testing, documentation, deficiency tracking, startup and systems verification.",
  },
  {
    title: "Senior Commissioning Engineer",
    description:
      "Leads discipline-specific testing, complex systems and project-level issue resolution.",
  },
  {
    title: "Commissioning Manager",
    description:
      "Owns commissioning strategy, schedule, team coordination, reporting and turnover readiness.",
  },
  {
    title: "Director of Commissioning",
    description:
      "Leads portfolio strategy, staffing, standards, major client relationships and enterprise-level delivery.",
  },
];

const faqs = [
  {
    question: "Which commissioning roles does RUDRON recruit?",
    answer:
      "We recruit Commissioning Engineers, Senior Commissioning Engineers, Commissioning Managers, Directors of Commissioning and related Cx professionals.",
  },
  {
    question: "Do you recruit data center commissioning professionals?",
    answer:
      "Yes. We support mission-critical searches involving power, cooling, controls, redundancy, failover and integrated systems testing.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support data centers, healthcare, commercial, industrial, residential, infrastructure, laboratories, power and other complex facilities.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based Commissioning Manager searches across major U.S. markets.",
  },
  {
    question: "What information helps start a commissioning search?",
    answer:
      "Useful details include project sectors, systems, testing scope, schedule, location, reporting structure, travel expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced commissioning professionals are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both contractors and commissioning firms?",
    answer:
      "Yes. We support general contractors, MEP contractors, specialist commissioning firms, owners, developers and facilities organizations.",
  },
];

export default function CommissioningManagerRecruitmentPage() {
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
        name: "Commissioning Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Commissioning Manager Recruitment",
    serviceType: [
      "Commissioning Manager Recruitment",
      "Commissioning Engineer Recruitment",
      "Data Center Commissioning Recruitment",
      "MEP Commissioning Recruitment",
      "Mission Critical Commissioning Recruitment",
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
      "Specialist recruitment for Commissioning Managers, Commissioning Engineers and Cx leaders.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative min-h-[84vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/recruitment/commissioning-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Commissioning Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Commissioning Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps commissioning firms, contractors, owners and
              facilities organizations hire experienced leaders who can manage
              startup, testing, integrated systems verification and turnover
              across complex projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
            <HireTalentButton
                ariaLabel="Hire a Commissioning Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire a Commissioning Manager
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
              Commissioning Leadership Turns Installed Systems Into Reliable Operations
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Commissioning Managers coordinate the final transition from
                construction to operational readiness.
              </p>
              <p>
                The strongest leaders understand systems, testing, controls,
                documentation, startup, issue resolution and owner expectations.
              </p>
              <p>
                RUDRON evaluates candidates against your project sectors,
                systems, testing scope, schedule, team structure and required
                level of client-facing leadership.
              </p>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Commissioning Firms",
                "General Contractors",
                "Mechanical Contractors",
                "Electrical Contractors",
                "Developers",
                "Owners",
                "Facilities Teams",
                "Engineering Firms",
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
              Commissioning Recruitment Across Major Markets
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
                Key Commissioning Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by project and sector, but these
                capabilities are central to most commissioning searches.
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
                Systems Experience
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Commissioning Systems and Scope
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Relevant system experience is especially important for data
                center, healthcare and mission-critical projects.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {systems.map((item) => (
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
                  icon: Thermometer,
                  title: "Mechanical Systems",
                  description:
                    "HVAC, hydronics, pumps, controls, TAB and equipment startup.",
                },
                {
                  icon: Zap,
                  title: "Electrical Systems",
                  description:
                    "Switchgear, generators, UPS systems, distribution and energization.",
                },
                {
                  icon: MonitorCheck,
                  title: "Controls Integration",
                  description:
                    "BAS validation, sequences, alarms, trending and integrated controls testing.",
                },
                {
                  icon: Activity,
                  title: "Integrated Testing",
                  description:
                    "Functional performance, failover, resilience and end-to-end systems verification.",
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Technical Platforms
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Commissioning Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports testing, documentation, issue
                tracking, reporting and project closeout.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-[14px] border border-black/[0.06] bg-white px-5 py-4 text-sm font-medium text-gray-700"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Career Levels
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Commissioning Leadership Roles
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roleLevels.map((level) => (
              <article
                key={level.title}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-7"
              >
                <Layers3
                  size={24}
                  className="text-[#C89B3C]"
                  strokeWidth={1.7}
                />
                <h3 className="mt-5 text-xl font-semibold">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {level.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Search Challenges
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Why Commissioning Hiring Requires Specialization
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hiringChallenges.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-white/10 bg-[#07111F] p-7"
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

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Recruitment Process
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Focused Commissioning Manager Search
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-[22px] border border-black/[0.06] bg-white p-7"
              >
                <p className="text-3xl font-bold text-[#C89B3C]">
                  {step.number}
                </p>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Interview Guidance
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Commissioning Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test systems knowledge, planning,
                documentation, issue resolution and client communication.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {interviewQuestions.map((question) => (
                <div
                  key={question}
                  className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-gray-300"
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

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ClipboardCheck,
                title: "Detailed Role Qualification",
                description:
                  "We define systems, testing scope, project sectors, schedule, team structure and leadership needs.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant commissioning, systems, testing, documentation and client-facing experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant commissioning professionals.",
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

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
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
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#07111F]"
            >
              View Employer Solutions
              <ArrowRight
                size={17}
                className="text-[#C89B3C] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Mechanical PM Recruitment", "/mechanical-project-manager-recruitment"],
              ["Electrical PM Recruitment", "/electrical-project-manager-recruitment"],
              ["BIM/VDC Recruitment", "/bim-vdc-manager-recruitment"],
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Data Center Recruitment", "/commercial/data-centers"],
              ["Healthcare Recruitment", "/commercial/healthcare"],
            ].map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="group rounded-[18px] border border-black/[0.06] bg-white p-6 transition hover:-translate-y-1 hover:border-[#C89B3C]/40"
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
              Commissioning Manager Recruitment FAQs
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
            Looking to Hire a Commissioning Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, systems, testing scope, location,
            schedule and required level of leadership. RUDRON will help
            identify commissioning professionals aligned with your project.
          </p>
        <HireTalentButton
                ariaLabel="Hire a Commissioning Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a Commission Manager Search
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