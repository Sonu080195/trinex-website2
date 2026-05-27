"use client";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function CandidatesPage() {

  const benefits = [
    {
      title: "Exclusive Opportunities",
      description:
        "Access confidential roles with leading construction and engineering firms.",
    },
    {
      title: "Career Growth",
      description:
        "We help professionals secure opportunities aligned with long-term career goals.",
    },
    {
      title: "Industry Expertise",
      description:
        "Our recruiters understand the AEC & MEP industries and hiring landscape.",
    },
    {
      title: "Personalised Support",
      description:
        "From interviews to offer negotiations, we support candidates throughout the process.",
    },
  ];

  const roles = [
    "Project Managers",
    "Superintendents",
    "Project Executives",
    "Estimators",
    "MEP Leaders",
    "Construction Engineers",
  ];

  const industries = [
    "Commercial Construction",
    "Industrial Construction",
    "Residential Construction",
    "Infrastructure & Civil",
  ];

  const process = [
    "Career Consultation",
    "Opportunity Matching",
    "Interview Preparation",
    "Offer Negotiation",
    "Long-Term Career Support",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[82vh] md:min-h-screen flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.18) 75%), url('/candidates/candidates-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-18 pt-28 sm:pt-32 lg:pt-22">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

                Candidates

              </p>

              <h1 className="text-white font-bold leading-[1.05] text-[34px] sm:text-[42px] md:text-[58px] lg:text-[66px] mb-6 sm:mb-8">

                Connecting
                <br />

                Professionals With
                <br />

                Industry-Leading Roles

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-9 mb-8 sm:mb-10 max-w-[720px]">

                RUDRON partners with top construction and engineering firms
                to connect skilled professionals with high-impact career opportunities
                across rapidly growing markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#F7F7F7] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-10 sm:mb-14">

            <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

              Why Work With RUDRON

            </p>

            <h2 className="text-[#07111F] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-5 sm:mb-6">

              Career Opportunities
              Built Around Growth

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 border border-black/5 hover:-translate-y-2 transition duration-500"
              >

                <h3 className="text-[#07111F] text-[20px] sm:text-2xl font-bold mb-4 sm:mb-5 leading-snug">

                  {item.title}

                </h3>

                <p className="text-gray-600 text-[15px] sm:text-lg leading-7 sm:leading-8">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ROLES */}
      <section className="bg-[#07111F] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

            Roles We Recruit For

          </p>

          <h2 className="text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-10 sm:mb-14">

            Opportunities Across
            Key Construction Roles

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {roles.map((role, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6"
              >

                <h3 className="text-white text-[20px] sm:text-2xl font-semibold leading-snug">

                  {role}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F7F7] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

            Industries We Support

          </p>

          <h2 className="text-[#07111F] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-10 sm:mb-12">

            Expertise Across
            High-Growth Markets

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

            {industries.map((industry, index) => (

              <div
                key={index}
                className="bg-white border border-black/5 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8"
              >

                <h3 className="text-[#07111F] text-[20px] sm:text-2xl font-semibold leading-snug">

                  {industry}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-[#07111F] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-10 sm:mb-14">

            <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

              Candidate Process

            </p>

            <h2 className="text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-tight">

              Supporting Your
              Career Journey

            </h2>

          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[24px] sm:rounded-[28px] border border-white/10 p-6 sm:p-8 lg:p-10 text-center"
              >

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C89B3C] text-black flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-5 sm:mb-6">

                  {index + 1}

                </div>

                <h3 className="text-white text-[18px] sm:text-xl font-semibold leading-7 sm:leading-8">

                  {step}

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