import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileWarning,
  HardHat,
  Layers3,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Siren,
  Stethoscope,
  Users,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/safety-manager-recruitment`;

export const metadata: Metadata = {
  title: "Construction Safety Manager Recruitment Specialists",
  description:
    "Hire experienced Construction Safety Managers, EHS Managers, Safety Directors and site safety leaders for commercial, industrial, healthcare, data center, civil and MEP projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Construction Safety Manager Recruitment Specialists",
    description:
      "Specialist recruitment for Construction Safety Managers, EHS leaders, Safety Directors and site safety professionals.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/safety-manager.webp`,
        width: 1600,
        height: 900,
        alt: "Construction Safety Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Safety Manager Recruitment Specialists",
    description:
      "Hire experienced construction safety and EHS professionals across commercial, industrial, healthcare, data center, civil and MEP markets.",
    images: [`${SITE_URL}/images/recruitment/safety-manager.webp`],
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
      "Safety leaders experienced with mission-critical environments, energized systems, confined spaces and fast-track delivery.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Professionals familiar with occupied facilities, infection-control requirements, phasing and sensitive environments.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "Safety management for offices, education, hospitality, retail, mixed-use and large commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "EHS leadership for manufacturing, process, power, warehouse and heavy industrial environments.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Safety professionals for transportation, bridges, roadways, airports, utilities and public infrastructure programs.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "Safety management for multifamily, high-rise, student housing, senior housing and residential developments.",
  },
];

const responsibilities = [
  "Develop and implement site-specific safety plans",
  "Lead daily safety inspections and field observations",
  "Manage toolbox talks and safety orientation",
  "Investigate incidents, near misses and root causes",
  "Coordinate corrective actions and follow-up",
  "Monitor subcontractor safety performance",
  "Maintain OSHA and project safety documentation",
  "Support emergency planning and response",
  "Lead audits, compliance reviews and reporting",
  "Manage permits, JHAs and high-risk activities",
  "Train teams on safe-work practices",
  "Drive continuous improvement and safety culture",
];

const capabilities = [
  "Site Safety Planning",
  "OSHA Compliance",
  "Incident Investigation",
  "Root-Cause Analysis",
  "Job Hazard Analysis",
  "Emergency Response",
  "Subcontractor Safety",
  "Safety Audits",
  "Training & Orientation",
  "Risk Assessment",
  "High-Risk Work Control",
  "Safety Culture Leadership",
];

const tools = [
  "Procore",
  "iAuditor",
  "SafetyCulture",
  "HammerTech",
  "Bluebeam Revu",
  "Microsoft Excel",
  "SharePoint",
  "Document Control Systems",
  "Incident Reporting Platforms",
  "Learning Management Systems",
  "Autodesk Construction Cloud",
  "BIM 360",
];

const hiringChallenges = [
  {
    title: "Project-Specific Risk",
    description:
      "Data centers, healthcare, industrial, civil and high-rise work each create different hazards, compliance demands and emergency-planning needs.",
  },
  {
    title: "Field Credibility",
    description:
      "Strong Safety Managers must enforce standards while maintaining trust with superintendents, foremen and trade partners.",
  },
  {
    title: "Regulatory Knowledge",
    description:
      "The role requires practical knowledge of OSHA, project-specific policies, permits and documentation requirements.",
  },
  {
    title: "Incident Leadership",
    description:
      "Safety leaders must respond calmly, investigate thoroughly and drive corrective action without losing field momentum.",
  },
  {
    title: "Culture Building",
    description:
      "The strongest professionals influence behavior, coach teams and make safety part of daily operations rather than a paperwork exercise.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced Safety Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, risk profile, compliance needs, location, reporting structure and compensation.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, OSHA and field-safety backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for audits, incident response, training, documentation, field leadership and safety culture.",
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive focused profiles aligned with the actual project risks and organizational needs.",
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
  "Describe the most complex safety program you have managed.",
  "How do you build a site-specific safety plan?",
  "How do you gain credibility with field teams?",
  "Describe your approach to incident investigation.",
  "How do you manage subcontractor safety performance?",
  "Tell us about a major hazard you identified before an incident occurred.",
  "How do you handle repeated noncompliance?",
  "Describe your experience with OSHA inspections or audits.",
  "How do you manage high-risk work and permitting?",
  "What safety metrics do you track?",
  "How do you improve safety culture across a project?",
  "Which safety platforms and reporting tools do you use?",
];

const roleLevels = [
  {
    title: "Safety Coordinator",
    description:
      "Supports inspections, documentation, orientations, toolbox talks and corrective-action tracking.",
  },
  {
    title: "Site Safety Manager",
    description:
      "Owns daily field safety, compliance, incident response, training and subcontractor performance.",
  },
  {
    title: "Senior Safety Manager",
    description:
      "Leads larger or higher-risk projects, mentors teams and manages complex safety programs.",
  },
  {
    title: "Safety Director",
    description:
      "Oversees enterprise standards, staffing, audits, training and safety performance across multiple projects.",
  },
];

const faqs = [
  {
    question: "Which safety roles does RUDRON recruit?",
    answer:
      "We recruit Safety Coordinators, Site Safety Managers, Senior Safety Managers, EHS Managers, Safety Directors and related construction safety professionals.",
  },
  {
    question: "Do you recruit data center and industrial safety professionals?",
    answer:
      "Yes. We support high-risk and mission-critical searches involving energized systems, heavy equipment, confined spaces, process environments and complex site logistics.",
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
      "Yes. We support local, relocation and travel-based Construction Safety Manager searches across major U.S. markets.",
  },
  {
    question: "What information helps start a Safety Manager search?",
    answer:
      "Useful details include project sectors, risk profile, OSHA requirements, team structure, location, travel expectations, reporting line and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced safety professionals are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both contractors and owners?",
    answer:
      "Yes. We support general contractors, specialty contractors, EPC firms, developers, owners, consultants and facilities organizations.",
  },
];

export default function SafetyManagerRecruitmentPage() {
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
        name: "Safety Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Construction Safety Manager Recruitment",
    serviceType: [
      "Construction Safety Manager Recruitment",
      "EHS Manager Recruitment",
      "Safety Director Recruitment",
      "Data Center Safety Recruitment",
      "Industrial Safety Recruitment",
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
      "Specialist recruitment for Construction Safety Managers, EHS Managers, Safety Directors and site safety professionals.",
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
              "url('/images/recruitment/safety-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Construction Safety Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              Construction Safety Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps contractors, developers, EPC firms and owners hire
              safety leaders who can reduce risk, strengthen compliance and
              build safer field cultures across complex construction projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

            <HireTalentButton
            ariaLabel="Hire a Safety Manager"
            className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
                        >
            Hire a Safety Manager

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
              Strong Safety Leadership Protects People, Projects and Reputation
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Construction Safety Managers influence daily decisions, field
                behavior and how effectively project teams identify and control
                risk.
              </p>
              <p>
                The strongest professionals combine regulatory knowledge,
                communication, incident leadership, documentation discipline
                and practical field credibility.
              </p>
              <p>
                RUDRON evaluates candidates against your project sectors, risk
                profile, compliance requirements and level of leadership
                responsibility.
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
                "Safety Consultants",
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
              Safety Recruitment Across Major Construction Markets
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
                Key Construction Safety Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by project and market, but these
                capabilities are central to most safety searches.
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
                Construction Safety Expertise
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong candidates combine compliance, risk control, field
                leadership, training and incident response.
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
                  icon: ShieldCheck,
                  title: "Risk Control",
                  description:
                    "Hazard recognition, planning, permits, JHAs and high-risk work controls.",
                },
                {
                  icon: FileWarning,
                  title: "Incident Leadership",
                  description:
                    "Response, investigation, root-cause analysis and corrective action.",
                },
                {
                  icon: Users,
                  title: "Field Engagement",
                  description:
                    "Coaching, orientations, toolbox talks and subcontractor accountability.",
                },
                {
                  icon: Siren,
                  title: "Emergency Readiness",
                  description:
                    "Emergency planning, drills, reporting and coordination with project teams.",
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
                Safety Software and Tools
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports inspections, incident reporting,
                training, documentation and compliance tracking.
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
              Construction Safety Leadership Roles
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
              Why Safety Hiring Requires Specialization
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
              A Focused Safety Manager Search
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
                Construction Safety Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test risk judgment, field credibility,
                incident leadership, compliance and safety culture.
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
                  "We define project sectors, risk profile, OSHA requirements, reporting structure and leadership needs.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant field safety, compliance, incident response and culture-building experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant safety professionals.",
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
              ["QA/QC Recruitment", "/qa-qc-manager-recruitment"],
              ["Superintendent Recruitment", "/superintendent-recruitment"],
              ["Project Manager Recruitment", "/project-manager-recruitment"],
              ["Commissioning Recruitment", "/commissioning-manager-recruitment"],
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
              Construction Safety Manager Recruitment FAQs
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
            Looking to Hire a Construction Safety Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, risk profile, compliance requirements,
            location and required level of leadership. RUDRON will help
            identify safety professionals aligned with your project.
          </p>
        <HireTalentButton
        ariaLabel="Hire a Safety Manager"
        className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
        Start a Safety Manager Search

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