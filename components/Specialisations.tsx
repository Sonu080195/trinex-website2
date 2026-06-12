"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Specialisations() {

  const [activeSector, setActiveSector] = useState<any>(null);

  const sectors = [

    {
      title: "Commercial",
      image: "/Commercial.webp",
      description:
        "Office buildings, retail, educational, and mixed-use projects.",

      subsectors: [

        {
          title: "Educational Construction",
          image: "/subsectors/Commercial/Education.webp",
          link: "/commercial/educational",
        },

        {
          title: "Healthcare Construction",
          image: "/subsectors/Commercial/Healthcare.webp",
          link: "/commercial/healthcare",
        },

        {
          title: "Data Center Construction",
          image: "/subsectors/Commercial/DataCenter.webp",
          link: "/commercial/data-centers",
        },

        {
          title: "Retail Construction",
          image: "/subsectors/Commercial/Retail.webp",
          link: "/commercial/retail",
        },

        {
          title: "Office Building Construction",
          image: "/subsectors/Commercial/Office.webp",
          link: "/commercial/office-buildings",
        },

      ],
    },

    {
      title: "Industrial",
      image: "/Industrial.webp",
      description:
        "Warehouses, manufacturing, logistics, and energy facilities.",

      subsectors: [

        {
          title: "Warehouse Construction",
          image: "/subsectors/Industrial/Warehouse.png",
          link: "/industrial/warehouse",
        },

        {
          title: "Distribution Center Construction",
          image: "/subsectors/Industrial/Distribution.png",
          link: "/industrial/distributioncenter",
        },

        {
          title: "Wastewater Treatment Construction",
          image: "/subsectors/Industrial/Wastewater.png",
          link: "/industrial/wastewater",
        },

        {
          title: "Power Plant Construction",
          image: "/subsectors/Industrial/Powerplant.png",
          link: "/industrial/powerplant",
        },

        {
          title: "Tilt-Up Construction",
          image: "/subsectors/Industrial/Tiltup.png",
          link: "/industrial/tiltup",
        },

      ],
    },

    {
      title: "Residential",
      image: "/Residential.webp",
      description:
        "Multifamily, high-rise, student housing, and communities.",

      subsectors: [

        {
          title: "Multi-Family Construction",
          image: "/subsectors/Residential/Multifamily.png",
          link: "/residential/multi-family",
        },

        {
          title: "Single-Family Construction",
          image: "/subsectors/Residential/Singlefamily.png",
          link: "/residential/single-family",
        },

        {
          title: "Highrise Construction",
          image: "/subsectors/Residential/Highrise.png",
          link: "/residential/highrise",
        },

        {
          title: "Student Housing Construction",
          image: "/subsectors/Residential/Studenthousing.png",
          link: "/residential/student-housing",
        },

        {
          title: "Senior Housing Construction",
          image: "/subsectors/Residential/Seniorhousing.png",
          link: "/residential/senior-housing",
        },

      ],
    },

    {
      title: "Infrastructure",
      image: "/Civil.webp",
      description:
        "Transportation, civil, bridge, tunnel, and roadway projects.",

      subsectors: [

        {
          title: "Roadways Construction",
          image: "/subsectors/Civil/Roadways.png",
          link: "/civil/roadways",
        },

        {
          title: "Rail & Metro Construction",
          image: "/subsectors/Civil/Metro.png",
          link: "/civil/rail-metro",
        },

        {
          title: "Bridge Construction",
          image: "/subsectors/Civil/Bridge.png",
          link: "/civil/bridge",
        },

        {
          title: "Tunnel Construction",
          image: "/subsectors/Civil/Tunnel.png",
          link: "/civil/tunnel",
        },

        {
          title: "Airport Construction",
          image: "/subsectors/Civil/Airport.png",
          link: "/civil/airport",
        },

      ],
    },

  ];

  return (

    <section className="relative bg-[#F4F4F0] py-8 lg:py-10 px-4 sm:px-4 lg:px-20 overflow-hidden">

{/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Faint radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(200,155,60,0.07) 0%, transparent 65%)",
        }}
      />

      {/* TOP TEXT */}
<div className="text-center mb-6 lg:mb-10">

  <div className="inline-flex items-center gap-3 mb-4">

    <span className="h-px w-8 bg-[#C89B3C]" />

    <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

      Industry Expertise

    </p>

    <span className="h-px w-8 bg-[#C89B3C]" />

  </div>

  <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.02] mb-4">

    Expertise Across

    <br />

    <span className="relative inline-block text-[#C89B3C]">

      Construction Markets

      <span
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[3px]
        bg-[#C89B3C]
        opacity-20
        rounded-full
        "
      />

    </span>

  </h2>

  <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-7xl mx-auto mb-4">

    Supporting contractors, developers,
    engineering consultancies and owners
    across the most competitive construction
    and infrastructure sectors.

  </p>

  <div className="flex justify-center gap-4 lg:gap-6 flex-wrap">

    {[
      ["4", "Core Sectors"],
      ["20+", "Specialisations"],
      ["USA", "Primary Market"],
    ].map((item) => (

      <div
        key={item[1]}
        className="
        bg-white
        border
        border-black/5
        rounded-[18px]
        px-5
        py-4
        min-w-[120px]
        "
      >

        <h3 className="text-[#C89B3C] text-2xl font-bold">

          {item[0]}

        </h3>

        <p className="text-gray-500 text-sm">

          {item[1]}

        </p>

      </div>

    ))}

  </div>

</div>

      {/* MOBILE SCROLL */}
      <div className="flex md:hidden gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">

        {sectors.map((sector, index) => (

          <div
            key={index}
            onClick={() => setActiveSector(sector)}
            className="group relative min-w-[85%] h-[240px] rounded-[24px] overflow-hidden cursor-pointer snap-start shrink-0"
          >

            {/* IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${sector.image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/55 to-[#07111F]/10 pointer-events-none" />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500 pointer-events-none" />

            {/* CONTENT */}
            <div className="absolute bottom-6 left-5 z-10">

              <h3 className="text-white text-[30px] font-bold leading-none mb-3">

                {sector.title}

              </h3>

              <p className="text-gray-300 text-[13px] leading-6 mb-4 max-w-[240px]">

                {sector.description}
                

              </p>

              <div className="flex items-center gap-2">

                <p className="text-white text-[14px] font-medium">

                  Explore Sector

                </p>

                <span className="text-[#C89B3C] text-lg">

                  →

                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">

        {sectors.map((sector, index) => (

<div
key={index}
onClick={() => setActiveSector(sector)}
className="
group
relative
h-[340px]
rounded-[28px]
overflow-hidden
cursor-pointer
border
border-black/5
shadow-[0_4px_20px_rgba(0,0,0,0.04)]
hover:-translate-y-2
hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
transition-all
duration-500
"
  >

            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${sector.image})`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/55 to-[#07111F]/10 pointer-events-none" />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500 pointer-events-none" />

            <div className="absolute bottom-8 left-7 z-10">

              <h3 className="text-white text-[40px] font-bold leading-none mb-4">

                {sector.title}

              </h3>

              <p className="text-gray-300 text-[15px] leading-7 mb-5 max-w-[280px]">

                {sector.description}

              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-5">

  {sector.subsectors.length} Specialisations

</div>

              <div className="flex items-center gap-3">

                <p className="text-white text-lg font-medium">

                  Explore Sector

                </p>

                <span className="text-[#C89B3C] text-2xl">

                  →

                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* FULLSCREEN POPUP */}
{activeSector && (

  <div className="fixed inset-0 z-[999] bg-[#07111F]/96 backdrop-blur-xl overflow-y-auto">

    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">

      {/* TOP */}
      <div className="flex items-start justify-between mb-6 sm:mb-16 gap-5">

        <div>

          <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-4 sm:mb-5">

            {activeSector.title} Construction

          </p>

          <h2 className="text-white text-[34px] sm:text-5xl font-bold leading-[1.05]">

            Explore Specialisations

          </h2>

        </div>

        {/* CLOSE */}
        <button
          onClick={() => setActiveSector(null)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition shrink-0"
        >

          <X size={24} />

        </button>

      </div>

      {/* MOBILE SCROLL */}
      <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">

        {activeSector.subsectors.map((item: any, index: number) => (

          <Link
            href={item.link}
            key={index}
            className="group relative min-w-[88%] h-[240px] rounded-[24px] overflow-hidden block cursor-pointer snap-start shrink-0"
          >

            {/* IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent pointer-events-none" />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500 pointer-events-none" />

            {/* CONTENT */}
            <div className="absolute bottom-6 left-5 z-10">

              <h3 className="text-white text-[24px] font-bold leading-tight mb-3 max-w-[220px]">

                {item.title}

              </h3>

              <div className="flex items-center gap-2">

                <p className="text-white text-[14px] font-medium">

                  Explore

                </p>

                <span className="text-[#C89B3C] text-lg transition duration-300 group-hover:translate-x-2">

                  →

                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-3 gap-8">

        {activeSector.subsectors.map((item: any, index: number) => (

          <Link
            href={item.link}
            key={index}
            className="group relative h-[300px] rounded-[28px] overflow-hidden block cursor-pointer"
          >

            {/* IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent pointer-events-none" />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500 pointer-events-none" />

            {/* CONTENT */}
            <div className="absolute bottom-8 left-7 z-10">

              <h3 className="text-white text-3xl font-bold leading-tight mb-4 max-w-[260px]">

                {item.title}

              </h3>

              <div className="flex items-center gap-3">

                <p className="text-white text-lg font-medium">

                  Explore

                </p>

                <span className="text-[#C89B3C] text-2xl transition duration-300 group-hover:translate-x-2">

                  →

                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  </div>

)}

    </section>

  );
}