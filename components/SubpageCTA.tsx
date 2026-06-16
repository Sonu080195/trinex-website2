"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import RequestCallModal from "./RequestCallModal";
import CandidateModal from "./CandidateModal";

export default function SubpageCTA() {
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [showRequestCallModal, setShowRequestCallModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="relative py-8 px-6 bg-[#07111F] overflow-hidden">

        {/* Top accent band */}
        <div className="absolute top-0 left-0 w-full h-[180px] bg-[#0E1726]" />

        {/* Animated card */}
        <div
          className="relative z-10 max-w-4xl mx-auto bg-white rounded-[28px] shadow-2xl overflow-hidden
                     animate-[cardIn_0.65s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]"
          style={{ animation: "cardIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
        >
          <style>{`
            @keyframes cardIn {
              from { opacity: 0; transform: translateY(28px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .cta-eyebrow  { animation: fadeUp 0.5s ease both; }
            .cta-title    { animation: fadeUp 0.5s ease both; }
            .cta-desc     { animation: fadeUp 0.5s ease both; }
            .cta-btns     { animation: fadeUp 0.5s ease both; }
            .cta-panel-l .cta-eyebrow { animation-delay: 0.45s; }
            .cta-panel-l .cta-title   { animation-delay: 0.50s; }
            .cta-panel-l .cta-desc    { animation-delay: 0.55s; }
            .cta-panel-l .cta-btns    { animation-delay: 0.60s; }
            .cta-panel-r .cta-eyebrow { animation-delay: 0.55s; }
            .cta-panel-r .cta-title   { animation-delay: 0.60s; }
            .cta-panel-r .cta-desc    { animation-delay: 0.65s; }
            .cta-panel-r .cta-btns    { animation-delay: 0.70s; }
          `}</style>

          <div className="grid lg:grid-cols-2">

            {/* LEFT — Employers */}
            <div className="cta-panel-l p-10 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col gap-3">
              <p className="cta-eyebrow text-[#C89B3C] text-[10px] uppercase tracking-[4.5px] font-semibold">
                Employers
              </p>
              <h3 className="cta-title text-[#07111F] text-[22px] font-bold leading-snug">
                Build High-Performing Teams
              </h3>
              <p className="cta-desc text-gray-500 text-[13.5px] leading-7 mb-2">
                Partner with RUDRON to secure elite AEC &amp; MEP professionals
                for your critical construction projects.
              </p>
              <div className="cta-btns flex flex-col gap-2.5">
                <button
                  onClick={() => router.push("/contact")}
                  className="group flex items-center justify-center gap-2 bg-[#C89B3C] text-[#07111F] px-5 py-[11px] rounded-[10px] text-[12.5px] font-semibold tracking-wide shadow-[0_2px_8px_rgba(200,155,60,0.28)] hover:bg-[#D5A943] hover:shadow-[0_4px_16px_rgba(200,155,60,0.38)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150"
                >
                  Upload Job Requirement
                  <ArrowRight />
                </button>
                <button
                  onClick={() => setShowRequestCallModal(true)}
                  className="flex items-center justify-center bg-[#07111F] text-white px-5 py-[11px] rounded-[10px] text-[12.5px] font-semibold hover:bg-[#0D1E31] hover:shadow-[0_4px_14px_rgba(7,17,31,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150"
                >
                  Request A Call
                </button>
              </div>
            </div>

            {/* RIGHT — Candidates */}
            <div className="cta-panel-r p-10 flex flex-col gap-3">
              <p className="cta-eyebrow text-[#C89B3C] text-[10px] uppercase tracking-[4.5px] font-semibold">
                Candidates
              </p>
              <h3 className="cta-title text-[#07111F] text-[22px] font-bold leading-snug">
                Explore Career Opportunities
              </h3>
              <p className="cta-desc text-gray-500 text-[13.5px] leading-7 mb-2">
                Discover leading AEC &amp; MEP construction opportunities and
                connect with top contractors and developers.
              </p>
              <div className="cta-btns flex flex-col gap-2.5">
                <button
                  onClick={() => setShowCandidateModal(true)}
                  className="group flex items-center justify-center gap-2 bg-[#C89B3C] text-[#07111F] px-5 py-[11px] rounded-[10px] text-[12.5px] font-semibold tracking-wide shadow-[0_2px_8px_rgba(200,155,60,0.28)] hover:bg-[#D5A943] hover:shadow-[0_4px_16px_rgba(200,155,60,0.38)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150"
                >
                  Submit Resume
                  <ArrowRight />
                </button>
                <button
                  onClick={() => router.push("/jobs")}
                  className="flex items-center justify-center bg-[#07111F] text-white px-5 py-[11px] rounded-[10px] text-[12.5px] font-semibold hover:bg-[#0D1E31] hover:shadow-[0_4px_14px_rgba(7,17,31,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150"
                >
                  View Live Jobs
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <RequestCallModal
        isOpen={showRequestCallModal}
        onClose={() => setShowRequestCallModal(false)}
      />
      <CandidateModal
        isOpen={showCandidateModal}
        onClose={() => setShowCandidateModal(false)}
      />
    </>
  );
}

function ArrowRight() {
  return (
    <svg
      width="13" height="13" viewBox="0 0 16 16"
      fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}