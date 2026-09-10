import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of RUDRON Global Talent Solutions LLC's website and recruitment services.",
  alternates: {
    canonical: "https://www.rudrongts.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const EFFECTIVE_DATE = "July 22, 2026";
const LAST_UPDATED = "September 10, 2026";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mb-10 scroll-mt-24"
    >
      <h2 className="mb-3 border-b-2 border-[#C89B3C] pb-2 text-xl font-bold text-[#1A1A2E]">
        {title}
      </h2>

      <div className="space-y-3 text-[15px] leading-relaxed text-[#444444]">
        {children}
      </div>
    </section>
  );
}

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="ml-1 space-y-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-2.5"
        >
          <span className="mt-1 shrink-0 text-[#C89B3C]">
            •
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const tocItems = [
  {
    href: "#agreement",
    label: "Agreement to Terms",
  },
  {
    href: "#definitions",
    label: "Definitions",
  },
  {
    href: "#eligibility",
    label: "Eligibility",
  },
  {
    href: "#candidates",
    label: "Candidate Terms",
  },
  {
    href: "#employers",
    label: "Employer / Client Terms",
  },
  {
    href: "#acceptable-use",
    label: "Acceptable Use Policy",
  },
  {
    href: "#ip",
    label: "Intellectual Property",
  },
  {
    href: "#privacy",
    label: "Privacy & Data Protection",
  },
  {
    href: "#ai-services",
    label: "AI-Assisted Recruitment",
  },
  {
    href: "#disclaimer",
    label: "Disclaimer of Warranties",
  },
  {
    href: "#liability",
    label: "Limitation of Liability",
  },
  {
    href: "#indemnification",
    label: "Indemnification",
  },
  {
    href: "#third-party",
    label: "Third-Party Services",
  },
  {
    href: "#governing-law",
    label: "Governing Law",
  },
  {
    href: "#modifications",
    label: "Modifications to Terms",
  },
  {
    href: "#termination",
    label: "Termination",
  },
  {
    href: "#severability",
    label: "Severability & Waiver",
  },
  {
    href: "#contact",
    label: "Contact Information",
  },
];

export default function TermsPage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=3707+East+Southern+Avenue+Mesa+AZ+85206";

  return (
    <>
      <main className="min-h-screen bg-white">
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
              Terms &amp; Conditions
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            Effective: {EFFECTIVE_DATE}
            &nbsp;·&nbsp;
            Last updated: {LAST_UPDATED}
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-6 py-14 lg:flex lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 rounded-xl border border-gray-100 bg-[#F8F7F4] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                Contents
              </p>

              <nav aria-label="Terms and Conditions sections">
                <ul className="space-y-2">
                  {tocItems.map(
                    ({ href, label }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="block text-[13px] text-[#555] transition-colors duration-200 hover:text-[#C89B3C]"
                        >
                          {label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0 flex-1">
            <Section
              id="agreement"
              title="1. Agreement to Terms"
            >
              <p>
                These Terms and Conditions
                (&quot;Terms&quot;) constitute a
                legally binding agreement between you
                and RUDRON Global Talent Solutions LLC
                (&quot;RUDRON&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;).
              </p>

              <p>
                By accessing or using{" "}
                <a
                  href={SITE.url}
                  className="text-[#C89B3C] underline underline-offset-2"
                >
                  www.rudrongts.com
                </a>{" "}
                or using any recruitment, executive
                search, staffing, talent acquisition, or
                related services provided by RUDRON, you
                acknowledge that you have read,
                understood, and agree to be bound by
                these Terms.
              </p>

              <p>
                If you do not agree to these Terms, you
                must discontinue use of the Website and
                Services.
              </p>
            </Section>

            <Section
              id="definitions"
              title="2. Definitions"
            >
              <BulletList
                items={[
                  '"Website" means www.rudrongts.com and any associated pages, features, forms, or subdomains operated by RUDRON.',
                  '"Services" means recruitment, talent acquisition, permanent placement, executive search, project staffing, candidate sourcing, market intelligence, and related services provided by RUDRON.',
                  '"Candidate" means any individual who applies for a position, submits a résumé or profile, communicates with RUDRON regarding employment opportunities, or is represented by RUDRON with appropriate consent.',
                  '"Employer" or "Client" means any company, organization, hiring authority, or other party that engages or communicates with RUDRON regarding recruitment or talent services.',
                  '"Content" means text, graphics, logos, images, job information, documents, data, software, and other materials made available through the Website.',
                ]}
              />
            </Section>

            <Section
              id="eligibility"
              title="3. Eligibility"
            >
              <p>
                You must be at least 18 years of age, or
                the age of legal majority in your
                jurisdiction if higher, to use the
                Services.
              </p>

              <p>
                By using the Website or Services, you
                represent that the information you
                provide is accurate, current, complete,
                and submitted for a lawful purpose.
              </p>
            </Section>

            <Section
              id="candidates"
              title="4. Candidate Terms"
            >
              <p className="font-semibold text-[#1A1A2E]">
                Candidate Information
              </p>

              <BulletList
                items={[
                  "All information provided in a résumé, CV, application, profile, or communication must be truthful and accurate.",
                  "Candidates are responsible for ensuring that qualifications, employment history, project experience, licenses, certifications, compensation information, and availability are represented accurately.",
                  "RUDRON may decline to represent or continue working with a candidate where information appears inaccurate, misleading, fraudulent, or materially incomplete.",
                ]}
              />

              <p className="pt-2 font-semibold text-[#1A1A2E]">
                Job Applications
              </p>

              <BulletList
                items={[
                  "Submitting an application or résumé does not guarantee an interview, submission to a client, offer of employment, or placement.",
                  "RUDRON acts as a recruitment intermediary and does not control or guarantee hiring decisions made by employers.",
                  "Candidate information may be assessed against current or future recruitment opportunities.",
                  "RUDRON will not knowingly present a candidate to a client for a specific opportunity without appropriate authorization or a reasonable recruitment basis consistent with our Privacy Policy.",
                ]}
              />

              <p className="pt-2 font-semibold text-[#1A1A2E]">
                Candidate Conduct
              </p>

              <p>
                Candidates must not knowingly provide
                false or misleading information,
                impersonate another person, interfere
                with recruitment processes, misuse
                confidential employer information, or
                use the Website or Services for unlawful
                purposes.
              </p>
            </Section>

            <Section
              id="employers"
              title="5. Employer / Client Terms"
            >
              <p className="font-semibold text-[#1A1A2E]">
                Recruitment Engagement
              </p>

              <p>
                Employers engaging RUDRON for
                recruitment services may be subject to a
                separate Recruitment Services Agreement,
                Master Services Agreement, Statement of
                Work, fee agreement, or other written
                commercial agreement.
              </p>

              <p>
                Where such an agreement exists, its
                commercial terms govern matters such as
                placement fees, payment obligations,
                candidate ownership, replacement
                guarantees, exclusivity, and other
                engagement-specific terms. These Website
                Terms apply in addition to that
                agreement and do not replace it.
              </p>

              <p className="pt-2 font-semibold text-[#1A1A2E]">
                Employer Obligations
              </p>

              <BulletList
                items={[
                  "Provide accurate and lawful job descriptions, compensation information, working conditions, locations, and hiring requirements.",
                  "Comply with applicable employment, equal opportunity, immigration, wage, safety, privacy, and anti-discrimination laws in the jurisdiction of hire.",
                  "Treat candidate information confidentially and use it only for legitimate recruitment purposes.",
                  "Not knowingly bypass or circumvent RUDRON in connection with candidates introduced through our recruitment activities.",
                ]}
              />

              <p className="pt-2 font-semibold text-[#1A1A2E]">
                Candidate Introductions
              </p>

              <p>
                Candidate introductions, ownership
                periods, placement fees, replacement
                guarantees, and payment obligations are
                governed by the applicable written
                recruitment agreement or agreed
                commercial terms between RUDRON and the
                Client.
              </p>

              <p>
                Nothing on this Website independently
                creates a placement-fee obligation
                unless such obligation has otherwise
                been established through an applicable
                agreement, accepted terms, engagement,
                or other legally enforceable arrangement.
              </p>
            </Section>

            <Section
              id="acceptable-use"
              title="6. Acceptable Use Policy"
            >
              <p>
                When using our Website or Services, you
                agree not to:
              </p>

              <BulletList
                items={[
                  "Upload, transmit, distribute, or introduce malware, viruses, malicious code, or harmful technology.",
                  "Attempt to gain unauthorized access to systems, servers, accounts, databases, or information.",
                  "Scrape, crawl, harvest, reproduce, or extract Website data through unauthorized automated means.",
                  "Post, send, or transmit unlawful, defamatory, discriminatory, threatening, fraudulent, or obscene material.",
                  "Impersonate another person or organization or misrepresent your identity, authority, qualifications, or affiliation.",
                  "Interfere with the security, availability, integrity, or operation of the Website.",
                  "Use the Website or Services in violation of applicable law or third-party rights.",
                ]}
              />
            </Section>

            <Section
              id="ip"
              title="7. Intellectual Property"
            >
              <p>
                Unless otherwise stated, Website
                Content, including text, graphics,
                branding, logos, design elements,
                databases, software, and original
                materials, is owned by or licensed to
                RUDRON and is protected by applicable
                intellectual property laws.
              </p>

              <p>
                You may not reproduce, copy, republish,
                distribute, modify, sell, commercially
                exploit, or create derivative works from
                protected Website Content without prior
                written permission, except where
                permitted by law.
              </p>

              <p>
                Candidates retain ownership of their
                résumés, CVs, portfolios, and other
                materials submitted to RUDRON. By
                submitting such materials, candidates
                grant RUDRON a limited, non-exclusive
                right to process and use those materials
                for legitimate recruitment and related
                business purposes in accordance with our
                Privacy Policy.
              </p>
            </Section>

            <Section
              id="privacy"
              title="8. Privacy & Data Protection"
            >
              <p>
                Our collection, use, disclosure,
                retention, and protection of personal
                information is governed by our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#C89B3C] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <p>
                By submitting personal information
                through our Website or communicating
                with our recruitment team, you
                acknowledge that your information may be
                processed for recruitment, candidate
                evaluation, client engagement,
                communication, compliance, and related
                legitimate business purposes as
                described in that policy.
              </p>
            </Section>

            <Section
              id="ai-services"
              title="9. AI-Assisted Recruitment Services"
            >
              <p>
                RUDRON may use artificial intelligence,
                automation, transcription, matching,
                scheduling, analytics, or other
                technology-assisted tools to support
                recruitment and business workflows.
              </p>

              <p>
                Such tools may assist with activities
                such as candidate matching, résumé
                review, communications, scheduling,
                research, note preparation, and
                administrative processes.
              </p>

              <p>
                AI-assisted tools support our team and
                are not intended to replace appropriate
                human review or employer decision-making
                in recruitment matters. Personal
                information processed through such tools
                remains subject to our Privacy Policy
                and applicable legal requirements.
              </p>
            </Section>

            <Section
              id="disclaimer"
              title="10. Disclaimer of Warranties"
            >
              <p>
                To the fullest extent permitted by law,
                the Website and Services are provided on
                an &quot;as is&quot; and &quot;as
                available&quot; basis.
              </p>

              <p>
                RUDRON does not guarantee that:
              </p>

              <BulletList
                items={[
                  "The Website will always be available, uninterrupted, error-free, or free from harmful components.",
                  "Every job advertisement or opportunity will remain available or unchanged.",
                  "Use of the Services will result in an interview, placement, successful hire, or particular business outcome.",
                  "Any particular candidate will be suitable for a particular role or organization.",
                  "Information supplied by candidates, employers, or third parties will always be complete or error-free.",
                ]}
              />
            </Section>

            <Section
              id="liability"
              title="11. Limitation of Liability"
            >
              <p>
                To the fullest extent permitted by
                applicable law, RUDRON and its officers,
                members, employees, contractors,
                representatives, and affiliates shall
                not be liable for indirect, incidental,
                special, exemplary, punitive, or
                consequential damages arising from or
                relating to the Website or Services.
              </p>

              <p>
                This includes, without limitation, loss
                of profits, loss of business
                opportunity, loss of data, hiring
                decisions, employment decisions,
                business interruption, or reliance on
                information provided through the
                Website.
              </p>

              <p>
                Where liability cannot lawfully be
                excluded, RUDRON&apos;s aggregate
                liability arising from Website use shall
                be limited to the amount paid by the
                affected user directly to RUDRON for the
                specific Services giving rise to the
                claim during the preceding 12 months, to
                the extent permitted by applicable law.
              </p>

              <p>
                Liability arising under a separate
                recruitment services agreement is
                governed by that agreement.
              </p>
            </Section>

            <Section
              id="indemnification"
              title="12. Indemnification"
            >
              <p>
                To the extent permitted by applicable
                law, you agree to indemnify and hold
                harmless RUDRON and its officers,
                members, employees, representatives, and
                agents from claims, losses, liabilities,
                damages, and reasonable expenses arising
                from your unlawful use of the Website,
                violation of these Terms, infringement
                of third-party rights, or material
                misrepresentation submitted through the
                Services.
              </p>
            </Section>

            <Section
              id="third-party"
              title="13. Third-Party Services & Links"
            >
              <p>
                The Website may contain links to or
                integrations with third-party websites,
                job platforms, communication services,
                analytics providers, social networks, or
                other external services.
              </p>

              <p>
                RUDRON does not control third-party
                services and is not responsible for
                their availability, content, security,
                terms, privacy practices, or actions.
                Your use of third-party services is
                subject to the applicable provider&apos;s
                own terms and policies.
              </p>
            </Section>

            <Section
              id="governing-law"
              title="14. Governing Law & Dispute Resolution"
            >
              <p>
                These Terms shall be governed by and
                construed in accordance with the laws of
                the State of Arizona, United States,
                without regard to conflict-of-law
                principles, except where mandatory law
                in another jurisdiction applies.
              </p>

              <p>
                Unless otherwise provided in a separate
                written agreement between RUDRON and the
                relevant party, disputes arising out of
                or relating to these Terms or use of the
                Website shall be brought before a court
                of competent jurisdiction in Maricopa
                County, Arizona, to the extent such
                jurisdiction and venue are legally
                permitted.
              </p>

              <p>
                Before commencing formal proceedings,
                the parties are encouraged to attempt in
                good faith to resolve the dispute
                through direct communication.
              </p>
            </Section>

            <Section
              id="modifications"
              title="15. Modifications to Terms"
            >
              <p>
                RUDRON may revise these Terms from time
                to time to reflect changes to our
                Services, operations, technology, legal
                requirements, or business practices.
              </p>

              <p>
                Updated Terms will be posted on this
                page with a revised &quot;Last
                Updated&quot; date. Continued use of the
                Website following the effective date of
                updated Terms constitutes acceptance of
                those Terms where permitted by law.
              </p>
            </Section>

            <Section
              id="termination"
              title="16. Termination"
            >
              <p>
                RUDRON may restrict, suspend, or
                terminate access to all or part of the
                Website where reasonably necessary,
                including where we believe these Terms,
                applicable law, security requirements,
                or third-party rights have been
                violated.
              </p>

              <p>
                Provisions which by their nature should
                survive termination, including
                intellectual property, limitations of
                liability, indemnification, governing
                law, and dispute-related provisions,
                shall survive to the extent applicable.
              </p>
            </Section>

            <Section
              id="severability"
              title="17. Severability & Waiver"
            >
              <p>
                If any provision of these Terms is held
                invalid, unlawful, or unenforceable, the
                remaining provisions shall continue in
                full force and effect to the maximum
                extent permitted by law.
              </p>

              <p>
                Failure by RUDRON to enforce any
                provision or exercise any right shall
                not constitute a waiver of that
                provision or right.
              </p>
            </Section>

            <Section
              id="contact"
              title="18. Contact Information"
            >
              <p>
                For questions regarding these Terms,
                please contact:
              </p>

              <div className="mt-4 space-y-2 rounded-xl border border-gray-100 bg-[#F8F7F4] p-6">
                <p className="font-bold text-[#1A1A2E]">
                  RUDRON Global Talent Solutions LLC
                </p>

                <p>
                  Address:{" "}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C89B3C] underline underline-offset-2"
                  >
                    {SITE.address.street},{" "}
                    {SITE.address.city},{" "}
                    {SITE.address.state}{" "}
                    {SITE.address.postalCode},{" "}
                    {SITE.address.country}
                  </a>
                </p>

                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE.emails.general}`}
                    className="text-[#C89B3C] underline underline-offset-2"
                  >
                    {SITE.emails.general}
                  </a>
                </p>

                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${SITE.phone.tel}`}
                    className="text-[#C89B3C] underline underline-offset-2"
                  >
                    {SITE.phone.display}
                  </a>
                </p>

                <p>
                  Website:{" "}
                  <a
                    href="/contact"
                    className="text-[#C89B3C] underline underline-offset-2"
                  >
                    www.rudrongts.com/contact
                  </a>
                </p>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  );
}