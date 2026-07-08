"use client";

import { useState, useEffect } from "react";
import { X, Upload, CheckCircle, Loader2 } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fileName, setFileName] = useState("");
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
        setFileName("");
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
    formData.set("type", "job_application");
    formData.set("job_title", jobTitle);

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-350"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-[#0A1628] border border-white/8 rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-all duration-350"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        }}
      >
        <div className="absolute top-0 left-10 right-10 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-60" />
        <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.1),transparent_50%)] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#C89B3C]/50 hover:bg-white/10 transition-all duration-300"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 p-7 sm:p-9">
          {submitted ? (
            <div className="py-16 text-center">
              <div
                className="w-20 h-20 rounded-full bg-[#C89B3C]/15 border border-[#C89B3C]/25 flex items-center justify-center mx-auto mb-6"
                style={{ animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}
              >
                <CheckCircle size={36} className="text-[#C89B3C]" />
              </div>
              <h2 className="text-white text-[32px] font-bold mb-3">Application Submitted</h2>
              <p className="text-gray-400 leading-7 max-w-md mx-auto mb-8 text-[15px]">
                Our recruitment team will review your profile and reach out shortly regarding <strong className="text-white font-semibold">{jobTitle}</strong>.
              </p>
              <button
                onClick={onClose}
                className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-bold px-10 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(200,155,60,0.35)]"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-6 bg-[#C89B3C]" />
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Apply Now</p>
                  <span className="h-px w-6 bg-[#C89B3C]" />
                </div>
                <h2 className="text-white text-[26px] sm:text-[34px] font-bold leading-tight mb-3">
                  Apply For<br />
                  <span className="text-[#C89B3C]">{jobTitle}</span>
                </h2>
                <p className="text-gray-400 text-[14px] leading-6 max-w-lg">
                  Submit your confidential application and our recruitment team will review your profile for this opportunity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <DarkInput name="first_name" placeholder="First Name" required />
                  <DarkInput name="last_name" placeholder="Last Name" required />
                </div>

                <DarkInput name="email" placeholder="Email Address" type="email" required fullWidth />
                <DarkInput name="phone" placeholder="Phone Number" type="tel" fullWidth />
                <DarkInput name="linkedin" placeholder="LinkedIn Profile URL" type="url" fullWidth />

                <label className="flex items-center justify-between bg-white/[0.03] border border-dashed border-white/12 hover:border-[#C89B3C]/50 rounded-xl px-5 py-4 cursor-pointer transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center group-hover:bg-[#C89B3C]/20 transition-colors duration-300">
                      <Upload size={16} className="text-[#C89B3C]" />
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-medium">{fileName || "Upload Resume"}</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">PDF, DOC, DOCX — Max 10 MB</p>
                    </div>
                  </div>
                  <span className="text-[#C89B3C] text-[13px] font-semibold">Browse</span>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your background, experience, or career goals..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-5 py-4 text-white text-[14px] outline-none resize-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200"
                />

                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 accent-[#C89B3C] flex-shrink-0" />
                  <p className="text-gray-400 text-[13px] leading-6">
                    I consent to RUDRON Global Talent Solutions storing and processing my personal information for recruitment purposes.
                  </p>
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
                        Submit Application
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

function DarkInput({ name, placeholder, type = "text", required = false, fullWidth = false }: {
  name?: string; placeholder: string; type?: string; required?: boolean; fullWidth?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={`${fullWidth ? "w-full" : ""} h-[50px] bg-white/[0.03] border border-white/8 rounded-xl px-5 text-white text-[14px] outline-none placeholder:text-gray-500 focus:border-[#C89B3C]/40 transition-colors duration-200`}
      style={{ width: fullWidth ? "100%" : undefined }}
    />
  );
}