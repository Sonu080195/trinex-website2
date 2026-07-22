"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

/* ── tiny hook ── */
function useInView(threshold = 0.1) {
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

const countryInfo: Record<string, { phone?: string; hours: string; email: string; flag: string }> = {
  "United States": { phone: "+1 (239) 309 3969", hours: "Mon – Fri  |  8AM – 6PM EST", email: "usa@rudrongts.com",    flag: "🇺🇸" },
  India:           {                              hours: "Mon – Sat  |  9AM – 7PM IST", email: "india@rudrongts.com",  flag: "🇮🇳" },
  Canada:          { phone: "+1 (239) 309 3969", hours: "Mon – Fri  |  8AM – 5PM EST", email: "canada@rudrongts.com", flag: "🇨🇦" },
  "United Arab Emirates": {                      hours: "Mon – Fri  |  9AM – 6PM GST", email: "uae@rudrongts.com",    flag: "🇦🇪" },
};

const statesByCountry: Record<string, string[]> = {
  "United States": ["Alabama","Alaska","Arizona","California","Colorado","Florida","Georgia","Illinois","Maryland","Missouri","Nevada","New Jersey","New York","North Carolina","Ohio","Oregon","Pennsylvania","South Carolina","Texas","Virginia","Washington"],
  India:           ["Delhi","Gujarat","Karnataka","Maharashtra","Punjab","Tamil Nadu","Telangana"],
  Canada:          ["Alberta","British Columbia","Ontario","Quebec"],
  "United Arab Emirates": ["Abu Dhabi","Dubai","Sharjah"],
};

const globalOffices = [
  { country: "United States", focus: "Executive Search & Construction Recruitment", flag: "🇺🇸" },
  { country: "Canada",        focus: "Commercial & Infrastructure Markets",         flag: "🇨🇦" },
  { country: "UAE",           focus: "MEP & Mission Critical Recruitment",          flag: "🇦🇪" },
  { country: "India",         focus: "Global Talent Delivery & Operations",         flag: "🇮🇳" },
];

const marqueeItems = ["EXECUTIVE SEARCH","PROJECT STAFFING","DATA CENTERS","HEALTHCARE","MEP","COMMERCIAL","INFRASTRUCTURE","MISSION CRITICAL"];

export default function ContactContent() {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [formState, setFormState]   = useState<"idle"|"sending"|"sent">("idle");
  const [activeCountry, setActiveCountry] = useState("United States");
  const [error, setError] = useState("");

  const heroRef    = useRef<HTMLDivElement>(null);
  const { ref: officesRef, inView: officesInView } = useInView(0.05);
  const { ref: contactRef, inView: contactInView } = useInView(0.05);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setFormState("sending");

    const formData = new FormData(e.currentTarget);
    formData.set("type", "contact_inquiry");

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed. Please try again.");
      setFormState("sent");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setFormState("idle");
    }
  }

  const info = countryInfo[selectedCountry];

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: "url('/contact/contact-hero.webp')",
              transform: heroVisible ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/85 to-[#07111F]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
        </div>

        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)",
            opacity: heroVisible ? 0.6 : 0,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">
          <div className="max-w-[680px]">
            <div
              className="flex items-center gap-3 mb-6 transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Contact RUDRON</p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

            <h1
              className="font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-4 transition-all duration-700 delay-150"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)" }}
            >
              Let's Build
              <br />What's Next
              <br />
              <span className="relative inline-block text-[#C89B3C]">{" "}Together
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20"/>
              </span>
            </h1>

            <p
              className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}
            >
              Whether you're hiring exceptional talent or exploring your next career opportunity, our team is ready to help.
            </p>

            <div
              className="flex flex-wrap gap-3 transition-all duration-700 delay-500"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}
            >
              {["Executive Search","Project Staffing","Data Centers","MEP Recruitment"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-white hover:border-[#C89B3C]/50 hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/70 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}</span>
              <span className="text-[#C89B3C] text-[8px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          GLOBAL OFFICES
      ════════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-12 px-5 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div ref={officesRef} className="text-center mb-8">
            <div
              className="inline-flex items-center gap-3 mb-5 transition-all duration-700"
              style={{ opacity: officesInView ? 1 : 0, transform: officesInView ? "translateY(0)" : "translateY(16px)" }}
            >
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="uppercase tracking-[5px] text-[#C89B3C] text-xs font-semibold">Global Recruitment Network</p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>
            <h2
              className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.05] mb-6 transition-all duration-700 delay-100"
              style={{ opacity: officesInView ? 1 : 0, transform: officesInView ? "translateY(0)" : "translateY(20px)" }}
            >
              Supporting Clients Across
              <br />
              <span className="relative inline-block text-[#C89B3C]">{" "}International Markets
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20"/>
              </span>
            </h2>
            <p
              className="text-gray-500 text-[13px] sm:text-[15px] leading-6 max-w-2xl mx-auto transition-all duration-700 delay-200"
              style={{ opacity: officesInView ? 1 : 0, transform: officesInView ? "translateY(0)" : "translateY(16px)" }}
            >
              Through our international recruitment network we support employers and professionals across construction,
              engineering, infrastructure, mission critical and MEP markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {globalOffices.map((office, i) => (
              <OfficeCard key={office.country} office={office} index={i} inView={officesInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT SECTION
      ════════════════════════════════════════ */}
      <section ref={contactRef} className="bg-[#F4F4F0] pb-10 lg:pb-18 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 items-start">

            {/* ── LEFT PANEL ── */}
            <div
              className="transition-all duration-700"
              style={{ opacity: contactInView ? 1 : 0, transform: contactInView ? "translateX(0)" : "translateX(-30px)" }}
            >
              {/* Header card */}
              <div className="bg-[#07111F] rounded-[28px] p-7 mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.15),transparent_55%)]" />
                <div className="relative z-10">
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold mb-4">Connect With RUDRON</p>
                  <h2 className="text-white text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.08] mb-4">
                    Strategic Recruitment<br />Partnerships Built<br />Around Results
                  </h2>
                  <p className="text-gray-400 text-[14px] leading-6">
                    Whether you're seeking exceptional talent, exploring career opportunities, or discussing workforce strategy —
                    our team is ready across the built environment.
                  </p>
                </div>
              </div>

              {/* Country selector */}
              <div className="bg-white rounded-[24px] border border-black/5 p-6 mb-5">
                <p className="text-[#07111F] text-[13px] font-semibold uppercase tracking-[3px] mb-4">Select Region</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {Object.keys(countryInfo).map((c) => (
                    <button
                      key={c}
                      onClick={() => { setSelectedCountry(c); setActiveCountry(c); }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-300 text-left"
                      style={{
                        background: activeCountry === c ? "#07111F" : "rgba(0,0,0,0.03)",
                        color:      activeCountry === c ? "#fff"    : "#666",
                        border:     activeCountry === c ? "1px solid rgba(200,155,60,0.3)" : "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <span>{countryInfo[c].flag}</span>
                      <span className="truncate">{c}</span>
                    </button>
                  ))}
                </div>

                {/* Info rows — phone only shown for US & Canada */}
                <div className="space-y-3">
                  {info.phone && (
                    <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#F4F4F0] border border-black/5">
                      <span className="text-lg">📞</span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#C89B3C] mb-0.5">Phone</p>
                        <p className="text-[#07111F] text-[14px] font-medium">{info.phone}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#F4F4F0] border border-black/5">
                    <span className="text-lg">✉️</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#C89B3C] mb-0.5">Email</p>
                      <p className="text-[#07111F] text-[14px] font-medium">{info.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#F4F4F0] border border-black/5">
                    <span className="text-lg">🕐</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#C89B3C] mb-0.5">Hours</p>
                      <p className="text-[#07111F] text-[14px] font-medium">{info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className="bg-white rounded-[24px] border border-black/5 p-6">
                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] font-semibold mb-3">Global Recruitment Support</p>
                <p className="text-gray-500 leading-7 text-[14px] mb-3">
                  RUDRON Global Talent Solutions partners with leading construction and infrastructure firms across commercial, industrial, mission critical, and residential sectors.
                </p>
                <p className="text-gray-500 leading-7 text-[14px]">
                  Submit the form and our recruitment team will connect with you within one business day.
                </p>
              </div>
            </div>

            {/* ── RIGHT PANEL (FORM) ── */}
            <div
              className="transition-all duration-700 delay-200"
              style={{ opacity: contactInView ? 1 : 0, transform: contactInView ? "translateX(0)" : "translateX(30px)" }}
            >
              <div className="bg-[#07111F] rounded-[28px] border border-white/5 p-9 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,155,60,0.08),transparent_55%)]" />
                <div className="absolute top-0 left-7 right-7 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-50" />

                <div className="relative z-10">
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold mb-3">Start A Conversation</p>
                  <h2 className="text-white text-[22px] sm:text-[28px] lg:text-[36px] font-bold leading-[1.08] mb-2">
                    Tell Us About<br />Your Requirements
                  </h2>
                  <p className="text-gray-400 text-[14px] leading-6 mb-8">
                    Whether you're hiring talent, exploring new opportunities, or seeking market intelligence — our specialists are ready.
                  </p>

                  {formState === "sent" ? (
                    <div className="py-20 text-center">
                      <div className="w-20 h-20 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mx-auto mb-6">
                        <span className="text-[#C89B3C] text-4xl">✓</span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-3">Inquiry Received</h3>
                      <p className="text-gray-400 text-[15px] leading-7">Our team will be in touch within one business day.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormInput name="full_name" placeholder="Full Name"     required />
                          <FormInput name="email"     placeholder="Email Address" type="email" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormInput name="company" placeholder="Company Name" />
                          <FormInput name="phone"   placeholder="Phone (Optional)" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormSelect
                            name="country"
                            value={selectedCountry}
                            onChange={(v) => { setSelectedCountry(v); setActiveCountry(v); }}
                            options={Object.keys(statesByCountry)}
                          />
                          <FormSelect
                            name="state"
                            defaultText="Select State"
                            options={statesByCountry[selectedCountry]}
                          />
                        </div>
                        <FormSelect
                          name="service_needed"
                          defaultText="Service Needed"
                          options={["Hire Talent","Find Jobs","Executive Search"]}
                          fullWidth
                        />
                        <textarea
                          rows={4}
                          name="message"
                          placeholder="Tell us about your hiring needs or career goals..."
                          className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 text-white text-[14px] outline-none resize-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
                        />
                        <div>
                          <input
                            type="file"
                            name="attachment"
                            accept=".pdf,.doc,.docx"
                            className="w-full text-gray-400 text-[13px] file:mr-3 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-[#C89B3C] file:text-black file:font-medium file:text-[13px] file:cursor-pointer"
                          />
                          <p className="text-gray-500 text-[11px] mt-1.5">Max file size: 10 MB</p>
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                          <input type="checkbox" required className="mt-1 w-4 h-4 accent-[#C89B3C]" />
                          <label className="text-gray-400 text-[13px] leading-6">
                            I consent to RUDRON Global Talent Solutions storing and sharing my information for recruitment-related opportunities.
                          </label>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { title: "Fast Response",  sub: "Within 1 business day" },
                            { title: "Confidential",   sub: "All inquiries stay private" },
                          ].map(({ title, sub }) => (
                            <div key={title} className="bg-white/[0.03] border border-white/6 rounded-[16px] p-4">
                              <p className="text-[#C89B3C] font-semibold text-[14px] mb-1">{title}</p>
                              <p className="text-gray-400 text-[12px] leading-4">{sub}</p>
                            </div>
                          ))}
                        </div>

                        {error && (
                          <p className="text-red-400 text-[13px] bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                            {error}
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={formState === "sending"}
                          className="group w-full relative overflow-hidden bg-[#C89B3C] text-[#07111F] font-bold py-4 rounded-2xl
                          transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,155,60,0.35)] hover:scale-[1.01]
                          active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {formState === "sending" ? (
                              <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Inquiry
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-500 skew-x-12" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        /* Fix native <select> dropdown list colours in all browsers */
        select option {
          background-color: #07111F;
          color: #ffffff;
        }
      `}</style>
    </main>
  );
}

/* ── Shared form atoms ── */
function FormInput({ name, placeholder, type = "text", required = false }: {
  name?: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full h-[50px] bg-white/[0.04] border border-white/8 rounded-xl px-4 text-white text-[14px] outline-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
    />
  );
}

function FormSelect({ name, options, defaultText, value, onChange, fullWidth = false }: {
  name?: string; options: string[]; defaultText?: string; value?: string;
  onChange?: (v: string) => void; fullWidth?: boolean;
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className="h-[50px] bg-[#07111F] border border-white/8 rounded-xl px-4 text-white text-[14px] outline-none focus:border-[#C89B3C]/40 transition-colors duration-200 cursor-pointer"
      style={{ width: fullWidth ? "100%" : "100%", colorScheme: "dark" }}
    >
      {defaultText && <option value="" style={{ background: "#07111F", color: "#fff" }}>{defaultText}</option>}
      {options.map((o) => (
        <option key={o} value={o} style={{ background: "#07111F", color: "#fff" }}>{o}</option>
      ))}
    </select>
  );
}

function OfficeCard({ office, index, inView }: {
  office: typeof globalOffices[0]; index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-[24px] p-6 overflow-hidden cursor-default"
      style={{
        border:    hovered ? "1px solid rgba(200,155,60,0.35)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow: hovered ? "0 16px 50px rgba(200,155,60,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
        opacity:   inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms, border 0.3s, box-shadow 0.3s`,
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
      <div className="text-4xl mb-4">{office.flag}</div>
      <h3 className="text-[#07111F] text-xl font-bold mb-3">{office.country}</h3>
      <p className="text-gray-500 text-[14px] leading-6">{office.focus}</p>
    </div>
  );
}