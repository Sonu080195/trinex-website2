"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2, ChevronDown, ChevronUp, Download, ArrowLeft } from "lucide-react";

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  job_application:  { label: "Job Application",  color: "bg-[#C89B3C]/15 border-[#C89B3C]/30 text-[#C89B3C]" },
  candidate_profile:{ label: "Candidate",         color: "bg-blue-500/15 border-blue-400/30 text-blue-400" },
  employer_inquiry: { label: "Employer",          color: "bg-purple-500/15 border-purple-400/30 text-purple-400" },
  contact_inquiry:  { label: "Contact",           color: "bg-white/10 border-white/20 text-gray-300" },
  call_request:     { label: "Call Request",      color: "bg-red-500/15 border-red-400/30 text-red-400" },
};

const FILTERS = [
  { value: "all",               label: "All Submissions" },
  { value: "job_application",   label: "Job Applications" },
  { value: "candidate_profile", label: "Candidates" },
  { value: "employer_inquiry",  label: "Employer Inquiries" },
  { value: "contact_inquiry",   label: "Contact Inquiries" },
  { value: "call_request",      label: "Call Requests" },
];

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  async function loadApplications(type: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/applications/list?type=${type}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load submissions.");
      setApplications(data.applications || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications(filter);
  }, [filter]);

  async function handleDownloadResume(app: any) {
    setDownloadingId(app.id);
    try {
      if (app.resume_path) {
        const res = await fetch("/api/admin/resume-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: app.resume_path }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not generate download link.");
        window.open(data.url, "_blank");
      } else if (app.resume_url) {
        // Older submission without resume_path — link may have expired
        window.open(app.resume_url, "_blank");
      }
    } catch (err: any) {
      alert(err.message || "Could not download resume. The file link may be unavailable.");
    } finally {
      setDownloadingId(null);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit",
    });
  }

  return (
    <main className="min-h-screen bg-[#07111F] text-white px-5 md:px-6 pt-36 lg:pt-44 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Admin
          </Link>

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
            Internal Dashboard
          </p>
          <h1 className="text-[36px] md:text-[44px] font-bold leading-tight mb-3">
            Submissions
          </h1>
          <p className="text-gray-400 text-base leading-7 max-w-2xl">
            All job applications, candidate profiles, and inquiries submitted through the website.
          </p>
        </div>

        {/* FILTER */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: filter === f.value ? "#C89B3C" : "rgba(255,255,255,0.05)",
                color: filter === f.value ? "#07111F" : "#9ca3af",
                border: filter === f.value ? "1px solid #C89B3C" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={28} className="animate-spin text-[#C89B3C]" />
          </div>
        ) : error ? (
          <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
            {error}
          </p>
        ) : applications.length === 0 ? (
          <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-12 text-center">
            <p className="text-gray-400">No submissions found for this filter.</p>
          </div>
        ) : (
          <div className="bg-[#0D1726] border border-white/5 rounded-[24px] overflow-hidden">
            {applications.map((app) => {
              const typeInfo = TYPE_LABELS[app.type] || { label: app.type, color: "bg-white/10 border-white/20 text-gray-300" };
              const isExpanded = expandedId === app.id;
              const displayName = app.full_name || `${app.first_name || ""} ${app.last_name || ""}`.trim() || "Unknown";

              return (
                <div key={app.id} className="border-b border-white/5 last:border-0">
                  {/* ROW */}
                  <div
                    className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr_160px_auto] gap-3 md:gap-4 px-5 md:px-6 py-5 items-center cursor-pointer hover:bg-white/[0.02] transition-colors duration-200"
                    onClick={() => setExpandedId(isExpanded ? null : app.id)}
                  >
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold border ${typeInfo.color}`}>
                        {typeInfo.label}
                      </span>
                    </div>

                    <div>
                      <span className="md:hidden text-gray-500 text-xs uppercase tracking-[1px] mr-2">Name:</span>
                      <span className="text-white font-medium">{displayName}</span>
                    </div>

                    <div className="text-gray-400 text-sm">
                      <span className="md:hidden text-gray-500 text-xs uppercase tracking-[1px] mr-2">Email:</span>
                      {app.email}
                    </div>

                    <div className="text-gray-500 text-sm">
                      {formatDate(app.created_at)}
                    </div>

                    <div className="flex items-center gap-2">
                      {(app.resume_path || app.resume_url) && (
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDownloadResume(app); }}
                          disabled={downloadingId === app.id}
                          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 disabled:opacity-60"
                        >
                          {downloadingId === app.id ? (
                            <Loader2 size={13} className="animate-spin" />
                          ) : (
                            <Download size={13} />
                          )}
                          Resume
                        </button>
                      )}
                      {isExpanded ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
                    </div>
                  </div>

                  {/* EXPANDED DETAILS */}
                  {isExpanded && (
                    <div className="px-5 md:px-6 pb-6 pt-1">
                      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 grid sm:grid-cols-2 gap-4 text-sm">
                        {app.phone && <DetailField label="Phone" value={app.phone} />}
                        {app.linkedin && <DetailField label="LinkedIn" value={app.linkedin} isLink />}
                        {app.job_title && <DetailField label="Job Title" value={app.job_title} />}
                        {app.desired_role && <DetailField label="Desired Role" value={app.desired_role} />}
                        {app.company && <DetailField label="Company" value={app.company} />}
                        {app.hiring_for && <DetailField label="Hiring For" value={app.hiring_for} />}
                        {app.volume && <DetailField label="Hiring Volume" value={app.volume} />}
                        {app.service_needed && <DetailField label="Service Needed" value={app.service_needed} />}
                        {(app.city || app.state || app.country) && (
                          <DetailField
                            label="Location"
                            value={[app.city, app.state, app.country].filter(Boolean).join(", ")}
                          />
                        )}
                        {app.message && (
                          <div className="sm:col-span-2">
                            <p className="text-gray-500 text-xs uppercase tracking-[1px] mb-1.5">Message</p>
                            <p className="text-gray-300 leading-6 whitespace-pre-wrap">{app.message}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}

function DetailField({ label, value, isLink = false }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-[1px] mb-1">{label}</p>
      {isLink ? (
        <a
          href={value.startsWith("http") ? value : `https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C89B3C] hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-300 break-words">{value}</p>
      )}
    </div>
  );
}