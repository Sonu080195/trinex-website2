"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function CandidatesPage() {
  const [heroVisible, setHeroVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setHeroVisible(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

const opportunityCards = [
  {
    sector: "Healthcare Construction",
    role: "Project Executive",
    salary: "$180k+",
  },
  {
    sector: "Data Center Construction",
    role: "Senior Superintendent",
    salary: "$170k+",
  },
  {
    sector: "Mission Critical",
    role: "MEP Director",
    salary: "$220k+",
  },
  {
    sector: "Commercial Construction",
    role: "Preconstruction Manager",
    salary: "$165k+",
  },
];

const marqueeItems = [
  "PROJECT EXECUTIVE",
  "PROJECT MANAGER",
  "SUPERINTENDENT",
  "ESTIMATOR",
  "PRECONSTRUCTION",
  "MEP MANAGER",
  "COMMISSIONING",
  "VDC LEADER",
  "QUALITY MANAGER",
  "SAFETY DIRECTOR",
  "DATA CENTER PM",
  "HEALTHCARE LEADER",
];

const candidateJourney = [
  {
    step: "01",
    title: "Career Consultation",
    description:
      "We take the time to understand your experience, career goals, preferred markets, and long-term aspirations.",
  },
  {
    step: "02",
    title: "Market Alignment",
    description:
      "Our team identifies opportunities that align with your technical expertise, leadership experience, and career objectives.",
  },
  {
    step: "03",
    title: "Opportunity Matching",
    description:
      "We connect you with organizations where your skills and experience can create meaningful impact.",
  },
  {
    step: "04",
    title: "Interview Preparation",
    description:
      "Guidance, market insights, and preparation support to help you perform confidently throughout the hiring process.",
  },
  {
    step: "05",
    title: "Offer Negotiation",
    description:
      "We assist with compensation discussions, expectations, and offer evaluation to support informed decisions.",
  },
  {
    step: "06",
    title: "Long-Term Career Growth",
    description:
      "Our relationship continues beyond placement as we support future career progression and leadership opportunities.",
  },
];

const testimonials = [
  {
    role: "Project Executive",
    market: "Healthcare Construction",
    quote:
      "RUDRON introduced me to a leadership opportunity that aligned perfectly with my long-term goals and project experience.",
  },
  {
    role: "Senior Superintendent",
    market: "Data Centers",
    quote:
      "The team provided exceptional support throughout the process and helped me secure a role on a major mission-critical project.",
  },
  {
    role: "MEP Director",
    market: "Mission Critical",
    quote:
      "Their understanding of the construction market made the entire process efficient, professional, and highly targeted.",
  },
];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

{/* HERO */}

<section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* BACKGROUND */}

  <div className="absolute inset-0">

    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
      style={{
        backgroundImage:
          "url('/candidates/candidates-hero.webp')",
        transform: heroVisible
          ? "scale(1.05)"
          : "scale(1)",
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/35" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />

  </div>

  {/* GOLD LINE */}

  <div
    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
    style={{
      background:
        "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
      opacity: heroVisible ? 0.6 : 0,
    }}
  />

  {/* GLOW */}

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
          className="flex items-center gap-3 mb-6 transition-all duration-700"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(18px)",
          }}
        >

          <span className="h-px w-10 bg-[#C89B3C]" />

          <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">

            Candidates

          </p>

          <span className="h-px w-10 bg-[#C89B3C]" />

        </div>

        {/* TITLE */}

        <h1
          className="text-white text-[32px] sm:text-[50px] lg:text-[68px] font-bold leading-[1.02] mb-6 transition-all duration-700 delay-150"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(28px)",
          }}
        >

          Connecting

          <br />

          Professionals With

          <br />

          <span className="relative inline-block text-[#C89B3C]">

            Industry-Leading Roles

            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />

          </span>

        </h1>

        {/* BODY */}

        <p
          className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >

          RUDRON partners with leading construction,
          engineering and mission-critical organizations
          to connect exceptional professionals with
          career-defining opportunities across North America.

        </p>

        {/* TAGS */}

        <div
          className="flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(16px)",
          }}
        >

          {[
            "Project Management",
            "Superintendents",
            "Estimating",
            "MEP Leadership",
            "Executive Search",
            "Data Centers",
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
          className="grid grid-cols-3 gap-3 max-w-[620px] transition-all duration-700 delay-700"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >

          {[
            ["Executive", "Roles"],
            ["Mission Critical", "Projects"],
            ["Nationwide", "Opportunities"],
          ].map((item) => (

            <div
              key={item[0]}
              className="
              bg-white/[0.04]
              border
              border-white/10
              rounded-[18px]
              backdrop-blur-md
              p-4
              "
            >

              <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold">

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

{/* CAREER GROWTH SHOWCASE */}

<section className="py-12 lg:py-16 px-4 sm:px-6 bg-[#F7F7F7] overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14">

    {/* LEFT */}
    <div className="lg:sticky lg:top-32 self-start">

  <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Career Growth

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.08] mb-6">

        Build The Career
        You've Been
        Working Toward

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Whether you're seeking larger projects,
        leadership opportunities, higher compensation,
        or long-term career growth, our team is committed
        to helping you identify opportunities aligned with
        your professional goals.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        We partner with leading contractors,
        developers, engineering consultancies,
        mission-critical operators, and owners
        across healthcare, commercial construction,
        industrial manufacturing, infrastructure,
        and data center markets.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

        Our goal is simple:
        connect exceptional professionals with
        exceptional opportunities.

      </p>

    </div>

    {/* RIGHT */}

    <div className="relative min-h-[520px] lg:min-h-[620px]">

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">
          Healthcare Construction
        </p>

        <h3 className="text-xl font-bold mb-3">
          Project Executive
        </h3>

        <p className="text-3xl font-bold">
          $180k+
        </p>

      </div>

      <div className="floating-card-2 absolute top-24 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">
          Data Centers
        </p>

        <h3 className="text-xl font-bold mb-3">
          Senior Superintendent
        </h3>

        <p className="text-3xl font-bold">
          $170k+
        </p>

      </div>

      <div className="floating-card absolute bottom-20 left-0 lg:left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">
          Mission Critical
        </p>

        <h3 className="text-xl font-bold mb-3">
          MEP Director
        </h3>

        <p className="text-3xl font-bold">
          $220k+
        </p>

      </div>

      <div className="floating-card-2 absolute bottom-0 right-0 lg:right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <p className="text-[#C89B3C] text-sm mb-2">
          Commercial Construction
        </p>

        <h3 className="text-xl font-bold mb-3">
          Preconstruction Manager
        </h3>

        <p className="text-3xl font-bold">
          $165k+
        </p>

      </div>

    </div>

  </div>

</section>

{/* ROLES MARQUEE */}

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

{/* FEATURED CAREER PATHS */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-xs sm:text-sm mb-4">
        Featured Career Paths
      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05]">
        Opportunities Across Every Stage
        Of Your Construction Career
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        {
          title: "Project Management",
          desc: "Lead complex projects from planning through completion across commercial, healthcare and mission-critical markets.",
        },
        {
          title: "Superintendents",
          desc: "Drive field operations, site execution and project delivery for leading construction organizations.",
        },
        {
          title: "Preconstruction",
          desc: "Support estimating, planning, budgeting and procurement activities on high-value projects.",
        },
        {
          title: "MEP Leadership",
          desc: "Oversee critical mechanical, electrical and plumbing systems across complex facilities.",
        },
        {
          title: "Executive Leadership",
          desc: "Strategic opportunities for directors, VPs and executive leaders shaping organizational growth.",
        },
        {
          title: "Mission Critical",
          desc: "Join high-performance teams delivering data centers and mission-critical facilities nationwide.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="group bg-white rounded-[28px] p-6 border border-black/5 hover:border-[#C89B3C]/30 transition-all duration-500 hover:-translate-y-2"
        >

          <div className="text-[#C89B3C] text-5xl font-bold opacity-20 mb-4">

            0{[
              "Project Management",
              "Superintendents",
              "Preconstruction",
              "MEP Leadership",
              "Executive Leadership",
              "Mission Critical",
            ].indexOf(item.title) + 1}

          </div>

          <h3 className="text-[#07111F] text-xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">

            {item.title}

          </h3>

          <p className="text-gray-600 leading-7">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* CANDIDATE JOURNEY */}

<section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
        Candidate Journey
      </p>

      <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05]">

        Supporting Your Career
        Every Step Of The Way

      </h2>

    </div>

    <div className="relative">

      <div className="absolute left-5 lg:left-1/2 top-6 bottom-6 w-[2px] bg-[#C89B3C]/30" />

      {candidateJourney.map((item, index) => (

        <div
          key={item.step}
          className={`relative flex mb-4 lg:mb-6 ${
            index % 2 === 0
              ? "lg:justify-start"
              : "lg:justify-end"
          }`}
        >

          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-[#C89B3C] text-black flex items-center justify-center font-bold">

            {item.step}

          </div>

          <div className="ml-16 lg:ml-0 w-full lg:w-[46%] bg-[#0D1726] border border-white/10 rounded-[28px] p-5 lg:p-6">

            <h3 className="text-white text-lg lg:text-xl font-bold mb-4">

              {item.title}

            </h3>

            <p className="text-gray-400 leading-6">

              {item.description}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* SUCCESS STORIES */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 overflow-hidden">

  <div className="text-center mb-6">

    <p className="uppercase tracking-[5px] text-[#C89B3C] text-xs sm:text-sm mb-4">
      Success Stories
    </p>

    <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold">

      Career Growth In Action

    </h2>

  </div>

  <div className="testimonial-marquee gap-6">

    {[...testimonials, ...testimonials].map((item, index) => (

      <div
        key={index}
        className="min-w-[280px] lg:min-w-[320px] max-w-[340px] bg-white rounded-[28px] p-6 border border-black/5"
      >

        <p className="text-[#C89B3C] text-sm mb-3">

          {item.market}

        </p>

        <h3 className="text-[#07111F] text-xl font-bold mb-4">

          {item.role}

        </h3>

        <p className="text-gray-600 leading-6">

          "{item.quote}"

        </p>

      </div>

    ))}

  </div>

</section>

      <HomeCTA />

      <Footer />

    </main>

  );
}