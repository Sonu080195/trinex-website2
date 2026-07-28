import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.rudrongts.com";
const LAST_UPDATED = "July 27, 2026";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Learn about RUDRON Global Talent Solutions LLP's commitment to providing an accessible and inclusive website experience.",

  alternates: {
    canonical: `${SITE_URL}/accessibility`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/accessibility`,
    siteName: "RUDRON Global Talent Solutions",
    title: "Accessibility Statement | RUDRON Global Talent Solutions",
    description:
      "Information about RUDRON's website accessibility efforts, supported technologies and feedback process.",
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
    title: "Accessibility Statement | RUDRON Global Talent Solutions",
    description:
      "Information about RUDRON's website accessibility efforts and feedback process.",
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
    href: "#commitment",
    label: "Our Commitment",
  },
  {
    href: "#standard",
    label: "Accessibility Standard",
  },
  {
    href: "#measures",
    label: "Measures We Take",
  },
  {
    href: "#features",
    label: "Accessibility Features",
  },
  {
    href: "#compatibility",
    label: "Browser Compatibility",
  },
  {
    href: "#limitations",
    label: "Known Limitations",
  },
  {
    href: "#third-party",
    label: "Third-Party Content",
  },
  {
    href: "#documents",
    label: "Documents and Files",
  },
  {
    href: "#recruitment",
    label: "Recruitment Accessibility",
  },
  {
    href: "#feedback",
    label: "Feedback and Assistance",
  },
  {
    href: "#assessment",
    label: "Assessment Approach",
  },
  {
    href: "#changes",
    label: "Statement Updates",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

export default function AccessibilityPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/accessibility#webpage`,
    url: `${SITE_URL}/accessibility`,
    name: "Accessibility Statement",
    description:
      "Accessibility Statement for RUDRON Global Talent Solutions LLP.",
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
              Accessibility
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Accessibility Statement
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
              RUDRON is committed to providing an inclusive digital experience
              for candidates, employers and other website visitors.
            </p>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:flex lg:gap-14 lg:px-8 lg:py-20">
          {/* Contents */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                Contents
              </p>

              <nav aria-label="Accessibility Statement contents">
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

          {/* Statement */}
          <article className="min-w-0 flex-1">
            <div className="mb-10 rounded-2xl border border-[#C89B3C]/20 bg-[#C89B3C]/[0.06] p-6 md:p-7">
              <p className="text-[15px] leading-7 text-[#444444]">
                Accessibility is an ongoing process. We welcome feedback from
                people who experience difficulty accessing any part of our
                website, recruitment content, job listings or forms.
              </p>
            </div>

            <Section id="commitment" title="1. Our Commitment">
              <p>
                RUDRON Global Talent Solutions LLP
                (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) is committed to making our website accessible
                and usable for the broadest possible audience.
              </p>

              <p>
                We aim to provide candidates, employers and other visitors with
                equal access to information about our recruitment services,
                employment opportunities, industry insights and contact
                facilities.
              </p>

              <p>
                We recognise that accessibility needs differ between users and
                that accessibility requires ongoing review, testing and
                improvement.
              </p>
            </Section>

            <Section id="standard" title="2. Accessibility Standard">
              <p>
                We aim to improve the website with reference to the Web Content
                Accessibility Guidelines, commonly known as WCAG.
              </p>

              <p>
                Our current objective is to work toward alignment with WCAG 2.2
                Level AA where reasonably possible.
              </p>

              <p>
                This statement does not represent that every page, component or
                third-party service has been independently audited or formally
                certified as fully conforming to WCAG 2.2 Level AA.
              </p>

              <p>
                As the website develops, we intend to review accessibility as
                part of design, content, development and maintenance work.
              </p>
            </Section>

            <Section id="measures" title="3. Measures We Take">
              <p>
                Measures intended to support website accessibility include:
              </p>

              <BulletList
                items={[
                  "Using descriptive page titles and headings;",
                  "Maintaining a logical heading structure where reasonably possible;",
                  "Providing text alternatives for meaningful images;",
                  "Using readable typography and sufficient spacing;",
                  "Supporting keyboard navigation for interactive components;",
                  "Providing visible focus indicators for links and controls;",
                  "Using meaningful labels for forms and input fields;",
                  "Avoiding unnecessary automatic movement or flashing content;",
                  "Using responsive layouts for mobile, tablet and desktop devices;",
                  "Reviewing foreground and background colour contrast;",
                  "Using semantic HTML elements where appropriate; and",
                  "Providing clear feedback when form submissions fail or require correction.",
                ]}
              />
            </Section>

            <Section id="features" title="4. Website Accessibility Features">
              <p>
                Depending on the page or feature being used, the website may
                provide:
              </p>

              <BulletList
                items={[
                  "Keyboard-accessible navigation links and buttons;",
                  "Alternative text for informative images;",
                  "Labels and instructions for application and contact forms;",
                  "Responsive page layouts that adapt to different screen sizes;",
                  "Text content that can be enlarged using browser controls;",
                  "Consistent navigation and page structure;",
                  "Visible hover and keyboard-focus states;",
                  "Descriptive link text where practical; and",
                  "Reduced reliance on colour alone to communicate meaning.",
                ]}
              />

              <p>
                Some accessibility features may depend on your browser, device,
                operating system or assistive technology.
              </p>
            </Section>

            <Section
              id="compatibility"
              title="5. Browser and Assistive-Technology Compatibility"
            >
              <p>
                The website is intended to work with current versions of
                commonly used browsers, including:
              </p>

              <BulletList
                items={[
                  "Google Chrome;",
                  "Microsoft Edge;",
                  "Mozilla Firefox;",
                  "Apple Safari; and",
                  "Modern mobile browsers on Android and iOS devices.",
                ]}
              />

              <p>
                The website may also be used with keyboard navigation, screen
                magnification, browser zoom, voice-control software and
                screen-reading technologies.
              </p>

              <p>
                Older browsers, unsupported operating systems or unusual
                browser configurations may not display or operate every feature
                correctly.
              </p>
            </Section>

            <Section id="limitations" title="6. Known Limitations">
              <p>
                Although we are working to improve accessibility, some areas may
                not yet provide an ideal experience for every visitor.
              </p>

              <p>Potential limitations may include:</p>

              <BulletList
                items={[
                  "Older images that may require improved alternative text;",
                  "Complex menus, modals or animated components that may require further keyboard testing;",
                  "Uploaded resumes, documents or files provided in inaccessible formats;",
                  "Third-party forms, scheduling tools or embedded services outside our full control;",
                  "Some colour combinations or text sizes that may require additional review;",
                  "Dynamic job-search filters that may behave differently with certain assistive technologies; and",
                  "PDF or office documents that may not yet be fully optimised for screen readers.",
                ]}
              />

              <p>
                Identification of a limitation does not mean that every visitor
                will experience it. We use feedback and testing to prioritise
                improvements.
              </p>
            </Section>

            <Section
              id="third-party"
              title="7. Third-Party Content and Services"
            >
              <p>
                The website may link to or integrate services operated by third
                parties, including:
              </p>

              <BulletList
                items={[
                  "Social-media platforms;",
                  "Video-conferencing or scheduling services;",
                  "Job boards and employer websites;",
                  "Cloud-storage or file-upload services;",
                  "Analytics and performance-monitoring services; and",
                  "Email, telephone or communication providers.",
                ]}
              />

              <p>
                We cannot guarantee the accessibility of third-party websites,
                applications or embedded content that we do not control.
              </p>

              <p>
                Visitors experiencing an accessibility problem with a
                third-party service may contact us, and we will try to provide
                an alternative method where reasonably possible.
              </p>
            </Section>

            <Section id="documents" title="8. Documents and Downloadable Files">
              <p>
                Some information may be supplied in PDF, Microsoft Word,
                spreadsheet, image or other downloadable formats.
              </p>

              <p>
                We aim to make newly created documents accessible where
                reasonably possible, but some existing or third-party documents
                may not be fully compatible with all assistive technologies.
              </p>

              <p>
                A visitor who cannot access a document may request the
                information in another reasonable format by contacting us.
              </p>

              <p>
                Please identify the page, document or information required and
                describe the format that would be most helpful.
              </p>
            </Section>

            <Section
              id="recruitment"
              title="9. Accessibility in Recruitment"
            >
              <p>
                RUDRON aims to support fair and inclusive recruitment
                processes. Candidates who require a reasonable adjustment or an
                alternative method of communication may notify us.
              </p>

              <p>Examples of assistance may include:</p>

              <BulletList
                items={[
                  "Providing job information in an alternative format;",
                  "Accepting an application through an alternative method;",
                  "Arranging communication by email or telephone;",
                  "Allowing additional time to provide requested information;",
                  "Helping a candidate navigate an online application process; and",
                  "Communicating a requested interview adjustment to an employer where appropriate.",
                ]}
              />

              <p>
                The availability and approval of a workplace or interview
                adjustment may ultimately depend on the relevant employer.
                However, we will seek to communicate reasonable requests to the
                employer where appropriate and authorised by the candidate.
              </p>

              <p>
                Candidates are not required to disclose detailed medical
                information through a general website form. Only information
                reasonably necessary to understand and support an adjustment
                request should be provided.
              </p>
            </Section>

            <Section id="feedback" title="10. Feedback and Assistance">
              <p>
                We welcome feedback regarding the accessibility of our website
                and recruitment services.
              </p>

              <p>
                When reporting an accessibility issue, please provide as much
                of the following information as you feel comfortable sharing:
              </p>

              <BulletList
                items={[
                  "The website page or URL involved;",
                  "A description of the problem;",
                  "The browser and device being used;",
                  "The assistive technology being used, if applicable;",
                  "The information or action you were trying to access; and",
                  "Your preferred method of contact.",
                ]}
              />

              <p>
                We will review accessibility feedback and aim to respond within
                a reasonable period. More complex technical issues may require
                additional investigation.
              </p>
            </Section>

            <Section id="assessment" title="11. Assessment Approach">
              <p>
                Accessibility may be reviewed through a combination of:
              </p>

              <BulletList
                items={[
                  "Internal code and content reviews;",
                  "Automated accessibility-testing tools;",
                  "Keyboard-only navigation checks;",
                  "Responsive and browser testing;",
                  "Manual review of headings, labels and alternative text;",
                  "Feedback received from website users; and",
                  "Professional accessibility review when appropriate.",
                ]}
              />

              <p>
                Automated testing alone cannot identify every accessibility
                issue. Manual testing and feedback from people using assistive
                technologies remain important.
              </p>
            </Section>

            <Section
              id="changes"
              title="12. Changes to This Accessibility Statement"
            >
              <p>
                We may update this Accessibility Statement when website
                features, accessibility practices, technical standards or
                business processes change.
              </p>

              <p>
                The latest version will be published on this page and the
                &quot;Last updated&quot; date will be revised.
              </p>
            </Section>

            <Section id="contact" title="13. Contact Us">
              <p>
                To report an accessibility problem, request assistance or ask
                for information in an alternative format, contact:
              </p>

              <div className="mt-5 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 md:p-7">
                <p className="font-bold text-[#1A1A2E]">
                  RUDRON Global Talent Solutions LLP
                </p>

                <address className="mt-3 not-italic leading-7">
                  404, 10-A, Alica Nagar CHS. LTD.
                  <br />
                  Kandivali East, Mumbai 400101
                  <br />
                  Maharashtra, India
                </address>

                <p className="mt-4">
                  General email:{" "}
                  <a
                    href="mailto:contact@rudrongts.com"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    contact@rudrongts.com
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
                  Telephone:{" "}
                  <a
                    href="tel:+12393093969"
                    className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                  >
                    +1 (239) 309-3969
                  </a>
                </p>

                <p className="mt-2">
                  Contact page:{" "}
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
                Need assistance?
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Tell us what information or support you need
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Describe the accessibility issue and we will try to provide an
                appropriate alternative or help you access the relevant
                information.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Contact RUDRON
                </Link>

                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  Privacy Policy
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

      <Footer />
    </>
  );
}