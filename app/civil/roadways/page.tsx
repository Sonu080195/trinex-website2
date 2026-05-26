"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubpageCTA from "@/components/SubpageCTA";

export default function RoadwaysPage() {

  const roles = [
    "Project Managers",
    "Superintendents",
    "Highway Construction Managers",
    "Civil Project Engineers",
    "Estimators",
    "Schedulers",
    "Safety Managers",
    "Infrastructure Coordinators",
    "Field Operations Managers",
  ];

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.95) 18%, rgba(7,17,31,0.78) 40%, rgba(7,17,31,0.20) 72%), url('/subsector-pages/roadways-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-18 pt-32 lg:pt-24">

            <div className="max-w-[760px]">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
                Infrastructure Construction Recruitment
              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.05] text-[46px] md:text-[58px] lg:text-[64px] mb-8">

                Roadways
                <br />

                Construction
                <br />

                <span className="text-[#C89B3C]">
                  Recruitment
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[18px] leading-9 mb-10 max-w-[720px]">

                RUDRON provides specialized recruitment solutions for roadway and transportation infrastructure projects—connecting contractors with experienced civil construction professionals nationwide.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mb-14">

                <button className="bg-[#C89B3C] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition">

                  Hire Infrastructure Talent

                </button>

                <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:border-[#C89B3C] transition">

                  Explore Opportunities

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 lg:px-18 bg-[#07111F]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-18 items-start">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
              Transportation Infrastructure
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">

              Supporting Critical Road &
              Highway Infrastructure Projects

            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">

              Roadway construction projects demand experienced professionals capable of managing large-scale civil infrastructure developments, accelerated schedules, and public-sector coordination.

            </p>

            <p className="text-gray-300 text-lg leading-9">

              We help infrastructure contractors secure proven construction leaders and technical specialists for highways, interchanges, bridges, and transportation improvement projects.

            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-[#0D1726] border border-white/10 rounded-[30px] p-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-6">
              Key Roles We Recruit
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-gray-200 hover:border-[#C89B3C] transition"
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

      <Footer />

    </main>
  );
}