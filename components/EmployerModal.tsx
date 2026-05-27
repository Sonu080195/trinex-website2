"use client";

import { useState } from "react";

import {
  Building2,
  Users,
  BriefcaseBusiness,
  Mail,
  Phone,
  X,
} from "lucide-react";

interface EmployerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmployerModal({
  isOpen,
  onClose,
}: EmployerModalProps) {

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

                Request Submitted

              </h2>

              <p className="text-gray-400 leading-7 max-w-md mb-8">

                Our executive recruitment team will contact you shortly regarding your hiring needs.

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

                  Employer Inquiry

                </p>

                <h2 className="text-white text-[28px] sm:text-[34px] font-bold leading-[1.05] mb-4">

                  Build Your
                  <br />

                  Winning Team.

                </h2>

                <p className="text-gray-400 text-[14px] leading-6 max-w-md">

                  Connect with our recruitment specialists to discuss your hiring requirements across AEC & MEP sectors.

                </p>

              </div>

              {/* FORM */}
              <form
                action="https://formsubmit.co/info@rudron.com"
                method="POST"
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
                  value="New Employer Inquiry"
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

                {/* COMPANY */}
                <div className="relative">

                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company Name"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                  />

                </div>

                {/* HIRING FOR */}
                <div className="relative">

                  <BriefcaseBusiness
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="text"
                    name="hiring_for"
                    required
                    placeholder="Hiring For"
                    className="w-full h-[56px] bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-5 text-white outline-none"
                  />

                </div>

                {/* HIRING VOLUME */}
                <div className="relative">

                  <Users
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
                  />

                  <input
                    type="text"
                    name="volume"
                    placeholder="Hiring Volume"
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

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your hiring needs..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold py-4 rounded-2xl transition-all duration-300"
                >

                  Request Talent Consultation

                </button>

              </form>

            </>

          )}

        </div>

      </div>

    </div>
  );
}