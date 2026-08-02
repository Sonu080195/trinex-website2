import {
  BarChart3,
  Handshake,
  SearchCheck,
  Sparkles,
  Target,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Industry Specialists",
    description:
      "Focused exclusively on AEC, MEP, mission critical, healthcare and infrastructure recruitment markets.",
    icon: Target,
  },
  {
    number: "02",
    title: "Executive Search Expertise",
    description:
      "Supporting confidential leadership, operational and executive hiring across North America.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Relationship Driven",
    description:
      "Long-term partnerships built through trust, market knowledge and consistent delivery.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Market Intelligence",
    description:
      "Salary benchmarking, talent mapping and hiring insights that support informed decisions.",
    icon: BarChart3,
  },
];

const highlights = [
  ["100+", "Placements"],
  ["48H", "Shortlist Delivery"],
  ["95%", "Retention Rate"],
];

const features = [
  "Healthcare Construction",
  "Data Centers",
  "Mission Critical",
  "Commercial Construction",
  "Infrastructure",
  "Executive Search",
  "Project Staffing",
  "MEP Recruitment",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] px-4 py-8 sm:px-4 lg:px-20 lg:py-10">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.13),transparent_32%)]" />
      <div className="pointer-events-none absolute -left-32 bottom-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[340px] w-[620px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-4xl text-center lg:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Why Industry Leaders Choose RUDRON
              </p>
            </div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2 className="mb-5 text-[30px] font-bold leading-[1.02] text-white sm:text-[40px] lg:text-[56px]">
            Recruitment Built For
            <br />

            <span className="relative inline-block bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
              High-Performance Teams

              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#C89B3C] to-transparent opacity-25" />
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-gray-400 sm:text-[17px]">
            RUDRON combines industry expertise, executive search capability and
            deep construction market knowledge to help organizations secure
            exceptional talent.
          </p>
        </div>

        {/* Compact highlight stats */}
        <div className="mb-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {highlights.map(([value, label], index) => (
            <article
              key={label}
              className="group relative min-w-[120px] overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/30 hover:bg-white/[0.06] hover:shadow-[0_14px_35px_rgba(200,155,60,0.08)] sm:min-w-[145px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <span className="absolute right-0 top-0 text-[8px] font-semibold tracking-[2px] text-white/15">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold text-[#C89B3C]">
                  {value}
                </h3>

                <p className="mt-1 text-sm text-gray-400">{label}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Main cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:bg-white/[0.045] hover:shadow-[0_20px_50px_rgba(200,155,60,0.09)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,155,60,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 rounded-b-full bg-gradient-to-r from-[#C89B3C] to-[#E8B84B] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="pointer-events-none absolute right-4 top-0 select-none text-[90px] font-black leading-none text-white/[0.035] transition-all duration-500 group-hover:scale-105 group-hover:text-[#C89B3C]/10">
                  {item.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C89B3C]/20 bg-[#C89B3C]/10 text-[#C89B3C] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#C89B3C]/15">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C89B3C]/70 transition-colors duration-300 group-hover:text-[#C89B3C]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[18px] font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#C89B3C] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#C89B3C]/25 via-white/[0.06] to-transparent" />

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[2px] text-white/30 transition-colors duration-300 group-hover:text-[#C89B3C]/75">
                    RUDRON Advantage
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="group rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/35 hover:bg-[#C89B3C]/10"
            >
              <p className="text-[12px] font-medium text-gray-300 transition-colors duration-300 group-hover:text-[#C89B3C] sm:text-[14px]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}