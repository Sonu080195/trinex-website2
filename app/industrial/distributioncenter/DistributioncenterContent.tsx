"use client";

import SubpageCTA from "@/components/SubpageCTA";

export default function DistributionCenterContent() {

  const roles = [
    "Project Managers",
    "Superintendents",
    "Distribution Center Managers",
    "MEP Coordinators",
    "Project Engineers",
    "Estimators",
    "Schedulers",
    "Safety Managers",
    "Logistics Construction Specialists",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.22) 75%), url('/subsector-pages/distribution-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Industrial Construction Recruitment

              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.02] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

                Distribution
                Center
                <span className="text-[#C89B3C]">
                  {" "}Recruitment
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                RUDRON connects industrial contractors and developers with top-tier professionals specializing in large-scale distribution center and logistics facility construction projects.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Distribution Center Sector

            </p>

            <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-6">

              Recruiting Talent
              For High-Speed
              Logistics Infrastructure

            </h2>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

              Distribution center construction requires experienced professionals capable of delivering fast-track industrial developments while coordinating complex logistics operations and advanced building systems.

            </p>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We help clients secure proven construction leaders and technical professionals for regional and nationwide distribution infrastructure projects.

            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-5">

              Key Roles We Recruit

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {roles.map((role, index) => (

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-[18px] px-4 py-4 text-gray-200 text-[14px] sm:text-[15px] leading-6 hover:border-[#C89B3C]/40 transition"
                >

                  {role}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <SubpageCTA />

    </main>

  );
}