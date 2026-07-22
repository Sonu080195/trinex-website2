import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of RUDRON Global Talent Solutions LLP' website and recruitment services.",
  alternates: {
    canonical: "https://www.rudrongts.com/terms",
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "July 22, 2026";
const LAST_UPDATED   = "July 22, 2026";

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
  { href: "#agreement",       label: "Agreement to Terms" },
  { href: "#definitions",     label: "Definitions" },
  { href: "#eligibility",     label: "Eligibility" },
  { href: "#candidates",      label: "Candidate Terms" },
  { href: "#employers",       label: "Employer / Client Terms" },
  { href: "#acceptable-use",  label: "Acceptable Use Policy" },
  { href: "#ip",              label: "Intellectual Property" },
  { href: "#privacy",         label: "Privacy & Data Protection" },
  { href: "#disclaimer",      label: "Disclaimer of Warranties" },
  { href: "#liability",       label: "Limitation of Liability" },
  { href: "#indemnification", label: "Indemnification" },
  { href: "#third-party",     label: "Third-Party Services" },
  { href: "#governing-law",   label: "Governing Law" },
  { href: "#modifications",   label: "Modifications to Terms" },
  { href: "#termination",     label: "Termination" },
  { href: "#severability",    label: "Severability & Waiver" },
  { href: "#contact",         label: "Contact Information" },
];

export default function TermsPage() {
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
            Terms &amp; Conditions
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

            <Section id="agreement" title="1. Agreement to Terms">
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you and RUDRON Global Talent Solutions LLP (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using{" "}
                <a href="https://www.rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">
                  www.rudrongts.com
                </a>{" "}
                or any of our recruitment services, you confirm that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, you must immediately cease using our website and services.
              </p>
            </Section>

            <Section id="definitions" title="2. Definitions">
              <BulletList items={[
                "'Website' means www.rudrongts.com and all associated subdomains",
                "'Services' means recruitment, talent acquisition, executive search, and related consulting services provided by RUDRON",
                "'Candidate' means any individual who registers, applies for jobs, or submits their profile through our platform",
                "'Employer / Client' means any organisation that engages RUDRON to source or place talent",
                "'Content' means all text, data, graphics, and materials published on the Website",
              ]} />
            </Section>

            <Section id="eligibility" title="3. Eligibility">
              <p>
                You must be at least 18 years of age to use our Services. By using the Website, you represent and warrant that you meet this requirement and that all information you provide is accurate, current, and complete.
              </p>
            </Section>

            <Section id="candidates" title="4. Candidate Terms">
              <p className="font-semibold text-[#1A1A2E]">Account & Profile</p>
              <BulletList items={[
                "You are responsible for maintaining the confidentiality of any login credentials",
                "All information submitted in your profile, resume, or application must be truthful and accurate",
                "Misrepresentation of qualifications, experience, or credentials is grounds for immediate removal",
              ]} />
              <p className="font-semibold text-[#1A1A2E] pt-2">Job Applications</p>
              <BulletList items={[
                "Submitting an application does not guarantee an interview or placement",
                "RUDRON acts as an intermediary and cannot guarantee employment outcomes",
                "You authorise RUDRON to present your profile to employer clients for roles you apply to or are matched with, subject to your explicit consent for each engagement",
              ]} />
              <p className="font-semibold text-[#1A1A2E] pt-2">Candidate Conduct</p>
              <p>
                Candidates must not submit false or misleading information; use the platform to harvest employer or recruiter contact details; or engage in any activity that disrupts the Website or Services.
              </p>
            </Section>

            <Section id="employers" title="5. Employer / Client Terms">
              <p className="font-semibold text-[#1A1A2E]">Engagement Agreement</p>
              <p>
                Employers engaging RUDRON for recruitment services are subject to a separate written service agreement that governs fees, exclusivity, replacement guarantees, and payment terms. These Terms apply in addition to, and do not supersede, that agreement.
              </p>
              <p className="font-semibold text-[#1A1A2E] pt-2">Employer Obligations</p>
              <BulletList items={[
                "Provide accurate, non-discriminatory job descriptions and requirements",
                "Comply with all applicable employment laws in the jurisdiction of hire",
                "Not directly engage or circumvent RUDRON to hire a candidate introduced by RUDRON outside of the agreed fee arrangement",
              ]} />
              <p className="font-semibold text-[#1A1A2E] pt-2">Anti-Circumvention</p>
              <p>
                If an employer directly hires or engages (in any capacity) a candidate introduced by RUDRON within 12 months of introduction, the full placement fee becomes immediately payable, regardless of whether a formal engagement agreement was signed.
              </p>
            </Section>

            <Section id="acceptable-use" title="6. Acceptable Use Policy">
              <p>When using our Website or Services, you agree not to:</p>
              <BulletList items={[
                "Upload or transmit malicious code, viruses, or harmful software",
                "Attempt to gain unauthorised access to our systems or data",
                "Scrape, crawl, or extract data from the Website by automated means",
                "Post or transmit unlawful, defamatory, discriminatory, or obscene content",
                "Impersonate any person or entity or misrepresent your affiliation",
                "Use our Services for any purpose that violates applicable law",
              ]} />
            </Section>

            <Section id="ip" title="7. Intellectual Property">
              <p>
                All content on the Website — including text, graphics, logos, icons, and software — is the property of RUDRON or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
              <p>
                You retain ownership of any resume, CV, or portfolio you submit. By submitting such materials, you grant RUDRON a non-exclusive, royalty-free licence to use, store, and share them for the purpose of providing our recruitment Services.
              </p>
            </Section>

            <Section id="privacy" title="8. Privacy & Data Protection">
              <p>
                Your use of our Services is also governed by our{" "}
                <a href="/privacy-policy" className="text-[#C89B3C] underline underline-offset-2">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>
            </Section>


            <Section id="ai-services" title="9. AI-Assisted Recruitment Services">
              <p>RUDRON may use AI-assisted technologies to improve communications, scheduling, candidate matching, note generation and recruitment workflows. AI tools assist our team but do not replace human judgement in recruitment decisions. Processing of personal information remains subject to our Privacy Policy.</p>
            </Section>
            <Section id="disclaimer" title="10. Disclaimer of Warranties">
              <p>
                The Website and Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. RUDRON does not warrant that:
              </p>
              <BulletList items={[
                "The Website will be uninterrupted, error-free, or free of viruses",
                "Any particular job listing is current, accurate, or will result in an offer",
                "Any candidate is suitable for any particular role",
              ]} />
            </Section>

            <Section id="liability" title="11. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, RUDRON shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our Website or Services. Our total aggregate liability shall not exceed USD $500 or the amount you paid us in the preceding 12 months, whichever is greater.
              </p>
            </Section>

            <Section id="indemnification" title="12. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless RUDRON and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of your use of our Services, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </Section>

            <Section id="third-party" title="13. Third-Party Services & Links">
              <p>
                Our Website may link to third-party websites or integrate with third-party platforms such as LinkedIn. RUDRON is not responsible for the content, policies, or practices of any third party. Use of third-party services is at your own risk.
              </p>
            </Section>

            <Section id="governing-law" title="14. Governing Law & Dispute Resolution">
              <p>
                These Terms shall be governed by the and construed in accordance with the laws of India. Unless otherwise agreed in a separate written agreement between RUDRON Global Talent Solutions LLP LLP and the client, disputes shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India. The parties are encouraged to attempt good-faith negotiations before commencing legal proceedings.
              </p>
            </Section>

            <Section id="modifications" title="15. Modifications to Terms">
              <p>
                RUDRON reserves the right to modify these Terms at any time. Continued use of the Website following the posting of changes constitutes your acceptance of the revised Terms. Material changes will be indicated by an updated &quot;Last Updated&quot; date.
              </p>
            </Section>

            <Section id="termination" title="16. Termination">
              <p>
                RUDRON may suspend or terminate your access to the Website and Services at any time, with or without cause or notice, if we believe you have violated these Terms or applicable law. Upon termination, all licences granted under these Terms will immediately cease.
              </p>
            </Section>

            <Section id="severability" title="17. Severability & Waiver">
              <p>
                If any provision of these Terms is found to be unenforceable, it shall be modified to the minimum extent necessary to make it enforceable, with remaining provisions continuing in full force. Failure to enforce any right does not constitute a waiver of that right.
              </p>
            </Section>

            <Section id="contact" title="18. Contact Information">
              <p>For questions or concerns regarding these Terms:</p>
              <div className="mt-4 bg-[#F8F7F4] rounded-xl p-6 border border-gray-100 space-y-1">
                <p className="font-bold text-[#1A1A2E]">RUDRON Global Talent Solutions LLP</p>
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
            </Section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}