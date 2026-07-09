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

const industries = [
  { name: "Commercial Construction",  icon: "🏢" },
  { name: "Data Centers",              icon: "🖥️" },
  { name: "Healthcare",                icon: "🏥" },
  { name: "Mission Critical",          icon: "⚡" },
  { name: "Industrial & Manufacturing",icon: "🏭" },
  { name: "Infrastructure",            icon: "🌉" },
  { name: "Transportation",            icon: "🚆" },
  { name: "MEP Contractors",           icon: "🔧" },
];

const expertiseCards = [
  { number: "01", title: "AEC Specialists",     icon: "🏗️", desc: "Dedicated construction and engineering recruitment expertise." },
  { number: "02", title: "National Reach",      icon: "🌎", desc: "Access to professionals across major construction markets." },
  { number: "03", title: "Relationship Driven", icon: "🤝", desc: "Long-term partnerships built through trust and consistency." },
  { number: "04", title: "Executive Search",    icon: "🏆", desc: "Supporting leadership and confidential hiring assignments." },
];

const performanceCards = [
  { number: "01", title: "Construction Expertise", icon: "🏗️", desc: "Deep market understanding across commercial, infrastructure, healthcare and mission critical sectors." },
  { number: "02", title: "Executive Search",        icon: "🏆", desc: "Supporting confidential leadership, operational and executive hiring assignments." },
  { number: "03", title: "Talent Mapping",          icon: "🗺️", desc: "Providing market intelligence and strategic talent insights before hiring decisions are made." },
  { number: "04", title: "Relationship Driven",     icon: "🤝", desc: "Building long-term partnerships through transparency, communication and trust." },
  { number: "05", title: "Nationwide Reach",        icon: "🌎", desc: "Access to highly qualified professionals across key construction markets." },
  { number: "06", title: "Quality Focused",         icon: "✅", desc: "Delivering candidates aligned with project requirements, culture and long-term growth objectives." },
];


export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const { ref: expertiseRef,   inView: expertiseInView }   = useInView(0.05);
  const { ref: storyRef,       inView: storyInView }       = useInView(0.05);
  const { ref: industriesRef,  inView: industriesInView }  = useInView(0.05);
  const { ref: foundationRef,  inView: foundationInView }  = useInView(0.05);
  const { ref: performanceRef, inView: performanceInView } = useInView(0.05);

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
            style={{ backgroundImage: "url('/about/about-hero.webp')", transform: heroVisible ? "scale(1.05)" : "scale(1)" }}
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
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">
                  About RUDRON</p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>
              <h1 className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-4 transition-all duration-700 delay-150"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}>
                Building The Teams<br />Behind The World's<br />
                <span className="relative inline-block text-[#C89B3C]">
                  Most Critical Projects
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />
                </span>
              </h1>
              <p className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                RUDRON Global Talent Solutions partners with construction, engineering, infrastructure and mission-critical 
                organizations to secure exceptional professionals, strengthen leadership teams and 
                support long-term business growth.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}>
                {["Commercial","Healthcare","Mission Critical","Infrastructure"].map((item) => (
                  <span key={item} className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white hover:border-[#C89B3C]/40 transition-all duration-300">{item}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 max-w-[620px] transition-all duration-700 delay-700"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                {[["100+","Placements Supported"],["4","Global Markets"],["20+","Industry Specialisations"]].map((item) => (
                  <div key={item[1]} className="bg-white/[0.04] border border-white/10 rounded-[18px] backdrop-blur-md p-4">
                    <h3 className="text-[#C89B3C] text-xl lg:text-2xl font-bold">{item[0]}</h3>
                    <p className="text-gray-400 text-[11px] lg:text-sm">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED EXPERTISE — animated
      ══════════════════════════════════════ */}
      <section className="relative bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div ref={expertiseRef} className="relative max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Trusted Expertise</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              Built Around Industry<br />
              <span className="relative inline-block text-[#C89B3C]">
                Knowledge
                <span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#C89B3C] transition-all duration-1000 delay-500"
                  style={{ width: expertiseInView ? "100%" : "0%", opacity: 0.25 }}
                />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseCards.map((item, i) => (
              <ExpertiseCard key={item.number} item={item} index={i} inView={expertiseInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STORY — animated timeline
      ══════════════════════════════════════ */}
      <section className="py-6 lg:py-10 px-5 sm:px-6 bg-[#07111F] overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at left, rgba(200,155,60,0.07) 0%, transparent 70%)" }}
        />

        <div ref={storyRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 relative">

          {/* LEFT CONTENT */}
          <div
            className="lg:sticky lg:top-28 self-start transition-all duration-700"
            style={{ opacity: storyInView ? 1 : 0, transform: storyInView ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">About RUDRON</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>

            <h2 className="text-[18px] sm:text-[24px] lg:text-[40px] font-bold leading-[1.08] mb-6">
              Rudron is a specialized AEC & MEP talent partner delivering<br />recruitment solutions to organizations, building the<br />
              <span className="text-[#C89B3C]">future of the built environment.</span>
            </h2>

            <div className="w-20 sm:w-32 h-[2px] bg-[#C89B3C] rounded-full mb-8" />

            <div className="space-y-5 text-[15px] sm:text-[16px] leading-7 lg:leading-8 text-gray-400">
              <p>Backed by 15+ years of hands-on industry experience, our team understands that hiring in construction goes far beyond filling a seat. 
                It requires identifying professionals with the technical expertise, project experience, 
                and leadership capability to perform in fast-moving,
                high-stakes project environments — and we built Rudron to do exactly that.
                </p>
              <h2 className="text-[18px] sm:text-[19px] font-bold leading-7 lg:leading-8 text-white">
                We support hiring across Ground-Up and Tenant Improvement (TI) projects 
                spanning multiple sectors, including:
                </h2>
                <p>
                🏗 Commercial & Mixed-Use Developments
                <br />
                ⚡ Mission Critical & Data Centers
                <br />
                🏥 Healthcare & Life Sciences
                <br />
                🏭 Industrial & Manufacturing Facilities
                <br />
                🏫 K-12 & Institutional Projects
                <br />
                🏘 Residential Construction
                <br />
                🛣 Civil & Infrastructure
                <br />
                </p>
              <p>
                We partner with: General Contractors | Specialty Contractors | MEP Contractors | Developers | EPC Firms | Engineering Consultancies | Owners' Representatives
              </p>
              <p>We work alongside contractors, engineering consultancies, developers, owners, manufacturers, 
                and mission-critical operators to identify professionals capable of delivering results across some of the 
                industry's most demanding projects.
                </p>

              <p>
                At Rudron, every search is built around project demands, technical alignment, delivery timelines, 
                and long-term business objectives — ensuring our clients get professionals who create immediate and lasting impact, 
                and our candidates get placed where they'll genuinely thrive.
              </p>

              <div className="w-90 sm:w-112 h-[0.5px] bg-[#C89B3C] rounded-full mb-4" />

              <h2 className="text-[18px] sm:text-[20px] font-bold leading-3 lg:leading-4">
              In construction, project success starts with the right people.
              <br />
              </h2>
              <h2 className="text-[18px] sm:text-[20px] font-bold leading-7 lg:leading-8 text-[#C89B3C]">
              Rudron — Building Teams Behind Tomorrow's Projects.
              <br />
              </h2>
            </div>

            {/* FEATURE BOX */}
            <div
              className="mt-8 bg-[#0D1726] border border-[#C89B3C]/15 rounded-[25px] p-5 sm:p-6 relative overflow-hidden transition-all duration-700 delay-300"
              style={{ opacity: storyInView ? 1 : 0, transform: storyInView ? "translateY(0)" : "translateY(16px)" }}
            >
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { abbr: "AEC", label: "Architecture, Engineering & Construction" },
                  { abbr: "MEP", label: "Mechanical, Electrical & Plumbing" },
                  { abbr: "DC",  label: "Mission Critical & Data Centers" },
                  { abbr: "INF", label: "Infrastructure & Transportation" },
                ].map(({ abbr, label }) => (
                  <div key={abbr}>
                    <p className="text-[#C89B3C] text-lg sm:text-xl lg:text-2xl font-bold">{abbr}</p>
                    <p className="text-gray-400 text-[13px] sm:text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

    {/* RIGHT MOVING TIMELINE */}

    <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">

      <div className="story-scroll space-y-6">

        {[
{
number:"01",
title:"The Beginning",
desc:"RUDRON was founded to challenge traditional recruitment models by creating a talent acquisition partner built specifically for construction, engineering, infrastructure and mission-critical markets. Our vision was to provide organizations with a more strategic hiring experience focused on long-term success."
},

          {
number:"02",
title:"Understanding The Industry",
desc:"Construction recruitment is fundamentally different from general recruitment. Every project requires highly specialized professionals, technical expertise, leadership capability and cultural alignment. We immersed ourselves in the sectors we serve to understand the challenges our clients face every day."
},

          {
number:"03",
title:"Supporting Complex Projects",
desc:"As projects became larger and more technically demanding, organizations required talent capable of delivering within fast-paced environments. We expanded our focus to support healthcare facilities, data centers, mission-critical developments, industrial manufacturing, transportation and infrastructure projects."
},

          {
number:"04",
title:"Building Meaningful Relationships",
desc:"Our success is built on relationships. We invest significant time understanding our clients' goals, culture, growth plans and project requirements while helping professionals navigate important career decisions with confidence."
},

          {
number:"05",
title:"A Network Built On Trust",
desc:"Over time we developed an extensive network of construction professionals, project leaders, estimators, engineers, project managers, superintendents, MEP specialists and executive leaders across key markets throughout North America."
},

          {
number:"06",
title:"Driving Long-Term Success",
desc:"We believe recruitment should create lasting impact. Every placement represents an opportunity to strengthen organizations, accelerate project delivery, improve operational performance and create meaningful career growth."
},

{
number:"07",
title:"The Future Of RUDRON",
desc:"As construction technologies evolve and workforce demands continue to change, RUDRON remains committed to helping organizations build resilient, high-performing teams capable of delivering the next generation of commercial, industrial and mission-critical projects."
},

          // DUPLICATE FOR INFINITE LOOP

          {
number:"01",
title:"The Beginning",
desc:"RUDRON was founded to challenge traditional recruitment models by creating a talent acquisition partner built specifically for construction, engineering, infrastructure and mission-critical markets. Our vision was to provide organizations with a more strategic hiring experience focused on long-term success."
},

          {
number:"02",
title:"Understanding The Industry",
desc:"Construction recruitment is fundamentally different from general recruitment. Every project requires highly specialized professionals, technical expertise, leadership capability and cultural alignment. We immersed ourselves in the sectors we serve to understand the challenges our clients face every day."
},

          {
number:"03",
title:"Supporting Complex Projects",
desc:"As projects became larger and more technically demanding, organizations required talent capable of delivering within fast-paced environments. We expanded our focus to support healthcare facilities, data centers, mission-critical developments, industrial manufacturing, transportation and infrastructure projects."
},

          {
number:"04",
title:"Building Meaningful Relationships",
desc:"Our success is built on relationships. We invest significant time understanding our clients' goals, culture, growth plans and project requirements while helping professionals navigate important career decisions with confidence."
},

          {
number:"05",
title:"A Network Built On Trust",
desc:"Over time we developed an extensive network of construction professionals, project leaders, estimators, engineers, project managers, superintendents, MEP specialists and executive leaders across key markets throughout North America."
},

          {
number:"06",
title:"Driving Long-Term Success",
desc:"We believe recruitment should create lasting impact. Every placement represents an opportunity to strengthen organizations, accelerate project delivery, improve operational performance and create meaningful career growth."
},

{
number:"07",
title:"The Future Of RUDRON",
desc:"As construction technologies evolve and workforce demands continue to change, RUDRON remains committed to helping organizations build resilient, high-performing teams capable of delivering the next generation of commercial, industrial and mission-critical projects."
},

        ].map((item, index) => (

          <div
            key={index}
            className="relative bg-[#0D1726]/90 backdrop-blur-xl border border-white/10 rounded-[24px]
            lg:rounded-[32px] p-5 sm:p-6 lg:p-8
            overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >

            <div className="absolute right-4 top-3 text-[70px] sm:text-[90px] lg:text-[120px] font-bold text-white/[0.04]">
              {item.number}
            </div>

            <p className="text-[#C89B3C] font-semibold mb-3">
              {item.number}
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-400 leading-6 lg:leading-8">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* TOP FADE */}

      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#07111F] to-transparent z-10" />

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent z-10" />

    </div>

  </div>

</section>

      {/* ══════════════════════════════════════
          INDUSTRIES — animated grid
      ══════════════════════════════════════ */}
      <section className="bg-[#0D1726] py-6 lg:py-10 px-5 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)", backgroundSize: "70px 70px" }}
        />

        <div ref={industriesRef} className="max-w-7xl mx-auto text-center relative">
          <div
            className="transition-all duration-700"
            style={{ opacity: industriesInView ? 1 : 0, transform: industriesInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Markets We Support</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-[1.05] mb-4">
              Specialized Recruitment Across Key<br />
              <span className="relative inline-block text-[#C89B3C]">
                Construction Sectors
                <span
                  className="absolute left-0 bottom-0 h-[3px] rounded-full bg-[#C89B3C] transition-all duration-1000 delay-500"
                  style={{ width: industriesInView ? "100%" : "0%", opacity: 0.25 }}
                />
              </span>
            </h2>
            <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mx-auto mb-10" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.name} industry={industry} index={i} inView={industriesInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION & VISION — animated
      ══════════════════════════════════════ */}
      <section className="relative bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,.08) 0%, transparent 70%)" }}
        />

        <div ref={foundationRef} className="relative max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: foundationInView ? 1 : 0, transform: foundationInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Our Foundation</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.05]">
              Purpose Driven.<span className="text-[#C89B3C]"> Future Focused.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* MISSION */}
            <div
              className="group relative bg-white rounded-[36px] p-8 lg:p-10 overflow-hidden border border-black/5 transition-all duration-700"
              style={{
                opacity:    foundationInView ? 1 : 0,
                transform:  foundationInView ? "translateY(0)" : "translateY(28px)",
                transitionDelay: "100ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,60,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = foundationInView ? "translateY(0)" : "translateY(28px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.05)"; }}
            >
              <div className="absolute right-4 top-0 text-[120px] font-black text-black/[0.03] leading-none">M</div>
              <div className="w-14 h-[2px] bg-[#C89B3C] mb-6" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs font-semibold mb-4">Mission</p>
              <h3 className="text-[#07111F] text-[26px] lg:text-[34px] font-bold leading-[1.15] mb-6">
                Building Teams That Deliver Exceptional Projects
              </h3>
              <p className="text-gray-500 leading-8 text-[15px]">
                Helping organizations secure exceptional talent while creating meaningful career opportunities across construction, engineering, infrastructure and mission-critical markets.
              </p>
            </div>

            {/* VISION */}
            <div
              className="group relative bg-[#07111F] rounded-[36px] p-8 lg:p-10 overflow-hidden border border-white/10 transition-all duration-700"
              style={{
                opacity:    foundationInView ? 1 : 0,
                transform:  foundationInView ? "translateY(0)" : "translateY(28px)",
                transitionDelay: "250ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,60,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = foundationInView ? "translateY(0)" : "translateY(28px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <div className="absolute right-4 top-0 text-[120px] font-black text-white/[0.03] leading-none">V</div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.1),transparent_50%)] pointer-events-none" />
              <div className="w-14 h-[2px] bg-[#C89B3C] mb-6 relative z-10" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs font-semibold mb-4 relative z-10">Vision</p>
              <h3 className="text-white text-[26px] lg:text-[34px] font-bold leading-[1.15] mb-6 relative z-10">
                Becoming The Most Trusted Construction Recruitment Partner
              </h3>
              <p className="text-gray-400 leading-8 text-[15px] relative z-10">
                To be recognized as a leading recruitment partner across North America and global construction markets by consistently delivering expertise, relationships and exceptional hiring outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CLIENTS CHOOSE US — animated
      ══════════════════════════════════════ */}
      <section className="relative bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)", backgroundSize: "70px 70px" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,.10) 0%, transparent 70%)" }}
        />

        <div ref={performanceRef} className="relative max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: performanceInView ? 1 : 0, transform: performanceInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">Why Organizations Choose RUDRON</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-white text-[28px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.05] mb-5">
              Recruitment Built For<span className="text-[#C89B3C]"> High Performance</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-[15px] lg:text-[17px] leading-8">
              We combine construction industry expertise, executive search capabilities and long-term partnership strategies to deliver exceptional hiring outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {performanceCards.map((item, i) => (
              <PerformanceCard key={item.number} item={item} index={i} inView={performanceInView} />
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
      <Footer />
    </main>
  );
}

/* ── Expertise card ── */
function ExpertiseCard({ item, index, inView }: { item: typeof expertiseCards[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#0D1726] border border-white/10 rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? hovered ? "translateY(-6px)" : "translateY(0)" : "translateY(24px)",
        borderColor: hovered ? "rgba(200,155,60,0.3)" : "rgba(255,255,255,0.1)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border 0.3s`,
      }}
    >
      <div className="absolute right-4 top-0 text-[80px] font-black text-white/[0.04] leading-none select-none">{item.number}</div>
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#C89B3C] origin-left transition-transform duration-500" style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.12)" : "rgba(255,255,255,0.05)" }}
      >
        {item.icon}
      </div>
      <p className="text-[#C89B3C] text-xs tracking-[3px] font-bold mb-3">{item.number}</p>
      <h3 className="text-white text-[19px] font-bold mb-3 transition-colors duration-300" style={{ color: hovered ? "#C89B3C" : "#fff" }}>{item.title}</h3>
      <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
    </div>
  );
}

/* ── Industry card ── */
function IndustryCard({ industry, index, inView }: { industry: typeof industries[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-[#07111F] border rounded-[24px] p-6 overflow-hidden cursor-default text-left"
      style={{
        borderColor: hovered ? "rgba(200,155,60,0.3)" : "rgba(255,255,255,0.1)",
        opacity:     inView ? 1 : 0,
        transform:   inView ? hovered ? "translateY(-6px)" : "translateY(0)" : "translateY(24px)",
        transition:  `opacity 0.6s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border 0.3s`,
      }}
    >
      <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] origin-left transition-transform duration-500" style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.12)" : "rgba(255,255,255,0.05)" }}
      >
        {industry.icon}
      </div>
      <h3 className="font-semibold text-[14px] sm:text-[15px] leading-snug transition-colors duration-300" style={{ color: hovered ? "#C89B3C" : "#fff" }}>
        {industry.name}
      </h3>
    </div>
  );
}

/* ── Performance card ── */
function PerformanceCard({ item, index, inView }: { item: typeof performanceCards[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white/[0.03] backdrop-blur-xl border rounded-[24px] p-7 overflow-hidden cursor-default"
      style={{
        borderColor: hovered ? "rgba(200,155,60,0.3)" : "rgba(255,255,255,0.1)",
        opacity:     inView ? 1 : 0,
        transform:   inView ? hovered ? "translateY(-6px)" : "translateY(0)" : "translateY(24px)",
        transition:  `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border 0.3s`,
      }}
    >
      <div className="absolute right-4 top-0 text-[80px] font-black text-white/[0.04] leading-none select-none">{item.number}</div>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.12)" : "rgba(255,255,255,0.05)" }}
      >
        {item.icon}
      </div>
      <div className="h-[2px] bg-[#C89B3C] mb-5 transition-all duration-500" style={{ width: hovered ? "80px" : "48px" }} />
      <p className="text-[#C89B3C] text-xs font-bold tracking-[3px] uppercase mb-4">{item.number}</p>
      <h3 className="text-white text-[22px] font-bold leading-tight mb-4 transition-colors duration-300" style={{ color: hovered ? "#C89B3C" : "#fff" }}>{item.title}</h3>
      <p className="text-gray-400 leading-7 text-[14px]">{item.desc}</p>
    </div>
  );
}