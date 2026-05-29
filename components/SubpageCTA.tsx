"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import RequestCallModal from "./RequestCallModal";
import CandidateModal from "./CandidateModal";

export default function SubpageCTA() {

const [showCandidateModal, setShowCandidateModal] =
  useState(false);

  const [showRequestCallModal, setShowRequestCallModal] =
  useState(false);

const router = useRouter();

  return (

    <section className="relative py-20 px-8 bg-[#07111F] overflow-hidden">

      {/* BACKGROUND ACCENT */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-[#0E1726]" />

      {/* CARD */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="bg-white rounded-[36px] shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
                Employers
              </p>

              <h3 className="text-[#07111F] text-4xl font-bold mb-6">
                Build High-Performing Teams
              </h3>

              <p className="text-gray-600 text-xl leading-10 mb-10 max-w-[620px]">

                Partner with RUDRON to secure elite AEC & MEP
                professionals for your critical construction projects.

              </p>

              <div className="flex flex-wrap gap-5">

                <button
  onClick={() => router.push("/contact")}
  className="border-2 border-[#C89B3C] text-[#07111F] px-8 py-4 rounded-xl font-semibold hover:bg-[#C89B3C] transition"
>
  Upload Job Requirement
</button>

                <button
  onClick={() => setShowRequestCallModal(true)}
  className="bg-[#07111F] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
>
  Request A Call
</button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="p-14 lg:p-16">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
                Candidates
              </p>

              <h3 className="text-[#07111F] text-4xl font-bold mb-6">
                Explore Career Opportunities
              </h3>

              <p className="text-gray-600 text-xl leading-10 mb-10 max-w-[520px]">

                Discover leading AEC & MEP construction opportunities
                and connect with top contractors and developers.

              </p>

              <div className="flex flex-wrap gap-5">

                <button
  onClick={() => setShowCandidateModal(true)}
  className="border-2 border-[#C89B3C] text-[#07111F] px-8 py-4 rounded-xl font-semibold hover:bg-[#C89B3C] transition"
>
  Submit Resume
</button>

                <button
  onClick={() => router.push("/jobs")}
  className="bg-[#07111F] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
>
  View Live Jobs
</button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <RequestCallModal
  isOpen={showRequestCallModal}
  onClose={() => setShowRequestCallModal(false)}
/>

<CandidateModal
  isOpen={showCandidateModal}
  onClose={() => setShowCandidateModal(false)}
/>

    </section>

  );
}