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

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.22) 75%), url('/candidates/candidates-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Candidates

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

                Connecting
                Professionals With
                Industry-Leading Roles

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                RUDRON partners with top construction and engineering firms
                to connect skilled professionals with high-impact career opportunities
                across rapidly growing markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY RUDRON */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why Work With RUDRON

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Career Opportunities
              Built Around Growth

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] p-5 sm:p-6 border border-black/5 hover:-translate-y-1 transition duration-500"
              >

                <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-7">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ROLES */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Roles We Recruit For

          </p>

          <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-8 sm:mb-10">

            Opportunities Across
            Key Construction Roles

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {roles.map((role, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6"
              >

                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {role}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

            Industries We Support

          </p>

          <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-8 sm:mb-10">

            Expertise Across
            High-Growth Markets

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {industries.map((industry, index) => (

              <div
                key={index}
                className="bg-white border border-black/5 rounded-[24px] p-5 sm:p-6"
              >

                <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-semibold leading-snug">

                  {industry}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Candidate Process

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Supporting Your
              Career Journey

            </h2>

          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-[#0D1726] rounded-[24px] border border-white/10 p-5 sm:p-6 text-center"
              >

                <div className="w-12 h-12 rounded-full bg-[#C89B3C] text-black flex items-center justify-center text-[16px] font-bold mx-auto mb-5">

                  {index + 1}

                </div>

                <h3 className="text-white text-[17px] sm:text-[18px] font-semibold leading-7">

                  {step}

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