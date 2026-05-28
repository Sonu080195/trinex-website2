"use client";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {

  const values = [
    {
      title: "Industry Expertise",
      description:
        "Specialised recruitment knowledge across AEC, MEP, mission critical, and infrastructure markets.",
    },

    {
      title: "Long-Term Partnerships",
      description:
        "We focus on building lasting relationships that create long-term hiring success.",
    },

    {
      title: "Precision Hiring",
      description:
        "Delivering technically aligned professionals who drive project performance and growth.",
    },

    {
      title: "Global Reach",
      description:
        "Supporting clients and candidates across the USA, UAE, and India markets.",
    },
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
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.22) 75%), url('/about/about-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                About RUDRON

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[34px] sm:text-[48px] lg:text-[64px] mb-6">

                RUDRON helps in
                Precision Hiring for
                <span className="text-[#C89B3C]">
                  {" "}AEC & MEP
                </span>
                {" "}leaders

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

                RUDRON Global Talent Solutions is a specialist recruitment firm
                connecting exceptional construction, engineering, and MEP talent
                with leading companies across rapidly evolving markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6 bg-[#07111F]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Our Story

            </p>

            <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] mb-6">

              A Recruitment Partner
              Built For Modern
              Construction Markets

            </h2>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

              RUDRON was established to provide a more strategic,
              relationship-driven approach to recruitment across the
              AEC & MEP industries.

            </p>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We understand the challenges companies face in securing
              technically skilled professionals within highly competitive
              construction and infrastructure markets.

            </p>

          </div>

          {/* IMAGE */}
          <div>

            <div
              className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-[28px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/about/about-story.png')",
              }}
            />

          </div>

        </div>

      </section>

      {/* MISSION + VISION */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 sm:gap-6">

          {/* MISSION */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-black/5">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Our Mission

            </p>

            <h3 className="text-[#07111F] text-[28px] sm:text-[38px] font-bold leading-[1.08] mb-5">

              Delivering Talent
              Solutions That Create
              Long-Term Impact

            </h3>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              Our mission is to help companies build high-performing teams
              while creating meaningful career opportunities for professionals
              across the construction and engineering industries.

            </p>

          </div>

          {/* VISION */}
          <div className="bg-[#07111F] rounded-[28px] p-6 sm:p-8 border border-white/10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Our Vision

            </p>

            <h3 className="text-white text-[28px] sm:text-[38px] font-bold leading-[1.08] mb-5">

              Becoming A Trusted
              Global Partner Across
              AEC & MEP Markets

            </h3>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              We aim to become a globally recognised recruitment partner
              known for industry expertise, long-term relationships,
              and exceptional delivery across evolving construction sectors.

            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-8 sm:mb-10">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Why RUDRON

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08]">

              Recruitment Solutions
              Built Around Expertise

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {values.map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[24px] p-5 sm:p-6 hover:border-[#C89B3C]/30 transition-all duration-500"
              >

                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 text-[14px] sm:text-[15px] leading-7">

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