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

    image: "/insights/construction-trends.png",

    content: [

      "Construction hiring demand continues accelerating across commercial, industrial, infrastructure, and mission critical sectors.",

      "Companies are facing increasing pressure to secure experienced Project Managers, Superintendents, Estimators, and Executive Leaders before competitors.",

      "As project pipelines expand, recruitment speed and industry specialization are becoming critical competitive advantages.",

      "Organizations investing in long-term talent partnerships are outperforming competitors in workforce stability and project delivery.",

    ],
  },

  "data-center-construction-hiring": {

    title:
      "The Growing Demand for Data Center Talent",

    category: "Industry News",

    image: "/insights/datacenter-talent.png",

    content: [

      "The rapid expansion of AI infrastructure and hyperscale data centers is reshaping construction recruitment globally.",

      "Mission critical construction firms are aggressively hiring Project Managers, MEP professionals, Superintendents, and PX-level leadership.",

      "Demand for experienced data center talent continues exceeding available supply across North America and international markets.",

      "Companies with specialized recruitment strategies are gaining major advantages in securing top-tier mission critical professionals.",

    ],
  },

  "mep-talent-shortage": {

    title:
      "MEP Salary & Workforce Insights",

    category: "Salary Guides",

    image: "/insights/mep-salary.png",

    content: [

      "MEP construction continues experiencing one of the industry's most significant skilled labor shortages.",

      "Growing complexity across healthcare, mission critical, and industrial projects has dramatically increased demand for specialized MEP professionals.",

      "Salary expectations for experienced MEP talent continue rising as contractors compete aggressively for skilled candidates.",

      "Long-term workforce planning and strategic recruitment partnerships are becoming essential for sustainable growth.",

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

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.2) 80%), url('${article.image}')`,
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24">

            <div className="max-w-[760px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">

                {article.category}

              </p>

              <h1 className="text-white font-bold leading-[1.05] text-[44px] md:text-[58px] lg:text-[66px] mb-8">

                {article.title}

              </h1>

            </div>

          </div>

        </div>

      </section>

      {/* ARTICLE */}
      <section className="bg-[#F7F7F7] py-20 px-6 lg:px-16">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-[32px] p-8 lg:p-12 border border-black/5">

            {article.content.map((paragraph, index) => (

              <p
                key={index}
                className="text-gray-700 text-[18px] leading-9 mb-8"
              >

                {paragraph}

              </p>

            ))}

          </div>

        </div>

      </section>

      <HomeCTA />

      <Footer />

    </main>
  );
}