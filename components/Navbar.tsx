"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [jobsDropdown, setJobsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Needed so createPortal only runs client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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

  // Mobile menu rendered via portal — escapes header stacking context entirely
  const mobileMenu = menuOpen && mounted ? createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 999999, backgroundColor: "#07111F" }}
    >
      <div style={{ height: "100dvh", overflowY: "auto" }}>
        <div className="px-5 pt-5 pb-8">

          {/* TOP */}
          <div className="flex items-center justify-between mb-8">
            <img
              src="/images/RUDRON Logo.webp"
              alt="RUDRON"
              className="h-14 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col rounded-3xl bg-[#0D1726] border border-white/5 overflow-hidden">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Employers", "/employers"],
              ["Candidates", "/candidates"],
              ["Industries", "/industries"],
              ["Insights", "/insights"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="px-5 py-4 text-white text-[15px] font-medium border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* JOBS DROPDOWN */}
            <div className="border-b border-white/5">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "jobs" ? null : "jobs")
                }
                className="w-full flex items-center justify-between px-5 py-4 text-white text-[15px]"
              >
                Jobs
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    openDropdown === "jobs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "jobs" && (
                <div className="pb-4 px-5 flex flex-col gap-3">
                  <Link
                    href="/jobs"
                    className="text-gray-300 text-[14px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Open Jobs
                  </Link>
                  <Link
                    href="/saved-jobs"
                    className="text-gray-300 text-[14px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Saved Jobs
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/jobs"
              onClick={() => setMenuOpen(false)}
              className="border border-[#C89B3C] text-white py-3.5 rounded-2xl text-[14px] font-medium text-center active:scale-[0.98] transition-all duration-300"
            >
              Explore Jobs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#C89B3C] text-black py-3.5 rounded-2xl text-[14px] font-semibold text-center active:scale-[0.98] transition-all duration-300"
            >
              Hire Talent
            </Link>
          </div>

        </div>
      </div>
    </div>,
    document.body  // ← rendered directly on <body>, fully outside the header
  ) : null;

  return (
    <>
      {/* ── HEADER ── */}
      {/* REMOVED: isolation: "isolate" — was trapping z-index on Safari */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${scrolled ? "bg-[#07111F] border-b border-white/10" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-5 py-1 transition-all duration-500">
          <div className="flex items-center justify-between py-1 lg:py-2">

            {/* LOGO */}
            <Link href="/" className="relative z-20">
              <img
                src="/images/RUDRON Logo.webp"
                alt="RUDRON Logo"
                className={`
                  w-auto transition-all duration-500
                  ${scrolled ? "h-12 lg:h-18" : "h-14 sm:h-18 lg:h-26"}
                `}
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-6 text-white text-[15px] font-medium">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Employers", "/employers"],
                ["Candidates", "/candidates"],
                ["Industries", "/industries"],
                ["Insights", "/insights"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`transition duration-300 ${
                    pathname === href ? "text-[#C89B3C]" : "hover:text-[#C89B3C]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">

              {/* JOBS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setJobsDropdown(true)}
                onMouseLeave={() => setJobsDropdown(false)}
              >
                <button className="border border-[#C89B3C] text-white px-5 py-2.5 rounded-xl text-[15px] hover:bg-[#C89B3C] hover:text-black transition-all duration-300 flex items-center gap-2">
                  Jobs
                  <ChevronDown
                    size={16}
                    className={`transition duration-300 ${jobsDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {jobsDropdown && (
                  <div className="absolute top-full right-0 pt-3 w-[220px]">
                    <div className="bg-[#0D1726]/95 backdrop-blur-xl border border-white/5 rounded-2xl p-3 shadow-2xl">
                      <div className="flex flex-col">
                        <Link href="/jobs" className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 transition duration-300">
                          Open Jobs
                        </Link>
                        <Link href="/saved-jobs" className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 transition duration-300">
                          Saved Jobs
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* HIRE TALENT */}
              <Link
                href="/contact"
                className="bg-[#C89B3C] text-black px-5 py-2.5 rounded-xl text-[15px] font-semibold hover:opacity-90 transition-all duration-300"
              >
                Hire Talent
              </Link>

            </div>

            {/* HAMBURGER — no z-index needed now, menu is portalled out */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all duration-300"
            >
              <Menu size={23} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU — portalled directly onto <body> */}
      {mobileMenu}
    </>
  );
}