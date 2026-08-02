"use client";

import { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Layers3,
  SearchCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    number: "01",
    title: "Industry Specialists",
    description:
      "Dedicated recruiters focused exclusively on construction, engineering, MEP and mission-critical markets.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Executive Search",
    description:
      "Supporting confidential leadership and executive hiring across high-growth construction sectors.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Quality Over Volume",
    description:
      "We prioritize long-term success, technical relevance and cultural alignment over transactional placements.",
    icon: Star,
  },
  {
    number: "04",
    title: "Partnership Approach",
    description:
      "Building trusted relationships with clients and candidates through transparency and consistency.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Growth Focused",
    description:
      "Helping businesses secure talent capable of supporting long-term project and organizational growth.",
    icon: TrendingUp,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ValueSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden bg-[#F4F4F0] px-4 py-8 sm:px-4 lg:px-20 lg:py-10">
      {/* Background */}
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
      <div className="pointer-events-none absolute -left-24 bottom-[-150px] h-[280px] w-[280px] rounded-full bg-blue-500/[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-150px] h-[280px] w-[280px] rounded-full bg-[#C89B3C]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-6 text-center lg:mb-8"
        >
          <div
            className="mb-4 flex items-center justify-center gap-3 transition-all duration-700"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Our Approach
              </p>
            </div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2
            className="mb-5 text-[28px] font-bold leading-[1.02] text-[#07111F] transition-all duration-700 delay-100 sm:text-[36px] lg:text-[52px]"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView
                ? "translateY(0)"
                : "translateY(24px)",
            }}
          >
            Recruitment Solutions{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
              That Create Value

              <span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent transition-all duration-1000 delay-500"
                style={{
                  width: headerInView ? "100%" : "0%",
                  opacity: 0.22,
                }}
              />
            </span>
          </h2>

          <p
            className="mx-auto max-w-2xl text-[15px] leading-relaxed text-gray-500 transition-all duration-700 delay-200 sm:text-[17px]"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            A recruitment strategy built around market expertise, long-term
            partnerships and exceptional talent delivery.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {items.map((item, index) => (
            <ValueCard
              key={item.number}
              item={item}
              index={index}
              inView={gridInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  item,
  index,
  inView,
}: {
  item: (typeof items)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = item.icon;

  return (
    <article
      className="group relative min-h-[275px] cursor-default overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/40 hover:shadow-[0_20px_55px_rgba(200,155,60,0.12)]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Card effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,155,60,0.08),transparent_56%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="pointer-events-none absolute -right-2 -top-3 select-none text-[88px] font-black leading-none text-black/[0.035] transition-all duration-500 group-hover:scale-105 group-hover:text-[#C89B3C]/10">
        {item.number}
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.05] bg-[#07111F]/[0.045] text-[#07111F] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-[#C89B3C]/20 group-hover:bg-[#C89B3C]/10 group-hover:text-[#C89B3C]">
            <Icon size={22} strokeWidth={1.7} />
          </div>

          <span className="text-[10px] font-semibold tracking-[3px] text-[#C89B3C]/60 transition-colors duration-300 group-hover:text-[#C89B3C]">
            {item.number}
          </span>
        </div>

        <h3 className="mt-6 text-[17px] font-bold leading-snug text-[#1A2A3A] transition-colors duration-300 group-hover:text-[#07111F]">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-gray-500">
          {item.description}
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#C89B3C]/20 via-black/[0.04] to-transparent" />

        <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#C89B3C]/65 transition-colors duration-300 group-hover:text-[#C89B3C]">
          RUDRON Standard
        </div>
      </div>
    </article>
  );
}