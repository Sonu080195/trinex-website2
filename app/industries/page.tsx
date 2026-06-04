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

  const industryMarquee = [
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

      {/* INDUSTRY EXPERTISE SHOWCASE */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT */}

    <div>

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Industry Expertise

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05] mb-6">

        Recruitment Built
        Around Industry
        Knowledge

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Every sector of the built environment operates with unique
        challenges, project requirements, technical disciplines,
        and leadership expectations.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        RUDRON delivers recruitment solutions tailored to the
        architecture, engineering, construction, and MEP markets,
        helping organizations secure the talent required to deliver
        complex projects and sustain long-term growth.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

        Our sector-specific expertise enables us to understand
        technical requirements, market trends, project demands,
        and leadership challenges across the industries we support.

      </p>

    </div>

    {/* RIGHT */}

    <div className="relative min-h-[520px] lg:min-h-[620px]">

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[260px] lg:w-[320px]">

        <p className="text-[#C89B3C] mb-3">
          Industry
        </p>

        <h3 className="text-2xl font-bold">
          Architecture
        </h3>

      </div>

      <div className="floating-card-2 absolute top-24 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[260px] lg:w-[320px]">

        <p className="text-[#C89B3C] mb-3">
          Industry
        </p>

        <h3 className="text-2xl font-bold">
          Engineering
        </h3>

      </div>

      <div className="floating-card absolute bottom-24 left-8 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[260px] lg:w-[320px]">

        <p className="text-[#C89B3C] mb-3">
          Industry
        </p>

        <h3 className="text-2xl font-bold">
          Construction
        </h3>

      </div>

      <div className="floating-card-2 absolute bottom-0 right-8 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[260px] lg:w-[320px]">

        <p className="text-[#C89B3C] mb-3">
          Industry
        </p>

        <h3 className="text-2xl font-bold">
          Mechanical • Electrical • Plumbing
        </h3>

      </div>

    </div>

  </div>

</section>

{/* INDUSTRY MARQUEE */}

<section className="bg-[#07111F] py-4 lg:py-6 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...industryMarquee, ...industryMarquee].map((item, index) => (

      <div
        key={index}
        className="flex items-center"
      >

        <span className="text-white text-[18px] sm:text-[26px] lg:text-[38px] font-bold mx-6">

          {item}

        </span>

        <span className="text-[#C89B3C] text-[28px]">

          ◆

        </span>

      </div>

    ))}

  </div>

</section>

      {/* INDUSTRIES GRID */}
      <section className="bg-[#0D1726] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center max-w-[860px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Core Industries

            </p>

            <h2 className="text-[#F7F7F7] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05] mb-5">

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

      {/* RECRUITMENT COVERAGE */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Recruitment Coverage

      </p>

      <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Roles That Drive
        Project Success

      </h2>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-3xl mx-auto mt-6">

        From project delivery and field operations to executive leadership,
        we help organizations secure the professionals required to
        deliver successful outcomes.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

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
          className="group bg-white rounded-[28px] border border-black/5 p-6 hover:-translate-y-2 hover:border-[#C89B3C]/30 transition-all duration-500"
        >

          <div className="text-[#C89B3C] text-5xl font-bold opacity-20 mb-4">

            0{index + 1}

          </div>

          <h3 className="text-[#07111F] text-lg font-bold group-hover:text-[#C89B3C] transition-colors">

            {item}

          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

{/* INDUSTRY IMPACT */}

<section className="bg-[#07111F] py-8 lg:py-12 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: "AEC",
          desc: "Industry Expertise",
        },
        {
          title: "MEP",
          desc: "Technical Recruitment",
        },
        {
          title: "DC",
          desc: "Mission Critical Focus",
        },
        {
          title: "National",
          desc: "Talent Network",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="bg-[#0D1726] border border-white/10 rounded-[24px] p-4 text-center"
        >

          <h3 className="text-[#C89B3C] text-[28px] lg:text-[30px] font-bold mb-2">

            {item.title}

          </h3>

          <p className="text-gray-400">

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