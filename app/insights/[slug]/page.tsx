import Link from "next/link";
import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import InsightArticleClient from "@/components/InsightsSection";

const articles: Record<string, {
  title: string; category: string; image: string;
  content: string[]; readTime: string; published: string;
  keyTakeaways: string[];
  stats: { value: string; label: string }[];
}> = {
  "construction-hiring-trends": {
    title: "2026 Construction Hiring Trends",
    category: "Market Insights",
    image: "/insights/construction-trends.webp",
    readTime: "6 min read",
    published: "January 2026",
    stats: [
      { value: "38%",  label: "Increase in PM demand" },
      { value: "2.1M", label: "Construction jobs gap" },
      { value: "$185K+", label: "Avg Sr. PM salary" },
    ],
    keyTakeaways: [
      "Workforce demand continues increasing across major construction sectors.",
      "Leadership hiring remains one of the industry's biggest challenges.",
      "Organizations with proactive talent strategies outperform competitors.",
    ],
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
    title: "The Growing Demand for Data Center Talent",
    category: "Industry News",
    image: "/insights/datacenter-talent.webp",
    readTime: "7 min read",
    published: "February 2026",
    stats: [
      { value: "340%",  label: "Data center growth" },
      { value: "$2.4T", label: "US infrastructure spend" },
      { value: "180K+", label: "Mission critical jobs" },
    ],
    keyTakeaways: [
      "AI expansion is creating unprecedented mission critical hiring demand.",
      "Electrical and MEP professionals remain the hardest roles to fill.",
      "Geographic expansion is intensifying competition for talent.",
    ],
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
    title: "MEP Salary & Workforce Insights",
    category: "Salary Guides",
    image: "/insights/mep-salary.webp",
    readTime: "5 min read",
    published: "March 2026",
    stats: [
      { value: "$175K+", label: "MEP Superintendent avg" },
      { value: "22%",    label: "YoY salary increase" },
      { value: "4.2x",   label: "Demand vs supply ratio" },
    ],
    keyTakeaways: [
      "MEP salary expectations are rising rapidly across all experience levels.",
      "The aging workforce is creating critical succession planning gaps.",
      "Retention incentives are becoming as important as base compensation.",
    ],
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
    title: "Commercial Construction Market Outlook",
    category: "Commercial",
    image: "/insights/commercial-outlook.webp",
    readTime: "6 min read",
    published: "February 2026",
    stats: [
      { value: "+14%",   label: "Healthcare construction" },
      { value: "$890B",  label: "Commercial pipeline" },
      { value: "65K+",   label: "PM roles projected" },
    ],
    keyTakeaways: [
      "Healthcare and life sciences continue leading commercial demand.",
      "Technology integration is reshaping project delivery requirements.",
      "Long-term outlook remains positive across diversified sectors.",
    ],
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
    title: "Executive Search Strategies For Contractors",
    category: "Executive Search",
    image: "/insights/executive-search.webp",
    readTime: "8 min read",
    published: "January 2026",
    stats: [
      { value: "78%",  label: "Execs open to new roles" },
      { value: "42d",  label: "Avg executive hire time" },
      { value: "3.4x", label: "ROI on exec placement" },
    ],
    keyTakeaways: [
      "Speed, culture, and growth vision drive executive decisions today.",
      "Relationship-driven search outperforms transactional methods.",
      "Succession planning is becoming a board-level priority.",
    ],
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
    title: "Infrastructure Talent Shortages Continue Rising",
    category: "Infrastructure",
    image: "/insights/infrastructure-talent.webp",
    readTime: "5 min read",
    published: "March 2026",
    stats: [
      { value: "$1.2T", label: "Infrastructure bill value" },
      { value: "500K+", label: "Civil jobs needed" },
      { value: "31%",   label: "Shortage increase YoY" },
    ],
    keyTakeaways: [
      "Public funding is creating sustained long-term demand for civil talent.",
      "Succession gaps are the industry's most pressing workforce issue.",
      "Strategic recruitment partnerships are critical for pipeline stability.",
    ],
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
  return Object.keys(articles).map((slug) => ({ slug }));
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
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/insights" className="text-[#C89B3C] hover:underline">← Back to Insights</Link>
        </div>
      </main>
    );
  }

  const relatedArticles = Object.entries(articles)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  return <InsightArticleClient article={article} slug={slug} relatedArticles={relatedArticles} />;
}