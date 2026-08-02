"use client";

import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Home,
  Sparkles,
  X,
} from "lucide-react";

const sectors = [
  {
    title: "Commercial",
    image: "/Commercial.webp",
    icon: Building2,
    description:
      "Office buildings, retail, education, healthcare and mixed-use projects.",
    subsectors: [
      {
        title: "Educational Construction",
        image: "/Subsectors/Commercial/Education.webp",
        link: "/commercial/educational",
      },
      {
        title: "Healthcare Construction",
        image: "/Subsectors/Commercial/Healthcare.webp",
        link: "/commercial/healthcare",
      },
      {
        title: "Data Center Construction",
        image: "/Subsectors/Commercial/DataCenter.webp",
        link: "/commercial/data-centers",
      },
      {
        title: "Retail Construction",
        image: "/Subsectors/Commercial/Retail.webp",
        link: "/commercial/retail",
      },
      {
        title: "Office Building Construction",
        image: "/Subsectors/Commercial/Office.webp",
        link: "/commercial/office-buildings",
      },
    ],
  },
  {
    title: "Industrial",
    image: "/Industrial.webp",
    icon: Factory,
    description:
      "Warehouses, manufacturing, logistics, utilities and energy facilities.",
    subsectors: [
      {
        title: "Warehouse Construction",
        image: "/Subsectors/Industrial/Warehouse.png",
        link: "/industrial/warehouse",
      },
      {
        title: "Distribution Center Construction",
        image: "/Subsectors/Industrial/Distribution.png",
        link: "/industrial/distributioncenter",
      },
      {
        title: "Wastewater Treatment Construction",
        image: "/Subsectors/Industrial/Wastewater.png",
        link: "/industrial/wastewater",
      },
      {
        title: "Power Plant Construction",
        image: "/Subsectors/Industrial/Powerplant.png",
        link: "/industrial/powerplant",
      },
      {
        title: "Tilt-Up Construction",
        image: "/Subsectors/Industrial/Tiltup.png",
        link: "/industrial/tiltup",
      },
    ],
  },
  {
    title: "Residential",
    image: "/Residential.webp",
    icon: Home,
    description:
      "Multifamily, high-rise, student housing and residential communities.",
    subsectors: [
      {
        title: "Multi-Family Construction",
        image: "/Subsectors/Residential/Multifamily.png",
        link: "/residential/multi-family",
      },
      {
        title: "Single-Family Construction",
        image: "/Subsectors/Residential/Singlefamily.png",
        link: "/residential/single-family",
      },
      {
        title: "High-Rise Construction",
        image: "/Subsectors/Residential/Highrise.png",
        link: "/residential/highrise",
      },
      {
        title: "Student Housing Construction",
        image: "/Subsectors/Residential/Studenthousing.png",
        link: "/residential/student-housing",
      },
      {
        title: "Senior Housing Construction",
        image: "/Subsectors/Residential/Seniorhousing.png",
        link: "/residential/senior-housing",
      },
    ],
  },
  {
    title: "Infrastructure",
    image: "/Civil.webp",
    icon: HardHat,
    description:
      "Transportation, bridge, tunnel, aviation and roadway projects.",
    subsectors: [
      {
        title: "Roadways Construction",
        image: "/Subsectors/Civil/Roadways.png",
        link: "/civil/roadways",
      },
      {
        title: "Rail & Metro Construction",
        image: "/Subsectors/Civil/Metro.png",
        link: "/civil/rail-metro",
      },
      {
        title: "Bridge Construction",
        image: "/Subsectors/Civil/Bridge.png",
        link: "/civil/bridge",
      },
      {
        title: "Tunnel Construction",
        image: "/Subsectors/Civil/Tunnel.png",
        link: "/civil/tunnel",
      },
      {
        title: "Airport Construction",
        image: "/Subsectors/Civil/Airport.png",
        link: "/civil/airport",
      },
    ],
  },
];

function SpecialisationsInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get("sector");

  const [activeSector, setActiveSector] =
    useState<(typeof sectors)[number] | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (sectorParam) {
      const match = sectors.find(
        (sector) =>
          sector.title.toLowerCase() === sectorParam.toLowerCase()
      );

      if (match) {
        setActiveSector(match);
        document.body.style.overflow = "hidden";

        const frame = window.requestAnimationFrame(() => {
          window.setTimeout(() => setPanelVisible(true), 10);
        });

        return () => window.cancelAnimationFrame(frame);
      }
    }

    setPanelVisible(false);
    document.body.style.overflow = "auto";

    const timer = window.setTimeout(() => setActiveSector(null), 350);

    return () => window.clearTimeout(timer);
  }, [sectorParam]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const openSector = (sector: (typeof sectors)[number]) => {
    router.push(
      `${pathname}?sector=${sector.title.toLowerCase()}`,
      { scroll: false }
    );
  };

  const switchSector = (sector: (typeof sectors)[number]) => {
    router.replace(
      `${pathname}?sector=${sector.title.toLowerCase()}`,
      { scroll: false }
    );
  };

  const closeSector = () => {
    router.replace(pathname, { scroll: false });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSector();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname]);

  const overlay =
    activeSector && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[99999]">
            <div
              className="absolute inset-0 bg-[#07111F]/97 backdrop-blur-xl transition-opacity duration-300"
              style={{ opacity: panelVisible ? 1 : 0 }}
              onClick={closeSector}
            />

            <div
              className="relative z-10 h-full overflow-y-auto transition-all duration-300"
              style={{
                opacity: panelVisible ? 1 : 0,
                transform: panelVisible
                  ? "translateY(0)"
                  : "translateY(24px)",
              }}
            >
              <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-14">
                <div className="mb-8 flex items-start justify-between gap-5 sm:mb-12">
                  <div>
                    <button
                      type="button"
                      onClick={closeSector}
                      className="mb-4 flex items-center gap-2 text-[13px] text-gray-400 transition-colors hover:text-white sm:hidden"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>

                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#C89B3C]" />

                      <div className="inline-flex items-center gap-2">
                        <Sparkles size={13} className="text-[#C89B3C]" />

                        <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                          {activeSector.title} Construction
                        </p>
                      </div>
                    </div>

                    <h2 className="text-[30px] font-bold leading-[1.05] text-white sm:text-[42px] lg:text-[54px]">
                      Explore
                      <span className="ml-2 bg-gradient-to-r from-white to-[#C89B3C] bg-clip-text text-transparent">
                        Specialisations
                      </span>
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={closeSector}
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/50 hover:bg-white/10 hover:text-[#C89B3C] sm:flex sm:h-14 sm:w-14"
                    aria-label="Close specialisations panel"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {activeSector.subsectors.map((item, index) => (
                    <Link
                      href={item.link}
                      key={item.link}
                      onClick={() => {
                        document.body.style.overflow = "auto";
                      }}
                      className="group relative block cursor-pointer overflow-hidden rounded-[22px] border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:rounded-[28px]"
                      style={{
                        height: "clamp(210px, 28vw, 300px)",
                        opacity: panelVisible ? 1 : 0,
                        transform: panelVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: `opacity 0.5s ease ${
                          index * 80
                        }ms, transform 0.45s ease ${index * 80}ms`,
                      }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.08]"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/35 to-transparent" />
                      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

                      <div className="absolute left-4 right-4 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

                      <span className="absolute right-4 top-4 text-[11px] font-semibold tracking-[2px] text-white/35">
                        0{index + 1}
                      </span>

                      <div className="absolute bottom-5 left-5 right-5 z-10">
                        <h3 className="mb-3 text-[19px] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#C89B3C] sm:text-[23px] lg:text-[26px]">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                          Explore
                          <ArrowRight
                            size={15}
                            className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/[0.08] pt-6">
                  <p className="mb-4 text-[12px] uppercase tracking-[3px] text-gray-500">
                    Other Sectors
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {sectors
                      .filter(
                        (sector) =>
                          sector.title !== activeSector.title
                      )
                      .map((sector) => {
                        const Icon = sector.icon;

                        return (
                          <button
                            key={sector.title}
                            type="button"
                            onClick={() => switchSector(sector)}
                            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-[13px] text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/40 hover:text-white"
                          >
                            <Icon
                              size={16}
                              className="text-[#C89B3C] transition-transform duration-300 group-hover:rotate-3"
                            />
                            {sector.title}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section className="relative overflow-hidden bg-[#F4F4F0] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[95px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-150px] h-[280px] w-[280px] rounded-full bg-[#C89B3C]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center lg:mb-14">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Industry Expertise
              </p>
            </div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2 className="mb-4 text-[28px] font-bold leading-[1.05] text-[#07111F] sm:text-[36px] lg:text-[54px]">
            Expertise Across
            <br />
            <span className="relative inline-block bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
              Construction Markets
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent opacity-25" />
            </span>
          </h2>

          <p className="mx-auto mb-7 max-w-3xl text-[15px] leading-relaxed text-gray-500 sm:text-[17px]">
            Supporting contractors, developers, engineering consultancies and
            owners across the most competitive construction and
            infrastructure sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              ["4", "Core Sectors"],
              ["20+", "Specialisations"],
              ["USA", "Primary Market"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="group relative min-w-[110px] overflow-hidden rounded-[18px] border border-black/[0.05] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/30 hover:shadow-[0_14px_34px_rgba(200,155,60,0.08)] sm:min-w-[130px]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.13),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <span className="absolute right-0 top-0 text-[8px] font-semibold tracking-[2px] text-black/15">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-[#C89B3C]">
                    {value}
                  </h3>

                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-3 md:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <button
                key={sector.title}
                type="button"
                onClick={() => openSector(sector)}
                className="group relative h-[245px] min-w-[82%] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[24px] border border-black/[0.05] text-left shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.08]"
                  style={{
                    backgroundImage: `url(${sector.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/50 to-[#07111F]/10" />

                <span className="absolute right-4 top-4 text-[11px] font-semibold tracking-[2px] text-white/35">
                  0{index + 1}
                </span>

                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C89B3C]/25 bg-[#07111F]/60 text-[#C89B3C] backdrop-blur-md">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-[26px] font-bold text-white">
                      {sector.title}
                    </h3>
                  </div>

                  <p className="mb-3 max-w-[250px] text-[13px] leading-5 text-gray-300">
                    {sector.description}
                  </p>

                  <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                    Explore Sector
                    <ArrowRight
                      size={15}
                      className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative hidden grid-cols-2 gap-5 md:grid lg:grid-cols-4 lg:gap-6">
          {sectors.map((sector, index) => (
            <SectorCard
              key={sector.title}
              sector={sector}
              index={index}
              onClick={() => openSector(sector)}
            />
          ))}
        </div>
      </div>

      {overlay}
    </section>
  );
}

export default function Specialisations() {
  return (
    <Suspense fallback={null}>
      <SpecialisationsInner />
    </Suspense>
  );
}

function SectorCard({
  sector,
  index,
  onClick,
}: {
  sector: (typeof sectors)[number];
  index: number;
  onClick: () => void;
}) {
  const Icon = sector.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full cursor-pointer overflow-hidden rounded-[28px] border border-black/[0.05] text-left shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
      style={{
        height: "clamp(285px, 30vw, 380px)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.08]"
        style={{
          backgroundImage: `url(${sector.image})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/45 to-[#07111F]/10 transition-opacity duration-500 group-hover:via-[#07111F]/38" />

      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="absolute left-4 top-3 select-none text-[64px] font-black leading-none text-white/[0.11]">
        0{index + 1}
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C89B3C]/25 bg-[#07111F]/60 text-[#C89B3C] backdrop-blur-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
            <Icon size={21} />
          </div>

          <h3 className="text-[30px] font-bold leading-none text-white transition-colors duration-300 group-hover:text-[#C89B3C] lg:text-[36px]">
            {sector.title}
          </h3>
        </div>

        <p className="mb-4 max-w-[270px] text-[14px] leading-6 text-gray-300">
          {sector.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.09] px-3 py-1.5 text-[12px] text-white backdrop-blur-md">
            {sector.subsectors.length} Specialisations
          </div>

          <div className="flex translate-x-[-5px] items-center gap-2 text-[14px] font-medium text-white/80 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white">
            Explore
            <ArrowRight size={16} className="text-[#C89B3C]" />
          </div>
        </div>
      </div>
    </button>
  );
}