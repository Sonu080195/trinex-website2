import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const insights = [
  {
    title: "2026 Construction Hiring Trends",
    readTime: "4 Min Read",
    image: "/insights/construction-trends.webp",
    category: "Market Insights",
    slug: "construction-hiring-trends",
    description:
      "Key trends shaping talent demand and how companies can stay ahead in a competitive market.",
  },
  {
    title: "The Growing Demand for Data Center Talent",
    readTime: "4 Min Read",
    image: "/insights/datacenter-talent.webp",
    category: "Industry News",
    slug: "data-center-construction-hiring",
    description:
      "Why hyperscale expansion is driving massive demand for mission critical professionals.",
  },
  {
    title: "MEP Salary & Workforce Insights",
    readTime: "4 Min Read",
    image: "/insights/mep-salary.webp",
    category: "Salary Guides",
    slug: "mep-talent-shortage",
    description:
      "Understanding compensation trends, workforce shortages and hiring challenges across MEP markets.",
  },
];

export default function InsightsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F0] px-4 py-8 sm:px-4 lg:px-20 lg:py-10">
      {/* Background details */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[95px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-140px] h-[280px] w-[280px] rounded-full bg-[#C89B3C]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-7 text-center lg:mb-9">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89B3C]" />

            <div className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-[#C89B3C]" />

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Industry Intelligence
              </p>
            </div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89B3C]" />
          </div>

          <h2 className="mb-4 text-[28px] font-bold leading-[1.02] text-[#07111F] sm:text-[36px] lg:text-[52px]">
            Stay Ahead Of The
            <span className="ml-2 bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
              Industry
            </span>
          </h2>

          <p className="mx-auto max-w-5xl text-[15px] leading-relaxed text-gray-500 sm:text-[17px]">
            Explore recruitment trends, salary insights, workforce intelligence
            and market reports shaping the future of construction hiring.
          </p>

          <Link
            href="/insights"
            className="group mt-5 hidden items-center justify-center gap-2 text-[15px] font-semibold text-[#07111F] sm:inline-flex"
          >
            View All Insights
            <ArrowRight
              size={18}
              className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
          {insights.map((item, index) => (
            <Link
              href={`/insights/${item.slug}`}
              key={item.slug}
              className="group relative block overflow-hidden rounded-[24px] border border-black/[0.05] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/25 hover:shadow-[0_20px_50px_rgba(200,155,60,0.11)] lg:rounded-[30px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.08]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-[#07111F]/15 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#07111F]/45 px-3 py-2 text-[11px] text-white backdrop-blur-md">
                  <Clock3 size={13} className="text-[#C89B3C]" />
                  {item.readTime}
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#C89B3C] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#07111F] shadow-[0_8px_22px_rgba(200,155,60,0.24)] sm:text-xs">
                    {item.category}
                  </span>
                </div>

                <span className="absolute bottom-4 right-4 text-[11px] font-semibold tracking-[2px] text-white/35">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-5 lg:p-6">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#C89B3C]">
                  <TrendingUp size={14} />
                  Market Intelligence
                </div>

                <h3 className="mb-3 text-[21px] font-bold leading-tight text-[#07111F] transition-colors duration-300 group-hover:text-[#C89B3C] lg:text-[22px]">
                  {item.title}
                </h3>

                <p className="mb-5 text-[14px] leading-7 text-gray-500 lg:text-[15px]">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <span className="text-[14px] font-semibold text-[#07111F]">
                    Read More
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 text-[#C89B3C] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#C89B3C] group-hover:text-[#07111F]">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#07111F]"
          >
            View All Insights
            <ArrowRight
              size={18}
              className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}