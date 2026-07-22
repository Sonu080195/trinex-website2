"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ApplyModal from "@/components/ApplyModal";
import { Job, jobs } from "@/data/jobs";
import { buildJobPostingSchema } from "@/lib/jobSchema";
import { getRelativeTime } from "@/lib/relativeTime";
import { MapPin, Briefcase, DollarSign, Clock, Building2, ArrowLeft, Share2, BookmarkPlus, CheckCircle } from "lucide-react";

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

export default function JobDetailsClient({ job }: { job: Job }) {
  const [applyOpen,    setApplyOpen]    = useState(false);
  const [heroVisible,  setHeroVisible]  = useState(false);
  const [copied,       setCopied]       = useState(false);
  const [bookmarked,   setBookmarked]   = useState(false);

  const { ref: detailsRef, inView: detailsInView } = useInView();
  const { ref: sidebarRef, inView: sidebarInView } = useInView();
  const { ref: relatedRef, inView: relatedInView } = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const relatedJobs = jobs
    .filter((j) => j.slug !== job.slug && (j.industry === job.industry || j.specialisation === job.specialisation))
    .slice(0, 3);
    const jobPostingSchema = buildJobPostingSchema(job);

  const metaItems = [
    { icon: <MapPin size={15} />,      label: "Location",   value: job.location },
    { icon: <DollarSign size={15} />,  label: "Salary",     value: job.salary },
    { icon: <Briefcase size={15} />,   label: "Type",       value: job.type },
    { icon: <Building2 size={15} />,   label: "Sector",     value: job.specialisation },
    { icon: <Clock size={15} />,       label: "Posted",     value: getRelativeTime(job.datePosted) },
  ];

  return (
    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          {job.heroImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url('${job.heroImage}')`,
                transform: heroVisible ? "scale(1.05)" : "scale(1)",
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1726] to-[#07111F]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-[#07111F]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/80 to-transparent" />
        </div>

        {/* Faint grid */}
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
            opacity: heroVisible ? 0.5 : 0,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-36 pb-14">

          {/* Back link */}
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-[14px] mb-8 transition-colors duration-300 group"
            style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.6s ease" }}
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to all jobs
          </Link>

          {/* Badges */}
          <div
            className="flex flex-wrap gap-2 mb-5 transition-all duration-700 delay-100"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(12px)" }}
          >
            {job.featured && (
              <span className="px-3 py-1 rounded-full bg-[#C89B3C]/15 border border-[#C89B3C]/30 text-[#C89B3C] text-[12px] font-semibold">
                Featured
              </span>
            )}
            {job.urgent && (
              <span className="px-3 py-1 rounded-full bg-red-500/12 border border-red-400/25 text-red-400 text-[12px] font-semibold">
                Urgent
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-white/6 border border-white/12 text-gray-300 text-[12px]">
              {job.industry}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-bold leading-[1.05] text-[34px] sm:text-[48px] lg:text-[62px] mb-4 max-w-[860px] transition-all duration-700 delay-200"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}
          >
            {job.title}
          </h1>

          {/* Company + recruiter */}
          <div
            className="flex items-center gap-4 mb-8 transition-all duration-700 delay-300"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}
          >
            <p className="text-[#C89B3C] font-semibold text-[16px]">{job.company}</p>
            {job.recruiter && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <p className="text-gray-400 text-[14px]">{job.recruiter}</p>
              </>
            )}
          </div>

          {/* Meta pills */}
          <div
            className="flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-[400ms]"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(14px)" }}
          >
            {metaItems.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 border border-white/10 backdrop-blur-sm">
                <span className="text-[#C89B3C]">{icon}</span>
                <span className="text-gray-400 text-[12px]">{label}:</span>
                <span className="text-white text-[13px] font-medium">{value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 transition-all duration-700 delay-500"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(12px)" }}
          >
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-4 rounded-2xl border border-white/15 bg-white/5 hover:border-[#C89B3C]/40 hover:bg-white/10 transition-all duration-300 text-[14px] font-medium"
            >
              {copied ? <CheckCircle size={16} className="text-[#C89B3C]" /> : <Share2 size={16} />}
              {copied ? "Copied!" : "Share"}
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="flex items-center gap-2 px-5 py-4 rounded-2xl border transition-all duration-300 text-[14px] font-medium"
              style={{
                borderColor: bookmarked ? "rgba(200,155,60,0.5)" : "rgba(255,255,255,0.15)",
                background:  bookmarked ? "rgba(200,155,60,0.1)" : "rgba(255,255,255,0.05)",
                color:       bookmarked ? "#C89B3C" : "white",
              }}
            >
              <BookmarkPlus size={16} />
              {bookmarked ? "Saved" : "Save Job"}
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F4F0] py-16 lg:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* ── DETAILS ── */}
          <div
            ref={detailsRef}
            className="space-y-6 transition-all duration-700"
            style={{ opacity: detailsInView ? 1 : 0, transform: detailsInView ? "translateX(0)" : "translateX(-24px)" }}
          >
            {/* Description */}
            <ContentCard title="About This Role">
              <p className="text-gray-500 text-[15px] leading-8">{job.description}</p>
            </ContentCard>

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <ContentCard title="Key Responsibilities">
                <ul className="space-y-3">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500 text-[15px] leading-7">
                      <span className="w-5 h-5 rounded-full bg-[#C89B3C]/12 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </ContentCard>
            )}

            {/* Requirements */}
            {job.requirements?.length > 0 && (
              <ContentCard title="Requirements & Qualifications">
                <ul className="space-y-3">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500 text-[15px] leading-7">
                      <CheckCircle size={16} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                      {r}
                    </li>
                  ))}
                </ul>
              </ContentCard>
            )}

            {/* Benefits */}
            {job.benefits?.length > 0 && (
              <ContentCard title="Compensation & Benefits">
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-[14px] bg-[#F4F4F0] border border-black/5">
                      <span className="w-7 h-7 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                      <span className="text-[#07111F] text-[14px] font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </ContentCard>
            )}

            {/* Bottom CTA */}
            <div className="bg-[#07111F] rounded-[24px] p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_55%)]" />
              <div className="absolute top-0 left-7 right-7 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-[#C89B3C]/50 to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="text-white text-[20px] font-bold mb-1">Ready to Apply?</h3>
                  <p className="text-gray-400 text-[14px] leading-6">Submit your confidential application and our team will be in touch.</p>
                </div>
                <button
                  onClick={() => setApplyOpen(true)}
                  className="group relative overflow-hidden bg-[#C89B3C] text-[#07111F] font-bold px-7 py-3.5 rounded-2xl flex-shrink-0 flex items-center gap-2 hover:shadow-[0_8px_28px_rgba(200,155,60,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </button>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div
            ref={sidebarRef}
            className="space-y-5 lg:sticky lg:top-28 transition-all duration-700 delay-200"
            style={{ opacity: sidebarInView ? 1 : 0, transform: sidebarInView ? "translateX(0)" : "translateX(24px)" }}
          >
            {/* Quick apply */}
            <div className="bg-[#07111F] rounded-[24px] border border-white/6 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.1),transparent_50%)]" />
              <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-[#C89B3C] text-[11px] uppercase tracking-[4px] font-semibold mb-3">Quick Apply</p>
                <h3 className="text-white text-[20px] font-bold mb-2">{job.title}</h3>
                <p className="text-gray-400 text-[13px] mb-5">{job.company} · {job.location}</p>
                <button
                  onClick={() => setApplyOpen(true)}
                  className="w-full group relative overflow-hidden bg-[#C89B3C] text-[#07111F] font-bold py-3.5 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(200,155,60,0.4)] hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Application
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </button>
              </div>
            </div>

            {/* Job meta */}
            <div className="bg-white rounded-[24px] border border-black/5 p-6">
              <p className="text-[11px] uppercase tracking-[4px] font-semibold text-[#C89B3C] mb-4">Job Details</p>
              <div className="space-y-4">
                {metaItems.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 py-3 border-b border-black/5 last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/8 flex items-center justify-center text-[#C89B3C] flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase tracking-[1px] mb-0.5">{label}</p>
                      <p className="text-[#07111F] text-[14px] font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiter card */}
            <div className="bg-white rounded-[24px] border border-black/5 p-6">
              <p className="text-[11px] uppercase tracking-[4px] font-semibold text-[#C89B3C] mb-4">Placed By</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] font-bold text-[16px]">R</div>
                <div>
                  <p className="text-[#07111F] text-[14px] font-bold">RUDRON</p>
                  <p className="text-gray-400 text-[12px]">{job.recruiter || "Executive Search"}</p>
                </div>
              </div>
              <p className="text-gray-500 text-[13px] leading-6">
                Specialist recruiters exclusively focused on AEC, MEP and mission critical markets.
              </p>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "⚡", title: "Fast Response",  sub: "Within 1 business day" },
                { icon: "🔒", title: "Confidential",   sub: "All inquiries private" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="bg-white rounded-[18px] border border-black/5 p-4">
                  <span className="text-xl">{icon}</span>
                  <p className="text-[#07111F] text-[13px] font-semibold mt-2 mb-0.5">{title}</p>
                  <p className="text-gray-400 text-[11px] leading-4">{sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED JOBS
      ═══════════════════════════════════════ */}
      {relatedJobs.length > 0 && (
        <section className="bg-[#07111F] py-16 lg:py-20 px-5 sm:px-6">
          <div ref={relatedRef} className="max-w-7xl mx-auto">
            <div
              className="flex items-end justify-between mb-10 transition-all duration-700"
              style={{ opacity: relatedInView ? 1 : 0, transform: relatedInView ? "translateY(0)" : "translateY(18px)" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-[#C89B3C]" />
                  <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">Similar Opportunities</p>
                </div>
                <h2 className="text-white text-[26px] sm:text-[34px] font-bold">You May Also Like</h2>
              </div>
              <Link href="/jobs" className="text-[#C89B3C] text-[14px] hover:underline hidden sm:block">View all →</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedJobs.map((rj, i) => (
                <a
                  key={rj.slug}
                  href={`/jobs/${rj.slug}`}
                  className="group bg-[#0D1726] border border-white/6 rounded-[22px] p-5 hover:border-[#C89B3C]/30 transition-all duration-400 hover:-translate-y-1"
                  style={{
                    opacity:   relatedInView ? 1 : 0,
                    transform: relatedInView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms, border 0.3s`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#C89B3C] text-[11px] font-semibold uppercase tracking-[1px]">{rj.specialisation}</span>
                    {rj.urgent && <span className="text-red-400 text-[11px] border border-red-400/25 rounded-full px-2 py-0.5">Urgent</span>}
                  </div>
                  <h3 className="text-white text-[16px] font-bold mb-1 leading-snug group-hover:text-[#C89B3C] transition-colors duration-300">{rj.title}</h3>
                  <p className="text-gray-400 text-[13px] mb-4">{rj.company}</p>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-gray-400 flex items-center gap-1.5"><MapPin size={12} />{rj.location}</span>
                    <span className="text-[#C89B3C] font-semibold">{rj.salary}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <ApplyModal isOpen={applyOpen} onClose={() => setApplyOpen(false)} jobTitle={job.title} />

              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </main>
  );
}

function ContentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[24px] border border-black/5 p-6 sm:p-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-5 w-[3px] rounded-full bg-[#C89B3C]" />
        <h2 className="text-[#07111F] text-[18px] font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}