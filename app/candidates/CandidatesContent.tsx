"use client";

import { useEffect, useState, useRef } from "react";
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

const marqueeItems = [
  "PROJECT EXECUTIVE","PROJECT MANAGER","SUPERINTENDENT","ESTIMATOR",
  "PRECONSTRUCTION","MEP MANAGER","COMMISSIONING","VDC LEADER",
  "QUALITY MANAGER","SAFETY DIRECTOR","DATA CENTER PM","HEALTHCARE LEADER",
];

const opportunityCards = [
  { sector: "Healthcare Construction", role: "Project Executive",      salary: "$180K+", bg: "#0f2a1e", accent: "#3ecf78"  },
  { sector: "Data Center Construction", role: "Senior Superintendent",  salary: "$170K+", bg: "#0f1e2e", accent: "#5ab4f5"  },
  { sector: "Mission Critical",         role: "MEP Director",           salary: "$220K+", bg: "#2a1a10", accent: "#f5a623"  },
  { sector: "Commercial Construction",  role: "Preconstruction Manager",salary: "$165K+", bg: "#1a1028", accent: "#a78cf5"  },
];

const candidateJourney = [
  { step: "01", title: "Career Consultation",    icon: "🎯", 
    description: "We take time to understand your experience, career goals, preferred markets, and long-term aspirations before anything else." },
  { step: "02", title: "Market Alignment",        icon: "🧭", 
    description: "Our team identifies opportunities that align with your technical expertise, leadership experience, and career objectives." },
  { step: "03", title: "Opportunity Matching",    icon: "🤝", 
    description: "We connect you with organisations where your skills and experience can create meaningful, long-term impact." },
  { step: "04", title: "Interview Preparation",   icon: "📋", 
    description: "Guidance, market insights, and preparation support to help you perform confidently throughout the hiring process." },
  { step: "05", title: "Offer Negotiation",        icon: "💼", 
    description: "We assist with compensation discussions, expectations, and offer evaluation to support informed career decisions." },
  { step: "06", title: "Long-Term Career Growth", icon: "🚀", 
    description: "Our relationship continues beyond placement as we support your future career progression and leadership opportunities." },
];

const testimonials = [
  { role: "Project Executive",    
    market: "Healthcare Construction", 
    quote: "RUDRON introduced me to a leadership opportunity that aligned perfectly with my long-term goals and project experience." },
  { role: "Senior Superintendent",
    market: "Data Centers",            
    quote: "The team provided exceptional support throughout the process and helped me secure a role on a major mission-critical project." },
  { role: "MEP Director",         
    market: "Mission Critical",        
    quote: "Their understanding of the construction market made the entire process efficient, professional, and highly targeted." },
];

const featuredPaths = [
  { title: "Project Management",  
    icon: "📐", 
    desc: "Lead complex projects from planning through completion across commercial, healthcare and mission-critical markets." },
  { title: "Superintendents",     
    icon: "🏗️", 
    desc: "Drive field operations, site execution and project delivery for leading construction organizations." },
  { title: "Preconstruction",     
    icon: "📊", 
    desc: "Support estimating, planning, budgeting and procurement activities on high-value projects." },
  { title: "MEP Leadership",      
    icon: "⚡", 
    desc: "Oversee critical mechanical, electrical and plumbing systems across complex facilities." },
  { title: "Executive Leadership",
    icon: "🏆", 
    desc: "Strategic opportunities for directors, VPs and executive leaders shaping organizational growth." },
  { title: "Mission Critical",    
    icon: "🖥️", 
    desc: "Join high-performance teams delivering data centers and mission-critical facilities nationwide." },
];

export default function CandidatesContent() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  const { ref: growthRef,   inView: growthInView }   = useInView(0.05);
  const { ref: pathsRef,    inView: pathsInView }    = useInView(0.05);
  const { ref: journeyRef,  inView: journeyInView }  = useInView(0.05);
  const { ref: storiesRef,  inView: storiesInView }  = useInView(0.05);

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* ══════════════════════════════════════
          HERO — unchanged as requested
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{ backgroundImage: "url('/candidates/candidates-hero.webp')", transform: heroVisible ? "scale(1.05)" : "scale(1)" }}
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
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Candidates</p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>
              <h1 className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-4 transition-all duration-700 delay-150"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}>
                Connecting<br />Professionals With<br />
                <span className="relative inline-block text-[#C89B3C]">
                  Industry-Leading Roles
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />
                </span>
              </h1>
              <p className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                RUDRON partners with leading construction, engineering and mission-critical organizations to connect 
                exceptional professionals with career-defining opportunities across North America.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}>
                {["Project Management","Superintendents","Estimating","MEP Leadership","Executive Search","Data Centers"].map((item) => (
                  <span key={item} 
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white hover:border-[#C89B3C]/40 transition-all duration-300">
                    {item}
                    </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 max-w-[620px] transition-all duration-700 delay-700"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                {[["Executive","Roles"],["Mission Critical","Projects"],["Nationwide","Opportunities"]].map((item) => (
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
          CAREER GROWTH — fully rebuilt
      ══════════════════════════════════════ */}
      <section className="py-6 lg:py-10 px-5 sm:px-6 bg-[#F4F4F0] overflow-hidden">
        <div ref={growthRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div
            className="lg:sticky lg:top-28 self-start transition-all duration-700"
            style={{ opacity: growthInView ? 1 : 0, transform: growthInView ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Career Growth</p>
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[50px] font-bold leading-[1.06] mb-5">
              Build The Career<br />You've Been<br />
              <span className="text-[#C89B3C]">Working Toward</span>
            </h2>
            <div className="w-14 h-[3px] bg-[#C89B3C] rounded-full mb-7" />
            <div className="space-y-4 text-gray-500 text-[15px] sm:text-[16px] leading-7">
              <p>Whether you're seeking larger projects, leadership opportunities, higher compensation, or long-term 
                career growth — our team is committed to identifying opportunities aligned with your professional goals.
                </p>
              <p>We partner with leading contractors, developers, engineering consultancies, 
                mission-critical operators, and owners across healthcare, commercial, industrial, infrastructure, 
                and data center markets.
                </p>
              <p>Our goal is simple: connect exceptional professionals with exceptional opportunities.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "100+", label: "Placements"  },
                { value: "95%",  label: "Retention"   },
                { value: "4",    label: "Countries"   },
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
            style={{ opacity: growthInView ? 1 : 0, transform: growthInView ? "translateX(0)" : "translateX(28px)" }}
          >
            {/* Ambient glow behind cards */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,155,60,0.07),transparent_65%)] pointer-events-none" />

            <div className="grid grid-cols-2 gap-4">
              {opportunityCards.map((card, i) => (
                <OpportunityCard key={card.role} card={card} index={i} inView={growthInView} />
              ))}
            </div>

            {/* Connecting line decoration */}
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
          FEATURED CAREER PATHS
      ══════════════════════════════════════ */}
      <section className="py-6 lg:py-10 px-5 sm:px-6 bg-[#F4F4F0] overflow-hidden">
        <div ref={pathsRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: pathsInView ? 1 : 0, transform: pathsInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Featured Career Paths</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              Opportunities Across Every Stage<br />Of Your Construction Career
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPaths.map((item, i) => (
              <PathCard key={item.title} item={item} index={i} inView={pathsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CANDIDATE JOURNEY — fully rebuilt
      ══════════════════════════════════════ */}
      <section className="bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6 relative overflow-hidden">

        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(200,155,60,0.07),transparent_60%)] pointer-events-none" />

        <div ref={journeyRef} className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: journeyInView ? 1 : 0, transform: journeyInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Candidate Journey</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06] mb-5">
              Supporting Your Career<br />
              <span className="text-[#C89B3C]">Every Step Of The Way</span>
            </h2>
            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-xl mx-auto">
              A structured, transparent, and candidate-first process from first conversation to long-term career growth.
            </p>
          </div>

          {/* Journey grid — 2 col on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {candidateJourney.map((item, i) => (
              <JourneyCard
                key={item.step}
                item={item}
                index={i}
                inView={journeyInView}
                isActive={activeStep === i}
                onHover={(v) => setActiveStep(v ? i : null)}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div
            className="flex items-center justify-center gap-2 mt-12 transition-all duration-700 delay-700"
            style={{ opacity: journeyInView ? 1 : 0 }}
          >
            {candidateJourney.map((_, i) => (
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
          SUCCESS STORIES
      ══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div ref={storiesRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: storiesInView ? 1 : 0, transform: storiesInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Success Stories</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              Career Growth In Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-[24px] p-7 border border-black/5 overflow-hidden transition-all duration-400"
                style={{
                  opacity:    storiesInView ? 1 : 0,
                  transform:  storiesInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 130}ms, transform 0.5s ease ${i * 130}ms, box-shadow 0.3s, border 0.3s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,155,60,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,60,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = storiesInView ? "translateY(0)" : "translateY(24px)";
                }}
              >
                <div className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-[40px] text-[#C89B3C] font-serif leading-none mb-4 opacity-30">"</div>
                <p className="text-gray-500 text-[15px] leading-7 mb-6 italic">"{item.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] font-bold text-[14px]">
                    {item.role[0]}
                  </div>
                  <div>
                    <p className="text-[#07111F] text-[14px] font-bold">{item.role}</p>
                    <p className="text-[#C89B3C] text-[12px]">{item.market}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />

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

/* ── Opportunity card ── */
function OpportunityCard({ card, index, inView }: {
  card: typeof opportunityCards[0]; index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
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
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-400"
        style={{
          background: `linear-gradient(90deg, ${card.accent}, transparent)`,
          opacity: hovered ? 0.8 : 0.3,
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full transition-all duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${card.accent}20, transparent 70%)`,
          transform: hovered ? "scale(1.8)" : "scale(1)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p
          className="text-[12px] font-semibold uppercase tracking-[2px] mb-3 transition-colors duration-300"
          style={{ color: card.accent }}
        >
          {card.sector}
        </p>
        <h3 className="text-white text-[17px] font-bold mb-4 leading-snug">{card.role}</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-400 text-[11px] uppercase tracking-[2px] mb-0.5">Avg. Compensation</p>
            <p
              className="text-[28px] font-bold leading-none transition-colors duration-300"
              style={{ color: hovered ? card.accent : "#fff" }}
            >
              {card.salary}
            </p>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background:   hovered ? card.accent : "rgba(255,255,255,0.07)",
              color:        hovered ? "#07111F"   : "rgba(255,255,255,0.5)",
              transform:    hovered ? "rotate(45deg) scale(1.1)" : "rotate(0deg) scale(1)",
            }}
          >
            ↗
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Journey card ── */
function JourneyCard({ item, index, inView, isActive, onHover }: {
  item: typeof candidateJourney[0]; index: number; inView: boolean;
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
      {/* Animated top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
        style={{
          background:     "linear-gradient(90deg, #C89B3C, #E8B84B)",
          transform:      isActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin:"left",
        }}
      />

      {/* Side accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full transition-all duration-500"
        style={{
          background: "linear-gradient(to bottom, #C89B3C, transparent)",
          opacity:    isActive ? 1 : 0,
        }}
      />

      <div className="p-6 sm:p-7 flex items-start gap-5">

        {/* Step badge */}
        <div
          className="flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-400"
          style={{
            background: isActive ? "#C89B3C" : "rgba(200,155,60,0.1)",
            border:     isActive ? "none"     : "1px solid rgba(200,155,60,0.2)",
          }}
        >
          <span className="text-xl leading-none mb-0.5">{item.icon}</span>
          <span
            className="text-[10px] font-bold tracking-[1px]"
            style={{ color: isActive ? "#07111F" : "#C89B3C" }}
          >
            {item.step}
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-[17px] sm:text-[19px] font-bold mb-2 leading-snug transition-colors duration-300"
            style={{ color: isActive ? "#C89B3C" : "#fff" }}
          >
            {item.title}
          </h3>
          <p className="text-gray-400 text-[14px] leading-[1.75]">{item.description}</p>
        </div>

        {/* Connector arrow */}
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400 self-center"
          style={{
            background: isActive ? "rgba(200,155,60,0.15)" : "transparent",
            color:      isActive ? "#C89B3C" : "rgba(255,255,255,0.15)",
          }}
        >
          →
        </div>
      </div>

      {/* Active glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(200,155,60,0.06), transparent 60%)",
          opacity:    isActive ? 1 : 0,
        }}
      />
    </div>
  );
}

/* ── Path card ── */
function PathCard({ item, index, inView }: { item: typeof featuredPaths[0]; index: number; inView: boolean }) {
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
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s ease" }} />
      <div className="absolute right-4 top-1 text-[80px] font-black text-black/[0.03] select-none leading-none">0{index + 1}</div>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.1)" : "rgba(0,0,0,0.04)" }}
      >
        {item.icon}
      </div>
      <p className="text-[11px] font-bold tracking-[3px] uppercase mb-2" style={{ color: hovered ? "#C89B3C" : "rgba(200,155,60,0.6)" }}>
        0{index + 1}
      </p>
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