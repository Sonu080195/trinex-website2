"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock3,
  Share2,
  Sparkles,
} from "lucide-react";

import HireTalentButton from "@/components/HireTalentButton";
import HomeCTA from "@/components/HomeCTA";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface Article {
  title: string;
  category: string;
  image: string;
  content: string[];
  readTime: string;
  published: string;
  keyTakeaways: string[];
  stats: {
    value: string;
    label: string;
  }[];
}

const categoryColors: Record<string, string> = {
  "Market Insights": "#C89B3C",
  "Industry News": "#3ECFB2",
  "Salary Guides": "#A78CF5",
  Commercial: "#F5A623",
  "Executive Search": "#F06292",
  Infrastructure: "#64B5F6",
};

const marqueeItems = [
  "Workforce Intelligence",
  "Recruitment Strategy",
  "Talent Shortages",
  "Leadership Hiring",
  "Project Growth",
  "Market Trends",
  "Construction Talent",
];

export default function InsightsSection({
  article,
  slug,
  relatedArticles,
}: {
  article: Article;
  slug: string;
  relatedArticles: [string, Article][];
}) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  const { ref: summaryRef, inView: summaryInView } = useInView();
  const { ref: articleRef, inView: articleInView } = useInView();
  const { ref: relatedRef, inView: relatedInView } = useInView();

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 80);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const documentElement = document.documentElement;
      const total =
        documentElement.scrollHeight - documentElement.clientHeight;

      const progress =
        total > 0 ? (documentElement.scrollTop / total) * 100 : 0;

      setReadProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The user may dismiss the native share window.
    }
  };

  const categoryColor =
    categoryColors[article.category] || "#C89B3C";

  return (
    <main className="overflow-hidden bg-[#07111F] text-white">
      {/* Reading progress */}
      <div
        className="fixed left-0 top-0 z-[9999] h-[3px] transition-[width] duration-100"
        style={{
          width: `${readProgress}%`,
          background: `linear-gradient(90deg, ${categoryColor}, #E8B84B)`,
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{
              backgroundImage: `url('${article.image}')`,
              transform: heroVisible ? "scale(1.055)" : "scale(1)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/72 to-[#07111F]/28" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/84 via-[#07111F]/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(200,155,60,0.14),transparent_38%)]" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] transition-opacity duration-1000 delay-500"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C89B3C 30%, #C89B3C 70%, transparent)",
            opacity: heroVisible ? 0.58 : 0,
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-36 sm:px-6 lg:px-8">
          <Link
            href="/insights#insights"
            className="group mb-8 inline-flex items-center gap-2 text-[14px] text-gray-400 transition-colors duration-300 hover:text-white"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Insights
          </Link>

          <div
            className="mb-5 flex flex-wrap items-center gap-3 transition-all duration-700 delay-100"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? "translateY(0)"
                : "translateY(14px)",
            }}
          >
            <span
              className="rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[2px] backdrop-blur-md"
              style={{
                background: `${categoryColor}20`,
                color: categoryColor,
                border: `1px solid ${categoryColor}45`,
              }}
            >
              {article.category}
            </span>

            <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
              <Clock3 size={13} />
              {article.readTime}
            </span>

            <span className="text-[13px] text-gray-500">
              {article.published}
            </span>
          </div>

          <h1
            className="mb-5 max-w-[920px] text-[32px] font-bold leading-[1.06] transition-all duration-700 delay-200 sm:text-[48px] lg:text-[66px]"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? "translateY(0)"
                : "translateY(22px)",
            }}
          >
            {article.title}
          </h1>

          <div
            className="flex flex-wrap gap-3 transition-all duration-700 delay-400"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? "translateY(0)"
                : "translateY(12px)",
            }}
          >
            <button
              type="button"
              onClick={handleShare}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-[14px] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89B3C]/40 hover:bg-white/10"
            >
              {copied ? (
                <CheckCircle2 size={15} className="text-[#C89B3C]" />
              ) : (
                <Share2
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
              )}

              {copied ? "Shared" : "Share Insight"}
            </button>

            <button
              type="button"
              onClick={() => setBookmarked((previous) => !previous)}
              className="group inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-[14px] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: bookmarked
                  ? `${categoryColor}65`
                  : "rgba(255,255,255,0.15)",
                background: bookmarked
                  ? `${categoryColor}18`
                  : "rgba(255,255,255,0.05)",
                color: bookmarked ? categoryColor : "white",
              }}
            >
              <Bookmark
                size={15}
                className={`transition-transform duration-300 ${
                  bookmarked ? "fill-current" : "group-hover:scale-110"
                }`}
              />
              {bookmarked ? "Saved" : "Save Article"}
            </button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-[#F4F4F0] px-5 py-10 sm:px-6">
        <div ref={summaryRef} className="mx-auto max-w-7xl">
          <div className="mb-6 grid grid-cols-3 gap-3 sm:gap-4">
            {article.stats.map(({ value, label }, index) => (
              <article
                key={label}
                className="group relative overflow-hidden rounded-[18px] border border-black/[0.05] bg-white p-4 text-center shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition-all duration-700 hover:-translate-y-1 hover:border-[#C89B3C]/30 hover:shadow-[0_16px_35px_rgba(200,155,60,0.09)] sm:rounded-[20px] sm:p-5"
                style={{
                  opacity: summaryInView ? 1 : 0,
                  transform: summaryInView
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.13),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <p
                    className="mb-1 text-[24px] font-bold leading-none sm:text-[30px]"
                    style={{ color: categoryColor }}
                  >
                    {value}
                  </p>

                  <p className="text-[11px] leading-5 text-gray-500 sm:text-[13px]">
                    {label}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {[
              {
                title: article.category,
                description: "Category",
                number: "01",
              },
              {
                title: "AEC & MEP",
                description: "Industry Focus",
                number: "02",
              },
              {
                title: "Employers",
                description: "Primary Audience",
                number: "03",
              },
              {
                title: article.readTime,
                description: "Reading Time",
                number: "04",
              },
            ].map((item, index) => (
              <article
                key={item.description}
                className="group relative overflow-hidden rounded-[18px] border border-black/[0.05] bg-white p-5 transition-all duration-700 hover:-translate-y-1 hover:border-[#C89B3C]/30 hover:shadow-[0_14px_35px_rgba(200,155,60,0.08)] sm:rounded-[20px]"
                style={{
                  opacity: summaryInView ? 1 : 0,
                  transform: summaryInView
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transitionDelay: `${(index + 3) * 90}ms`,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <Sparkles
                      size={17}
                      style={{ color: categoryColor }}
                    />

                    <span className="text-[9px] font-semibold tracking-[2px] text-black/15">
                      {item.number}
                    </span>
                  </div>

                  <p
                    className="mt-4 text-[15px] font-bold leading-tight"
                    style={{ color: categoryColor }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[12px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insight marquee */}
      <div className="relative overflow-hidden border-y border-white/[0.08] bg-[#060D18] py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060D18] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060D18] to-transparent" />

        <div className="insight-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center"
            >
              <span className="mx-6 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-[14px]">
                {item}
              </span>

              <span className="text-[7px] text-[#C89B3C]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Article body */}
      <section className="bg-[#F4F4F0] px-5 py-8 sm:px-6 lg:py-12">
        <div
          ref={articleRef}
          className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_300px]"
        >
          <div
            className="transition-all duration-700"
            style={{
              opacity: articleInView ? 1 : 0,
              transform: articleInView
                ? "translateX(0)"
                : "translateX(-24px)",
            }}
          >
            <article className="mb-6 rounded-[28px] border border-black/[0.05] bg-white p-7 shadow-[0_12px_36px_rgba(0,0,0,0.035)] sm:p-9">
              <header className="mb-8 border-b border-black/[0.05] pb-7">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span
                    className="rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[2px]"
                    style={{
                      background: `${categoryColor}15`,
                      color: categoryColor,
                      border: `1px solid ${categoryColor}30`,
                    }}
                  >
                    {article.category}
                  </span>

                  <span className="rounded-full bg-[#07111F]/5 px-4 py-1.5 text-[12px] text-[#07111F]">
                    Market Intelligence
                  </span>
                </div>

                <h2 className="mb-4 text-[25px] font-bold leading-[1.08] text-[#07111F] sm:text-[34px]">
                  Industry Intelligence Report
                </h2>

                <p className="max-w-[820px] text-[15px] leading-7 text-gray-500 sm:text-[16px]">
                  Analysis covering workforce trends, hiring demand,
                  leadership recruitment, talent shortages and emerging
                  developments across construction and engineering markets.
                </p>
              </header>

              <div className="mb-9">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="h-5 w-[3px] rounded-full"
                    style={{ background: categoryColor }}
                  />

                  <h3 className="text-[14px] font-bold uppercase tracking-[2px] text-[#07111F] sm:text-[15px]">
                    Key Takeaways
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {article.keyTakeaways.map((item, index) => (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-[18px] border border-black/[0.05] bg-[#F4F4F0] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/25 hover:shadow-[0_12px_28px_rgba(200,155,60,0.07)]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.12),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <div
                          className="mb-2 text-[22px] font-bold opacity-20"
                          style={{ color: categoryColor }}
                        >
                          0{index + 1}
                        </div>

                        <p className="text-[13px] leading-6 text-gray-600">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {article.content.map((paragraph, index) => (
                  <div key={`${slug}-${index}`} className="flex gap-4">
                    {index === 0 && (
                      <span
                        className="w-[3px] shrink-0 self-stretch rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${categoryColor}, transparent)`,
                        }}
                      />
                    )}

                    <p
                      className={`text-[15px] leading-8 sm:text-[17px] ${
                        index === 0
                          ? "font-medium text-gray-700"
                          : "text-gray-600"
                      }`}
                    >
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="relative overflow-hidden rounded-[24px] bg-[#07111F] p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.14),transparent_55%)]" />
              <div className="pointer-events-none absolute left-7 right-7 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C]/50 to-transparent" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="mb-1 text-[20px] font-bold text-white">
                    Ready to Build Your Talent Strategy?
                  </h3>

                  <p className="text-[14px] leading-6 text-gray-400">
                    Our recruitment specialists support hiring across
                    construction, engineering and MEP markets.
                  </p>
                </div>

                <HireTalentButton
                  ariaLabel="Discuss your AEC and MEP hiring strategy"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#C89B3C] px-7 py-3.5 font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D7AA4E] hover:shadow-[0_8px_28px_rgba(200,155,60,0.4)]"
                >
                  Discuss Hiring
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </HireTalentButton>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside
            className="space-y-5 transition-all duration-700 delay-200 lg:sticky lg:top-28"
            style={{
              opacity: articleInView ? 1 : 0,
              transform: articleInView
                ? "translateX(0)"
                : "translateX(24px)",
            }}
          >
            <div className="rounded-[22px] border border-black/[0.05] bg-white p-5">
              <p
                className="mb-4 text-[11px] font-semibold uppercase tracking-[4px]"
                style={{ color: categoryColor }}
              >
                Article Info
              </p>

              {[
                ["Category", article.category],
                ["Published", article.published],
                ["Read Time", article.readTime],
                ["Focus", "AEC & MEP"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-black/[0.05] py-3 last:border-0 last:pb-0"
                >
                  <span className="text-[13px] text-gray-400">
                    {label}
                  </span>

                  <span className="text-right text-[13px] font-semibold text-[#07111F]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#07111F] p-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.11),transparent_50%)]" />
              <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />

              <div className="relative z-10">
                <p
                  className="mb-4 text-[11px] font-semibold uppercase tracking-[4px]"
                  style={{ color: categoryColor }}
                >
                  Key Stats
                </p>

                {article.stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="border-b border-white/[0.06] py-3 last:border-0 last:pb-0"
                  >
                    <p
                      className="mb-0.5 text-[22px] font-bold leading-none"
                      style={{ color: categoryColor }}
                    >
                      {value}
                    </p>

                    <p className="text-[12px] text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-black/[0.05] bg-white p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                RUDRON Intelligence
              </p>

              <p className="mb-2 text-[14px] font-bold text-[#07111F]">
                Specialist AEC &amp; MEP Recruiters
              </p>

              <p className="mb-4 text-[13px] leading-5 text-gray-500">
                Our team monitors market trends and connects professionals
                with leading construction organisations worldwide.
              </p>

              <HireTalentButton
                ariaLabel="Start a conversation with RUDRON"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#07111F] py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D1726]"
              >
                Start a Conversation
                <ArrowRight
                  size={15}
                  className="text-[#C89B3C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </HireTalentButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Related insights */}
      <section className="bg-[#07111F] px-5 py-10 sm:px-6 lg:py-14">
        <div ref={relatedRef} className="mx-auto max-w-7xl">
          <div
            className="mb-10 flex items-end justify-between transition-all duration-700"
            style={{
              opacity: relatedInView ? 1 : 0,
              transform: relatedInView
                ? "translateY(0)"
                : "translateY(18px)",
            }}
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#C89B3C]" />

                <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                  Related Insights
                </p>
              </div>

              <h2 className="text-[27px] font-bold text-white sm:text-[36px]">
                Continue Exploring
              </h2>
            </div>

            <Link
              href="/insights"
              className="group hidden items-center gap-2 text-[14px] font-semibold text-[#C89B3C] sm:inline-flex"
            >
              View All
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedArticles.map(([relatedSlug, related], index) => {
              const relatedColor =
                categoryColors[related.category] || "#C89B3C";

              return (
                <Link
                  key={relatedSlug}
                  href={`/insights/${relatedSlug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0D1726] transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/30 hover:shadow-[0_20px_55px_rgba(200,155,60,0.11)]"
                  style={{
                    opacity: relatedInView ? 1 : 0,
                    transform: relatedInView
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="relative h-[175px] shrink-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.08]"
                      style={{
                        backgroundImage: `url(${related.image})`,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1726]/90 via-[#0D1726]/15 to-transparent" />

                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md"
                      style={{
                        background: `${relatedColor}22`,
                        color: relatedColor,
                        border: `1px solid ${relatedColor}44`,
                      }}
                    >
                      {related.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-4 flex-1 text-[16px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#C89B3C]">
                      {related.title}
                    </h3>

                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                        <Clock3 size={12} />
                        {related.readTime}
                      </span>

                      <span
                        className="inline-flex items-center gap-1 text-[13px] font-semibold"
                        style={{ color: relatedColor }}
                      >
                        Read
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HomeCTA />

      <style jsx>{`
        .insight-marquee-track {
          display: flex;
          width: max-content;
          animation: insightMarquee 34s linear infinite;
        }

        .insight-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes insightMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}