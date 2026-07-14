"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";

export default function IndustriesContent() {
  const [heroVisible, setHeroVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setHeroVisible(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

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

  const marqueeItems = [
  "ARCHITECTURE",
  "ENGINEERING",
  "CONSTRUCTION",
  "MECHANICAL",
  "ELECTRICAL",
  "PLUMBING",
];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

{/* HERO */}

<section className="relative min-h-[85vh] flex items-center overflow-hidden">

  {/* BACKGROUND */}

  <div className="absolute inset-0">

    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
      style={{
        backgroundImage:
          "url('/industries/industries-hero.webp')",
        transform: heroVisible
          ? "scale(1.05)"
          : "scale(1)",
      }}
    />

    {/* OVERLAYS */}

    <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/30" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />

  </div>

  {/* GOLD LINE */}

  <div
    className="absolute left-0 top-0 bottom-0 w-[3px]"
    style={{
      background:
        "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
      opacity: heroVisible ? 0.7 : 0,
      transition: "all 1s ease",
    }}
  />

  {/* GOLD GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.10) 0%, transparent 70%)",
    }}
  />

  <div className="relative z-10 w-full">

    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">

      <div className="max-w-[760px]">

        {/* EYEBROW */}

        <div
          className="flex items-center gap-3 mb-6"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all .8s ease",
          }}
        >

          <span className="h-px w-10 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">

            Industry Expertise

          </p>

          <span className="h-px w-10 bg-[#C89B3C]" />

        </div>

        {/* HEADING */}

        <h1
          className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-4"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all .8s ease .15s",
          }}
        >

          Specialized Talent

          <br />

          Solutions Across

          <br />

          The{" "}

          <span className="relative inline-block text-[#C89B3C]">

            Built Environment

            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[#C89B3C] rounded-full opacity-20" />

          </span>

        </h1>

        {/* BODY */}

        <p
          className="text-gray-300 text-[14px] lg:text-[16px] leading-8 max-w-[700px] mb-10"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all .8s ease .3s",
          }}
        >

          RUDRON partners with organizations across
          architecture, engineering, construction,
          mechanical, electrical and plumbing markets,
          delivering specialist recruitment solutions
          that support project success and long-term growth.

        </p>

        {/* TAGS */}

        <div
          className="flex flex-wrap gap-3 mb-8"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(16px)",
            transition: "all .8s ease .5s",
          }}
        >

          {[
            "Architecture",
            "Engineering",
            "Construction",
            "Mechanical",
            "Electrical",
            "Plumbing",
          ].map((item) => (

            <span
              key={item}
              className="
              px-5
              py-2.5
              rounded-full
              border
              border-white/15
              bg-white/5
              backdrop-blur-md
              text-sm
              text-white
              hover:border-[#C89B3C]/40
              transition-all
              duration-300
              "
            >
              {item}
            </span>

          ))}

        </div>

        {/* STATS */}

        <div
          className="grid grid-cols-3 gap-3 max-w-[620px]"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all .8s ease .7s",
          }}
        >

          {[
            ["6", "Core Industries"],
            ["Global", "Coverage"],
            ["Executive", "Search"],
          ].map((item) => (

            <div
              key={item[0]}
              className="
              bg-white/[0.04]
              border
              border-white/10
              backdrop-blur-md
              rounded-[18px]
              p-4
              "
            >

              <h3 className="text-[#C89B3C] text-xl font-bold">

                {item[0]}

              </h3>

              <p className="text-gray-400 text-sm">

                {item[1]}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* INDUSTRY EXPERTISE */}

<section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-4 sm:px-6 lg:px-20 overflow-hidden">

  {/* GRID PATTERN */}

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,0.045) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* GOLD GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.08) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Industry Coverage

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[56px] font-bold leading-[1.02] mb-5">

        Recruitment Expertise

        <br />

        <span className="text-[#C89B3C]">

          Built Around Industry Knowledge

        </span>

      </h2>

      <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        Every sector within the built environment
        requires a unique understanding of talent,
        project delivery, leadership and technical expertise.

      </p>

    </div>

    {/* INDUSTRIES GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        "Architecture",
        "Engineering",
        "Construction",
        "Mechanical",
        "Electrical",
        "Plumbing",
      ].map((industry, index) => (

        <div
          key={industry}
          className="
          group
          bg-white
          rounded-[24px]
          border
          border-black/5
          p-6
          overflow-hidden
          relative
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          "
        >

          {/* GHOST NUMBER */}

          <div className="absolute -right-2 -top-2 text-[90px] font-black text-black/[0.04]">

            0{index + 1}

          </div>

          {/* TOP BAR */}

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-[#07111F] text-[22px] font-bold mb-3">

            {industry}

          </h3>

          <p className="text-gray-500 leading-7 text-[15px]">

            Specialist recruitment solutions tailored
            to the unique hiring requirements and
            project demands of the {industry.toLowerCase()} sector.

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* INDUSTRY MARQUEE */}

      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/70 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}</span>
              <span className="text-[#C89B3C] text-[8px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES GRID */}
      <section className="bg-[#0D1726] py-6 lg:py-10 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center max-w-[860px] mx-auto mb-9 sm:mb-11">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Why RUDRON

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

            <h2 className="text-[#F7F7F7] text-[28px] sm:text-[38px] lg:text-[56px] font-bold leading-[1.02] mb-5">

              Recruitment Expertise
              Built Around
              Industry Knowledge

            </h2>

            <p className="text-gray-500 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              Our recruitment teams understand the technical demands,
              leadership requirements, and project complexities shaping
              today’s built environment sectors.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

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

{/* RECRUITMENT COVERAGE */}

<section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-4 sm:px-6 lg:px-20 overflow-hidden">

  {/* GRID */}

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,0.035) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.07) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Recruitment Coverage

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[56px] font-bold leading-[1.02] mb-5">

        Roles That Drive

        <br />

        <span className="text-[#C89B3C]">

          Project Success

        </span>

      </h2>

      <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        From field leadership to executive management,
        we connect organizations with the professionals
        required to deliver complex projects successfully.

      </p>

    </div>

    {/* GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        "Project Management",
        "Superintendents",
        "Estimating",
        "Preconstruction",
        "Executive Leadership",
        "Operations Management",
        "MEP Leadership",
        "Commissioning",
      ].map((item, index) => (

        <div
          key={item}
          className="
          group
          bg-white
          rounded-[24px]
          border
          border-black/5
          p-6
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          hover:shadow-[0_20px_50px_rgba(200,155,60,.08)]
          transition-all
          duration-500
          relative
          overflow-hidden
          "
        >

          {/* NUMBER */}

          <div className="absolute -right-2 -top-2 text-[85px] font-black text-black/[0.04]">

            0{index + 1}

          </div>

          {/* GOLD BAR */}

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-[#07111F] text-[18px] font-bold leading-snug">

            {item}

          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

{/* WHY ORGANIZATIONS CHOOSE RUDRON */}

<section className="relative bg-[#07111F] py-6 lg:py-10 px-4 sm:px-6 lg:px-20 overflow-hidden">

  {/* GOLD GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.10) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Why RUDRON

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[56px] font-bold leading-[1.02] mb-5">

        Built For The

        <br />

        <span className="text-[#C89B3C]">

          Built Environment

        </span>

      </h2>

      <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        Combining industry expertise, executive search capability
        and project staffing experience across architecture,
        engineering, construction and MEP markets.

      </p>

    </div>

    {/* GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: "Industry Specialists",
          desc: "Dedicated recruitment expertise across AEC and MEP sectors.",
        },
        {
          title: "Executive Search",
          desc: "Confidential leadership hiring for critical business functions.",
        },
        {
          title: "Project Staffing",
          desc: "Project-ready professionals supporting delivery and growth.",
        },
        {
          title: "National Reach",
          desc: "Access to talent networks across major construction markets.",
        },
      ].map((item, index) => (

        <div
          key={item.title}
          className="
          group
          bg-white/[0.04]
          backdrop-blur-md
          border
          border-white/10
          rounded-[24px]
          p-6
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          relative
          overflow-hidden
          "
        >

          {/* NUMBER */}

          <div className="absolute -right-2 -top-2 text-[90px] font-black text-white/[0.04]">

            0{index + 1}

          </div>

          {/* GOLD BAR */}

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-white text-[20px] font-bold mb-3">

            {item.title}

          </h3>

          <p className="text-gray-400 text-[14px] leading-7">

            {item.desc}

          </p>

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