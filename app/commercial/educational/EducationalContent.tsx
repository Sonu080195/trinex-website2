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
  { title: "Project Managers", desc: "End-to-end delivery leaders for K–12 and higher-ed campuses" },
  { title: "Superintendents", desc: "On-site execution specialists with institutional experience" },
  { title: "Educational Construction Managers", desc: "Owner's rep & CM professionals in academic environments" },
  { title: "Project Engineers", desc: "Document control, RFIs, and submittals for complex institutions" },
  { title: "MEP Coordinators", desc: "Systems integration across mechanical, electrical, and plumbing" },
  { title: "Estimators", desc: "Accurate cost modeling for phased campus construction" },
  { title: "Schedulers", desc: "Critical-path planning around academic calendars" },
  { title: "Safety Managers", desc: "Occupied-facility safety compliance and OSHA oversight" },
  { title: "Campus Development Specialists", desc: "Master planning and multi-building program management" },
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
        <rect x="3" y="20" width="26" height="9" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M16 3L3 12h26L16 3Z" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="12" y="14" width="8" height="6" rx="1" stroke="#C89B3C" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "K–12 Schools",
    body: "From elementary renovations to brand-new high schools, we staff projects that require sensitivity to active learning environments—coordinating construction around packed academic calendars without disrupting students or faculty.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="28" height="19" rx="2" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M2 15h28" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M10 10V7a6 6 0 0 1 12 0v3" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="16" cy="21" r="3" stroke="#C89B3C" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Universities & Colleges",
    body: "Higher-education construction demands layers of institutional approval, donor visibility, and long-range master planning. Our recruiters place professionals who understand academic governance and can operate across multi-building programs.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="10" height="10" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="18" y="4" width="10" height="10" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="4" y="18" width="10" height="10" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <rect x="18" y="18" width="10" height="10" rx="1.5" stroke="#C89B3C" strokeWidth="1.8"/>
      </svg>
    ),
    heading: "Campus Expansions",
    body: "Multi-phase campus developments require professionals who can manage phasing logic, infrastructure sequencing, and stakeholder communication simultaneously. We find the talent that makes complex programs run on time.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 28V10l12-6 12 6v18" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="11" y="16" width="10" height="12" rx="1" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M4 10h24" stroke="#C89B3C" strokeWidth="1.5"/>
      </svg>
    ),
    heading: "Student Housing",
    body: "Residential facilities on or near campus carry strict budget timelines tied to enrollment cycles. We place project managers and supers who have delivered occupied-housing projects on schedule under intense institutional scrutiny.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M16 8v8l5 3" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Occupied-Facility Coordination",
    body: "Many educational builds happen while schools remain in session. That demands phasing expertise, noise mitigation planning, and a safety culture built around child welfare—skills we specifically vet for in every candidate.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26h20M10 26V12l6-6 6 6v14" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="13" y="18" width="6" height="8" rx="0.5" stroke="#C89B3C" strokeWidth="1.5"/>
        <path d="M13 15h6" stroke="#C89B3C" strokeWidth="1.4"/>
      </svg>
    ),
    heading: "STEM & Lab Facilities",
    body: "Science and technology buildings require MEP complexity well beyond standard commercial builds—fume hoods, cleanrooms, high-voltage infrastructure. We identify the technical specialists capable of executing these demanding scopes.",
  },
];

const differentiators = [
  {
    num: "01",
    heading: "Sector-Specific Screening",
    body: "Every candidate we submit has verifiable educational construction experience. We don't repurpose commercial talent—we identify professionals who understand LEED for Schools, institutional procurement, and academic schedule constraints.",
  },
  {
    num: "02",
    heading: "Speed Without Compromise",
    body: "Educational project timelines don't flex. Our pipeline of pre-vetted construction professionals means you're receiving qualified candidates within days, not weeks—so your project stays on schedule from day one.",
  },
  {
    num: "03",
    heading: "National Reach, Local Knowledge",
    body: "RUDRON operates across 38 states with deep regional networks. Whether you're building a new charter school in Texas or a university research facility in the Northeast, we have active relationships with the talent you need.",
  },
  {
    num: "04",
    heading: "Long-Term Fit Focus",
    body: "Our 92% retention rate reflects how we recruit: understanding the project, the team culture, and the candidate's long-range goals—so placements stick well beyond the first 90 days.",
  },
];

/* ─── component ─── */
export default function EducationalContent() {
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
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
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
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 22%, rgba(7,17,31,0.82) 50%, rgba(7,17,31,0.3) 100%), url('/subsector-pages/educational-hero.png')",
          }}
        />

        {/* Diagonal accent stripes */}
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

        {/* Content */}
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
                Educational
                <br />
                Construction
                <br />
                <span className="text-[#C89B3C]">Recruitment</span>
              </h1>

              <p
                className={`reveal-child text-gray-300 text-[14px] sm:text-[16px] leading-[1.85] max-w-[720px] mb-8 ${heroLoaded ? "in" : ""}`}
                style={{ animationDelay: "0.28s" }}
              >
                RUDRON partners with contractors, developers, and owner's representatives to deliver construction leaders 
                built for the unique demands of educational facilities—from occupied 
                K–12 campuses to large-scale university programs.
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />
      </section>

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

          {/* Left text */}
          <div>
            <p
              className={`reveal-child text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0s" }}
            >
              Educational Infrastructure
            </p>
            <h2
              className={`reveal-child text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.1] mb-7 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Built for the Complexity
              <br />of Modern Learning
              <br />
              <span className="text-[#C89B3C]">Environments</span>
            </h2>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Educational construction sits at the intersection of technical complexity, community sensitivity, 
              and institutional accountability. These projects aren't built in isolation—they happen around students, faculty, 
              and administrators who cannot pause while construction moves forward.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] mb-5 ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Professionals in this sector must understand more than construction fundamentals. 
              They navigate LEED for Schools certification, ADA compliance at institutional scale, phased delivery across 
              multiple academic years, and the political dynamics of public bond-funded projects—all while keeping safety standards 
              elevated because children are on or near the site every day.
            </p>
            <p
              className={`reveal-child text-gray-300 text-[15px] sm:text-[16px] leading-[1.9] ${overviewReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              RUDRON was built specifically to find those professionals. 
              We don't recycle general commercial talent into education roles—we maintain deep relationships with specialists 
              who have spent careers delivering for institutions, and we match them precisely to the scope, scale, 
              and culture of your project.
            </p>
          </div>

          {/* Right: accent panel */}
          <div
            className={`reveal-child ${overviewReveal.visible ? "in" : ""}`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#0D1726] border border-white/10 p-8 sm:p-10">

              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C89B3C] via-[#e4b84a] to-transparent" />

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-6">What Sets Educational Construction Apart</p>

              <ul className="space-y-5">
                {[
                  ["Occupied-Facility Protocols", "Construction around active students requires rigorous phasing, temporary access solutions, and daily safety walk-throughs that go beyond standard commercial site management."],
                  ["Academic Schedule Constraints", "Summer windows, winter breaks, and semester calendars dictate milestone dates—late delivery isn't just a cost issue, it's a community crisis."],
                  ["Institutional Procurement", "Public school districts and universities operate under procurement rules, prevailing wage requirements, and audit trails that demand experience-specific compliance knowledge."],
                  ["Community Stakeholder Management", "From school boards to parent committees to local press, educational projects operate in public view—and the right project leaders know how to navigate that visibility."],
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
              <span className="text-[#C89B3C]"> Educational Build</span>
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

          {/* Left sticky label */}
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
              <br />for Educational
              <br />
              <span className="text-[#C89B3C]">Construction</span>
            </h2>
            <p
              className={`reveal-child text-gray-400 text-[14px] sm:text-[15px] leading-[1.85] ${diffReveal.visible ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              General staffing firms fill seats. RUDRON fills roles with professionals who will still be delivering value on your project a year from now.
            </p>
          </div>

          {/* Right cards */}
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