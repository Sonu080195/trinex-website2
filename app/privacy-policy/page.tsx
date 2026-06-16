import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how RUDRON Global Talent Solutions collects, uses, and protects your personal information across our recruitment and talent acquisition services.",
  alternates: {
    canonical: "https://www.rudrongts.com/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 16, 2025";
const LAST_UPDATED   = "June 16, 2025";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-3 pb-2 border-b-2 border-[#C89B3C]">
        {title}
      </h2>
      <div className="space-y-3 text-[#444444] leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="text-[#C89B3C] mt-1 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const tocItems = [
  { href: "#introduction",          label: "Introduction" },
  { href: "#information-collected", label: "Information We Collect" },
  { href: "#how-we-use",            label: "How We Use Your Information" },
  { href: "#legal-bases",           label: "Legal Bases for Processing" },
  { href: "#disclosure",            label: "Disclosure of Your Information" },
  { href: "#cookies",               label: "Cookies & Tracking" },
  { href: "#retention",             label: "Data Retention" },
  { href: "#international",         label: "International Transfers" },
  { href: "#your-rights",           label: "Your Rights" },
  { href: "#security",              label: "Data Security" },
  { href: "#children",              label: "Children's Privacy" },
  { href: "#third-party",           label: "Third-Party Links" },
  { href: "#changes",               label: "Changes to This Policy" },
  { href: "#contact",               label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">

        {/* ── Hero banner ── */}
        <div className="bg-[#1A1A2E] py-34 px-6 text-center">
          <p className="text-[#C89B3C] text-sm font-semibold tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Effective: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14 lg:flex lg:gap-14">

          {/* ── Sticky sidebar TOC ── */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-[#F8F7F4] rounded-xl p-6 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] mb-4">
                Contents
              </p>
              <nav>
                <ul className="space-y-2">
                  {tocItems.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="text-[13px] text-[#555] hover:text-[#C89B3C] transition-colors duration-200 block"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <article className="flex-1 min-w-0">

            <Section id="introduction" title="1. Introduction">
              <p>
                RUDRON Global Talent Solutions (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit{" "}
                <a href="https://www.rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">www.rudrongts.com</a>{" "}
                or interact with our recruitment services across the United States, Canada, United Arab Emirates, and India.
              </p>
              <p>
                By using our website or submitting your information to us, you consent to the practices described in this Policy. If you do not agree, please discontinue use of our services.
              </p>
            </Section>

            <Section id="information-collected" title="2. Information We Collect">
              <p className="font-semibold text-[#1A1A2E]">Information You Provide Directly</p>
              <BulletList items={[
                "Full name, email address, phone number, and mailing address",
                "Resume, CV, portfolio, or other professional documents you upload",
                "Job application data including work history, education, skills, and references",
                "Communications you send to us via contact forms or email",
              ]} />
              <p className="font-semibold text-[#1A1A2E] pt-2">Information Collected Automatically</p>
              <BulletList items={[
                "Browser type, operating system, device identifiers, and IP address",
                "Pages visited, time spent on pages, and referring URLs",
                "Cookie and tracking-pixel data (see Section 6)",
              ]} />
              <p className="font-semibold text-[#1A1A2E] pt-2">Information from Third Parties</p>
              <BulletList items={[
                "Professional profile data from LinkedIn or other platforms when you connect them",
                "Background-check results obtained with your explicit consent",
              ]} />
            </Section>

            <Section id="how-we-use" title="3. How We Use Your Information">
              <p>We use the information we collect for the following purposes:</p>
              <BulletList items={[
                "To match candidates with relevant job opportunities and employer clients",
                "To communicate with you about your application status and new opportunities",
                "To verify your identity and professional credentials",
                "To improve our website, services, and recruitment processes",
                "To comply with applicable legal and regulatory obligations",
                "To send relevant industry insights and updates (with your consent)",
                "To prevent fraud and protect our legal rights",
              ]} />
            </Section>

            <Section id="legal-bases" title="4. Legal Bases for Processing (GDPR / PIPEDA)">
              <p>Where applicable law requires a legal basis for processing, we rely on:</p>
              <BulletList items={[
                "Contractual necessity: to fulfil our recruitment services to you",
                "Legitimate interests: to operate, improve, and secure our business",
                "Legal obligation: to comply with applicable laws and regulations",
                "Consent: for marketing communications and optional data sharing",
              ]} />
            </Section>

            <Section id="disclosure" title="5. Disclosure of Your Information">
              <p>We do not sell your personal information. We may share your data with:</p>
              <BulletList items={[
                "Employer clients — only with your explicit prior consent for each role",
                "Third-party service providers (hosting, analytics, ATS) bound by data-processing agreements",
                "Professional background-check providers — with your written consent",
                "Legal authorities — when required by law, court order, or to protect safety",
                "Business successors — in connection with a merger, acquisition, or asset sale",
              ]} />
            </Section>

            <Section id="cookies" title="6. Cookies & Tracking Technologies">
              <p>We use cookies and similar technologies to operate and improve our website:</p>
              <BulletList items={[
                "Strictly Necessary: session management, security, and core functionality",
                "Analytics: understanding usage patterns via tools such as Google Analytics",
                "Preference: remembering your settings and search filters",
              ]} />
              <p>
                You may manage or withdraw cookie consent at any time through your browser settings or our cookie banner. Disabling certain cookies may affect website functionality.
              </p>
            </Section>

            <Section id="retention" title="7. Data Retention">
              <p>We retain your personal data only as long as necessary:</p>
              <BulletList items={[
                "Active candidate profiles: up to 3 years from last meaningful contact",
                "Unsuccessful job applications: up to 12 months",
                "Financial and contract records: up to 7 years (or as required by law)",
                "Analytics data: up to 26 months in anonymised form",
              ]} />
              <p>You may request deletion of your data at any time (see Section 9).</p>
            </Section>

            <Section id="international" title="8. International Data Transfers">
              <p>
                As we operate across the United States, Canada, United Arab Emirates, and India, your data may be transferred across borders. We ensure adequate safeguards are in place, including:
              </p>
              <BulletList items={[
                "Standard Contractual Clauses (SCCs) for transfers from the EEA",
                "Privacy Shield successor frameworks and PIPEDA compliance for Canada-US transfers",
                "Contractual data-processing agreements with all third-party processors",
              ]} />
            </Section>

            <Section id="your-rights" title="9. Your Rights">
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <BulletList items={[
                "Access: request a copy of the data we hold about you",
                "Correction: request we update inaccurate or incomplete data",
                "Deletion: request erasure of your data ('right to be forgotten')",
                "Portability: receive your data in a structured, machine-readable format",
                "Objection / Restriction: object to or restrict certain types of processing",
                "Withdraw Consent: opt out of marketing communications at any time",
              ]} />
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">
                  privacy@rudrongts.com
                </a>. We will respond within 30 days.
              </p>
            </Section>

            <Section id="security" title="10. Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction — including encrypted data transmission (TLS/SSL), access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </Section>

            <Section id="children" title="11. Children's Privacy">
              <p>
                Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware we have inadvertently collected such data, we will delete it promptly.
              </p>
            </Section>

            <Section id="third-party" title="12. Third-Party Links">
              <p>
                Our website may contain links to third-party websites (e.g., LinkedIn, employer career pages). We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
              </p>
            </Section>

            <Section id="changes" title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy periodically. Material changes will be communicated via a prominent notice on our website or by direct notification. The &quot;Last Updated&quot; date at the top of this document will reflect the latest revision.
              </p>
            </Section>

            <Section id="contact" title="14. Contact Us">
              <p>For privacy-related questions, requests, or complaints:</p>
              <div className="mt-4 bg-[#F8F7F4] rounded-xl p-6 border border-gray-100 space-y-1">
                <p className="font-bold text-[#1A1A2E]">RUDRON Global Talent Solutions</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">
                    privacy@rudrongts.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="/contact" className="text-[#C89B3C] underline underline-offset-2">
                    www.rudrongts.com/contact
                  </a>
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                If you are located in the EU/EEA and believe your data protection rights have been violated, you also have the right to lodge a complaint with your local supervisory authority.
              </p>
            </Section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}