import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const specialtyGroups = [
  {
    title: "Project Leadership",
    icon: BriefcaseBusiness,
    description:
      "Leadership talent for project delivery, field execution, estimating and preconstruction.",
    links: [
      {
        label: "Project Manager Recruitment",
        href: "/project-manager-recruitment",
      },
      {
        label: "Superintendent Recruitment",
        href: "/superintendent-recruitment",
      },
      {
        label: "Estimator Recruitment",
        href: "/estimator-recruitment",
      },
      {
        label: "Preconstruction Manager Recruitment",
        href: "/preconstruction-manager-recruitment",
      },
    ],
  },
  {
    title: "MEP Leadership",
    icon: Cog,
    description:
      "Specialist recruitment across mechanical, electrical, plumbing and digital construction.",
    links: [
      {
        label: "MEP Project Manager Recruitment",
        href: "/mep-project-manager-recruitment",
      },
      {
        label: "Mechanical Project Manager Recruitment",
        href: "/mechanical-project-manager-recruitment",
      },
      {
        label: "Electrical Project Manager Recruitment",
        href: "/electrical-project-manager-recruitment",
      },
      {
        label: "BIM / VDC Manager Recruitment",
        href: "/bim-vdc-manager-recruitment",
      },
    ],
  },
  {
    title: "Quality, Safety & Delivery",
    icon: ShieldCheck,
    description:
      "Professionals who protect quality, compliance, safety and successful project turnover.",
    links: [
      {
        label: "Commissioning Manager Recruitment",
        href: "/commissioning-manager-recruitment",
      },
      {
        label: "QA / QC Manager Recruitment",
        href: "/qa-qc-manager-recruitment",
      },
      {
        label: "Safety Manager Recruitment",
        href: "/safety-manager-recruitment",
      },
    ],
  },
];

export default function RecruitmentSpecialtiesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111F] py-16 text-white sm:py-16">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[130px] animate-pulse" />
        <div className="absolute -left-40 bottom-[-220px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[430px] w-[430px] rounded-full bg-[#C89B3C]/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="absolute left-[8%] top-24 h-px w-40 rotate-[-18deg] bg-gradient-to-r from-transparent via-[#C89B3C]/45 to-transparent" />
        <div className="absolute right-[10%] top-32 h-px w-52 rotate-[18deg] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
        <div className="absolute bottom-16 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C89B3C]" />
            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                Recruitment Specialties
              </p>
            </div>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Specialist Construction,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-white to-[#C89B3C] bg-clip-text text-transparent">
              Engineering & MEP Recruitment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-gray-400 sm:text-[16px]">
            Explore focused recruitment solutions across project leadership,
            preconstruction, MEP, digital construction, commissioning, quality
            and safety.
          </p>

          <Link
            href="/recruitment-specialties"
            className="group mt-7 inline-flex items-center gap-2 rounded-[12px] border border-[#C89B3C]/35 bg-[#C89B3C]/10 px-5 py-3 text-sm font-semibold text-[#C89B3C] shadow-[0_10px_35px_rgba(200,155,60,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#07111F] hover:shadow-[0_14px_40px_rgba(200,155,60,0.2)]"
          >
            View All Specialties
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {specialtyGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(200,155,60,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#C89B3C]/15 transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#C89B3C]/25 bg-[#C89B3C]/10 shadow-[0_10px_30px_rgba(200,155,60,0.08)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#C89B3C]/15">
                      <Icon
                        size={25}
                        className="text-[#C89B3C]"
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-[11px] font-semibold tracking-[3px] text-white/20">
                      0{groupIndex + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[#C89B3C]">
                    {group.title}
                  </h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-7 text-gray-400">
                    {group.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group/link relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0A1520]/90 px-4 py-3.5 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-[#C89B3C]/30 hover:bg-[#C89B3C]/[0.07] hover:text-white"
                      >
                        <span className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-[#C89B3C] transition-transform duration-300 group-hover/link:scale-y-100" />

                        <span className="relative">{link.label}</span>

                        <ArrowRight
                          size={15}
                          className="relative shrink-0 text-[#C89B3C] transition-all duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}