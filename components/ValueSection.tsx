"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    number: "01",
    title: "Industry Specialists",
    description:
      "Dedicated recruiters focused exclusively on construction, engineering, MEP and mission critical markets.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Executive Search",
    description:
      "Supporting confidential leadership and executive hiring across high-growth construction sectors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Quality Over Volume",
    description:
      "We prioritize long-term success and cultural alignment over transactional placements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Partnership Approach",
    description:
      "Building trusted relationships with clients and candidates through transparency and consistency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Growth Focused",
    description:
      "Helping businesses secure talent capable of supporting long-term project and organizational growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ValueSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.05);

  return (
    <section className="relative bg-[#F4F4F0] py-8 lg:py-14 px-5 sm:px-8 lg:px-20 overflow-hidden">

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

      {/* ── HEADER ── */}
      <div
        ref={headerRef}
        className="relative text-center mb-4 lg:mb-8"
      >
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 mb-4 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="h-px w-8 bg-[#C89B3C]" />
          <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">
            Our Approach
          </p>
          <span className="h-px w-8 bg-[#C89B3C]" />
        </div>

        {/* Headline */}
        <h2
          className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-[1.02] mb-6 transition-all duration-700 delay-100"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          Recruitment Solutions{" "}
          <span
            className="relative inline-block"
            style={{ color: "#C89B3C" }}
          >
            That Create Value
            {/* Underline accent */}
            <span
              className="absolute bottom-0 left-0 h-[3px] bg-[#C89B3C] rounded-full transition-all duration-1000 delay-500"
              style={{
                width: headerInView ? "100%" : "0%",
                opacity: 0.15,
              }}
            />
          </span>
        </h2>

        {/* Body */}
        <p
          className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 mb-4"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          A recruitment strategy built around market expertise, long-term
          partnerships and exceptional talent delivery.
        </p>
      </div>

      {/* ── GRID ── */}
      <div
        ref={gridRef}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {items.map((item, i) => (
          <Card key={item.number} item={item} index={i} inView={gridInView} />
        ))}
      </div>

    </section>
  );
}

function Card({
  item,
  index,
  inView,
}: {
  item: (typeof items)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        border: hovered ? "1px solid rgba(200,155,60,0.4)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow: hovered
          ? "0 20px 60px rgba(200,155,60,0.12), 0 4px 16px rgba(0,0,0,0.06)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: inView
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(32px)",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, border 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {/* Giant ghost number */}
      <div
        className="absolute -right-2 -top-2 text-[88px] font-black leading-none select-none pointer-events-none transition-all duration-500"
        style={{
          color: hovered ? "rgba(200,155,60,0.08)" : "rgba(0,0,0,0.04)",
        }}
      >
        {item.number}
      </div>

      {/* Gold top bar — animates in on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-all duration-500"
        style={{
          background: "linear-gradient(90deg, #C89B3C, #E8B84B)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />

      {/* Icon */}
      <div
        className="relative mb-5 transition-all duration-300"
        style={{
          color: hovered ? "#C89B3C" : "#07111F",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? "rgba(200,155,60,0.1)" : "rgba(7,17,31,0.05)",
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Number label */}
      <p
        className="text-xs font-bold tracking-[3px] uppercase mb-3 transition-colors duration-300"
        style={{ color: hovered ? "#C89B3C" : "#C89B3C99" }}
      >
        {item.number}
      </p>

      {/* Title */}
      <h3
        className="text-[#07111F] text-[17px] font-bold mb-3 leading-snug transition-colors duration-300"
        style={{ color: hovered ? "#07111F" : "#1a2a3a" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-[14px] leading-[1.35] relative z-10">
        {item.description}
      </p>

      {/* Bottom fill on hover */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(200,155,60,0.05) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}