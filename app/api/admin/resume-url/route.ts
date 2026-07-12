// app/api/admin/resume-url/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { path } = await req.json();
    if (!path) {
      return NextResponse.json({ error: "Missing file path." }, { status: 400 });
    }

    // Fresh 1-hour link — generated on demand, so it never "expires"
    // in a way that matters: just request a new one anytime.
    const { data, error } = await supabaseAdmin.storage
      .from("resumes")
      .createSignedUrl(path, 60 * 60);

    if (error || !data?.signedUrl) {
      console.error("Signed URL error:", error);
      return NextResponse.json({ error: "Could not generate download link." }, { status: 500 });
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch (err: any) {
    console.error("Resume URL error:", err);
    return NextResponse.json({ error: err.message || "Something went wrong." }, { status: 500 });
  }
}