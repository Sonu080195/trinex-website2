import type { Metadata } from "next";
import Link from "next/link";
import SubpageCTA from "@/components/SubpageCTA";

const SITE_URL = "https://www.rudrongts.com";

export const metadata: Metadata = {
  title: "Industrial Construction Recruitment Specialists",
  description:
    "RUDRON recruits Project Managers, Superintendents, Estimators, Piping, Mechanical, Electrical and Operations professionals for industrial construction projects.",
  alternates: {
    canonical: `${SITE_URL}/industrial`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/industrial`,
    title: "Industrial Construction Recruitment Specialists",
    description:
      "Specialist recruitment for industrial contractors, EPC firms, mechanical contractors and electrical contractors.",
    images: [
      {
        url: `${SITE_URL}/Industrial.webp`,
        width: 1200,
        height: 630,
        alt: "Industrial construction recruitment specialists",
      },
    ],
  },
};

const sectors = [
  {
    title: "Warehouses",
    href: "/industrial/warehouse",
    description:
      "Recruitment for large-scale warehouse, logistics and fulfillment construction projects.",
  },
  {
    title: "Distribution Centers",
    href: "/industrial/distributioncenter",
    description:
      "Talent for automated distribution, logistics and high-volume fulfillment facilities.",
  },
  {
    title: "Wastewater",
    href: "/industrial/wastewater",
    description:
      "Project and field leadership for wastewater treatment and utility infrastructure.",
  },
  {
    title: "Power Plants",
    href: "/industrial/powerplant",
    description:
      "Construction professionals for power generation, energy and utility projects.",
  },
  {
    title: "Tilt-Up Construction",
    href: "/industrial/tiltup",
    description:
      "Experienced leaders for tilt-up warehouses, manufacturing and industrial facilities.",
  },
];

const roles = [
  "Project Executives",
  "Senior Project Managers",
  "Project Managers",
  "Superintendents",
  "General Superintendents",
  "Mechanical Project Managers",
  "Electrical Project Managers",
  "Piping Project Managers",
  "Process Piping Professionals",
  "Estimators",
  "Chief Estimators",
  "Preconstruction Managers",
  "Schedulers",
  "BIM & VDC Professionals",
  "QA/QC Managers",
  "Safety Managers",
];

const challenges = [
  {
    title: "Highly technical scopes",
    description:
      "Industrial construction often involves process piping, high-voltage electrical systems, equipment installation and complex mechanical coordination.",
  },
  {
    title: "Specialized project backgrounds",
    description:
      "Many roles require direct experience in manufacturing, energy, wastewater, semiconductor, pharmaceutical or heavy industrial environments.",
  },
  {
    title: "Remote project locations",
    description:
      "Industrial projects are frequently located outside major cities, increasing relocation, travel and workforce planning challenges.",
  },
  {
    title: "Schedule and safety pressure",
    description:
      "Fast-track delivery, shutdown schedules, commissioning requirements and strict safety standards demand experienced operational leadership.",
  },
];

const process = [
  {
    number: "01",
    title: "Define the technical need",
    description:
      "We review project scope, systems, delivery method, location, schedule and required industrial experience.",
  },
  {
    number: "02",
    title: "Search the relevant market",
    description:
      "We identify professionals with aligned contractor, project and technical backgrounds.",
  },
  {
    number: "03",
    title: "Pre-vet each candidate",
    description:
      "Candidates are assessed for technical fit, project history, leadership scope, compensation and availability.",
  },
  {
    number: "04",
    title: "Support the full process",
    description:
      "We coordinate interviews, maintain engagement and support the offer and closing process.",
  },
];

const faqs = [
  {
    question: "Which industrial construction sectors does RUDRON support?",
    answer:
      "We support warehouse, distribution center, wastewater, power, manufacturing, tilt-up, pharmaceutical and other industrial construction markets.",
  },
  {
    question: "Do you recruit mechanical and piping professionals?",
    answer:
      "Yes. We recruit Mechanical Project Managers, Piping Project Managers, Process Piping professionals, Superintendents and other technical leaders.",
  },
  {
    question: "Do you recruit for EPC and specialty contractors?",
    answer:
      "Yes. We support EPC firms, industrial general contractors, mechanical contractors, electrical contractors and specialty subcontractors.",
  },
  {
    question: "Can you support remote or travel-based industrial roles?",
    answer:
      "Yes. We support local, relocation and travel-based searches depending on project location and workforce requirements.",
  },
  {
    question: "Do you provide executive search for industrial firms?",
    answer:
      "Yes. We support senior searches for Operations leaders, Project Executives, Regional leaders, Preconstruction Directors and other executive-level roles.",
  },
];

export default function IndustrialPage() {
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
        name: "Industrial Construction",
        item: `${SITE_URL}/industrial`,
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
            backgroundImage: "url('/Industrial.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/20" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Industrial Construction Recruitment
              </p>
            </div>

            <h1 className="text-[38px] font-bold leading-[1.08] sm:text-[52px] lg:text-[68px]">
              Industrial Construction
              <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[15px] leading-8 text-gray-300 sm:text-[17px]">
              RUDRON connects industrial contractors, EPC firms, mechanical
              contractors and electrical contractors with experienced
              professionals across project management, field operations,
              estimating, piping, MEP and executive leadership.
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
              Recruitment Built Around Industrial Construction
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
              <p>
                Industrial construction requires professionals who understand
                technical systems, equipment installation, process piping,
                controls, utilities, commissioning and demanding operational
                environments.
              </p>

              <p>
                RUDRON supports industrial contractors working across
                manufacturing, warehouses, logistics, power, wastewater,
                pharmaceutical and other complex facilities.
              </p>

              <p>
                Our search process focuses on relevant project experience,
                contractor background, technical responsibilities, leadership
                scope and the realities of industrial project delivery.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
              Organizations We Support
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Industrial Contractors",
                "EPC Firms",
                "Mechanical Contractors",
                "Electrical Contractors",
                "Process Piping Contractors",
                "Manufacturing Firms",
                "Energy Contractors",
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
              Industrial Markets We Support
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
                Industrial Construction Roles We Recruit
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-gray-400">
                We support project delivery, field operations, estimating,
                piping, MEP, safety, quality and senior leadership hiring.
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
            Why Industrial Construction Hiring Requires A Specialist
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
              A Focused Approach To Every Industrial Search
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
              Industrial Construction Recruitment FAQs
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