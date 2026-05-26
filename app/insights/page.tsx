import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InsightsPage() {

  const insights = [

    {
      title: "2026 Construction Hiring Trends",
      image: "/insights/construction-trends.png",
      category: "Market Insights",
      slug: "construction-hiring-trends",
    },

    {
      title: "The Growing Demand for Data Center Talent",
      image: "/insights/datacenter-talent.png",
      category: "Industry News",
      slug: "data-center-construction-hiring",
    },

    {
      title: "MEP Salary & Workforce Insights",
      image: "/insights/mep-salary.png",
      category: "Salary Guides",
      slug: "mep-talent-shortage",
    },

    {
      title: "Commercial Construction Market Outlook",
      image: "/insights/commercial-outlook.png",
      category: "Commercial",
      slug: "commercial-construction-outlook",
    },

    {
      title: "Executive Search Strategies For Contractors",
      image: "/insights/executive-search.png",
      category: "Executive Search",
      slug: "executive-search-construction",
    },

    {
      title: "Infrastructure Talent Shortages Continue Rising",
      image: "/insights/infrastructure-talent.png",
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

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.75) 45%, rgba(7,17,31,0.2) 80%), url('/insights/featured-insight.png')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

                Industry Intelligence

              </p>

              <h1 className="text-white font-bold leading-[1.05] text-[44px] md:text-[58px] lg:text-[68px] mb-8">

                Construction
                Hiring Trends,
                Market Insights
                & Industry Reports

              </h1>

              <p className="text-gray-300 text-[18px] leading-9 max-w-[700px]">

                Explore construction hiring trends, workforce intelligence,
                salary insights, and market reports shaping the future
                of AEC & MEP recruitment.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED REPORT */}
      <section className="bg-[#F7F7F7] py-18 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* IMAGE */}
            <div
              className="h-[420px] rounded-[32px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/insights/featured-insight.png')",
              }}
            />

            {/* CONTENT */}
            <div>

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">

                Featured Report

              </p>

              <h2 className="text-[#07111F] text-[40px] lg:text-[54px] font-bold leading-tight mb-6">

                AI Infrastructure &
                The Future Of
                Construction Hiring

              </h2>

              <p className="text-gray-600 text-[17px] leading-8 mb-8">

                AI expansion, hyperscale development, and mission critical
                infrastructure are creating unprecedented demand for
                construction leadership and technical talent.

              </p>

              <a
                href="https://www.datacenterfrontier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#07111F] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#0D1726] transition-all duration-300"
              >

                Explore Industry Report →

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* LATEST INSIGHTS */}
      <section className="bg-[#07111F] py-18 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="mb-12">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">

              Latest Insights

            </p>

            <h2 className="text-white text-[40px] lg:text-[54px] font-bold">

              Market Intelligence

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {insights.map((item, index) => (

              <Link
                href={`/insights/${item.slug}`}
                key={index}
                className="group"
              >

                <div className="bg-[#0D1726] rounded-[28px] overflow-hidden border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-500">

                  {/* IMAGE */}
                  <div
                    className="h-[250px] bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* CONTENT */}
                  <div className="p-7">

                    <p className="text-[#C89B3C] text-sm uppercase tracking-[3px] mb-4">

                      {item.category}

                    </p>

                    <h3 className="text-white text-[28px] font-bold leading-tight mb-5">

                      {item.title}

                    </h3>

                    <div className="flex items-center gap-3">

                      <p className="text-white font-medium">
                        Read Insight
                      </p>

                      <span className="text-[#C89B3C] text-2xl transition duration-300 group-hover:translate-x-2">
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

      {/* INDUSTRY RESOURCES */}
      <section className="bg-[#F7F7F7] py-18 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="mb-12 text-center">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">

              Industry Resources

            </p>

            <h2 className="text-[#07111F] text-[40px] lg:text-[54px] font-bold">

              Trusted Market Sources

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {resources.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[24px] p-7 border border-black/5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500"
              >

                <h3 className="text-[#07111F] text-[24px] font-bold leading-tight mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-500 leading-8 text-[15px] mb-6">

                  {item.description}

                </p>

                <div className="flex items-center gap-3">

                  <p className="text-[#07111F] font-semibold">
                    Visit Resource
                  </p>

                  <span className="text-[#C89B3C] text-2xl">
                    →
                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

      <HomeCTA />

      <Footer />

    </main>
  );
}