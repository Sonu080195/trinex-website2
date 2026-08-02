import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  FileSearch,
  HardHat,
  Layers3,
  MessageSquareText,
  Ruler,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/estimator-recruitment`;

export const metadata: Metadata = {
  title: "Construction Estimator Recruitment Specialists",
  description:
    "Hire experienced construction estimators for commercial, industrial, civil, residential, healthcare, data center, mechanical and electrical projects through RUDRON.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Construction Estimator Recruitment Specialists",
    description:
      "Specialist recruitment for construction estimators, senior estimators, chief estimators and preconstruction professionals.",
    images: [
      {
        url: `${SITE_URL}/Commercial.webp`,
        width: 1200,
        height: 630,
        alt: "Construction estimator recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Estimator Recruitment Specialists",
    description:
      "Hire experienced construction estimators across commercial, industrial, civil, residential and MEP markets.",
    images: [`${SITE_URL}/Commercial.webp`],
  },
  robots: { index: true, follow: true },
};

const sectors = [
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Estimators for healthcare, education, offices, retail, hospitality and complex commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Estimating talent for manufacturing, warehouse, power, wastewater, process and distribution projects.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Estimators for multifamily, high-rise, student housing, senior housing and single-family construction.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Heavy civil estimators for roadway, bridge, rail, tunnel, airport and public infrastructure programs.",
  },
  {
    title: "Data Centers",
    href: "/commercial/data-centers",
    description:
      "Mission-critical estimators experienced with fast-track, high-value and technically complex project scopes.",
  },
  {
    title: "Healthcare",
    href: "/commercial/healthcare",
    description:
      "Estimators familiar with occupied facilities, regulatory requirements and specialized healthcare systems.",
  },
];

const responsibilities = [
  "Review drawings, specifications and bid documents",
  "Prepare quantity takeoffs and scope breakdowns",
  "Develop conceptual, schematic and detailed estimates",
  "Solicit and evaluate subcontractor and supplier pricing",
  "Build labor, material, equipment and indirect cost models",
  "Identify exclusions, assumptions and project risks",
  "Support value engineering and cost-saving alternatives",
  "Prepare bid summaries, clarifications and proposals",
  "Maintain historical cost data and estimating databases",
  "Coordinate handoff from preconstruction to operations",
  "Support change-order pricing and budget reconciliation",
  "Participate in client, design and pre-bid meetings",
];

const tools = [
  "Bluebeam Revu",
  "On-Screen Takeoff",
  "Destini Estimator",
  "Sage Estimating",
  "Procore",
  "BuildingConnected",
  "PlanSwift",
  "Trimble Accubid",
  "HeavyBid",
  "Microsoft Excel",
  "Navisworks",
  "Revit",
];

const hiringChallenges = [
  {
    title: "Project-Type Specialization",
    description:
      "An estimator successful in general commercial work may not automatically understand healthcare, mission-critical, industrial, heavy civil or self-perform MEP pricing.",
  },
  {
    title: "Subcontractor Market Knowledge",
    description:
      "Strong estimators understand local trade coverage, bid behavior, supplier relationships and the practical availability of labor and materials.",
  },
  {
    title: "Conceptual Estimating Ability",
    description:
      "Early-stage estimates require judgment, historical benchmarking and the ability to price incomplete documents without creating unmanaged risk.",
  },
  {
    title: "Speed Without Losing Accuracy",
    description:
      "Bid deadlines can be aggressive, but rushed scope reviews, missed exclusions and poor assumptions can create major financial exposure.",
  },
  {
    title: "Communication With Operations",
    description:
      "Estimators must explain scope, risks, buyout strategy and assumptions clearly during turnover to project teams.",
  },
  {
    title: "Retention and Succession",
    description:
      "Experienced senior estimators and chief estimators hold valuable institutional knowledge and are difficult to replace quickly.",
  },
];

const process = [
  ["01", "Requirement Discovery", "We define the project sectors, estimating level, software, delivery methods, location, compensation and reporting structure."],
  ["02", "Targeted Market Search", "We identify professionals with relevant contractor, project, trade and estimating backgrounds."],
  ["03", "Technical Screening", "Candidates are reviewed for takeoff ability, project values, bid volume, software, delivery methods and scope ownership."],
  ["04", "Candidate Presentation", "You receive focused profiles aligned with the actual role instead of a broad, unqualified resume list."],
  ["05", "Interview Support", "We coordinate interviews, maintain candidate engagement and help clarify expectations on both sides."],
  ["06", "Offer and Closing", "We support compensation discussions, notice periods, relocation requirements and offer acceptance."],
] as const;

const interviewQuestions = [
  "What project types and contract values have you estimated?",
  "How do you approach conceptual estimating with incomplete drawings?",
  "Which takeoff and estimating platforms do you use most often?",
  "How do you evaluate subcontractor coverage and bid completeness?",
  "Describe a bid where you identified a major scope or pricing risk.",
  "How do you build labor productivity assumptions?",
  "What is your approach to value engineering?",
  "How do you manage multiple bid deadlines at the same time?",
  "How do you document exclusions, clarifications and assumptions?",
  "Describe your experience with negotiated, hard-bid and design-build work.",
  "How do you hand off a successful estimate to operations?",
  "What historical cost data do you maintain and how do you use it?",
];

const estimatorLevels = [
  ["Estimator", "Supports quantity takeoffs, scope review, subcontractor outreach, pricing and bid preparation."],
  ["Senior Estimator", "Leads larger or more complex pursuits, validates risk, mentors junior staff and supports client presentations."],
  ["Preconstruction Manager", "Combines estimating, design coordination, value engineering, scheduling and client-facing preconstruction leadership."],
  ["Chief Estimator", "Owns estimating strategy, standards, staffing, bid review, risk controls and major pursuit decisions."],
] as const;

const faqs = [
  ["Which estimator roles does RUDRON recruit?", "We recruit Estimators, Senior Estimators, Lead Estimators, Chief Estimators, Preconstruction Managers, Preconstruction Directors and related cost-planning professionals."],
  ["Do you recruit mechanical and electrical estimators?", "Yes. We support searches for mechanical, piping, plumbing, HVAC and electrical estimators as well as general construction and heavy civil estimators."],
  ["Can RUDRON support confidential estimator searches?", "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required."],
  ["Which construction sectors do you support?", "We support commercial, industrial, residential, civil infrastructure, healthcare, data centers, mission critical, power, wastewater and other construction markets."],
  ["Do you recruit estimators across the United States?", "Yes. We support local, relocation, travel-based and selected remote estimating searches across major U.S. construction markets."],
  ["What information helps start an estimator search?", "The most useful details include project sectors, typical contract values, delivery methods, software, trade focus, bid volume, team structure, location and compensation range."],
  ["Do you recruit candidates who are not actively applying?", "Yes. Many experienced estimators are passive candidates, so targeted direct search is an important part of the recruitment process."],
  ["Can you recruit for both general contractors and subcontractors?", "Yes. We support general contractors, developers, EPC firms, mechanical contractors, electrical contractors and other specialty contractors."],
] as const;

export default function EstimatorRecruitmentPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Employers", item: `${SITE_URL}/employers` },
      { "@type": "ListItem", position: 3, name: "Estimator Recruitment", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Construction Estimator Recruitment",
    serviceType: [
      "Construction Estimator Recruitment",
      "Senior Estimator Recruitment",
      "Chief Estimator Recruitment",
      "Preconstruction Recruitment",
      "Mechanical Estimator Recruitment",
      "Electrical Estimator Recruitment",
    ],
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
    ],
    url: PAGE_URL,
    description:
      "Specialist recruitment for construction estimators, senior estimators, chief estimators and preconstruction professionals.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="overflow-hidden bg-[#07111F] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Commercial.webp')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/25" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[860px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">Construction Estimator Recruitment</p><span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Construction Estimator
              <br />
              <span className="text-[#C89B3C]">Recruitment Specialists</span>
            </h1>

            <p className="mt-7 max-w-[780px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps general contractors, developers, EPC firms, mechanical contractors, electrical contractors and heavy civil organizations hire estimators who understand scope, pricing, risk, constructability and competitive bid strategy.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <HireTalentButton
                ariaLabel="Hire a Construction Estimator"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]">
                Hire Construction Estimators
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </HireTalentButton>

              <Link href="/jobs" className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#C89B3C]/50 hover:bg-white/10">
                Browse Current Jobs
                <ArrowRight size={17} className="text-[#C89B3C] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Specialist Search Expertise</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Estimating Talent Shapes Project Profitability Before Work Begins</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>Construction estimators influence which projects a company pursues, how risk is priced, whether scope is understood and how effectively a successful bid transitions into operations.</p>
              <p>The strongest estimator is not simply fast with takeoffs. They understand project delivery, subcontractor coverage, labor productivity, material volatility, design gaps, exclusions and the commercial consequences of every assumption.</p>
              <p>RUDRON evaluates candidates against your actual project sectors, contract values, estimating platforms, delivery methods and level of ownership rather than treating every estimator role as interchangeable.</p>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Organizations We Support</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["General Contractors", "Developers", "EPC Firms", "Mechanical Contractors", "Electrical Contractors", "Heavy Civil Contractors", "Specialty Subcontractors", "Construction Managers"].map((item) => (
                <div key={item} className="rounded-[12px] border border-white/10 bg-[#07111F]/70 px-4 py-4 text-sm text-gray-200">
                  <span className="mr-2 text-[#C89B3C]">◆</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Sector Coverage</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">Estimator Recruitment Across Major Construction Markets</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Link key={sector.title} href={sector.href} className="group rounded-[22px] border border-black/[0.06] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-[#C89B3C]">0{index + 1}</span>
                  <ArrowRight size={18} className="text-[#C89B3C] transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-7 text-xl font-bold">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{sector.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Role Scope</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Key Construction Estimator Responsibilities</h2>
            <p className="mt-5 text-[15px] leading-8 text-gray-400">Responsibilities vary by contractor, market and seniority, but these capabilities are central to most estimator searches.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[14px] border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-gray-200">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#C89B3C]" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Technical Platforms</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Estimating Software and Tools</h2>
            <p className="mt-5 text-[15px] leading-8 text-gray-400">Software does not replace estimating judgment, but platform experience can be critical for team integration, bid speed and reporting consistency.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => <div key={tool} className="rounded-[12px] border border-white/10 bg-[#07111F] px-4 py-4 text-sm text-gray-200">{tool}</div>)}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [Ruler, "Quantity Takeoffs", "Accurate measurement and scope development from drawings, models and specifications."],
              [Calculator, "Cost Modelling", "Labor, material, equipment, indirects, escalation and contingency analysis."],
              [Building2, "Constructability", "Recognizing design gaps, sequencing concerns and scope coordination risks."],
              [BarChart3, "Bid Strategy", "Balancing competitiveness, risk, market intelligence and commercial discipline."],
            ].map(([Icon, title, description]) => (
              <article key={String(title)} className="rounded-[20px] border border-white/10 bg-[#07111F] p-6">
                <Icon size={26} className="text-[#C89B3C]" strokeWidth={1.7} />
                <h3 className="mt-5 text-lg font-semibold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{String(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Career Levels</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Estimating and Preconstruction Leadership</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {estimatorLevels.map(([title, description]) => (
              <article key={title} className="rounded-[22px] border border-black/[0.06] bg-white p-7">
                <Layers3 size={24} className="text-[#C89B3C]" strokeWidth={1.7} />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Search Challenges</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">Why Construction Estimator Hiring Requires Specialization</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hiringChallenges.map((item, index) => (
              <article key={item.title} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-7">
                <span className="text-sm font-bold text-[#C89B3C]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Recruitment Process</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A Focused Estimator Search Process</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([number, title, description]) => (
              <article key={number} className="rounded-[22px] border border-white/10 bg-[#07111F] p-7">
                <p className="text-3xl font-bold text-[#C89B3C]">{number}</p>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F0] py-20 text-[#07111F]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Interview Guidance</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Construction Estimator Interview Questions</h2>
            <p className="mt-5 text-[15px] leading-8 text-gray-600">Strong interviews test how candidates think about scope, uncertainty, pricing, risk and handoff—not only whether they can operate estimating software.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {interviewQuestions.map((question) => (
              <div key={question} className="flex items-start gap-3 rounded-[16px] border border-black/[0.06] bg-white p-5 text-sm leading-7 text-gray-700">
                <MessageSquareText size={18} className="mt-1 shrink-0 text-[#C89B3C]" />{question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            [FileSearch, "Detailed Role Qualification", "We define trade focus, project sectors, bid values, software and required ownership before beginning the search."],
            [SearchCheck, "Targeted Candidate Assessment", "Profiles are reviewed for relevant project, contractor, delivery-method and estimating experience."],
            [ShieldCheck, "Quality-Focused Presentation", "The goal is a concise shortlist of relevant professionals, not a high volume of loosely matched resumes."],
          ].map(([Icon, title, description]) => (
            <article key={String(title)} className="rounded-[24px] border border-[#C89B3C]/20 bg-[#C89B3C]/[0.05] p-8">
              <Icon size={30} className="text-[#C89B3C]" strokeWidth={1.7} />
              <h3 className="mt-6 text-xl font-semibold">{String(title)}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">{String(description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Related Recruitment Services</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Explore Related Construction Searches</h2>
            </div>
            <Link href="/employers" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C89B3C]">
              View Employer Solutions <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Superintendent Recruitment", "/superintendent-recruitment"],
              ["Commercial Recruitment", "/commercial"],
              ["Industrial Recruitment", "/industrial"],
              ["Data Center Recruitment", "/commercial/data-centers"],
              ["Healthcare Recruitment", "/commercial/healthcare"],
            ].map(([title, href]) => (
              <Link key={title} href={href} className="group rounded-[18px] border border-white/10 bg-[#07111F] p-6 transition hover:-translate-y-1 hover:border-[#C89B3C]/40">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{title}</h3>
                  <ArrowRight size={17} className="shrink-0 text-[#C89B3C] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Construction Estimator Recruitment FAQs</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[16px] border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#C89B3C]/30">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-white">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-gray-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C89B3C] py-20 text-[#07111F]">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <HardHat size={48} className="mx-auto" strokeWidth={1.5} />
          <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Looking to Hire a Construction Estimator?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">Share your sector, project profile, location, software requirements and level of seniority. RUDRON will help identify estimator talent aligned with the way your organization bids and delivers work.</p>
          <HireTalentButton
                ariaLabel="Hire a Construction Estimator" 
          className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Start an Estimator Search 
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </HireTalentButton>
        </div>
      </section>

    </main>
  );
}