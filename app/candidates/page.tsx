"use client";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function CandidatesPage() {

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

const marqueeRoles = [
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
      <section className="relative min-h-[85vh] flex items-center">

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(7,17,31,.95) 20%, rgba(7,17,31,.82) 45%, rgba(7,17,31,.4) 100%), url('/candidates/candidates-hero.png')",
    }}
  />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 pt-28">
            <div className="max-w-[760px]">
              <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm mb-5">
          Candidates

        </p>
        
        <h1 className="text-[34px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-6">
          Connecting
          Professionals With
          
          <br/>
        <span className="text-[#C89B3C]">
            {" "} Industry-Leading
          </span>

        {" "} Roles

          <br />

        </h1>

        <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[700px]">

          RUDRON partners with top construction and engineering firms
          to connect skilled professionals with high-impact career opportunities
          across rapidly growing markets.

        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "Project Management",
            "Superintendents",
            "Estimating",
            "MEP Leadership",
            "Executive Search",
            "Data Centers",
          ].map((item) => (

            <div
              key={item}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
            >
              {item}
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

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[250px] sm:w-[290px]">

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

      <div className="floating-card-2 absolute top-24 right-0 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[250px] sm:w-[290px]">

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

      <div className="floating-card absolute bottom-20 left-6 lg:left-10 bg-[#07111F] text-white rounded-[28px] p-6 border border-white/10 w-[250px] sm:w-[290px]">

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

      <div className="floating-card-2 absolute bottom-0 right-4 lg:right-10 bg-[#0D1726] text-white rounded-[28px] p-6 border border-white/10 w-[250px] sm:w-[290px]">

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

<section className="bg-[#07111F] py-4 lg:py-6 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...marqueeRoles, ...marqueeRoles].map((role, index) => (

      <div
        key={index}
        className="flex items-center"
      >

        <span className="text-white text-[18px] sm:text-[26px] lg:text-[38px] font-bold mx-6">

          {role}

        </span>

        <span className="text-[#C89B3C] text-[30px]">

          •

        </span>

      </div>

    ))}

  </div>

</section>

{/* FEATURED CAREER PATHS */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

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

    <div className="text-center mb-14">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-xs sm:text-sm mb-4">
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
          className={`relative flex mb-6 lg:mb-8 ${
            index % 2 === 0
              ? "lg:justify-start"
              : "lg:justify-end"
          }`}
        >

          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-[#C89B3C] text-black flex items-center justify-center font-bold">

            {item.step}

          </div>

          <div className="ml-16 lg:ml-0 w-full lg:w-[44%] bg-[#0D1726] border border-white/10 rounded-[28px] p-5 lg:p-6">

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

  <div className="text-center mb-12">

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
        className="min-w-[340px] max-w-[340px] bg-white rounded-[28px] p-8 border border-black/5"
      >

        <p className="text-[#C89B3C] text-sm mb-3">

          {item.market}

        </p>

        <h3 className="text-[#07111F] text-xl font-bold mb-4">

          {item.role}

        </h3>

        <p className="text-gray-600 leading-8">

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