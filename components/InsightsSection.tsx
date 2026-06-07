import Link from "next/link";

export default function InsightsSection() {

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
        "Understanding compensation trends, workforce shortages, and hiring challenges across MEP markets.",
    },
  ];

  return (

    <section className="bg-[#F7F7F7] px-5 sm:px-4 lg:px-10 pb-12 sm:pb-16 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 sm:mb-10">

          <div>

            <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-3 sm:mb-4">

              <br />

              Industry Intelligence

            </p>

            <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] mb-4">

              Stay Ahead Of The Industry

            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-5 sm:leading-6 max-w-3xl">

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

        {/* MOBILE STACKED CARDS */}
<div className="flex flex-col lg:hidden gap-5">

  {insights.map((item, index) => (

    <Link
      href={`/insights/${item.slug}`}
      key={index}
      className="group bg-white rounded-[22px] overflow-hidden border border-black/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 block"
    >

      <div className="flex flex-col">

        {/* IMAGE */}
        <div className="relative h-[180px] overflow-hidden">

          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/70 to-transparent" />

          {/* CATEGORY */}

          <div className="absolute bottom-4 left-4">

            <div className="bg-[#C89B3C] text-black text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

              {item.category}

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-5">

          <h3 className="text-[#07111F] text-[22px] font-bold leading-[1.2] mb-3">

            {item.title}

          </h3>

          <p className="text-gray-500 text-[14px] leading-7 mb-5">

            {item.description}

          </p>

          {/* READ MORE */}
          <div className="group/read flex items-center gap-2 text-[#07111F] text-[14px] font-semibold">

            Read More

            <span className="text-[#C89B3C] text-lg transition duration-300 group-hover/read:translate-x-2">
              →
            </span>

          </div>

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
              className="
group
bg-white
rounded-[30px]
overflow-hidden
border
border-black/5
hover:-translate-y-3
hover:border-[#C89B3C]/20
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
transition-all
duration-500
block
"
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
                <div className="absolute top-4 right-4">

  <div className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full">

    {item.readTime}

  </div>

</div>

                <div className="absolute bottom-3 left-3">

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