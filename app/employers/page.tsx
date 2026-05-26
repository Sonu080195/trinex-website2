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
    "Infrastructure & Civil",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.18) 75%), url('/employers/employers-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-18 pt-32 lg:pt-24">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

                Employers

              </p>

              <h1 className="text-white font-bold leading-[1.05] text-[46px] md:text-[58px] lg:text-[66px] mb-8">

                Building High-
                <br />

                Performing Teams
                <br />

                Across
                <span className="text-[#C89B3C]">
                {" "}AEC & MEP
              </span>

              </h1>

              <p className="text-gray-300 text-[18px] leading-9 mb-10 max-w-[720px]">

                RUDRON delivers specialist recruitment solutions for
                construction, engineering, MEP, and mission critical
                markets across rapidly evolving industries.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F7F7] py-24 px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-18">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Recruitment Services

            </p>

            <h2 className="text-[#07111F] text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-6">

              Talent Solutions
              <br />

              Designed For Growth

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] p-10 border border-black/5 hover:-translate-y-2 transition duration-500"
              >

                <h3 className="text-[#07111F] text-2xl font-bold mb-5">

                  {service.title}

                </h3>

                <p className="text-gray-600 text-lg leading-8">

                  {service.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#07111F] py-24 px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-18">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Why Companies Choose RUDRON

            </p>

            <h2 className="text-white text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-tight">

              Recruitment Built
              Around Precision &
              Performance

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Industry Specialisation",
              "Relationship-Driven Hiring",
              "Project-Focused Recruitment",
              "Global Talent Reach",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[28px] border border-white/10 p-10"
              >

                <h3 className="text-white text-2xl font-semibold leading-snug">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-[#F7F7F7] py-24 px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-18">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Our Hiring Process

            </p>

            <h2 className="text-[#07111F] text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-tight">

              A Strategic Approach
              To Talent Acquisition

            </h2>

          </div>

          {/* TIMELINE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-[28px] p-10 border border-black/5 text-center"
              >

                <div className="w-14 h-14 rounded-full bg-[#C89B3C] text-black flex items-center justify-center text-xl font-bold mx-auto mb-6">

                  {index + 1}

                </div>

                <h3 className="text-[#07111F] text-xl font-semibold leading-8">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MARKETS */}
      <section className="bg-[#07111F] py-24 px-6 lg:px-18">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

            Markets We Support

          </p>

          <h2 className="text-white text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-16">

            Expertise Across
            Key Construction Sectors

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {markets.map((market, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[28px] p-10"
              >

                <h3 className="text-white text-2xl font-semibold leading-snug">

                  {market}

                </h3>

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