import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Sparkles,
  Users,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";

const stats = [
  {
    value: "100+",
    label: "Placements",
  },
  {
    value: "USA",
    label: "Coverage",
  },
  {
    value: "AEC + MEP",
    label: "Specialists",
  },
];

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F0] px-4 py-8 sm:px-4 lg:px-20 lg:py-10">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-1/2 top-[-130px] h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[95px]" />
      <div className="pointer-events-none absolute -right-20 bottom-[-130px] h-[260px] w-[260px] rounded-full bg-[#C89B3C]/10 blur-[95px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[36px] border border-black/[0.06] bg-[#F9F7F2] shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.09)]">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />

          <div className="grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-[320px_1fr_280px] lg:p-8">
            {/* Left image */}
            <div className="relative h-[180px] overflow-hidden rounded-[22px] border border-[#C89B3C]/20 lg:h-[170px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out group-hover:scale-[1.06]"
                style={{
                  backgroundImage: "url('/hero-bg.webp')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/78 via-[#07111F]/50 to-[#07111F]/25" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.22),transparent_42%)]" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#07111F]/60 px-3 py-2 backdrop-blur-md">
                <Sparkles size={13} className="text-[#C89B3C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-white">
                  Specialist AEC Recruiters
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/rudron-logo.webp"
                  alt="RUDRON Global Talent Solutions"
                  className="mb-2 w-[150px] sm:w-[170px]"
                />
              </div>
            </div>

            {/* Center content */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />
                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#C89B3C]">
                  Let&apos;s Build What&apos;s Next
                </p>
              </div>

              <h2 className="mb-4 text-[24px] font-bold leading-[1.05] text-[#07111F] sm:text-[30px] lg:text-[38px]">
                Ready To Build Your Next Project Team?
                <br />
                <span className="bg-gradient-to-r from-[#07111F] to-[#C89B3C] bg-clip-text text-transparent">
                  Or Take The Next Step In Your Career?
                </span>
              </h2>

              <p className="max-w-2xl text-sm leading-6 text-gray-600">
                Whether you are hiring top talent or planning your next career
                move, RUDRON helps you take the next step across construction,
                engineering and MEP markets.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={14} className="text-[#C89B3C]" />
                  Employer Hiring Support
                </span>

                <span className="inline-flex items-center gap-2">
                  <Users size={14} className="text-[#C89B3C]" />
                  Candidate Career Support
                </span>

                <span className="inline-flex items-center gap-2">
                  <Building2 size={14} className="text-[#C89B3C]" />
                  Construction &amp; MEP Focus
                </span>
              </div>
            </div>

            {/* Right buttons and stats */}
            <div className="flex flex-col gap-4 lg:items-end">
              <Link href="/contact"
              className="group/button flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C89B3C] px-8 py-5 font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D3A647] hover:shadow-[0_12px_30px_rgba(200,155,60,0.30)] lg:w-[260px]"
              >
                Hire Top Talent
              </Link>

              <Link
                href="/jobs"
                className="group/button flex w-full items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-8 py-5 font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] lg:w-[260px]"
              >
                Explore Jobs
                <ArrowRight
                  size={17}
                  className="text-[#C89B3C] transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

              <div className="grid w-full grid-cols-3 gap-2 lg:w-[260px]">
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className="group/stat relative overflow-hidden rounded-xl border border-black/[0.06] bg-white/80 px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35 hover:shadow-[0_10px_24px_rgba(200,155,60,0.08)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                    <div className="relative">
                      <span className="absolute right-0 top-[-2px] text-[8px] font-semibold text-black/15">
                        0{index + 1}
                      </span>

                      <p className="text-[13px] font-bold text-[#C89B3C]">
                        {item.value}
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-gray-500">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}