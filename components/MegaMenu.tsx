"use client";

import Image from "next/image";

const industries = [
  {
    title: "Commercial",
    image: "/subsectors/Commercial/DataCenter.webp",
    items: [
      "Educational Construction",
      "Healthcare Construction",
      "Data Centers",
      "Retail",
      "Office Buildings",
    ],
  },
  {
    title: "Industrial",
    image: "/subsectors/Industrial/Powerplant.png",
    items: [
      "Warehouse",
      "Distribution Centers",
      "Wastewater Treatment",
      "Power Plants",
      "Tilt-Up",
    ],
  },
  {
    title: "Residential",
    image: "/subsectors/Residential/Highrise.png",
    items: [
      "Multi-Family",
      "Single-Family",
      "Highrise",
      "Student Housing",
      "Senior Housing",
    ],
  },
  {
    title: "Infrastructure",
    image: "/subsectors/Civil/Bridge.png",
    items: [
      "Roadways",
      "Rail & Metro",
      "Bridges",
      "Tunnels",
      "Airport Construction",
    ],
  },
];

export default function MegaMenu() {
  return (

<div className="absolute left-0 top-full w-full bg-[#07111F]/98 backdrop-blur-xl border-t border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

    {/* HEADER */}

    <div className="mb-10">

      <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs mb-3">

        Industry Expertise

      </p>

      <h2 className="text-white text-[32px] lg:text-[46px] font-bold leading-[1.05]">

        Explore Construction
        Markets We Serve

      </h2>

    </div>

    {/* GRID */}

    <div className="grid lg:grid-cols-4 gap-5">

      {industries.map((industry, index) => (

        <div
          key={industry.title}
          className="
          group
          bg-white/[0.03]
          border
          border-white/10
          rounded-[28px]
          overflow-hidden
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          "
        >

          {/* IMAGE */}

          <div className="relative h-[180px] overflow-hidden">

            <img
              src={industry.image}
              alt={industry.title}
              className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />

            <div className="absolute top-3 left-4 text-white/20 text-[60px] font-bold">

              0{index + 1}

            </div>

            <div className="absolute bottom-4 left-4">

              <h3 className="text-white text-[26px] font-bold">

                {industry.title}

              </h3>

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-5">

            <div className="mb-4">

              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">

                {industry.items.length} Specialisations

              </span>

            </div>

            <div className="space-y-3">

              {industry.items.map((item) => (

                <div
                  key={item}
                  className="
                  flex
                  items-center
                  justify-between
                  text-gray-300
                  hover:text-[#C89B3C]
                  transition-colors
                  cursor-pointer
                  "
                >

                  <span className="text-sm">

                    {item}

                  </span>

                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">

                    →

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

    {/* FOOTER */}

    <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">

      <p className="text-gray-400 text-sm">

        Commercial • Industrial • Residential • Infrastructure

      </p>

      <p className="text-[#C89B3C] text-sm font-medium">

        20+ Construction Specialisations

      </p>

    </div>

  </div>

</div>

);
}