"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const insights = [
  { title: "2026 Construction Hiring Trends",              image: "/insights/construction-trends.webp",  category: "Market Insights",    slug: "construction-hiring-trends",      read: "6 min read" },
  { title: "The Growing Demand for Data Center Talent",    image: "/insights/datacenter-talent.webp",    category: "Industry News",      slug: "data-center-construction-hiring", read: "7 min read" },
  { title: "MEP Salary & Workforce Insights",              image: "/insights/mep-salary.webp",           category: "Salary Guides",      slug: "mep-talent-shortage",             read: "5 min read" },
  { title: "Commercial Construction Market Outlook",       image: "/insights/commercial-outlook.webp",   category: "Commercial",         slug: "commercial-construction-outlook", read: "6 min read" },
  { title: "Executive Search Strategies For Contractors",  image: "/insights/executive-search.webp",     category: "Executive Search",   slug: "executive-search-construction",   read: "8 min read" },
  { title: "Infrastructure Talent Shortages Continue",     image: "/insights/infrastructure-talent.webp",category: "Infrastructure",     slug: "infrastructure-talent-shortage",  read: "5 min read" },
  { title: "Q3 2026 Construction Salary Benchmark Report",       image: "/insights/salary-benchmark-q3.webp",     category: "Market Insights",  slug: "q3-2026-salary-benchmark-report",           read: "6 min read" },
  { title: "Reshoring Fuels Industrial Construction Boom",       image: "/insights/reshoring-industrial.webp",    category: "Industry News",    slug: "reshoring-manufacturing-industrial-construction", read: "6 min read" },
  { title: "Superintendent Compensation Trends By Market",      image: "/insights/superintendent-comp.webp",     category: "Salary Guides",    slug: "superintendent-compensation-trends",        read: "5 min read" },
  { title: "Healthcare Construction Regulatory Complexity",     image: "/insights/healthcare-regulatory.webp",   category: "Commercial",       slug: "healthcare-construction-regulatory-complexity", read: "7 min read" },
  { title: "Succession Planning For Construction Leadership",   image: "/insights/succession-planning.webp",     category: "Executive Search", slug: "succession-planning-construction-leadership", read: "7 min read" },
  { title: "Bridge & Transportation Hiring Outlook",             image: "/insights/bridge-transportation.webp",   category: "Infrastructure",   slug: "bridge-transportation-infrastructure-hiring", read: "6 min read" },
];

const intelligenceTopics = [
  { title: "Data Center Expansion",  desc: "Hyperscale growth continues driving unprecedented demand for mission critical talent across North America.",    icon: "🏗️" },
  { title: "MEP Talent Shortages",   desc: "Technical construction professionals remain among the hardest roles to fill in today's competitive market.",   icon: "⚡" },
  { title: "Executive Hiring",       desc: "Leadership recruitment continues shaping long-term organizational growth and project pipeline capacity.",       icon: "🏆" },
  { title: "Infrastructure Growth",  desc: "Public investment and modernization programs are significantly increasing hiring demand across civil markets.", icon: "🌐" },
];

const resources = [
  { title: "Engineering News-Record",      desc: "Construction industry news, rankings, and market analysis.",                           link: "https://www.enr.com",                   icon: "📰" },
  { title: "Construction Dive",            desc: "Daily construction news and industry trend insights.",                                 link: "https://www.constructiondive.com",       icon: "🏛️" },
  { title: "Data Center Frontier",         desc: "Mission critical infrastructure and hyperscale market intelligence.",                  link: "https://www.datacenterfrontier.com",     icon: "💡" },
  { title: "Associated General Contractors", desc: "Construction workforce reports and economic data.",                                  link: "https://www.agc.org",                   icon: "📊" },
];


const categories = [
  { number: "01", title: "Market Insights",  icon: "📈" },
  { number: "02", title: "Salary Guides",    icon: "💰" },
  { number: "03", title: "Industry News",    icon: "📰" },
  { number: "04", title: "Executive Search", icon: "🎯" },
  { number: "05", title: "Commercial",       icon: "🏙️" },
  { number: "06", title: "Infrastructure",   icon: "🌉" },
];

const marqueeItems = ["SALARY GUIDES","HIRING TRENDS","DATA CENTERS","EXECUTIVE SEARCH","INFRASTRUCTURE","MEP","COMMERCIAL","MISSION CRITICAL"];

const categoryColors: Record<string, string> = {
  "Market Insights":  "#C89B3C",
  "Industry News":    "#3ecfb2",
  "Salary Guides":    "#b7a8e4",
  "Commercial":       "#f5a623",
  "Executive Search": "#f06292",
  "Infrastructure":   "#64b5f6",
};

export default function InsightsContent() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  const { ref: dashRef,      inView: dashInView }      = useInView();
  const { ref: featuredRef,  inView: featuredInView }  = useInView();
  const { ref: gridRef,      inView: gridInView }      = useInView();
  const { ref: catRef,       inView: catInView }       = useInView();
  const { ref: resourcesRef, inView: resourcesInView } = useInView();

  const allCategories = ["All", ...Array.from(new Set(insights.map(i => i.category)))];
  const filteredInsights = activeCategory === "All"
    ? insights
    : insights.filter(i => i.category === activeCategory);

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <Navbar />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center overflow-hidden">

        {/* Background with Ken Burns */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{
              backgroundImage: "url('/insights/featured-insight.webp')",
              transform: heroVisible ? "scale(1.06)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.028]"
          style={{
            backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Gold left bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-600"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C 30%, #C89B3C 70%, transparent)",
            opacity: heroVisible ? 0.6 : 0,
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,155,60,0.08),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 lg:pt-28">
          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-2 transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Industry Intelligence</p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-4 transition-all duration-700 delay-150"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)" }}
            >
              Construction<br />
              <span className="relative inline-block text-[#C89B3C]">
                Market Intelligence
                <span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#C89B3C] transition-all duration-1000 delay-700"
                  style={{ width: heroVisible ? "100%" : "0%", opacity: 0.3 }}
                />
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-gray-300 text-[14px] sm:text-[16px] leading-8 max-w-[620px] mb-10 transition-all duration-700 delay-300"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(18px)" }}
            >
              Explore construction hiring trends, salary intelligence, executive search insights and workforce developments shaping the future of AEC, MEP, infrastructure and mission critical recruitment.
            </p>

            {/* Stat pills */}
            <div
              className="flex flex-wrap gap-3 transition-all duration-700 delay-[450ms]"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(14px)" }}
            >
              {[
                { value: "25+",    label: "Market Reports" },
                { value: "Weekly", label: "Updates" },
                { value: "10+",    label: "Sectors" },
                { value: "6",      label: "Categories" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/6 border border-white/12 backdrop-blur-sm">
                  <span className="text-[#C89B3C] font-bold text-[16px]">{value}</span>
                  <span className="text-gray-300 text-[13px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/65 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}</span>
              <span className="text-[#C89B3C] text-[7px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          MARKET INTELLIGENCE DASHBOARD
      ════════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div ref={dashRef} className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-3 mb-5 transition-all duration-700"
              style={{ opacity: dashInView ? 1 : 0, transform: dashInView ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Market Intelligence</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2
              className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.05] mb-5 transition-all duration-700 delay-100"
              style={{ opacity: dashInView ? 1 : 0, transform: dashInView ? "translateY(0)" : "translateY(20px)" }}
            >
              What Construction Leaders<br />
              <span className="text-[#C89B3C]">Are Watching</span>
            </h2>
            <p
              className="text-gray-500 text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto transition-all duration-700 delay-200"
              style={{ opacity: dashInView ? 1 : 0, transform: dashInView ? "translateY(0)" : "translateY(16px)" }}
            >
              Workforce trends, compensation strategies, leadership hiring patterns and emerging sectors shaping recruitment across the built environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {intelligenceTopics.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-[24px] p-6 border border-black/5 overflow-hidden cursor-default"
                style={{
                  opacity:    dashInView ? 1 : 0,
                  transform:  dashInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 110}ms, transform 0.5s ease ${i * 110}ms`,
                  boxShadow:  "0 2px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(200,155,60,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,60,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                {/* Hover top bar */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-11 h-11 rounded-xl bg-[#07111F]/5 group-hover:bg-[#C89B3C]/10 flex items-center justify-center text-xl mb-5 transition-all duration-300">{item.icon}</div>
                <p className="text-[#C89B3C] text-[11px] font-bold tracking-[3px] uppercase mb-3">0{i + 1}</p>
                <h3 className="text-[#07111F] text-[18px] font-bold mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURED REPORT
      ════════════════════════════════════════ */}
      <section id="featured" className="bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={featuredRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Image */}
            <div
              className="relative rounded-[28px] overflow-hidden h-[280px] sm:h-[380px] lg:h-[480px] transition-all duration-700"
              style={{ opacity: featuredInView ? 1 : 0, transform: featuredInView ? "translateX(0)" : "translateX(-28px)" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
                style={{
                  backgroundImage: "url('/insights/featured-insight.webp')",
                  transform: featuredInView ? "scale(1.04)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/60 to-transparent" />
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89B3C]/90 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[#07111F] text-[12px] font-bold uppercase tracking-[2px]">Featured Report</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="transition-all duration-700 delay-200"
              style={{ opacity: featuredInView ? 1 : 0, transform: featuredInView ? "translateX(0)" : "translateX(28px)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="h-px w-6 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Featured Report</p>
              </div>
              <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.06] mb-5">
                AI Infrastructure &<br />The Future Of<br />
                <span className="text-[#C89B3C]">Construction Hiring</span>
              </h2>
              <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 mb-8">
                AI expansion, hyperscale development, and mission critical infrastructure are creating unprecedented demand for construction leadership and technical talent across North America and global markets.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: "$2.4T",  label: "US Infra Investment" },
                  { value: "340%",   label: "Data Center Growth" },
                  { value: "180K+",  label: "Jobs Projected" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/5 border border-white/8 rounded-[16px] p-3 text-center">
                    <p className="text-[#C89B3C] text-[20px] font-bold leading-none mb-1">{value}</p>
                    <p className="text-gray-400 text-[11px] leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.datacenterfrontier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#C89B3C] text-[#07111F] font-bold px-8 py-4 rounded-2xl hover:shadow-[0_8px_28px_rgba(200,155,60,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Industry Report
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          LATEST INSIGHTS GRID
      ════════════════════════════════════════ */}
      <section id="insights" className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={gridRef} className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div
              className="transition-all duration-700"
              style={{ opacity: gridInView ? 1 : 0, transform: gridInView ? "translateY(0)" : "translateY(18px)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Latest Insights</p>
              </div>
              <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.06]">
                Market Intelligence
              </h2>
            </div>

            {/* Category filter pills */}
            <div
              className="flex flex-wrap gap-2 transition-all duration-700 delay-200"
              style={{ opacity: gridInView ? 1 : 0 }}
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300"
                  style={{
                    background: activeCategory === cat ? "#07111F" : "rgba(0,0,0,0.05)",
                    color:      activeCategory === cat ? "#fff"    : "#666",
                    border:     activeCategory === cat ? "1px solid rgba(200,155,60,0.3)" : "1px solid transparent",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredInsights.map((item, i) => (
              <InsightCard key={item.slug} item={item} index={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CATEGORIES
      ════════════════════════════════════════ */}
      <section className="bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={catRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: catInView ? 1 : 0, transform: catInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Intelligence Categories</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06] mb-5">
              Explore By Topic
            </h2>
            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              Hiring trends, salary intelligence, workforce challenges, leadership recruitment, and sector-specific developments shaping the built environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((item, i) => {
              const articleCount = insights.filter((a) => a.category === item.title).length;
              return (
                <div
                  key={item.number}
                  onClick={() => {
                    setActiveCategory(item.title);
                    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group relative bg-[#0D1726] rounded-[24px] border border-white/6 p-6 overflow-hidden cursor-pointer hover:border-[#C89B3C]/30 transition-all duration-400"
                  style={{
                    opacity:    catInView ? 1 : 0,
                    transform:  catInView ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.6s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms, border 0.3s`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = catInView ? "translateY(0)" : "translateY(24px)"; }}
                >
                  <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute right-4 top-1 text-[72px] font-black text-white/[0.03] select-none">{item.number}</div>
 
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-[#C89B3C]/10 flex items-center justify-center text-xl transition-all duration-300">{item.icon}</div>
                    <span className="text-gray-500 text-[12px] border border-white/8 rounded-full px-3 py-1">
                      {articleCount} article{articleCount !== 1 ? "s" : ""}
                    </span>
                  </div>
 
                  <p className="text-[#C89B3C] text-[11px] font-bold tracking-[3px] uppercase mb-2">{item.number}</p>
                  <h3 className="text-white text-[18px] font-bold group-hover:text-[#C89B3C] transition-colors duration-300">{item.title}</h3>
 
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/0 to-transparent group-hover:via-[#C89B3C]/20 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INDUSTRY RESOURCES
      ════════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={resourcesRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: resourcesInView ? 1 : 0, transform: resourcesInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Industry Resources</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06] mb-5">
              Trusted Market Sources
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              Access trusted construction news, workforce intelligence, infrastructure insights, and industry-leading market analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-[24px] p-6 border border-black/5 overflow-hidden transition-all duration-400"
                style={{
                  opacity:    resourcesInView ? 1 : 0,
                  transform:  resourcesInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 110}ms, transform 0.5s ease ${i * 110}ms, box-shadow 0.3s, border 0.3s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(200,155,60,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,60,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = resourcesInView ? "translateY(0)" : "translateY(24px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                <div className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-11 h-11 rounded-xl bg-[#07111F]/5 group-hover:bg-[#C89B3C]/10 flex items-center justify-center text-xl mb-5 transition-all duration-300">{item.icon}</div>
                <div className="text-[#C89B3C] text-[22px] mb-3 group-hover:translate-x-1 transition-transform duration-300">↗</div>
                <h3 className="text-[#07111F] text-[17px] font-bold mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-6 mb-5">{item.desc}</p>
                <div className="flex items-center gap-2 text-[#C89B3C] text-[13px] font-semibold">
                  Visit Resource
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </main>
  );
}

function InsightCard({ item, index, inView }: { item: typeof insights[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const catColor = categoryColors[item.category] || "#C89B3C";

  return (
    <Link
      href={`/insights/${item.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-[24px] overflow-hidden flex flex-col"
      style={{
        border:     hovered ? "1px solid rgba(200,155,60,0.35)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow:  hovered ? "0 20px 60px rgba(200,155,60,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
        opacity:    inView ? 1 : 0,
        transform:  inView ? hovered ? "translateY(-6px)" : "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Image */}
      <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url(${item.image})`,
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Category chip */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px]"
          style={{ background: `${catColor}22`, color: catColor, border: `1px solid ${catColor}44`, backdropFilter: "blur(8px)" }}
        >
          {item.category}
        </div>
        {/* Read time */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px]">
          {item.read}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-[#07111F] text-[18px] sm:text-[20px] font-bold leading-snug mb-4 flex-1">{item.title}</h3>
        <div className="flex items-center justify-between pt-4 border-t border-black/5">
          <span className="text-[#07111F] text-[14px] font-semibold">Read Insight</span>
          <span
            className="w-8 h-8 rounded-full bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] transition-all duration-300"
            style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
          >
            →
          </span>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${catColor}, transparent)`,
          opacity: hovered ? 0.6 : 0,
        }}
      />
    </Link>
  );
}