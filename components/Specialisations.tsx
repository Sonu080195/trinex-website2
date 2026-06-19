"use client";

import { useState, useEffect, Suspense } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, ArrowLeft } from "lucide-react";

const sectors = [
  {
    title: "Commercial",
    image: "/Commercial.webp",
    icon: "🏢",
    description: "Office buildings, retail, educational, and mixed-use projects.",
    subsectors: [
      { title: "Educational Construction",    image: "/subsectors/Commercial/Education.webp",  link: "/commercial/educational" },
      { title: "Healthcare Construction",     image: "/subsectors/Commercial/Healthcare.webp", link: "/commercial/healthcare" },
      { title: "Data Center Construction",    image: "/subsectors/Commercial/DataCenter.webp", link: "/commercial/data-centers" },
      { title: "Retail Construction",         image: "/subsectors/Commercial/Retail.webp",     link: "/commercial/retail" },
      { title: "Office Building Construction",image: "/subsectors/Commercial/Office.webp",     link: "/commercial/office-buildings" },
    ],
  },
  {
    title: "Industrial",
    image: "/Industrial.webp",
    icon: "🏭",
    description: "Warehouses, manufacturing, logistics, and energy facilities.",
    subsectors: [
      { title: "Warehouse Construction",            image: "/subsectors/Industrial/Warehouse.png",    link: "/industrial/warehouse" },
      { title: "Distribution Center Construction",  image: "/subsectors/Industrial/Distribution.png", link: "/industrial/distributioncenter" },
      { title: "Wastewater Treatment Construction", image: "/subsectors/Industrial/Wastewater.png",   link: "/industrial/wastewater" },
      { title: "Power Plant Construction",          image: "/subsectors/Industrial/Powerplant.png",   link: "/industrial/powerplant" },
      { title: "Tilt-Up Construction",              image: "/subsectors/Industrial/Tiltup.png",       link: "/industrial/tiltup" },
    ],
  },
  {
    title: "Residential",
    image: "/Residential.webp",
    icon: "🏘️",
    description: "Multifamily, high-rise, student housing, and communities.",
    subsectors: [
      { title: "Multi-Family Construction",  image: "/subsectors/Residential/Multifamily.png",     link: "/residential/multi-family" },
      { title: "Single-Family Construction", image: "/subsectors/Residential/Singlefamily.png",    link: "/residential/single-family" },
      { title: "Highrise Construction",      image: "/subsectors/Residential/Highrise.png",        link: "/residential/highrise" },
      { title: "Student Housing Construction",image: "/subsectors/Residential/Studenthousing.png", link: "/residential/student-housing" },
      { title: "Senior Housing Construction",image: "/subsectors/Residential/Seniorhousing.png",  link: "/residential/senior-housing" },
    ],
  },
  {
    title: "Infrastructure",
    image: "/Civil.webp",
    icon: "🌉",
    description: "Transportation, civil, bridge, tunnel, and roadway projects.",
    subsectors: [
      { title: "Roadways Construction",  image: "/subsectors/Civil/Roadways.png", link: "/civil/roadways" },
      { title: "Rail & Metro Construction",image: "/subsectors/Civil/Metro.png",  link: "/civil/rail-metro" },
      { title: "Bridge Construction",    image: "/subsectors/Civil/Bridge.png",   link: "/civil/bridge" },
      { title: "Tunnel Construction",    image: "/subsectors/Civil/Tunnel.png",   link: "/civil/tunnel" },
      { title: "Airport Construction",   image: "/subsectors/Civil/Airport.png",  link: "/civil/airport" },
    ],
  },
];

function SpecialisationsInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get("sector");

  const [activeSector, setActiveSector] = useState<typeof sectors[0] | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal needs client-side mount
  useEffect(() => { setMounted(true); }, []);

  // The panel's open/closed state is now derived from the `?sector=` URL
  // param instead of being purely local React state. This is the actual
  // fix for the back-button bug: opening a sector pushes a real browser
  // history entry, so navigating Back from a subsector page returns here
  // with the param intact and the panel reopens automatically, instead of
  // landing on a blank Home page.
  useEffect(() => {
    if (sectorParam) {
      const match = sectors.find(
        (s) => s.title.toLowerCase() === sectorParam.toLowerCase()
      );
      if (match) {
        setActiveSector(match);
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => setTimeout(() => setPanelVisible(true), 10));
        return;
      }
    }
    setPanelVisible(false);
    document.body.style.overflow = "auto";
    const t = setTimeout(() => setActiveSector(null), 350);
    return () => clearTimeout(t);
  }, [sectorParam]);

  // Opening a sector pushes a NEW history entry — this is what Back needs.
  const openSector = (sector: typeof sectors[0]) => {
    router.push(`${pathname}?sector=${sector.title.toLowerCase()}`, { scroll: false });
  };

  // Switching sectors while the panel is already open replaces the entry
  // instead of stacking one per click.
  const switchSector = (sector: typeof sectors[0]) => {
    router.replace(`${pathname}?sector=${sector.title.toLowerCase()}`, { scroll: false });
  };

  // Explicit close (X button, backdrop, Escape) just clears the param —
  // it doesn't need to be a Back-able action.
  const closeSector = () => {
    router.replace(pathname, { scroll: false });
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeSector(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname]);

  // Portal overlay — rendered on document.body, fully outside the section
  const overlay = activeSector && mounted ? createPortal(
    <div className="fixed inset-0 z-[99999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#07111F]/96 backdrop-blur-xl transition-opacity duration-350"
        style={{ opacity: panelVisible ? 1 : 0 }}
        onClick={closeSector}
      />

      {/* Panel */}
      <div
        className="relative z-10 h-full overflow-y-auto transition-all duration-350"
        style={{ opacity: panelVisible ? 1 : 0, transform: panelVisible ? "translateY(0)" : "translateY(24px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-14">

          {/* TOP BAR */}
          <div className="flex items-start justify-between mb-8 sm:mb-14 gap-5">
            <div>
              {/* Back button on mobile */}
              <button
                onClick={closeSector}
                className="sm:hidden flex items-center gap-2 text-gray-400 hover:text-white text-[13px] mb-4 transition-colors"
              >
                <ArrowLeft size={14} /> Back
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] font-semibold">
                  {activeSector.title} Construction
                </p>
              </div>
              <h2 className="text-white text-[28px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05]">
                Explore Specialisations
              </h2>
            </div>

            {/* Close — visible on sm+ */}
            <button
              onClick={closeSector}
              className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/12 bg-white/5 items-center justify-center text-white hover:border-[#C89B3C]/50 hover:bg-white/10 transition-all duration-300 flex-shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {/* SUBSECTOR GRID */}
          {/* Mobile: 1 col | Tablet: 2 col | Desktop: 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {activeSector.subsectors.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                // Just release the scroll lock before leaving — do NOT
                // clear the `sector` param here, or the history entry
                // the back-button fix depends on gets wiped out before
                // the navigation even happens.
                onClick={() => { document.body.style.overflow = "auto"; }}
                className="group relative rounded-[22px] sm:rounded-[28px] overflow-hidden block cursor-pointer"
                style={{
                  height: "clamp(200px, 28vw, 300px)",
                  opacity:    panelVisible ? 1 : 0,
                  transform:  panelVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.45s ease ${i * 80}ms`,
                }}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/35 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                {/* Gold top bar on hover */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="text-white text-[18px] sm:text-[22px] lg:text-[26px] font-bold leading-tight mb-3 group-hover:text-[#C89B3C] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-[13px] sm:text-[14px] font-medium">Explore</p>
                    <span className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other sectors quick nav */}
          <div className="mt-10 pt-6 border-t border-white/8">
            <p className="text-gray-500 text-[12px] uppercase tracking-[3px] mb-4">Other Sectors</p>
            <div className="flex flex-wrap gap-3">
              {sectors.filter(s => s.title !== activeSector.title).map((s) => (
                <button
                  key={s.title}
                  onClick={() => switchSector(s)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#C89B3C]/40 transition-all duration-300 text-[13px]"
                >
                  <span>{s.icon}</span>
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background grid */}
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
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,0.07) 0%, transparent 65%)" }}
      />

      {/* SECTION HEADER */}
      <div className="relative text-center mb-10 lg:mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#C89B3C]" />
          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Industry Expertise</p>
          <span className="h-px w-8 bg-[#C89B3C]" />
        </div>
        <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] mb-4">
          Expertise Across<br />
          <span className="relative inline-block text-[#C89B3C]">
            Construction Markets
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C89B3C] opacity-20 rounded-full" />
          </span>
        </h2>
        <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto mb-8">
          Supporting contractors, developers, engineering consultancies and owners across the most competitive construction and infrastructure sectors.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {[["4","Core Sectors"],["20+","Specialisations"],["USA","Primary Market"]].map(([val, label]) => (
            <div key={label} className="bg-white border border-black/5 rounded-[18px] px-5 py-4 min-w-[110px] sm:min-w-[130px]">
              <h3 className="text-[#C89B3C] text-2xl font-bold">{val}</h3>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: horizontal scroll ── */}
      <div className="flex md:hidden gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {sectors.map((sector, i) => (
          <button
            key={i}
            onClick={() => openSector(sector)}
            className="group relative min-w-[82%] h-[240px] rounded-[24px] overflow-hidden cursor-pointer snap-start flex-shrink-0 border border-black/5 text-left"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${sector.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/50 to-[#07111F]/10" />
            <div className="absolute bottom-5 left-5 z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{sector.icon}</span>
                <h3 className="text-white text-[26px] font-bold">{sector.title}</h3>
              </div>
              <p className="text-gray-300 text-[13px] leading-5 mb-3 max-w-[220px]">{sector.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-white text-[13px] font-medium">Explore Sector</span>
                <span className="text-[#C89B3C]">→</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── DESKTOP: 4-column grid ── */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
        {sectors.map((sector, i) => (
          <SectorCard key={i} sector={sector} index={i} onClick={() => openSector(sector)} />
        ))}
      </div>

      {/* Portal overlay */}
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

function SectorCard({ sector, index, onClick }: {
  sector: typeof sectors[0]; index: number; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-[28px] overflow-hidden cursor-pointer text-left w-full border border-black/5"
      style={{
        height: "clamp(280px, 30vw, 380px)",
        boxShadow:  hovered ? "0 20px 60px rgba(0,0,0,0.18)" : "0 4px 20px rgba(0,0,0,0.06)",
        transform:  hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ backgroundImage: `url(${sector.image})`, transform: hovered ? "scale(1.08)" : "scale(1)" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/45 to-[#07111F]/10 transition-opacity duration-400"
        style={{ opacity: hovered ? 0.95 : 0.85 }} />

      {/* Gold top bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />

      {/* Ghost number */}
      <div className="absolute top-3 left-4 text-white/10 text-[64px] font-black leading-none select-none">
        0{index + 1}
      </div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{sector.icon}</span>
          <h3
            className="text-[32px] lg:text-[38px] font-bold leading-none transition-colors duration-300"
            style={{ color: hovered ? "#C89B3C" : "#fff" }}
          >
            {sector.title}
          </h3>
        </div>
        <p className="text-gray-300 text-[14px] leading-6 mb-4 max-w-[260px]">{sector.description}</p>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-[12px]">
            {sector.subsectors.length} Specialisations
          </div>
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0.6, transform: hovered ? "translateX(0)" : "translateX(-6px)" }}
          >
            <span className="text-white text-[14px] font-medium">Explore</span>
            <span className="text-[#C89B3C] text-lg">→</span>
          </div>
        </div>
      </div>
    </button>
  );
}