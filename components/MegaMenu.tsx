"use client";

import { useState } from "react";

const industries = [
  {
    title: "Commercial",
    image: "/subsectors/Commercial/DataCenter.webp",
    icon: "🏢",
    items: ["Educational Construction", "Healthcare Construction", "Data Centers", "Retail", "Office Buildings"],
  },
  {
    title: "Industrial",
    image: "/subsectors/Industrial/Powerplant.png",
    icon: "🏭",
    items: ["Warehouse", "Distribution Centers", "Wastewater Treatment", "Power Plants", "Tilt-Up"],
  },
  {
    title: "Residential",
    image: "/subsectors/Residential/Highrise.png",
    icon: "🏘️",
    items: ["Multi-Family", "Single-Family", "Highrise", "Student Housing", "Senior Housing"],
  },
  {
    title: "Infrastructure",
    image: "/subsectors/Civil/Bridge.png",
    icon: "🌉",
    items: ["Roadways", "Rail & Metro", "Bridges", "Tunnels", "Airport Construction"],
  },
];

export default function MegaMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="absolute left-0 top-full w-full bg-[#07111F]/98 backdrop-blur-xl border-t border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-50 max-h-[85vh] overflow-y-auto">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <p className="text-[#C89B3C] uppercase tracking-[4px] text-[10px] sm:text-xs mb-2 sm:mb-3">
            Industry Expertise
          </p>
          <h2 className="text-white text-[22px] sm:text-[32px] lg:text-[46px] font-bold leading-[1.1]">
            Explore Construction<br className="hidden sm:block" /> Markets We Serve
          </h2>
        </div>

        {/* ── MOBILE / TABLET: TAB SWITCHER ── */}
        <div className="lg:hidden">
          {/* Tab pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 mb-5 -mx-1 px-1 scrollbar-hide">
            {industries.map((industry, i) => (
              <button
                key={industry.title}
                onClick={() => setActiveTab(i)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  background: activeTab === i ? "#C89B3C" : "rgba(255,255,255,0.05)",
                  color:      activeTab === i ? "#07111F" : "rgba(255,255,255,0.7)",
                  border:     activeTab === i ? "1px solid #C89B3C" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span>{industry.icon}</span>
                {industry.title}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden">
            <div className="relative h-[140px] sm:h-[180px] overflow-hidden">
              <img
                src={industries[activeTab].image}
                alt={industries[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <h3 className="text-white text-[20px] sm:text-[26px] font-bold">{industries[activeTab].title}</h3>
              </div>
              <span className="absolute top-3 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px]">
                {industries[activeTab].items.length} Specialisations
              </span>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              {industries[activeTab].items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center justify-between text-gray-300 hover:text-[#C89B3C] hover:bg-white/[0.03] transition-all duration-200 py-2.5 px-2 rounded-lg -mx-2"
                >
                  <span className="text-[14px] sm:text-[15px]">{item}</span>
                  <span className="text-[#C89B3C]">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: FULL GRID ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden hover:-translate-y-2 hover:border-[#C89B3C]/30 transition-all duration-500 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-[160px] overflow-hidden flex-shrink-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />
                <div className="absolute top-3 left-4 text-white/15 text-[48px] font-bold leading-none select-none">
                  0{index + 1}
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-lg">{industry.icon}</span>
                  <h3 className="text-white text-[22px] font-bold">{industry.title}</h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[11px]">
                    {industry.items.length} Specialisations
                  </span>
                </div>
                <div className="space-y-1 flex-1">
                  {industry.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center justify-between text-gray-300 hover:text-[#C89B3C] hover:bg-white/[0.03] transition-all duration-200 text-[13px] py-2 px-2 rounded-lg -mx-2"
                    >
                      <span>{item}</span>
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <p className="text-gray-400 text-[12px] sm:text-sm">
            Commercial • Industrial • Residential • Infrastructure
          </p>
          <p className="text-[#C89B3C] text-[12px] sm:text-sm font-medium">
            20+ Construction Specialisations
          </p>
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}