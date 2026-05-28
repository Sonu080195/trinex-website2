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
        "Design-focused recruitment solutions for architectural studios, planning firms, and multidisciplinary design environments.",
    },

    {
      title: "Engineering",
      image: "/industries/engineering.png",
      slug: "engineering",
      description:
        "Specialized hiring across civil, structural, mechanical, electrical, and multidisciplinary engineering sectors.",
    },

    {
      title: "Construction",
      image: "/industries/construction.png",
      slug: "construction",
      description:
        "Project-ready talent solutions across commercial, industrial, infrastructure, and mission critical construction markets.",
    },

    {
      title: "Mechanical",
      image: "/industries/mechanical.png",
      slug: "mechanical",
      description:
        "Recruitment support for mechanical contractors, HVAC specialists, and technical operations leadership teams.",
    },

    {
      title: "Electrical",
      image: "/industries/electrical.png",
      slug: "electrical",
      description:
        "Talent solutions across electrical systems, power infrastructure, mission critical facilities, and field operations.",
    },

    {
      title: "Plumbing",
      image: "/industries/plumbing.png",
      slug: "plumbing",
      description:
        "Connecting plumbing firms with experienced field leadership, estimators, project managers, and operations talent.",
    },

  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[68vh] sm:min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 16%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.20) 76%), url('/industries/industries-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[660px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Industry Expertise

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[36px] sm:text-[50px] lg:text-[66px] mb-6">

                Specialized Talent
                Solutions Across
                The Built Environment

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[620px]">

                RUDRON partners with organizations across architecture,
                engineering, construction, and MEP sectors to deliver
                project-ready professionals across rapidly evolving markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES GRID */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center max-w-[860px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Core Industries

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Recruitment Expertise
              Built Around
              Industry Knowledge

            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              Our recruitment teams understand the technical demands,
              leadership requirements, and project complexities shaping
              today’s built environment sectors.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {industries.map((item, index) => (

              <Link
                href={`/industries/${item.slug}`}
                key={index}
                className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] h-[280px] sm:h-[320px] lg:h-[340px]"
              >

                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/45 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 lg:p-7 z-10">

                  <div className="w-12 h-[2px] bg-[#C89B3C] mb-4 transition-all duration-500 group-hover:w-20" />

                  <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight mb-3">

                    {item.title}

                  </h3>

                  <p className="text-gray-300 text-[14px] sm:text-[15px] leading-7 mb-5 max-w-[320px]">

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
          <div className="text-center max-w-[850px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Recruitment Built
              Around Technical
              Precision

            </h2>

            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We combine market expertise, technical understanding,
              and relationship-driven recruitment strategies to help
              organizations scale with confidence.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              {
                title: "Industry Specialisation",
                desc: "Deep understanding of technical construction and engineering markets.",
              },

              {
                title: "Project-Focused Hiring",
                desc: "Talent solutions aligned with project timelines and operational goals.",
              },

              {
                title: "Executive Search",
                desc: "Strategic leadership recruitment for growth-focused organizations.",
              },

              {
                title: "Global Talent Reach",
                desc: "Access to nationwide and international recruitment networks.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[24px] border border-white/10 p-5 sm:p-6"
              >

                <h3 className="text-white text-[19px] sm:text-[21px] font-semibold leading-snug mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 text-[14px] sm:text-[15px] leading-7">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MARKET SUPPORT */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Areas We Support

          </p>

          <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

            Supporting Growth
            Across Critical
            Market Segments

          </h2>

          <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[820px] mx-auto mb-9 sm:mb-11">

            From commercial developments and mission critical facilities
            to industrial infrastructure and residential communities,
            we help companies secure the talent required to deliver projects successfully.

          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              "Commercial",
              "Industrial",
              "Residential",
              "Infrastructure & Civil",
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