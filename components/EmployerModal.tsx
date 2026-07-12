"use client";

import { useState, useEffect } from "react";
import { Building2, Users, BriefcaseBusiness, Mail, Phone, X, CheckCircle, Loader2 } from "lucide-react";

interface EmployerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmployerModal({ isOpen, onClose }: EmployerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setTimeout(() => setVisible(true), 10));
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        setSubmitted(false);
        setError("");
        document.body.style.overflow = "auto";
      }, 350);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set("type", "employer_inquiry");

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-350"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className="absolute right-0 top-0 h-full w-full sm:max-w-[480px] bg-[#07111F] border-l border-white/8 overflow-y-auto transition-transform duration-350 ease-out"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.13),transparent_40%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[radial-gradient(circle,rgba(200,155,60,0.06),transparent_65%)] pointer-events-none" />

        {/* Left edge accent */}
        <div className="absolute left-0 top-20 bottom-20 w-[2px] bg-gradient-to-b from-transparent via-[#C89B3C]/40 to-transparent" />

        <div className="relative z-10 p-6 sm:p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#C89B3C]/50 hover:bg-white/8 transition-all duration-300"
          >
            <X size={18} />
          </button>

          {submitted ? (
            /* ── SUCCESS ── */
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
              <div
                className="w-20 h-20 rounded-full bg-[#C89B3C]/15 border border-[#C89B3C]/25 flex items-center justify-center mb-6"
                style={{ animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}
              >
                <CheckCircle size={36} className="text-[#C89B3C]" />
              </div>
              <h2 className="text-white text-[30px] font-bold mb-3">Request Submitted</h2>
              <p className="text-gray-400 leading-7 max-w-sm mx-auto mb-8 text-[14px]">
                Our executive recruitment team will contact you shortly regarding your hiring needs.
              </p>
              <button
                onClick={onClose}
                className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* ── HEADER ── */}
              <div className="pt-12 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-6 bg-[#C89B3C]" />
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Employer Inquiry</p>
                </div>
                <h2 className="text-white text-[28px] sm:text-[34px] font-bold leading-[1.05] mb-3">
                  Build Your<br />Winning Team.
                </h2>
                <p className="text-gray-400 text-[14px] leading-6">
                  Connect with our recruitment specialists to discuss your hiring requirements across AEC & MEP sectors.
                </p>
              </div>

              {/* ── STATS ── */}
              <div className="grid grid-cols-3 gap-3 mb-7">
                {[
                  { value: "100+", label: "Placements" },
                  { value: "4",    label: "Countries" },
                  { value: "95%",  label: "Retention" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/[0.03] border border-white/8 rounded-[16px] p-3 text-center">
                    <p className="text-[#C89B3C] text-[22px] font-bold leading-none mb-1">{value}</p>
                    <p className="text-gray-400 text-[11px] tracking-[1px] uppercase">{label}</p>
                  </div>
                ))}
              </div>

              {/* ── FORM ── */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <IconInput icon={<Building2 size={16} />}       name="company"    placeholder="Company Name"   required />
                <IconInput icon={<BriefcaseBusiness size={16} />} name="hiring_for" placeholder="Hiring For"      required />
                <IconInput icon={<Users size={16} />}           name="volume"     placeholder="Hiring Volume (e.g. 3–5 roles)" />
                <IconInput icon={<Mail size={16} />}            name="email"      placeholder="Email Address"   type="email" required />
                <IconInput icon={<Phone size={16} />}           name="phone"      placeholder="Phone Number"    type="tel" />

                {/* Location row */}
                <div className="grid grid-cols-3 gap-2">
                  {["City","State","Country"].map((p) => (
                    <input
                      key={p}
                      type="text"
                      name={p.toLowerCase()}
                      placeholder={p}
                      className="h-[50px] bg-white/[0.03] border border-white/8 rounded-xl px-3 text-white text-[13px] outline-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
                    />
                  ))}
                </div>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your hiring needs, timeline, and the type of candidates you're looking for..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-4 text-white text-[14px] outline-none resize-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
                />

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    { icon: "⚡", title: "Fast Response",    sub: "Within 1 business day" },
                    { icon: "🔒", title: "Confidential",     sub: "All inquiries stay private" },
                  ].map(({ icon, title, sub }) => (
                    <div key={title} className="bg-white/[0.03] border border-white/6 rounded-[16px] p-3.5 flex items-start gap-3">
                      <span className="text-lg leading-none mt-0.5">{icon}</span>
                      <div>
                        <p className="text-white text-[13px] font-semibold mb-0.5">{title}</p>
                        <p className="text-gray-400 text-[11px] leading-4">{sub}</p>
                      </div>
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
                  disabled={submitting}
                  className="group w-full relative overflow-hidden bg-[#C89B3C] hover:bg-[#d6ab52] disabled:opacity-60 disabled:cursor-not-allowed text-[#07111F] font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,155,60,0.35)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Talent Consultation
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function IconInput({ icon, name, placeholder, type = "text", required = false }: {
  icon: React.ReactNode; name?: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C] pointer-events-none">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full h-[50px] bg-white/[0.03] border border-white/8 rounded-xl pl-11 pr-4 text-white text-[14px] outline-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
      />
    </div>
  );
}