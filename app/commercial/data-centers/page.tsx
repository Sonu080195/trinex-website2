"use client";

import Navbar from "@/components/Navbar";
import SubpageCTA from "@/components/SubpageCTA";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

/* ─── tiny animation hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── data ─── */
const roles = [
  { title: "Project Managers", desc: "End-to-end delivery leaders for hyperscale, colo, and enterprise data center builds" },
  { title: "Mission Critical Superintendents", desc: "On-site execution specialists with live-environment and raised-floor experience" },
  { title: "Data Center Construction Managers", desc: "Owner's rep & CM professionals in mission critical infrastructure programs" },
  { title: "MEP Coordinators", desc: "Systems integration for power, cooling, and life-safety in critical environments" },
  { title: "Project Engineers", desc: "Document control, RFIs, and submittals for complex, fast-track data center scopes" },
  { title: "Estimators", desc: "Accurate cost modeling for hyperscale campus and colocation facility delivery" },
  { title: "Schedulers", desc: "Critical-path planning for accelerated timelines with zero tolerance for delay" },
  { title: "Safety Managers", desc: "Live-environment safety compliance in energized, high-density facilities" },
  { title: "Commissioning Specialists", desc: "Integrated systems testing, Cx planning, and go-live readiness across all tiers" },
];

const stats = [
  { value: "300+", label: "Data Center Projects Staffed" },
  { value: "38", label: "States Nationwide" },
  { value: "92%", label: "Placement Retention Rate" },
  { value: "14 Days", label: "Avg. Time-to-Hire" },
];

const expertise = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="26" height="6" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="3" y="13" width="26" height="6" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="3" y="21" width="26" height="6" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="25" cy="8" r="1.2" fill="#C89B3C"/>
        <circle cx="25" cy="16" r="1.2" fill="#C89B3C"/>
        <circle cx="25" cy="24" r="1.2" fill="#C89B3C"/>
      </svg>
    ),
    heading: "Hyperscale Campuses",
    body: "Hyperscale builds for cloud providers and social media platforms demand construction leaders who can manage multi-building programs, 24/7 accelerated schedules, and parallel work packages across enormous footprints without a single day of drift.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="11" height="11" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="17" y="4" width="11" height="11" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="4" y="17" width="11" height="11" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="17" y="17" width="11" height="11" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
      </svg>
    ),
    heading: "Colocation Facilities",
    body: "Colo builds require tight coordination with anchor tenants, phased shell-and-core delivery, and infrastructure designed for rapid customer fit-out. We place professionals who understand the commercial and technical pressures unique to multi-tenant critical facilities.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Z" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M4 16h24M16 4c-3 3-5 7.5-5 12s2 9 5 12M16 4c3 3 5 7.5 5 12s-2 9-5 12" stroke="#C89B3C" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Cloud Infrastructure",
    body: "Cloud infrastructure builds move fast and tolerate no schedule slippage—go-live dates are contractual, not aspirational. Our candidates have delivered for the world's largest cloud providers and know how to execute under that level of institutional scrutiny.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M10 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M6 17h20" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M12 22h8" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Enterprise Data Centers",
    body: "Corporate and financial enterprise data centers require professionals who can work within complex organizational structures, align with IT and facilities stakeholders, and deliver mission critical spaces that meet strict internal SLAs from day one.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3l2.5 8h8.5l-6.9 5 2.6 8L16 19l-6.7 5 2.6-8L5 11h8.5L16 3Z" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Commissioning & Go-Live",
    body: "Cx is where data center projects succeed or fail. We recruit commissioning specialists who manage integrated systems testing, BMS validation, generator load testing, and ATS sequencing—ensuring every system performs before the first server goes live.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="12" width="26" height="14" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M10 12V9a6 6 0 0 1 12 0v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="16" cy="19" r="2.5" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M16 21.5V24" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Occupied & Live-Environment Builds",
    body: "Expansions and retrofits inside operating data centers demand professionals who can work in energized environments, coordinate outage windows, maintain uptime guarantees, and execute with the kind of precision that prevents a misstep from becoming a facility-wide incident.",
  },
];

const differentiators = [
  {
    num: "01",
    heading: "Mission Critical–Specific Screening",
    body: "Every candidate we submit has verifiable data center or mission critical construction experience. We don't adapt commercial PMs into critical environments—we find professionals who already understand Tier requirements, critical path MEP sequencing, and the cost of a single day's delay.",
  },
  {
    num: "02",
    heading: "Speed Built for Fast-Track Schedules",
    body: "Data center timelines are among the most compressed in construction. Our pre-vetted pipeline means you're receiving qualified candidates within days—not weeks—so you're never holding a role open while your schedule burns.",
  },
  {
    num: "03",
    heading: "National Reach, Mission Critical Depth",
    body: "RUDRON operates across 38 states with a network built around mission critical talent. Whether you're delivering a hyperscale campus in Northern Virginia, a colo facility in Phoenix, or a cloud build in the Pacific Northwest, we have the relationships to move fast.",
  },
  {
    num: "04",
    heading: "Long-Term Fit Focus",
    body: "Our 92% retention rate reflects a recruiting process built on fit—understanding the project complexity, the team's culture, and the candidate's goals. The result is placements that stick through the full project cycle and beyond.",
  },
];

/* ─── component ─── */
export default function DataCenterPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const statsReveal = useReveal();
  const overviewReveal = useReveal();
  const expertiseReveal = useReveal();
  const rolesReveal = useReveal();
  const diffReveal = useReveal();

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes diag {
          from { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          to   { transform: translateX(0)     skewX(-12deg); opacity: 1; }
        }
        .reveal-child { opacity: 0; }
        .reveal-child.in { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) forwards; }
        .stat-bar { opacity: 0; }
        .stat-bar.in { animation: fadeIn 0.5s ease forwards; }
        .diag-stripe { opacity: 0; }
        .diag-stripe.in { animation: diag 0.9s cubic-bezier(.22,1,.36,1) forwards; }
        .role-card {
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
        }
        .role-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200,155,60,0.5);
          background: rgba(200,155,60,0.06);
        }
        .diff-card {
          transition: border-color 0.22s ease, background 0.22s ease;
        }
        .diff-card:hover {
          border-color: rgba(200,155,60,0.35);
          background: rgba(200,155,60,0.04);
        }
        .expertise-card {
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
        }
        .expertise-card:hover {
          transform: translateY(-3px);
          border-color: rgba(200,155,60,0.4);
          background: rgba(200,155,60,0.05);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-child, .stat-bar, .diag-stripe { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 22%, rgba(7,17,31,0.82) 50%, rgba(7,17,31,0.3) 100%), url('/subsector-pages/datacenter-hero.png')",
          }}
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className={`diag-stripe absolute top-0 left-[-8%] h-full w-[3px] bg-gradient-to-b from-transparent via-[#C89B3C]/20 to-transparent ${heroLoaded ? "in" : ""}`}
            style={{ animationDelay: "0.6s" }}
          />
          <div
            className={`diag-stripe absolute top-0 left-[-4%] h-full w-[1px] bg-gradient-to-b from-transparent via-[#C89B3C]/10 to-transparent ${heroLoaded ? "in" : ""}`}
            style={{ animationDelay: "0.75s" }}
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">
            <div className="max-w-[760px]">

              <p
                className={`reveal-child text-[#C89B3C] uppercase tracking-[5px] text-[11px] sm:text-xs mb-5 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.05s" }}
              >
                Commercial Construction Recruitment
              </p>

              <h1
                className={`reveal-child font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-7 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.15s" }}
              >
                Data Center
                <br />
                Construction
                <br />
                <span className="text-[#C89B3C]">Recruitment</span>
              </h1>

              <p
                className={`reveal-child text-gray-300 text-[14px] sm:text-[16px] leading-[1.85] max-w-[720px] mb-8 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.28s" }}
              >
                RUDRON partners with mission critical contractors and developers to place construction professionals built for the demands of hyperscale, colocation, and enterprise data center projects—where schedule compression, MEP complexity, and zero-downtime delivery are the standard.
              </p>

              <div
                className={`reveal-child flex flex-wrap gap-3 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b8882e] text-[#07111F] font-semibold text-[14px] px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Start a Search
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a
                  href="#roles"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C89B3C]/50 text-white text-[14px] px-6 py-3 rounded-full transition-colors duration-200"
                >
                  View Roles We Fill
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />
      </section>

      {/* ── STAT STRIP ── */}
      <div ref={statsReveal.ref} className="border-y border-white/8 bg-[#0A1520]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-bar px-6 py-8 text-center ${statsReveal.visible ? "in" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <p className="text-[28px] sm:text-[34px] font-bold text-[#C89B3C] leading-none mb-1">{s.value}</p>
                <p className="text-gray-400 text-[12px] sm:text-[13px] tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <section className="py-8 sm:py-10 lg:py-12 px-5 sm:px-6 lg:px-8">
        <div ref={overviewReveal.ref} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div>
            <p
              className={`reveal-child text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              Mission Critical Infrastructure
            </p>
            <h2
              className={`reveal-child text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.1] mb-7 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Built for the Speed and
              <br />Precision of Mission
              <br />
              <span className="text-[#C89B3C]">Critical Construction</span>
            </h2>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Data center construction operates at a different standard than any other sector. Schedules are compressed to extremes, MEP systems carry a level of redundancy and precision that requires specialist knowledge, and the cost of a single day's delay can exceed the total budget of a commercial office build.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Professionals in this sector must understand Uptime Institute Tier classifications, N+1 and 2N redundancy configurations, critical path MEP sequencing, generator load testing, ATS logic, and the commissioning processes that verify every system before a single server goes live. In occupied environments, they also manage live-environment protocols where an inadvertent power interruption has immediate, measurable business consequences.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              RUDRON was built to find those professionals. We maintain deep relationships with mission critical specialists who have delivered for the world's largest cloud providers, hyperscale operators, and enterprise clients—and we move fast enough to match the pace their projects demand.
            </p>
          </div>

          <div
            className={`reveal-child ${overviewReveal.visible ? "in" : ""}`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#0D1726] border border-white/10 p-8 sm:p-10">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] via-[#e4b84a] to-transparent" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-6">What Sets Data Center Construction Apart</p>
              <ul className="space-y-5">
                {[
                  ["Compressed, Zero-Tolerance Schedules", "Go-live dates in data center contracts are fixed and financially consequential. Late delivery doesn't just affect cost—it triggers penalties, delays revenue, and damages long-term client relationships."],
                  ["MEP Complexity & Redundancy Systems", "Power and cooling infrastructure in a Tier III or IV facility is exponentially more complex than standard commercial MEP. Critical path sequencing, load bank testing, and switchgear commissioning require deep specialist knowledge."],
                  ["Uptime & Live-Environment Risk", "Expansions in operating facilities require professionals who can coordinate outage windows, maintain uptime guarantees, and execute with precision in environments where a misstep becomes a business-continuity incident."],
                  ["Integrated Commissioning Process", "Cx in a data center isn't a phase—it's a discipline. Professionals must manage integrated systems testing, BMS validation, and go-live readiness across electrical, mechanical, fire suppression, and controls simultaneously."],
                ].map(([title, body], i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#C89B3C]/50 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <p className="text-white font-semibold text-[14px] mb-1">{title}</p>
                      <p className="text-gray-400 text-[13px] leading-[1.75]">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── EXPERTISE TILES ── */}
      <section className="py-8 sm:py-10 bg-[#09131F] px-5 sm:px-6 lg:px-8">
        <div ref={expertiseReveal.ref} className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p
              className={`reveal-child text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-4 ${expertiseReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              Sectors We Staff
            </p>
            <h2
              className={`reveal-child text-[26px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] max-w-xl ${expertiseReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Every Type of
              <span className="text-[#C89B3C]"> Mission Critical Build</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item, i) => (
              <div
                key={i}
                className={`reveal-child expertise-card bg-[#0D1726] border border-white/8 rounded-[20px] p-7 ${expertiseReveal.visible ? "in" : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="mb-5 w-12 h-12 rounded-[14px] bg-[#C89B3C]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-3">{item.heading}</h3>
                <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[1.8]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      <section id="roles" className="py-8 sm:py-10 lg:py-12 px-5 sm:px-6 lg:px-8">
        <div ref={rolesReveal.ref} className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p
              className={`reveal-child text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-4 ${rolesReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              Key Roles We Recruit
            </p>
            <h2
              className={`reveal-child text-[26px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] ${rolesReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              The Talent Behind
              <span className="text-[#C89B3C]"> Every Project</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, i) => (
              <div
                key={i}
                className={`reveal-child role-card bg-[#0D1726] border border-white/8 rounded-[18px] px-6 py-5 ${rolesReveal.visible ? "in" : ""}`}
                style={{ animationDelay: `${0.12 + i * 0.07}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] flex-shrink-0 w-2 h-2 rounded-full bg-[#C89B3C]" />
                  <div>
                    <p className="text-white font-semibold text-[15px] mb-1">{role.title}</p>
                    <p className="text-gray-400 text-[13px] leading-[1.7]">{role.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#09131F] px-5 sm:px-6 lg:px-8">
        <div ref={diffReveal.ref} className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

          <div className="lg:sticky lg:top-28">
            <p
              className={`reveal-child text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-5 ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              Why RUDRON
            </p>
            <h2
              className={`reveal-child text-[26px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] mb-6 ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Recruitment Built
              <br />for Mission
              <br />
              <span className="text-[#C89B3C]">Critical Delivery</span>
            </h2>
            <p
              className={`reveal-child text-gray-400 text-[14px] sm:text-[15px] leading-[1.85] ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              General staffing firms fill seats. RUDRON fills roles with professionals who understand what it means to deliver in a mission critical environment—where no delay is acceptable and no system failure goes unnoticed.
            </p>
          </div>

          <div className="space-y-5">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className={`reveal-child diff-card bg-[#0D1726] border border-white/8 rounded-[20px] p-7 ${diffReveal.visible ? "in" : ""}`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <span className="text-[#C89B3C]/40 font-bold text-[22px] leading-none font-mono flex-shrink-0">{d.num}</span>
                  <div>
                    <h3 className="text-white font-semibold text-[16px] mb-2">{d.heading}</h3>
                    <p className="text-gray-400 text-[14px] leading-[1.82]">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA BRIDGE ── */}
      <div className="relative py-7 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C]/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C89B3C]/50 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-2">Ready to move?</p>
            <p className="text-white font-bold text-[20px] sm:text-[24px] leading-snug">
              Let's find the right construction<br className="hidden sm:block" /> professionals for your next project.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b8882e] text-[#07111F] font-semibold text-[14px] px-7 py-3.5 rounded-full transition-colors duration-200"
          >
            Start a Search
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      <SubpageCTA />
      <Footer />
    </main>
  );
}