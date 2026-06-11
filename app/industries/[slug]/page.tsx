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

  const heroTitle =
  industry.title.replace(
    " Recruitment",
    ""
  );

  const industryTags =
  industry.markets.slice(0, 6);

  return (

    <main className="industry-glow bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

{/* HERO */}

<section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* BACKGROUND */}

  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: `
        linear-gradient(
          to right,
          rgba(7,17,31,0.97) 10%,
          rgba(7,17,31,0.88) 42%,
          rgba(7,17,31,0.30) 100%
        ),
        url(${industry.image})
      `,
    }}
  />

  {/* GOLD LINE */}

  <div
    className="absolute left-0 top-0 bottom-0 w-[3px]"
    style={{
      background:
        "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
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

      <div className="max-w-[820px]">

        {/* EYEBROW */}

        <div className="inline-flex items-center gap-3 mb-6">

          <span className="h-px w-8 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

            Industry Expertise

          </p>

          <span className="h-px w-8 bg-[#C89B3C]" />

        </div>

        {/* HEADING */}

        <h1 className="text-white text-[32px] sm:text-[50px] lg:text-[68px] font-bold leading-[1.02] mb-6">

          {heroTitle}

          <br />

          <span className="text-[#C89B3C] relative inline-block">

            Recruitment

            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[#C89B3C] opacity-20 rounded-full" />

          </span>

          <br />

          For Modern Teams

        </h1>

        {/* BODY */}

        <p className="text-gray-300 text-[14px] lg:text-[16px] leading-8 max-w-[700px] mb-8">

          {industry.intro}

        </p>

        {/* TAGS */}

        <div className="flex flex-wrap gap-3 mb-8">

          {industryTags.map(
            (tag: string) => (

              <span
                key={tag}
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
                {tag}
              </span>

            )
          )}

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-3 max-w-[650px]">

          {[
            ["5000+", "Professionals"],
            ["National", "Coverage"],
            ["Executive", "Search"],
          ].map((item) => (

            <div
              key={item[0]}
              className="
              bg-white/[0.04]
              backdrop-blur-md
              border
              border-white/10
              rounded-[20px]
              p-4
              "
            >

              <h3 className="text-[#C89B3C] text-xl lg:text-2xl font-bold">

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

{/* MARKET INTELLIGENCE */}

<section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-5 lg:px-20 overflow-hidden">

  {/* GRID BACKGROUND */}

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* GOLD GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.08) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT */}

      <div>

        <div className="inline-flex items-center gap-3 mb-5">

          <span className="h-px w-8 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

            Market Intelligence

          </p>

          <span className="h-px w-8 bg-[#C89B3C]" />

        </div>

        <h2 className="text-[#07111F] text-[30px] sm:text-[40px] lg:text-[58px] font-bold leading-[1.02] mb-6">

          Talent Market

          <br />

          <span className="relative inline-block text-[#C89B3C]">

            Overview

            <span
              className="
              absolute
              bottom-0
              left-0
              h-[3px]
              bg-[#C89B3C]
              rounded-full
              opacity-20
              w-full
              "
            />

          </span>

        </h2>

        <p className="text-gray-600 text-[16px] leading-8">

          {industry.overview}

        </p>

      </div>

      {/* RIGHT */}

      <div className="grid grid-cols-2 gap-4">

        {industry.strengths.map(
          (item: string, index: number) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[24px]
              p-6
              border
              border-black/5
              hover:border-[#C89B3C]/30
              hover:-translate-y-2
              transition-all
              duration-500
              relative
              overflow-hidden
              "
            >

              <div
                className="
                absolute
                right-0
                top-0
                text-[70px]
                font-black
                text-black/[0.03]
                leading-none
                "
              >

                0{index + 1}

              </div>

              <div
                className="
                w-10
                h-10
                rounded-xl
                bg-[#07111F]/5
                flex
                items-center
                justify-center
                mb-4
                "
              >

                <span className="text-[#C89B3C] font-bold">

                  0{index + 1}

                </span>

              </div>

              <h3 className="text-[#07111F] font-bold text-[16px]">

                {item}

              </h3>

            </div>

          )
        )}

      </div>

    </div>

  </div>

</section>

{/* INDUSTRY TRENDS */}

<section className="relative bg-[#07111F] py-6 lg:py-10 px-5 lg:px-20 overflow-hidden">

  {/* GLOW */}

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

          Industry Trends

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-4">

        What's Shaping

        <br />

        <span className="text-[#C89B3C]">

          The Talent Market

        </span>

      </h2>

      <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-3xl mx-auto">

        Understanding the market forces influencing
        hiring demand, leadership recruitment and
        project delivery across the industry.

      </p>

    </div>

    {/* CARDS */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: "Talent Shortages",
          desc: "Growing competition for experienced professionals across key project disciplines.",
        },
        {
          title: "Leadership Demand",
          desc: "Organizations continue investing in operational and executive leadership talent.",
        },
        {
          title: "Project Expansion",
          desc: "Large-scale developments are driving demand for specialized expertise.",
        },
        {
          title: "Future Growth",
          desc: "Industry investment continues to create new hiring opportunities nationwide.",
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

          <div className="absolute -right-2 -top-2 text-[90px] font-black text-white/[0.04]">

            0{index + 1}

          </div>

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-white text-[20px] font-bold mb-4">

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

{/* INDUSTRY MARQUEE */}

<section className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">

        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>

    {[...industry.markets, ...industry.markets].map(
      (item: string, index: number) => (

        <div
          key={index}
          className="flex items-center"
        >

          <span className="text-white/70 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}

            {item}

          </span>

          <span className="text-[#C89B3C] text-[8px]">◆

          </span>

        </div>

      )
    )}

  </div>

</section>

{/* ROLES WE RECRUIT */}

<section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-5 lg:px-20 overflow-hidden">

  {/* GRID */}

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px]"
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

          Roles We Recruit

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-[#07111F] text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-4">

        Critical Talent

          <br />

          <span className="relative inline-block text-[#C89B3C]">

            Across Every Level

            <span
              className="
              absolute
              bottom-0
              left-0
              h-[3px]
              bg-[#C89B3C]
              rounded-full
              opacity-20
              w-full
              "
            />

          </span>

      </h2>

      <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        From project execution professionals to executive leadership,
        we support recruitment across the entire project lifecycle.

      </p>

    </div>

    {/* GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {industry.roles.map(
        (role: string, index: number) => (

          <div
            key={role}
            className="
            group
            bg-white
            rounded-[24px]
            p-6
            border
            border-black/5
            hover:border-[#C89B3C]/30
            hover:-translate-y-2
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

            {/* TOP BAR */}

            <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

            <h3 className="text-[#07111F] text-[20px] font-bold leading-snug">

              {role}

            </h3>

          </div>

        )
      )}

    </div>

  </div>

</section>

{/* INDUSTRY CHALLENGES */}

<section className="relative bg-[#07111F] py-6 lg:py-10 px-5 lg:px-20 overflow-hidden">

  {/* GLOW */}

  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at top right, rgba(200,155,60,.12), transparent 35%)",
    }}
  />


  <div className="relative max-w-6xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Industry Challenges

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-4">

        Challenges Facing

        <br />

        <span className="text-[#C89B3C]">

          Today's Employers

        </span>

      </h2>

      <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        Organizations across the industry continue to navigate
        evolving workforce demands, leadership shortages and
        increasing competition for experienced talent.

      </p>

    </div>

    {/* GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        "Talent Shortages",
        "Leadership Succession",
        "Project Growth",
        "Retention Challenges",
        "Technical Skills Gap",
        "Market Competition",
      ].map((item, index) => (

        <div
          key={item}
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

          {/* GHOST NUMBER */}

          <div className="absolute -right-2 -top-2 text-[90px] font-black text-white/[0.04]">

            0{index + 1}

          </div>

          {/* GOLD BAR */}

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-white text-[20px] font-bold">

            {item}

          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

{/* WHY ORGANIZATIONS CHOOSE RUDRON */}

<section className="relative bg-[#07111F] py-4 lg:py-6 px-5 lg:px-20 overflow-hidden">


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

      <h2 className="text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-4">

        A Recruitment Partner

        <br />

        <span className="text-[#C89B3C]">

          Built For This Industry

        </span>

      </h2>

      <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto">

        Combining executive search expertise,
        project staffing capability and deep
        industry knowledge to support long-term hiring success.

      </p>

    </div>

    {/* GRID */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: "Industry Specialists",
          desc: "Dedicated recruiters focused on architecture, engineering, construction and MEP markets.",
        },
        {
          title: "Executive Search",
          desc: "Confidential leadership hiring for critical business and project functions.",
        },
        {
          title: "Project Staffing",
          desc: "Access to professionals capable of supporting immediate project requirements.",
        },
        {
          title: "Long-Term Partnerships",
          desc: "Relationship-driven recruitment built around quality, trust and consistency.",
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

          <div className="absolute -right-2 -top-2 text-[90px] font-black text-white/[0.04]">

            0{index + 1}

          </div>

          <div className="w-10 h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-white text-[20px] font-bold mb-4">

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

{/* INDUSTRY FAQ */}

<section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-5 lg:px-20 overflow-hidden">

  {/* GRID BACKGROUND */}

<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

{/* GOLD GLOW */}

<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px]"
  style={{
    background:
      "radial-gradient(ellipse at top, rgba(200,155,60,.08) 0%, transparent 70%)",
  }}
/>

  <div className="relative max-w-5xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Frequently Asked Questions

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-[#07111F] text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-4">

        Industry Recruitment

        <br />

        <span className="text-[#C89B3C]">

          Questions Answered

        </span>

      </h2>

      <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-3xl mx-auto">

        Common questions about recruitment,
        executive search and hiring within the industry.

      </p>

    </div>

    {/* FAQS */}

    <div className="space-y-4">

      {[
        {
          q: `What roles do you recruit for within ${heroTitle}?`,
          a: `We support recruitment across leadership, project delivery, technical and operational positions, helping organizations secure talent across the entire project lifecycle.`,
        },
        {
          q: "Do you support executive search assignments?",
          a: `Yes. We support confidential executive and leadership recruitment for critical business and project functions.`,
        },
        {
          q: "How long does the recruitment process typically take?",
          a: `Timeframes vary depending on role complexity, market conditions and hiring requirements, but our process is designed to identify qualified talent efficiently.`,
        },
        {
          q: "Do you provide project staffing solutions?",
          a: `Yes. We help organizations secure project-ready professionals capable of supporting immediate and long-term staffing requirements.`,
        },
      ].map((faq, index) => (

        <details
          key={index}
          className="
          group
          bg-white
          border
          border-black/5
          rounded-[24px]
          p-6
          hover:border-[#C89B3C]/30
          hover:shadow-[0_20px_50px_rgba(200,155,60,.08)]
          transition-all
          duration-500
          "
        >

          <summary className="cursor-pointer list-none flex items-center justify-between">

            <h3 className="text-[#07111F] text-[18px] font-semibold">

              {faq.q}

            </h3>

            <span className="text-[#C89B3C] text-2xl group-open:rotate-45 transition-all duration-300">

              +

            </span>

          </summary>

          <p className="text-gray-600 leading-7 mt-5">

            {faq.a}

          </p>

        </details>

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