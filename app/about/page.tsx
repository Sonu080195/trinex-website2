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

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] md:min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.20) 75%), url('/about/about-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-18 pt-28 sm:pt-32 lg:pt-22">

            <div className="max-w-[760px]">

              {/* LABEL */}
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

                About RUDRON

              </p>

              {/* HEADING */}
              <h1 className="text-white font-bold leading-[1.05] text-[34px] sm:text-[42px] md:text-[58px] lg:text-[64px] mb-8">

                RUDRON helps in Precision Hiring 
                
                <br />
                for
                <span className="text-[#C89B3C]">
                {" "}AEC & MEP
              </span>
                
               {" "} leaders
                

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-5 max-w-[720px]">

                RUDRON Global Talent Solutions is a specialist recruitment firm
                connecting exceptional construction, engineering, and MEP talent
                with leading companies across rapidly evolving markets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMPANY STORY */}
      <section className="py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18 bg-[#07111F]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Our Story

            </p>

            <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">

              A Recruitment Partner
              <br />

              Built For Modern
              <br />

              Construction Markets

            </h2>

            <p className="text-gray-300 text-[15px] sm:text-lg leading-7 sm:leading-9 mb-8">

              RUDRON was established to provide a more strategic,
              relationship-driven approach to recruitment across the
              AEC & MEP industries.

            </p>

            <p className="text-gray-300 text-[15px] sm:text-lg leading-7 sm:leading-9">

              We understand the challenges companies face in securing
              technically skilled professionals within highly competitive
              construction and infrastructure markets. Our mission is to
              connect exceptional talent with organisations building the
              future of the built environment.

            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div
              className="h-[320px] sm:h-[460px] lg:h-[600px] rounded-[32px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/about/about-story.png')",
              }}
            />

          </div>

        </div>

      </section>

      {/* MISSION + VISION */}
      <section className="bg-[#F7F7F7] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* MISSION */}
          <div className="bg-white rounded-[32px] p-7 sm:p-10 lg:p-12 border border-black/5">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Our Mission

            </p>

            <h3 className="text-[#07111F] text-[30px] sm:text-4xl font-bold leading-tight mb-6">

              Delivering Talent
              Solutions That Create
              Long-Term Impact

            </h3>

            <p className="text-gray-600 text-[15px] sm:text-lg leading-7 sm:leading-9">

              Our mission is to help companies build high-performing teams
              while creating meaningful career opportunities for professionals
              across the construction and engineering industries.

            </p>

          </div>

          {/* VISION */}
          <div className="bg-[#07111F] rounded-[32px] p-7 sm:p-10 lg:p-12">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Our Vision

            </p>

            <h3 className="text-white text-[30px] sm:text-4xl font-bold leading-tight mb-6">

              Becoming A Trusted
              Global Partner Across
              AEC & MEP Markets

            </h3>

            <p className="text-gray-300 text-[15px] sm:text-lg leading-7 sm:leading-9">

              We aim to become a globally recognised recruitment partner
              known for industry expertise, long-term relationships,
              and exceptional delivery across evolving construction sectors.

            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="bg-[#07111F] py-14 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-18">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-18">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

              Why RUDRON

            </p>

            <h2 className="text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-tight mb-6">

              Recruitment Solutions
              <br />

              Built Around Expertise

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

            {values.map((item, index) => (

              <div
                key={index}
                className="bg-[#0D1726] border border-white/10 rounded-[28px] p-6 sm:p-8 lg:p-10 hover:border-[#C89B3C]/30 transition-all duration-500"
              >

                <h3 className="text-white text-[20px] sm:text-2xl font-semibold mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-400 text-[16px] leading-8">

                  {item.description}

                </p>

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