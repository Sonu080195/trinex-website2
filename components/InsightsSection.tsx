import Link from "next/link";

export default function InsightsSection() {

  const insights = [
    {
      title: "2026 Construction Hiring Trends",
      image: "/insights/construction-trends.png",
      category: "Market Insights",
      slug: "construction-hiring-trends",

      description:
        "Key trends shaping talent demand and how companies can stay ahead in a competitive market.",
    },

    {
      title: "The Growing Demand for Data Center Talent",
      image: "/insights/datacenter-talent.png",
      category: "Industry News",
      slug: "data-center-construction-hiring",

      description:
        "Why hyperscale expansion is driving massive demand for mission critical professionals.",
    },

    {
      title: "MEP Salary & Workforce Insights",
      image: "/insights/mep-salary.png",
      category: "Salary Guides",
      slug: "mep-talent-shortage",

      description:
        "Understanding compensation trends, workforce shortages, and hiring challenges across MEP markets.",
    },
  ];

  return (

    <section className="bg-[#F7F7F7] px-5 sm:px-6 lg:px-12 pb-14 sm:pb-18 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 sm:mb-10">

          <div>

            <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-3 sm:mb-4">

              <br />
              <br />

              Insights & Resources

            </p>

            <h2 className="text-[#07111F] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-[1.08] mb-4">

              Stay Ahead Of The Industry

            </h2>

            <p className="text-gray-500 text-[14px] sm:text-lg leading-7 sm:leading-6 max-w-3xl">

              Explore recruitment trends, salary insights, and market updates
              shaping the future of AEC & MEP hiring.

            </p>

          </div>

          {/* VIEW ALL */}
          <Link
            href="/insights"
            className="group hidden sm:flex items-center gap-3 text-[#07111F] text-lg font-semibold"
          >

            View All Insights

            <span className="text-[#C89B3C] text-2xl transition duration-300 group-hover:translate-x-2">
              →
            </span>

          </Link>

        </div>

        {/* MOBILE SCROLL CARDS */}
        <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">

          {insights.map((item, index) => (

            <Link
              href={`/insights/${item.slug}`}
              key={index}
              className="group min-w-[88%] sm:min-w-[420px] bg-white rounded-[24px] overflow-hidden border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 block snap-start shrink-0"
            >

              {/* IMAGE */}
              <div className="relative h-[200px] sm:h-[220px] overflow-hidden">

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/70 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute bottom-4 left-4">

                  <div className="bg-[#C89B3C] text-black text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] px-3 sm:px-4 py-2 rounded-full">

                    {item.category}

                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-[#07111F] text-[24px] sm:text-[28px] font-bold leading-tight mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-500 text-[14px] sm:text-[15px] leading-7 mb-6">

                  {item.description}

                </p>

                {/* READ MORE */}
                <div className="group/read flex items-center gap-2 text-[#07111F] text-[15px] sm:text-lg font-semibold">

                  Read More

                  <span className="text-[#C89B3C] text-xl sm:text-2xl transition duration-300 group-hover/read:translate-x-2">
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-3 gap-8">

          {insights.map((item, index) => (

            <Link
              href={`/insights/${item.slug}`}
              key={index}
              className="group bg-white rounded-[28px] overflow-hidden border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 block"
            >

              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden">

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/70 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute bottom-5 left-5">

                  <div className="bg-[#C89B3C] text-black text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                    {item.category}

                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-[#07111F] text-[28px] font-bold leading-tight mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-500 text-[16px] leading-8 mb-8">

                  {item.description}

                </p>

                {/* READ MORE */}
                <div className="group/read flex items-center gap-3 text-[#07111F] text-lg font-semibold">

                  Read More

                  <span className="text-[#C89B3C] text-2xl transition duration-300 group-hover/read:translate-x-2">
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* MOBILE VIEW ALL */}
        <div className="flex sm:hidden mt-7">

          <Link
            href="/insights"
            className="group flex items-center gap-2 text-[#07111F] text-[15px] font-semibold"
          >

            View All Insights

            <span className="text-[#C89B3C] text-xl transition duration-300 group-hover:translate-x-2">
              →
            </span>

          </Link>

        </div>

      </div>

    </section>

  );
}