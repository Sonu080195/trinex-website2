"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Home,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    title: "Commercial",
    href: "/commercial",
    image: "/Subsectors/Commercial/DataCenter.webp",
    icon: Building2,
    description:
      "Specialist recruitment across commercial buildings, healthcare, education and mission-critical environments.",
    items: [
      {
        label: "Educational Construction",
        href: "/commercial/educational",
      },
      {
        label: "Healthcare Construction",
        href: "/commercial/healthcare",
      },
      {
        label: "Data Centers",
        href: "/commercial/data-centers",
      },
      {
        label: "Retail",
        href: "/commercial/retail",
      },
      {
        label: "Office Buildings",
        href: "/commercial/office-buildings",
      },
    ],
  },
  {
    title: "Industrial",
    href: "/industrial",
    image: "/Subsectors/Industrial/Powerplant.png",
    icon: Factory,
    description:
      "Technical and operational hiring support across industrial, power, warehouse and process construction.",
    items: [
      {
        label: "Warehouse",
        href: "/industrial/warehouse",
      },
      {
        label: "Distribution Centers",
        href: "/industrial/distributioncenter",
      },
      {
        label: "Wastewater Treatment",
        href: "/industrial/wastewater",
      },
      {
        label: "Power Plants",
        href: "/industrial/powerplant",
      },
      {
        label: "Tilt-Up",
        href: "/industrial/tiltup",
      },
    ],
  },
  {
    title: "Residential",
    href: "/residential",
    image: "/Subsectors/Residential/Highrise.png",
    icon: Home,
    description:
      "Recruitment solutions for multifamily, high-rise and residential development teams.",
    items: [
      {
        label: "Multi-Family",
        href: "/residential/multi-family",
      },
      {
        label: "Single-Family",
        href: "/residential/single-family",
      },
      {
        label: "High-Rise",
        href: "/residential/highrise",
      },
      {
        label: "Student Housing",
        href: "/residential/student-housing",
      },
      {
        label: "Senior Housing",
        href: "/residential/senior-housing",
      },
    ],
  },
  {
    title: "Infrastructure",
    href: "/civil",
    image: "/Subsectors/Civil/Bridge.png",
    icon: HardHat,
    description:
      "Talent acquisition across transportation, public works and large-scale infrastructure delivery.",
    items: [
      {
        label: "Roadways",
        href: "/civil/roadways",
      },
      {
        label: "Rail & Metro",
        href: "/civil/rail-metro",
      },
      {
        label: "Bridges",
        href: "/civil/bridge",
      },
      {
        label: "Tunnels",
        href: "/civil/tunnel",
      },
      {
        label: "Airport Construction",
        href: "/civil/airport",
      },
    ],
  },
];

export default function MegaMenu() {
  const [activeTab, setActiveTab] = useState(0);

  const activeIndustry = industries[activeTab];
  const ActiveIcon = activeIndustry.icon;

  return (
    <div className="absolute left-0 top-full z-50 max-h-[85vh] w-full overflow-y-auto border-t border-white/10 bg-[#07111F]/[0.985] shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-5 sm:mb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

              <div className="inline-flex items-center gap-2">
                <Sparkles size={13} className="text-[#C89B3C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-xs">
                  Industry Expertise
                </p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold leading-[1.08] text-white sm:text-[32px] lg:text-[42px]">
              Explore Construction
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white to-[#C89B3C] bg-clip-text text-transparent">
                Markets We Serve
              </span>
            </h2>
          </div>

          <Link
            href="/industries"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-[#C89B3C]/30 bg-[#C89B3C]/10 px-4 py-3 text-[13px] font-semibold text-[#C89B3C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C89B3C] hover:text-[#07111F]"
          >
            View All Industries
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile and tablet */}
        <div className="lg:hidden">
          <div className="scrollbar-hide -mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-medium transition-all duration-300 sm:text-[14px] ${
                    isActive
                      ? "border-[#C89B3C] bg-[#C89B3C] text-[#07111F] shadow-[0_8px_24px_rgba(200,155,60,0.22)]"
                      : "border-white/10 bg-white/[0.05] text-white/70 hover:border-[#C89B3C]/30 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {industry.title}
                </button>
              );
            })}
          </div>

          <div
            key={activeIndustry.title}
            className="animate-[megaFade_350ms_ease-out] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035]"
          >
            <div className="relative h-[150px] overflow-hidden sm:h-[185px]">
              <img
                src={activeIndustry.image}
                alt={`${activeIndustry.title} construction`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/35 to-transparent" />

              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C89B3C]/25 bg-[#07111F]/65 text-[#C89B3C] backdrop-blur-md">
                  <ActiveIcon size={20} />
                </div>

                <div>
                  <h3 className="text-[21px] font-bold text-white sm:text-[26px]">
                    {activeIndustry.title}
                  </h3>

                  <p className="text-[11px] text-gray-300">
                    {activeIndustry.items.length} Specialisations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <p className="mb-4 text-[13px] leading-6 text-gray-400">
                {activeIndustry.description}
              </p>

              <div className="space-y-1">
                {activeIndustry.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-2.5 text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-[#C89B3C]"
                  >
                    <span className="text-[14px] sm:text-[15px]">
                      {item.label}
                    </span>

                    <ArrowRight
                      size={15}
                      className="text-[#C89B3C] transition-transform duration-300 group-hover/item:translate-x-1"
                    />
                  </Link>
                ))}
              </div>

              <Link
                href={activeIndustry.href}
                className="group mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#C89B3C]"
              >
                Explore {activeIndustry.title}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:bg-white/[0.05] hover:shadow-[0_20px_55px_rgba(200,155,60,0.11)]"
              >
                <div className="relative h-[155px] shrink-0 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={`${industry.title} construction`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />

                  <div className="absolute left-4 top-3 text-[44px] font-black leading-none text-white/[0.12]">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C89B3C]/25 bg-[#07111F]/65 text-[#C89B3C] backdrop-blur-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-[21px] font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-5">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.11),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <p className="mb-4 min-h-[54px] text-[12px] leading-6 text-gray-400">
                      {industry.description}
                    </p>

                    <div className="mb-3">
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-gray-400">
                        {industry.items.length} Specialisations
                      </span>
                    </div>

                    <div className="space-y-1">
                      {industry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-2 text-[13px] text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-[#C89B3C]"
                        >
                          <span>{item.label}</span>

                          <ArrowRight
                            size={14}
                            className="translate-x-[-4px] text-[#C89B3C] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={industry.href}
                    className="group/explore relative mt-auto inline-flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[13px] font-semibold text-[#C89B3C]"
                  >
                    Explore Sector
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/explore:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:flex-row sm:items-center lg:mt-9">
          <p className="text-[12px] text-gray-400 sm:text-sm">
            Commercial • Industrial • Residential • Infrastructure
          </p>

          <p className="text-[12px] font-medium text-[#C89B3C] sm:text-sm">
            20+ Construction Specialisations
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes megaFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}