import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Cuboid,
  HardHat,
  Layers3,
  MessageSquareText,
  MonitorCog,
  Network,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";
const PAGE_URL = `${SITE_URL}/bim-vdc-manager-recruitment`;

export const metadata: Metadata = {
  title: "BIM & VDC Manager Recruitment Specialists",
  description:
    "Hire experienced BIM Managers, VDC Managers, BIM Coordinators and digital construction leaders for commercial, healthcare, data center, industrial and MEP projects through RUDRON.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "BIM & VDC Manager Recruitment Specialists",
    description:
      "Specialist recruitment for BIM Managers, VDC Managers, BIM Coordinators and digital construction leaders.",
    images: [
      {
        url: `${SITE_URL}/images/recruitment/bim-vdc-manager.webp`,
        width: 1600,
        height: 900,
        alt: "BIM and VDC Manager recruitment specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM & VDC Manager Recruitment Specialists",
    description:
      "Hire experienced BIM and VDC professionals across commercial, healthcare, data center, industrial and MEP markets.",
    images: [`${SITE_URL}/images/recruitment/bim-vdc-manager.webp`],
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
      "BIM and VDC leaders experienced with mission-critical coordination, clash detection and fast-track delivery.",
  },
  {
    title: "Healthcare Construction",
    href: "/commercial/healthcare",
    description:
      "Digital construction professionals familiar with complex phasing, systems coordination and occupied facilities.",
  },
  {
    title: "Commercial Construction",
    href: "/commercial",
    description:
      "BIM and VDC leadership for offices, education, retail, hospitality, mixed-use and major commercial developments.",
  },
  {
    title: "Industrial Construction",
    href: "/industrial",
    description:
      "Digital coordination for manufacturing, process, warehouse, power and heavy industrial environments.",
  },
  {
    title: "Residential Construction",
    href: "/residential",
    description:
      "BIM leadership for multifamily, high-rise, student housing and senior housing developments.",
  },
  {
    title: "Civil Infrastructure",
    href: "/civil",
    description:
      "Model-based coordination for transportation, utilities, aviation and public infrastructure programs.",
  },
];

const responsibilities = [
  "Lead BIM and VDC strategy across projects and teams",
  "Manage model coordination and clash detection workflows",
  "Develop BIM execution plans and project standards",
  "Coordinate architectural, structural and MEP models",
  "Support constructability and installation planning",
  "Manage model federation and issue tracking",
  "Lead coordination meetings with project stakeholders",
  "Support prefabrication and field layout workflows",
  "Maintain model quality, naming and version control",
  "Train project teams on digital construction processes",
  "Support 4D sequencing and logistics planning",
  "Drive handoff from coordination to field execution",
];

const capabilities = [
  "Model Coordination",
  "Clash Detection",
  "BIM Execution Planning",
  "MEP Coordination",
  "Constructability Review",
  "4D Sequencing",
  "Field Layout",
  "Reality Capture",
  "Prefabrication Support",
  "Issue Tracking",
  "Model QA/QC",
  "Digital Handover",
];

const tools = [
  "Autodesk Revit",
  "Navisworks Manage",
  "Autodesk Construction Cloud",
  "BIM 360",
  "AutoCAD",
  "Revizto",
  "Synchro",
  "Bluebeam Revu",
  "Procore",
  "Trimble Connect",
  "Dynamo",
  "Solibri",
];

const hiringChallenges = [
  {
    title: "Technical Breadth",
    description:
      "Strong BIM and VDC leaders need more than software skills. They must understand construction sequencing, coordination and field execution.",
  },
  {
    title: "MEP Coordination Depth",
    description:
      "Data center, healthcare and industrial projects require advanced knowledge of mechanical, electrical, plumbing and controls coordination.",
  },
  {
    title: "Process Leadership",
    description:
      "The role often involves building standards, training teams and creating consistent workflows across multiple projects.",
  },
  {
    title: "Field Integration",
    description:
      "Successful leaders understand how models support layout, prefabrication, logistics, installation and project closeout.",
  },
  {
    title: "Stakeholder Communication",
    description:
      "BIM and VDC professionals must communicate clearly with design teams, project managers, superintendents and trade partners.",
  },
  {
    title: "Passive Candidate Market",
    description:
      "Experienced BIM and VDC Managers are often employed and may not be actively applying through job boards.",
  },
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We define project sectors, software, coordination scope, reporting structure, location and leadership expectations.",
  },
  {
    number: "02",
    title: "Targeted Market Search",
    description:
      "We identify professionals with relevant contractor, project, coordination and digital construction backgrounds.",
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Candidates are reviewed for software depth, model coordination, MEP knowledge, process leadership and field integration.",
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
  "Describe the most complex BIM or VDC project you have led.",
  "How do you develop and enforce a BIM execution plan?",
  "How do you manage clash detection and issue resolution?",
  "Describe your experience coordinating MEP systems.",
  "How do you support prefabrication and field installation?",
  "What is your approach to model QA/QC?",
  "How do you train project teams on BIM workflows?",
  "Describe your experience with 4D sequencing or logistics planning.",
  "How do you manage model ownership and version control?",
  "How do you integrate BIM with Procore or Autodesk Construction Cloud?",
  "Tell us about a coordination failure and how you resolved it.",
  "How do you measure BIM or VDC value on a project?",
];

const roleLevels = [
  {
    title: "BIM Coordinator",
    description:
      "Supports model development, clash detection, coordination meetings and issue tracking.",
  },
  {
    title: "Senior BIM Coordinator",
    description:
      "Leads discipline coordination, model QA/QC and complex project workflows.",
  },
  {
    title: "BIM/VDC Manager",
    description:
      "Owns digital construction strategy, standards, team leadership and project integration.",
  },
  {
    title: "Director of VDC",
    description:
      "Leads enterprise strategy, staffing, technology, standards and digital transformation.",
  },
];

const faqs = [
  {
    question: "Which BIM and VDC roles does RUDRON recruit?",
    answer:
      "We recruit BIM Coordinators, Senior BIM Coordinators, BIM Managers, VDC Managers, Directors of VDC and related digital construction professionals.",
  },
  {
    question: "Do you recruit MEP BIM professionals?",
    answer:
      "Yes. We support searches for mechanical, electrical, plumbing and multidisciplinary BIM coordination professionals.",
  },
  {
    question: "Which project sectors do you support?",
    answer:
      "We support data centers, healthcare, commercial, industrial, residential, civil infrastructure and MEP construction markets.",
  },
  {
    question: "Can RUDRON support confidential searches?",
    answer:
      "Yes. Confidential replacement, succession and leadership searches can be managed where discretion is required.",
  },
  {
    question: "Do you recruit across the United States?",
    answer:
      "Yes. We support local, relocation, travel-based and selected remote BIM and VDC searches across major U.S. markets.",
  },
  {
    question: "What information helps start a BIM or VDC search?",
    answer:
      "Useful details include project sectors, software stack, coordination scope, team structure, location, reporting line and compensation.",
  },
  {
    question: "Do you recruit passive candidates?",
    answer:
      "Yes. Many experienced BIM and VDC professionals are not actively applying, so targeted direct search is an important part of the process.",
  },
  {
    question: "Can you recruit for both general contractors and specialty contractors?",
    answer:
      "Yes. We support general contractors, developers, EPC firms, mechanical contractors, electrical contractors and other specialty organizations.",
  },
];

export default function BimVdcManagerRecruitmentPage() {
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
        name: "BIM and VDC Manager Recruitment",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "BIM and VDC Manager Recruitment",
    serviceType: [
      "BIM Manager Recruitment",
      "VDC Manager Recruitment",
      "BIM Coordinator Recruitment",
      "MEP BIM Recruitment",
      "Digital Construction Recruitment",
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
      "Specialist recruitment for BIM Managers, VDC Managers, BIM Coordinators and digital construction leaders.",
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
              "url('/images/recruitment/bim-vdc-manager.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/94 to-[#07111F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Digital Construction Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1 className="text-[38px] font-bold leading-[1.06] sm:text-[52px] lg:text-[68px]">
              BIM & VDC Manager
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON helps contractors, developers, EPC firms and specialty
              contractors hire digital construction leaders who can improve
              coordination, constructability, prefabrication and field
              execution through BIM and VDC.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
            <HireTalentButton
                ariaLabel="Hire a BIM/VDC Manager"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Hire a BIM/VDC Manager
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
              BIM and VDC Leadership Connects Design With Construction
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                BIM and VDC professionals improve coordination, reduce rework
                and help project teams solve problems before they reach the
                field.
              </p>
              <p>
                The strongest leaders combine software expertise with practical
                knowledge of sequencing, MEP systems, constructability,
                prefabrication and field operations.
              </p>
              <p>
                RUDRON evaluates candidates against your actual project sectors,
                software environment, coordination scope, team structure and
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
              BIM and VDC Recruitment Across Major Markets
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
                Key BIM and VDC Manager Responsibilities
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Responsibilities vary by contractor and market, but these
                capabilities are central to most BIM and VDC searches.
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
                BIM and VDC Expertise
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong candidates combine digital coordination, construction
                knowledge, process leadership and field integration.
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
                  icon: Cuboid,
                  title: "Model Coordination",
                  description:
                    "Federated models, clash detection, issue resolution and interdisciplinary alignment.",
                },
                {
                  icon: Workflow,
                  title: "Process Leadership",
                  description:
                    "BIM execution plans, standards, training and repeatable digital workflows.",
                },
                {
                  icon: Network,
                  title: "MEP Integration",
                  description:
                    "Mechanical, electrical, plumbing and controls coordination for complex projects.",
                },
                {
                  icon: MonitorCog,
                  title: "Field Technology",
                  description:
                    "Reality capture, layout, prefabrication, issue tracking and digital handover.",
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
                BIM and VDC Software
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                Platform experience supports coordination, issue management,
                field integration and collaborative digital delivery.
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
              BIM and VDC Leadership Roles
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
              Why BIM and VDC Hiring Requires Specialization
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
              A Focused BIM and VDC Search
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
                BIM and VDC Manager Interview Questions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                Strong interviews test software depth, coordination judgment,
                construction knowledge, process leadership and field impact.
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
                  "We define project sectors, software, coordination scope, team structure and field integration needs.",
              },
              {
                icon: SearchCheck,
                title: "Targeted Candidate Assessment",
                description:
                  "Profiles are reviewed for relevant BIM, VDC, MEP coordination, process and leadership experience.",
              },
              {
                icon: ShieldCheck,
                title: "Quality-Focused Presentation",
                description:
                  "The goal is a concise shortlist of relevant digital construction professionals.",
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
              ["Preconstruction Recruitment", "/preconstruction-manager-recruitment"],
              ["Mechanical PM Recruitment", "/mechanical-project-manager-recruitment"],
              ["Electrical PM Recruitment", "/electrical-project-manager-recruitment"],
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
              BIM and VDC Manager Recruitment FAQs
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
            Looking to Hire a BIM or VDC Manager?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#07111F]/80 sm:text-[17px]">
            Share your project sectors, software environment, coordination scope,
            team structure and required level of leadership. RUDRON will help
            identify digital construction professionals aligned with your needs.
          </p>
            <HireTalentButton
                ariaLabel="Hire a BIM/VDC Manager"
            className="group mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#07111F] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Start a BIM/VDC Search
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