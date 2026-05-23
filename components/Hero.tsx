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
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(14,15,16,0.92) 16%, rgba(6, 14, 26, 0.7) 48%, rgba(7,17,31,0.10) 70%), url('/hero-bg.png')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto w-full px-8 lg:px-18">

          <div className="max-w-[760px] pt-28">

            {/* LABEL */}
            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
              AEC & MEP Recruitment Specialists
            </p>

            {/* HEADING */}
            <h1 className="text-white font-bold leading-[1.05] text-[52px] lg:text-[64px] mb-8">

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
            <p className="text-gray-300 text-[18px] leading-10 mb-10 max-w-[730px]">

              TRINEX helps in precision hiring for AEC & MEP leaders—delivering project-ready talent
              from engineers to directors, across the country.

            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mb-14">

              <button className="bg-[#C89B3C] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">

                Hire Talent

              </button>

              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#C89B3C] transition">

                Explore Opportunities

              </button>

            </div>

            {/* FEATURE POINTS */}
            <div className="flex flex-wrap gap-12">

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