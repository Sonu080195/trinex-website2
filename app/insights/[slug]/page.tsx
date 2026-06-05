import Link from "next/link";

import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

const articles: Record<
  string,
  {
    title: string;
    category: string;
    image: string;
    content: string[];
  }
> = {

  "construction-hiring-trends": {

    title:
      "2026 Construction Hiring Trends",

    category: "Market Insights",

    image: "/insights/construction-trends.webp",

    content: [

      "Construction hiring demand continues accelerating across commercial, industrial, infrastructure, mission critical, and residential sectors as major project pipelines expand across North America.",

      "General contractors and specialty subcontractors are aggressively competing for experienced Project Managers, Superintendents, PX-level leadership, Estimators, and operations professionals capable of leading increasingly complex developments.",

      "One of the biggest shifts shaping the market is the growing shortage of experienced mid-to-senior level construction leadership. While many companies continue focusing on project growth, the available talent pool is not expanding at the same pace.",

      "Infrastructure investment, manufacturing reshoring, AI expansion, semiconductor developments, and hyperscale data center growth are creating unprecedented long-term workforce demand across the built environment sector.",

      "Companies are now prioritizing recruitment speed, employer branding, compensation strategy, and retention planning more aggressively than ever before. Delays in hiring often result in project delays, operational strain, and increased burnout across internal teams.",

      "Construction organizations that invest in long-term recruitment partnerships and proactive talent pipelines are outperforming competitors in workforce stability, project execution, and leadership retention.",

      "The market also continues shifting toward relationship-driven hiring rather than reactive recruitment. Contractors increasingly prefer recruitment firms that deeply understand technical construction operations and project environments.",

      "As the industry enters a new cycle of expansion, organizations capable of securing top-tier talent early will hold significant competitive advantages across bidding, project delivery, and operational scalability.",

    ],
  },

  "data-center-construction-hiring": {

    title:
      "The Growing Demand for Data Center Talent",

    category: "Industry News",

    image: "/insights/datacenter-talent.webp",

    content: [

      "The rapid expansion of artificial intelligence infrastructure and hyperscale cloud development is fundamentally reshaping construction recruitment across North America and global markets.",

      "Mission critical construction firms are aggressively hiring Project Managers, Superintendents, MEP leaders, PX-level executives, Commissioning Managers, and field operations professionals with data center experience.",

      "As AI adoption accelerates globally, hyperscale operators and developers are investing billions into new data center campuses, resulting in one of the most competitive hiring markets the industry has experienced in years.",

      "Demand for experienced mission critical talent continues significantly exceeding available supply. Many organizations are facing major challenges securing professionals with hyperscale, commissioning, and high-density infrastructure experience.",

      "Contractors capable of building strong recruitment pipelines are gaining major advantages in staffing large-scale projects while maintaining aggressive delivery schedules and operational quality standards.",

      "Electrical and mechanical professionals remain among the most in-demand specialists within the mission critical sector. Experienced leaders capable of managing complex MEP coordination are becoming increasingly difficult to secure.",

      "Geographic expansion across Texas, Virginia, Arizona, Ohio, Georgia, and international markets is further intensifying competition for top-tier construction leadership and technical professionals.",

      "As hyperscale expansion continues, recruitment strategy is becoming a critical business function rather than simply an HR responsibility. Companies investing early in talent acquisition and retention are positioning themselves for long-term market leadership.",

    ],
  },

  "mep-talent-shortage": {

    title:
      "MEP Salary & Workforce Insights",

    category: "Salary Guides",

    image: "/insights/mep-salary.webp",

    content: [

      "MEP construction continues experiencing one of the industry's most significant workforce shortages as demand for highly specialized technical professionals accelerates nationwide.",

      "Healthcare facilities, mission critical infrastructure, semiconductor developments, industrial manufacturing plants, and complex commercial projects are driving major hiring demand for mechanical, electrical, and plumbing professionals.",

      "Salary expectations for experienced MEP talent continue rising rapidly as contractors compete aggressively for professionals capable of managing technically advanced systems and fast-track projects.",

      "Project Managers, Estimators, VDC professionals, Superintendents, and MEP Executives with large-scale project experience are receiving multiple opportunities simultaneously across highly competitive markets.",

      "Many contractors are expanding compensation packages beyond traditional salary structures by offering performance bonuses, relocation support, retention incentives, and flexible career progression opportunities.",

      "One of the industry's biggest concerns remains the aging workforce. Many experienced field leaders and technical professionals are approaching retirement, creating growing gaps in operational leadership and succession planning.",

      "Companies investing in workforce development, internal mentorship, and long-term recruitment partnerships are building stronger operational stability compared to organizations relying solely on reactive hiring.",

      "As project complexity continues increasing across healthcare, data centers, industrial facilities, and infrastructure environments, demand for specialized MEP professionals is expected to remain exceptionally strong for years ahead.",

    ],
  },

  "commercial-construction-outlook": {

    title:
      "Commercial Construction Market Outlook",

    category: "Commercial",

    image: "/insights/commercial-outlook.webp",

    content: [

      "Commercial construction markets continue evolving rapidly as developers and contractors adapt to changing economic conditions, workforce shortages, and shifting investment priorities.",

      "Despite broader economic uncertainty, several sectors including healthcare, data centers, advanced manufacturing, mixed-use developments, and industrial logistics continue experiencing strong construction activity.",

      "Tenant expectations, sustainability requirements, and technology integration are reshaping the way commercial projects are designed, planned, and delivered across major urban markets.",

      "Contractors are increasingly prioritizing operational efficiency, project delivery speed, and workforce scalability in order to remain competitive across high-demand sectors.",

      "One major trend shaping the commercial market is the growing demand for technically advanced facilities that require specialized MEP coordination and highly experienced project leadership.",

      "Recruitment continues playing a critical role in commercial construction growth. Companies capable of securing experienced field operations leaders and project executives are maintaining stronger project performance and client relationships.",

      "Commercial office developments remain selective in certain markets, while healthcare, life sciences, industrial manufacturing, and mission critical infrastructure continue driving significant expansion opportunities.",

      "Long-term outlook across commercial construction remains positive as population growth, infrastructure modernization, and technology-driven development continue fueling nationwide investment.",

    ],
  },

  "executive-search-construction": {

    title:
      "Executive Search Strategies For Contractors",

    category: "Executive Search",

    image: "/insights/executive-search.webp",

    content: [

      "Executive hiring has become one of the most critical growth challenges facing construction organizations across commercial, infrastructure, industrial, and mission critical sectors.",

      "As project pipelines expand and operational complexity increases, contractors are aggressively seeking proven executives capable of scaling teams, improving profitability, and driving long-term business growth.",

      "Project Executives, Operations Directors, Regional Leaders, Division Managers, and Business Unit Executives remain among the most difficult professionals to secure within the current market.",

      "The most successful executive search strategies focus heavily on relationship-driven recruitment, industry specialization, confidentiality, and long-term cultural alignment rather than transactional hiring.",

      "Construction executives today are evaluating far more than compensation. Leadership stability, operational vision, growth opportunity, company culture, and long-term market positioning are heavily influencing career decisions.",

      "Organizations capable of presenting strong leadership structures and clearly defined growth strategies are significantly outperforming competitors in executive-level recruitment.",

      "Executive search timelines have also accelerated. Top construction leaders are often approached frequently by competitors, making speed, communication, and relationship management essential throughout the hiring process.",

      "As consolidation, expansion, and succession planning continue reshaping the industry, executive recruitment will remain a major competitive differentiator for construction organizations nationwide.",

    ],
  },

  "infrastructure-talent-shortage": {

    title:
      "Infrastructure Talent Shortages Continue Rising",

    category: "Infrastructure",

    image: "/insights/infrastructure-talent.webp",

    content: [

      "Infrastructure construction markets continue facing severe workforce shortages as transportation, civil, utility, and public infrastructure investments expand nationwide.",

      "Bridge, roadway, tunnel, rail, airport, and water infrastructure projects are generating massive long-term hiring demand for experienced civil construction professionals.",

      "Public funding programs and large-scale infrastructure modernization initiatives are creating increased competition for Project Managers, Superintendents, Estimators, Schedulers, and heavy civil operations leaders.",

      "Many contractors are experiencing major challenges securing experienced professionals capable of managing technically advanced infrastructure projects under aggressive schedules and regulatory requirements.",

      "One of the industry's largest concerns is the limited pipeline of younger professionals entering heavy civil and infrastructure construction sectors compared to the pace of industry expansion.",

      "As experienced leaders retire, infrastructure firms are placing stronger emphasis on succession planning, leadership development, and long-term recruitment partnerships to maintain operational continuity.",

      "Competition for infrastructure talent continues intensifying across transportation, energy, wastewater, and utility sectors as project pipelines remain historically strong.",

      "Organizations capable of building stable recruitment strategies and long-term workforce pipelines are positioning themselves for sustained growth throughout the next decade of infrastructure expansion.",

    ],
  },
};

export async function generateStaticParams() {

  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const article = articles[slug];

  if (!article) {

    return (

      <main className="bg-[#07111F] text-white min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold">
          Article Not Found
        </h1>

      </main>
    );
  }

  const relatedArticles = Object.entries(articles)
  .filter(([articleSlug]) => articleSlug !== slug)
  .slice(0, 3);

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
              `linear-gradient(to right, rgba(7,17,31,0.97) 16%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.22) 76%), url('${article.image}')`,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                {article.category}

              </p>

              <h1 className="text-white font-bold leading-[1.02] text-[36px] sm:text-[50px] lg:text-[66px] mb-6">

                {article.title}

              </h1>

            </div>

          </div>

        </div>

      </section>

      {/* INSIGHT SUMMARY */}

<section className="bg-[#F7F7F7] py-6 lg:py-8 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          title: article.category,
          desc: "Category",
        },
        {
          title: "AEC & MEP",
          desc: "Industry Focus",
        },
        {
          title: "Employers",
          desc: "Primary Audience",
        },
        {
          title: "Market Intelligence",
          desc: "Insight Type",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="floating-insight
          bg-white
          rounded-[28px]
          border
          border-black/5
          p-6
          text-center
          hover:-translate-y-2
          transition-all
          duration-500
          "
        >

          <h3 className="text-[#C89B3C] text-lg lg:text-xl font-bold mb-3">

            {item.title}

          </h3>

          <p className="text-gray-600">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ARTICLE MARQUEE */}

<section className="bg-[#07111F] py-4 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[
      "WORKFORCE INTELLIGENCE",
      "RECRUITMENT STRATEGY",
      "TALENT SHORTAGES",
      "LEADERSHIP HIRING",
      "PROJECT GROWTH",
      "MARKET TRENDS",
      "CONSTRUCTION TALENT",
      "WORKFORCE INTELLIGENCE",
      "RECRUITMENT STRATEGY",
      "TALENT SHORTAGES",
    ].map((item, index) => (

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

    ))}

  </div>

</section>

      {/* ARTICLE */}
      <section className="bg-[#F7F7F7] py-6 sm:py-8 lg:py-10 px-5 sm:px-6 lg:px-6">

        <div className="max-w-6xl mx-auto">

          <div className="article-card bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

            {/* TOP */}
            <div className="mb-10 pb-8 border-b border-black/5">

  <div className="flex flex-wrap gap-3 mb-6">

    <span className="px-4 py-2 rounded-full bg-[#07111F] text-white text-sm">

      {article.category}

    </span>

    <span className="px-4 py-2 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-sm">

      Market Intelligence

    </span>

  </div>

  <h2 className="text-[#07111F] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.08] mb-5">

    Industry Intelligence
    Report

  </h2>

  <p className="text-gray-600 text-[15px] sm:text-[17px] leading-8 max-w-[900px]">

    Analysis covering workforce trends,
    hiring demand, leadership recruitment,
    talent shortages, and emerging developments
    across construction and engineering markets.

  </p>

</div>
            

            {/* KEY TAKEAWAYS */}

<div className="grid md:grid-cols-3 gap-4 mb-10">

  {[
    "Workforce demand continues increasing across major construction sectors.",
    "Leadership hiring remains one of the industry's biggest challenges.",
    "Organizations with proactive talent strategies outperform competitors.",
  ].map((item, index) => (

    <div
      key={index}
      className="
group
bg-[#F7F7F7]
rounded-[24px]
p-5
border
border-black/5
hover:-translate-y-2
hover:border-[#C89B3C]/30
transition-all
duration-500
"
    >

      <div className="text-[#C89B3C] text-3xl font-bold opacity-20 mb-3">

        0{index + 1}

      </div>

      <p className="text-gray-700 leading-7">

        {item}

      </p>

    </div>

  ))}

</div>

            {/* CONTENT */}
            <div className="space-y-7 sm:space-y-8">

              {article.content.map((paragraph, index) => (

                <p
                  key={index}
                  className="text-gray-700 text-[15px] sm:text-[18px] leading-8 sm:leading-9"
                >

                  {paragraph}

                </p>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* RELATED INSIGHTS */}

<section className="bg-[#07111F] py-12 lg:py-16 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Related Insights

      </p>

      <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Continue Exploring
        Market Intelligence

      </h2>

      <p className="text-gray-400 text-[15px] sm:text-[17px] leading-7 max-w-3xl mx-auto mt-6">

        Explore additional workforce trends,
        hiring strategies, industry developments,
        and recruitment intelligence shaping the
        future of construction talent acquisition.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {relatedArticles.map(([relatedSlug, related]) => (

        <Link
          key={relatedSlug}
          href={`/insights/${relatedSlug}`}
          className="
          group
          bg-[#0D1726]
          border
          border-white/10
          rounded-[28px]
          overflow-hidden
          hover:-translate-y-2
          hover:border-[#C89B3C]/30
          transition-all
          duration-500
          "
        >

          <div
            className="h-[180px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${related.image})`,
            }}
          />

          <div className="p-6">

            <p className="text-[#C89B3C] text-sm mb-3">

              {related.category}

            </p>

            <h3 className="text-white text-xl font-bold mb-4">

              {related.title}

            </h3>

            <span className="text-[#C89B3C] font-semibold">

              Read Insight →

            </span>

          </div>

        </Link>

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