// app/api/admin/jobs/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { updateJobInRepo } from "@/lib/githubJobs";
import { buildJobObjectString } from "@/lib/jobObjectString";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const data = await req.json();

    if (!data.id) {
      return NextResponse.json({ error: "Missing job id." }, { status: 400 });
    }

    const required = ["title", "company", "location", "type", "industry", "specialisation", "slug", "description"];
    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const jobObjectString = buildJobObjectString(data, {
      id: data.id,
      datePosted: data.datePosted || new Date().toISOString().split("T")[0],
      featured: !!data.featured,
      urgent: !!data.urgent,
      recruiter: data.recruiter,
      heroImage: data.heroImage,
    });

    await updateJobInRepo(data.id, jobObjectString, `Update job: ${data.title} (${data.location})`);

    return NextResponse.json({ success: true, slug: data.slug });
  } catch (err: any) {
    console.error("Admin job update error:", err);
    return NextResponse.json({ error: err.message || "Failed to update job." }, { status: 500 });
  }
}