// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createSessionToken } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabase";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;
const WINDOW_MINUTES = 15; // attempts older than this reset the counter

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const ip = getClientIp(req);

    // ── Check current lockout/attempt state for this IP ──────
    const { data: existing } = await supabaseAdmin
      .from("login_attempts")
      .select("*")
      .eq("ip", ip)
      .maybeSingle();

    const now = new Date();

    if (existing?.locked_until && new Date(existing.locked_until) > now) {
      const minutesLeft = Math.ceil(
        (new Date(existing.locked_until).getTime() - now.getTime()) / 60000
      );
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${minutesLeft} minute${minutesLeft === 1 ? "" : "s"}.` },
        { status: 429 }
      );
    }

    // If the last attempt window has expired, treat this as a fresh start
    const windowExpired =
      existing &&
      new Date(existing.first_attempt_at).getTime() < now.getTime() - WINDOW_MINUTES * 60000;

    const currentAttempts = windowExpired ? 0 : existing?.attempts || 0;

    // ── Check password ────────────────────────────────────────
    if (!password || password !== process.env.ADMIN_PASSWORD) {
      const newAttempts = currentAttempts + 1;
      const isNowLocked = newAttempts >= MAX_ATTEMPTS;

      await supabaseAdmin.from("login_attempts").upsert({
        ip,
        attempts: newAttempts,
        first_attempt_at: windowExpired || !existing ? now.toISOString() : existing.first_attempt_at,
        locked_until: isNowLocked
          ? new Date(now.getTime() + LOCKOUT_MINUTES * 60000).toISOString()
          : null,
      });

      if (isNowLocked) {
        return NextResponse.json(
          { error: `Too many failed attempts. Try again in ${LOCKOUT_MINUTES} minutes.` },
          { status: 429 }
        );
      }

      const remaining = MAX_ATTEMPTS - newAttempts;
      return NextResponse.json(
        { error: `Incorrect password. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.` },
        { status: 401 }
      );
    }

    // ── Correct password — clear any attempt history for this IP ──
    await supabaseAdmin.from("login_attempts").delete().eq("ip", ip);

    const token = await createSessionToken();

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return res;
  } catch (err) {
    console.error("Admin login error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}