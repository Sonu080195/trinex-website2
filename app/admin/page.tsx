"use client";

import { jobs } from "@/data/jobs";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface JobFormData {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  industry: string;
  specialisation: string;
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  slug: string;
  featured: boolean;
  urgent: boolean;
}

export default function AdminPage() {

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [editingJob, setEditingJob] = useState<any>(null); // holds the full original job while editing, null = create mode
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [formData, setFormData] =
    useState<JobFormData>({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      industry: "",
      specialisation: "",
      description: "",
      responsibilities: "",
      requirements: "",
      benefits: "",
      slug: "",
      featured: false,
      urgent: false,
    });

    const router = useRouter();
 
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
 
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
 
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

    const startEdit = (job: any) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      type: job.type,
      industry: job.industry,
      specialisation: job.specialisation,
      description: job.description,
      responsibilities: (job.responsibilities || []).join("\n"),
      requirements: (job.requirements || []).join("\n"),
      benefits: (job.benefits || []).join("\n"),
      slug: job.slug,
      featured: !!job.featured,
      urgent: !!job.urgent,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  const cancelEdit = () => {
    setEditingJob(null);
    setFormData({
      title: "", company: "", location: "", salary: "", type: "",
      industry: "", specialisation: "", description: "",
      responsibilities: "", requirements: "", benefits: "", slug: "", featured: false, urgent: false,
    });
  };

    const handleDelete = async (job: any) => {
    if (!confirm(`Delete "${job.title}"? This can't be undone.`)) return;
 
    setDeletingId(job.id);
    try {
      const res = await fetch("/api/admin/jobs/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: job.id, title: job.title }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to delete job.");
 
      alert("Job deleted. The site will redeploy automatically in about 1-2 minutes.");
    } catch (err: any) {
      alert(err.message || "Something went wrong deleting the job.");
    } finally {
      setDeletingId(null);
    }
  };

  const generateSlug = () => {

  const titleSlug = formData.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  const locationSlug = formData.location
    .split(",")[0]
    ?.toLowerCase()
    .replace(/\s+/g, "-");

  const finalSlug =
    `${titleSlug}-${locationSlug}`;

  setFormData({
    ...formData,
    slug: finalSlug,
  });
};

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSaveError("");
    setSaving(true);
 
    try {
      const isEditing = !!editingJob;
      const endpoint = isEditing ? "/api/admin/jobs/update" : "/api/admin/jobs/create";
      const payload = isEditing
        ? {
            ...formData,
            id: editingJob.id,
            datePosted: editingJob.datePosted,
            recruiter: editingJob.recruiter,
            heroImage: editingJob.heroImage,
          }
        : formData;
 
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
 
      const result = await res.json();
 
      if (!res.ok) {
        throw new Error(result.error || "Failed to create job.");
      }
 
      alert(
        isEditing
          ? `Job updated! The site will redeploy automatically in about 1-2 minutes.`
          : `Job created! The site will redeploy automatically — it should be live in about 1-2 minutes. New job slug: ${result.slug}`
      );
 
      // Reset the form
      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "",
        industry: "",
        specialisation: "",
        description: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
        slug: "",
        featured: false,
        urgent: false,
      });
      setEditingJob(null);
    } catch (err: any) {
      setSaveError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  return (

    <main className="min-h-screen bg-[#07111F] text-white px-6 pt-36 lg:pt-44 pb-16">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 flex items-start justify-between gap-6 flex-wrap">
 
          <div>
 
          <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
 
            Internal Dashboard
 
          </p>
 
          <h1 className="text-[48px] font-bold leading-tight mb-5">

            Admin Job
            <br />

            Management Panel

          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl">
 
            Create and manage construction, architecture,
            engineering, and executive recruitment openings.
 
          </p>
 
          </div>
 
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white text-sm border border-white/10 hover:border-white/20 rounded-lg px-5 py-3 transition-colors duration-200 flex-shrink-0"
          >
            Log Out
          </button>
 
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0D1726] border border-white/5 rounded-[32px] p-8 lg:p-10 space-y-6"
        >

          {/* ROW */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Job Title

              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Senior Project Manager"
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              />

            </div>

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Company

              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Confidential Contractor"
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              />

            </div>

          </div>

          {/* ROW */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Location

              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Dallas, TX"
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              />

            </div>

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Salary

              </label>

              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="$150K - $180K"
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              />

            </div>

          </div>

          {/* ROW */}
          <div className="grid md:grid-cols-3 gap-5">

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Employment Type

              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              >

                <option value="">
                  Select
                </option>

                <option>
                  Full Time
                </option>

                <option>
                  Contract
                </option>

                <option>
                  Hybrid
                </option>

                <option>
                  Remote
                </option>

              </select>

            </div>

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Industry

              </label>

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              >

                <option value="">
                  Select
                </option>

                <option>
                  Construction
                </option>

                <option>
                  Architecture
                </option>

                <option>
                  Engineering
                </option>

                <option>
                  MEP
                </option>

              </select>

            </div>

            <div>

              <label className="block text-sm text-gray-300 mb-2">

                Specialisation

              </label>

              <select
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                className="w-full h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none"
              >

                <option value="">
                  Select
                </option>

                <option>
                  Commercial
                </option>

                <option>
                  Industrial
                </option>

                <option>
                  Residential
                </option>

                <option>
                  Data Centers
                </option>

                <option>
                  Infrastructure
                </option>

              </select>

            </div>

          </div>

                    {/* FEATURED / URGENT TOGGLES */}
          <div className="flex flex-wrap gap-6 py-2">
 
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 accent-[#C89B3C]"
              />
              <span className="text-sm text-gray-300">Featured Job</span>
            </label>
 
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="urgent"
                checked={formData.urgent}
                onChange={handleChange}
                className="w-5 h-5 accent-[#C89B3C]"
              />
              <span className="text-sm text-gray-300">Urgent Hire</span>
            </label>
 
          </div>

          {/* DESCRIPTION */}
<div>

  <label className="block text-sm text-gray-300 mb-2">

    Job Description

  </label>

  <textarea
    name="description"
    value={formData.description}
    onChange={(e) =>
      setFormData({
        ...formData,
        description: e.target.value,
      })
    }
    rows={6}
    placeholder="Describe the role, company, and opportunity..."
    className="w-full bg-[#07111F] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
  />

</div>

{/* RESPONSIBILITIES */}
<div>

  <label className="block text-sm text-gray-300 mb-2">

    Responsibilities

  </label>

  <textarea
    name="responsibilities"
    value={formData.responsibilities}
    onChange={(e) =>
      setFormData({
        ...formData,
        responsibilities: e.target.value,
      })
    }
    rows={6}
    placeholder="Enter responsibilities separated by line breaks..."
    className="w-full bg-[#07111F] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
  />

</div>

{/* REQUIREMENTS */}
<div>

  <label className="block text-sm text-gray-300 mb-2">

    Requirements

  </label>

  <textarea
    name="requirements"
    value={formData.requirements}
    onChange={(e) =>
      setFormData({
        ...formData,
        requirements: e.target.value,
      })
    }
    rows={6}
    placeholder="Enter requirements separated by line breaks..."
    className="w-full bg-[#07111F] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
  />

</div>

{/* BENEFITS */}
<div>

  <label className="block text-sm text-gray-300 mb-2">

    Benefits

  </label>

  <textarea
    name="benefits"
    value={formData.benefits}
    onChange={(e) =>
      setFormData({
        ...formData,
        benefits: e.target.value,
      })
    }
    rows={6}
    placeholder="Enter benefits separated by line breaks..."
    className="w-full bg-[#07111F] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
  />

</div>

{/* SLUG */}
<div>

  <label className="block text-sm text-gray-300 mb-2">

    Generated Slug

  </label>

  <div className="flex gap-3">

    <input
      type="text"
      value={formData.slug}
      readOnly
      placeholder="generated-job-slug"
      className="flex-1 h-[56px] bg-[#07111F] border border-white/10 rounded-xl px-5 outline-none text-gray-300"
    />

    <button
      type="button"
      onClick={generateSlug}
      className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold px-6 rounded-xl transition-all duration-300"
    >

      Generate

    </button>

  </div>

</div>

          {/* BUTTON */}
          <div className="flex gap-3 flex-wrap">
            <button
              type="submit"
              disabled={saving}
              className="bg-[#C89B3C] hover:bg-[#d6ab52] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              {saving ? "Saving..." : editingJob ? "Update Job" : "Publish Job"}
            </button>
 
            {editingJob && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Cancel Edit
              </button>
            )}
          </div>
 
          {saveError && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
              {saveError}
            </p>
          )}

        </form>

        {/* LIVE PREVIEW */}
<div className="mt-10">

  <div className="mb-6">

    <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-3">

      Live Preview

    </p>

    <h2 className="text-[36px] font-bold">

      Job Card Preview

    </h2>

  </div>

  {/* CARD */}
  <div className="bg-[#0D1726] border border-white/5 rounded-[28px] p-8">

    {/* BADGES */}
    <div className="flex flex-wrap gap-3 mb-5">

      {formData.specialisation && (

        <div className="bg-[#C89B3C] text-black text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

          {formData.specialisation}

        </div>

      )}

      {formData.type && (

        <div className="bg-white/10 text-white text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

          {formData.type}

                {formData.featured && (
        <div className="bg-[#C89B3C]/15 border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">
          Featured
        </div>
      )}
 
      {formData.urgent && (
        <div className="bg-red-500/15 border border-red-400/30 text-red-400 text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">
          Urgent
        </div>
      )}

        </div>

      )}

    </div>

    {/* TITLE */}
    <h3 className="text-white text-[34px] font-bold leading-tight mb-5">

      {formData.title || "Job Title Preview"}

    </h3>

    {/* DETAILS */}
    <div className="flex flex-wrap gap-5 text-gray-400 text-[15px] mb-6">

      <p>

        {formData.company || "Company"}

      </p>

      <p>

        {formData.location || "Location"}

      </p>

      <p>

        {formData.salary || "Salary"}

      </p>

    </div>

    {/* INDUSTRY */}
    <div className="inline-flex bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">

      {formData.industry || "Industry"}

    </div>

  </div>

</div>

      </div>

      {/* JOB MANAGEMENT TABLE */}
<div className="mt-20">

  {/* HEADER */}
  <div className="mb-8">

    <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-3">

      Active Openings

    </p>

    <h2 className="text-[38px] font-bold">

      Manage Jobs

    </h2>

  </div>

  {/* TABLE */}
  <div className="bg-[#0D1726] border border-white/5 rounded-[28px] overflow-hidden">

    {/* HEADERS */}
    <div className="hidden md:grid md:grid-cols-5 gap-5 px-6 py-5 border-b border-white/5 text-gray-400 text-sm uppercase tracking-[2px]">

      <div>Title</div>

      <div>Company</div>

      <div>Location</div>

      <div>Slug</div>

      <div>Actions</div>

    </div>

    {/* ROWS */}
    {jobs.map((job) => (

    <div
        key={job.id}
        className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-5 px-5 md:px-6 py-6 border-b border-white/5 md:items-center"
      >

        {/* TITLE */}
        <div>

          <h3 className="font-semibold text-white">

            {job.title}

          </h3>

        </div>

        {/* COMPANY */}
        <div className="text-gray-300">
          <span className="md:hidden text-gray-500 text-xs uppercase tracking-[1px] mr-2">Company:</span>
          {job.company}
        </div>
 
        {/* LOCATION */}
        <div className="text-gray-300">
          <span className="md:hidden text-gray-500 text-xs uppercase tracking-[1px] mr-2">Location:</span>
          {job.location}
        </div>
 
        {/* SLUG */}
        <div className="text-gray-500 text-sm truncate">
          <span className="md:hidden text-gray-500 text-xs uppercase tracking-[1px] mr-2">Slug:</span>
          {job.slug}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3">
 
          {/* PREVIEW */}
          <a
            href={`/jobs/${job.slug}`}
            target="_blank"
            className="bg-[#C89B3C] hover:bg-[#d6ab52] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
          >
 
            Preview
 
          </a>
 
          {/* COPY */}
          <button
            onClick={() => {
 
              navigator.clipboard.writeText(
                job.slug
              );
 
              alert("Slug Copied!");
            }}
            className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
          >
 
            Copy Slug
 
          </button>
 
          {/* EDIT */}
          <button
            onClick={() => startEdit(job)}
            className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
          >
            Edit
          </button>
 
          {/* DELETE */}
          <button
            onClick={() => handleDelete(job)}
            disabled={deletingId === job.id}
            className="bg-red-500/15 hover:bg-red-500/25 border border-red-400/30 text-red-400 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-60"
          >
            {deletingId === job.id ? "Deleting..." : "Delete"}
          </button>
 
        </div>

      </div>
    ))}

  </div>

</div>

    </main>
  );
}