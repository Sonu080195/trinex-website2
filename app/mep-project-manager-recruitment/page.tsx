import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  HardHat,
  Layers3,
  MessageSquareText,
  Network,
  SearchCheck,
  ShieldCheck,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/mep-project-manager-recruitment`;

export const metadata: Metadata = {
  title: "MEP Project Manager Recruitment Specialists",
  description:
    "Hire experienced MEP Project Managers for data center, healthcare, commercial, industrial, residential and mission-critical construction projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "MEP Project Manager Recruitment Specialists",
    description:
      "Specialist recruitment for MEP Project Managers, Senior MEP Managers and building-services construction leaders.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/mep-project-manager.webp`,
        width: 1600,
        height: 900,
        alt: "MEP Project Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEP Project Manager Recruitment Specialists",
    description:
      "Hire experienced MEP Project Managers across data center, healthcare, commercial and industrial markets.",
    images: [`${SITE_URL}/images/recruitment/mep-project-manager.webp`],
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
      "MEP leaders experienced with mission-critical cooling, power, controls, redundancy, commissioning and fast-track delivery.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "MEP Project Managers familiar with hospitals, laboratories, medical facilities, phasing and occupied environments.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "MEP leadership for offices, education, hospitality, retail, mixed-use and major commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Building-services and utility coordination for manufacturing, process, warehouse, power and heavy industrial facilities.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "MEP management for multifamily, high-rise, student housing, senior housing and residential developments.",
  },
  {
    title: "Civil & Infrastructure",
    href: "/civil",
    description:
      "MEP and systems leadership for airports, transit, utilities, treatment plants and public infrastructure projects.",
  },
];

const responsibilities = [
  "Manage mechanical, electrical and plumbing project scopes",
  "Coordinate design, constructability and installation planning",
  "Lead MEP submittals, RFIs and procurement activities",
  "Manage budgets, forecasts, change orders and cost exposure",
  "Coordinate subcontractors, vendors and field teams",
  "Integrate MEP work with structural and architectural scopes",
  "Support BIM coordination and prefabrication planning",
  "Manage equipment schedules and long-lead procurement",
  "Coordinate testing, balancing, startup and commissioning",
  "Maintain client, GC, engineer and owner communication",
  "Support safety, quality and code compliance",
  "Drive turnover, closeout, training and warranty completion",
];

const systems = [
  "HVAC Systems",
  "Plumbing Systems",
  "Electrical Distribution",
  "Fire Alarm",
  "Building Automation",
  "Controls Integration",
  "Medical Gas",
  "Process Piping",
  "Emergency Power",
  "Lighting Controls",
  "Testing & Balancing",
  "Commissioning",
];

const tools = [
  "Procore",
  "Bluebeam Revu",
  "Autodesk Construction Cloud",
  "BIM 360",
  "Revit",
  "Navisworks",
  "AutoCAD",
  "Primavera P6",
  "Microsoft Project",
  "Microsoft Excel",
  "Trimble",
  "Sage",
];

const hiringChallenges = [
  {
    title: "Multi-Discipline Knowledge",
    description:
      "MEP Project Managers must understand mechanical, electrical, plumbing, controls and commissioning interfaces rather than a single trade.",
  },
  {
    title: "Coordination Complexity",
    description:
      "MEP scopes must fit within structural and architectural constraints while supporting access, maintainability and installation sequencing.",
  },
  {
    title: "Long-Lead Procurement",
    description:
      "Switchgear, generators, AHUs, chillers, pumps, controls and specialty equipment can directly affect the critical path.",
  },
  {
    title: "Cost and Schedule Ownership",
    description:
      "The role requires control over labor, equipment, vendors, subcontractors, changes and milestone delivery.",
  },
  {
    title: "Commissioning Readiness",
    description:
      "Strong MEP leaders understand startup, testing, balancing, controls validation, integrated testing and turnover documentation.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced MEP Project Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, MEP scope, systems, contract values, location, team structure and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, systems and multidisciplinary coordination backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for systems knowledge, project ownership, coordination, procurement, commissioning and client-facing experience.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual MEP scope and project environment.",
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
  "Describe the largest or most complex MEP project you have managed.",
  "How do you coordinate mechanical, electrical and plumbing scopes?",
  "How do you manage long-lead MEP equipment?",
  "Describe your experience with BIM coordination and clash resolution.",
  "How do you manage MEP budgets, forecasts and change orders?",
  "How do you coordinate with structural and architectural teams?",
  "Describe your approach to startup, testing and commissioning.",
  "How do you manage trade sequencing and installation access?",
  "Tell us about a major MEP coordination issue and how you resolved it.",
  "Which MEP construction software platforms do you use?",
  "How do you communicate risk, schedule impact and cost exposure?",
  "How do you manage turnover, training and closeout documentation?",
];

const roleLevels = [
  {
    title: "Assistant MEP Project Manager",
    description:
      "Supports submittals, RFIs, procurement, documentation, coordination and project controls.",
  },
  {
    title: "MEP Project Manager",
    description:
      "Owns multidisciplinary scope, budget, schedule, procurement, coordination and delivery.",
  },
  {
    title: "Senior MEP Project Manager",
    description:
      "Leads large or complex projects, mentors teams and manages major client and technical responsibilities.",
  },
  {
    title: "MEP Project Executive",
    description:
      "Oversees multiple projects, senior relationships, staffing, risk and operational performance.",
  },
];

const faqs = [
  {
    question: "Which MEP Project Manager roles does RUDRON recruit?",
    answer:
      "We recruit Assistant MEP Project Managers, MEP Project Managers, Senior MEP Project Managers, MEP Project Executives and related building-services leaders.",
  },
  {
    question: "Do you recruit both contractor-side and general-contractor MEP professionals?",
    answer:
      "Yes. We support general contractors, mechanical contractors, electrical contractors, EPC firms, developers and owner-side organizations.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support data centers, healthcare, commercial, industrial, residential, infrastructure, power, wastewater and other complex construction markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based MEP Project Manager searches across major U.S. markets.",
  },
  {
    question: "What information helps start an MEP Project Manager search?",
    answer:
      "Useful details include project sectors, MEP systems, contract values, location, reporting structure, team size, software, travel expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced MEP Project Managers are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit MEP professionals with commissioning experience?",
    answer:
      "Yes. We can target candidates with startup, testing, controls, TAB, commissioning and turnover experience where required.",
  },
];

export default function MepProjectManagerRecruitmentPage() {
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
        name: "MEP Project Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "MEP Project Manager Recruitment",
    serviceType: [
      "MEP Project Manager Recruitment",
      "Building Services Recruitment",
      "MEP Construction Recruitment",
      "Mission Critical MEP Recruitment",
      "Data Center MEP Recruitment",
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
      "Specialist recruitment for MEP Project Managers and multidisciplinary building-services leaders.",
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
              "url('/images/recruitment/mep-project-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                MEP Construction Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              MEP Project Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps general contractors, MEP contractors, EPC firms and
              developers hire experienced leaders who can coordinate
              mechanical, electrical, plumbing, controls and commissioning
              across complex construction projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
            <HireTalentButton
            ariaLabel="Hire an MEP Project Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire an MEP Project Manager
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
              MEP Leadership Connects Design, Installation and Operational Readiness
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                MEP Project Managers coordinate the systems that make buildings
                functional, safe and ready for operation.
              </p>
              <p>
                The strongest leaders combine technical understanding with
                commercial control, procurement planning, field coordination
                and commissioning awareness.
              </p>
              <p>
                RUDRON evaluates candidates against your actual project sectors,
                systems, contract values, team structure and required level of
                multidisciplinary ownership.
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
                "Mechanical Contractors",
                "Electrical Contractors",
                "EPC Firms",
                "Developers",
                "Owners",
                "Commissioning Firms",
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
              MEP Project Manager Recruitment Across Major Markets
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
                Key MEP Project Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor and project, but these
                capabilities are central to most MEP Project Manager searches.
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
                MEP Systems and Scope
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Relevant systems experience is essential when hiring for data
                center, healthcare, industrial and mission-critical projects.
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
                  title: "Mechanical Systems",
                  description:
                    "HVAC, hydronics, plumbing, piping, equipment and thermal systems.",
                },
                {
                  icon: Zap,
                  title: "Electrical Systems",
                  description:
                    "Power distribution, switchgear, generators, UPS, lighting and life safety.",
                },
                {
                  icon: Network,
                  title: "Controls Integration",
                  description:
                    "BAS, controls, alarms, sequences, interfaces and systems coordination.",
                },
                {
                  icon: Cog,
                  title: "Testing & Commissioning",
                  description:
                    "Startup, TAB, functional testing, integrated testing and turnover.",
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
                MEP Construction Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports coordination, documentation,
                scheduling, procurement, cost control and commissioning.
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
              MEP Project Leadership Roles
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
              Why MEP Project Manager Hiring Requires Specialization
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
              A Focused MEP Project Manager Search
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
                MEP Project Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test systems knowledge, coordination,
                financial ownership, procurement and commissioning readiness.
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
                  "We define systems, sectors, contract values, team structure, commissioning scope and leadership needs.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant MEP coordination, procurement, field, commercial and commissioning experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant MEP Project Managers.",
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
              ["Commissioning Recruitment", "/commissioning-manager-recruitment"],
              ["BIM/VDC Recruitment", "/bim-vdc-manager-recruitment"],
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
              MEP Project Manager Recruitment FAQs
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
            Looking to Hire an MEP Project Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, MEP systems, contract values, location,
            team structure and required level of leadership. RUDRON will help
            identify MEP Project Managers aligned with your project.
          </p>
        <HireTalentButton
        ariaLabel="Hire an MEP Project Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start an MEP Search
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