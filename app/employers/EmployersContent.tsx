"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

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

const marqueeItems = ["DATA CENTERS","HEALTHCARE","COMMERCIAL","INDUSTRIAL","INFRASTRUCTURE","LIFE SCIENCES","MISSION CRITICAL","MANUFACTURING"];

const challengeCards = [
  { title: "Talent Shortages",       desc: "Competition for skilled construction professionals continues to intensify across nearly every region.", icon: "👥", bg: "#0f1e2e", accent: "#5ab4f5" },
  { title: "Leadership Gaps",        desc: "Critical executive vacancies can directly impact project performance, profitability, and growth.",       icon: "🏆", bg: "#2a1a10", accent: "#f5a623" },
  { title: "Specialized Hiring",     desc: "Technical construction roles require highly targeted, industry-specific recruitment strategies.",         icon: "🎯", bg: "#1a1028", accent: "#a78cf5" },
  { title: "Mission Critical Growth",desc: "Data center and hyperscale expansion is creating unprecedented demand for specialized talent.",            icon: "🖥️", bg: "#0f2a1e", accent: "#3ecf78" },
];

const recruitmentSolutions = [
  { number: "01", title: "Executive Search",      icon: "🏆", desc: "Leadership hiring solutions for senior construction, engineering and operational professionals." },
  { number: "02", title: "Project Staffing",      icon: "📋", desc: "Project-focused recruitment support for contractors, developers and engineering organizations." },
  { number: "03", title: "MEP Recruitment",       icon: "⚡", desc: "Specialized recruitment across mechanical, electrical and plumbing disciplines." },
  { number: "04", title: "Mission Critical Hiring",icon: "🖥️", desc: "Supporting data center, hyperscale and mission-critical project delivery teams." },
  { number: "05", title: "Direct Hire",           icon: "✅", desc: "Permanent placement solutions focused on long-term retention and cultural alignment." },
  { number: "06", title: "Contract Staffing",     icon: "🔄", desc: "Flexible staffing solutions supporting urgent and project-driven hiring needs." },
];

const deliveryProcess = [
  { step: "01", title: "Discovery & Strategy",     icon: "🔍", description: "We begin by understanding your organization, project requirements, hiring objectives, and growth plans." },
  { step: "02", title: "Market Mapping",            icon: "🗺️", description: "Our team conducts targeted research to identify relevant talent pools, competitors, and market opportunities." },
  { step: "03", title: "Talent Identification",     icon: "🎯", description: "We proactively engage highly qualified professionals aligned with your technical and cultural requirements." },
  { step: "04", title: "Candidate Shortlisting",    icon: "📋", description: "Only the most suitable candidates are presented through a structured and efficient process." },
  { step: "05", title: "Interview Management",      icon: "🤝", description: "We coordinate interviews, provide market insights, and maintain candidate engagement throughout the process." },
  { step: "06", title: "Placement & Retention",     icon: "🚀", description: "Our support extends beyond placement to ensure successful onboarding and long-term hiring outcomes." },
];

const employerAdvantages = [
  { title: "Industry Specialization",   icon: "🏗️", desc: "Recruiters who live and breathe AEC & MEP — not generalists guessing at your requirements." },
  { title: "National Talent Network",   icon: "🌎", desc: "Access to a deep, pre-vetted talent pool across major North American construction markets." },
  { title: "Passive Candidate Access",  icon: "🔓", desc: "We reach top performers who aren't actively browsing job boards but are open to the right move." },
  { title: "Market Intelligence",       icon: "📊", desc: "Real-time salary benchmarks, hiring trends, and competitor insight inform every search." },
  { title: "Speed & Precision",         icon: "⚡", desc: "Streamlined process from discovery to offer — built for time-sensitive project hiring." },
  { title: "Long-Term Partnerships",    icon: "🤝", desc: "We measure success by retention and growth, not just placements made." },
];

export default function EmployersContent() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  const { ref: challengesRef,  inView: challengesInView }  = useInView(0.05);
  const { ref: solutionsRef,   inView: solutionsInView }   = useInView(0.05);
  const { ref: processRef,     inView: processInView }     = useInView(0.05);
  const { ref: advantagesRef,  inView: advantagesInView }  = useInView(0.05);

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <Navbar />

      {/* ══════════════════════════════════════
          HERO — unchanged
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{ backgroundImage: "url('/employers/employers-hero.webp')", transform: heroVisible ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
          style={{ background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)", opacity: heroVisible ? 0.6 : 0 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3 mb-6 transition-all duration-700"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(18px)" }}>
                <span className="h-px w-10 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Employers</p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>
              <h1 className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.02] mb-6 transition-all duration-700 delay-150"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}>
                Building High-Performing<br />Teams Across<br />
                <span className="relative inline-block text-[#C89B3C]">
                  AEC & MEP Markets
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />
                </span>
              </h1>
              <p className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                RUDRON delivers specialist recruitment solutions across construction, engineering, infrastructure, mission critical and MEP sectors, helping organizations secure the talent needed to drive growth and project success.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}>
                {["Executive Search","Project Staffing","Data Centers","Healthcare","Mission Critical","MEP"].map((item) => (
                  <span key={item} className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white hover:border-[#C89B3C]/40 transition-all duration-300">{item}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 max-w-[620px] transition-all duration-700 delay-700"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                {[["Executive","Search"],["Project","Staffing"],["AEC + MEP","Markets"]].map((item) => (
                  <div key={item[0]} className="bg-white/[0.04] border border-white/10 rounded-[18px] backdrop-blur-md p-4">
                    <h3 className="text-[#C89B3C] text-md lg:text-xl font-bold">{item[0]}</h3>
                    <p className="text-gray-400 text-[11px] lg:text-sm">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TALENT CHALLENGES — rebuilt
      ══════════════════════════════════════ */}
      <section className="py-6 lg:py-10 px-5 sm:px-6 bg-[#F4F4F0] overflow-hidden">
        <div ref={challengesRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div
            className="lg:sticky lg:top-28 self-start transition-all duration-700"
            style={{ opacity: challengesInView ? 1 : 0, transform: challengesInView ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Talent Challenges</p>
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[50px] font-bold leading-[1.06] mb-5">
              Hiring In Construction<br />Has Never Been<br />
              <span className="text-[#C89B3C]">More Competitive</span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C89B3C] rounded-full mb-7" />
            <div className="space-y-4 text-gray-500 text-[15px] sm:text-[16px] leading-7">
              <p>Construction organizations face increasing pressure to secure highly skilled professionals while managing aggressive project schedules, labor shortages, and rapidly evolving market demands.</p>
              <p>Whether you're hiring executive leadership, project management, field operations, MEP specialists, or mission-critical talent — success depends on accessing the right professionals at the right time.</p>
              <p>RUDRON helps organizations overcome talent acquisition challenges through targeted recruitment strategies and industry-focused market expertise.</p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "48hr", label: "Avg. Response"   },
                { value: "92%",  label: "Fill Rate"        },
                { value: "10+",  label: "Sectors Covered"  },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-black/5 rounded-[16px] p-4 text-center">
                  <p className="text-[#C89B3C] text-[22px] font-bold leading-none mb-1">{value}</p>
                  <p className="text-gray-400 text-[11px] uppercase tracking-[2px]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — redesigned floating cards */}
          <div
            className="relative transition-all duration-700 delay-200"
            style={{ opacity: challengesInView ? 1 : 0, transform: challengesInView ? "translateX(0)" : "translateX(28px)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,155,60,0.07),transparent_65%)] pointer-events-none" />

            <div className="grid grid-cols-2 gap-4">
              {challengeCards.map((card, i) => (
                <ChallengeCard key={card.title} card={card} index={i} inView={challengesInView} />
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.06]">
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C89B3C" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C89B3C" strokeWidth="1" strokeDasharray="4 6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/65 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}</span>
              <span className="text-[#C89B3C] text-[7px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          RECRUITMENT SOLUTIONS
      ══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={solutionsRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Recruitment Solutions</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              Specialized Hiring Solutions<br />For Modern Construction Markets
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recruitmentSolutions.map((item, i) => (
              <SolutionCard key={item.number} item={item} index={i} inView={solutionsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DELIVERY PROCESS — rebuilt
      ══════════════════════════════════════ */}
      <section className="bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6 relative overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(200,155,60,0.07),transparent_60%)] pointer-events-none" />

        <div ref={processRef} className="max-w-7xl mx-auto relative z-10">

          <div
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: processInView ? 1 : 0, transform: processInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">How We Deliver Talent</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06] mb-5">
              A Strategic Approach<br />
              <span className="text-[#C89B3C]">To Talent Acquisition</span>
            </h2>
            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-xl mx-auto">
              A structured, transparent, end-to-end recruitment process built for project-driven hiring timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {deliveryProcess.map((item, i) => (
              <ProcessCard
                key={item.step}
                item={item}
                index={i}
                inView={processInView}
                isActive={activeStep === i}
                onHover={(v) => setActiveStep(v ? i : null)}
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center gap-2 mt-12 transition-all duration-700 delay-700"
            style={{ opacity: processInView ? 1 : 0 }}
          >
            {deliveryProcess.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width:      activeStep === i ? "28px" : "8px",
                  height:     "8px",
                  background: activeStep === i ? "#C89B3C" : "rgba(200,155,60,0.25)",
                }}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EMPLOYER ADVANTAGES
      ══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div ref={advantagesRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: advantagesInView ? 1 : 0, transform: advantagesInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Why Employers Partner With RUDRON</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              Expertise. Relationships.<br />
              <span className="text-[#C89B3C]">Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {employerAdvantages.map((item, i) => (
              <AdvantageCard key={item.title} item={item} index={i} inView={advantagesInView} />
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
        @keyframes floatA {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </main>
  );
}

/* ── Challenge card (floating) ── */
function ChallengeCard({ card, index, inView }: {
  card: typeof challengeCards[0]; index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        background: `linear-gradient(135deg, ${card.bg}, #07111F)`,
        border: hovered ? `1px solid ${card.accent}40` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 20px 50px ${card.accent}18` : "0 4px 20px rgba(0,0,0,0.2)",
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms, border 0.3s, box-shadow 0.3s`,
        animationName: inView ? (isEven ? "floatA" : "floatB") : "none",
        animationDuration: `${4.5 + index * 0.4}s`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDelay: `${index * 0.8}s`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)`, opacity: hovered ? 0.8 : 0.3 }}
      />
      <div
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full transition-all duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${card.accent}20, transparent 70%)`, transform: hovered ? "scale(1.8)" : "scale(1)" }}
      />

      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-all duration-300"
          style={{ background: hovered ? `${card.accent}22` : "rgba(255,255,255,0.06)" }}
        >
          {card.icon}
        </div>
        <h3
          className="text-[15px] font-bold mb-2 leading-snug transition-colors duration-300"
          style={{ color: hovered ? card.accent : "#fff" }}
        >
          {card.title}
        </h3>
        <p className="text-gray-400 text-[12.5px] leading-[1.7]">{card.desc}</p>
      </div>

      <div
        className="absolute bottom-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? card.accent : "rgba(255,255,255,0.06)",
          color:      hovered ? "#07111F"   : "rgba(255,255,255,0.4)",
          transform:  hovered ? "rotate(45deg) scale(1.1)" : "rotate(0deg) scale(1)",
        }}
      >
        ↗
      </div>
    </div>
  );
}

/* ── Solution card ── */
function SolutionCard({ item, index, inView }: { item: typeof recruitmentSolutions[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        border:     hovered ? "1px solid rgba(200,155,60,0.35)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow:  hovered ? "0 16px 50px rgba(200,155,60,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
        opacity:    inView ? 1 : 0,
        transform:  inView ? hovered ? "translateY(-5px)" : "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border 0.3s, box-shadow 0.3s`,
      }}
    >
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />
      <div className="absolute right-4 -top-3 text-[80px] font-black text-black/[0.03] select-none leading-none">{item.number}</div>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.1)" : "rgba(0,0,0,0.04)" }}
      >
        {item.icon}
      </div>
      <p className="text-[11px] font-bold tracking-[3px] mb-2" style={{ color: hovered ? "#C89B3C" : "rgba(200,155,60,0.6)" }}>{item.number}</p>
      <h3
        className="text-[17px] font-bold mb-3 leading-snug transition-colors duration-300"
        style={{ color: hovered ? "#C89B3C" : "#07111F" }}
      >
        {item.title}
      </h3>
      <p className="text-gray-500 text-[14px] leading-[1.75]">{item.desc}</p>
    </div>
  );
}

/* ── Process card (delivery process) ── */
function ProcessCard({ item, index, inView, isActive, onHover }: {
  item: typeof deliveryProcess[0]; index: number; inView: boolean;
  isActive: boolean; onHover: (v: boolean) => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative rounded-[24px] overflow-hidden cursor-default"
      style={{
        background:  isActive ? "rgba(200,155,60,0.07)" : "rgba(13,23,38,0.9)",
        border:      isActive ? "1px solid rgba(200,155,60,0.4)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow:   isActive ? "0 16px 50px rgba(200,155,60,0.1)" : "0 4px 16px rgba(0,0,0,0.2)",
        opacity:     inView ? 1 : 0,
        transform:   inView ? isActive ? "translateY(-4px)" : "translateY(0)" : "translateY(28px)",
        transition:  `opacity 0.6s ease ${index * 90}ms, transform 0.45s ease ${index * 90}ms, border 0.3s, background 0.3s, box-shadow 0.3s`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
        style={{ background: "linear-gradient(90deg, #C89B3C, #E8B84B)", transform: isActive ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }}
      />
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full transition-all duration-500"
        style={{ background: "linear-gradient(to bottom, #C89B3C, transparent)", opacity: isActive ? 1 : 0 }}
      />

      <div className="p-6 sm:p-7 flex items-start gap-5">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-400"
          style={{ background: isActive ? "#C89B3C" : "rgba(200,155,60,0.1)", border: isActive ? "none" : "1px solid rgba(200,155,60,0.2)" }}
        >
          <span className="text-xl leading-none mb-0.5">{item.icon}</span>
          <span className="text-[10px] font-bold tracking-[1px]" style={{ color: isActive ? "#07111F" : "#C89B3C" }}>{item.step}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] sm:text-[19px] font-bold mb-2 leading-snug transition-colors duration-300" style={{ color: isActive ? "#C89B3C" : "#fff" }}>
            {item.title}
          </h3>
          <p className="text-gray-400 text-[14px] leading-[1.75]">{item.description}</p>
        </div>

        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400 self-center"
          style={{ background: isActive ? "rgba(200,155,60,0.15)" : "transparent", color: isActive ? "#C89B3C" : "rgba(255,255,255,0.15)" }}
        >
          →
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(200,155,60,0.06), transparent 60%)", opacity: isActive ? 1 : 0 }}
      />
    </div>
  );
}

/* ── Advantage card ── */
function AdvantageCard({ item, index, inView }: { item: typeof employerAdvantages[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        border:     hovered ? "1px solid rgba(200,155,60,0.35)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow:  hovered ? "0 16px 50px rgba(200,155,60,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
        opacity:    inView ? 1 : 0,
        transform:  inView ? hovered ? "translateY(-5px)" : "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border 0.3s, box-shadow 0.3s`,
      }}
    >
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />
      <div className="absolute right-4 top-1 text-[64px] font-black text-black/[0.03] select-none leading-none">0{index + 1}</div>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.1)" : "rgba(0,0,0,0.04)" }}
      >
        {item.icon}
      </div>
      <h3
        className="text-[17px] font-bold mb-3 leading-snug transition-colors duration-300"
        style={{ color: hovered ? "#C89B3C" : "#07111F" }}
      >
        {item.title}
      </h3>
      <p className="text-gray-500 text-[14px] leading-[1.75]">{item.desc}</p>
    </div>
  );
}