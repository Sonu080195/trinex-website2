"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Employers", "/employers"],
  ["Candidates", "/candidates"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuRendered, setMenuRendered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [jobsDropdown, setJobsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [navLoaded, setNavLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setNavLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* MOUNT/UNMOUNT MOBILE MENU WITH EXIT ANIMATION */
  useEffect(() => {
    if (menuOpen) {
      setMenuRendered(true);
    } else if (menuRendered) {
      const t = setTimeout(() => setMenuRendered(false), 350);
      return () => clearTimeout(t);
    }
  }, [menuOpen, menuRendered]);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, mounted]);

  /* CLOSE MOBILE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /* NAVBAR SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  /* CLOSE MOBILE MENU ON ESCAPE */
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const mobileMenu = mounted && menuRendered ? createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#07111F",
        opacity: menuOpen ? 1 : 0,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse at top, rgba(200,155,60,.12) 0%, transparent 70%)",
          opacity: menuOpen ? 1 : 0,
        }}
      />
      {/* Background grid, matches page sections */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ height: "100dvh", overflowY: "auto" }} className="relative">
        <div className="px-5 pt-5 pb-8">

          {/* TOP */}
          <div
            className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 transition-all duration-500"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
            }}
          >
            <img
              src="/images/RUDRON Logo.webp"
              alt="RUDRON"
              className="h-14 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#C89B3C]/40 hover:text-[#C89B3C] active:scale-95 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col rounded-3xl bg-[#0D1726] border border-white/5 overflow-hidden">
            {NAV_LINKS.map(([label, href], i) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`
                    relative flex items-center px-5 py-4 text-[15px] font-medium
                    border-b border-white/5 transition-colors duration-300
                    ${isActive ? "text-[#C89B3C] bg-white/[0.03]" : "text-white hover:bg-white/[0.04] hover:text-[#C89B3C]"}
                  `}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.45s ease ${60 + i * 50}ms, transform 0.45s ease ${60 + i * 50}ms, background-color 0.3s, color 0.3s`,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[#C89B3C]" />
                  )}
                  {label}
                </Link>
              );
            })}

            {/* JOBS DROPDOWN */}
            <div
              className="border-b border-white/5 last:border-b-0"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.45s ease ${60 + NAV_LINKS.length * 50}ms, transform 0.45s ease ${60 + NAV_LINKS.length * 50}ms`,
              }}
            >
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "jobs" ? null : "jobs")
                }
                className="w-full flex items-center justify-between px-5 py-4 text-white text-[15px] font-medium hover:text-[#C89B3C] transition-colors duration-300"
              >
                Jobs
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openDropdown === "jobs" ? "rotate-180 text-[#C89B3C]" : ""
                  }`}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openDropdown === "jobs" ? "120px" : "0px",
                }}
              >
                <div className="pb-4 px-5 flex flex-col gap-3">
                  <Link
                    href="/jobs"
                    className="text-gray-300 text-[14px] hover:text-[#C89B3C] transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    Open Jobs
                  </Link>
                  <Link
                    href="/saved-jobs"
                    className="text-gray-300 text-[14px] hover:text-[#C89B3C] transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    Saved Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div
            className="mt-6 flex flex-col gap-3"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${60 + (NAV_LINKS.length + 1) * 50}ms, transform 0.5s ease ${60 + (NAV_LINKS.length + 1) * 50}ms`,
            }}
          >
            <Link
              href="/jobs"
              onClick={() => setMenuOpen(false)}
              className="border border-[#C89B3C] text-white py-3.5 rounded-2xl text-[14px] font-medium text-center active:scale-[0.98] hover:bg-[#C89B3C]/10 transition-all duration-300"
            >
              Explore Jobs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#C89B3C] text-black py-3.5 rounded-2xl text-[14px] font-semibold text-center active:scale-[0.98] hover:shadow-[0_10px_30px_rgba(200,155,60,0.35)] transition-all duration-300"
            >
              Hire Talent
            </Link>
          </div>

        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* ── HEADER ── */}
      {/* Border lives on its own absolutely-positioned element fading in
          with `scrolled`, instead of as a 1px border on the fixed/blurred
          header. This avoids a stray hairline appearing above the content
          area on scroll-bounce / overscroll seen in the original. */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`
            relative w-full transition-all duration-500
            ${scrolled
              ? "bg-[#07111F]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              : "bg-transparent"}
          `}
        >
          <div
            className="absolute bottom-0 left-0 w-full h-px transition-opacity duration-500"
            style={{
              background: "rgba(255,255,255,0.1)",
              opacity: scrolled ? 1 : 0,
            }}
          />

          <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-5 py-1 transition-all duration-500">
            <div className="flex items-center justify-between py-1 lg:py-2">

              {/* LOGO */}
              <Link
                href="/"
                className="relative z-20 transition-all duration-700"
                style={{
                  opacity: navLoaded ? 1 : 0,
                  transform: navLoaded ? "translateY(0)" : "translateY(-12px)",
                }}
              >
                <img
                  src="/images/RUDRON Logo.webp"
                  alt="RUDRON Logo"
                  className={`
                    w-auto transition-all duration-500
                    ${scrolled ? "h-16 lg:h-22" : "h-18 sm:h-22 lg:h-30"}
                  `}
                />
              </Link>

              {/* DESKTOP MENU */}
              <nav className="hidden lg:flex items-center gap-6 text-white text-[15px] font-medium">
                {NAV_LINKS.map(([label, href], i) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`
                        relative py-1 transition-all duration-500
                        ${isActive ? "text-[#C89B3C]" : "hover:text-[#C89B3C]"}
                      `}
                      style={{
                        opacity: navLoaded ? 1 : 0,
                        transform: navLoaded ? "translateY(0)" : "translateY(-10px)",
                        transitionDelay: `${100 + i * 60}ms`,
                      }}
                    >
                      {label}
                      <span
                        className="absolute -bottom-2 left-0 h-[2px] bg-[#C89B3C] rounded-full transition-all duration-300"
                        style={{ width: isActive ? "100%" : "0%" }}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* DESKTOP BUTTONS */}
              <div
                className="hidden lg:flex items-center gap-3 transition-all duration-700"
                style={{
                  opacity: navLoaded ? 1 : 0,
                  transform: navLoaded ? "translateY(0)" : "translateY(-10px)",
                  transitionDelay: "550ms",
                }}
              >

                {/* JOBS DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => setJobsDropdown(true)}
                  onMouseLeave={() => setJobsDropdown(false)}
                >
                  <button
                    className="border border-[#C89B3C] text-white px-5 py-2.5 rounded-xl text-[15px] hover:bg-[#C89B3C] hover:text-black transition-all duration-300 flex items-center gap-2"
                    aria-expanded={jobsDropdown}
                  >
                    Jobs
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${jobsDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className="absolute top-full right-0 pt-3 w-[220px] transition-all duration-250"
                    style={{
                      opacity: jobsDropdown ? 1 : 0,
                      transform: jobsDropdown ? "translateY(0)" : "translateY(-8px)",
                      visibility: jobsDropdown ? "visible" : "hidden",
                      pointerEvents: jobsDropdown ? "auto" : "none",
                    }}
                  >
                    <div className="bg-[#0D1726]/95 backdrop-blur-xl border border-white/5 rounded-2xl p-3 shadow-2xl">
                      <div className="flex flex-col">
                        <Link href="/jobs" className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 hover:text-[#C89B3C] transition-all duration-300">
                          Open Jobs
                        </Link>
                        <Link href="/saved-jobs" className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 hover:text-[#C89B3C] transition-all duration-300">
                          Saved Jobs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HIRE TALENT */}
                <Link
                  href="/contact"
                  className="
                    group bg-[#C89B3C] text-black px-5 py-2.5 rounded-xl text-[15px] font-semibold
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_30px_rgba(200,155,60,0.35)]
                  "
                >
                  Connect Now
                </Link>

              </div>

              {/* HAMBURGER */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#C89B3C]/40 hover:text-[#C89B3C] active:scale-95 transition-all duration-300"
                style={{
                  opacity: navLoaded ? 1 : 0,
                  transform: navLoaded ? "translateY(0)" : "translateY(-10px)",
                  transition: "all 0.7s ease 100ms",
                }}
              >
                <Menu size={23} />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU — portalled directly onto <body> */}
      {mobileMenu}
    </>
  );
}