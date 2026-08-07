import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

const SITE_URL = "https://www.rudrongts.com";
const LAST_UPDATED = "July 27, 2026";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how RUDRON Global Talent Solutions LLP uses cookies and similar technologies on its website and how you can manage your preferences.",

  alternates: {
    canonical: `${SITE_URL}/cookie-policy`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/cookie-policy`,
    siteName: "RUDRON Global Talent Solutions",
    title: "Cookie Policy | RUDRON Global Talent Solutions",
    description:
      "Information about the cookies and similar technologies used on the RUDRON Global Talent Solutions website.",
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
    title: "Cookie Policy | RUDRON Global Talent Solutions",
    description:
      "Information about the cookies and similar technologies used on the RUDRON Global Talent Solutions website.",
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
    href: "#introduction",
    label: "Introduction",
  },
  {
    href: "#what-are-cookies",
    label: "What Are Cookies?",
  },
  {
    href: "#technologies",
    label: "Technologies We Use",
  },
  {
    href: "#categories",
    label: "Categories of Cookies",
  },
  {
    href: "#current-use",
    label: "Cookies Currently Used",
  },
  {
    href: "#third-parties",
    label: "Third-Party Technologies",
  },
  {
    href: "#preferences",
    label: "Managing Preferences",
  },
  {
    href: "#browser-controls",
    label: "Browser Controls",
  },
  {
    href: "#retention",
    label: "Retention",
  },
  {
    href: "#international",
    label: "International Visitors",
  },
  {
    href: "#privacy",
    label: "Privacy & Personal Data",
  },
  {
    href: "#changes",
    label: "Changes to This Policy",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

export default function CookiePolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/cookie-policy#webpage`,
    url: `${SITE_URL}/cookie-policy`,
    name: "Cookie Policy",
    description:
      "Information about cookies and similar technologies used by RUDRON Global Talent Solutions LLP.",
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
              Cookie Policy
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
              This policy explains how RUDRON Global Talent Solutions LLP uses
              cookies and similar technologies when you visit our website.
            </p>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:flex lg:gap-14 lg:px-8 lg:py-20">
          {/* Sticky contents */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                Contents
              </p>

              <nav aria-label="Cookie Policy contents">
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

          {/* Main policy content */}
          <article className="min-w-0 flex-1">
            <div className="mb-10 rounded-2xl border border-[#C89B3C]/20 bg-[#C89B3C]/[0.06] p-6 md:p-7">
              <p className="text-[15px] leading-7 text-[#444444]">
                This Cookie Policy should be read together with our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Privacy Policy
                </Link>{" "}
                and our{" "}
                <Link
                  href="/terms"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>

            <Section id="introduction" title="1. Introduction">
              <p>
                This Cookie Policy describes how RUDRON Global Talent Solutions
                LLP (&quot;RUDRON&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) uses cookies, local storage, pixels, tags,
                scripts, software development kits and similar technologies on{" "}
                <a
                  href={SITE_URL}
                  className="text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  www.rudrongts.com
                </a>{" "}
                and its associated pages and services.
              </p>

              <p>
                These technologies may be used to operate and secure the
                website, remember your preferences, understand website
                performance and improve the experience provided to candidates,
                employers and other visitors.
              </p>

              <p>
                Where applicable law requires consent before a non-essential
                cookie or similar technology is used, we will request your
                consent through our cookie preference tool.
              </p>
            </Section>

            <Section id="what-are-cookies" title="2. What Are Cookies?">
              <p>
                Cookies are small text files that a website places on your
                computer, mobile device or other internet-connected device when
                you visit it. Cookies allow websites to recognise a device,
                remember information about a visit and support website
                functionality.
              </p>

              <p>
                Some cookies operate only during a browsing session and are
                removed when you close your browser. Other cookies may remain
                on your device for a defined period or until you delete them.
              </p>

              <p>
                Technologies such as local storage, pixels and scripts may
                perform similar functions. References to &quot;cookies&quot; in
                this policy include these similar technologies where
                appropriate.
              </p>
            </Section>

            <Section
              id="technologies"
              title="3. Technologies We May Use"
            >
              <BulletList
                items={[
                  <>
                    <strong>HTTP cookies:</strong> Small files stored through
                    your browser.
                  </>,
                  <>
                    <strong>Local and session storage:</strong> Browser storage
                    used to remember preferences or maintain website
                    functionality.
                  </>,
                  <>
                    <strong>Pixels and tags:</strong> Small pieces of code that
                    may measure whether a page or communication has been viewed
                    or interacted with.
                  </>,
                  <>
                    <strong>Scripts:</strong> Code used to provide interactive
                    functionality, security, forms and performance monitoring.
                  </>,
                  <>
                    <strong>Server logs:</strong> Technical records that may
                    include IP address, browser type, request time, referring
                    page and system events.
                  </>,
                ]}
              />
            </Section>

            <Section id="categories" title="4. Categories of Cookies">
              <h3 className="font-semibold text-[#1A1A2E]">
                4.1 Strictly Necessary Cookies
              </h3>

              <p>
                These technologies are required for the website to function
                properly or to provide a service you specifically request. They
                may support security, network management, form submission,
                accessibility, load balancing and storage of your cookie
                preferences.
              </p>

              <p>
                Because these technologies are necessary for basic website
                operation, they cannot generally be disabled through our cookie
                preference tool. You may still be able to block them through
                your browser, but parts of the website may then stop working.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                4.2 Functional Cookies
              </h3>

              <p>
                Functional cookies allow the website to remember choices you
                make, such as display preferences, previously selected options
                or other customised settings. Disabling them may reduce
                personalisation but should not normally prevent basic use of
                the website.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                4.3 Analytics and Performance Cookies
              </h3>

              <p>
                Analytics technologies help us understand how visitors interact
                with the website, which pages are visited, whether errors occur
                and how the website performs across different devices and
                browsers.
              </p>

              <p>
                Where required, these technologies will remain disabled until
                you provide consent. Analytics information is generally used in
                aggregated form to improve website content, performance and
                navigation.
              </p>

              <h3 className="pt-2 font-semibold text-[#1A1A2E]">
                4.4 Advertising and Targeting Cookies
              </h3>

              <p>
                Advertising or targeting technologies may be used in the future
                to measure campaigns, understand referrals or deliver relevant
                advertising through third-party platforms.
              </p>

              <p>
                RUDRON does not currently intend to activate advertising or
                behavioural-targeting cookies without first providing
                appropriate notice and consent controls where required.
              </p>
            </Section>

            <Section
              id="current-use"
              title="5. Cookies and Technologies Currently Used"
            >
              <p>
                The exact technologies used may change as we improve the
                website. Based on the website&apos;s current functionality, the
                following categories may apply:
              </p>

              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead className="bg-[#1A1A2E] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Purpose</th>
                      <th className="px-5 py-4 font-semibold">Category</th>
                      <th className="px-5 py-4 font-semibold">
                        Typical duration
                      </th>
                      <th className="px-5 py-4 font-semibold">Control</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="align-top">
                      <td className="px-5 py-4">
                        Remembering cookie consent and preference choices
                      </td>
                      <td className="px-5 py-4">Strictly necessary</td>
                      <td className="px-5 py-4">
                        Until preferences expire or are cleared
                      </td>
                      <td className="px-5 py-4">
                        Required to remember your selection
                      </td>
                    </tr>

                    <tr className="align-top">
                      <td className="px-5 py-4">
                        Website security, delivery and technical operation
                      </td>
                      <td className="px-5 py-4">Strictly necessary</td>
                      <td className="px-5 py-4">
                        Session-based or limited-duration
                      </td>
                      <td className="px-5 py-4">
                        May be controlled through browser settings
                      </td>
                    </tr>

                    <tr className="align-top">
                      <td className="px-5 py-4">
                        Measuring website speed, stability and technical
                        performance
                      </td>
                      <td className="px-5 py-4">
                        Analytics or performance
                      </td>
                      <td className="px-5 py-4">
                        Depends on the provider and configuration
                      </td>
                      <td className="px-5 py-4">
                        Cookie preference tool where consent applies
                      </td>
                    </tr>

                    <tr className="align-top">
                      <td className="px-5 py-4">
                        Supporting job applications, employer requests and
                        contact forms
                      </td>
                      <td className="px-5 py-4">
                        Strictly necessary or functional
                      </td>
                      <td className="px-5 py-4">
                        Usually session-based
                      </td>
                      <td className="px-5 py-4">
                        Some website functionality may not work if blocked
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5">
                We will update this section when new analytics, advertising,
                embedded-media or marketing technologies are activated.
              </p>
            </Section>

            <Section
              id="third-parties"
              title="6. Third-Party Technologies"
            >
              <p>
                Parts of the website may be provided, secured, hosted or
                measured using third-party service providers. Depending on the
                features enabled, these providers may process limited technical
                information or use their own technologies.
              </p>

              <p>Third-party services may include:</p>

              <BulletList
                items={[
                  "Cloud hosting, content delivery and website security providers;",
                  "Website performance and reliability monitoring providers;",
                  "Form-processing, database and file-storage providers;",
                  "Recruitment, scheduling or communication platforms;",
                  "Embedded social-media or external content providers; and",
                  "Analytics or campaign-measurement providers if enabled in the future.",
                ]}
              />

              <p>
                Third parties may process information under their own privacy
                notices. RUDRON does not control cookies placed directly by
                third-party websites that you visit through an external link.
              </p>
            </Section>

            <Section
              id="preferences"
              title="7. Managing Your Cookie Preferences"
            >
              <p>
                When our cookie consent banner is available, you will be able
                to:
              </p>

              <BulletList
                items={[
                  "Accept all optional cookies;",
                  "Reject non-essential cookies;",
                  "Choose individual categories of cookies; and",
                  "Change or withdraw your preferences later.",
                ]}
              />

              <p>
                Rejecting optional cookies will not prevent you from using the
                core areas of the website. However, some optional features,
                personalisation or performance measurement may be unavailable.
              </p>

              <p>
                Withdrawing consent does not affect the lawfulness of processing
                that occurred before consent was withdrawn.
              </p>

            <div className="mt-5 rounded-xl border border-gray-200 bg-[#F8F7F4] p-5">
            <p className="font-semibold text-[#1A1A2E]">
                Cookie preferences
            </p>

            <p className="mt-2 text-sm leading-6 text-[#555555]">
                Review, change or withdraw your optional cookie choices at any
                time.
            </p>

            <CookiePreferencesButton className="mt-4 rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D7AA48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2">
                Open Cookie Preferences
            </CookiePreferencesButton>
            </div>
            </Section>

            <Section
              id="browser-controls"
              title="8. Browser and Device Controls"
            >
              <p>
                Most web browsers allow you to view, block or delete cookies
                through their privacy or security settings. The steps vary
                depending on the browser and device you use.
              </p>

              <p>
                Blocking all cookies may prevent website forms, saved
                preferences or other functions from operating correctly.
                Browser controls may also need to be configured separately on
                each device you use.
              </p>

              <p>
                You may also use privacy controls offered by your operating
                system, browser extensions or device settings, where available.
              </p>
            </Section>

            <Section id="retention" title="9. Cookie Retention">
              <p>
                Cookies and similar technologies are retained only for as long
                as reasonably necessary for their stated purpose, subject to
                legal, technical and security requirements.
              </p>

              <p>
                Session cookies normally expire when the browser session ends.
                Persistent cookies remain for a specified period unless you
                delete them earlier. Consent preferences may be stored for a
                reasonable period so that the website does not repeatedly ask
                you to make the same selection.
              </p>
            </Section>

            <Section
              id="international"
              title="10. International Visitors"
            >
              <p>
                RUDRON serves clients and candidates in multiple countries,
                including the United States, Canada, the United Arab Emirates
                and India. Cookie and electronic-communications rules may vary
                by jurisdiction.
              </p>

              <p>
                Where local law provides additional rights or requires consent
                for particular technologies, we will seek to apply the
                appropriate controls based on the website configuration and
                available location signals.
              </p>
            </Section>

            <Section
              id="privacy"
              title="11. Privacy and Personal Information"
            >
              <p>
                Some information collected through cookies or similar
                technologies may qualify as personal information, personal data
                or an online identifier under applicable law.
              </p>

              <p>
                Details about how we collect, use, disclose, secure and retain
                personal information, and how you may exercise applicable
                rights, are provided in our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-[#9B7429] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#C89B3C]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section id="changes" title="12. Changes to This Cookie Policy">
              <p>
                We may update this Cookie Policy to reflect changes in our
                website, technologies, service providers, legal obligations or
                business practices.
              </p>

              <p>
                When changes are made, the revised policy will be published on
                this page and the &quot;Last updated&quot; date will be changed.
                Material changes may also be communicated through an additional
                website notice where appropriate.
              </p>
            </Section>

            <Section id="contact" title="13. Contact Us">
              <p>
                Questions, concerns or requests relating to this Cookie Policy
                may be directed to:
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
                Review how RUDRON protects your information
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/privacy-policy"
                  className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-transform duration-200 hover:-translate-y-0.5"
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

    </>
  );
}