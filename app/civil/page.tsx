import type { Metadata } from "next";
import Link from "next/link";
import SubpageCTA from "@/components/SubpageCTA";

const SITE_URL = "https://www.rudrongts.com";

export const metadata: Metadata = {
  title: "Civil Construction Recruitment Specialists",
  description:
    "RUDRON recruits Project Managers, Superintendents, Estimators, Schedulers, Safety and Operations professionals for roadway, bridge, rail, tunnel and aviation infrastructure projects.",
  alternates: {
    canonical: `${SITE_URL}/civil`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/civil`,
    title: "Civil Construction Recruitment Specialists",
    description:
      "Specialist recruitment for heavy civil contractors, infrastructure firms, transportation builders and engineering organizations.",
    images: [
      {
        url: `${SITE_URL}/Civil.webp`,
        width: 1200,
        height: 630,
        alt: "Civil construction recruitment specialists",
      },
    ],
  },
};

const sectors = [
  {
    title: "Roadways",
    href: "/civil/roadways",
    description:
      "Recruitment for highway, roadway, interchange and transportation improvement projects.",
  },
  {
    title: "Bridges",
    href: "/civil/bridge",
    description:
      "Project and field leadership for bridge construction, rehabilitation and structural infrastructure.",
  },
  {
    title: "Rail & Metro",
    href: "/civil/rail-metro",
    description:
      "Talent for passenger rail, freight rail, metro and transit infrastructure programs.",
  },
  {
    title: "Tunnels",
    href: "/civil/tunnel",
    description:
      "Specialist professionals for tunnel, underground and complex civil construction.",
  },
  {
    title: "Aviation Infrastructure",
    href: "/civil/airport",
    description:
      "Recruitment for airport terminals, runways, airside infrastructure and aviation construction.",
  },
];

const roles = [
  "Project Executives",
  "Senior Project Managers",
  "Project Managers",
  "Assistant Project Managers",
  "General Superintendents",
  "Superintendents",
  "Estimators",
  "Chief Estimators",
  "Preconstruction Managers",
  "Schedulers",
  "Cost Controls Professionals",
  "Safety Directors",
  "Safety Managers",
  "QA/QC Managers",
  "Survey Managers",
  "Operations Leaders",
];

const challenges = [
  {
    title: "Large-scale project complexity",
    description:
      "Civil infrastructure projects require professionals who can manage long schedules, major budgets, public stakeholders, technical risk and complex coordination.",
  },
  {
    title: "Specialized civil experience",
    description:
      "Roadway, bridge, rail, tunnel and aviation projects each require distinct construction methods, equipment knowledge and delivery experience.",
  },
  {
    title: "Public-sector requirements",
    description:
      "Many infrastructure projects involve agency standards, reporting requirements, compliance obligations and strict procurement processes.",
  },
  {
    title: "Regional workforce shortages",
    description:
      "Experienced heavy civil professionals are often concentrated in specific markets, making relocation and travel requirements important parts of the search.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the project scope",
    description:
      "We review the infrastructure type, contract value, location, delivery method, agency requirements and leadership needs.",
  },
  {
    number: "02",
    title: "Target relevant professionals",
    description:
      "We identify candidates with aligned heavy civil, transportation and infrastructure project experience.",
  },
  {
    number: "03",
    title: "Pre-vet every candidate",
    description:
      "Candidates are assessed for project history, technical scope, leadership responsibilities, compensation and mobility.",
  },
  {
    number: "04",
    title: "Support the hiring process",
    description:
      "We coordinate interviews, maintain communication and support offer, relocation and closing discussions.",
  },
];

const faqs = [
  {
    question: "Which civil construction sectors does RUDRON support?",
    answer:
      "We support roadways, bridges, rail and metro, tunnels, airports and other major infrastructure construction markets.",
  },
  {
    question: "Which heavy civil roles do you recruit?",
    answer:
      "We recruit Project Executives, Project Managers, Superintendents, Estimators, Schedulers, Safety professionals, QA/QC leaders and Operations executives.",
  },
  {
    question: "Do you recruit for public infrastructure projects?",
    answer:
      "Yes. We support contractors working on state, municipal, transportation authority and other publicly funded infrastructure programs.",
  },
  {
    question: "Can you recruit for travel-based civil construction roles?",
    answer:
      "Yes. We support local, relocation and travel-based searches depending on project location and workforce requirements.",
  },
  {
    question: "Do you provide executive search for infrastructure firms?",
    answer:
      "Yes. We support confidential searches for Project Executives, Operations leaders, Regional Directors, Division Managers and other senior appointments.",
  },
];

export default function CivilPage() {
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
        name: "Civil Construction",
        item: `${SITE_URL}/civil`,
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
            backgroundImage: "url('/Civil.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />

              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Civil Construction Recruitment
              </p>
            </div>

            <h1 className="text-[38px] font-bold leading-[1.08] sm:text-[52px] lg:text-[68px]">
              Civil Construction
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON connects heavy civil contractors, transportation builders,
              infrastructure firms and engineering organizations with
              experienced professionals across project management, field
              operations, estimating, scheduling, safety and executive
              leadership.
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
              Recruitment Built Around Civil Infrastructure
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Civil construction demands professionals who can manage complex
                logistics, public stakeholders, technical constraints,
                regulatory requirements and long-term project schedules.
              </p>

              <p>
                RUDRON supports contractors delivering roadway, bridge, rail,
                tunnel, airport and other major infrastructure projects across
                the United States and international markets.
              </p>

              <p>
                Our search process focuses on relevant project type, contract
                value, agency experience, technical scope, leadership
                responsibilities and geographic flexibility.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Heavy Civil Contractors",
                "Infrastructure Contractors",
                "Transportation Builders",
                "Bridge Contractors",
                "Rail Contractors",
                "Tunnel Contractors",
                "Aviation Contractors",
                "Engineering Firms",
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
              Civil Markets We Support
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
                Civil Construction Roles We Recruit
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                We support project delivery, field operations, estimating,
                scheduling, safety, quality and executive leadership hiring.
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
            Why Civil Construction Hiring Requires A Specialist
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
              A Focused Approach To Every Civil Search
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
              Civil Construction Recruitment FAQs
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