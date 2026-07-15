import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import InsightArticleClient from "@/components/InsightArticlePage";

const SITE_URL = "https://www.rudrongts.com";

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
    published: "June 2, 2026",
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
    published: "June 8, 2026",
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
    published: "June 14, 2026",
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
    published: "June 19, 2026",
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
    published: "June 24, 2026",
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
    published: "June 29, 2026",
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
    "q3-2026-salary-benchmark-report": {
    title: "Q3 2026 Construction Salary Benchmark Report",
    category: "Market Insights",
    image: "/insights/salary-benchmark-q3.webp",
    readTime: "6 min read",
    published: "July 3, 2026",
    stats: [
      { value: "9.2%",  label: "YoY comp growth" },
      { value: "$205K", label: "Avg PX salary" },
      { value: "71%",   label: "Firms raising pay" },
    ],
    keyTakeaways: [
      "Compensation growth is outpacing general wage inflation industry-wide.",
      "Sign-on bonuses are becoming standard for senior field leadership roles.",
      "Regional pay gaps are narrowing as remote-adjacent leadership roles expand.",
    ],
    content: [
      "Construction compensation continues climbing well above general wage inflation as firms compete for a shrinking pool of experienced leadership and technical talent heading into the back half of 2026.",
      "Our Q3 benchmark data, drawn from active placements and market conversations across commercial, industrial, and mission critical sectors, shows average total compensation for Project Executives now exceeding $205,000 in major metro markets.",
      "Sign-on bonuses, once reserved for the most senior executive hires, are increasingly appearing in offers for Project Manager and Superintendent roles as firms look for any edge to close candidates faster before competitors intervene.",
      "Geographic pay gaps that once made secondary markets significantly cheaper to staff are narrowing. Firms in Texas, Arizona, and the Southeast are raising offers to match coastal markets as talent becomes more willing to relocate for the right opportunity.",
      "Benefits packages are also evolving beyond base salary. Vehicle allowances, accelerated PTO accrual, and flexible scheduling around field hours are increasingly cited by candidates as deciding factors between competing offers.",
      "Firms that delay compensation reviews are seeing measurably higher attrition among mid-career professionals, who are fielding unsolicited outreach at a higher rate than at any point in the past several years.",
      "Our data also shows a widening gap between firms that benchmark compensation quarterly versus annually — quarterly reviewers report significantly stronger retention among their top-quartile performers.",
      "As the market heads into 2027 planning cycles, organizations that proactively adjust compensation ahead of turnover, rather than reactively after a resignation, are positioning themselves with a meaningful hiring advantage.",
    ],
  },
 
  "reshoring-manufacturing-industrial-construction": {
    title: "Reshoring Fuels Industrial Construction Boom",
    category: "Industry News",
    image: "/insights/reshoring-industrial.webp",
    readTime: "6 min read",
    published: "July 6, 2026",
    stats: [
      { value: "$180B", label: "New industrial investment" },
      { value: "27%",   label: "Growth in plant construction" },
      { value: "95K+",  label: "Projected trade jobs" },
    ],
    keyTakeaways: [
      "Domestic manufacturing reshoring is driving sustained industrial construction demand.",
      "Semiconductor and battery plants require highly specialized technical labor.",
      "Regional workforce pipelines are struggling to keep pace with project announcements.",
    ],
    content: [
      "The continued reshoring of domestic manufacturing capacity is generating one of the strongest waves of industrial construction activity the sector has experienced in decades, with new facility announcements arriving on a near-weekly basis.",
      "Semiconductor fabrication plants, EV battery facilities, and advanced manufacturing campuses across the Southeast, Midwest, and Southwest are collectively representing well over $180 billion in newly announced construction investment.",
      "Unlike traditional industrial builds, many of these facilities require highly specialized cleanroom construction, precision MEP coordination, and process piping expertise that sits at the intersection of industrial and mission critical skill sets.",
      "Contractors capable of demonstrating semiconductor or advanced manufacturing experience are commanding premium project awards, while firms without that track record are increasingly shut out of the largest opportunities.",
      "Regional workforce pipelines in many of these emerging manufacturing hubs were not built to support projects of this scale, creating acute local talent shortages even as national construction employment overall remains relatively stable.",
      "Contractors are responding by building traveling workforce programs, offering substantial per diem and relocation packages to import experienced leadership and skilled trades from other regions on a project-by-project basis.",
      "Owners are also placing growing emphasis on contractor workforce stability during the bidding process itself, treating a firm's demonstrated ability to staff a project through completion as a competitive differentiator alongside price.",
      "As reshoring investment continues through the remainder of the decade, firms that build durable, specialized talent pipelines now will be best positioned to capture the next wave of facility announcements.",
    ],
  },
 
  "superintendent-compensation-trends": {
    title: "Superintendent Compensation Trends By Market",
    category: "Salary Guides",
    image: "/insights/superintendent-comp.webp",
    readTime: "5 min read",
    published: "July 8, 2026",
    stats: [
      { value: "$155K", label: "Avg Sr. Superintendent" },
      { value: "18%",   label: "Premium for MC experience" },
      { value: "6",     label: "Markets tracked" },
    ],
    keyTakeaways: [
      "Mission critical experience commands a significant compensation premium.",
      "Senior Superintendent pay varies meaningfully by region and project type.",
      "Field leadership scarcity is pushing base pay above historical norms nationwide.",
    ],
    content: [
      "Superintendent compensation has shifted meaningfully over the past eighteen months, with base pay for experienced Senior Superintendents now regularly clearing $155,000 in high-demand markets, before bonus and vehicle allowance.",
      "Professionals with direct mission critical or data center experience continue commanding a substantial premium, often 15 to 20 percent above general commercial counterparts with comparable years of experience.",
      "Market-by-market variation remains significant. Texas and Arizona have seen the sharpest year-over-year increases as hyperscale and semiconductor projects compete directly with traditional commercial builds for the same limited pool of field leaders.",
      "Healthcare-focused Superintendents, particularly those experienced with occupied renovation and regulatory-heavy environments, are seeing similarly strong demand, reflecting the sector's continued expansion regardless of broader economic conditions.",
      "Firms that historically differentiated primarily on project type or company culture are increasingly finding compensation itself has become a baseline requirement just to get a qualified Superintendent to engage in conversation.",
      "Non-salary compensation elements, particularly vehicle programs and per diem structures for travel-heavy roles, are increasingly factored into candidates' total compensation comparisons rather than treated as secondary considerations.",
      "Organizations relying on outdated internal salary bands are finding themselves consistently outbid in competitive processes, often losing strong candidates in final-stage negotiations over gaps that could have been anticipated with current market data.",
      "As field leadership scarcity shows no signs of easing, firms that proactively align compensation with current market realities are seeing measurably faster time-to-fill on Superintendent searches.",
    ],
  },
 
  "healthcare-construction-regulatory-complexity": {
    title: "Healthcare Construction: Navigating Regulatory Complexity",
    category: "Commercial",
    image: "/insights/healthcare-regulatory.webp",
    readTime: "7 min read",
    published: "July 10, 2026",
    stats: [
      { value: "+14%",  label: "Healthcare construction growth" },
      { value: "18mo",  label: "Avg regulatory approval time" },
      { value: "$340B", label: "US healthcare capex pipeline" },
    ],
    keyTakeaways: [
      "Regulatory complexity is a major differentiator among healthcare construction firms.",
      "Occupied renovation work demands specialized project leadership experience.",
      "Talent with direct OSHPD/HCAI-equivalent experience is scarce nationally.",
    ],
    content: [
      "Healthcare construction remains one of the most resilient sectors in the built environment, continuing to expand even through periods of broader economic uncertainty, but it demands a fundamentally different operating model than standard commercial work.",
      "Regulatory approval processes, particularly in states with rigorous healthcare facility oversight, routinely extend project timelines well beyond what general commercial construction professionals expect, requiring specialized navigation experience.",
      "Occupied renovation work, where construction proceeds around active patient care operations, introduces infection control protocols, interim life safety measures, and phasing complexity that few professionals outside the sector have direct experience managing.",
      "Project Managers and Superintendents with proven healthcare backgrounds are consistently harder to source than their general commercial counterparts, creating a persistent supply gap even as capital investment in the sector continues rising.",
      "Owners and health systems increasingly prioritize contractor teams with demonstrated regulatory fluency over teams offering marginally lower pricing, recognizing that regulatory missteps carry costs far exceeding any bid savings.",
      "Firms building internal healthcare construction practices are finding the fastest path to credibility is hiring proven healthcare leadership directly, rather than attempting to cross-train general commercial teams on the fly.",
      "Mechanical and electrical coordination in healthcare environments carries its own specialized demands, particularly around medical gas systems, emergency power, and infection-control-driven HVAC requirements that differ meaningfully from standard commercial MEP work.",
      "As health systems continue expanding capacity nationwide, contractors and recruiters who understand this sector's unique regulatory and operational demands will remain positioned to capture a disproportionate share of this consistently growing market.",
    ],
  },
 
  "succession-planning-construction-leadership": {
    title: "Succession Planning For Construction Leadership",
    category: "Executive Search",
    image: "/insights/succession-planning.webp",
    readTime: "7 min read",
    published: "July 13, 2026",
    stats: [
      { value: "58%",  label: "Firms without a succession plan" },
      { value: "5-7yr", label: "Avg leadership transition window" },
      { value: "2.3x", label: "Cost of reactive vs planned transition" },
    ],
    keyTakeaways: [
      "Most construction firms still lack a formal leadership succession plan.",
      "Reactive executive hiring is significantly more costly than planned transitions.",
      "Boards are increasingly treating succession planning as a governance priority.",
    ],
    content: [
      "A significant share of construction organizations, including many with strong project pipelines and healthy financials, still operate without any formal plan for what happens when a founder, President, or senior executive eventually steps back.",
      "This gap becomes most visible during unplanned transitions, whether from retirement, health issues, or a competitor's approach to a key leader, at which point firms are forced into reactive executive searches under significant time pressure.",
      "Reactive searches, conducted under pressure with limited internal alignment on what the organization actually needs next, consistently take longer, cost more, and carry higher risk of a poor cultural fit than searches planned years in advance.",
      "Boards and ownership groups at more mature organizations are increasingly treating succession planning as an ongoing governance responsibility rather than a one-time project, reviewing leadership pipeline health on a regular cadence alongside financial performance.",
      "Internal development remains the strongest foundation for succession, but few construction firms have formal programs identifying and developing high-potential leaders years before a transition becomes necessary.",
      "External benchmarking plays a critical role even when the eventual successor is expected to come from within, since understanding what comparable leadership talent looks like in the broader market helps calibrate internal development expectations realistically.",
      "Firms beginning succession conversations three to five years ahead of an anticipated transition consistently report smoother handoffs, stronger client and employee confidence through the transition, and meaningfully better financial outcomes than those planning reactively.",
      "As a wave of founder-led construction firms approaches natural leadership transitions over the coming decade, organizations that treat succession as an ongoing discipline rather than a future problem will be the ones best positioned to sustain what they've built.",
    ],
  },
 
  "bridge-transportation-infrastructure-hiring": {
    title: "Bridge & Transportation Infrastructure Hiring Outlook",
    category: "Infrastructure",
    image: "/insights/bridge-transportation.webp",
    readTime: "6 min read",
    published: "July 15, 2026",
    stats: [
      { value: "$550B", label: "Transportation infra pipeline" },
      { value: "12%",   label: "YoY hiring growth" },
      { value: "40K+",  label: "Bridge/rail roles needed" },
    ],
    keyTakeaways: [
      "Federal infrastructure funding continues driving sustained transportation project volume.",
      "Bridge and rail specialists remain among the hardest civil roles to source.",
      "Aging workforce demographics are accelerating the urgency of talent pipelines.",
    ],
    content: [
      "Transportation infrastructure construction continues benefiting from sustained federal and state funding commitments, with bridge, rail, and roadway modernization programs representing well over $550 billion in active and planned project value nationally.",
      "Unlike more cyclical commercial sectors, transportation infrastructure spending has remained remarkably consistent, giving contractors and their workforce planning teams a rare degree of multi-year visibility into project pipelines.",
      "Bridge construction and rehabilitation specialists remain among the most difficult civil professionals to source nationally, with demand particularly acute for engineers and superintendents experienced in complex staged construction over active roadways or waterways.",
      "Rail infrastructure, spanning both freight modernization and passenger transit expansion, is drawing talent from an already thin pool of civil professionals, intensifying competition between transportation-focused contractors and general civil firms alike.",
      "The sector's workforce faces a particularly acute demographic challenge, with a disproportionate share of experienced bridge and rail leadership approaching retirement over the next five to ten years relative to the pipeline of professionals entering the specialty.",
      "Public agencies are increasingly factoring contractor workforce depth and demonstrated staffing stability into procurement decisions, recognizing that project delays tied to staffing gaps carry significant public accountability implications.",
      "Firms building relationships with civil engineering programs and offering structured mentorship pathways are seeing meaningfully stronger early-career retention than those relying solely on experienced-hire recruitment in this specialty.",
      "As federal infrastructure investment continues through the remainder of the decade, transportation-focused contractors that invest now in both immediate hiring and long-term pipeline development will be best positioned to sustain delivery through the demographic transition ahead.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: "Article Not Found" };
  }

  const description = article.content[0].slice(0, 155).trim() + "…";

  return {
    title: article.title, // renders as "{title} - RUDRON Global Talent Solutions"
    description,
    alternates: {
      canonical: `${SITE_URL}/insights/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: `${SITE_URL}/insights/${slug}`,
      images: [{ url: `${SITE_URL}${article.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`${SITE_URL}${article.image}`],
    },
  };
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

  // article.published is stored as a human-readable date (e.g. "June 2, 2026")
  // for display; convert it to ISO 8601 for structured data.
  const isoDatePublished = new Date(article.published).toISOString().slice(0, 10);

  return (
    <>
      {/* Article structured data — helps eligibility for rich results / Google Discover */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            image: [`${SITE_URL}${article.image}`],
            datePublished: isoDatePublished,
            author: {
              "@type": "Organization",
              name: "RUDRON Global Talent Solutions",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "RUDRON Global Talent Solutions",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/rudron-logo.webp`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/insights/${slug}`,
            },
            description: article.content[0].slice(0, 155).trim() + "…",
          }),
        }}
      />
      <InsightArticleClient article={article} slug={slug} relatedArticles={relatedArticles} />
    </>
  );
}