import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/mechanical-project-manager-recruitment`;

export const metadata: Metadata = {
  title: "Mechanical Project Manager Recruitment Specialists",
  description:
    "Hire experienced Mechanical Project Managers for HVAC, plumbing, piping, healthcare, data center, commercial and industrial construction projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Mechanical Project Manager Recruitment Specialists",
    description:
      "Specialist recruitment for HVAC, plumbing, piping and mechanical construction Project Managers.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/mechanical-project-manager.webp`,
        width: 1600,
        height: 900,
        alt: "Mechanical Project Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanical Project Manager Recruitment Specialists",
    description:
      "Hire experienced Mechanical Project Managers across commercial, healthcare, data center and industrial markets.",
    images: [
      `${SITE_URL}/images/recruitment/mechanical-project-manager.webp`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectors = [
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Mechanical PMs experienced with hospitals, medical facilities, occupied renovations and phased work.",
  },
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    description:
      "Mission-critical professionals familiar with cooling, hydronics, controls, commissioning and fast-track delivery.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Mechanical project leadership for offices, education, retail, hospitality and mixed-use developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Mechanical PMs for manufacturing, process, warehouse, power, wastewater and heavy industrial projects.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Mechanical leadership for multifamily, high-rise, student housing and senior housing developments.",
  },
  {
    title: "Civil & Utility Projects",
    href: "/civil",
    description:
      "Mechanical and piping leadership for infrastructure, treatment, utility and public-sector work.",
  },
];

const responsibilities = [
  "Manage HVAC, plumbing, piping and mechanical scopes",
  "Control project budgets, forecasts and cost reporting",
  "Coordinate design, submittals, RFIs and procurement",
  "Lead field teams, subcontractors and trade partners",
  "Manage schedules, sequencing and milestone delivery",
  "Support equipment selection and vendor coordination",
  "Oversee change orders and scope reconciliation",
  "Coordinate BIM, fabrication and installation planning",
  "Manage testing, balancing and commissioning activities",
  "Maintain client, GC and design-team communication",
  "Support safety, quality and code compliance",
  "Drive turnover, closeout and warranty completion",
];

const systems = [
  "HVAC Systems",
  "Chilled Water",
  "Hot Water",
  "Plumbing Systems",
  "Process Piping",
  "Medical Gas",
  "Sheet Metal",
  "Hydronic Systems",
  "Controls & BAS",
  "Steam Systems",
  "Equipment Rigging",
  "Testing & Balancing",
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
  "Sage",
  "Trimble",
  "Microsoft Excel",
];

const hiringChallenges = [
  {
    title: "Technical Project Experience",
    description:
      "Healthcare, data center, industrial and commercial projects require different system knowledge, codes, sequencing and commissioning experience.",
  },
  {
    title: "Mechanical Contractor Background",
    description:
      "Strong candidates understand how mechanical contractors estimate, procure, fabricate, install, test and close out work.",
  },
  {
    title: "Coordination Complexity",
    description:
      "Mechanical scopes must integrate with structural, architectural, electrical, controls, fire protection and commissioning requirements.",
  },
  {
    title: "Cost and Schedule Ownership",
    description:
      "Mechanical PMs must manage labor, equipment, materials, subcontractors, changes and project cash flow under demanding timelines.",
  },
  {
    title: "Client Communication",
    description:
      "The role often requires direct communication with general contractors, owners, engineers, vendors and internal operations teams.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced Mechanical Project Managers are frequently employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, mechanical scope, contract values, systems, location, team structure and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant mechanical contractor, project and technical backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for systems knowledge, project ownership, budgets, field coordination and client-facing experience.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual mechanical scope and business need.",
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
  "Describe the largest mechanical project you have managed.",
  "Which HVAC, plumbing or piping systems have you delivered?",
  "How do you manage labor forecasting and project cost reports?",
  "How do you coordinate equipment procurement and long-lead items?",
  "Describe your experience with BIM and fabrication coordination.",
  "How do you manage RFIs, submittals and change orders?",
  "Tell us about a difficult mechanical installation challenge.",
  "How do you coordinate with electrical, controls and commissioning teams?",
  "Describe your approach to subcontractor and vendor management.",
  "How do you support testing, balancing and commissioning?",
  "What project-management and construction software do you use?",
  "How do you communicate risk, schedule impact and cost exposure?",
];

const roleLevels = [
  {
    title: "Assistant Mechanical PM",
    description:
      "Supports submittals, RFIs, procurement, documentation, coordination and project controls.",
  },
  {
    title: "Mechanical Project Manager",
    description:
      "Owns budget, schedule, procurement, coordination, client communication and delivery of assigned projects.",
  },
  {
    title: "Senior Mechanical PM",
    description:
      "Leads larger or more complex work, mentors teams and supports major client or portfolio responsibilities.",
  },
  {
    title: "Project Executive",
    description:
      "Oversees multiple projects, senior client relationships, risk, staffing and operational performance.",
  },
];

const faqs = [
  {
    question: "Which Mechanical Project Manager roles does RUDRON recruit?",
    answer:
      "We recruit Assistant Mechanical Project Managers, Mechanical Project Managers, Senior Mechanical Project Managers, Project Executives and related mechanical construction leaders.",
  },
  {
    question: "Do you recruit HVAC and plumbing Project Managers?",
    answer:
      "Yes. We support HVAC, plumbing, piping, process piping, sheet metal, controls and broader mechanical construction searches.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support healthcare, data centers, mission critical, commercial, industrial, residential, power, wastewater and other mechanical construction markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based Mechanical Project Manager searches across major U.S. construction markets.",
  },
  {
    question: "What details help start a Mechanical PM search?",
    answer:
      "Useful details include project sectors, mechanical systems, contract values, location, reporting structure, team size, software, travel expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced Mechanical Project Managers are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both mechanical subcontractors and general contractors?",
    answer:
      "Yes. We support mechanical contractors, general contractors, EPC firms, developers and organizations with internal MEP leadership needs.",
  },
];

export default function MechanicalProjectManagerRecruitmentPage() {
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
        name: "Mechanical Project Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Mechanical Project Manager Recruitment",
    serviceType: [
      "Mechanical Project Manager Recruitment",
      "HVAC Project Manager Recruitment",
      "Plumbing Project Manager Recruitment",
      "Piping Project Manager Recruitment",
      "MEP Project Manager Recruitment",
      "Mechanical Construction Executive Search",
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
      "Specialist recruitment for HVAC, plumbing, piping and mechanical construction Project Managers.",
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
              "url('/images/recruitment/mechanical-project-manager.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Mechanical Construction Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Mechanical Project Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps mechanical contractors, general contractors, EPC
              firms and developers hire experienced Project Managers across
              HVAC, plumbing, piping, controls and technically complex MEP
              construction.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
            <HireTalentButton
            ariaLabel="Hire a Mechanical Project Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire a Mechanical PM
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
              Mechanical Project Leadership Requires Technical and Commercial
              Strength
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Mechanical Project Managers must understand construction,
                systems, procurement, labor, coordination, commissioning and
                client expectations while maintaining financial control.
              </p>

              <p>
                The right candidate may need experience with healthcare
                phasing, mission-critical cooling, process piping, central
                plants, high-rise plumbing or complex equipment installations.
              </p>

              <p>
                RUDRON evaluates candidates against your actual mechanical
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
                "Mechanical Contractors",
                "HVAC Contractors",
                "Plumbing Contractors",
                "Piping Contractors",
                "General Contractors",
                "EPC Firms",
                "Developers",
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
              Mechanical PM Recruitment Across Major Markets
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
                Key Mechanical Project Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor and project, but these
                capabilities are central to most Mechanical PM searches.
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
                Mechanical Systems
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Systems and Scope Experience
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Relevant system experience can be essential when hiring for
                healthcare, mission critical, industrial or specialized
                commercial work.
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
                  icon: Snowflake,
                  title: "HVAC & Cooling",
                  description:
                    "Airside, waterside, central plant, cooling and mission-critical thermal systems.",
                },
                {
                  icon: Wrench,
                  title: "Plumbing & Piping",
                  description:
                    "Domestic water, sanitary, storm, medical gas, process and specialty piping.",
                },
                {
                  icon: Gauge,
                  title: "Controls & Commissioning",
                  description:
                    "BAS integration, testing, balancing, startup, functional testing and turnover.",
                },
                {
                  icon: Cog,
                  title: "Equipment & Fabrication",
                  description:
                    "Major equipment, prefabrication, coordination, rigging and installation planning.",
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
                Mechanical Construction Software and Tools
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
              Mechanical Project Leadership Roles
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
              Why Mechanical PM Hiring Requires Specialization
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
              A Focused Mechanical Project Manager Search
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
                Mechanical Project Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test systems knowledge, financial ownership,
                coordination, procurement, field leadership and client
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
                  "Profiles are reviewed for relevant mechanical contractor, system, project and leadership experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant Mechanical PMs, not a high volume of loosely matched resumes.",
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
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Superintendent Recruitment", "/superintendent-recruitment"],
              ["Estimator Recruitment", "/estimator-recruitment"],
              ["Commercial Recruitment", "/commercial"],
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
              Mechanical Project Manager Recruitment FAQs
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
            Looking to Hire a Mechanical Project Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your mechanical scope, project sectors, systems, location,
            team structure and required level of ownership. RUDRON will help
            identify Mechanical Project Managers aligned with the way your
            organization delivers work.
          </p>
          <HireTalentButton
            ariaLabel="Hire a Mechanical Project Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a Mechanical PM Search
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