"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/employers", label: "For Employers" },
  { href: "/candidates", label: "For Candidates" },
  { href: "/jobs", label: "Browse Jobs" },
  {
    href: "/recruitment-specialties",
    label: "Recruitment Specialties",
  },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/accessibility", label: "Accessibility" },
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
        className="inline-block h-px w-4 bg-gradient-to-r from-[#C89B3C] to-transparent"
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
              className="group flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
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
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#C89B3C]/10 blur-[135px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-[-220px] h-[460px] w-[460px] rounded-full bg-blue-500/[0.06] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="border-b border-white/[0.07] py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                aria-label="RUDRON Global Talent Solutions homepage"
                className="group inline-block"
              >
                <Image
                  src="/images/rudron-logo.webp"
                  alt="RUDRON Global Talent Solutions"
                  width={276}
                  height={108}
                  className="mb-4 h-auto w-[170px] transition-transform duration-500 group-hover:scale-[1.03] sm:w-[185px]"
                />
              </Link>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 px-4 py-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#C89B3C]"
                />

                <p className="text-[10.5px] font-medium uppercase leading-none tracking-[2px] text-[#C89B3C]">
                  Serving USA · Canada · UAE · India
                </p>
              </div>

              <p className="mb-6 max-w-[440px] text-[13.5px] leading-[1.85] text-gray-400/85">
                RUDRON Global Talent Solutions connects high-performing
                professionals with leading organizations across Architecture,
                Engineering, Construction, Mechanical, Electrical and Plumbing
                markets.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit RUDRON on ${label}`}
                    className="group/social flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 hover:text-[#C89B3C] hover:shadow-[0_10px_24px_rgba(200,155,60,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D18]"
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
                <ContactItem
                  icon={Phone}
                  label="United States & Canada"
                  href="tel:+12393093969"
                  value="+1 (239) 309-3969"
                />

                <ContactItem
                  icon={Mail}
                  label="General Enquiries"
                  href="mailto:contact@rudrongts.com"
                  value="contact@rudrongts.com"
                />

                <ContactItem
                  icon={MapPin}
                  label="UAE"
                  href="mailto:uae@rudrongts.com"
                  value="uae@rudrongts.com"
                />

                <ContactItem
                  icon={MapPin}
                  label="India"
                  href="mailto:india@rudrongts.com"
                  value="india@rudrongts.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-center text-[12px] tracking-wide text-gray-600 sm:text-left">
            © {new Date().getFullYear()} RUDRON Global Talent Solutions.
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

function ContactItem({
  icon: Icon,
  label,
  href,
  value,
}: {
  icon: typeof Phone;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <div className="group flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#C89B3C]/20 bg-[#C89B3C]/10 text-[#C89B3C] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#C89B3C]/15">
        <Icon size={15} />
      </div>

      <div>
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[1.4px] text-[#C89B3C]/80">
          {label}
        </p>

        <a
          href={href}
          className="break-all text-[13px] text-gray-300 transition-colors duration-200 hover:text-[#C89B3C]"
        >
          {value}
        </a>
      </div>
    </div>
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