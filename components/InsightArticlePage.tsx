"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import { ArrowLeft, Clock, Share2, BookmarkPlus, CheckCircle } from "lucide-react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface Article {
  title: string; category: string; image: string; content: string[];
  readTime: string; published: string;
  keyTakeaways: string[];
  stats: { value: string; label: string }[];
}

const categoryColors: Record<string, string> = {
  "Market Insights":  "#C89B3C",
  "Industry News":    "#3ecfb2",
  "Salary Guides":    "#a78cf5",
  "Commercial":       "#f5a623",
  "Executive Search": "#f06292",
  "Infrastructure":   "#64b5f6",
};

const marqueeItems = ["WORKFORCE INTELLIGENCE","RECRUITMENT STRATEGY","TALENT SHORTAGES","LEADERSHIP HIRING","PROJECT GROWTH","MARKET TRENDS","CONSTRUCTION TALENT"];

export default function InsightsSection({
  article, slug, relatedArticles,
}: {
  article: Article;
  slug: string;
  relatedArticles: [string, Article][];
}) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  const { ref: summaryRef,  inView: summaryInView }  = useInView();
  const { ref: articleRef,  inView: articleInView }  = useInView();
  const { ref: relatedRef,  inView: relatedInView }  = useInView();

  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  /* Read progress bar */
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setReadProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const catColor = article
  ? categoryColors[article.category] || "#C89B3C"
  : "#C89B3C";

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">
      <Navbar />

      {/* Read progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[3px] transition-all duration-100"
        style={{
          width: `${readProgress}%`,
          background: `linear-gradient(90deg, ${catColor}, #E8B84B)`,
        }}
      />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{
              backgroundImage: `url('${article.image}')`,
              transform: heroVisible ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/65 to-[#07111F]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/70 to-transparent" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,155,60,1) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Gold left bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
          style={{
            background: "linear-gradient(to bottom, transparent, #C89B3C 30%, #C89B3C 70%, transparent)",
            opacity: heroVisible ? 0.55 : 0,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-36 pb-14">

          {/* Back */}
          <Link
            href="/insights#insights"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-[14px] mb-8 transition-colors duration-300 group"
            style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease" }}
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Insights
          </Link>

          {/* Category badge */}
          <div
            className="flex flex-wrap items-center gap-3 mb-5 transition-all duration-700 delay-100"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(14px)" }}
          >
            <span
              className="px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[2px]"
              style={{ background: `${catColor}22`, color: catColor, border: `1px solid ${catColor}44` }}
            >
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-[13px]">
              <Clock size={13} />{article.readTime}
            </span>
            <span className="text-gray-500 text-[13px]">{article.published}</span>
          </div>

          {/* Title */}
          <h1
            className="font-bold leading-[1.08] text-[30px] sm:text-[48px] lg:text-[64px] mb-4 max-w-[860px] transition-all duration-700 delay-200"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}
          >
            {article.title}
          </h1>

          {/* Action buttons */}
          <div
            className="flex flex-wrap gap-3 transition-all duration-700 delay-400"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(12px)" }}
          >
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/6 hover:border-[#C89B3C]/40 hover:bg-white/10 transition-all duration-300 text-[14px]"
            >
              {copied ? <CheckCircle size={15} className="text-[#C89B3C]" /> : <Share2 size={15} />}
              {copied ? "Link Copied!" : "Share Insight"}
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 text-[14px]"
              style={{
                borderColor: bookmarked ? `${catColor}60` : "rgba(255,255,255,0.15)",
                background:  bookmarked ? `${catColor}15` : "rgba(255,255,255,0.05)",
                color:       bookmarked ? catColor : "white",
              }}
            >
              <BookmarkPlus size={15} />
              {bookmarked ? "Saved" : "Save Article"}
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SUMMARY CARDS
      ════════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-10 px-5 sm:px-6">
        <div ref={summaryRef} className="max-w-7xl mx-auto">

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {article.stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="bg-white rounded-[20px] border border-black/5 p-5 text-center transition-all duration-700"
                style={{ opacity: summaryInView ? 1 : 0, transform: summaryInView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${i * 100}ms` }}
              >
                <p style={{ color: catColor }} className="text-[24px] sm:text-[30px] font-bold leading-none mb-1">{value}</p>
                <p className="text-gray-500 text-[12px] sm:text-[13px]">{label}</p>
              </div>
            ))}
          </div>

          {/* Meta detail cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: article.category,     desc: "Category",         icon: "🏷️" },
              { title: "AEC & MEP",           desc: "Industry Focus",   icon: "🏗️" },
              { title: "Employers",           desc: "Primary Audience", icon: "👔" },
              { title: article.readTime,      desc: "Reading Time",     icon: "⏱️" },
            ].map(({ title, desc, icon }, i) => (
              <div
                key={desc}
                className="bg-white rounded-[20px] border border-black/5 p-5 transition-all duration-700"
                style={{ opacity: summaryInView ? 1 : 0, transform: summaryInView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${(i + 3) * 90}ms` }}
              >
                <span className="text-xl mb-3 block">{icon}</span>
                <p style={{ color: catColor }} className="text-[15px] font-bold mb-1 leading-tight">{title}</p>
                <p className="text-gray-500 text-[12px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#060D18] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/65 text-[13px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase mx-6">{item}</span>
              <span className="text-[#C89B3C] text-[7px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          ARTICLE CONTENT
      ════════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={articleRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">

          {/* Main content */}
          <div
            className="transition-all duration-700"
            style={{ opacity: articleInView ? 1 : 0, transform: articleInView ? "translateX(0)" : "translateX(-24px)" }}
          >
            {/* Article card */}
            <div className="bg-white rounded-[28px] border border-black/5 p-7 sm:p-9 mb-6">
              {/* Header */}
              <div className="mb-8 pb-7 border-b border-black/5">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[2px]"
                    style={{ background: `${catColor}15`, color: catColor, border: `1px solid ${catColor}30` }}
                  >
                    {article.category}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#07111F]/5 text-[#07111F] text-[12px]">Market Intelligence</span>
                </div>
                <h2 className="text-[#07111F] text-[24px] sm:text-[32px] font-bold leading-[1.08] mb-4">Industry Intelligence Report</h2>
                <p className="text-gray-500 text-[15px] sm:text-[16px] leading-7 max-w-[820px]">
                  Analysis covering workforce trends, hiring demand, leadership recruitment, talent shortages, and emerging developments across construction and engineering markets.
                </p>
              </div>

              {/* Key takeaways */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-4 w-[3px] rounded-full" style={{ background: catColor }} />
                  <h3 className="text-[#07111F] text-[15px] font-bold uppercase tracking-[2px]">Key Takeaways</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {article.keyTakeaways.map((item, i) => (
                    <div key={i} className="bg-[#F4F4F0] rounded-[18px] p-4 border border-black/5">
                      <div className="text-[22px] font-bold mb-2 opacity-15" style={{ color: catColor }}>0{i + 1}</div>
                      <p className="text-gray-600 text-[13px] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6">
                {article.content.map((para, i) => (
                  <div key={i} className="flex gap-4">
                    {i === 0 && (
                      <span
                        className="flex-shrink-0 w-[3px] rounded-full self-stretch"
                        style={{ background: `linear-gradient(to bottom, ${catColor}, transparent)` }}
                      />
                    )}
                    <p className={`text-gray-600 text-[15px] sm:text-[17px] leading-8 ${i === 0 ? "font-medium text-gray-700" : ""}`}>
                      {para}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#07111F] rounded-[24px] p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_55%)]" />
              <div className="absolute top-0 left-7 right-7 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C]/50 to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="text-white text-[20px] font-bold mb-1">Ready to Build Your Talent Strategy?</h3>
                  <p className="text-gray-400 text-[14px] leading-6">Our recruitment specialists are ready to support your hiring goals across AEC & MEP sectors.</p>
                </div>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden flex-shrink-0 flex items-center gap-2 bg-[#C89B3C] text-[#07111F] font-bold px-7 py-3.5 rounded-2xl hover:shadow-[0_8px_28px_rgba(200,155,60,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="space-y-5 lg:sticky lg:top-28 transition-all duration-700 delay-200"
            style={{ opacity: articleInView ? 1 : 0, transform: articleInView ? "translateX(0)" : "translateX(24px)" }}
          >
            {/* Article info */}
            <div className="bg-white rounded-[22px] border border-black/5 p-5">
              <p className="text-[11px] uppercase tracking-[4px] font-semibold mb-4" style={{ color: catColor }}>Article Info</p>
              {[
                { label: "Category",  value: article.category },
                { label: "Published", value: article.published },
                { label: "Read Time", value: article.readTime },
                { label: "Focus",     value: "AEC & MEP" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-[13px]">{label}</span>
                  <span className="text-[#07111F] text-[13px] font-semibold">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats recap */}
            <div className="bg-[#07111F] rounded-[22px] border border-white/6 p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.1),transparent_50%)]" />
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[4px] font-semibold mb-4" style={{ color: catColor }}>Key Stats</p>
                {article.stats.map(({ value, label }) => (
                  <div key={label} className="py-3 border-b border-white/6 last:border-0 last:pb-0">
                    <p className="font-bold text-[22px] leading-none mb-0.5" style={{ color: catColor }}>{value}</p>
                    <p className="text-gray-400 text-[12px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Talk to us */}
            <div className="bg-white rounded-[22px] border border-black/5 p-5">
              <p className="text-[11px] uppercase tracking-[4px] font-semibold text-[#C89B3C] mb-3">RUDRON Intelligence</p>
              <p className="text-[#07111F] text-[14px] font-bold mb-2">Specialist AEC & MEP Recruiters</p>
              <p className="text-gray-500 text-[13px] leading-5 mb-4">Our team monitors market trends and connects professionals with leading construction organisations worldwide.</p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#07111F] text-white text-[13px] font-semibold py-3 rounded-xl hover:bg-[#0D1726] transition-all duration-300"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RELATED ARTICLES
      ════════════════════════════════════════ */}
      <section className="bg-[#07111F] py-6 lg:py-10 px-5 sm:px-6">
        <div ref={relatedRef} className="max-w-7xl mx-auto">
          <div
            className="flex items-end justify-between mb-10 transition-all duration-700"
            style={{ opacity: relatedInView ? 1 : 0, transform: relatedInView ? "translateY(0)" : "translateY(18px)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Related Insights</p>
              </div>
              <h2 className="text-white text-[26px] sm:text-[34px] font-bold">Continue Exploring</h2>
            </div>
            <Link href="/insights" className="text-[#C89B3C] text-[14px] hover:underline hidden sm:block">View all →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map(([relatedSlug, related], i) => {
              const rColor = categoryColors[related.category] || "#C89B3C";
              return (
                <Link
                  key={relatedSlug}
                  href={`/insights/${relatedSlug}`}
                  className="group relative bg-[#0D1726] border border-white/6 rounded-[22px] overflow-hidden hover:border-[#C89B3C]/30 transition-all duration-400 hover:-translate-y-1 flex flex-col"
                  style={{
                    opacity:    relatedInView ? 1 : 0,
                    transform:  relatedInView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms, border 0.3s`,
                  }}
                >
                  <div className="relative h-[170px] overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.07]"
                      style={{ backgroundImage: `url(${related.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1726]/80 to-transparent" />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{ background: `${rColor}22`, color: rColor, border: `1px solid ${rColor}44` }}
                    >
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white text-[16px] font-bold mb-3 leading-snug group-hover:text-[#C89B3C] transition-colors duration-300 flex-1">{related.title}</h3>
                    <div className="flex items-center justify-between pt-3 border-t border-white/6">
                      <span className="text-gray-400 text-[12px] flex items-center gap-1.5"><Clock size={12} />{related.readTime}</span>
                      <span style={{ color: rColor }} className="text-[13px] font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block">Read →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HomeCTA />
      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </main>
  );
}