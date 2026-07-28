"use client";

import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/industries",
    label: "Industries",
  },
  {
    href: "/insights",
    label: "Insights",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const serviceLinks = [
  {
    href: "/employers",
    label: "For Employers",
  },
  {
    href: "/candidates",
    label: "For Candidates",
  },
  {
    href: "/jobs",
    label: "Browse Jobs",
  },
  {
    href: "/contact",
    label: "Request Talent",
  },
];

const legalLinks = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/terms",
    label: "Terms & Conditions",
  },
  {
    href: "/cookie-policy",
    label: "Cookie Policy",
  },
  {
    href: "/disclaimer",
    label: "Disclaimer",
  },
  {
    href: "/accessibility",
    label: "Accessibility",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/rudron_gts/",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.facebook.com/share/1HQMr8GCcd/?mibextid=wwXlfr",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    href: "https://www.linkedin.com/company/rudrongts/",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1.8px] text-white">
      <span
        aria-hidden="true"
        className="inline-block h-px w-4 bg-[#C89B3C]"
      />
      {children}
    </h3>
  );
}

function FooterNavigation({
  links,
}: {
  links: Array<{
    href: string;
    label: string;
  }>;
}) {
  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-col gap-2.5 text-[14px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center gap-2 text-gray-400 transition-colors duration-200 hover:text-white"
            >
              <span
                aria-hidden="true"
                className="h-px w-0 bg-[#C89B3C] transition-all duration-300 ease-out group-hover:w-3"
              />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function openCookiePreferences() {
  window.dispatchEvent(
    new Event("open-rudron-cookie-preferences")
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050D18]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-60"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, #C89B3C 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="border-b border-white/[0.07] py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                aria-label="RUDRON Global Talent Solutions homepage"
                className="inline-block"
              >
                <Image
                  src="/images/rudron-logo.webp"
                  alt="RUDRON Global Talent Solutions"
                  width={276}
                  height={108}
                  className="mb-4 h-auto w-[128px] sm:w-[138px]"
                />
              </Link>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 px-4 py-1.5">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-[#C89B3C]"
                />
                <p className="text-[10.5px] font-medium uppercase leading-none tracking-[2px] text-[#C89B3C]">
                  Serving USA · Canada · UAE · India
                </p>
              </div>

              <p className="mb-6 max-w-[440px] text-[13.5px] leading-[1.85] text-gray-400/80">
                RUDRON Global Talent Solutions is a specialist recruitment
                partner connecting high-performing professionals with leading
                organizations across Architecture, Engineering, Construction,
                Mechanical, Electrical and Plumbing markets.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit RUDRON on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 hover:text-[#C89B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D18]"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <FooterHeading>Company</FooterHeading>
              <FooterNavigation links={companyLinks} />
            </div>

            {/* Services */}
            <div>
              <FooterHeading>Services</FooterHeading>
              <FooterNavigation links={serviceLinks} />
            </div>

            {/* Legal */}
            <div>
              <FooterHeading>Legal</FooterHeading>
              <FooterNavigation links={legalLinks} />
            </div>

            {/* Contact */}
            <div>
              <FooterHeading>Contact</FooterHeading>

              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[1.4px] text-[#C89B3C]/80">
                    United States & Canada
                  </p>

                  <a
                    href="tel:+12393093969"
                    className="text-[13.5px] font-light tracking-wide text-gray-300 transition-colors duration-200 hover:text-[#C89B3C]"
                  >
                    +1 (239) 309-3969
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[1.4px] text-[#C89B3C]/80">
                    General Enquiries
                  </p>

                  <a
                    href="mailto:contact@rudrongts.com"
                    className="break-all text-[13.5px] text-gray-300 transition-colors duration-200 hover:text-[#C89B3C]"
                  >
                    contact@rudrongts.com
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[1.4px] text-[#C89B3C]/80">
                    UAE
                  </p>

                  <a
                    href="mailto:uae@rudrongts.com"
                    className="break-all text-[13.5px] text-gray-300 transition-colors duration-200 hover:text-[#C89B3C]"
                  >
                    uae@rudrongts.com
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[1.4px] text-[#C89B3C]/80">
                    India
                  </p>

                  <a
                    href="mailto:india@rudrongts.com"
                    className="break-all text-[13.5px] text-gray-300 transition-colors duration-200 hover:text-[#C89B3C]"
                  >
                    india@rudrongts.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-center text-[12px] tracking-wide text-gray-600 sm:text-left">
            © {new Date().getFullYear()} RUDRON Global Talent Solutions LLP.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[12px] text-gray-600">
            <Link
              href="/privacy-policy"
              className="px-2 py-1 transition-colors duration-200 hover:text-gray-300"
            >
              Privacy
            </Link>

            <span aria-hidden="true" className="select-none text-white/10">
              |
            </span>

            <Link
              href="/terms"
              className="px-2 py-1 transition-colors duration-200 hover:text-gray-300"
            >
              Terms
            </Link>

            <span aria-hidden="true" className="select-none text-white/10">
              |
            </span>

            <button
              type="button"
              onClick={openCookiePreferences}
              className="px-2 py-1 transition-colors duration-200 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
            >
              Cookie Preferences
            </button>

            <span aria-hidden="true" className="select-none text-white/10">
              |
            </span>

            <Link
              href="/accessibility"
              className="px-2 py-1 transition-colors duration-200 hover:text-gray-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}