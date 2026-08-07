import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.rudrongts.com";
const LAST_UPDATED = "July 27, 2026";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description:
    "Read the Website Disclaimer governing information, job listings, recruitment content and third-party materials published by RUDRON Global Talent Solutions LLP.",

  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/disclaimer`,
    siteName: "RUDRON Global Talent Solutions",
    title: "Website Disclaimer | RUDRON Global Talent Solutions",
    description:
      "Important information about the use of RUDRON's website, recruitment content, job listings and external resources.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "RUDRON Global Talent Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Disclaimer | RUDRON Global Talent Solutions",
    description:
      "Important information about the use of RUDRON's website, recruitment content, job listings and external resources.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-28">
      <h2 className="mb-4 border-b-2 border-[#C89B3C] pb-2 text-xl font-bold text-[#1A1A2E] md:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-[#444444]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-1 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C89B3C]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const tocItems = [
  {
    href: "#general",
    label: "General Information",
  },
  {
    href: "#recruitment",
    label: "Recruitment Services",
  },
  {
    href: "#job-listings",
    label: "Job Listings",
  },
  {
    href: "#employment",
    label: "No Employment Guarantee",
  },
  {
    href: "#candidate-information",
    label: "Candidate Information",
  },
  {
    href: "#client-decisions",
    label: "Client Hiring Decisions",
  },
  {
    href: "#salary-information",
    label: "Salary Information",
  },
  {
    href: "#professional-advice",
    label: "No Professional Advice",
  },
  {
    href: "#ai",
    label: "AI-Assisted Services",
  },
  {
    href: "#third-party",
    label: "Third-Party Content",
  },
  {
    href: "#availability",
    label: "Website Availability",
  },
  {
    href: "#international",
    label: "International Services",
  },
  {
    href: "#liability",
    label: "Limitation of Responsibility",
  },
  {
    href: "#changes",
    label: "Changes to Disclaimer",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

export default function DisclaimerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/disclaimer#webpage`,
    url: `${SITE_URL}/disclaimer`,
    name: "Website Disclaimer",
    description:
      "Website Disclaimer for RUDRON Global Talent Solutions LLP.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    dateModified: "2026-07-27",
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Hero */}
        <header className="relative overflow-hidden bg-[#050D18] px-6 pb-20 pt-32 text-center md:pb-24 md:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, #C89B3C 0%, transparent 45%)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-50"
          />

          <div className="relative mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C89B3C]">
              Legal
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Website Disclaimer
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
              Important information about the use of our website, recruitment
              services, job listings and published content.
            </p>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:flex lg:gap-14 lg:px-8 lg:py-20">
          {/* Sticky table of contents */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                Contents
              </p>

              <nav aria-label="Website Disclaimer contents">
                <ul className="space-y-2.5">
                  {tocItems.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="block text-[13px] leading-5 text-[#555555] transition-colors duration-200 hover:text-[#C89B3C]"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0 flex-1">
            <div className="mb-10 rounded-2xl border border-[#C89B3C]/20 bg-[#C89B3C]/[0.06] p-6 md:p-7">
              <p className="text-[15px] leading-7 text-[#444444]">
                This Website Disclaimer should be read together with our{" "}
                <Link
                  href="/terms"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Terms &amp; Conditions
                </Link>
                ,{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/cookie-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <Section id="general" title="1. General Information">
              <p>
                The information provided on{" "}
                <a
                  href={SITE_URL}
                  className="text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  www.rudrongts.com
                </a>{" "}
                is published by RUDRON Global Talent Solutions LLP
                (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) for general informational, recruitment and
                business purposes.
              </p>

              <p>
                While we aim to keep website information accurate, relevant and
                current, we do not represent or warrant that all information
                will always be complete, error-free, current or suitable for a
                particular purpose.
              </p>

              <p>
                Website content may be changed, corrected, removed or updated
                at any time without prior notice.
              </p>
            </Section>

            <Section id="recruitment" title="2. Recruitment Services">
              <p>
                RUDRON provides recruitment, executive search, candidate
                sourcing, talent acquisition and related advisory services to
                candidates and employer clients.
              </p>

              <p>
                Information on this website describes our general capabilities
                and service areas. It does not by itself create a recruitment,
                agency, employment, consulting or contractual relationship
                between RUDRON and any visitor.
              </p>

              <p>
                Recruitment services provided to an employer or client may be
                governed by a separate signed agreement, fee schedule,
                statement of work, replacement guarantee or other written
                commercial terms.
              </p>
            </Section>

            <Section id="job-listings" title="3. Job Listings">
              <p>
                Job listings published on the website are provided for general
                recruitment purposes and may be supplied by employers,
                representatives, recruiters or other sources.
              </p>

              <p>
                Although we take reasonable steps to review listings before
                publication, job details may change without notice. This may
                include:
              </p>

              <BulletList
                items={[
                  "Job title, duties or reporting structure;",
                  "Compensation, benefits or incentives;",
                  "Location, travel or remote-work arrangements;",
                  "Required qualifications or experience;",
                  "Employment type or project duration;",
                  "Availability of the position; and",
                  "Interview, offer or start-date timelines.",
                ]}
              />

              <p>
                A listed vacancy may be placed on hold, amended, filled or
                withdrawn at any time. Candidates should not rely solely on the
                continued appearance of a vacancy on the website.
              </p>
            </Section>

            <Section id="employment" title="4. No Employment Guarantee">
              <p>
                Submission of a resume, job application, enquiry or candidate
                profile does not guarantee:
              </p>

              <BulletList
                items={[
                  "Acknowledgement or response from an employer;",
                  "Presentation of the candidate to a particular client;",
                  "Selection for an interview;",
                  "Receipt of a job offer;",
                  "Acceptance or approval of work authorisation or immigration status;",
                  "Employment for any minimum period; or",
                  "Any particular salary, benefits or working conditions.",
                ]}
              />

              <p>
                Hiring decisions remain under the control of the relevant
                employer. RUDRON does not have authority to compel an employer
                to interview, hire or retain a candidate.
              </p>

              <p>
                RUDRON is not the employer of a candidate unless this is
                expressly confirmed in a separate written agreement.
              </p>
            </Section>

            <Section
              id="candidate-information"
              title="5. Candidate Information and Verification"
            >
              <p>
                Candidates are responsible for ensuring that all information
                supplied to RUDRON is truthful, complete and current.
              </p>

              <p>This includes information relating to:</p>

              <BulletList
                items={[
                  "Employment history and job titles;",
                  "Education and professional qualifications;",
                  "Licences, certifications and memberships;",
                  "Compensation and availability;",
                  "References and background information;",
                  "Work authorisation and immigration status; and",
                  "Any other information relevant to a potential placement.",
                ]}
              />

              <p>
                RUDRON may review, screen or discuss candidate information but
                does not warrant that every statement made by a candidate has
                been independently verified.
              </p>

              <p>
                Employer clients should conduct the background checks,
                reference checks, licence verification and other due diligence
                they consider appropriate before making an employment or
                engagement decision.
              </p>
            </Section>

            <Section
              id="client-decisions"
              title="6. Employer and Client Decisions"
            >
              <p>
                Candidate profiles, assessments, screening notes and
                recommendations supplied by RUDRON are intended to assist
                employer clients in their recruitment process.
              </p>

              <p>
                They should not replace an employer&apos;s own evaluation,
                interview process, background checks, reference verification,
                legal review or internal approval procedures.
              </p>

              <p>
                The employer remains responsible for:
              </p>

              <BulletList
                items={[
                  "Determining whether a candidate is suitable for a role;",
                  "Confirming qualifications, licences and experience;",
                  "Complying with employment and anti-discrimination laws;",
                  "Determining compensation and employment terms;",
                  "Verifying work authorisation and immigration requirements;",
                  "Providing a safe and lawful workplace; and",
                  "Making the final hiring, engagement and termination decisions.",
                ]}
              />
            </Section>

            <Section
              id="salary-information"
              title="7. Salary and Market Information"
            >
              <p>
                Salary ranges, market reports, compensation estimates and
                hiring-trend information published by RUDRON are provided for
                general informational purposes.
              </p>

              <p>
                Actual compensation may vary substantially depending on
                location, employer, project type, market demand, candidate
                experience, qualifications, benefits, incentives and other
                factors.
              </p>

              <p>
                Published salary information does not constitute a promise,
                offer or guarantee that any employer will pay a particular
                amount.
              </p>
            </Section>

            <Section
              id="professional-advice"
              title="8. No Legal, Tax, Immigration or Financial Advice"
            >
              <p>
                Website content is not intended to provide legal, tax,
                immigration, accounting, financial, licensing or regulatory
                advice.
              </p>

              <p>
                Candidates and employers should obtain advice from appropriately
                qualified professionals regarding matters such as:
              </p>

              <BulletList
                items={[
                  "Employment contracts and workplace obligations;",
                  "Visa and work-authorisation requirements;",
                  "Independent-contractor classification;",
                  "Tax treatment and payroll obligations;",
                  "Professional licensing and certification;",
                  "Background checks and screening laws; and",
                  "Local, state, provincial, federal or national compliance requirements.",
                ]}
              />

              <p>
                No content on this website creates a professional-adviser
                relationship between RUDRON and a website visitor.
              </p>
            </Section>

            <Section id="ai" title="9. AI-Assisted Recruitment Services">
              <p>
                RUDRON may use artificial intelligence, automation and other
                technology-assisted tools to support certain recruitment and
                business processes.
              </p>

              <p>These tools may assist with:</p>

              <BulletList
                items={[
                  "Candidate matching and search support;",
                  "Drafting or organising communications;",
                  "Scheduling and administrative workflows;",
                  "Summarising recruitment information;",
                  "Identifying potentially relevant roles or candidates; and",
                  "Improving website and service performance.",
                ]}
              />

              <p>
                AI-assisted outputs may contain errors, omissions or
                inappropriate recommendations. They should not be treated as
                the sole basis for an employment, hiring or other material
                decision.
              </p>

              <p>
                RUDRON seeks to maintain human involvement in recruitment
                decisions and does not guarantee that an AI-assisted output will
                be accurate or suitable in every situation.
              </p>
            </Section>

            <Section
              id="third-party"
              title="10. Third-Party Websites and Content"
            >
              <p>
                The website may contain links to external websites, job boards,
                social-media platforms, scheduling services, employer websites
                or other third-party resources.
              </p>

              <p>
                External links are provided for convenience and informational
                purposes. RUDRON does not control and is not responsible for:
              </p>

              <BulletList
                items={[
                  "The accuracy or availability of third-party content;",
                  "Third-party privacy or cookie practices;",
                  "Products, services or statements offered by third parties;",
                  "Security risks associated with an external website; or",
                  "Losses arising from a visitor's use of a third-party service.",
                ]}
              />

              <p>
                The inclusion of an external link does not necessarily imply
                endorsement, partnership, sponsorship or approval.
              </p>
            </Section>

            <Section
              id="availability"
              title="11. Website Availability and Security"
            >
              <p>
                We aim to keep the website available and secure, but we do not
                guarantee uninterrupted, error-free or continuously available
                access.
              </p>

              <p>
                The website may be unavailable because of maintenance, hosting
                interruptions, network failures, security incidents, software
                errors or circumstances beyond our reasonable control.
              </p>

              <p>
                Visitors are responsible for using appropriate security
                measures, including updated devices, browsers, antivirus tools
                and secure internet connections.
              </p>

              <p>
                RUDRON does not warrant that the website, downloaded materials
                or electronic communications will always be free from harmful
                code, malware or security vulnerabilities.
              </p>
            </Section>

            <Section
              id="international"
              title="12. International Recruitment Services"
            >
              <p>
                RUDRON serves clients and candidates in multiple jurisdictions,
                including the United States, Canada, the United Arab Emirates
                and India.
              </p>

              <p>
                The availability, suitability and lawful provision of a
                particular service may vary depending on the location of the
                candidate, employer, position or project.
              </p>

              <p>
                Website visitors are responsible for determining whether their
                use of our services complies with laws and requirements
                applicable in their jurisdiction.
              </p>

              <p>
                RUDRON may restrict or decline a service where legal,
                regulatory, commercial or practical considerations make the
                service unavailable or inappropriate.
              </p>
            </Section>

            <Section
              id="liability"
              title="13. Limitation of Responsibility"
            >
              <p>
                To the maximum extent permitted by applicable law, RUDRON will
                not be responsible for losses arising solely from reliance on
                general website information, withdrawn vacancies, unsuccessful
                applications, employer decisions, candidate statements,
                third-party websites or temporary website unavailability.
              </p>

              <p>
                Nothing in this Website Disclaimer excludes or limits any
                responsibility that cannot lawfully be excluded or limited.
              </p>

              <p>
                Detailed limitations of liability and other legal provisions
                governing website and service use are contained in our{" "}
                <Link
                  href="/terms"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </Section>

            <Section
              id="changes"
              title="14. Changes to This Website Disclaimer"
            >
              <p>
                We may update this Website Disclaimer to reflect changes to our
                services, website, technology, business practices or legal
                obligations.
              </p>

              <p>
                The revised version will be published on this page and the
                &quot;Last updated&quot; date will be changed.
              </p>

              <p>
                Continued use of the website after an update is subject to the
                revised disclaimer.
              </p>
            </Section>

            <Section id="contact" title="15. Contact Us">
              <p>
                Questions regarding this Website Disclaimer may be directed to:
              </p>

              <div className="mt-5 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 md:p-7">
                <p className="font-bold text-[#1A1A2E]">
                  RUDRON Global Talent Solutions
                </p>

                <p className="mt-4">
                  Email:{" "}
                  <a
                    href="mailto:privacy@rudrongts.com"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    privacy@rudrongts.com
                  </a>
                </p>

                <p className="mt-2">
                  Website:{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    www.rudrongts.com/contact
                  </Link>
                </p>
              </div>
            </Section>

            <div className="mt-14 rounded-2xl bg-[#050D18] p-7 text-white md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Related legal information
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Review the terms governing use of our website
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/terms"
                  className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Terms &amp; Conditions
                </Link>

                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/cookie-policy"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

    </>
  );
}