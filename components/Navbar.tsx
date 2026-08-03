"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const serviceGroups = [
  {
    title: "Project Leadership",
    links: [
      {
        label: "Project Manager Recruitment",
        href: "/project-manager-recruitment",
      },
      {
        label: "Superintendent Recruitment",
        href: "/superintendent-recruitment",
      },
      {
        label: "Estimator Recruitment",
        href: "/estimator-recruitment",
      },
      {
        label: "Preconstruction Manager Recruitment",
        href: "/preconstruction-manager-recruitment",
      },
    ],
  },
  {
    title: "MEP Recruitment",
    links: [
      {
        label: "MEP Project Manager Recruitment",
        href: "/mep-project-manager-recruitment",
      },
      {
        label: "Mechanical Project Manager Recruitment",
        href: "/mechanical-project-manager-recruitment",
      },
      {
        label: "Electrical Project Manager Recruitment",
        href: "/electrical-project-manager-recruitment",
      },
      {
        label: "BIM / VDC Manager Recruitment",
        href: "/bim-vdc-manager-recruitment",
      },
    ],
  },
  {
    title: "Quality, Safety & Delivery",
    links: [
      {
        label: "Commissioning Manager Recruitment",
        href: "/commissioning-manager-recruitment",
      },
      {
        label: "QA / QC Manager Recruitment",
        href: "/qa-qc-manager-recruitment",
      },
      {
        label: "Safety Manager Recruitment",
        href: "/safety-manager-recruitment",
      },
    ],
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Employers", href: "/employers" },
  { label: "Candidates", href: "/candidates" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<
    "services" | "jobs" | null
  >(null);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [jobsDropdown, setJobsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const servicesActive =
    pathname === "/recruitment-specialties" ||
    serviceGroups.some((group) =>
      group.links.some((link) => isActivePath(pathname, link.href))
    );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
    setServicesDropdown(false);
    setJobsDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07111F]/95 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-[#07111F]/78 backdrop-blur-md"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/25 to-transparent" />

      <div
        className={`mx-auto max-w-[1500px] px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          scrolled ? "py-0" : "py-1"
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="relative z-[999] shrink-0">
            <img
            src="/images/rudron-logo.webp"
            alt="RUDRON Global Talent Solutions"
            className={`w-auto transition-all duration-500 ${
              scrolled
                ? "h-[86px] lg:h-[94px]"
                : "h-[96px] sm:h-[108px] lg:h-[118px]"
            }`}
          />
          </Link>

          <nav className="hidden items-center gap-5 text-[15px] font-medium text-white xl:flex 2xl:gap-6 2xl:text-[16px]">
            {mainLinks.slice(0, 2).map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-3 transition-colors duration-300 hover:text-[#C89B3C] ${
                    active ? "text-[#C89B3C]" : ""
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute inset-x-0 bottom-1 mx-auto h-[2px] rounded-full bg-[#C89B3C] transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 py-3 transition-colors duration-300 hover:text-[#C89B3C] ${
                  servicesActive ? "text-[#C89B3C]" : ""
                }`}
                aria-expanded={servicesDropdown}
                aria-haspopup="true"
              >
                Services

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                />

                <span
                  className={`absolute inset-x-0 bottom-1 mx-auto h-[2px] rounded-full bg-[#C89B3C] transition-all duration-300 ${
                    servicesActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full w-[820px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  servicesDropdown
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0A1520]/[0.985] p-6 shadow-[0_32px_90px_rgba(0,0,0,0.52)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.13),transparent_36%)]" />

                  <div className="relative mb-5 flex items-end justify-between border-b border-white/10 pb-5">
                    <div className="max-w-[570px]">
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles size={13} className="text-[#C89B3C]" />

                        <p className="text-[10px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                          Recruitment Services
                        </p>
                      </div>

                      <p className="text-sm leading-6 text-gray-400">
                        Specialist hiring support across construction, MEP,
                        project delivery, quality and safety.
                      </p>
                    </div>

                    <Link
                      href="/recruitment-specialties"
                      className="group inline-flex items-center gap-2 rounded-xl border border-[#C89B3C]/25 bg-[#C89B3C]/10 px-4 py-2.5 text-xs font-semibold text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C] hover:text-[#07111F]"
                    >
                      View All Specialties

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="relative grid grid-cols-3 gap-5">
                    {serviceGroups.map((group, groupIndex) => (
                      <div
                        key={group.title}
                        className="rounded-[18px] border border-white/[0.07] bg-white/[0.025] p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[2px] text-white">
                            {group.title}
                          </p>

                          <span className="text-[9px] font-semibold tracking-[2px] text-white/20">
                            0{groupIndex + 1}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {group.links.map((link) => {
                            const active = isActivePath(pathname, link.href);

                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={`group/link flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[13px] leading-5 transition-all duration-300 ${
                                  active
                                    ? "bg-[#C89B3C]/15 text-[#C89B3C]"
                                    : "text-gray-300 hover:bg-white/[0.05] hover:text-[#C89B3C]"
                                }`}
                              >
                                <span>{link.label}</span>

                                <ArrowRight
                                  size={13}
                                  className="shrink-0 translate-x-[-3px] opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-xs text-gray-500">
                      Need help choosing a search category?
                    </p>

                    <HireTalentButton
                      ariaLabel="Discuss your hiring requirement"
                      className="group inline-flex items-center gap-2 text-xs font-semibold text-[#C89B3C]"
                    >
                      Discuss Your Hiring Needs
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </HireTalentButton>
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(2).map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-3 transition-colors duration-300 hover:text-[#C89B3C] ${
                    active ? "text-[#C89B3C]" : ""
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute inset-x-0 bottom-1 mx-auto h-[2px] rounded-full bg-[#C89B3C] transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <div
              className="relative"
              onMouseEnter={() => setJobsDropdown(true)}
              onMouseLeave={() => setJobsDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[15px] transition-all duration-300 ${
                  pathname.startsWith("/jobs") ||
                  pathname.startsWith("/saved-jobs")
                    ? "border-[#C89B3C] bg-[#C89B3C] text-[#07111F]"
                    : "border-[#C89B3C]/70 bg-[#C89B3C]/[0.06] text-white hover:-translate-y-0.5 hover:bg-[#C89B3C] hover:text-[#07111F]"
                }`}
                aria-expanded={jobsDropdown}
                aria-haspopup="true"
              >
                Jobs

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    jobsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full w-[230px] pt-3 transition-all duration-300 ${
                  jobsDropdown
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1726]/[0.985] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_42%)]" />

                  <div className="relative">
                    <Link
                      href="/jobs"
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] text-white transition hover:bg-white/[0.05] hover:text-[#C89B3C]"
                    >
                      Open Jobs
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      href="/saved-jobs"
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] text-white transition hover:bg-white/[0.05] hover:text-[#C89B3C]"
                    >
                      Saved Jobs
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <HireTalentButton
              ariaLabel="Hire construction and MEP talent"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-5 py-2.5 text-[15px] font-semibold text-[#07111F] shadow-[0_8px_24px_rgba(200,155,60,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D5A943] hover:shadow-[0_12px_30px_rgba(200,155,60,0.3)]"
            >
              Hire Talent
              <BriefcaseBusiness
                size={16}
                className="transition-transform duration-300 group-hover:rotate-3"
              />
            </HireTalentButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="relative z-[999] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:border-[#C89B3C]/40 hover:text-[#C89B3C] active:scale-95 xl:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={23} />
          </button>
        </div>
      </div>

      {mounted &&
        menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[99999] overflow-y-auto bg-[#07111F] text-white">
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_36%)]" />

            <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col px-5 pb-8 pt-5">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src="/images/rudron-logo.webp"
                    alt="RUDRON Global Talent Solutions"
                    className="h-[78px] w-auto sm:h-[88px]"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:border-[#C89B3C]/40 hover:text-[#C89B3C] active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X size={25} />
                </button>
              </div>

              <div className="overflow-visible rounded-3xl border border-white/[0.08] bg-[#0D1726] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                {mainLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-white/[0.06] px-5 py-4 text-[16px] transition ${
                      isActivePath(pathname, link.href)
                        ? "bg-[#C89B3C]/10 text-[#C89B3C]"
                        : "text-white active:bg-white/[0.05]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === "services" ? null : "services"
                      )
                    }
                    className={`flex w-full items-center justify-between px-5 py-4 text-left text-[16px] ${
                      servicesActive ? "text-[#C89B3C]" : "text-white"
                    }`}
                    aria-expanded={openMobileDropdown === "services"}
                  >
                    Services
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        openMobileDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === "services" && (
                    <div className="border-t border-white/[0.06] bg-[#07111F]/70 px-4 py-5">
                      <Link
                        href="/recruitment-specialties"
                        onClick={() => setMenuOpen(false)}
                        className="group mb-5 flex items-center justify-between rounded-xl border border-[#C89B3C]/20 bg-[#C89B3C]/10 px-4 py-3 text-[13px] font-semibold text-[#C89B3C]"
                      >
                        View All Recruitment Specialties
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <div className="space-y-6">
                        {serviceGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#C89B3C]">
                              {group.title}
                            </p>
                            <div className="flex flex-col gap-1">
                              {group.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setMenuOpen(false)}
                                  className={`rounded-lg px-3 py-2.5 text-[13px] leading-5 transition ${
                                    isActivePath(pathname, link.href)
                                      ? "bg-[#C89B3C]/10 text-[#C89B3C]"
                                      : "text-gray-300 active:bg-white/[0.05]"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {mainLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-white/[0.06] px-5 py-4 text-[16px] transition ${
                      isActivePath(pathname, link.href)
                        ? "bg-[#C89B3C]/10 text-[#C89B3C]"
                        : "text-white active:bg-white/[0.05]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === "jobs" ? null : "jobs"
                      )
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-[16px] text-white"
                    aria-expanded={openMobileDropdown === "jobs"}
                  >
                    Jobs
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        openMobileDropdown === "jobs" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === "jobs" && (
                    <div className="flex flex-col gap-1 border-t border-white/[0.06] bg-[#07111F]/70 px-4 py-4">
                      <Link href="/jobs" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-[14px] text-gray-300 active:bg-white/[0.05]">Open Jobs</Link>
                      <Link href="/saved-jobs" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-[14px] text-gray-300 active:bg-white/[0.05]">Saved Jobs</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Link href="/jobs" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-[#C89B3C] py-3.5 text-center text-[14px] font-medium text-white transition active:scale-[0.98]">Explore Jobs</Link>
                <HireTalentButton ariaLabel="Hire construction and MEP talent" className="rounded-2xl bg-[#C89B3C] py-3.5 text-center text-[14px] font-semibold text-[#07111F] transition active:scale-[0.98]">Hire Talent</HireTalentButton>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}