export default function WhyChooseUs() {

  const stats = [
  {
    value: "01",
    title: "Industry Specialists",
    description:
      "Focused exclusively on AEC, MEP, mission critical, healthcare and infrastructure recruitment markets.",
  },

  {
    value: "02",
    title: "Executive Search Expertise",
    description:
      "Supporting confidential leadership, operational and executive hiring across North America.",
  },

  {
    value: "03",
    title: "Relationship Driven",
    description:
      "Long-term partnerships built through trust, market knowledge and consistent delivery.",
  },

  {
    value: "04",
    title: "Market Intelligence",
    description:
      "Salary benchmarking, talent mapping and hiring insights that support informed decisions.",
  },
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

  return (

    <section className="relative bg-[#07111F] overflow-hidden py-8 lg:py-10 px-4 sm:px-4 lg:px-20 overflow-hidden">

      {/* GRID PATTERN */}

<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div className="max-w-4xl mb-10 lg:mb-14">

  <div className="inline-flex items-center gap-3 mb-4">

    <span className="h-px w-8 bg-[#C89B3C]" />

    <p className="text-[#C89B3C] uppercase tracking-[5px] text-xs font-semibold">

      Why Industry Leaders Choose RUDRON

    </p>

    <span className="h-px w-8 bg-[#C89B3C]" />

  </div>

  <h2 className="text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.02] mb-5">

    Recruitment Built For

    <br />

    <span className="relative inline-block text-[#C89B3C]">

      High-Performance Teams

      <span
        className="
        absolute
        left-0
        bottom-0
        w-full
        h-[3px]
        bg-[#C89B3C]
        rounded-full
        opacity-20
        "
      />

    </span>

  </h2>

  <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-5xl">

    RUDRON combines industry expertise,
    executive search capability and deep
    construction market knowledge to help
    organizations secure exceptional talent.

  </p>

</div>

<div className="flex flex-wrap gap-4 mb-6">

  {[
    ["100+", "Placements"],
    ["48H", "Shortlist Delivery"],
    ["95%", "Retention Rate"],
  ].map((item) => (

    <div
      key={item[1]}
      className="
      bg-white/[0.04]
      border
      border-white/10
      rounded-[18px]
      px-5
      py-4
      "
    >

      <h3 className="text-[#C89B3C] text-2xl font-bold">

        {item[0]}

      </h3>

      <p className="text-gray-400 text-sm">

        {item[1]}

      </p>

    </div>

  ))}

</div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
group
bg-white/[0.03]
border
border-white/10
rounded-[28px]
p-6
backdrop-blur-sm
hover:-translate-y-3
hover:border-[#C89B3C]/30
hover:shadow-[0_20px_50px_rgba(200,155,60,0.08)]
transition-all
duration-500
relative
overflow-hidden
"
            >

{/* VALUE */}

<h3 className="text-[#C89B3C] text-[18px] font-bold mb-4 uppercase tracking-[2px]">

{item.value}

<div className="absolute right-4 top-0 text-[90px] font-bold text-white/[0.04] leading-none">

  {item.value}

</div>

              </h3>

              {/* TITLE */}
              <h4 className="text-white text-[17px] sm:text-[19px] font-semibold leading-snug mb-3">

                {item.title}

              </h4>

              {/* DESC */}
              <p className="text-gray-400 text-[13px] sm:text-[14px] leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-3">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
bg-white/[0.04]
border
border-white/10
rounded-full
px-5
py-3
hover:border-[#C89B3C]/30
hover:text-[#C89B3C]
transition-all
duration-300
"
            >

              <p className="text-gray-300 text-[12px] sm:text-[14px] font-medium group-hover:text-[#C89B3C] transition-colors duration-300">

                {feature}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}