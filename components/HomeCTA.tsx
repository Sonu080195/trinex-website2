import Link from "next/link";

export default function HomeCTA() {

  return (

    <section className="bg-[#F7F7F7] px-6 lg:px-18 pb-20">

      <div className="max-w-9xl mx-auto">

        <div className="bg-[#F9F7F2] rounded-[30px] border border-black/5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px] items-center gap-8 p-8 lg:p-8">

            {/* LEFT IMAGE */}
            <div
              className="relative h-[180px] lg:h-[170px] rounded-[22px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero-bg.png')",
              }}
            >

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#07111F]/45" />

              {/* LOGO */}
              <div className="absolute inset-0 flex items-center justify-center">

                <img
                  src="/images/TRINEX Logo.png"
                  alt="TRINEX"
                  className="w-[150px] object-contain"
                />

              </div>

            </div>

            {/* CENTER CONTENT */}
            <div>

              <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold mb-4">

                Let's Build What's Next

              </p>

              <h2 className="text-[#07111F] text-[34px] lg:text-[46px] font-bold leading-tight mb-5">

                Looking To Hire Or Exploring
                <br />

                New Opportunities?

              </h2>

              <p className="text-gray-600 text-lg leading-8 max-w-2xl">

                Whether you're hiring top talent or looking for your next
                career move, we're here to help you take the next step.

              </p>

            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-col gap-4 lg:items-end">

              {/* BUTTON 1 */}
              <Link
                href="/contact"
                className="group w-full lg:w-[250px] bg-[#C89B3C] hover:bg-[#d3a647] transition-all duration-300 text-black font-semibold px-8 py-5 rounded-2xl flex items-center justify-center gap-4"
              >

                Hire Top Talent

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

              {/* BUTTON 2 */}
              <Link
                href="/jobs"
                className="group w-full lg:w-[250px] border border-black/10 hover:border-[#C89B3C] transition-all duration-300 text-[#07111F] font-semibold px-8 py-5 rounded-2xl flex items-center justify-center gap-4 bg-white"
              >

                Explore Jobs

                <span className="text-[#C89B3C] transition duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}