"use client";

import SubpageCTA from "@/components/SubpageCTA";
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
  { title: "Project Managers", desc: "End-to-end delivery leaders for office towers, campuses, and mixed-use developments" },
  { title: "Office Building Superintendents", desc: "On-site execution specialists with Class-A commercial and urban core experience" },
  { title: "Commercial Construction Managers", desc: "Owner's rep & CM professionals across base-building and tenant programs" },
  { title: "Project Engineers", desc: "Document control, RFIs, and submittals for complex multi-floor commercial builds" },
  { title: "MEP Coordinators", desc: "Systems integration for HVAC, electrical, and life-safety in high-rise environments" },
  { title: "Estimators", desc: "Accurate cost modeling for speculative and build-to-suit office developments" },
  { title: "Schedulers", desc: "Critical-path planning across base-building, core-and-shell, and TI phases" },
  { title: "Safety Managers", desc: "Urban site safety specialists with high-rise and occupied-building compliance experience" },
  { title: "Tenant Improvement Specialists", desc: "Fast-track TI delivery leaders coordinating between landlords, tenants, and base-building teams" },
];

const stats = [
  { value: "38", label: "States Nationwide" },
  { value: "95%", label: "Placement Retention Rate" },
  { value: "14 Days", label: "Avg. Time-to-Hire" },
];

const expertise = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="2" width="16" height="28" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M8 8h16M8 14h16M8 20h16" stroke="#C89B3C" strokeWidth="1.3"/>
        <rect x="13" y="24" width="6" height="6" rx="0.5" stroke="#C89B3C" strokeWidth="1.4"/>
      </svg>
    ),
    heading: "Class-A Office Towers",
    body: "High-rise office construction requires professionals who can manage structural steel programs, curtain wall sequencing, complex MEP risers, and vertical logistics across dozens of floors—while maintaining the finish quality that Class-A tenants demand.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="13" height="20" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="17" y="4" width="13" height="26" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M8 10V7M23 4V2" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Corporate Campuses",
    body: "Multi-building corporate campuses demand master scheduling expertise, phased occupancy coordination, and infrastructure sequencing across site utilities, structured parking, amenity buildings, and interconnected office facilities—often while initial phases are already occupied.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="26" height="26" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M3 14h26M14 3v26" stroke="#C89B3C" strokeWidth="1.4"/>
        <rect x="17" y="17" width="8" height="8" rx="1" stroke="#C89B3C" strokeWidth="1.3"/>
      </svg>
    ),
    heading: "Tenant Improvements",
    body: "TI projects are fast, high-stakes, and politically complex—landlords, tenants, base-building engineers, and move-in dates all converging simultaneously. We place TI specialists who can run parallel scopes, manage punchlist pressure, and deliver finished spaces on the day the lease starts.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="26" height="20" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M3 13h26" stroke="#C89B3C" strokeWidth="1.4"/>
        <rect x="8" y="17" width="6" height="5" rx="0.5" stroke="#C89B3C" strokeWidth="1.3"/>
        <rect x="18" y="17" width="6" height="5" rx="0.5" stroke="#C89B3C" strokeWidth="1.3"/>
        <path d="M11 6V3M21 6V3" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Mixed-Use Developments",
    body: "Mixed-use projects layer office, retail, residential, and structured parking into a single program—each with different codes, finish standards, and occupancy timelines. We find professionals who can hold all of that complexity together without letting one component slip.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 28V10l12-8 12 8v18" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="12" y="16" width="8" height="12" rx="1" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M4 10h24" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M12 22h8" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Build-to-Suit Developments",
    body: "BTS office projects are designed around a single tenant's operational requirements and carry hard delivery obligations. Professionals on these projects must balance owner accountability, design evolution, and lease-date certainty—all at once.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M4 12h24M4 20h24" stroke="#C89B3C" strokeWidth="1.3"/>
        <path d="M12 4v24M20 4v24" stroke="#C89B3C" strokeWidth="1.3"/>
      </svg>
    ),
    heading: "Core-and-Shell Delivery",
    body: "Core-and-shell construction is the foundation every tenant improvement builds on. We staff the project leaders who deliver base buildings—structure, envelope, lobbies, and vertical systems—with the precision that makes downstream TI programs run smoothly.",
  },
];

const differentiators = [
  {
    num: "01",
    heading: "Commercial Office–Specific Screening",
    body: "Every candidate we submit has verifiable experience in commercial office construction—Class-A towers, TI programs, or corporate campuses. We don't generalize; we match professionals to the specific building type, scale, and delivery method your project requires.",
  },
  {
    num: "02",
    heading: "Speed Matched to Development Timelines",
    body: "Office development moves fast, and open roles cost schedule. Our pre-vetted pipeline means you're reviewing qualified candidates within days—not weeks—so your project team is complete before the critical path demands it.",
  },
  {
    num: "03",
    heading: "National Reach, Urban Market Depth",
    body: "RUDRON operates across 38 states with strong networks in the nation's most active office markets—New York, Chicago, Dallas, Los Angeles, Atlanta, and beyond. If your project is in a major market, we have relationships with the talent already working there.",
  },
  {
    num: "04",
    heading: "Long-Term Fit Focus",
    body: "Our 92% retention rate comes from recruiting with the full picture in mind—project scope, team culture, delivery risk, and career trajectory. The result is placements that perform through the full project lifecycle, not just the first few months.",
  },
];

/* ─── component ─── */
export default function OfficeBuildingPage() {
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

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 22%, rgba(7,17,31,0.82) 50%, rgba(7,17,31,0.3) 100%), url('/subsector-pages/office-hero.png')",
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
                Office Building
                <br />
                Construction
                <br />
                <span className="text-[#C89B3C]">Recruitment</span>
              </h1>

              <p
                className={`reveal-child text-gray-300 text-[14px] sm:text-[16px] leading-[1.85] max-w-[720px] mb-8 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.28s" }}
              >
                RUDRON partners with contractors and developers to place construction professionals built for the demands of Class-A office towers, corporate campuses, tenant improvements, and mixed-use workplace developments—where finish quality, tenant timelines, and market velocity all converge.
              </p>

              <div
                className={`reveal-child flex flex-wrap gap-3 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
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
          <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-white/8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-bar px-6 py-8 text-center ${statsReveal.visible ? "in" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <p className="text-[24px] sm:text-[30px] font-bold text-[#C89B3C] leading-none mb-1">{s.value}</p>
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
              Commercial Office Infrastructure
            </p>
            <h2
              className={`reveal-child text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.1] mb-7 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Built for the Pace of
              <br />Modern Commercial
              <br />
              <span className="text-[#C89B3C]">Workplace Development</span>
            </h2>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Office building construction sits at the center of commercial real estate pressure. Developers are racing against lease commencement dates, capital markets timelines, and tenant expectations that have risen dramatically—modern tenants expect amenity-rich, tech-enabled environments delivered with hotel-quality finishes, and they expect them on time.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Professionals in this sector must manage all of that simultaneously—coordinating base-building systems with tenant improvement scopes, managing subcontractor relationships across dozens of trades in urban high-rise environments, navigating occupied-building protocols when phases are live while construction continues, and maintaining the finish quality standards that define Class-A product in competitive markets.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              RUDRON recruits the professionals who operate at that level. We maintain deep networks across the nation's most active office markets and match construction leaders precisely to the project type, delivery method, and organizational culture that sets them up to perform from day one.
            </p>
          </div>

          <div
            className={`reveal-child ${overviewReveal.visible ? "in" : ""}`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#0D1726] border border-white/10 p-8 sm:p-10">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] via-[#e4b84a] to-transparent" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-6">What Sets Office Building Construction Apart</p>
              <ul className="space-y-5">
                {[
                  ["Tenant Timeline Pressure", "Lease commencement dates are fixed financial obligations. A delayed TI or late base-building handoff doesn't just cost money—it triggers legal exposure and damages the owner-tenant relationship before occupancy even begins."],
                  ["Base-Building & TI Coordination", "Office construction rarely happens in isolation. Base-building programs, spec suites, and custom TI scopes often run simultaneously across the same building—demanding professionals who can coordinate multiple teams without interference."],
                  ["Class-A Finish & Quality Standards", "The commercial office market is competitive. Tenants choosing between buildings are evaluating lobby presence, common area quality, and the precision of MEP systems. Finish quality at this level requires experienced QC leadership on site."],
                  ["Urban Site Logistics & Occupied Buildings", "High-rise and urban office construction means tower crane coordination, below-grade work in dense city blocks, and construction in occupied buildings where tenants on upper floors cannot be impacted by work happening below."],
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
              <span className="text-[#C89B3C]"> Office Build</span>
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
              <br />for Commercial
              <br />
              <span className="text-[#C89B3C]">Office Delivery</span>
            </h2>
            <p
              className={`reveal-child text-gray-400 text-[14px] sm:text-[15px] leading-[1.85] ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              General staffing firms fill seats. RUDRON fills roles with professionals who understand the commercial office market—and what it takes to deliver product that tenants choose, and owners are proud of.
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
        </div>
      </div>

      <SubpageCTA />
    </main>
  );
}