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
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,.95) 15%, rgba(7,17,31,.75) 45%, rgba(7,17,31,.3) 100%), url('/about/about-hero.png')",
          }}
        />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 pt-28">
            <div className="max-w-[760px]">
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-5">
                About RUDRON
              </p>

              <h1 className="text-[34px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-6">
                RUDRON helps in Precision Hiring for

              <br/>
                <span className="text-[#C89B3C]">
                  {" "} AEC & MEP
                </span>

                {" "} leaders

                <br />

                </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-8 sm:leading-9 mb-10 max-w-[860px]">
                RUDRON Global Talent Solutions is a specialist recruitment firm
                connecting exceptional construction, engineering, and MEP talent with leading companies
                across rapidly evolving markets.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["AEC", "MEP", "Data Centers", "Infrastructure"].map(
                  (item) => (
                    <div
                      key={item}
                      className="px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "AEC & MEP Specialists",
            "National Talent Network",
            "Relationship Driven",
            "Long-Term Partnerships",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0D1726] border border-white/10 rounded-[20px] p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

{/* STORY */}
<section className="py-16 px-6 bg-[#07111F] overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

    {/* LEFT CONTENT */}

<div className="lg:sticky lg:top-32 self-start">

  <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
    Our Story
  </p>

  <h2 className="text-[26px] lg:text-[40px] font-bold leading-[1.08] mb-6">
    Building The Teams Behind
    Tomorrow's Infrastructure,
    Data Centers & Critical Projects
  </h2>

  <div className="w-85 h-[2px] bg-[#C89B3C] rounded-full mb-8" />

  <p className="text-gray-300 text-lg leading-8 mb-6">
    RUDRON was founded with a simple mission: to elevate recruitment
    within the construction and engineering industries through a more
    strategic, consultative, and relationship-driven approach.
  </p>

  <p className="text-gray-300 text-lg leading-8 mb-6">
    As construction projects become increasingly complex and talent
    shortages continue to impact project delivery, organizations require
    more than recruiters — they need partners who understand the
    realities of the built environment.
  </p>

  <p className="text-gray-300 text-lg leading-8 mb-6">
    We work alongside contractors, engineering consultancies,
    developers, owners, manufacturers, and mission-critical operators
    to identify professionals capable of delivering results across some
    of the industry's most demanding projects.
  </p>

  <p className="text-gray-300 text-lg leading-8 mb-8">
    From commercial developments and healthcare facilities to data
    centers, industrial manufacturing plants, and critical
    infrastructure projects, our focus remains the same:
    connecting exceptional people with exceptional opportunities.
  </p>

  {/* FEATURE BOX */}

  <div className="bg-[#0D1726] border border-[#C89B3C]/15 rounded-[25px] p-4">

    <div className="grid grid-cols-2 gap-5">

      <div>
        <p className="text-[#C89B3C] text-2xl font-bold">
          AEC
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Architecture, Engineering & Construction
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-2xl font-bold">
          MEP
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Mechanical, Electrical & Plumbing
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-2xl font-bold">
          DC
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Mission Critical & Data Centers
        </p>
      </div>

      <div>
        <p className="text-[#C89B3C] text-2xl font-bold">
          INF
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Infrastructure & Transportation
        </p>
      </div>

    </div>

  </div>

</div>

    {/* RIGHT MOVING TIMELINE */}

    <div className="h-[700px] overflow-hidden relative">

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
            className="relative bg-[#0D1726]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden transition-all duration-500 group-hover:border-[#C89B3C]/50 hover:-translate-y-2"
          >

            <div className="absolute right-4 top-3 text-[120px] font-bold text-white/[0.04]">
              {item.number}
            </div>

            <p className="text-[#C89B3C] font-semibold mb-3">
              {item.number}
            </p>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-8">
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
          <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
            Markets We Support
          </p>

          <h2 className="text-[36px] lg:text-[56px] font-bold mb-6">
            Specialized Recruitment Across Key Construction Sectors
          </h2>

          <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* MISSION VISION */}
      <section className="py-16 px-4 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[36px] p-10 shadow-sm">
            <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
              Our Mission
            </p>

            <h3 className="text-[#07111F] text-[40px] font-bold mb-6">
              Building Teams That Deliver Successful Projects
            </h3>

            <p className="text-gray-600 text-lg leading-8">
              Helping organisations secure exceptional talent while creating
              meaningful career opportunities across construction and
              engineering markets.
            </p>
          </div>

          <div className="bg-[#07111F] rounded-[36px] p-10">
            <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
              Our Vision
            </p>

            <h3 className="text-white text-[40px] font-bold mb-6">
              Becoming The Most Trusted Construction Recruitment Partner
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              To be recognised as a leading recruitment partner across North
              America by consistently delivering expertise, relationships and
              exceptional hiring outcomes.
            </p>
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

            <h2 className="text-[36px] lg:text-[56px] font-bold">
              Expertise. Relationships. Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-[#0D1726] border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 hover:border-[#C89B3C]/40 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

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