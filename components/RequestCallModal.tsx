"use client";

import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  X,
  Loader2,
} from "lucide-react";

interface RequestCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestCallModal({
  isOpen,
  onClose,
}: RequestCallModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set("type", "call_request");

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

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* PANEL */}
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-[460px] bg-[#07111F] border-l border-white/10 overflow-y-auto">

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.15),transparent_35%)]" />

        <div className="relative z-10 p-5 sm:p-6">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#C89B3C]/40 transition"
          >
            <X size={20} />
          </button>

          {submitted ? (

            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">

              <div className="w-20 h-20 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mb-6">
                <span className="text-[#C89B3C] text-4xl">
                  ✓
                </span>
              </div>

              <h2 className="text-white text-[32px] font-bold mb-4">
                Call Request Submitted
              </h2>

              <p className="text-gray-400 leading-7 max-w-md mb-8">
                Thank you for reaching out. A member of the RUDRON team will contact you shortly.
              </p>

              <button
                onClick={onClose}
                className="bg-[#C89B3C] text-black px-7 py-3 rounded-xl font-semibold"
              >
                Close
              </button>

            </div>

          ) : (

            <>
              {/* HEADER */}
              <div className="mb-8 pt-10">

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] mb-4">
                  Request A Call
                </p>

                <h2 className="text-white text-[28px] sm:text-[34px] font-bold leading-[1.05] mb-4">
                  Let's Talk.
                </h2>

                <p className="text-gray-400 text-[14px] leading-6 max-w-md">
                  Submit your details and our recruitment specialists will contact you shortly.
                </p>

              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <div className="relative">

                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                    />

                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="First Name"
                      className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                    />

                  </div>

                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Last Name"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl px-5 text-white outline-none"
                  />

                </div>

                {/* EMAIL */}
                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                  />

                </div>

                {/* PHONE */}
                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                  />

                </div>

                {/* LOCATION */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full h-[52px] bg-white/[0.03] border border-white/10 rounded-2xl px-4 text-white outline-none"
                  />

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="w-full h-[52px] bg-white/[0.03] border border-white/10 rounded-2xl px-4 text-white outline-none"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="w-full h-[52px] bg-white/[0.03] border border-white/10 rounded-2xl px-4 text-white outline-none"
                  />

                </div>

                {/* PURPOSE */}
                <div className="relative">

                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-5 text-[#C89B3C]"
                  />

                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Purpose Of Call"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none resize-none"
                  />

                </div>

                {error && (
                  <p className="text-red-400 text-[13px] bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request A Call Back"
                  )}
                </button>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}