import Link from "next/link";

export default function HomeCTA() {

  return (

    <section className="relative bg-[#F4F4F0] py-8 lg:py-10 px-4 sm:px-4 lg:px-20 overflow-hidden">

      <div className="max-w-9xl mx-auto">

        {/* Grid Pattern */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}
/>

{/* Glow */}
<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
  style={{
    background:
      "radial-gradient(ellipse at top, rgba(200,155,60,0.07) 0%, transparent 45%)",
  }}
/>

        <div className="
relative
bg-[#F9F7F2]
rounded-[36px]
border
border-black/5
overflow-hidden
shadow-[0_20px_60px_rgba(0,0,0,0.06)]
">

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px] items-center gap-8 p-8 lg:p-8">

            {/* LEFT IMAGE */}
            <div
              className="relative h-[180px] lg:h-[170px] rounded-[22px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero-bg.webp')",
              }}
            >

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#07111F]/45" />

              {/* LOGO */}
              <div className="absolute inset-0 flex items-center justify-center">

                <img
                  src="/images/RUDRON Logo.webp"
                  alt="RUDRON"
                  className="w-[150px] sm:w-[170px] mb-5"
                />

              </div>

            </div>

            {/* CENTER CONTENT */}
            <div>

              <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold mb-4">

                Let's Build What's Next

              </p>

              <h2 className="text-[#07111F] text-[24px] sm:text-[30px] lg:text-[38px] font-bold leading-[1.05] mb-4">

                Looking To Hire Or Exploring
                <br />

                New Opportunities?

              </h2>

              <p className="text-gray-600 text-md leading-6 text-sm">

                Whether you're hiring top talent or looking for your next
                career move, we're here to help you take the next step.

              </p>

            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-col gap-4 lg:items-end">

              {/* BUTTON 1 */}
              <Link
                href="/contact"
                className="
group
w-full
lg:w-[260px]
bg-[#C89B3C]
hover:bg-[#d3a647]
hover:-translate-y-1
transition-all
duration-300
text-black
font-semibold
px-8
py-5
rounded-2xl
flex
items-center
justify-center
gap-4
"
              >

                Hire Top Talent

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

              {/* BUTTON 2 */}
              <Link
                href="/jobs"
                className="
group
w-full
lg:w-[260px]
border
border-black/10
hover:border-[#C89B3C]
hover:-translate-y-1
transition-all
duration-300
text-[#07111F]
font-semibold
px-8
py-5
rounded-2xl
flex
items-center
justify-center
gap-4
bg-white
"
              >

                Explore Jobs

                <span className="text-[#C89B3C] transition duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>
              
              <div className="flex flex-wrap gap-6 mt-0">

  <div>

    <p className="text-[#C89B3C] text-1xl font-bold">

      100+

    </p>

    <p className="text-gray-500 text-xs">

      Placements

    </p>

  </div>

  <div>

    <p className="text-[#C89B3C] text-1xl font-bold">

      USA

    </p>

    <p className="text-gray-500 text-xs">

      Coverage

    </p>

  </div>

  <div>

    <p className="text-[#C89B3C] text-1xl font-bold">

      AEC + MEP

    </p>

    <p className="text-gray-500 text-xs">

      Specialists

    </p>

  </div>

</div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}