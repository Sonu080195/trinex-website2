"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import JobsSidebar from "@/components/JobsSidebar";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";

/* ── tiny scroll-reveal hook ── */
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

const marqueeRoles = [
  "PROJECT EXECUTIVE","PROJECT MANAGER","SUPERINTENDENT","ESTIMATOR",
  "PRECONSTRUCTION","MEP LEADERSHIP","DATA CENTERS","HEALTHCARE",
  "MISSION CRITICAL","FIELD OPERATIONS",
];

const opportunityCards = [
  { sector: "Healthcare Construction", role: "Senior Project Manager", salary: "$185K+", color: "#1a3a2a" },
  { sector: "Mission Critical",        role: "MEP Superintendent",      salary: "$175K+", color: "#1a2a3a" },
  { sector: "Electrical Construction", role: "Field Operations Manager", salary: "$250K+", color: "#2a1a1a" },
  { sector: "Process Piping",          role: "Project Manager",         salary: "$180K+", color: "#1a1a2e" },
];

const whyCards = [
  { title: "Industry Specialists",    desc: "Dedicated recruiters focused exclusively on construction and engineering markets.", icon: "🎯" },
  { title: "Executive Opportunities", desc: "Access confidential leadership and executive search assignments.",                 icon: "🏆" },
  { title: "Career Guidance",         desc: "Strategic support throughout interviews, offers, and career transitions.",         icon: "🧭" },
  { title: "National Network",        desc: "Opportunities across major North American construction markets.",                   icon: "🌎" },
  { title: "Long-Term Relationships", desc: "We support careers, not just individual placements.",                              icon: "🤝" },
  { title: "Market Intelligence",     desc: "Gain insights into salaries, hiring trends and workforce demand.",                 icon: "📊" },
];

export default function JobsPage() {
  const [searchQuery,            setSearchQuery]            = useState("");
  const [selectedIndustry,       setSelectedIndustry]       = useState("");
  const [selectedSpecialisation, setSelectedSpecialisation] = useState("");
  const [selectedCountry,        setSelectedCountry]        = useState("");
  const [selectedState,          setSelectedState]          = useState("");
  const [selectedEmployment,     setSelectedEmployment]     = useState("");
  const [featuredOnly,           setFeaturedOnly]           = useState(false);
  const [urgentOnly,             setUrgentOnly]             = useState(false);
  const [heroVisible,            setHeroVisible]            = useState(false);
  const [activeFilter,           setActiveFilter]           = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const { ref: intelligenceRef, inView: intelligenceInView } = useInView();
  const { ref: featuredRef,     inView: featuredInView }     = useInView();
  const { ref: whyRef,          inView: whyInView }          = useInView();

  const filteredJobs = useMemo(() => {
    return jobs.filter((job: any) => {
      const content = `${job.title} ${job.company} ${job.location} ${job.description}
        ${job.responsibilities?.join(" ")} ${job.requirements?.join(" ")}
        ${job.specialisation} ${job.industry}`.toLowerCase();
      const qm  = !searchQuery || content.includes(searchQuery.toLowerCase());
      const im  = !selectedIndustry || job.industry === selectedIndustry;
      const sm  = !selectedSpecialisation || job.specialisation === selectedSpecialisation;
      const cm  = !selectedCountry || job.country === selectedCountry;
      const stm = !selectedState || job.state === selectedState;
      const em  = !selectedEmployment || job.type === selectedEmployment;
      const fm  = !featuredOnly || job.featured;
      const um  = !urgentOnly || job.urgent;
      return qm && im && sm && cm && stm && em && fm && um;
    });
  }, [searchQuery, selectedIndustry, selectedSpecialisation, selectedCountry, selectedState, selectedEmployment, featuredOnly, urgentOnly]);

  const featuredJobs = jobs.filter((j) => j.featured);

  const quickFilters = ["All", "Featured", "Urgent", "Full Time", "Executive"];

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center overflow-hidden">

        {/* Background with slow zoom */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{
              backgroundImage: "url('/jobs/jobs-hero.webp')",
              transform: heroVisible ? "scale(1.06)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
        </div>

        {/* Gold left accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-700"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C 30%, #C89B3C 70%, transparent)",
            opacity: heroVisible ? 0.55 : 0,
          }}
        />

        {/* Faint grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-12">
          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-6 transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(14px)" }}
            >
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Career Opportunities</p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-[1.02] text-[30px] sm:text-[40px] lg:text-[56px] mb-4 transition-all duration-700 delay-150"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(22px)" }}
            >
              Explore Construction<br />
              <span className="text-[#C89B3C]">Career Opportunities</span>
            </h1>

            {/* Body */}
            <p
              className="text-gray-300 text-[14px] sm:text-[16px] leading-8 max-w-[560px] mb-5 transition-all duration-700 delay-300"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(18px)" }}
            >
              Discover opportunities across commercial, industrial, infrastructure, mission critical, and executive construction sectors.
            </p>

            {/* Stat pills */}
            <div
              className="flex flex-wrap gap-3 transition-all duration-700 delay-[450ms]"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(14px)" }}
            >
              {[
                { value: `${jobs.length}`, label: "Live Roles" },
                { value: `${jobs.filter(j=>j.urgent).length}`, label: "Urgent" },
                { value: `${jobs.filter(j=>j.featured).length}`, label: "Featured" },
                { value: "4", label: "Countries" },
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

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {[...marqueeRoles, ...marqueeRoles, ...marqueeRoles].map((role, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/65 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{role}</span>
              <span className="text-[#C89B3C] text-[7px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          CAREER INTELLIGENCE
      ═══════════════════════════════════════ */}
      <section className="py-6 lg:py-10 px-5 sm:px-6 bg-[#F4F4F0] overflow-hidden">
        <div ref={intelligenceRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div
            className="transition-all duration-800"
            style={{ opacity: intelligenceInView ? 1 : 0, transform: intelligenceInView ? "translateX(0)" : "translateX(-28px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Career Intelligence</p>
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[50px] font-bold leading-[1.06] mb-6">
              The Best Opportunities<br />Aren't Always<br />
              <span className="text-[#C89B3C]">Advertised</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#C89B3C] rounded-full mb-7" />
            <div className="space-y-4 text-gray-500 text-[15px] sm:text-[17px] leading-7">
              <p>RUDRON partners with leading contractors, developers, mission critical operators, engineering consultancies and owners across North America.</p>
              <p>From project management and estimating to executive leadership and mission-critical construction, we connect professionals with career-defining opportunities.</p>
              <p>Explore opportunities aligned with your technical expertise, leadership experience, and long-term career goals.</p>
            </div>
          </div>

          {/* RIGHT — floating cards grid */}
          <div
            className="relative transition-all duration-800 delay-200"
            style={{ opacity: intelligenceInView ? 1 : 0, transform: intelligenceInView ? "translateX(0)" : "translateX(28px)" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {opportunityCards.map((card, i) => (
                <div
                  key={card.role}
                  className="rounded-[22px] p-5 border border-white/8 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#C89B3C]/30"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}, #07111F)`,
                    animation: "floatAlt 5s ease-in-out infinite",
                    animationDelay: `${i * 1.2}s`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
                  <p className="text-[#C89B3C] text-[12px] font-semibold mb-2 tracking-[1px]">{card.sector}</p>
                  <h3 className="text-white text-[15px] font-bold mb-3 leading-tight">{card.role}</h3>
                  <p className="text-[#C89B3C] text-[22px] font-bold">{card.salary}</p>
                </div>
              ))}
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(200,155,60,0.06),transparent_65%)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEARCH + FILTER BAR
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] px-5 sm:px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[24px] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-5 sm:p-7">

            {/* Quick filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {quickFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background: activeFilter === f ? "#07111F" : "rgba(0,0,0,0.04)",
                    color:      activeFilter === f ? "#fff"    : "#666",
                    border:     activeFilter === f ? "1px solid rgba(200,155,60,0.3)" : "1px solid transparent",
                  }}
                >
                  {f}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-2">
                <label className="flex items-center gap-2 text-[13px] text-gray-500 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={urgentOnly}
                    onChange={(e) => setUrgentOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#C89B3C]"
                  />
                  Urgent only
                </label>
              </div>
            </div>

            {/* Filters row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_180px_180px] gap-3">
              <div>
                <label className="text-[#07111F] text-[12px] font-semibold mb-2 block uppercase tracking-[2px]">Search</label>
                <input
                  type="text"
                  placeholder="Project Manager, BIM, Procore, Superintendent…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[50px] rounded-[14px] border border-gray-200 px-5 text-[#07111F] text-[14px] outline-none focus:border-[#C89B3C] transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-[#07111F] text-[12px] font-semibold mb-2 block uppercase tracking-[2px]">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full h-[50px] rounded-[14px] border border-gray-200 px-4 text-[#07111F] text-[14px] outline-none focus:border-[#C89B3C] transition-colors duration-200 bg-white"
                >
                  <option value="">All Industries</option>
                  <option value="Construction">Construction</option>
                  <option value="MEP">MEP</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                </select>
              </div>
              <div>
                <label className="text-[#07111F] text-[12px] font-semibold mb-2 block uppercase tracking-[2px]">Location</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full h-[50px] rounded-[14px] border border-gray-200 px-4 text-[#07111F] text-[14px] outline-none focus:border-[#C89B3C] transition-colors duration-200 bg-white"
                >
                  <option value="">All Locations</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UAE">UAE</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div>
                <label className="text-[#07111F] text-[12px] font-semibold mb-2 block uppercase tracking-[2px]">Type</label>
                <select
                  value={selectedEmployment}
                  onChange={(e) => setSelectedEmployment(e.target.value)}
                  className="w-full h-[50px] rounded-[14px] border border-gray-200 px-4 text-[#07111F] text-[14px] outline-none focus:border-[#C89B3C] transition-colors duration-200 bg-white"
                >
                  <option value="">All Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED JOBS
      ═══════════════════════════════════════ */}
      <section id="featured" className="bg-[#F4F4F0] py-6 pb-20 px-5 sm:px-6">
        <div ref={featuredRef} className="max-w-7xl mx-auto">

          <div
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: featuredInView ? 1 : 0, transform: featuredInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Featured Opportunities</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06] max-w-[820px] mx-auto mb-5">
              Executive & Construction Careers<br />Across Leading Markets
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              Explore high-impact opportunities across commercial construction, mission critical, healthcare, infrastructure, and executive leadership markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredJobs.slice(0, 3).map((job: any, i: number) => (
              <FeaturedJobCard key={job.slug} job={job} index={i} inView={featuredInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ALL JOBS
      ═══════════════════════════════════════ */}
      <section id="jobs" className="bg-[#07111F] py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">

          <JobsSidebar
            selectedIndustry={selectedIndustry}
            selectedSpecialisation={selectedSpecialisation}
            selectedCountry={selectedCountry}
            selectedState={selectedState}
            selectedEmployment={selectedEmployment}
            setSelectedIndustry={setSelectedIndustry}
            setSelectedSpecialisation={setSelectedSpecialisation}
            setSelectedCountry={setSelectedCountry}
            setSelectedState={setSelectedState}
            setSelectedEmployment={setSelectedEmployment}
          />

          <div>
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#C89B3C]" />
                    <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Career Marketplace</p>
                  </div>
                  <h2 className="text-white text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.06]">
                    Discover Opportunities<br />
                    <span className="text-[#C89B3C]">Aligned With Your Expertise</span>
                  </h2>
                </div>

                {/* Count badge */}
                <div className="bg-[#0D1726] border border-white/10 rounded-[18px] px-5 py-4 text-center min-w-[130px] flex-shrink-0">
                  <p className="text-gray-400 text-[10px] uppercase tracking-[2px] mb-1">Available</p>
                  <p className="text-white text-[28px] font-bold leading-none">{filteredJobs.length}</p>
                  <p className="text-[#C89B3C] text-[10px] uppercase tracking-[2px] mt-1">Roles</p>
                </div>
              </div>
              <p className="text-gray-400 text-[15px] leading-7 max-w-xl mt-4">
                Browse opportunities across construction, engineering, mission critical, healthcare, infrastructure and executive leadership sectors.
              </p>
            </div>

            {/* Job list */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job: any, i: number) => (
                  <JobCard
                    key={i}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    type={job.type}
                    industry={job.specialisation}
                    slug={job.slug}
                  />
                ))
              ) : (
                <div className="bg-[#0D1726] border border-white/8 rounded-[24px] p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-5 text-3xl">🔍</div>
                  <h3 className="text-white text-[24px] font-bold mb-3">No Matching Positions</h3>
                  <p className="text-gray-400 text-[14px] leading-7 max-w-md mx-auto">
                    Try adjusting your filters or search keywords to discover additional opportunities.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedIndustry(""); setSelectedCountry(""); setSelectedEmployment(""); }}
                    className="mt-6 px-6 py-2.5 rounded-xl border border-[#C89B3C]/40 text-[#C89B3C] text-[14px] hover:bg-[#C89B3C]/10 transition-all duration-300"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CANDIDATES CHOOSE RUDRON
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-20 lg:py-28 px-5 sm:px-6">
        <div ref={whyRef} className="max-w-7xl mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: whyInView ? 1 : 0, transform: whyInView ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-[11px] font-semibold">Why Candidates Choose RUDRON</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.06]">
              More Than Job Listings.<br />
              <span className="text-[#C89B3C]">A Career Partner.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} inView={whyInView} />
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
        @keyframes floatAlt {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
      `}</style>
    </main>
  );
}

/* ── Featured job card ── */
function FeaturedJobCard({ job, index, inView }: { job: any; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`/jobs/${job.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-[28px] overflow-hidden flex flex-col"
      style={{
        border:     hovered ? "1px solid rgba(200,155,60,0.4)"  : "1px solid rgba(0,0,0,0.06)",
        boxShadow:  hovered ? "0 20px 60px rgba(200,155,60,0.1)" : "0 2px 12px rgba(0,0,0,0.04)",
        opacity:    inView ? 1 : 0,
        transform:  inView ? hovered ? "translateY(-6px)" : "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 130}ms, transform 0.5s ease ${index * 130}ms, border 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Gold top bar */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-all duration-500"
        style={{
          background: "linear-gradient(90deg,#C89B3C,#E8B84B)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />

      {/* Ghost number */}
      <div className="absolute right-4 top-0 text-[88px] font-black text-black/[0.04] leading-none select-none pointer-events-none">
        0{index + 1}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[#C89B3C] text-[12px] font-semibold tracking-[1px] uppercase">Featured</span>
          {job.urgent && (
            <span className="bg-red-50 border border-red-100 text-red-500 text-[11px] font-semibold px-3 py-1 rounded-full">Urgent</span>
          )}
        </div>

        <h3 className="text-[#07111F] text-[20px] lg:text-[22px] font-bold leading-[1.2] mb-2">{job.title}</h3>
        <p className="text-gray-400 text-[14px] mb-6">{job.company}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "Location", value: job.location },
            { label: "Salary",   value: job.salary },
            { label: "Type",     value: job.type },
            { label: "Sector",   value: job.specialisation },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#F4F4F0] rounded-[14px] p-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-[1px] mb-1">{label}</p>
              <p className="text-[#07111F] text-[13px] font-semibold leading-tight">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-black/5">
          <span className="text-[#07111F] text-[14px] font-semibold">View Opportunity</span>
          <span
            className="w-8 h-8 rounded-full bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] transition-all duration-300"
            style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
          >
            →
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Why card ── */
function WhyCard({ item, index, inView }: { item: typeof whyCards[0]; index: number; inView: boolean }) {
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
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-all duration-500"
        style={{
          background: "linear-gradient(90deg,#C89B3C,#E8B84B)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{ background: hovered ? "rgba(200,155,60,0.12)" : "rgba(0,0,0,0.04)" }}
      >
        {item.icon}
      </div>
      <h3 className="text-[#07111F] text-[17px] font-bold mb-3 leading-snug">{item.title}</h3>
      <p className="text-gray-500 text-[14px] leading-[1.75]">{item.desc}</p>
    </div>
  );
}