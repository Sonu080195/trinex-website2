"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {

  const pathname =
  usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const [jobsDropdown, setJobsDropdown] =
    useState(false);

  const [scrolled, setScrolled] =
  useState(false);

  /* LOCK BODY SCROLL */
useEffect(() => {

  if (menuOpen) {

    document.body.style.overflow = "hidden";

  } else {

    document.body.style.overflow = "auto";

  }

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

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  return () => {

    window.removeEventListener(
      "scroll",
      handleScroll
    );

  };

}, [menuOpen]);

  return (

    <header
style={{
  isolation: "isolate",
}}
  className={`
  fixed
  top-0
  left-0
  w-full
  z-50
  transition-all
  duration-500
  ${
    scrolled
? "bg-[#07111F]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
: "bg-transparent"
  }
`}
>

      <div
  className="
max-w-7xl
mx-auto
px-3
sm:px-5
lg:px-5
py-1
transition-all
duration-500
">

        <div className="flex items-center justify-between py-1 lg:py-2">

          {/* LOGO */}
          <Link
            href="/"
            className="relative z-20"
          >

            <img
              src="/images/RUDRON Logo.webp"
              alt="RUDRON Logo"
              className={`
w-auto
transition-all
duration-500
${
  scrolled
  ? "h-12 lg:h-18"
  : "h-14 sm:h-18 lg:h-26"
}
`}
            />

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 text-white text-[15px] font-medium">

            <Link
  href="/"
  className={`
  relative
  hover:text-[#C89B3C]
  transition
  duration-300
  ${pathname === "/"
      ? "text-[#C89B3C]"
      : ""
  }
  `}
>
              Home
            </Link>

            <Link
  href="/about"
  className={`
  transition
  duration-300
  ${
    pathname === "/about"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              About
            </Link>

            <Link
  href="/employers"
  className={`
  transition
  duration-300
  ${
    pathname === "/employers"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              Employers
            </Link>

            <Link
  href="/candidates"
  className={`
  transition
  duration-300
  ${
    pathname === "/candidates"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              Candidates
            </Link>

            <Link
  href="/industries"
  className={`
  transition
  duration-300
  ${
    pathname === "/industries"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              Industries
            </Link>

            <Link
  href="/insights"
  className={`
  transition
  duration-300
  ${
    pathname === "/insights"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              Insights
            </Link>

            <Link
  href="/contact"
  className={`
  transition
  duration-300
  ${
    pathname === "/contact"
      ? "text-[#C89B3C]"
      : "hover:text-[#C89B3C]"
  }
  `}
>
              Contact
            </Link>

          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">

            {/* JOBS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() =>
                setJobsDropdown(true)
              }
              onMouseLeave={() =>
                setJobsDropdown(false)
              }
            >

              <button className="border border-[#C89B3C] text-white px-5 py-2.5 rounded-xl text-[15px] hover:bg-[#C89B3C] hover:text-black transition-all duration-300 flex items-center gap-2">

                Jobs

                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${
                    jobsDropdown
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {jobsDropdown && (

                <div className="absolute top-full right-0 pt-3 w-[220px]">

                  <div className="bg-[#0D1726]/95 backdrop-blur-xl border border-white/5 rounded-2xl p-3 shadow-2xl">

                    <div className="flex flex-col">

                      <Link
                        href="/jobs"
                        className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 transition duration-300"
                      >
                        Open Jobs
                      </Link>

                      <Link
                        href="/saved-jobs"
                        className="px-4 py-3 rounded-xl text-[15px] text-white hover:bg-white/5 transition duration-300"
                      >
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(true)
            }
            className="lg:hidden relative z-[1001] flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all duration-300"
          >

            <Menu size={23} />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#07111F] z-[1000000] overflow-y-auto">

          <div className="min-h-screen flex flex-col px-5 pt-5 pb-8">

            {/* TOP */}
            <div className="flex items-center justify-between mb-8 lg:mb-12">

              <img
                src="/images/RUDRON Logo.webp"
                alt="RUDRON"
                className="h-14 sm:h-16 w-auto"
              />

              <button
                onClick={() =>
                  setMenuOpen(false)
                }
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all duration-300"
              >

                <X size={24} />

              </button>

            </div>

            {/* MENU */}
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
                  className="
                  px-5
                  py-4
                  text-white
                  text-[15px]
                  font-medium
                  border-b
                  border-white/5
                  hover:bg-white/5
                  transition-all
                  duration-300"

                  onClick={() => {

                    setMenuOpen(false);

                  }}
                >

                  {label}

                </Link>

              ))}

              {/* JOBS */}
              <div className="border-b border-white/5">

                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "jobs"
                        ? null
                        : "jobs"
                    )
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-white text-[15px] sm:text-[16px]"
                >

                  Jobs

                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      openDropdown === "jobs"
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {openDropdown === "jobs" && (

                  <div className="pb-4 px-5 flex flex-col gap-3">

                    <Link
                      href="/jobs"
                      className="text-gray-300 text-[14px]"
                      onClick={() => {

                        setMenuOpen(false);

                      }}
                    >

                      Open Jobs

                    </Link>

                    <Link
                      href="/saved-jobs"
                      className="text-gray-300 text-[14px]"
                      onClick={() => {

                        setMenuOpen(false);

                      }}
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
                onClick={() => {

                  setMenuOpen(false);

                }}
                className="border border-[#C89B3C] text-white py-3.5 rounded-2xl text-[14px] font-medium text-center active:scale-[0.98] transition-all duration-300"
              >

                Explore Jobs

              </Link>

              <Link
                href="/contact"
                onClick={() => {

                  setMenuOpen(false);

                }}
                className="bg-[#C89B3C] text-black py-3.5 rounded-2xl text-[14px] font-semibold text-center active:scale-[0.98] transition-all duration-300"
              >

                Hire Talent

              </Link>

            </div>

          </div>

        </div>

      )}

    </header>

  );
}