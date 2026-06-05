import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InsightsPage() {

  const insights = [

    {
      title: "2026 Construction Hiring Trends",
      image: "/insights/construction-trends.webp",
      category: "Market Insights",
      slug: "construction-hiring-trends",
    },

    {
      title: "The Growing Demand for Data Center Talent",
      image: "/insights/datacenter-talent.webp",
      category: "Industry News",
      slug: "data-center-construction-hiring",
    },

    {
      title: "MEP Salary & Workforce Insights",
      image: "/insights/mep-salary.webp",
      category: "Salary Guides",
      slug: "mep-talent-shortage",
    },

    {
      title: "Commercial Construction Market Outlook",
      image: "/insights/commercial-outlook.webp",
      category: "Commercial",
      slug: "commercial-construction-outlook",
    },

    {
      title: "Executive Search Strategies For Contractors",
      image: "/insights/executive-search.webp",
      category: "Executive Search",
      slug: "executive-search-construction",
    },

    {
      title: "Infrastructure Talent Shortages Continue Rising",
      image: "/insights/infrastructure-talent.webp",
      category: "Infrastructure",
      slug: "infrastructure-talent-shortage",
    },
  ];

  const resources = [

    {
      title: "Engineering News-Record",
      description:
        "Construction industry news, rankings, and market analysis.",
      link: "https://www.enr.com",
    },

    {
      title: "Construction Dive",
      description:
        "Daily construction news and industry trend insights.",
      link: "https://www.constructiondive.com",
    },

    {
      title: "Data Center Frontier",
      description:
        "Mission critical infrastructure and hyperscale market intelligence.",
      link: "https://www.datacenterfrontier.com",
    },

    {
      title: "Associated General Contractors",
      description:
        "Construction workforce reports and economic data.",
      link: "https://www.agc.org",
    },
  ];

  const intelligenceTopics = [
  {
    title: "Data Center Expansion",
    desc: "Hyperscale growth continues driving demand for mission critical talent.",
  },
  {
    title: "MEP Talent Shortages",
    desc: "Technical construction professionals remain among the hardest roles to fill.",
  },
  {
    title: "Executive Hiring",
    desc: "Leadership recruitment continues shaping long-term organizational growth.",
  },
  {
    title: "Infrastructure Growth",
    desc: "Public investment and modernization programs are increasing hiring demand.",
  },
];

const insightsMarquee = [
  "SALARY GUIDES",
  "HIRING TRENDS",
  "DATA CENTERS",
  "EXECUTIVE SEARCH",
  "INFRASTRUCTURE",
  "MEP",
  "COMMERCIAL",
];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[68vh] sm:min-h-[72vh] lg:min-h-[82vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 16%, rgba(7,17,31,0.80) 42%, rgba(7,17,31,0.22) 76%), url('/insights/featured-insight.webp')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[720px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Industry Intelligence

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[36px] sm:text-[50px] lg:text-[66px] mb-6">

                Construction
                Hiring Trends,
                Market Insights
                & Industry Reports

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[680px]">

                Explore construction hiring trends, workforce intelligence,
                salary insights, and market reports shaping the future
                of AEC & MEP recruitment.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TRENDING MARKET INTELLIGENCE */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT */}

    <div>

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Trending Intelligence

      </p>

      <h2 className="text-[#07111F] text-[26px] sm:text-[32px] lg:text-[56px] font-bold leading-[1.05] mb-6">

        What Construction
        Leaders Are Watching

      </h2>

      <div className="w-20 h-[3px] bg-[#C89B3C] rounded-full mb-8" />

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Workforce trends, compensation strategies,
        leadership hiring, and emerging project sectors
        continue reshaping recruitment across the built environment.

      </p>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-6">

        Explore the topics influencing hiring decisions,
        project delivery, talent acquisition, and long-term
        workforce planning across construction markets.

      </p>

    </div>

    {/* RIGHT */}

    <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[620px]">

      <div className="floating-card absolute top-0 left-0 bg-[#07111F] text-white rounded-[28px] p-5 lg:p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold mb-3">
          Data Center Expansion
        </h3>

        <p className="text-gray-300 leading-6">
          Hyperscale development continues accelerating.
        </p>

      </div>

      <div className="floating-card-2 absolute top-20 right-0 bg-[#0D1726] text-white rounded-[28px] p-5 lg:p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold mb-3">
          MEP Talent Shortages
        </h3>

        <p className="text-gray-300 leading-6">
          Specialized talent remains highly competitive.
        </p>

      </div>

      <div className="floating-card absolute bottom-20 left-0 lg:left-0 bg-[#07111F] text-white rounded-[28px] p-5 lg:p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold mb-3">
          Executive Hiring
        </h3>

        <p className="text-gray-300 leading-6">
          Leadership demand continues rising nationwide.
        </p>

      </div>

      <div className="floating-card-2 absolute bottom-0 right-0 lg:right-0 bg-[#0D1726] text-white rounded-[28px] p-5 lg:p-6 border border-white/10 w-[190px] sm:w-[240px] lg:w-[320px]">

        <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold mb-3">
          Infrastructure Growth
        </h3>

        <p className="text-gray-300 leading-6">
          Public investment is creating workforce demand.
        </p>

      </div>

    </div>

  </div>

</section>

{/* INSIGHTS MARQUEE */}

<section className="bg-[#07111F] py-4 lg:py-6 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...insightsMarquee, ...insightsMarquee].map(
      (item, index) => (

        <div
          key={index}
          className="flex items-center"
        >

          <span className="text-white text-[18px] sm:text-[24px] lg:text-[34px] font-bold mx-5">

            {item}

          </span>

          <span className="text-[#C89B3C] text-2xl">

            ◆

          </span>

        </div>

      )
    )}

  </div>

</section>

      {/* FEATURED REPORT */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

            {/* IMAGE */}
            <div
              className="h-[260px] sm:h-[360px] lg:h-[440px] rounded-[28px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/insights/featured-insight.webp')",
              }}
            />

            {/* CONTENT */}
            <div>

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Featured Report

              </p>

              <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

                AI Infrastructure &
                The Future Of
                Construction Hiring

              </h2>

              <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8 mb-8">

                AI expansion, hyperscale development, and mission critical
                infrastructure are creating unprecedented demand for
                construction leadership and technical talent.

              </p>

              <a
                href="https://www.datacenterfrontier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#07111F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#0D1726] transition-all duration-300"
              >

                Explore Industry Report →

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* LATEST INSIGHTS */}
      <section className="bg-[#07111F] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="max-w-[780px] mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Latest Insights

            </p>

            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Market Intelligence

            </h2>

            <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              Stay informed with construction workforce trends, hiring
              strategies, compensation insights, and market developments
              shaping the built environment sector.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 ">

            {insights.map((item, index) => (

              <Link
                href={`/insights/${item.slug}`}
                key={index}
                className="group"
              >

                <div className="bg-[#0D1726] rounded-[24px] overflow-hidden border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-500 h-full">

                  {/* IMAGE */}
                  <div
                    className="h-[200px] sm:h-[220px] lg:h-[250px] sm:h-[240px] bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6">

                    <p className="text-[#C89B3C] text-[11px] sm:text-sm uppercase tracking-[3px] mb-4">

                      {item.category}

                    </p>

                    <h3 className="text-white text-[24px] sm:text-[28px] font-bold leading-tight mb-5">

                      {item.title}

                    </h3>

                    <div className="flex items-center gap-3">

                      <p className="text-white text-[15px] font-medium">

                        Read Insight

                      </p>

                      <span className="text-[#C89B3C] text-lg lg:text-xl sm:text-2xl transition duration-300 group-hover:translate-x-2">

                        →

                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* INTELLIGENCE CATEGORIES */}

<section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Intelligence Categories

      </p>

      <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Explore Industry
        Intelligence By Topic

      </h2>

      <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-3xl mx-auto mt-6">

        Explore hiring trends, salary intelligence,
        workforce challenges, leadership recruitment,
        and sector-specific developments impacting
        the built environment.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        {
          number: "01",
          title: "Market Insights",
        },
        {
          number: "02",
          title: "Salary Guides",
        },
        {
          number: "03",
          title: "Industry News",
        },
        {
          number: "04",
          title: "Executive Search",
        },
        {
          number: "05",
          title: "Commercial Construction",
        },
        {
          number: "06",
          title: "Infrastructure",
        },
      ].map((item) => (

        <div
          key={item.number}
          className="
          group
          relative
          bg-[#0D1726]
          rounded-[28px]
          border
          border-white/10
          p-6
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          overflow-hidden
          "
        >

          <div className="absolute right-4 top-0 text-[90px] font-bold text-white/[0.04]">

            {item.number}

          </div>

          <p className="text-[#C89B3C] font-semibold mb-4">

            {item.number}

          </p>

          <h3 className="text-white text-xl font-bold group-hover:text-[#C89B3C] transition-colors">

            {item.title}

          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* INDUSTRY RESOURCES */}
      <section className="bg-[#F7F7F7] py-12 sm:py-16 lg:py-18 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center max-w-[860px] mx-auto mb-9 sm:mb-11">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

              Industry Resources

            </p>

            <h2 className="text-[#07111F] text-[30px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.08] mb-5">

              Trusted Market Sources

            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 sm:leading-8">

              Access trusted construction news, workforce intelligence,
              infrastructure insights, and industry-leading market analysis.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {resources.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[24px] p-5 sm:p-6 border border-black/5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500"
              >

                <h3 className="text-[#07111F] text-[22px] sm:text-[24px] font-bold leading-tight mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-500 leading-7 text-[14px] sm:text-[15px] mb-6">

                  {item.description}

                </p>

                <div className="flex items-center gap-3">

                  <p className="text-[#07111F] text-[15px] font-semibold">

                    Visit Resource

                  </p>

                  <span className="text-[#C89B3C] text-lg lg:text-xl sm:text-2xl">

                    →

                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <HomeCTA />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}