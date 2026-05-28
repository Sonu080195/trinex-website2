"use client";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function EmployersPage() {

  const services = [
    {
      title: "Executive Search",
      description:
        "Targeted leadership hiring solutions for senior construction and MEP professionals.",
    },

    {
      title: "Project Staffing",
      description:
        "Connecting companies with project-ready talent across commercial and industrial sectors.",
    },

    {
      title: "MEP Recruitment",
      description:
        "Specialist recruitment solutions across mechanical, electrical, and plumbing markets.",
    },

    {
      title: "Mission Critical",
      description:
        "Supporting hyperscale data center and critical infrastructure developments.",
    },

    {
      title: "Direct Hire",
      description:
        "Permanent placement solutions focused on long-term retention and cultural fit.",
    },

    {
      title: "Contract Staffing",
      description:
        "Flexible staffing support for fast-moving projects and critical hiring demands.",
    },
  ];

  const process = [
    "Discovery & Hiring Strategy",
    "Talent Mapping & Market Research",
    "Candidate Shortlisting",
    "Interview Coordination",
    "Placement & Follow-Up Support",
  ];

  const markets = [
    "Commercial Construction",
    "Industrial Construction",
    "Residential Construction",
    "Infrastructure & Civil Construction",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.22) 75%), url('/employers/employers-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Employers

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

                Building High-
                Performing Teams
                Across
                <span className="text-[#C89B3C]">
                  {" "}AEC & MEP
                </span>

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                RUDRON delivers specialist recruitment solutions for
                construction, engineering, MEP, and mission critical
                markets across rapidly evolving industries.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Recruitment Services

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Talent Solutions
              Designed For Growth

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] p-5 sm:p-6 border border-black/5 hover:-translate-y-1 transition duration-500"
              >

                <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-bold mb-4">

                  {service.title}

                </h3>

                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-7">

                  {service.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Recruitment Built
              Around Precision &
              Performance

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {[
              "Industry Specialisation",
              "Relationship-Driven Hiring",
              "Project-Focused Recruitment",
              "Global Talent Reach",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[24px] border border-white/10 p-5 sm:p-6"
              >

                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Our Hiring Process

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              A Strategic Approach
              To Talent Acquisition

            </h2>

          </div>

          {/* PROCESS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] p-5 sm:p-6 border border-black/5 text-center"
              >

                <div className="w-12 h-12 rounded-full bg-[#C89B3C] text-black flex items-center justify-center text-[16px] font-bold mx-auto mb-5">

                  {index + 1}

                </div>

                <h3 className="text-[#07111F] text-[17px] sm:text-[18px] font-semibold leading-7">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MARKETS */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Markets We Support

          </p>

          <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-8 sm:mb-10">

            Expertise Across
            Key Construction Sectors

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {markets.map((market, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6"
              >

                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {market}

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