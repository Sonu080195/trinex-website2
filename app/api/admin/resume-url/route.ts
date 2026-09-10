// app/api/admin/resume-url/route.ts

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    // ─────────────────────────────────────────────
    // Verify admin authentication
    // ─────────────────────────────────────────────

    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);

    if (!valid) {
      return NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      );
    }

    // ─────────────────────────────────────────────
    // Get resume storage path
    // ─────────────────────────────────────────────

    const { path } = await req.json();

    if (!path) {
      return NextResponse.json(
        { error: "Missing file path." },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────
    // Generate fresh signed download URL
    // ─────────────────────────────────────────────

    // Fresh 1-hour link generated on demand.
    // A new link can be requested whenever needed.
    const { data, error } = await supabaseAdmin.storage
      .from("resumes")
      .createSignedUrl(path, 60 * 60);

    if (error || !data?.signedUrl) {
      console.error("Signed URL error:", error);

      return NextResponse.json(
        { error: "Could not generate download link." },
        { status: 500 }
      );
    }

    // ─────────────────────────────────────────────
    // Return signed URL
    // ─────────────────────────────────────────────

    return NextResponse.json({
      url: data.signedUrl,
    });
  } catch (err: any) {
    console.error("Resume URL error:", err);

    return NextResponse.json(
      {
        error: err.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}