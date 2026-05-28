import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";

const industryData: Record<string, any> = {

  architecture: {

    title: "Architecture Recruitment",

    image: "/industries/architecture.png",

    intro:
      "RUDRON partners with architectural firms, design studios, and multidisciplinary consultancies to deliver highly skilled professionals across planning, design, technical execution, and leadership functions.",

    overview:
      "The architecture industry continues to evolve through rapid urban development, sustainability initiatives, mixed-use expansion, and technology-driven design solutions. Firms today require professionals who combine creativity, technical precision, and project coordination expertise.",

    roles: [
      "Project Architects",
      "Design Managers",
      "Architectural Designers",
      "BIM Coordinators",
      "Studio Directors",
      "Technical Architects",
    ],

    markets: [
      "Commercial",
      "Residential",
      "Hospitality",
      "Healthcare",
    ],
  },

  engineering: {

    title: "Engineering Recruitment",

    image: "/industries/engineering.png",

    intro:
      "Specialized engineering recruitment solutions across civil, structural, infrastructure, and multidisciplinary engineering environments.",

    overview:
      "Engineering organizations face increasing demand for technically advanced professionals capable of supporting large-scale infrastructure, transportation, energy, and commercial development projects.",

    roles: [
      "Civil Engineers",
      "Structural Engineers",
      "Project Engineers",
      "Design Engineers",
      "Engineering Managers",
      "VDC Engineers",
    ],

    markets: [
      "Infrastructure",
      "Transportation",
      "Energy",
      "Commercial Development",
    ],
  },

  construction: {

    title: "Construction Recruitment",

    image: "/industries/construction.png",

    intro:
      "Recruitment solutions designed for commercial, industrial, infrastructure, and mission critical construction markets.",

    overview:
      "The construction sector continues to experience major workforce shortages as demand for experienced project professionals increases across commercial, industrial, and infrastructure developments.",

    roles: [
      "Project Managers",
      "Superintendents",
      "Project Executives",
      "Estimators",
      "Schedulers",
      "Construction Directors",
    ],

    markets: [
      "Commercial",
      "Industrial",
      "Mission Critical",
      "Infrastructure",
    ],
  },

  mechanical: {

    title: "Mechanical Recruitment",

    image: "/industries/mechanical.png",

    intro:
      "Specialized recruitment support for mechanical contractors, manufacturers, and HVAC-focused organizations.",

    overview:
      "Mechanical organizations require highly technical professionals capable of supporting large-scale HVAC, piping, fabrication, and process-driven environments.",

    roles: [
      "Mechanical Project Managers",
      "HVAC Engineers",
      "Pipefitting Superintendents",
      "Mechanical Estimators",
      "Operations Managers",
      "Service Directors",
    ],

    markets: [
      "HVAC",
      "Industrial Facilities",
      "Healthcare",
      "Mission Critical",
    ],
  },

  electrical: {

    title: "Electrical Recruitment",

    image: "/industries/electrical.png",

    intro:
      "Electrical recruitment expertise supporting power systems, mission critical projects, and large-scale construction environments.",

    overview:
      "Electrical organizations continue to experience growing demand for experienced professionals across power distribution, renewable energy, data centers, and commercial developments.",

    roles: [
      "Electrical Project Managers",
      "Electrical Engineers",
      "Commissioning Managers",
      "Estimators",
      "Field Superintendents",
      "Operations Directors",
    ],

    markets: [
      "Data Centers",
      "Commercial",
      "Renewable Energy",
      "Infrastructure",
    ],
  },

  plumbing: {

    title: "Plumbing Recruitment",

    image: "/industries/plumbing.png",

    intro:
      "Recruitment solutions focused on plumbing contractors, field operations, and construction service environments.",

    overview:
      "Plumbing organizations require dependable field leadership, technical coordination, and operational professionals capable of supporting complex commercial and industrial projects.",

    roles: [
      "Plumbing Project Managers",
      "Field Superintendents",
      "Estimators",
      "Service Managers",
      "Operations Leaders",
      "Foremen",
    ],

    markets: [
      "Commercial",
      "Industrial",
      "Healthcare",
      "Institutional",
    ],
  },

};

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const industry = industryData[slug];

  if (!industry) {

    notFound();

  }

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
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(7,17,31,0.97) 16%,
                rgba(7,17,31,0.80) 42%,
                rgba(7,17,31,0.22) 76%
              ),
              url(${industry.image})
            `,
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

                {industry.title}

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                {industry.intro}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Industry Overview

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-6">

              Recruitment Built
              Around Industry Demand

            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              {industry.overview}

            </p>

          </div>

        </div>

      </section>

      {/* ROLES */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-[850px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Roles We Recruit

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Supporting
              High-Performance Teams

            </h2>

            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We connect organizations with experienced professionals capable
              of supporting technical operations, leadership functions,
              and complex project environments.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {industry.roles.map(
              (role: string, index: number) => (

                <div
                  key={index}
                  className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6"
                >

                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">

                    {role}

                  </h3>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* MARKETS */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Market Expertise

          </p>

          <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

            Supporting Growth
            Across Critical Sectors

          </h2>

          <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[820px] mx-auto mb-9 sm:mb-11">

            Our recruitment expertise supports organizations operating
            across fast-growing and technically advanced sectors throughout
            the built environment.

          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {industry.markets.map(
              (market: string, index: number) => (

                <div
                  key={index}
                  className="bg-white border border-black/5 rounded-[24px] p-5 sm:p-6"
                >

                  <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-semibold leading-snug">

                    {market}

                  </h3>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-[850px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Recruitment Built
              Around Precision &
              Performance

            </h2>

            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We combine technical market understanding with relationship-driven
              recruitment strategies to help organizations build stronger teams.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              {
                title: "Executive Search",
                desc: "Leadership recruitment for high-growth organizations.",
              },

              {
                title: "Project Staffing",
                desc: "Flexible hiring solutions aligned with project demand.",
              },

              {
                title: "Industry Specialisation",
                desc: "Deep expertise across AEC and MEP environments.",
              },

              {
                title: "Relationship-Driven Hiring",
                desc: "Long-term recruitment partnerships built on trust.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6"
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

      {/* CTA */}
      <HomeCTA />

      {/* FOOTER */}
      <Footer />

    </main>

  );
}