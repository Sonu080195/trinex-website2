import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  HardHat,
  Layers3,
  Lightbulb,
  MessageSquareText,
  Ruler,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/preconstruction-manager-recruitment`;

export const metadata: Metadata = {
  title: "Preconstruction Manager Recruitment Specialists",
  description:
    "Hire experienced Preconstruction Managers, Directors and senior estimating leaders for commercial, industrial, healthcare, data center and MEP projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Preconstruction Manager Recruitment Specialists",
    description:
      "Specialist recruitment for Preconstruction Managers, Directors, Senior Estimators and cost-planning leaders.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/preconstruction-manager.webp`,
        width: 1600,
        height: 900,
        alt: "Preconstruction Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preconstruction Manager Recruitment Specialists",
    description:
      "Hire experienced Preconstruction Managers across commercial, healthcare, data center, industrial and MEP markets.",
    images: [`${SITE_URL}/images/recruitment/preconstruction-manager.webp`],
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
      "Preconstruction leaders for offices, education, retail, hospitality, mixed-use and large commercial developments.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Professionals experienced with hospitals, medical facilities, occupied renovations and phased delivery.",
  },
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    description:
      "Mission-critical preconstruction talent familiar with fast-track, high-value and technically complex projects.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Preconstruction leadership for manufacturing, warehouse, process, power and distribution facilities.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Cost planning and preconstruction leadership for multifamily, high-rise, student and senior housing.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Preconstruction support for roadway, bridge, rail, airport, utility and public infrastructure programs.",
  },
];

const responsibilities = [
  "Lead conceptual, schematic and design-development estimating",
  "Manage preconstruction schedules and deliverables",
  "Coordinate design review and constructability analysis",
  "Lead value engineering and cost-saving strategies",
  "Develop procurement and bid-package strategies",
  "Evaluate subcontractor and supplier market coverage",
  "Manage client presentations and budget updates",
  "Identify project risk, scope gaps and escalation exposure",
  "Coordinate with operations, estimating and design teams",
  "Support GMP development and contract negotiations",
  "Maintain historical cost data and benchmarking",
  "Lead handoff from preconstruction to project execution",
];

const capabilities = [
  "Conceptual Estimating",
  "Design-Assist",
  "Design-Build",
  "GMP Development",
  "Value Engineering",
  "Constructability Review",
  "Bid Packaging",
  "Trade Partner Strategy",
  "Cost Benchmarking",
  "Risk Analysis",
  "Procurement Planning",
  "Client Presentations",
];

const tools = [
  "Bluebeam Revu",
  "On-Screen Takeoff",
  "Destini Estimator",
  "Sage Estimating",
  "Procore",
  "BuildingConnected",
  "PlanSwift",
  "Microsoft Excel",
  "Revit",
  "Navisworks",
  "Primavera P6",
  "Microsoft Project",
];

const hiringChallenges = [
  {
    title: "Client-Facing Leadership",
    description:
      "Preconstruction Managers must explain complex cost, scope and design issues clearly to owners, architects and internal leadership.",
  },
  {
    title: "Early-Stage Judgment",
    description:
      "Conceptual estimates require strong judgment when drawings are incomplete and project risk is still evolving.",
  },
  {
    title: "Design and Cost Integration",
    description:
      "The role requires balancing design intent, constructability, budget, schedule and procurement realities.",
  },
  {
    title: "Market Intelligence",
    description:
      "Strong leaders understand subcontractor coverage, labor conditions, escalation, material volatility and regional pricing.",
  },
  {
    title: "Operational Handoff",
    description:
      "Preconstruction work must transition cleanly into project execution with scope, risk and assumptions clearly documented.",
  },
  {
    title: "Leadership Depth",
    description:
      "Experienced Preconstruction Managers and Directors often carry valuable client relationships and institutional knowledge.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, delivery methods, team structure, client-facing expectations, location and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, estimating and preconstruction leadership backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for conceptual estimating, value engineering, design coordination, client leadership and team management.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual role instead of a broad list of loosely matched resumes.",
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
  "Describe the largest or most complex project you led through preconstruction.",
  "How do you build a conceptual estimate with limited design information?",
  "How do you manage design changes while maintaining budget alignment?",
  "Describe your approach to value engineering.",
  "How do you evaluate subcontractor coverage and market risk?",
  "How do you structure bid packages and procurement strategy?",
  "Tell us about a difficult client budget conversation.",
  "How do you coordinate with estimating, design and operations teams?",
  "Describe your experience developing GMPs.",
  "How do you identify and document scope gaps and assumptions?",
  "What cost databases and estimating tools do you use?",
  "How do you hand off a project from preconstruction to operations?",
];

const roleLevels = [
  {
    title: "Preconstruction Engineer",
    description:
      "Supports takeoffs, scope review, bid coordination, documentation and early cost planning.",
  },
  {
    title: "Preconstruction Manager",
    description:
      "Owns budgets, design coordination, value engineering, procurement strategy and client communication.",
  },
  {
    title: "Senior Preconstruction Manager",
    description:
      "Leads major pursuits, complex projects, client relationships and team development.",
  },
  {
    title: "Preconstruction Director",
    description:
      "Oversees strategy, staffing, standards, major pursuits and enterprise-level preconstruction performance.",
  },
];

const faqs = [
  {
    question: "Which Preconstruction roles does RUDRON recruit?",
    answer:
      "We recruit Preconstruction Engineers, Preconstruction Managers, Senior Preconstruction Managers, Directors of Preconstruction, Senior Estimators and related cost-planning leaders.",
  },
  {
    question: "Do you recruit for design-build and negotiated work?",
    answer:
      "Yes. We support searches involving design-build, design-assist, negotiated, GMP and traditional bid delivery models.",
  },
  {
    question: "Which sectors do you support?",
    answer:
      "We support commercial, healthcare, data center, mission critical, industrial, residential, civil and MEP construction markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based Preconstruction Manager searches across major U.S. construction markets.",
  },
  {
    question: "What information helps start a Preconstruction search?",
    answer:
      "Useful details include project sectors, delivery methods, typical project values, team structure, location, software, client-facing expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced Preconstruction Managers are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both general contractors and specialty contractors?",
    answer:
      "Yes. We support general contractors, developers, EPC firms, mechanical contractors, electrical contractors and other specialty organizations.",
  },
];

export default function PreconstructionManagerRecruitmentPage() {
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
        name: "Preconstruction Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Preconstruction Manager Recruitment",
    serviceType: [
      "Preconstruction Manager Recruitment",
      "Director of Preconstruction Recruitment",
      "Senior Estimator Recruitment",
      "Cost Planning Recruitment",
      "Construction Preconstruction Executive Search",
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
      "Specialist recruitment for Preconstruction Managers, Directors and senior cost-planning leaders.",
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
              "url('/images/recruitment/preconstruction-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Preconstruction Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Preconstruction Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps general contractors, developers, EPC firms and
              specialty contractors hire preconstruction leaders who can align
              design, cost, scope, schedule, risk and client expectations before
              construction begins.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <HireTalentButton
                ariaLabel="Hire a Preconstruction Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire a Preconstruction Manager
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
              Preconstruction Leadership Shapes Cost, Risk and Project Success
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Preconstruction Managers connect design intent with
                constructability, cost, schedule and procurement reality.
              </p>
              <p>
                The strongest leaders can build early budgets, guide design
                decisions, manage trade coverage, identify risk and maintain
                credibility with owners and internal project teams.
              </p>
              <p>
                RUDRON evaluates candidates against your actual sectors,
                delivery methods, project values, client expectations and level
                of leadership responsibility.
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
                "Design-Build Firms",
                "Construction Managers",
                "Specialty Contractors",
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
              Preconstruction Recruitment Across Major Markets
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
                Key Preconstruction Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor and market, but these
                capabilities are central to most preconstruction searches.
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
                Core Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Preconstruction Expertise
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong candidates combine estimating, design coordination,
                market knowledge, risk management and client leadership.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
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
                  icon: Ruler,
                  title: "Cost Planning",
                  description:
                    "Conceptual budgets, detailed estimates, benchmarking and escalation analysis.",
                },
                {
                  icon: Lightbulb,
                  title: "Value Engineering",
                  description:
                    "Identifying cost-effective alternatives without compromising project intent.",
                },
                {
                  icon: FileSearch,
                  title: "Risk & Scope Review",
                  description:
                    "Finding gaps, assumptions, exclusions and constructability concerns early.",
                },
                {
                  icon: Users,
                  title: "Client Leadership",
                  description:
                    "Presenting budgets, options, risks and recommendations with credibility.",
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
                Preconstruction Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports estimating, design review,
                procurement, scheduling and collaborative project planning.
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
              Preconstruction Leadership Roles
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
              Why Preconstruction Hiring Requires Specialization
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
              A Focused Preconstruction Manager Search
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
                Preconstruction Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test judgment, conceptual estimating,
                client communication, design coordination, risk and handoff.
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
                  "We define sectors, delivery methods, project values, team structure and client-facing expectations.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant preconstruction, estimating, design coordination and leadership experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant professionals, not a high volume of loosely matched resumes.",
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
              ["Estimator Recruitment", "/estimator-recruitment"],
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Mechanical PM Recruitment", "/mechanical-project-manager-recruitment"],
              ["Electrical PM Recruitment", "/electrical-project-manager-recruitment"],
              ["Commercial Recruitment", "/commercial"],
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
              Preconstruction Manager Recruitment FAQs
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
            Looking to Hire a Preconstruction Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, delivery methods, team structure,
            location and required level of leadership. RUDRON will help
            identify preconstruction professionals aligned with the way your
            organization plans and pursues work.
          </p>
            <HireTalentButton
            ariaLabel="Hire a Preconstruction Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a Preconstruction Search
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