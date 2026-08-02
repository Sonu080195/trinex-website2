import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  HardHat,
  Layers3,
  Lightbulb,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/electrical-project-manager-recruitment`;

export const metadata: Metadata = {
  title: "Electrical Project Manager Recruitment Specialists",
  description:
    "Hire experienced Electrical Project Managers for commercial, industrial, healthcare, data center, mission critical and infrastructure projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Electrical Project Manager Recruitment Specialists",
    description:
      "Specialist recruitment for electrical construction Project Managers, Senior Project Managers and Project Executives.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/electrical-project-manager.webp`,
        width: 1600,
        height: 900,
        alt: "Electrical Project Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Project Manager Recruitment Specialists",
    description:
      "Hire experienced Electrical Project Managers across commercial, industrial, healthcare and data center markets.",
    images: [
      `${SITE_URL}/images/recruitment/electrical-project-manager.webp`,
    ],
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
      "Electrical PMs experienced with mission-critical power, switchgear, generators, UPS systems and fast-track delivery.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Electrical project leadership for hospitals, medical facilities, occupied renovations and phased work.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Electrical PMs for offices, education, retail, hospitality, mixed-use and large commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Electrical project leadership for manufacturing, power, process, warehouse and heavy industrial facilities.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Electrical PMs for multifamily, high-rise, student housing and senior housing developments.",
  },
  {
    title: "Civil & Infrastructure",
    href: "/civil",
    description:
      "Electrical leadership for airports, transit, utilities, water, wastewater and public infrastructure projects.",
  },
];

const responsibilities = [
  "Manage electrical project scope, schedule and budget",
  "Coordinate switchgear, transformers and major equipment",
  "Lead submittals, RFIs and procurement activities",
  "Manage field teams, subcontractors and trade partners",
  "Control cost reports, forecasts and change orders",
  "Coordinate electrical design and constructability",
  "Support BIM, prefabrication and installation planning",
  "Manage testing, startup and commissioning",
  "Coordinate with mechanical, controls and fire alarm teams",
  "Maintain client, GC and engineer communication",
  "Support safety, quality and code compliance",
  "Drive turnover, closeout and warranty completion",
];

const systems = [
  "Medium-Voltage Systems",
  "Low-Voltage Distribution",
  "Switchgear",
  "Transformers",
  "Generators",
  "UPS Systems",
  "Lighting & Controls",
  "Fire Alarm",
  "Security Systems",
  "Telecommunications",
  "Grounding & Bonding",
  "Testing & Commissioning",
];

const tools = [
  "Procore",
  "Bluebeam Revu",
  "AutoCAD",
  "Revit",
  "Navisworks",
  "Autodesk Construction Cloud",
  "BIM 360",
  "Primavera P6",
  "Microsoft Project",
  "Accubid",
  "Sage",
  "Microsoft Excel",
];

const hiringChallenges = [
  {
    title: "Technical System Knowledge",
    description:
      "Data centers, healthcare, industrial and infrastructure projects demand different electrical systems, code knowledge and commissioning experience.",
  },
  {
    title: "Electrical Contractor Background",
    description:
      "Strong candidates understand how electrical contractors estimate, procure, prefabricate, install, test and close out work.",
  },
  {
    title: "Long-Lead Procurement",
    description:
      "Switchgear, generators, transformers and controls can drive project schedules and require strong vendor management.",
  },
  {
    title: "Coordination Complexity",
    description:
      "Electrical scopes must integrate with mechanical, controls, life safety, architectural and commissioning requirements.",
  },
  {
    title: "Financial Ownership",
    description:
      "Electrical PMs must manage labor, equipment, materials, subcontractors, changes and project cash flow.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced Electrical Project Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, electrical scope, contract values, systems, location, team structure and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant electrical contractor, project and technical backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for systems knowledge, project ownership, budgets, procurement and client-facing experience.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual electrical scope and business need.",
  },
  {
    number: "05",
    title: "Interview Support",
    description:
      "We coordinate interviews, maintain engagement and help clarify expectations on both sides.",
  },
  {
    number: "06",
    title: "Offer and Closing",
    description:
      "We support compensation, notice periods, relocation, travel expectations and offer acceptance.",
  },
];

const interviewQuestions = [
  "Describe the largest electrical project you have managed.",
  "Which power distribution systems have you delivered?",
  "How do you manage procurement for long-lead electrical equipment?",
  "How do you manage labor forecasting and project cost reports?",
  "Describe your experience with BIM and prefabrication.",
  "How do you manage RFIs, submittals and change orders?",
  "Tell us about a difficult electrical installation challenge.",
  "How do you coordinate with mechanical, controls and commissioning teams?",
  "Describe your approach to subcontractor and vendor management.",
  "How do you support testing, startup and commissioning?",
  "What electrical construction software do you use?",
  "How do you communicate schedule risk and cost exposure?",
];

const roleLevels = [
  {
    title: "Assistant Electrical PM",
    description:
      "Supports submittals, RFIs, procurement, documentation, coordination and project controls.",
  },
  {
    title: "Electrical Project Manager",
    description:
      "Owns budget, schedule, procurement, coordination, client communication and delivery of assigned projects.",
  },
  {
    title: "Senior Electrical PM",
    description:
      "Leads larger or more complex work, mentors teams and supports major client or portfolio responsibilities.",
  },
  {
    title: "Electrical Project Executive",
    description:
      "Oversees multiple projects, senior client relationships, risk, staffing and operational performance.",
  },
];

const faqs = [
  {
    question: "Which Electrical Project Manager roles does RUDRON recruit?",
    answer:
      "We recruit Assistant Electrical Project Managers, Electrical Project Managers, Senior Electrical Project Managers, Project Executives and related electrical construction leaders.",
  },
  {
    question: "Do you recruit low-voltage and mission-critical Electrical PMs?",
    answer:
      "Yes. We support power distribution, mission critical, low-voltage, fire alarm, security, controls and broader electrical construction searches.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support data centers, healthcare, commercial, industrial, residential, power, utilities, transportation and infrastructure markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based Electrical Project Manager searches across major U.S. construction markets.",
  },
  {
    question: "What details help start an Electrical PM search?",
    answer:
      "Useful details include project sectors, electrical systems, contract values, location, reporting structure, team size, software, travel expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced Electrical Project Managers are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both electrical subcontractors and general contractors?",
    answer:
      "Yes. We support electrical contractors, general contractors, EPC firms, developers and organizations with internal electrical leadership needs.",
  },
];

export default function ElectricalProjectManagerRecruitmentPage() {
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
        name: "Electrical Project Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Electrical Project Manager Recruitment",
    serviceType: [
      "Electrical Project Manager Recruitment",
      "Mission Critical Electrical Recruitment",
      "Data Center Electrical Recruitment",
      "Low Voltage Project Manager Recruitment",
      "Electrical Construction Executive Search",
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
      "Specialist recruitment for electrical construction Project Managers and Project Executives.",
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

      <section className="relative min-h-[84vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/recruitment/electrical-project-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Electrical Construction Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Electrical Project Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps electrical contractors, general contractors, EPC
              firms and developers hire experienced Project Managers across
              power distribution, mission critical, low-voltage and technically
              complex electrical construction.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
            <HireTalentButton
                ariaLabel="Hire an Electrical Project Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire an Electrical PM
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
              Electrical Project Leadership Requires Technical and Commercial Strength
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Electrical Project Managers must understand construction,
                distribution systems, procurement, labor, coordination,
                commissioning and client expectations while maintaining
                financial control.
              </p>
              <p>
                The right candidate may need experience with data center power,
                healthcare systems, industrial controls, medium-voltage
                distribution or complex equipment installations.
              </p>
              <p>
                RUDRON evaluates candidates against your actual electrical
                scope, project sectors, contract values, systems, team structure
                and level of ownership.
              </p>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Electrical Contractors",
                "Low-Voltage Contractors",
                "Mission Critical Contractors",
                "General Contractors",
                "EPC Firms",
                "Developers",
                "Industrial Contractors",
                "Facilities Organizations",
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
              Electrical PM Recruitment Across Major Markets
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
                Key Electrical Project Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor and project, but these
                capabilities are central to most Electrical PM searches.
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
                Electrical Systems
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Systems and Scope Experience
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Relevant system experience can be essential when hiring for
                data center, healthcare, industrial or infrastructure work.
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
                  icon: Zap,
                  title: "Power Distribution",
                  description:
                    "Medium-voltage, low-voltage, switchgear, transformers and emergency power systems.",
                },
                {
                  icon: Cable,
                  title: "Low Voltage & Controls",
                  description:
                    "Fire alarm, security, telecom, controls and integrated low-voltage systems.",
                },
                {
                  icon: ShieldCheck,
                  title: "Testing & Commissioning",
                  description:
                    "Startup, testing, energization, functional verification and turnover.",
                },
                {
                  icon: Lightbulb,
                  title: "Lighting & Controls",
                  description:
                    "Interior, exterior, emergency lighting and lighting control systems.",
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
                Electrical Construction Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports collaboration, documentation,
                scheduling, cost control and coordinated project delivery.
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
              Electrical Project Leadership Roles
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
              Why Electrical PM Hiring Requires Specialization
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
              A Focused Electrical Project Manager Search
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
                Electrical Project Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test systems knowledge, financial ownership,
                procurement, coordination, commissioning and client
                communication.
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
                  "We define systems, project sectors, contract values, scope ownership and technical requirements.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant electrical contractor, system, project and leadership experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant Electrical PMs, not a high volume of loosely matched resumes.",
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
              [
                "Mechanical Project Manager Recruitment",
                "/mechanical-project-manager-recruitment",
              ],
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Superintendent Recruitment", "/superintendent-recruitment"],
              ["Estimator Recruitment", "/estimator-recruitment"],
              ["Industrial Recruitment", "/industrial"],
              ["Data Center Recruitment", "/commercial/data-centers"],
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
              Electrical Project Manager Recruitment FAQs
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
            Looking to Hire an Electrical Project Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your electrical scope, project sectors, systems, location,
            team structure and required level of ownership. RUDRON will help
            identify Electrical Project Managers aligned with the way your
            organization delivers work.
          </p>
        <HireTalentButton
            ariaLabel="Hire an Electrical Project Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start an Electrical PM Search
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