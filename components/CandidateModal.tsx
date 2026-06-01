"use client";

import { useState } from "react";

import {
  User,
  Briefcase,
  Mail,
  Phone,
  Upload,
  X,
} from "lucide-react";

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({
  isOpen,
  onClose,
}: CandidateModalProps) {

  const [submitted, setSubmitted] =
    useState(false);

  if (!isOpen) return null;

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

        {/* CONTENT */}
        <div className="relative z-10 p-5 sm:p-6">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#C89B3C]/40 transition"
          >

            <X size={20} />

          </button>

          {/* SUCCESS */}
          {submitted ? (

            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">

              <div className="w-20 h-20 rounded-full bg-[#C89B3C]/15 flex items-center justify-center mb-6">

                <span className="text-[#C89B3C] text-4xl">

                  ✓

                </span>

              </div>

              <h2 className="text-white text-[32px] font-bold mb-4">

                Profile Submitted

              </h2>

              <p className="text-gray-400 leading-7 max-w-md mb-8">

                Our recruitment team will review your profile and connect with you regarding suitable opportunities.

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

                  Candidate Inquiry

                </p>

                <h2 className="text-white text-[28px] sm:text-[34px] font-bold leading-[1.05] mb-4">

                  Advance Your
                  <br />

                  Career Journey.

                </h2>

                <p className="text-gray-400 text-[14px] leading-6 max-w-md">

                  Submit your professional profile and connect with exclusive opportunities across AEC & MEP sectors.

                </p>

              </div>

              {/* FORM */}
              <form
                action="https://formsubmit.co/jobs@rudrongts.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-4"
                target="hidden_iframe"
                onSubmit={() => {

                  setTimeout(() => {

                    setSubmitted(true);

                  }, 1000);
                }}
              >

                {/* HIDDEN */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Candidate Submission"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <iframe
                  name="hidden_iframe"
                  style={{ display: "none" }}
                />

                {/* FULL NAME */}
                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="text"
                    name="full_name"
                    required
                    placeholder="Full Name"
                    className="w-full h-[52px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                  />

                </div>

                {/* ROLE */}
                <div className="relative">

                  <Briefcase
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="text"
                    name="desired_role"
                    required
                    placeholder="Desired Role"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
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

                {/* LINKEDIN */}
                <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl px-5 text-white outline-none"
                />

                {/* RESUME */}
                <label className="flex items-center justify-between bg-white/[0.03] border border-dashed border-white/10 hover:border-[#C89B3C]/40 rounded-2xl px-5 py-4 cursor-pointer transition">

                  <div className="flex items-center gap-3">

                    <Upload
                      size={18}
                      className="text-[#C89B3C]"
                    />

                    <div>

                      <p className="text-white text-sm font-medium">

                        Upload Resume

                      </p>

                      <p className="text-gray-500 text-xs mt-1">

                        PDF, DOC, DOCX

                      </p>

                    </div>

                  </div>

                  <span className="text-[#C89B3C] text-sm font-semibold">

                    Browse

                  </span>

                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                </label>

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your experience, expertise, or career goals..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold py-4 rounded-2xl transition-all duration-300"
                >

                  Submit Candidate Profile

                </button>

              </form>

            </>

          )}

        </div>

      </div>

    </div>
  );
}