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
  { title: "Project Managers", desc: "End-to-end delivery leaders for shopping centers, lifestyle centers, and retail campuses" },
  { title: "Retail Superintendents", desc: "On-site execution specialists experienced in occupied retail and phased delivery" },
  { title: "Retail Construction Managers", desc: "Owner's rep & CM professionals managing landlord, anchor, and inline tenant programs" },
  { title: "Project Engineers", desc: "Document control, RFIs, and submittals across fast-track, multi-tenant retail scopes" },
  { title: "MEP Coordinators", desc: "Systems integration for base-building utilities, inline tenant rough-ins, and food service infrastructure" },
  { title: "Estimators", desc: "Accurate cost modeling for ground-up retail, renovations, and tenant improvement budgets" },
  { title: "Schedulers", desc: "Critical-path planning around grand opening dates, anchor co-tenancy clauses, and phased occupancy" },
  { title: "Safety Managers", desc: "Occupied-center safety specialists with shopper-traffic and active-tenant compliance experience" },
  { title: "Tenant Improvement Specialists", desc: "Fast-track TI delivery coordinators managing brand standards, landlord work letters, and simultaneous scopes" },
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
        <path d="M4 14V28h24V14" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 14h28M10 14V8a6 6 0 0 1 12 0v6" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="12" y="19" width="8" height="9" rx="1" stroke="#C89B3C" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Shopping Centers & Malls",
    body: "Large-format retail centers demand professionals who can manage anchor box delivery, inline tenant coordination, common area construction, and grand opening schedules—all while keeping existing tenants open and shoppers moving through the property.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="26" height="18" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M3 16h26" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M10 10V6a6 6 0 0 1 12 0v4" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M10 22h12" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Lifestyle & Open-Air Centers",
    body: "Lifestyle centers blend retail, dining, and entertainment in open-air formats that require careful site phasing, landscape sequencing, and facade coordination across a mix of national tenants and local operators with varying design standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="10" height="20" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="18" y="6" width="10" height="20" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M14 16h4" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 12h4M7 17h4M7 22h4" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M21 12h4M21 17h4M21 22h4" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Power Centers & Big Box",
    body: "Power center development requires rapid shell delivery for national anchor tenants with strict brand prototype requirements. We place professionals who understand tilt-up construction, big-box MEP standards, and the landlord-anchor relationship that governs delivery milestones.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="26" height="26" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M3 14h26M14 3v26" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M8 8h2M8 19h2M19 8h2M19 19h2" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Mixed-Use Retail",
    body: "Ground-floor retail in mixed-use developments must coordinate with residential, office, or hospitality programs above—each with different codes, delivery schedules, and finish requirements. We find professionals who can navigate vertical complexity without letting the retail program slip.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M4 14h24" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M10 8V5h12v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M11 20h10" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 23h4" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Retail Tenant Improvements",
    body: "Retail TIs are fast, brand-driven, and deadline-absolute—national retailers have opening windows tied to marketing campaigns, lease kick-outs, and co-tenancy obligations. We recruit TI specialists who can run multiple scopes simultaneously and hand over finished spaces on the day they're needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28V14l10-10 10 10v14" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M6 14h20" stroke="#C89B3C" strokeWidth="1.4"/>
        <rect x="11" y="19" width="5" height="9" rx="0.5" stroke="#C89B3C" strokeWidth="1.4"/>
        <rect x="18" y="19" width="4" height="5" rx="0.5" stroke="#C89B3C" strokeWidth="1.3"/>
      </svg>
    ),
    heading: "Center Renovations & Repositioning",
    body: "Retail repositioning projects are among the most complex in the sector—retenanting occupied centers, upgrading common areas, and refreshing facades while keeping existing tenants operational and maintaining the shopper experience that anchor the center's revenue.",
  },
];

const differentiators = [
  {
    num: "01",
    heading: "Retail-Specific Screening",
    body: "Every candidate we submit has verifiable retail construction experience—shopping centers, TI programs, lifestyle centers, or big-box delivery. We match professionals to the specific format, tenant mix, and delivery timeline your project demands.",
  },
  {
    num: "02",
    heading: "Speed Matched to Grand Opening Dates",
    body: "In retail construction, grand opening dates are marketing commitments, not suggestions. Our pre-vetted pipeline means you're reviewing qualified candidates within days so your team is in place before the schedule demands it—not after.",
  },
  {
    num: "03",
    heading: "National Reach Across Retail Markets",
    body: "RUDRON operates across 38 states with networks active in the country's busiest retail development markets. Whether you're delivering a lifestyle center in the Sun Belt or repositioning a regional mall in the Midwest, we have relationships with the talent working in that market.",
  },
  {
    num: "04",
    heading: "Long-Term Fit Focus",
    body: "Our 92% retention rate comes from recruiting with the full picture—project format, tenant complexity, organizational culture, and career trajectory. The result is placements that stay engaged through the full project lifecycle, not just through opening day.",
  },
];

/* ─── component ─── */
export default function RetailPage() {
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
              "linear-gradient(to right, rgba(7,17,31,0.97) 22%, rgba(7,17,31,0.82) 50%, rgba(7,17,31,0.3) 100%), url('/subsector-pages/retail-hero.png')",
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
                Retail
                <br />
                Construction
                <br />
                <span className="text-[#C89B3C]">Recruitment</span>
              </h1>

              <p
                className={`reveal-child text-gray-300 text-[14px] sm:text-[16px] leading-[1.85] max-w-[720px] mb-8 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.28s" }}
              >
                RUDRON partners with contractors and developers to place construction professionals 
                built for the pace and precision of retail development—from ground-up shopping centers and lifestyle destinations 
                to fast-track tenant improvements where grand opening dates are non-negotiable.
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
              Retail Infrastructure
            </p>
            <h2
              className={`reveal-child text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.1] mb-7 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Built for the Speed
              <br />of Modern Retail
              <br />
              <span className="text-[#C89B3C]">Development</span>
            </h2>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Retail construction operates under a kind of schedule pressure that most other sectors don't experience. Grand opening dates aren't internal targets—they're marketing commitments tied to national campaigns, co-tenancy lease clauses, and anchor agreements that carry real financial consequences when missed.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Professionals in this sector must manage landlord work letters, national brand prototype standards, phased occupancy across operating centers, food service infrastructure coordination, and simultaneous TI scopes for multiple tenants—all without disrupting the shoppers and existing businesses that are generating revenue while construction moves forward around them.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              RUDRON recruits the professionals built for that environment. We maintain active networks across the nation's most active retail development markets and match construction leaders to the format, tenant mix, and delivery timeline that positions them to perform from the moment they're on site.
            </p>
          </div>

          <div
            className={`reveal-child ${overviewReveal.visible ? "in" : ""}`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#0D1726] border border-white/10 p-8 sm:p-10">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] via-[#e4b84a] to-transparent" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-6">What Sets Retail Construction Apart</p>
              <ul className="space-y-5">
                {[
                  ["Grand Opening Date Pressure", "Retail opening dates are public commitments. Missing one triggers marketing losses, lease kick-out clauses, and brand damage that far exceeds any construction cost overrun—professionals in this space understand that no schedule slippage is acceptable."],
                  ["Occupied-Center Coordination", "Most retail construction happens inside or adjacent to operating properties. Managing noise, dust, pedestrian flow, and temporary barriers around active shoppers and tenants requires a different level of site discipline than empty-site delivery."],
                  ["Brand Standard Compliance", "National retailers bring prototype drawings and brand standards that must be executed precisely—deviation triggers punchlist disputes and delayed approvals that eat directly into the schedule."],
                  ["Multi-Tenant Phasing & Landlord Coordination", "Retail PMs often manage dozens of tenant scopes simultaneously, each with its own work letter, design approval timeline, and opening date. Coordinating that without letting one program impact another is a specialized skill few generalists possess."],
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
              <span className="text-[#C89B3C]"> Retail Build</span>
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
              <br />for Retail
              <br />
              <span className="text-[#C89B3C]">Construction</span>
            </h2>
            <p
              className={`reveal-child text-gray-400 text-[14px] sm:text-[15px] leading-[1.85] ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              General staffing firms fill seats. RUDRON fills roles with professionals who know what it means to deliver in retail—where the ribbon gets cut on a fixed date, and everything before that date has to go right.
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
      <Footer />
    </main>
  );
}