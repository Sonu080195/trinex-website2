import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";

const SITE_URL = SITE.url;
const LAST_UPDATED = "September 10, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Learn how RUDRON Global Talent Solutions LLC collects, uses, shares, stores and protects personal information through its recruitment and talent solutions services.",

  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE.name,
    title: "Privacy Policy | RUDRON Global Talent Solutions",
    description:
      "Learn how RUDRON Global Talent Solutions LLC handles personal information relating to candidates, clients, website visitors and recruitment services.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | RUDRON Global Talent Solutions",
    description:
      "Information about how RUDRON Global Talent Solutions LLC collects, uses and protects personal information.",
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

function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mb-10 scroll-mt-28"
    >
      <h2 className="mb-4 border-b-2 border-[#C89B3C] pb-2 text-xl font-bold text-[#1A1A2E] md:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-[#444444]">
        {children}
      </div>
    </section>
  );
}

function BulletList({
  items,
}: {
  items: React.ReactNode[];
}) {
  return (
    <ul className="ml-1 space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
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
    href: "#scope",
    label: "Scope",
  },
  {
    href: "#information",
    label: "Information We Collect",
  },
  {
    href: "#sources",
    label: "Sources of Information",
  },
  {
    href: "#use",
    label: "How We Use Information",
  },
  {
    href: "#legal-bases",
    label: "Legal Bases",
  },
  {
    href: "#sharing",
    label: "Information Sharing",
  },
  {
    href: "#recruitment",
    label: "Recruitment Information",
  },
  {
    href: "#ai",
    label: "AI & Automation",
  },
  {
    href: "#cookies",
    label: "Cookies & Analytics",
  },
  {
    href: "#international",
    label: "International Transfers",
  },
  {
    href: "#retention",
    label: "Data Retention",
  },
  {
    href: "#security",
    label: "Data Security",
  },
  {
    href: "#children",
    label: "Children",
  },
  {
    href: "#rights",
    label: "Your Privacy Rights",
  },
  {
    href: "#us-rights",
    label: "U.S. Privacy Rights",
  },
  {
    href: "#international-rights",
    label: "International Privacy Rights",
  },
  {
    href: "#changes",
    label: "Policy Updates",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

export default function PrivacyPolicyPage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=3707+East+Southern+Avenue+Mesa+AZ+85206";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy-policy#webpage`,
    url: `${SITE_URL}/privacy-policy`,
    name: "Privacy Policy",
    description:
      "Privacy Policy for RUDRON Global Talent Solutions LLC.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    dateModified: "2026-09-10",
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
              Privacy Policy
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
              This Privacy Policy explains how RUDRON Global Talent
              Solutions LLC collects, uses, stores, shares and protects
              personal information.
            </p>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:flex lg:gap-14 lg:px-8 lg:py-20">
          {/* Contents */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                Contents
              </p>

              <nav aria-label="Privacy Policy contents">
                <ul className="space-y-2.5">
                  {tocItems.map(
                    ({ href, label }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="block text-[13px] leading-5 text-[#555555] transition-colors duration-200 hover:text-[#C89B3C]"
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

          {/* Policy */}
          <article className="min-w-0 flex-1">
            <div className="mb-10 rounded-2xl border border-[#C89B3C]/20 bg-[#C89B3C]/[0.06] p-6 md:p-7">
              <p className="text-[15px] leading-7 text-[#444444]">
                This Privacy Policy applies to information processed by
                RUDRON Global Talent Solutions LLC
                (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;
                or &quot;our&quot;) through our website, recruitment
                services, communications and related business
                activities.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#444444]">
                It should be read together with our{" "}
                <Link
                  href="/terms"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Terms &amp; Conditions
                </Link>
                ,{" "}
                <Link
                  href="/cookie-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/disclaimer"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Website Disclaimer
                </Link>
                .
              </p>
            </div>

            <Section
              id="scope"
              title="1. Scope of This Privacy Policy"
            >
              <p>
                This Privacy Policy applies when you:
              </p>

              <BulletList
                items={[
                  <>
                    Visit{" "}
                    <a
                      href={SITE_URL}
                      className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                    >
                      www.rudrongts.com
                    </a>{" "}
                    or another RUDRON webpage linking to this policy;
                  </>,
                  "Apply for a job or submit a resume or candidate profile;",
                  "Contact us regarding employment opportunities;",
                  "Submit an employer hiring enquiry or request recruitment support;",
                  "Communicate with us by email, telephone, forms, video conference, social media or other channels;",
                  "Receive recruitment, business-development or service communications from us;",
                  "Participate in a recruitment, screening, interview or placement process; or",
                  "Otherwise interact with our recruitment, executive-search or talent services.",
                ]}
              />

              <p>
                This policy does not govern the independent privacy
                practices of employers, job boards, social-media
                platforms or other third parties that operate their own
                websites and services.
              </p>
            </Section>

            <Section
              id="information"
              title="2. Information We Collect"
            >
              <h3 className="font-semibold text-[#1A1A2E]">
                2.1 Information You Provide
              </h3>

              <p>
                The personal information we collect depends on how you
                interact with RUDRON and may include:
              </p>

              <BulletList
                items={[
                  "Name;",
                  "Email address;",
                  "Telephone number;",
                  "City, state, country or other location information;",
                  "Current and desired job title;",
                  "Resume or curriculum vitae;",
                  "Employment history;",
                  "Education and professional qualifications;",
                  "Skills, certifications and licences;",
                  "Compensation expectations;",
                  "Availability and notice period;",
                  "Work-authorisation information;",
                  "Professional references;",
                  "LinkedIn or other professional profile information;",
                  "Interview and scheduling information;",
                  "Information contained in messages, forms or enquiries;",
                  "Employer or company information;",
                  "Hiring requirements and job specifications; and",
                  "Other information you voluntarily provide during a recruitment or business interaction.",
                ]}
              />

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                2.2 Information Collected Automatically
              </h3>

              <p>
                When you use our website, certain technical information
                may be collected automatically by our hosting,
                security, analytics or technology providers.
              </p>

              <p>This may include:</p>

              <BulletList
                items={[
                  "Internet Protocol address;",
                  "Browser type and version;",
                  "Device type;",
                  "Operating system;",
                  "Referring website or page;",
                  "Pages visited;",
                  "Approximate location derived from technical information such as IP address;",
                  "Date and time of access;",
                  "Website interaction and performance information;",
                  "Error, diagnostic and security logs; and",
                  "Cookie or similar technology identifiers where applicable.",
                ]}
              />

              <p>
                We do not ordinarily require access to your device&apos;s
                precise GPS location simply to browse the RUDRON
                website.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                2.3 Sensitive Personal Information
              </h3>

              <p>
                RUDRON does not generally request sensitive personal
                information through ordinary website forms unless it is
                reasonably necessary for a lawful recruitment,
                accommodation, compliance or related purpose.
              </p>

              <p>
                Candidates should avoid including unnecessary sensitive
                information in resumes, cover letters or general
                enquiries.
              </p>
            </Section>

            <Section
              id="sources"
              title="3. Sources of Personal Information"
            >
              <p>
                We may collect personal information from:
              </p>

              <BulletList
                items={[
                  "You directly;",
                  "Our website forms and recruitment applications;",
                  "Resumes or documents submitted to RUDRON;",
                  "Public professional profiles and publicly available sources;",
                  "Professional networking platforms;",
                  "Job boards and recruitment databases;",
                  "Employer clients and hiring managers;",
                  "References or professional contacts where appropriate;",
                  "Recruitment, ATS, CRM, sourcing or business-development platforms;",
                  "Scheduling and communication tools;",
                  "Service providers supporting our website and recruitment operations; and",
                  "Other lawful sources relevant to recruitment or business development.",
                ]}
              />

              <p>
                When we obtain information from third-party or publicly
                available sources, we use it in accordance with
                applicable law and our legitimate recruitment and
                business purposes.
              </p>
            </Section>

            <Section
              id="use"
              title="4. How We Use Personal Information"
            >
              <p>
                We may process personal information to:
              </p>

              <BulletList
                items={[
                  "Provide recruitment, executive-search and talent-acquisition services;",
                  "Identify and evaluate candidates for potential opportunities;",
                  "Match candidate experience with employer requirements;",
                  "Communicate with candidates regarding relevant job opportunities;",
                  "Submit candidate information to employer clients where appropriate;",
                  "Coordinate interviews, screening and recruitment activities;",
                  "Respond to candidate, client and website enquiries;",
                  "Support employer hiring requirements;",
                  "Maintain candidate and business-contact records;",
                  "Operate our recruitment databases, systems and workflows;",
                  "Manage client relationships and business development;",
                  "Send administrative or service-related communications;",
                  "Send marketing or opportunity communications where legally permitted;",
                  "Improve our website, recruitment services and business processes;",
                  "Maintain website security and prevent fraud or misuse;",
                  "Comply with applicable legal and regulatory obligations;",
                  "Establish, exercise or defend legal rights; and",
                  "Perform other purposes disclosed when information is collected or otherwise permitted by law.",
                ]}
              />
            </Section>

            <Section
              id="legal-bases"
              title="5. Legal Bases for Processing"
            >
              <p>
                The legal basis for processing personal information
                depends on the applicable jurisdiction and the
                circumstances in which the information is processed.
              </p>

              <p>
                Where applicable, RUDRON may rely on:
              </p>

              <BulletList
                items={[
                  <>
                    <strong>Consent:</strong> where you have given us
                    permission to process information for a particular
                    purpose.
                  </>,
                  <>
                    <strong>Contractual necessity:</strong> where
                    processing is necessary to provide requested
                    services or take steps connected with a potential
                    contractual relationship.
                  </>,
                  <>
                    <strong>Legitimate interests:</strong> where
                    processing is reasonably necessary for our
                    recruitment, client-service, security, operational
                    or business interests and those interests are not
                    overridden by applicable individual rights.
                  </>,
                  <>
                    <strong>Legal obligations:</strong> where processing
                    is necessary to comply with applicable law, court
                    orders, regulatory requirements or lawful requests.
                  </>,
                  <>
                    <strong>Protection of legal rights or vital
                    interests:</strong> where applicable and legally
                    permitted.
                  </>,
                ]}
              />

              <p>
                Candidates and clients may contact us if they would like
                additional information concerning the basis relied upon
                for a particular processing activity.
              </p>
            </Section>

            <Section
              id="sharing"
              title="6. When and With Whom We Share Information"
            >
              <p>
                We do not disclose personal information indiscriminately.
                Information may be shared when reasonably necessary for
                recruitment, service delivery, business operations,
                compliance or other lawful purposes.
              </p>

              <p>
                Categories of recipients may include:
              </p>

              <BulletList
                items={[
                  <>
                    <strong>Employer clients and hiring organisations:</strong>{" "}
                    when candidate information is relevant to a potential
                    opportunity or recruitment engagement.
                  </>,
                  <>
                    <strong>Technology and service providers:</strong>{" "}
                    including hosting, database, file-storage, email,
                    communication, analytics, scheduling, security and
                    recruitment-system providers.
                  </>,
                  <>
                    <strong>Professional advisers:</strong> such as legal,
                    accounting, compliance or other professional service
                    providers where necessary.
                  </>,
                  <>
                    <strong>Business transaction participants:</strong>{" "}
                    where information is relevant to a merger,
                    acquisition, financing, restructuring, sale or other
                    corporate transaction.
                  </>,
                  <>
                    <strong>Government or legal authorities:</strong>{" "}
                    where disclosure is required or permitted by law.
                  </>,
                ]}
              />

              <p>
                Third-party service providers may process personal
                information on our behalf in connection with services
                they provide to RUDRON.
              </p>

              <p>
                Employer clients receiving candidate information may
                process that information independently under their own
                privacy and employment practices.
              </p>
            </Section>

            <Section
              id="recruitment"
              title="7. Candidate and Recruitment Information"
            >
              <p>
                When you submit a resume, apply for a role or otherwise
                engage with RUDRON as a candidate, we may retain your
                professional information in our recruitment systems and
                databases.
              </p>

              <p>
                We may use this information to:
              </p>

              <BulletList
                items={[
                  "Assess your suitability for current opportunities;",
                  "Consider you for future relevant opportunities;",
                  "Contact you regarding employment opportunities;",
                  "Conduct recruitment screening and qualification discussions;",
                  "Maintain records concerning recruitment activity;",
                  "Coordinate with employer clients;",
                  "Avoid duplicate candidate submissions where appropriate;",
                  "Support placement and post-placement administration; and",
                  "Comply with applicable contractual and legal requirements.",
                ]}
              />

              <p>
                Submission of candidate information does not guarantee
                an interview, presentation to a client, job offer or
                placement.
              </p>

              <p>
                Candidates should ensure information provided to RUDRON
                is accurate and current.
              </p>
            </Section>

            <Section
              id="ai"
              title="8. Artificial Intelligence and Automated Tools"
            >
              <p>
                RUDRON may use artificial intelligence, automation,
                search, matching, summarisation and other
                technology-assisted tools to support recruitment and
                business processes.
              </p>

              <p>Such tools may assist with:</p>

              <BulletList
                items={[
                  "Searching and organising candidate information;",
                  "Matching experience with job requirements;",
                  "Drafting or summarising recruitment information;",
                  "Organising communications and administrative workflows;",
                  "Supporting candidate sourcing and screening;",
                  "Identifying potentially relevant candidates or opportunities; and",
                  "Improving operational efficiency.",
                ]}
              />

              <p>
                Technology-assisted outputs may be incomplete or
                inaccurate and are intended to support, rather than
                automatically replace, appropriate human involvement in
                recruitment processes.
              </p>

              <p>
                Where applicable law provides rights relating to solely
                automated decisions that produce legal or similarly
                significant effects, those rights will be respected.
              </p>
            </Section>

            <Section
              id="cookies"
              title="9. Cookies, Analytics and Similar Technologies"
            >
              <p>
                RUDRON and service providers supporting our website may
                use cookies, local storage, server logs and similar
                technologies for purposes such as:
              </p>

              <BulletList
                items={[
                  "Operating website functionality;",
                  "Remembering privacy and cookie preferences;",
                  "Maintaining website security;",
                  "Understanding website performance;",
                  "Diagnosing technical problems;",
                  "Preventing fraud or misuse; and",
                  "Measuring website usage where permitted.",
                ]}
              />

              <p>
                Optional analytics or other non-essential technologies
                are subject to our cookie controls where consent is
                required.
              </p>

              <p>
                Additional information is available in our{" "}
                <Link
                  href="/cookie-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </Section>

            <Section
              id="international"
              title="10. International Processing and Transfers"
            >
              <p>
                RUDRON operates and provides recruitment services across
                multiple markets. Our website, databases,
                communications and service providers may process or
                store information in the United States and other
                countries.
              </p>

              <p>
                This means personal information may be processed in a
                country different from the country in which it was
                originally collected.
              </p>

              <p>
                Data-protection and privacy laws may differ between
                jurisdictions. Where applicable law requires safeguards
                for international transfers, RUDRON will seek to use
                appropriate lawful mechanisms and contractual,
                technical or organisational safeguards.
              </p>

              <p>
                Third-party technology providers may maintain
                infrastructure or personnel in multiple jurisdictions.
                Their processing is subject to their applicable service
                terms, privacy commitments and our arrangements with
                them.
              </p>
            </Section>

            <Section
              id="retention"
              title="11. How Long We Keep Information"
            >
              <p>
                RUDRON retains personal information for as long as
                reasonably necessary for the purposes for which it was
                collected and for legitimate recruitment, contractual,
                operational, legal, security and compliance purposes.
              </p>

              <p>
                Retention periods may vary depending on:
              </p>

              <BulletList
                items={[
                  "The nature of the information;",
                  "Whether you are a candidate, client or other business contact;",
                  "Ongoing or potential recruitment opportunities;",
                  "Client contractual requirements;",
                  "Candidate ownership or placement-related records;",
                  "Legal, tax, accounting or regulatory requirements;",
                  "Dispute-resolution requirements;",
                  "Fraud-prevention or security requirements; and",
                  "Whether deletion is technically possible from backup systems.",
                ]}
              />

              <p>
                Candidate information may generally be retained for a
                reasonable period so we can consider candidates for
                relevant current and future opportunities, unless a
                shorter period is required by law or a valid deletion
                request applies.
              </p>

              <p>
                When information is no longer reasonably required, we
                may delete, anonymise or securely restrict further use
                of it, subject to applicable legal and technical
                requirements.
              </p>
            </Section>

            <Section
              id="security"
              title="12. How We Protect Personal Information"
            >
              <p>
                We use reasonable technical, administrative and
                organisational measures intended to protect personal
                information against unauthorised access, loss, misuse,
                alteration or disclosure.
              </p>

              <p>
                Measures may include, where appropriate:
              </p>

              <BulletList
                items={[
                  "Access restrictions;",
                  "Secure database and cloud infrastructure;",
                  "Authentication controls;",
                  "Encrypted network communications;",
                  "Secure file-storage systems;",
                  "Administrative access controls;",
                  "System logging and monitoring;",
                  "Software and infrastructure security controls; and",
                  "Use of established technology providers.",
                ]}
              />

              <p>
                However, no method of electronic transmission, internet
                communication or data storage can be guaranteed to be
                completely secure.
              </p>

              <p>
                Users should use appropriate security precautions when
                communicating sensitive or confidential information
                electronically.
              </p>
            </Section>

            <Section
              id="children"
              title="13. Children's Privacy"
            >
              <p>
                RUDRON&apos;s recruitment and business services are
                primarily intended for adults and professional users.
                We do not knowingly collect personal information from
                children under 18 through our general recruitment
                website for marketing or ordinary candidate-placement
                purposes.
              </p>

              <p>
                If we become aware that personal information from a
                child has been collected in circumstances where it
                should not have been collected, we will take reasonable
                steps to review and delete or otherwise appropriately
                handle the information.
              </p>

              <p>
                Concerns regarding information relating to a minor may
                be sent to{" "}
                <a
                  href={`mailto:${SITE.emails.general}`}
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  {SITE.emails.general}
                </a>
                .
              </p>
            </Section>

            <Section
              id="rights"
              title="14. Your Privacy Rights"
            >
              <p>
                Depending on where you live and the laws applicable to
                the processing of your information, you may have rights
                concerning your personal information.
              </p>

              <p>These may include the right to:</p>

              <BulletList
                items={[
                  "Request access to personal information we maintain about you;",
                  "Request correction of inaccurate personal information;",
                  "Request deletion of certain personal information;",
                  "Request restriction of certain processing;",
                  "Object to certain processing;",
                  "Withdraw consent where processing relies on consent;",
                  "Request a portable copy of certain information;",
                  "Opt out of certain marketing communications;",
                  "Opt out of certain targeted advertising, sale or sharing activities where applicable;",
                  "Request information concerning categories or recipients of disclosures where applicable;",
                  "Request human review of certain automated decisions where applicable; and",
                  "Appeal certain privacy-request decisions where applicable law provides that right.",
                ]}
              />

              <p>
                These rights are not absolute. We may need to retain or
                continue processing certain information where permitted
                or required by law.
              </p>

              <p>
                We may also need to verify your identity before
                completing a privacy request.
              </p>

              <p>
                You may exercise applicable rights by contacting us
                using the details in the Contact Us section below or by
                using our{" "}
                <Link
                  href="/contact"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  contact page
                </Link>
                .
              </p>
            </Section>

            <Section
              id="us-rights"
              title="15. United States Privacy Rights"
            >
              <p>
                Residents of certain U.S. states may have additional
                privacy rights under applicable state privacy laws.
              </p>

              <p>
                Depending on the law and whether it applies to RUDRON,
                these rights may include access, correction, deletion,
                portability, opt-out and appeal rights.
              </p>

              <p>
                RUDRON does not intend to sell personal information in
                exchange for monetary payment.
              </p>

              <p>
                If RUDRON engages in processing that qualifies as a
                &quot;sale&quot;, &quot;sharing&quot;, targeted
                advertising or profiling under an applicable state
                privacy law, we will provide any legally required
                notices and opt-out mechanisms.
              </p>

              <p>
                We will not unlawfully discriminate against an
                individual for exercising an applicable privacy right.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                Authorised Agents
              </h3>

              <p>
                Where applicable law permits use of an authorised agent,
                we may request evidence that the agent is authorised to
                act on your behalf and may independently verify your
                identity.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                Appeals
              </h3>

              <p>
                If applicable state law gives you a right to appeal a
                privacy-request decision, instructions for submitting an
                appeal will be provided with our response.
              </p>
            </Section>

            <Section
              id="international-rights"
              title="16. International Privacy Rights"
            >
              <p>
                Individuals in jurisdictions such as the European
                Economic Area, United Kingdom, Switzerland, Canada,
                Australia and other regions may have additional rights
                under applicable privacy or data-protection laws.
              </p>

              <p>
                Depending on the jurisdiction and whether the relevant
                law applies to RUDRON&apos;s processing, these rights
                may include:
              </p>

              <BulletList
                items={[
                  "Access to personal information;",
                  "Correction or rectification;",
                  "Deletion or erasure;",
                  "Restriction of processing;",
                  "Objection to certain processing;",
                  "Data portability;",
                  "Withdrawal of consent;",
                  "Rights relating to certain automated decision-making; and",
                  "The right to complain to a competent privacy or data-protection authority.",
                ]}
              />

              <p>
                Applicable rights and legal requirements vary by
                jurisdiction and may be subject to exemptions and
                limitations.
              </p>
            </Section>

            <Section
              id="changes"
              title="17. Changes to This Privacy Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our services, technology, business
                practices, service providers or legal obligations.
              </p>

              <p>
                The revised policy will be published on this page and
                the &quot;Last updated&quot; date will be changed.
              </p>

              <p>
                Where required or appropriate, material changes may
                also be communicated through an additional website
                notice or other communication.
              </p>
            </Section>

            <Section
              id="contact"
              title="18. Contact Us"
            >
              <p>
                Questions, privacy requests or concerns regarding this
                Privacy Policy or RUDRON&apos;s handling of personal
                information may be directed to:
              </p>

              <div className="mt-5 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 md:p-7">
                <p className="font-bold text-[#1A1A2E]">
                  RUDRON Global Talent Solutions LLC
                </p>

                <p className="mt-4">
                  United States address:{" "}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    {SITE.address.street},{" "}
                    {SITE.address.city},{" "}
                    {SITE.address.state}{" "}
                    {SITE.address.postalCode},{" "}
                    {SITE.address.country}
                  </a>
                </p>

                <p className="mt-2">
                  Privacy and legal enquiries:{" "}
                  <a
                    href="mailto:privacy@rudrongts.com"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    privacy@rudrongts.com
                  </a>
                </p>

                <p className="mt-2">
                  General enquiries:{" "}
                  <a
                    href={`mailto:${SITE.emails.general}`}
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    {SITE.emails.general}
                  </a>
                </p>

                <p className="mt-2">
                  Telephone:{" "}
                  <a
                    href={`tel:${SITE.phone.tel}`}
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    {SITE.phone.display}
                  </a>
                </p>

                <p className="mt-2">
                  Privacy request page:{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    www.rudrongts.com/contact
                  </Link>
                </p>
              </div>

              <p>
                To help us process a privacy request, please provide
                enough information to identify the relevant records and
                explain the nature of your request.
              </p>

              <p>
                We may request additional information when reasonably
                necessary to verify identity, protect personal
                information or comply with applicable law.
              </p>
            </Section>

            <div className="mt-14 rounded-2xl bg-[#050D18] p-7 text-white md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Privacy controls
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Questions about your information?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact RUDRON if you would like to ask a privacy
                question or submit a request concerning personal
                information associated with you.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Contact RUDRON
                </Link>

                <Link
                  href="/cookie-policy"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  Cookie Policy
                </Link>

                <Link
                  href="/terms"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}