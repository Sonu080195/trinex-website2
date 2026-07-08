import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#050D18] overflow-hidden">

      {/* Signature: thin horizontal gold beam across the very top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-60" />

      {/* Subtle radial glow anchored top-left — warms the brand column */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── TOP GRID ─────────────────────────────────────────────── */}
        <div className="py-10 sm:py-12 lg:py-14 border-b border-white/[0.07]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* BRAND ─ spans 2 cols */}
            <div className="lg:col-span-2">

              <img
                src="/images/RUDRON Logo.webp"
                alt="RUDRON"
                className="w-[128px] sm:w-[138px] mb-4"
              />

              {/* Gold pill — kept exactly, just slightly tightened */}
              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 border border-[#C89B3C]/25 rounded-full px-4 py-1.5 mb-5">
                {/* Live-dot: a small signal that this firm is active globally */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] animate-pulse flex-shrink-0" />
                <p className="text-[#C89B3C] text-[10.5px] uppercase tracking-[2px] font-medium leading-none">
                  Serving USA · CAN · UAE · India
                </p>
              </div>

              <p className="text-gray-400/80 text-[13.5px] leading-[1.85] max-w-[440px]">
                RUDRON Global Talent Solutions is a specialist recruitment
                partner serving the Architecture, Engineering, Construction,
                Mechanical, Electrical and Plumbing industries. We connect
                exceptional talent with industry-leading organizations across
                commercial, industrial, infrastructure and mission-critical
                markets.
              </p>

            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-white text-[13px] font-semibold uppercase tracking-[1.8px] mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#C89B3C] inline-block" />
                Company
              </h3>

              <nav className="flex flex-col gap-2.5 text-[14px]">
                {[
                  { href: "/about",      label: "About Us"   },
                  { href: "/industries", label: "Industries" },
                  { href: "/insights",   label: "Insights"   },
                  { href: "/contact",    label: "Contact"    },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-[#C89B3C] group-hover:w-3 transition-all duration-300 ease-out" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-white text-[13px] font-semibold uppercase tracking-[1.8px] mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#C89B3C] inline-block" />
                Services
              </h3>

              <nav className="flex flex-col gap-2.5 text-[14px]">
                {[
                  { href: "/employers",  label: "For Employers"  },
                  { href: "/candidates", label: "For Candidates" },
                  { href: "/jobs",       label: "Browse Jobs"    },
                  { href: "/contact",    label: "Request Talent" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-[#C89B3C] group-hover:w-3 transition-all duration-300 ease-out" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-white text-[13px] font-semibold uppercase tracking-[1.8px] mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#C89B3C] inline-block" />
                Contact
              </h3>

              <div className="space-y-3.5">
                {[
                  { region: "United States",        number: "+1 (239) 309 3969"  },
                  { region: "United Arab Emirates", number: "+971 56 957 5207"   },
                  { region: "India",                number: "+91 ----- -----"    },
                ].map(({ region, number }) => (
                  <div key={region} className="group">
                    <p className="text-[#C89B3C]/80 text-[11px] uppercase tracking-[1.4px] font-medium mb-0.5">
                      {region}
                    </p>
                    <p className="text-gray-300 text-[13.5px] font-light tracking-wide">
                      {number}
                    </p>
                  </div>
                ))}

                {/* Email — visually separated */}
                <div className="pt-1 border-t border-white/[0.06]">
                  <a
                    href="mailto:admin@rudrongts.com"
                    className="text-gray-400 text-[13.5px] hover:text-[#C89B3C] transition-colors duration-200 break-all"
                  >
                    admin@rudrongts.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────────── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-gray-600 text-[12px] tracking-wide text-center sm:text-left">
            © 2026 RUDRON Global Talent Solutions. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1 text-[12px] text-gray-600">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-200 px-3 py-1">
              Privacy Policy
            </Link>
            <span className="text-white/10 select-none">|</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors duration-200 px-3 py-1">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}