"use client";

import {
  Users,
  Target,
  Globe,
} from "lucide-react";

export default function Hero() {

  const features = [
    {
      icon: Users,
      title: "AEC & MEP",
      subtitle: "Recruitment Experts",
    },
    {
      icon: Target,
      title: "Industry Focused",
      subtitle: "Technical. Skilled. Professional.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      subtitle: "USA | Canada | UAE | India",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
  className="
    absolute inset-0
    bg-cover
    bg-[72%]
    sm:bg-center
  "
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(14,15,16,0.95) 12%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.18) 100%), url('/hero-bg.png')",
  }}
/>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto w-full px-8 lg:px-18">

          <div className="max-w-[760px] pt-32 sm:pt-38">

            {/* LABEL */}
            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
              AEC & MEP Recruitment Specialists
            </p>

            {/* HEADING */}
            <h1 className="text-white font-bold leading-[1.05] text-[38px] sm:text-[48px] lg:text-[64px] mb-8">

         Enabling
        <span className="text-[#C89B3C]">
            {" "}AEC & MEP
        </span>

          <br />

        Leaders To Hire

          <br />

         The Right Talent.

        </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[16px] sm:text-[18px] leading-8 sm:leading-10 max-w-[730px] mb-6">

              TRINEX helps in precision hiring for AEC & MEP leaders—delivering project-ready talent
              from engineers to directors, across the country.

            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mb-10">

              <button className="bg-[#C89B3C] text-black px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition">

                Hire Talent

              </button>

              <button className="border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-[#C89B3C] transition">

                Explore Opportunities

              </button>

            </div>

            {/* FEATURE POINTS */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-12">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    {/* ICON */}
                    <div className="mt-1">
                      <Icon
                        className="text-[#C89B3C]"
                        size={32}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TEXT */}
                    <div>

                      <h4 className="text-white font-semibold text-base mb-1">
                        {item.title}
                      </h4>

                      <p className="text-gray-300 text-sm">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}