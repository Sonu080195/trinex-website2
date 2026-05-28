"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";

export default function IndustriesPage() {

  const industries = [

    {
      title: "Architecture",
      image: "/industries/architecture.png",
      slug: "architecture",
      description:
        "Design-focused recruitment solutions for architectural and planning environments.",
    },

    {
      title: "Engineering",
      image: "/industries/engineering.png",
      slug: "engineering",
      description:
        "Specialized hiring across civil, structural, and multidisciplinary engineering sectors.",
    },

    {
      title: "Construction",
      image: "/industries/construction.png",
      slug: "construction",
      description:
        "Project-ready talent solutions across commercial and infrastructure markets.",
    },

    {
      title: "Mechanical",
      image: "/industries/mechanical.png",
      slug: "mechanical",
      description:
        "Recruitment support for mechanical contractors and technical operations teams.",
    },

    {
      title: "Electrical",
      image: "/industries/electrical.png",
      slug: "electrical",
      description:
        "Talent solutions across power systems, mission critical, and electrical construction.",
    },

    {
      title: "Plumbing",
      image: "/industries/plumbing.png",
      slug: "plumbing",
      description:
        "Connecting plumbing firms with field leadership and operational professionals.",
    },

  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.76) 42%, rgba(7,17,31,0.18) 75%), url('/industries/industries-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Industry Expertise

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

                Specialized Talent
                Solutions Across
                The Built Environment

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                RUDRON partners with organizations across architecture,
                engineering, construction, and MEP sectors to deliver
                project-ready professionals across rapidly evolving markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Core Industries

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Recruitment Expertise
              Built Around
              Industry Knowledge

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {industries.map((item, index) => (

              <Link
                href={`/industries/${item.slug}`}
                key={index}
                className="group relative overflow-hidden rounded-[24px] h-[260px] sm:h-[300px]"
              >

                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 z-10">

                  <div className="w-12 h-[2px] bg-[#C89B3C] mb-4 transition-all duration-500 group-hover:w-20" />

                  <h3 className="text-white text-[24px] sm:text-[28px] font-bold leading-tight mb-3">

                    {item.title}

                  </h3>

                  <p className="text-gray-300 text-[14px] sm:text-[15px] leading-7 mb-4 max-w-[320px]">

                    {item.description}

                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-3">

                    <p className="text-white text-[14px] sm:text-[15px] font-medium">

                      Explore Industry

                    </p>

                    <span className="text-[#C89B3C] text-xl transition duration-300 group-hover:translate-x-2">

                      →

                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Recruitment Built
              Around Technical
              Precision

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              "Industry Specialisation",
              "Project-Focused Hiring",
              "Executive Search",
              "Global Talent Reach",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[24px] border border-white/10 p-5 sm:p-6"
              >

                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRY SUPPORT */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Areas We Support

          </p>

          <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-8 sm:mb-10">

            Supporting Growth
            Across Critical
            Market Segments

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              "Commercial Construction",
              "Industrial Construction",
              "Residential Construction",
              "Infrastructure & Civil Construction",
            ].map((market, index) => (

              <div
                key={index}
                className="bg-white border border-black/5 rounded-[24px] p-5 sm:p-6"
              >

                <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {market}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <HomeCTA />

      {/* FOOTER */}
      <Footer />

    </main>

  );
}