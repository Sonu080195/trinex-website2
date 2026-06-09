import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#07111F] border-t border-white/5 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6">

        {/* GRID PATTERN */}

<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200, 156, 60, 0.67) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200, 156, 60, 0.67) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
      </div>

        {/* TOP */}
        <div className="py-12 sm:py-14 lg:py-16 border-b border-white/10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            

            {/* BRAND */}
            <div className="lg:col-span-2">

              <img
                src="/images/RUDRON Logo.webp"
                alt="RUDRON"
                className="w-[130px] sm:w-[140px] mb-3"
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
className="
group
flex
items-center
gap-2
text-gray-400
hover:text-white
transition-all
duration-300
"
>
<>
  About Us
  <span className="opacity-0 group-hover:opacity-100 transition-all">
    →
  </span>
</>
</Link>

<Link
href="/industries"
className="
group
flex
items-center
gap-2
text-gray-400
hover:text-white
transition-all
duration-300
"
>
<>
  Industries
  <span className="opacity-0 group-hover:opacity-100 transition-all">
    →
  </span>
</>
</Link>

<Link
href="/insights"
className="
group
flex
items-center
gap-2
text-gray-400
hover:text-white
transition-all
duration-300
"
>
<>
  Insights
  <span className="opacity-0 group-hover:opacity-100 transition-all">
    →
  </span>
</>
</Link>

<Link
href="/contact"
className="
group
flex
items-center
gap-2
text-gray-400
hover:text-white
transition-all
duration-300
"
>
<>
  Contact
  <span className="opacity-0 group-hover:opacity-100 transition-all">
    →
  </span>
</>
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
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  <>
                  For Employers
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </>
                </Link>

                <Link
                  href="/candidates"
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  <>
                  For Candidates
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </>
                </Link>

                <Link
                  href="/jobs"
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  <>
                  Browse Jobs
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </>
                </Link>

                <Link
                  href="/contact"
                  className="
                  group
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  <>
                  Request Talent
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </>
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-white text-[18px] font-semibold mb-5">

                Contact

              </h3>

              <div className="space-y-4">

                <div className="space-y-3">

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">

    <p className="text-[#C89B3C] text-sm mb-1">

      🇺🇸 United States

    </p>

    <p className="text-gray-300">

      +1 (239) 309 3969

    </p>

  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">

    <p className="text-[#C89B3C] text-sm mb-1">

      🇦🇪 UAE

    </p>

    <p className="text-gray-300">

      +971 56 957 5207

    </p>

  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">

    <p className="text-[#C89B3C] text-sm mb-1">

      🇮🇳 India

    </p>

    <p className="text-gray-300">

      +91 99671 44597

    </p>

  </div>

  <p className="text-gray-400 text-sm pt-2">

    admin@rudrongts.com

  </p>

</div>

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