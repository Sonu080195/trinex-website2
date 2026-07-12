// app/api/admin/applications/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const type = req.nextUrl.searchParams.get("type");

    let query = supabaseAdmin
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);

    if (type && type !== "all") {
      query = query.eq("type", type);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Applications list error:", error);
      return NextResponse.json({ error: "Failed to load submissions." }, { status: 500 });
    }

    return NextResponse.json({ applications: data });
  } catch (err: any) {
    console.error("Applications list error:", err);
    return NextResponse.json({ error: err.message || "Something went wrong." }, { status: 500 });
  }
}