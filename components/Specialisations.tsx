"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Specialisations() {

  const [activeSector, setActiveSector] = useState<any>(null);

  const sectors = [

    {
  title: "Commercial",
  image: "/Commercial.png",
  description:
    "Office buildings, retail, educational, and mixed-use projects.",

  subsectors: [

        {
          title: "Educational Construction",
          image: "/subsectors/Commercial/Educational.png",
          link: "/commercial/educational",
        },

        {
          title: "Healthcare Construction",
          image: "/subsectors/Commercial/Healthcare.png",
          link: "/commercial/healthcare",
        },

        {
          title: "Data Center Construction",
          image: "/subsectors/Commercial/DataCenter.png",
          link: "/commercial/data-centers",
        },

        {
          title: "Retail Construction",
          image: "/subsectors/Commercial/Retail.png",
          link: "/commercial/retail",
        },

        {
          title: "Office Building Construction",
          image: "/subsectors/Commercial/Office.png",
          link: "/commercial/office-buildings",
        },

      ],
    },

    {
  title: "Industrial",
  image: "/Industrial.png",
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
  image: "/Residential.png",
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
  image: "/Civil.png",
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

    <section className="relative bg-[#F7F7F7] py-14 px-6 lg:px-20 overflow-hidden">

      {/* TOP TEXT */}
      <div className="text-center mb-16">

        <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
          Industry Sectors
        </p>

        <h2 className="text-[#07111F] text-5xl lg:text-6xl font-bold mb-6">
          Expertise Across
          <br />
            High-Growth Construction Markets
        </h2>

        <p className="text-gray-500 text-xl leading-9 max-w-4xl mx-auto">
          Delivering top-tier talent solutions across major
          construction and infrastructure markets.
        </p>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {sectors.map((sector, index) => (

          <div
            key={index}
            onClick={() => setActiveSector(sector)}
            className="group relative h-[320px] rounded-[28px] overflow-hidden cursor-pointer"
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
            <div className="absolute bottom-8 left-7 z-10">

              <h3 className="text-white text-[40px] font-bold leading-none mb-4">
  {sector.title}
</h3>

<p className="text-gray-300 text-[15px] leading-7 mb-5 max-w-[280px]">
  {sector.description}
</p>

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

          <div className="max-w-7xl mx-auto px-8 py-20">

            {/* TOP */}
            <div className="flex items-start justify-between mb-16">

              <div>

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
                  {activeSector.title} Construction
                </p>

                <h2 className="text-white text-5xl font-bold">
                  Explore Specialisations
                </h2>

              </div>

              {/* CLOSE */}
              <button
                onClick={() => setActiveSector(null)}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <X size={28} />
              </button>

            </div>

            {/* SUBSECTOR GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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