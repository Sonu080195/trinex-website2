import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050D18] border-t border-white/5">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6">

        {/* TOP */}
        <div className="py-12 sm:py-14 lg:py-16 border-b border-white/10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* BRAND */}
            <div className="lg:col-span-2">

              <img
                src="/images/RUDRON Logo.webp"
                alt="RUDRON"
                className="w-[150px] sm:w-[170px] mb-5"
              />

              <div className="inline-flex items-center bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-full px-4 py-2 mb-5">

                <p className="text-[#C89B3C] text-[11px] uppercase tracking-[2px] font-medium">

                  Serving USA • UAE • India

                </p>

              </div>

              <p className="text-gray-400 text-[14px] leading-8 max-w-[480px]">

                RUDRON Global Talent Solutions is a specialist recruitment
                partner serving the Architecture, Engineering,
                Construction, Mechanical, Electrical and Plumbing industries.
                We connect exceptional talent with industry-leading
                organizations across commercial, industrial,
                infrastructure and mission-critical markets.

              </p>

            </div>

            {/* COMPANY */}
            <div>

              <h3 className="text-white text-[18px] font-semibold mb-5">

                Company

              </h3>

              <div className="flex flex-col gap-3 text-[15px]">

                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>

                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-white transition"
                >
                  Industries
                </Link>

                <Link
                  href="/insights"
                  className="text-gray-400 hover:text-white transition"
                >
                  Insights
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="text-white text-[18px] font-semibold mb-5">

                Services

              </h3>

              <div className="flex flex-col gap-3 text-[15px]">

                <Link
                  href="/employers"
                  className="text-gray-400 hover:text-white transition"
                >
                  For Employers
                </Link>

                <Link
                  href="/candidates"
                  className="text-gray-400 hover:text-white transition"
                >
                  For Candidates
                </Link>

                <Link
                  href="/jobs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Browse Jobs
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Request Talent
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-white text-[18px] font-semibold mb-5">

                Contact

              </h3>

              <div className="space-y-4">

                <div>

                  <p className="text-[#C89B3C] text-sm mb-1">

                    United States

                  </p>

                  <p className="text-gray-400 text-[15px]">

                    +1 (239) 309 3969

                  </p>

                </div>

                <div>

                  <p className="text-[#C89B3C] text-sm mb-1">

                    United Arab Emirates

                  </p>

                  <p className="text-gray-400 text-[15px]">

                    +971 56 957 5207

                  </p>

                </div>

                <div>

                  <p className="text-[#C89B3C] text-sm mb-1">

                    India

                  </p>

                  <p className="text-gray-400 text-[15px]">

                    +91 99671 44597

                  </p>

                </div>

                <p className="text-gray-400 text-[15px]">

                  admin@rudron.com

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-[13px] text-center md:text-left">

            © 2026 RUDRON Global Talent Solutions. All Rights Reserved.

          </p>

          <div className="flex items-center gap-6 text-[13px]">

            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}