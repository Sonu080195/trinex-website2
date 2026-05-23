"use client";

import Navbar from "@/components/Navbar";
import SubpageCTA from "@/components/SubpageCTA";

export default function RetailConstructionPage() {

  const roles = [
    "Project Managers",
    "Superintendents",
    "Project Engineers",
    "MEP Coordinators",
    "Retail Construction Managers",
    "Estimators",
    "Schedulers",
    "Safety Managers",
    "Project Executives",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(14,15,16,0.92) 16%, rgba(7,17,31,0.70) 38%, rgba(7,17,31,0.10) 70%), url('/subsector-pages/retail-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto w-full px-8 lg:px-18">

            <div className="max-w-[760px] pt-28">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
                Commercial Construction
              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.05] text-[52px] lg:text-[64px] mb-8">

                Retail
                <br />

                Construction
                <br />

                <span className="text-[#C89B3C]">
                  Recruitment
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[18px] leading-10 max-w-[730px]">

                Delivering experienced retail construction talent
                for shopping centers, mixed-use developments,
                flagship stores, lifestyle centers,
                and national retail buildouts.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
              Sector Expertise
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Building Modern Retail Experiences
            </h2>

            <p className="text-gray-400 text-xl leading-10 mb-8">

              TRINEX partners with leading retail contractors,
              developers, and construction firms delivering
              modern shopping destinations and commercial spaces.

            </p>

            <p className="text-gray-400 text-xl leading-10">

              From ground-up retail developments to fast-paced
              tenant improvements and nationwide rollouts,
              we connect companies with top construction professionals.

            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-8">

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Retail
              </h3>

              <p className="text-gray-400 leading-8">
                Recruitment support for modern
                retail and shopping center projects.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Mixed-Use
              </h3>

              <p className="text-gray-400 leading-8">
                Talent solutions for large-scale
                mixed-use commercial developments.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Tenant
              </h3>

              <p className="text-gray-400 leading-8">
                Experienced professionals for
                tenant improvements and interior buildouts.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                National
              </h3>

              <p className="text-gray-400 leading-8">
                Supporting nationwide retail expansion
                and multi-site construction programs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ROLES */}
      <section className="py-20 px-8 bg-[#0B1422]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
              Key Positions
            </p>

            <h2 className="text-5xl font-bold">
              Roles We Recruit
            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {roles.map((role, index) => (

              <div
                key={index}
                className="bg-[#07111F] border border-white/10 rounded-3xl p-8 hover:border-[#C89B3C] transition"
              >

                <h3 className="text-2xl font-semibold leading-snug">
                  {role}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <SubpageCTA />

    </main>

  );
}