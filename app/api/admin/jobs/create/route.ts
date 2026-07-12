// app/api/admin/jobs/create/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { addJobToRepo } from "@/lib/githubJobs";
import { buildJobObjectString } from "@/lib/jobObjectString";

// Escapes double quotes and backslashes so form input can't break the
// generated TypeScript string literals.

export async function POST(req: NextRequest) {
  try {
    // Verify the admin session directly (this route isn't covered by the
    // /admin/:path* middleware matcher since it's under /api/admin/).
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const data = await req.json();

    const required = ["title", "company", "location", "type", "industry", "specialisation", "slug", "description"];
    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const id = Date.now();
    const datePosted = new Date().toISOString().split("T")[0]; // e.g. "2026-07-09"

    const jobObjectString = buildJobObjectString(data, {
      id,
      datePosted,
      featured: !!data.featured,
      urgent: !!data.urgent,
    });

    await addJobToRepo(
      jobObjectString,
      `Add job: ${data.title} (${data.location})`
    );

    return NextResponse.json({ success: true, slug: data.slug });
  } catch (err: any) {
    console.error("Admin job create error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create job." },
      { status: 500 }
    );
  }
}