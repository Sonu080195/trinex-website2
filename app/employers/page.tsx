"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function EmployersPage() {
  const [heroVisible, setHeroVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setHeroVisible(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

  const talentChallenges = [
  {
    title: "Talent Shortages",
    description:
      "Finding qualified construction professionals remains one of the industry's biggest challenges.",
  },
  {
    title: "Leadership Gaps",
    description:
      "Critical leadership vacancies can impact project delivery, profitability, and growth.",
  },
  {
    title: "Specialized Hiring",
    description:
      "Technical positions require niche expertise and highly targeted recruitment strategies.",
  },
  {
    title: "Project Deadlines",
    description:
      "Delayed hiring can directly impact schedules, milestones, and operational performance.",
  },
  {
    title: "MEP Expertise",
    description:
      "Accessing experienced MEP professionals is increasingly competitive across major markets.",
  },
  {
    title: "Mission Critical Growth",
    description:
      "Rapid expansion of data centers continues to increase demand for specialized talent.",
  },
];

const marqueeItems = [
  "DATA CENTERS",
  "HEALTHCARE",
  "COMMERCIAL",
  "INDUSTRIAL",
  "INFRASTRUCTURE",
  "LIFE SCIENCES",
  "MISSION CRITICAL",
  "MANUFACTURING",
];

const deliveryProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your organization, project requirements, hiring objectives, and growth plans.",
  },
  {
    step: "02",
    title: "Market Mapping",
    description:
      "Our team conducts targeted research to identify relevant talent pools, competitors, and market opportunities.",
  },
  {
    step: "03",
    title: "Talent Identification",
    description:
      "We proactively engage highly qualified professionals aligned with your technical and cultural requirements.",
  },
  {
    step: "04",
    title: "Candidate Shortlisting",
    description:
      "Only the most suitable candidates are presented through a structured and efficient process.",
  },
  {
    step: "05",
    title: "Interview Management",
    description:
      "We coordinate interviews, provide market insights, and maintain candidate engagement throughout the process.",
  },
  {
    step: "06",
    title: "Placement & Retention",
    description:
      "Our support extends beyond placement to ensure successful onboarding and long-term hiring outcomes.",
  },
];

const recruitmentSolutions = [
  {
    number: "01",
    title: "Executive Search",
    description:
      "Leadership hiring solutions for senior construction, engineering and operational professionals.",
  },
  {
    number: "02",
    title: "Project Staffing",
    description:
      "Project-focused recruitment support for contractors, developers and engineering organizations.",
  },
  {
    number: "03",
    title: "MEP Recruitment",
    description:
      "Specialized recruitment across mechanical, electrical and plumbing disciplines.",
  },
  {
    number: "04",
    title: "Mission Critical Hiring",
    description:
      "Supporting data center, hyperscale and mission-critical project delivery teams.",
  },
  {
    number: "05",
    title: "Direct Hire",
    description:
      "Permanent placement solutions focused on long-term retention and cultural alignment.",
  },
  {
    number: "06",
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions supporting urgent and project-driven hiring needs.",
  },
];

  const employerAdvantages = [
  "Industry Specialization",
  "National Talent Network",
  "Passive Candidate Access",
  "Market Intelligence",
  "Speed & Precision",
  "Long-Term Partnerships",
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
          "url('/employers/employers-hero.webp')",
        transform: heroVisible
          ? "scale(1.05)"
          : "scale(1)",
      }}
    />

    {/* OVERLAYS */}

    <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/35" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />

  </div>

  {/* GOLD VERTICAL LINE */}

  <div
    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
    style={{
      background:
        "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
      opacity: heroVisible ? 0.6 : 0,
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

            Employers

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

          Building High-Performing

          <br />

          Teams Across

          <br />

          <span className="relative inline-block text-[#C89B3C]">

            AEC & MEP Markets

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

          RUDRON delivers specialist recruitment
          solutions across construction,
          engineering, infrastructure,
          mission critical and MEP sectors,
          helping organizations secure the talent
          needed to drive growth and project success.

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
            "Executive Search",
            "Project Staffing",
            "Data Centers",
            "Healthcare",
            "Mission Critical",
            "MEP",
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
            ["Executive", "Search"],
            ["Project", "Staffing"],
            ["AEC + MEP", "Markets"],
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

{/* TALENT CHALLENGES */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14">

    {/* LEFT */}

    <div className="lg:sticky lg:top-32 self-start">

  <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Talent Challenges

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.08] mb-6">

        Hiring In Construction
        Has Never Been More
        Competitive

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Construction organizations face increasing pressure to secure
        highly skilled professionals while managing aggressive project
        schedules, labor shortages, and rapidly evolving market demands.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Whether you're hiring executive leadership, project management,
        field operations, MEP specialists, or mission-critical talent,
        success depends on accessing the right professionals at the
        right time.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

        RUDRON helps organizations overcome talent acquisition
        challenges through targeted recruitment strategies and
        industry-focused market expertise.

      </p>

    </div>

    {/* RIGHT */}

    <div className="relative min-h-[520px] lg:min-h-[620px]">

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] font-bold mb-2">
          Talent Shortages
        </h3>

        <p className="text-gray-300 mb-3">
          Competition for skilled construction professionals continues to intensify.
        </p>

      </div>

      <div className="floating-card-2 absolute top-24 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] font-bold mb-2">
          Leadership Gaps
        </h3>

        <p className="text-gray-300 mb-3">
          Critical vacancies can directly impact project performance.
        </p>

      </div>

      <div className="floating-card absolute bottom-20 left-0 lg:left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] font-bold mb-2">
          Specialized Hiring
        </h3>

        <p className="text-gray-300 mb-3">
          Technical construction roles require highly targeted recruitment.
        </p>

      </div>

      <div className="floating-card-2 absolute bottom-0 right-0 lg:right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">  

        <h3 className="text-[#C89B3C] font-bold mb-2">
          Mission Critical Growth
        </h3>

        <p className="text-gray-300 mb-3">
          Data center expansion is creating unprecedented hiring demand.
        </p>

      </div>

    </div>

  </div>

</section>

{/* MARKET MARQUEE */}

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

{/* RECRUITMENT SOLUTIONS */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
        Recruitment Solutions
      </p>

      <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Specialized Hiring Solutions
        For Modern Construction Markets

      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {recruitmentSolutions.map((item) => (

        <div
          key={item.number}
          className="group relative bg-white rounded-[28px] border border-black/5 p-6 overflow-hidden hover:-translate-y-2 hover:border-[#C89B3C]/40 transition-all duration-500"
        >

          <div className="absolute right-4 -top-3 text-[90px] font-bold text-black/[0.04]">

            {item.number}

          </div>

          <p className="text-[#C89B3C] font-semibold mb-3">

            {item.number}

          </p>

          <h3 className="text-[#07111F] text-xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">

            {item.title}

          </h3>

          <p className="text-gray-600 leading-7">

            {item.description}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* DELIVERY PROCESS */}

<section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        How We Deliver Talent

      </p>

      <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05]">

        A Strategic Approach
        To Talent Acquisition

      </h2>

    </div>

    <div className="relative">

      <div className="absolute left-5 lg:left-1/2 top-6 bottom-6 w-[2px] bg-[#C89B3C]/30" />

      {deliveryProcess.map((item, index) => (

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

{/* EMPLOYER ADVANTAGES */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-6">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-xs sm:text-sm mb-4">

        Why Employers Partner With RUDRON

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold">

        Expertise.
        Relationships.
        Results.

      </h2>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

      {employerAdvantages.map((item, index) => (

        <div
          key={item}
          className="bg-white rounded-[28px] p-6 border border-black/5 hover:-translate-y-2 hover:border-[#C89B3C]/30 transition-all duration-500"
        >

          <div className="text-[#C89B3C] text-4xl font-bold opacity-20 mb-4">

            0{index + 1}

          </div>

          <h3 className="text-[#07111F] text-xl font-bold">

            {item}

          </h3>

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