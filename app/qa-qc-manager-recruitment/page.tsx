import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  Layers3,
  MessageSquareText,
  Microscope,
  SearchCheck,
  ShieldCheck,
  TestTube2,
  Wrench,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/qa-qc-manager-recruitment`;

export const metadata: Metadata = {
  title: "QA/QC Manager Recruitment Specialists",
  description:
    "Hire experienced QA/QC Managers, Quality Managers, Inspectors and construction quality leaders for commercial, industrial, healthcare, data center, civil and MEP projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "QA/QC Manager Recruitment Specialists",
    description:
      "Specialist recruitment for QA/QC Managers, Quality Managers, Inspectors and construction quality leaders.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/qa-qc-manager.webp`,
        width: 1600,
        height: 900,
        alt: "QA QC Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QA/QC Manager Recruitment Specialists",
    description:
      "Hire experienced QA/QC and construction quality professionals across commercial, industrial, healthcare, data center, civil and MEP markets.",
    images: [`${SITE_URL}/images/recruitment/qa-qc-manager.webp`],
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
      "Quality leaders experienced with mission-critical systems, turnover documentation, inspections and zero-defect delivery.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "QA/QC professionals familiar with hospitals, laboratories, occupied facilities, compliance and complex closeout.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Quality management for offices, education, hospitality, retail, mixed-use and major commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "QA/QC leadership for manufacturing, process, power, warehouse and heavy industrial environments.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Quality professionals for transportation, bridges, roadways, utilities, airports and public infrastructure programs.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Quality management for multifamily, high-rise, student housing, senior housing and residential developments.",
  },
];

const responsibilities = [
  "Develop and implement project quality plans",
  "Lead inspections, audits and quality-control activities",
  "Review drawings, specifications and submittals",
  "Manage inspection and test plans",
  "Track nonconformance reports and corrective actions",
  "Coordinate with field teams, subcontractors and inspectors",
  "Maintain quality records and turnover documentation",
  "Support material verification and receiving inspections",
  "Manage punch lists and closeout quality",
  "Monitor workmanship and installation standards",
  "Support owner, engineer and regulatory inspections",
  "Drive lessons learned and continuous improvement",
];

const capabilities = [
  "Quality Management Plans",
  "Inspection & Test Plans",
  "Nonconformance Reporting",
  "Corrective Action",
  "Material Verification",
  "Weld Inspection",
  "Concrete Inspection",
  "MEP Quality Control",
  "Turnover Documentation",
  "Audit Preparation",
  "Punch List Management",
  "Continuous Improvement",
];

const tools = [
  "Procore",
  "Bluebeam Revu",
  "Autodesk Construction Cloud",
  "BIM 360",
  "Microsoft Excel",
  "SharePoint",
  "iAuditor",
  "PlanGrid",
  "Navisworks",
  "Revit",
  "Document Control Systems",
  "Quality Management Platforms",
];

const hiringChallenges = [
  {
    title: "Sector-Specific Standards",
    description:
      "Healthcare, data center, industrial, civil and MEP projects each require different codes, documentation and inspection experience.",
  },
  {
    title: "Field Credibility",
    description:
      "Strong QA/QC leaders must enforce standards while maintaining productive relationships with operations and trade partners.",
  },
  {
    title: "Documentation Discipline",
    description:
      "Quality programs depend on accurate records, inspections, test reports, nonconformance tracking and closeout documentation.",
  },
  {
    title: "Technical Breadth",
    description:
      "The role may require knowledge across structural, architectural, mechanical, electrical, piping and civil scopes.",
  },
  {
    title: "Corrective Action Leadership",
    description:
      "Quality Managers must identify root causes, drive resolution and prevent recurring defects without delaying delivery.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced QA/QC Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, quality scope, technical requirements, location, reporting structure and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, inspection and quality-management backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for quality plans, inspections, documentation, nonconformance management and field leadership.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual quality scope and project environment.",
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
  "Describe the most complex quality program you have managed.",
  "How do you develop a project-specific quality plan?",
  "How do you manage inspection and test plans?",
  "Describe your approach to nonconformance reports and corrective action.",
  "How do you maintain field credibility while enforcing standards?",
  "What quality records do you require for turnover?",
  "Describe your experience with MEP or mission-critical quality control.",
  "How do you coordinate owner, engineer and third-party inspections?",
  "Tell us about a recurring defect and how you eliminated it.",
  "How do you manage punch lists and closeout quality?",
  "Which quality platforms and documentation tools do you use?",
  "How do you measure quality performance across a project?",
];

const roleLevels = [
  {
    title: "Quality Inspector",
    description:
      "Performs field inspections, verifies installations, documents findings and supports corrective actions.",
  },
  {
    title: "QA/QC Engineer",
    description:
      "Supports quality plans, testing, documentation, audits, inspections and technical compliance.",
  },
  {
    title: "QA/QC Manager",
    description:
      "Owns project quality strategy, inspections, reporting, nonconformance management and turnover readiness.",
  },
  {
    title: "Director of Quality",
    description:
      "Leads enterprise standards, staffing, audits, training and quality performance across multiple projects.",
  },
];

const faqs = [
  {
    question: "Which QA/QC roles does RUDRON recruit?",
    answer:
      "We recruit Quality Inspectors, QA/QC Engineers, QA/QC Managers, Quality Managers, Directors of Quality and related construction quality professionals.",
  },
  {
    question: "Do you recruit MEP and data center quality professionals?",
    answer:
      "Yes. We support searches involving mechanical, electrical, piping, mission-critical and integrated systems quality control.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support data centers, healthcare, commercial, industrial, civil infrastructure, residential, power, wastewater and other complex construction markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation and travel-based QA/QC Manager searches across major U.S. markets.",
  },
  {
    question: "What information helps start a QA/QC search?",
    answer:
      "Useful details include project sectors, technical scope, inspection requirements, standards, location, reporting structure, travel expectations and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced quality professionals are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both contractors and owners?",
    answer:
      "Yes. We support general contractors, specialty contractors, EPC firms, developers, owners, consultants and facilities organizations.",
  },
];

export default function QaQcManagerRecruitmentPage() {
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
        name: "QA/QC Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "QA/QC Manager Recruitment",
    serviceType: [
      "QA/QC Manager Recruitment",
      "Quality Manager Recruitment",
      "Construction Quality Recruitment",
      "MEP Quality Recruitment",
      "Data Center Quality Recruitment",
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
      "Specialist recruitment for QA/QC Managers, Quality Managers, Inspectors and construction quality leaders.",
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
              "url('/images/recruitment/qa-qc-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Construction Quality Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              QA/QC Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps contractors, owners, EPC firms and specialty
              organizations hire quality leaders who can protect standards,
              reduce rework, manage inspections and deliver complete,
              documented turnover.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
                <HireTalentButton
                ariaLabel="Hire a QA/QC Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
                >
                Hire a QA/QC Manager

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
              Strong Quality Leadership Protects Delivery, Reputation and Margin
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                QA/QC Managers provide the structure, documentation and field
                oversight required to prevent defects and support reliable
                turnover.
              </p>
              <p>
                The strongest professionals combine technical knowledge with
                inspection discipline, communication, root-cause analysis and
                the ability to influence field teams.
              </p>
              <p>
                RUDRON evaluates candidates against your project sectors,
                technical scope, standards, documentation requirements and
                level of leadership responsibility.
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
                "Quality Consultants",
                "Facilities Teams",
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
              QA/QC Recruitment Across Major Construction Markets
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
                Key QA/QC Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by project and market, but these
                capabilities are central to most construction quality searches.
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
                Construction Quality Expertise
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong candidates combine technical inspection, documentation,
                corrective action and field leadership.
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
                  icon: FileCheck2,
                  title: "Quality Planning",
                  description:
                    "Project plans, inspection criteria, hold points, test requirements and documentation.",
                },
                {
                  icon: Microscope,
                  title: "Inspection & Testing",
                  description:
                    "Verification of materials, installation, workmanship and system compliance.",
                },
                {
                  icon: Wrench,
                  title: "Corrective Action",
                  description:
                    "Root-cause analysis, deficiency tracking, repair verification and prevention.",
                },
                {
                  icon: BadgeCheck,
                  title: "Turnover Quality",
                  description:
                    "Complete records, punch-list control, closeout documentation and owner acceptance.",
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
                QA/QC Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports inspections, issue tracking,
                documentation, reporting and turnover.
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
              Construction Quality Leadership Roles
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
              Why QA/QC Hiring Requires Specialization
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
              A Focused QA/QC Manager Search
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
                QA/QC Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test technical judgment, inspection
                discipline, corrective action and field leadership.
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
                  "We define project sectors, technical scope, inspection requirements, standards and reporting needs.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant quality plans, inspections, documentation and corrective-action experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant quality professionals.",
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
              ["Commissioning Recruitment", "/commissioning-manager-recruitment"],
              ["Superintendent Recruitment", "/superintendent-recruitment"],
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["BIM/VDC Recruitment", "/bim-vdc-manager-recruitment"],
              ["Data Center Recruitment", "/commercial/data-centers"],
              ["Industrial Recruitment", "/industrial"],
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
              QA/QC Manager Recruitment FAQs
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
            Looking to Hire a QA/QC Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, technical scope, inspection standards,
            location and required level of leadership. RUDRON will help
            identify quality professionals aligned with your project.
          </p>
            <HireTalentButton
            ariaLabel="Hire a QA/QC Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a QA/QC Search

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