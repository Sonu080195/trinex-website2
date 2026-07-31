import type { Metadata } from "next";
import Link from "next/link";
import SubpageCTA from "@/components/SubpageCTA";

const SITE_URL = "https://www.rudrongts.com";

export const metadata: Metadata = {
  title: "Residential Construction Recruitment Specialists",
  description:
    "RUDRON recruits Project Managers, Superintendents, Estimators, Preconstruction and Operations professionals for multifamily, single-family, high-rise, student and senior housing projects.",
  alternates: {
    canonical: `${SITE_URL}/residential`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/residential`,
    title: "Residential Construction Recruitment Specialists",
    description:
      "Specialist recruitment for residential developers, general contractors, builders and construction management firms.",
    images: [
      {
        url: `${SITE_URL}/Residential.webp`,
        width: 1200,
        height: 630,
        alt: "Residential construction recruitment specialists",
      },
    ],
  },
};

const sectors = [
  {
    title: "Multifamily",
    href: "/residential/multi-family",
    description:
      "Recruitment for garden-style, podium, wrap and large-scale multifamily developments.",
  },
  {
    title: "Single-Family",
    href: "/residential/single-family",
    description:
      "Talent for production homebuilding, custom homes and large residential communities.",
  },
  {
    title: "High-Rise",
    href: "/residential/highrise",
    description:
      "Experienced leaders for high-rise apartments, condominiums and urban residential towers.",
  },
  {
    title: "Student Housing",
    href: "/residential/student-housing",
    description:
      "Project professionals for student housing, campus-adjacent and mixed-use developments.",
  },
  {
    title: "Senior Housing",
    href: "/residential/senior-housing",
    description:
      "Recruitment for independent living, assisted living and senior care communities.",
  },
];

const roles = [
  "Project Executives",
  "Senior Project Managers",
  "Project Managers",
  "Assistant Project Managers",
  "General Superintendents",
  "Superintendents",
  "Preconstruction Managers",
  "Estimators",
  "Chief Estimators",
  "Development Managers",
  "Construction Managers",
  "MEP Managers",
  "Safety Managers",
  "Schedulers",
  "Quality Managers",
  "Warranty Managers",
];

const challenges = [
  {
    title: "High-volume project delivery",
    description:
      "Residential contractors often manage multiple active communities or phases, requiring leaders who can control schedules, budgets and subcontractor performance.",
  },
  {
    title: "Project-type experience",
    description:
      "Multifamily, high-rise, student housing and senior housing projects each require different structural, MEP and delivery experience.",
  },
  {
    title: "Regional market knowledge",
    description:
      "Permitting, subcontractor availability, local codes and market conditions can vary significantly between residential construction markets.",
  },
  {
    title: "Quality and closeout pressure",
    description:
      "Residential builders need professionals who can maintain quality, manage punch lists, control turnover schedules and protect the customer experience.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the project environment",
    description:
      "We review the project type, unit count, construction method, location, schedule, reporting structure and hiring priorities.",
  },
  {
    number: "02",
    title: "Target relevant professionals",
    description:
      "We identify candidates with aligned residential project, contractor and leadership experience.",
  },
  {
    number: "03",
    title: "Pre-vet each candidate",
    description:
      "Candidates are assessed for project history, responsibilities, compensation, location and career motivation.",
  },
  {
    number: "04",
    title: "Manage the hiring process",
    description:
      "We support interview coordination, communication, offer discussions and candidate engagement.",
  },
];

const faqs = [
  {
    question: "Which residential construction sectors does RUDRON support?",
    answer:
      "We support multifamily, single-family, high-rise, student housing, senior housing and other residential construction markets.",
  },
  {
    question: "Which residential construction roles do you recruit?",
    answer:
      "We recruit Project Executives, Project Managers, Superintendents, Estimators, Preconstruction professionals, Development Managers, MEP Managers and other construction leaders.",
  },
  {
    question: "Do you support developers as well as general contractors?",
    answer:
      "Yes. We support developers, general contractors, homebuilders, construction managers and specialty contractors.",
  },
  {
    question: "Can you recruit for large multifamily and high-rise projects?",
    answer:
      "Yes. We support searches requiring podium, wrap, garden-style, concrete, high-rise and other residential project experience.",
  },
  {
    question: "Do you provide executive search for residential firms?",
    answer:
      "Yes. We support confidential searches for Operations leaders, Regional leaders, Project Executives, Construction Directors and other senior appointments.",
  },
];

export default function ResidentialPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Residential Construction",
        item: `${SITE_URL}/residential`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative min-h-[78vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Residential.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Residential Construction Recruitment
              </p>
            </div>

            <h1 className="text-[38px] font-bold leading-[1.08] sm:text-[52px] lg:text-[68px]">
              Residential Construction
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON connects residential developers, builders, general
              contractors and construction managers with experienced
              professionals across project management, field operations,
              estimating, preconstruction and executive leadership.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-[10px] bg-[#C89B3C] px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:-translate-y-0.5 hover:bg-[#D5A943]"
              >
                Submit A Hiring Requirement
              </Link>

              <Link
                href="/jobs"
                className="rounded-[10px] border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#C89B3C]/50 hover:bg-white/10"
              >
                Explore Current Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Specialist Market Knowledge
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Recruitment Built Around Residential Construction
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Residential construction requires leaders who can manage
                aggressive schedules, subcontractor performance, quality,
                turnover and customer expectations across multiple phases or
                active communities.
              </p>

              <p>
                RUDRON supports organizations delivering multifamily,
                single-family, high-rise, student housing and senior housing
                developments across major growth markets.
              </p>

              <p>
                Our search process focuses on relevant project type, structural
                system, unit count, contractor background, leadership scope and
                regional experience.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Residential Developers",
                "General Contractors",
                "Homebuilders",
                "Construction Managers",
                "Multifamily Builders",
                "High-Rise Contractors",
                "Specialty Contractors",
                "Owners’ Representatives",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-white/10 bg-[#07111F]/60 px-4 py-4 text-sm text-gray-200"
                >
                  <span className="mr-2 text-[#C89B3C]">◆</span>
                  {item}
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
              Sector Expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Residential Markets We Support
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group rounded-[20px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/45 hover:bg-[#C89B3C]/[0.055]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-[#C89B3C]">
                    0{index + 1}
                  </span>
                  <span className="text-lg text-[#C89B3C]">→</span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">{sector.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {sector.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Talent Coverage
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Residential Construction Roles We Recruit
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                We support project delivery, field operations, preconstruction,
                estimating, development and senior leadership hiring.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role}
                  className="rounded-[12px] border border-white/10 bg-[#07111F] px-5 py-4 text-sm text-gray-200"
                >
                  <span className="mr-3 text-[#C89B3C]">✓</span>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Residential Construction Hiring Requires A Specialist
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-sm font-bold text-[#C89B3C]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {challenge.description}
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
              Our Recruitment Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Focused Approach To Every Residential Search
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-[20px] border border-white/10 bg-[#07111F] p-6"
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

      <section className="border-t border-white/10 bg-[#0A1520] py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Residential Construction Recruitment FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[16px] border border-white/10 bg-[#07111F] p-6"
              >
                <summary className="cursor-pointer font-semibold text-white">
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

      <SubpageCTA />
    </main>
  );
}