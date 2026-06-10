"use client";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const industries = [
    "Commercial Construction",
    "Data Centers",
    "Healthcare",
    "Mission Critical",
    "Industrial & Manufacturing",
    "Infrastructure",
    "Transportation",
    "MEP Contractors",
  ];

  const strengths = [
    {
      title: "Construction Expertise",
      description:
        "Deep understanding of construction, engineering, MEP and mission-critical hiring requirements.",
    },
    {
      title: "Relationship Driven",
      description:
        "We build long-term partnerships rather than focusing on short-term transactions.",
    },
    {
      title: "Precision Recruitment",
      description:
        "Every search is tailored to the technical, cultural and leadership needs of our clients.",
    },
    {
      title: "National Reach",
      description:
        "Access to highly skilled professionals across major construction markets.",
    },
    {
      title: "Quality Focused",
      description:
        "We prioritize exceptional candidate quality over candidate volume.",
    },
    {
      title: "Industry Network",
      description:
        "Strong connections across construction, engineering and infrastructure sectors.",
    },
  ];

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <Navbar />

      {/* HERO */}

<section className="relative min-h-[85vh] overflow-hidden pointer-events-none">

  {/* BACKGROUND IMAGE */}

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(7,17,31,.97) 15%, rgba(7,17,31,.85) 45%, rgba(7,17,31,.35) 100%), url('/about/about-hero.png')",
    }}
  />

  {/* GOLD GLOW */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,0.08) 0%, transparent 70%)",
    }}
  />

  <div className="relative z-10">

    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">

      <div className="max-w-[850px]">

        {/* CONTENT */}

        <div className="inline-flex items-center gap-3 mb-6">

          <span className="h-px w-10 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

            About RUDRON

          </p>

          <span className="h-px w-8 bg-[#C89B3C]" />

        </div>

        {/* TITLE */}

        <h1 className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-6">

          Building The Teams

          <br />

          Behind The World's

          <br/>
          <span className="relative inline-block text-[#C89B3C]">

            {" "}Most Critical Projects

            <span
              className="
              absolute
              left-0
              bottom-0
              w-full
              h-[3px]
              bg-[#C89B3C]
              rounded-full
              opacity-20
              "
            />

          </span>

        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-300 text-[13px] lg:text-[15px] sm:text-[17px] leading-6 sm:leading-7 mb-6 lg:mb-10 max-w-[860px]">

          RUDRON Global Talent Solutions partners with construction,
          engineering, infrastructure and mission-critical organizations
          to secure exceptional professionals, strengthen leadership teams
          and support long-term business growth.

        </p>

        {/* INDUSTRY TAGS */}

        <div className="flex flex-wrap gap-3 mb-12">

          {[
            "Commercial",
            "Healthcare",
            "Mission Critical",
            "Infrastructure",
          ].map((item) => (

            <div
              key={item}
              className="
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              rounded-full
              px-5
              py-2.5
              text-sm
              text-white
              hover:border-[#C89B3C]/30
              transition-all
              duration-300
              "
            >

              {item}

            </div>

          ))}

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-3 mb-4">

  {[
    ["100+", "Placements Supported"],
    ["4", "Global Markets"],
    ["20+", "Industry Specialisations"],
  ].map((item) => (

    <div
      key={item[1]}
      className="
      bg-white/[0.04]
      border
      border-white/10
      rounded-[18px]
      p-2
      backdrop-blur-md
      "
    >

      <h3 className="text-[#C89B3C] text-xl lg:text-2xl font-bold">

        {item[0]}

      </h3>

      <p className="text-gray-400 text-[11px] lg:text-sm">

        {item[1]}

      </p>

    </div>

  ))}

</div>

      </div>

    </div>

  </div>

</section>

      {/* TRUSTED EXPERTISE */}

<section className="relative bg-[#07111F] py-8 lg:py-12 px-4 overflow-hidden">

  {/* GOLD GLOW */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,0.08) 0%, transparent 70%)",
    }}
  />

    {/* GRID PATTERN */}

  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Trusted Expertise

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-[1.05]">

        Built Around Industry
        <br/>
<span className="relative inline-block text-[#C89B3C]">

  {" "}Knowledge

  <span
    className="
    absolute
    left-0
    bottom-0
    w-full
    h-[3px]
    bg-[#C89B3C]
    rounded-full
    opacity-20
    "
  />

</span>
      </h2>

    </div>

    {/* GRID */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          number: "01",
          title: "AEC Specialists",
          desc: "Dedicated construction and engineering recruitment expertise.",
        },

        {
          number: "02",
          title: "National Reach",
          desc: "Access to professionals across major construction markets.",
        },

        {
          number: "03",
          title: "Relationship Driven",
          desc: "Long-term partnerships built through trust and consistency.",
        },

        {
          number: "04",
          title: "Executive Search",
          desc: "Supporting leadership and confidential hiring assignments.",
        },
      ].map((item) => (

        <div
          key={item.number}
          className="
          group
          relative
          bg-[#0D1726]
          border
          border-white/10
          rounded-[28px]
          p-6
          overflow-hidden
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          "
        >

          {/* GHOST NUMBER */}

          <div className="absolute right-4 top-0 text-[90px] font-black text-white/[0.04] leading-none">

            {item.number}

          </div>

          {/* GOLD LINE */}

          <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

          <p className="text-[#C89B3C] text-xs tracking-[3px] font-bold mb-4">

            {item.number}

          </p>

          <h3 className="text-white text-[20px] font-bold mb-4">

            {item.title}

          </h3>

          <p className="text-gray-400 text-sm leading-7">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* STORY */}
<section className="py-12 lg:py-16 px-4 sm:px-6 bg-[#07111F] overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14">
    

    {/* LEFT CONTENT */}

<div className="lg:sticky lg:top-32 self-start">

    {/* GRID PATTERN */}

  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

{/* GOLD GLOW */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at left, rgba(200,155,60,0.08) 0%, transparent 70%)",
    }}
  />


  <div className="inline-flex items-center gap-3 mb-6">

          <span className="h-px w-10 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

            About RUDRON

          </p>

          <span className="h-px w-8 bg-[#C89B3C]" />

          </div>

  <h2 className="text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.08] mb-6">
    Building The Teams Behind
    Tomorrow's Infrastructure,
    Data Centers & Critical Projects
  </h2>

  <div className="w-20 sm:w-32 lg:w-85 h-[2px] bg-[#C89B3C] rounded-full mb-8" />

  <p className="text-[15px] sm:text-[16px] lg:text-lg leading-7 lg:leading-8 mb-6">
    RUDRON was founded with a simple mission: to elevate recruitment
    within the construction and engineering industries through a more
    strategic, consultative, and relationship-driven approach.
  </p>

  <p className="text-[15px] sm:text-[16px] lg:text-lg leading-7 lg:leading-8 mb-6">
    As construction projects become increasingly complex and talent
    shortages continue to impact project delivery, organizations require
    more than recruiters — they need partners who understand the
    realities of the built environment.
  </p>

  <p className="text-[15px] sm:text-[16px] lg:text-lg leading-7 lg:leading-8 mb-6">
    We work alongside contractors, engineering consultancies,
    developers, owners, manufacturers, and mission-critical operators
    to identify professionals capable of delivering results across some
    of the industry's most demanding projects.
  </p>

  <p className="text-[15px] sm:text-[16px] lg:text-lg leading-7 lg:leading-8 mb-8">
    From commercial developments and healthcare facilities to data
    centers, industrial manufacturing plants, and critical
    infrastructure projects, our focus remains the same:
    connecting exceptional people with exceptional opportunities.
  </p>

  {/* FEATURE BOX */}

  <div className="bg-[#0D1726] border border-[#C89B3C]/15 rounded-[25px] p-3 sm:p-4">

    <div className="grid grid-cols-2 gap-3 sm:gap-5">

      <div>
        <p className="text-[#C89B3C] text-lg sm:text-xl lg:text-2xl font-bold">
          AEC
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Architecture, Engineering & Construction
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-lg sm:text-xl lg:text-2xl font-bold">
          MEP
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Mechanical, Electrical & Plumbing
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-lg sm:text-xl lg:text-2xl font-bold">
          DC
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Mission Critical & Data Centers
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-lg sm:text-xl lg:text-2xl font-bold">
          INF
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Infrastructure & Transportation
        </p>
      </div>

    </div>

  </div>

</div>

    {/* RIGHT MOVING TIMELINE */}

    <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">

      <div className="story-scroll space-y-6">

        {[
{
number:"01",
title:"The Beginning",
desc:"RUDRON was founded to challenge traditional recruitment models by creating a talent acquisition partner built specifically for construction, engineering, infrastructure and mission-critical markets. Our vision was to provide organizations with a more strategic hiring experience focused on long-term success."
},

          {
number:"02",
title:"Understanding The Industry",
desc:"Construction recruitment is fundamentally different from general recruitment. Every project requires highly specialized professionals, technical expertise, leadership capability and cultural alignment. We immersed ourselves in the sectors we serve to understand the challenges our clients face every day."
},

          {
number:"03",
title:"Supporting Complex Projects",
desc:"As projects became larger and more technically demanding, organizations required talent capable of delivering within fast-paced environments. We expanded our focus to support healthcare facilities, data centers, mission-critical developments, industrial manufacturing, transportation and infrastructure projects."
},

          {
number:"04",
title:"Building Meaningful Relationships",
desc:"Our success is built on relationships. We invest significant time understanding our clients' goals, culture, growth plans and project requirements while helping professionals navigate important career decisions with confidence."
},

          {
number:"05",
title:"A Network Built On Trust",
desc:"Over time we developed an extensive network of construction professionals, project leaders, estimators, engineers, project managers, superintendents, MEP specialists and executive leaders across key markets throughout North America."
},

          {
number:"06",
title:"Driving Long-Term Success",
desc:"We believe recruitment should create lasting impact. Every placement represents an opportunity to strengthen organizations, accelerate project delivery, improve operational performance and create meaningful career growth."
},

{
number:"07",
title:"The Future Of RUDRON",
desc:"As construction technologies evolve and workforce demands continue to change, RUDRON remains committed to helping organizations build resilient, high-performing teams capable of delivering the next generation of commercial, industrial and mission-critical projects."
},

          // DUPLICATE FOR INFINITE LOOP

          {
number:"01",
title:"The Beginning",
desc:"RUDRON was founded to challenge traditional recruitment models by creating a talent acquisition partner built specifically for construction, engineering, infrastructure and mission-critical markets. Our vision was to provide organizations with a more strategic hiring experience focused on long-term success."
},

          {
number:"02",
title:"Understanding The Industry",
desc:"Construction recruitment is fundamentally different from general recruitment. Every project requires highly specialized professionals, technical expertise, leadership capability and cultural alignment. We immersed ourselves in the sectors we serve to understand the challenges our clients face every day."
},

          {
number:"03",
title:"Supporting Complex Projects",
desc:"As projects became larger and more technically demanding, organizations required talent capable of delivering within fast-paced environments. We expanded our focus to support healthcare facilities, data centers, mission-critical developments, industrial manufacturing, transportation and infrastructure projects."
},

          {
number:"04",
title:"Building Meaningful Relationships",
desc:"Our success is built on relationships. We invest significant time understanding our clients' goals, culture, growth plans and project requirements while helping professionals navigate important career decisions with confidence."
},

          {
number:"05",
title:"A Network Built On Trust",
desc:"Over time we developed an extensive network of construction professionals, project leaders, estimators, engineers, project managers, superintendents, MEP specialists and executive leaders across key markets throughout North America."
},

          {
number:"06",
title:"Driving Long-Term Success",
desc:"We believe recruitment should create lasting impact. Every placement represents an opportunity to strengthen organizations, accelerate project delivery, improve operational performance and create meaningful career growth."
},

{
number:"07",
title:"The Future Of RUDRON",
desc:"As construction technologies evolve and workforce demands continue to change, RUDRON remains committed to helping organizations build resilient, high-performing teams capable of delivering the next generation of commercial, industrial and mission-critical projects."
},

        ].map((item, index) => (

          <div
            key={index}
            className="relative bg-[#0D1726]/90 backdrop-blur-xl border border-white/10 rounded-[24px]
            lg:rounded-[32px] p-5 sm:p-6 lg:p-8
            overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >

            <div className="absolute right-4 top-3 text-[70px] sm:text-[90px] lg:text-[120px] font-bold text-white/[0.04]">
              {item.number}
            </div>

            <p className="text-[#C89B3C] font-semibold mb-3">
              {item.number}
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-400 leading-6 lg:leading-8">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* TOP FADE */}

      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#07111F] to-transparent z-10" />

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent z-10" />

    </div>

  </div>

</section>

      {/* INDUSTRIES */}
      <section className="bg-[#0D1726] py-16 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-3 mb-6">

          <span className="h-px w-10 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

            Markets We Support

          </p>

          <span className="h-px w-8 bg-[#C89B3C]" />

        </div>

          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-[1.05] mb-4">

        Specialized Recruitment Across Key
        <br/>
      <span className="relative inline-block text-[#C89B3C]">

        {" "}Construction Sectors

        <span
          className="
          absolute
          left-0
          bottom-0
          w-full
          h-[3px]
          bg-[#C89B3C]
          rounded-full
          opacity-20
          "
        />

      </span>
      
      </h2>

          <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mx-auto mb-6" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-[#07111F] border border-white/10 rounded-[28px] p-6 hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}

<section className="relative bg-[#F4F4F0] py-12 lg:py-16 px-4 lg:px-20 overflow-hidden">

  {/* GRID PATTERN */}

  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* GLOW */}

  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px]"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(200,155,60,.08) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}

    <div className="text-center mb-10">

      <div className="inline-flex items-center gap-3 mb-4">

        <span className="h-px w-8 bg-[#C89B3C]" />

        <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

          Our Foundation

        </p>

        <span className="h-px w-8 bg-[#C89B3C]" />

      </div>

      <h2 className="text-[#07111F] text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.05]">

        Purpose Driven.
        <span className="text-[#C89B3C]"> Future Focused.</span>

      </h2>

    </div>

    {/* GRID */}

    <div className="grid lg:grid-cols-2 gap-6">

      {/* MISSION */}

      <div
        className="
        group
        relative
        bg-white
        rounded-[36px]
        p-8 lg:p-10
        overflow-hidden
        border
        border-black/5
        hover:border-[#C89B3C]/25
        hover:-translate-y-2
        transition-all
        duration-500
        "
      >

        <div className="absolute right-4 top-0 text-[120px] font-black text-black/[0.03]">

          M

        </div>

        <div className="w-14 h-[2px] bg-[#C89B3C] mb-6" />

        <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs font-semibold mb-4">

          Mission

        </p>

        <h3 className="text-[#07111F] text-[28px] lg:text-[36px] font-bold leading-[1.1] mb-6">

          Building Teams That Deliver
          Exceptional Projects

        </h3>

        <p className="text-gray-600 leading-8">

          Helping organizations secure exceptional talent while creating
          meaningful career opportunities across construction,
          engineering, infrastructure and mission-critical markets.

        </p>

      </div>

      {/* VISION */}

      <div
        className="
        group
        relative
        bg-[#07111F]
        rounded-[36px]
        p-8 lg:p-10
        overflow-hidden
        border
        border-white/10
        hover:border-[#C89B3C]/30
        hover:-translate-y-2
        transition-all
        duration-500
        "
      >

        <div className="absolute right-4 top-0 text-[120px] font-black text-white/[0.03]">

          V

        </div>

        <div className="w-14 h-[2px] bg-[#C89B3C] mb-6" />

        <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs font-semibold mb-4">

          Vision

        </p>

        <h3 className="text-white text-[28px] lg:text-[36px] font-bold leading-[1.1] mb-6">

          Becoming The Most Trusted
          Construction Recruitment Partner

        </h3>

        <p className="text-gray-400 leading-8">

          To be recognized as a leading recruitment partner across North
          America and global construction markets by consistently
          delivering expertise, relationships and exceptional hiring
          outcomes.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
              Why Companies Choose RUDRON
            </p>

            <h2 className="text-[26px] sm:text-[32px] lg:text-[56px] font-bold">
              Expertise. Relationships. Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-[#0D1726] border border-white/10 rounded-[30px] p-5 sm:p-6 lg:p-8 hover:-translate-y-2 hover:border-[#C89B3C]/40 transition-all duration-500"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  
                  {item.title}</h3>

                <p className="text-gray-400 leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />

      <Footer />
    </main>
  );
}