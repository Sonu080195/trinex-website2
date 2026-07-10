// app/api/admin/jobs/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { deleteJobFromRepo } from "@/lib/githubJobs";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id, title } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing job id." }, { status: 400 });
    }

    await deleteJobFromRepo(id, `Delete job: ${title || id}`);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Admin job delete error:", err);
    return NextResponse.json({ error: err.message || "Failed to delete job." }, { status: 500 });
  }
}