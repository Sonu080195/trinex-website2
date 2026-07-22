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
  { title: "Project Managers", desc: "End-to-end delivery leaders for hospitals, MOBs, and surgical centers" },
  { title: "Superintendents", desc: "On-site execution specialists with ICRA/ILSM and infection-control protocols" },
  { title: "Healthcare Construction Managers", desc: "Owner's rep & CM professionals in live medical environments" },
  { title: "Project Engineers", desc: "Document control, RFIs, and submittals for technically complex healthcare builds" },
  { title: "MEP Coordinators", desc: "Systems integration for medical gas, life-safety, and critical power infrastructure" },
  { title: "Estimators", desc: "Accurate cost modeling for phased, occupied healthcare facility delivery" },
  { title: "Schedulers", desc: "Critical-path planning around operational continuity and regulatory milestones" },
  { title: "Safety Managers", desc: "Infection-control and OSHA compliance specialists in active patient-care facilities" },
  { title: "Hospital Development Specialists", desc: "Master planning and multi-building medical campus program management" },
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
        <rect x="3" y="8" width="26" height="21" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M11 8V5a5 5 0 0 1 10 0v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M16 14v6M13 17h6" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Hospitals & Medical Centers",
    body: "Large-scale acute-care facilities demand deep experience in phased delivery, infection-control partitioning, and coordination with clinical operations teams who cannot stop while construction advances around them.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M4 14h24" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M14 4v10" stroke="#C89B3C" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="4" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M20 22h4M22 20v4" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Surgical & Ambulatory Centers",
    body: "ASCs and outpatient surgical facilities carry extreme MEP precision requirements—medical gas systems, redundant power, HVAC air-change rates—and we recruit specialists who have executed these scopes in regulated environments.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="26" height="26" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M10 16h4v4h-4zM18 12h4v8h-4z" stroke="#C89B3C" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M3 24h26" stroke="#C89B3C" strokeWidth="1.4"/>
      </svg>
    ),
    heading: "Medical Office Buildings",
    body: "MOBs and outpatient clinics require professionals who balance tenant-improvement coordination, base-building delivery, and Class-A finish standards while keeping clinical occupancy timelines locked.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M10 10V7a6 6 0 0 1 12 0v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="16" cy="19" r="3.5" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M16 15.5v-2M16 24v-1.5" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Clinical Laboratories",
    body: "Lab construction requires specialty ventilation, chemical-resistant flooring, biosafety cabinetry rough-ins, and airtight coordination with equipment vendors—professionals who have navigated these environments are rare, and we know where to find them.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28V12l10-8 10 8v16" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="12" y="18" width="8" height="10" rx="1" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M6 12h20" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M16 18v-4" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Behavioral Health Facilities",
    body: "Behavioral health construction involves ligature-resistant design standards, specialized room configurations, and security integration that go far beyond general healthcare builds. We staff leaders who have navigated these unique requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="28" height="20" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M8 8V5h16v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M2 14h28" stroke="#C89B3C" strokeWidth="1.4"/>
        <path d="M10 20h4M18 20h4M10 24h12" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Senior Living & Long-Term Care",
    body: "Assisted living, memory care, and skilled nursing facilities blend residential comfort with clinical functionality. Our talent network includes professionals who understand both the construction complexity and the human sensitivity these environments demand.",
  },
];

const differentiators = [
  {
    num: "01",
    heading: "Healthcare-Specific Screening",
    body: "Every candidate we submit has verifiable experience in clinical or regulated medical construction. We don't repurpose commercial talent—we identify professionals who understand ICRA protocols, FGI Guidelines, Joint Commission readiness, and infection-control compliance.",
  },
  {
    num: "02",
    heading: "Speed Without Compromise",
    body: "Healthcare project timelines are tied to patient care delivery and hospital operating budgets. Our pipeline of pre-vetted specialists means you're receiving qualified candidates within days, not weeks—so critical milestones don't slip.",
  },
  {
    num: "03",
    heading: "National Reach, Local Knowledge",
    body: "RUDRON operates across 38 states with deep regional networks. Whether you're expanding a health system campus in the Southeast or building a new ASC in the Pacific Northwest, we have active relationships with the talent you need.",
  },
  {
    num: "04",
    heading: "Long-Term Fit Focus",
    body: "Our 92% retention rate reflects how we recruit: understanding the project scope, the clinical environment, and each candidate's long-range goals—so placements deliver value well beyond the first 90 days.",
  },
];

/* ─── component ─── */
export default function HealthcareContent() {
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
              "linear-gradient(to right, rgba(7,17,31,0.97) 22%, rgba(7,17,31,0.82) 50%, rgba(7,17,31,0.3) 100%), url('/subsector-pages/healthcare-hero.png')",
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
                Healthcare
                <br />
                Construction
                <br />
                <span className="text-[#C89B3C]">Recruitment</span>
              </h1>

              <p
                className={`reveal-child text-gray-300 text-[14px] sm:text-[16px] leading-[1.85] max-w-[720px] mb-8 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.28s" }}
              >
                RUDRON partners with contractors, health systems, and owner's representatives to place construction leaders built for the demands of clinical environments—from occupied hospital renovations to ground-up medical campus developments.
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
              Healthcare Infrastructure
            </p>
            <h2
              className={`reveal-child text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.1] mb-7 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Built for the Demands
              <br />of Mission-Critical
              <br />
              <span className="text-[#C89B3C]">Medical Construction</span>
            </h2>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Healthcare construction is among the most technically demanding sectors in the industry. Projects don't happen in empty buildings—they happen in live hospitals, around active patient-care areas, with infection-control partitions separating construction crews from immunocompromised patients by a matter of feet.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Professionals in this sector must command ICRA and ILSM protocols, FGI Guidelines, Joint Commission survey readiness, medical gas systems, and the complex dynamics of working alongside department directors, infection preventionists, and facilities management teams—simultaneously. A single compliance failure can shut a wing down.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              RUDRON recruits exclusively for people who have operated in these environments. We don't adapt commercial project managers into healthcare roles—we find the professionals who already know how to move through a hospital, earn clinical staff trust, and deliver projects that pass inspection on the first attempt.
            </p>
          </div>

          <div
            className={`reveal-child ${overviewReveal.visible ? "in" : ""}`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#0D1726] border border-white/10 p-8 sm:p-10">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] via-[#e4b84a] to-transparent" />
              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-6">What Sets Healthcare Construction Apart</p>
              <ul className="space-y-5">
                {[
                  ["ICRA & Infection-Control Compliance", "Construction in live healthcare facilities requires certified ICRA protocols, dust containment systems, negative-pressure environments, and daily inspections that go far beyond standard commercial safety practices."],
                  ["FGI Guidelines & Regulatory Milestones", "The Facility Guidelines Institute standards govern everything from room dimensions to air-change rates. Projects must pass AHJ and state health department reviews before any space can be occupied."],
                  ["Mission-Critical System Coordination", "Medical gas, emergency power, nurse call, and life-safety systems require specialty coordination with clinical engineers—delays in these systems delay patient care."],
                  ["Occupied-Facility Stakeholder Management", "From CNOs and infection preventionists to facilities directors and accreditation teams, healthcare PMs navigate institutional complexity that has no parallel in commercial construction."],
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
              <span className="text-[#C89B3C]"> Healthcare Build</span>
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
              <br />for Healthcare
              <br />
              <span className="text-[#C89B3C]">Construction</span>
            </h2>
            <p
              className={`reveal-child text-gray-400 text-[14px] sm:text-[15px] leading-[1.85] ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              General staffing firms fill seats. RUDRON fills roles with professionals who understand what it means to build inside a working hospital—and deliver without disrupting patient care.
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