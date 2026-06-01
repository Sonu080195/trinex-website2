"use client";

import { useState } from "react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function ApplyModal({
  isOpen,
  onClose,
  jobTitle,
}: ApplyModalProps) {

  const [submitted, setSubmitted] =
    useState(false);

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-[#0D1726] border border-white/10 rounded-[30px] w-full max-w-3xl max-h-[88vh] overflow-y-auto p-6 lg:p-8">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-3xl leading-none"
        >

          ×

        </button>

        {/* SUCCESS */}
        {submitted ? (

          <div className="py-20 text-center">

            <div className="w-20 h-20 rounded-full bg-[#C89B3C]/20 flex items-center justify-center mx-auto mb-6">

              <span className="text-[#C89B3C] text-4xl">

                ✓

              </span>

            </div>

            <h2 className="text-white text-[36px] font-bold mb-4">

              Application Submitted

            </h2>

            <p className="text-gray-400 leading-8 max-w-lg mx-auto mb-8">

              Thank you for applying. Our recruitment team will review your profile and contact you shortly.

            </p>

            <button
              onClick={onClose}
              className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >

              Close

            </button>

          </div>

        ) : (

          <>
            {/* HEADER */}
            <div className="mb-8">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs mb-3">

                Apply Now

              </p>

              <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-tight mb-4">

                Apply For
                <br />

                {jobTitle}

              </h2>

              <p className="text-gray-400 leading-7 text-[15px] max-w-2xl">

                Submit your confidential application and our recruitment team will review your profile for this opportunity.

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
                value={`New Application - ${jobTitle}`}
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_next"
                value="false"
              />

              {/* HIDDEN IFRAME */}
              <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
              />

              {/* NAME */}
              <div className="grid md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-gray-300 text-sm mb-2">

                    First Name

                  </label>

                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full h-[54px] bg-[#07111F] border border-white/10 rounded-xl px-5 text-white outline-none"
                    placeholder="John"
                  />

                </div>

                <div>

                  <label className="block text-gray-300 text-sm mb-2">

                    Last Name

                  </label>

                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full h-[54px] bg-[#07111F] border border-white/10 rounded-xl px-5 text-white outline-none"
                    placeholder="Doe"
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">

                  Email Address

                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full h-[54px] bg-[#07111F] border border-white/10 rounded-xl px-5 text-white outline-none"
                  placeholder="john@example.com"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">

                  Phone Number

                </label>

                <input
                  type="tel"
                  name="phone"
                  className="w-full h-[54px] bg-[#07111F] border border-white/10 rounded-xl px-5 text-white outline-none"
                  placeholder="+1 (555) 000-0000"
                />

              </div>

              {/* LINKEDIN */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">

                  LinkedIn Profile

                </label>

                <input
                  type="url"
                  name="linkedin"
                  className="w-full h-[54px] bg-[#07111F] border border-white/10 rounded-xl px-5 text-white outline-none"
                  placeholder="https://linkedin.com/in/username"
                />

              </div>

              {/* RESUME */}
<div>

  <label className="block text-gray-300 text-sm mb-2">

    Upload Resume

  </label>

  <label className="flex items-center justify-between bg-[#07111F] border border-dashed border-white/15 hover:border-[#C89B3C]/50 rounded-xl px-5 py-4 cursor-pointer transition-all duration-300">

    <div>

      <p className="text-white text-sm font-medium">

        Upload Resume

      </p>

      <p className="text-gray-500 text-xs mt-1">

        PDF, DOC, DOCX

      </p>

    </div>

    <div className="text-[#C89B3C] text-sm font-semibold">

      Browse

    </div>

    <input
      type="file"
      name="attachment"
      accept=".pdf,.doc,.docx"
      required
      className="hidden"
    />

  </label>

</div>

              {/* MESSAGE */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">

                  Cover Letter / Additional Information

                </label>

                <textarea
                  rows={4}
                  name="message"
                  className="w-full bg-[#07111F] border border-white/10 rounded-xl px-5 py-4 text-white outline-none resize-none"
                  placeholder="Tell us about your background, experience, or career goals..."
                />

              </div>

              {/* CONSENT */}
              <div className="flex items-start gap-3 pt-1">

                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                <p className="text-gray-400 text-sm leading-7">

                  I consent to RUDRON Global Talent Solutions storing and processing my personal information for recruitment purposes.

                </p>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold py-4 rounded-xl transition-all duration-300 mt-2"
              >

                Submit Application

              </button>

            </form>
          </>
        )}

      </div>

    </div>
  );
}