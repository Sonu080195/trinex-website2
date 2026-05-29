export default function WhyChooseUs() {

  const stats = [

    {
      value: "100+",
      title: "Successful Placements",
      description:
        "Connecting top-tier AEC & MEP professionals with industry-leading firms.",
    },

    {
      value: "48H",
      title: "Average Shortlist Delivery",
      description:
        "Rapid access to qualified talent for urgent and confidential hiring needs.",
    },

    {
      value: "92%",
      title: "Retention Success",
      description:
        "Long-term placements that align with company culture and project goals.",
    },

    {
      value: "AEC + MEP",
      title: "Specialized Recruitment",
      description:
        "Deep market expertise across commercial, industrial, civil, and mission critical sectors.",
    },

  ];

  const features = [

    "Executive Search",
    "Confidential Hiring",
    "Project Staffing",
    "Leadership Recruitment",
    "Nationwide Talent Network",
    "Market Intelligence",

  ];

  return (

    <section className="relative bg-[#07111F] overflow-hidden py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div className="max-w-3xl mb-10 sm:mb-14">

          <p className="text-[#C89B3C] uppercase tracking-[3px] sm:tracking-[4px] text-[11px] sm:text-sm mb-5">

            Why Industry Leaders Choose RUDRON

          </p>

        <h2 className="text-white text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold leading-[1.02] mb-4">

            Recruitment Built For
            <br />

            High-Performance Teams.

          </h2>

          <p className="text-gray-500 text-[15px] sm:text-xl leading-7 sm:leading-9 max-w-4xl mx-auto">

            We deliver strategic talent solutions for construction firms, general contractors, subcontractors, and mission critical organizations across high-growth markets.

          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[24px] p-5 sm:p-6 backdrop-blur-sm hover:border-[#C89B3C]/30 transition-all duration-500"
            >

              {/* VALUE */}
              <h3 className="text-[#C89B3C] text-[28px] sm:text-[34px] font-bold mb-3 leading-none">

                {item.value}

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
              className="bg-white/[0.04] border border-white/10 rounded-full px-4 sm:px-5 py-2.5 sm:py-3"
            >

              <p className="text-white text-[12px] sm:text-[14px] font-medium">

                {feature}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}