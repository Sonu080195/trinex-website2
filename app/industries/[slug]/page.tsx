import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";

const industryData: Record<string, any> = {

  architecture: {

    title: "Architecture Recruitment",

    image: "/industries/architecture.png",
    
    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

    intro:
      "RUDRON partners with architectural firms, design studios, and multidisciplinary consultancies to deliver highly skilled professionals across planning, design, technical execution, and leadership functions.",

    overview:
      "The architecture industry continues to evolve through rapid urban development, sustainability initiatives, mixed-use expansion, and technology-driven design solutions. Firms today require professionals who combine creativity, technical precision, and project coordination expertise.",

    roles: [
      "Project Architects",
      "Design Engineers",
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

    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

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

    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

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

    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

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

    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

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

    strengths:
      ["Technical Recruitment",
      "Leadership Hiring",
      "Project Staffing",
      "Industry Expertise",
    ],

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

      {/* INDUSTRY OVERVIEW */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT */}

    <div>

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Industry Overview

      </p>

      <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] mb-6">

        Recruitment Built
        Around Industry Demand

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

        {industry.overview}

      </p>

    </div>

    {/* RIGHT */}

    <div className="grid grid-cols-2 gap-5">

      {industry.strengths.map(
        (item: string, index: number) => (

          <div
            key={index}
            className="bg-white rounded-[28px] border border-black/5 p-6 text-center"
          >

            <div className="text-[#C89B3C] text-4xl font-bold opacity-20 mb-4">

              0{index + 1}

            </div>

            <h3 className="text-[#07111F] font-bold">

              {item}

            </h3>

          </div>

        )
      )}

    </div>

  </div>

</section>

{/* INDUSTRY MARQUEE */}

<section className="bg-[#07111F] py-4 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...industry.markets, ...industry.markets].map(
      (item: string, index: number) => (

        <div
          key={index}
          className="flex items-center"
        >

          <span className="text-white text-[18px] sm:text-[24px] lg:text-[34px] font-bold mx-5">

            {item}

          </span>

          <span className="text-[#C89B3C] text-2xl">

            ◆

          </span>

        </div>

      )
    )}

  </div>

</section>

      {/* KEY POSITIONS */}

<section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-8">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Key Positions

      </p>

      <h2 className="text-white text-[24px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Roles We Recruit For

      </h2>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

      {industry.roles.map(
        (role: string, index: number) => (

          <div
            key={index}
            className="group relative bg-[#0D1726] rounded-[18px] border border-white/10 p-6 hover:-translate-y-2 hover:border-[#C89B3C]/30 transition-all duration-500 overflow-hidden"
          >

            <div className="absolute right-4 -top-3 text-[50px] font-bold text-white/[0.04]">

              0{index + 1}

            </div>

            <h3 className="text-white text-xl font-bold group-hover:text-[#C89B3C] transition-colors">

              {role}

            </h3>

          </div>

        )
      )}

    </div>

  </div>

</section>

      {/* RECRUITMENT CHALLENGES */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Industry Challenges

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05]">

        Market Challenges
        Driving Demand For
        Specialized Talent

      </h2>

    </div>

    <div className="relative">

      <div className="absolute left-5 lg:left-1/2 top-6 bottom-6 w-[2px] bg-[#C89B3C]/30" />

      {[
        {
          step: "01",
          title: "Talent Shortages",
          desc: "Organizations continue to face increasing competition for highly skilled professionals.",
        },
        {
          step: "02",
          title: "Project Growth",
          desc: "Expanding project pipelines require experienced leaders capable of scaling operations.",
        },
        {
          step: "03",
          title: "Technical Complexity",
          desc: "Modern projects demand specialized technical expertise across multiple disciplines.",
        },
        {
          step: "04",
          title: "Leadership Demand",
          desc: "Strong leadership remains essential to successful project delivery and business growth.",
        },
        {
          step: "05",
          title: "Retention",
          desc: "Attracting and retaining top talent continues to be a major competitive advantage.",
        },
        {
          step: "06",
          title: "Succession Planning",
          desc: "Organizations must prepare future leaders to support long-term growth strategies.",
        },
      ].map((item, index) => (

        <div
          key={item.step}
          className={`relative flex mb-4 lg:mb-6 ${
            index % 2 === 0
              ? "lg:justify-start"
              : "lg:justify-end"
          }`}
        >

          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-[#C89B3C] text-black font-bold flex items-center justify-center shadow-[0_0_25px_rgba(200,155,60,0.25)]">

            {item.step}

          </div>

          <div className="ml-16 lg:ml-0 w-full lg:w-[40%] bg-white border border-black/5 rounded-[28px] p-5 lg:p-6">

            <h3 className="text-[#07111F] text-lg lg:text-xl font-bold mb-4">

              {item.title}

            </h3>

            <p className="text-gray-600 leading-6">

              {item.desc}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* WHY RUDRON */}
      <section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-6">

            <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05] mb-5">

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
                className="bg-[#0D1726] rounded-[24px] border border-white/10 p-6 hover:-translate-y-2 hover:border-[#C89B3C]/30 transition-all duration-500"
              >

                <div className="text-[#C89B3C] text-4xl font-bold opacity-50 mb-4">

              0{index + 1}

                <h3 className="text-[#C89B3C] text-3xl sm:text-[18px] font-bold opacity-90 leading-snug mb-4">
                  

                  {item.title}

                </h3>

                <p className="text-gray-100 text-[14px] sm:text-[15px] leading-6">

                  {item.desc}

                </p>

              </div>

            </div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRY IMPACT */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: "Technical",
          desc: "Industry Expertise",
        },
        {
          title: "Leadership",
          desc: "Executive Search",
        },
        {
          title: "Projects",
          desc: "Delivery Focused",
        },
        {
          title: "National",
          desc: "Talent Network",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-[28px] border border-black/5 p-6 text-center hover:-translate-y-2 transition-all duration-500"
        >

          <h3 className="text-[#C89B3C] text-[22px] lg:text-[34px] font-bold mb-3">

            {item.title}

          </h3>

          <p className="text-gray-600">

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