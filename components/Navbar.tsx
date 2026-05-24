"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (

    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between py-5">

          {/* LOGO */}
          <Link href="/">

            <img
              src="/images/TRINEX Logo.png"
              alt="TRINEX Logo"
              className="h-20 lg:h-24 w-auto"
            />

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/industries">Industries</Link>

            <Link href="/employers">Employers</Link>

            <Link href="/candidates">Candidates</Link>

            <Link href="/specialisations">Specialisations</Link>

            <Link href="/contact">Contact</Link>

          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="border border-[#C89B3C] text-white px-7 py-3 rounded-xl hover:bg-[#C89B3C] hover:text-black transition-all duration-300">

              Find Jobs

            </button>

            <button className="bg-[#C89B3C] text-black px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300">

              Hire Talent

            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white"
          >

            <Menu size={34} />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="fixed inset-0 bg-[#07111F] z-[999] overflow-y-auto">

          <div className="px-6 py-6 min-h-screen flex flex-col">

            {/* TOP */}
            <div className="flex items-center justify-between mb-14">

              <img
                src="/images/TRINEX Logo.png"
                alt="TRINEX"
                className="h-20 w-auto"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >

                <X size={34} />

              </button>

            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col">

              {/* HOME */}
              <Link
                href="/"
                className="text-white text-2xl py-5 border-b border-white/10"
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                href="/about"
                className="text-white text-2xl py-5 border-b border-white/10"
              >
                About
              </Link>

              {/* INDUSTRIES */}
              <div className="border-b border-white/10">

                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "industries"
                        ? null
                        : "industries"
                    )
                  }
                  className="w-full flex items-center justify-between text-white text-2xl py-5"
                >

                  Industries

                  <ChevronDown
                    size={24}
                    className={`transition duration-300 ${
                      openDropdown === "industries"
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {openDropdown === "industries" && (

                  <div className="pb-6 pl-4 flex flex-col gap-5">

                    <Link href="#" className="text-gray-300 text-lg">
                      Architecture
                    </Link>

                    <Link href="#" className="text-gray-300 text-lg">
                      Engineering
                    </Link>

                    <Link href="#" className="text-gray-300 text-lg">
                      Construction
                    </Link>

                    <Link href="#" className="text-gray-300 text-lg">
                      Mechanical
                    </Link>

                    <Link href="#" className="text-gray-300 text-lg">
                      Electrical
                    </Link>

                    <Link href="#" className="text-gray-300 text-lg">
                      Plumbing
                    </Link>

                  </div>

                )}

              </div>

              {/* EMPLOYERS */}
              <Link
                href="/employers"
                className="text-white text-2xl py-5 border-b border-white/10"
              >
                Employers
              </Link>

              {/* CANDIDATES */}
              <Link
                href="/candidates"
                className="text-white text-2xl py-5 border-b border-white/10"
              >
                Candidates
              </Link>

              {/* SPECIALISATIONS */}
              <div className="border-b border-white/10">

                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "specialisations"
                        ? null
                        : "specialisations"
                    )
                  }
                  className="w-full flex items-center justify-between text-white text-2xl py-5"
                >

                  Specialisations

                  <ChevronDown
                    size={24}
                    className={`transition duration-300 ${
                      openDropdown === "specialisations"
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {openDropdown === "specialisations" && (

                  <div className="pb-6 pl-4 flex flex-col gap-5">

                    <Link href="/commercial" className="text-gray-300 text-lg">
                      Commercial
                    </Link>

                    <Link href="/industrial" className="text-gray-300 text-lg">
                      Industrial
                    </Link>

                    <Link href="/residential" className="text-gray-300 text-lg">
                      Residential
                    </Link>

                    <Link href="/infrastructure" className="text-gray-300 text-lg">
                      Residential
                    </Link>

                  </div>

                )}

              </div>

              {/* CONTACT */}
              <Link
                href="/contact"
                className="text-white text-2xl py-5 border-b border-white/10"
              >
                Contact
              </Link>

            </div>

            {/* BOTTOM BUTTONS */}
            <div className="mt-auto pt-14 flex flex-col gap-5">

              <button className="border border-[#C89B3C] text-white py-5 rounded-2xl text-lg font-medium">

                Find Jobs

              </button>

              <button className="bg-[#C89B3C] text-black py-5 rounded-2xl text-lg font-semibold">

                Hire Talent

              </button>

            </div>

          </div>

        </div>

      )}

    </header>

  );
}