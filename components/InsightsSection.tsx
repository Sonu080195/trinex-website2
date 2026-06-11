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

    <section className="relative bg-[#F4F4F0] py-8 lg:py-10 px-4 sm:px-4 lg:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Grid Pattern */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

{/* Glow */}
<div
  className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
  style={{
    background:
      "radial-gradient(ellipse at top, rgba(200,155,60,0.07) 0%, transparent 65%)",
  }}
/>

        {/* TOP */}
        <div className="relative text-center mb-6 lg:mb-8">

  <div className="inline-flex items-center gap-3 mb-4">

    <span className="h-px w-8 bg-[#C89B3C]" />

    <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

      Industry Intelligence

    </p>

    <span className="h-px w-8 bg-[#C89B3C]" />

  </div>

  <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-[1.02] mb-4">

    Stay Ahead Of The

    <span className="text-[#C89B3C] ml-2">

      Industry

    </span>

  </h2>

  <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed max-w-5xl mx-auto">

    Explore recruitment trends, salary insights,
    workforce intelligence and market reports
    shaping the future of construction hiring.

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
              <div className="relative h-[180px] overflow-hidden">

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
              <div className="p-6">

                <h3 className="text-[#07111F] text-[22px] font-bold leading-tight mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-500 text-[16px] leading-8 mb-5">

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

    </section>

  );
}