"use client";

import { useState, useEffect } from "react";
import { User, Briefcase, Mail, Phone, Upload, X, MapPin, Link as LinkIcon, CheckCircle } from "lucide-react";

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({ isOpen, onClose }: CandidateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [fileName,  setFileName]  = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setTimeout(() => setVisible(true), 10));
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        setSubmitted(false);
        setFileName("");
        document.body.style.overflow = "auto";
      }, 350);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_40%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(200,155,60,0.06),transparent_65%)] pointer-events-none" />

        {/* Left edge gold accent */}
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
              <h2 className="text-white text-[30px] font-bold mb-3">Profile Submitted</h2>
              <p className="text-gray-400 leading-7 max-w-sm mx-auto mb-8 text-[14px]">
                Our recruitment team will review your profile and reach out regarding suitable opportunities.
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
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Candidate Inquiry</p>
                </div>
                <h2 className="text-white text-[28px] sm:text-[34px] font-bold leading-[1.05] mb-3">
                  Advance Your<br />Career Journey.
                </h2>
                <p className="text-gray-400 text-[14px] leading-6">
                  Submit your profile and connect with exclusive opportunities across AEC & MEP sectors.
                </p>
              </div>

              {/* ── FORM ── */}
              <form
                action="https://formsubmit.co/jobs@rudrongts.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-3"
                target="candidate_iframe"
                onSubmit={() => setTimeout(() => setSubmitted(true), 900)}
              >
                <input type="hidden" name="_subject" value="New Candidate Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <iframe name="candidate_iframe" style={{ display: "none" }} />

                <IconInput icon={<User size={16} />}     name="full_name"    placeholder="Full Name"       required />
                <IconInput icon={<Briefcase size={16} />} name="desired_role" placeholder="Desired Role"    required />
                <IconInput icon={<Mail size={16} />}     name="email"        placeholder="Email Address"    type="email" required />
                <IconInput icon={<Phone size={16} />}    name="phone"        placeholder="Phone Number"     type="tel" />

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

                <IconInput icon={<LinkIcon size={16} />} name="linkedin" placeholder="LinkedIn Profile URL" type="url" fullWidth />

                {/* Resume upload */}
                <label className="flex items-center justify-between bg-white/[0.03] border border-dashed border-white/12 hover:border-[#C89B3C]/50 rounded-xl px-4 py-4 cursor-pointer transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center group-hover:bg-[#C89B3C]/20 transition-colors duration-300">
                      <Upload size={15} className="text-[#C89B3C]" />
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-medium">{fileName || "Upload Resume"}</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">PDF, DOC, DOCX</p>
                    </div>
                  </div>
                  <span className="text-[#C89B3C] text-[12px] font-semibold">Browse</span>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your experience, expertise, or career goals..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-4 text-white text-[14px] outline-none resize-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
                />

                <button
                  type="submit"
                  className="group w-full relative overflow-hidden bg-[#C89B3C] hover:bg-[#d6ab52] text-[#07111F] font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,155,60,0.35)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Profile
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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

function IconInput({ icon, name, placeholder, type = "text", required = false, fullWidth = false }: {
  icon: React.ReactNode; name?: string; placeholder: string;
  type?: string; required?: boolean; fullWidth?: boolean;
}) {
  return (
    <div className="relative" style={{ width: fullWidth ? "100%" : undefined }}>
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