// app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY!);
const NOTIFY_EMAIL = "jobs@rudrongts.com"; // where you receive applications
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const type = (formData.get("type") as string) || "job_application";
    const file = formData.get("attachment") as File | null;

    // ── Basic validation ─────────────────────────────────────
    if (type === "job_application" && !file) {
      return NextResponse.json(
        { error: "Resume attachment is required." },
        { status: 400 }
      );
    }

    if (file && file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "File exceeds the 10MB limit." },
        { status: 400 }
      );
    }

    // ── Collect shared + type-specific fields ────────────────
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const linkedin = (formData.get("linkedin") as string) || "";
    const message = (formData.get("message") as string) || "";

    const jobTitle = (formData.get("job_title") as string) || null;
    const firstName = (formData.get("first_name") as string) || null;
    const lastName = (formData.get("last_name") as string) || null;

    const fullName = (formData.get("full_name") as string) || null;
    const desiredRole = (formData.get("desired_role") as string) || null;
    const city = (formData.get("city") as string) || null;
    const state = (formData.get("state") as string) || null;
    const country = (formData.get("country") as string) || null;

    const displayName =
      fullName || `${firstName || ""} ${lastName || ""}`.trim() || "Unknown";

    // ── Upload resume to Supabase Storage (if present) ───────
    let resumeUrl: string | null = null;
    let resumeFilename: string | null = null;
    let fileBuffer: Buffer | null = null;

    if (file) {
      fileBuffer = Buffer.from(await file.arrayBuffer());
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const storagePath = `${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from("resumes")
        .upload(storagePath, fileBuffer, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });

      if (uploadError) {
        console.error("Supabase upload error:", uploadError);
        return NextResponse.json(
          { error: "Failed to upload resume." },
          { status: 500 }
        );
      }

      // Signed URL valid for 30 days so you can open it from the email/admin panel
      const { data: signedUrlData } = await supabaseAdmin.storage
        .from("resumes")
        .createSignedUrl(storagePath, 60 * 60 * 24 * 30);

      resumeUrl = signedUrlData?.signedUrl || storagePath;
      resumeFilename = file.name;
    }

    // ── Insert record into the database ──────────────────────
    const { error: dbError } = await supabaseAdmin.from("applications").insert({
      type,
      job_title: jobTitle,
      first_name: firstName,
      last_name: lastName,
      full_name: fullName,
      email,
      phone,
      linkedin,
      desired_role: desiredRole,
      city,
      state,
      country,
      message,
      resume_url: resumeUrl,
      resume_filename: resumeFilename,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save submission." },
        { status: 500 }
      );
    }

    // ── Send email notification (with the resume attached directly) ──
    const subject =
      type === "job_application"
        ? `New Application – ${jobTitle || "Unknown Role"}`
        : "New Candidate Submission";

    const emailHtml = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${displayName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>LinkedIn:</strong> ${linkedin || "—"}</p>
      ${desiredRole ? `<p><strong>Desired Role:</strong> ${desiredRole}</p>` : ""}
      ${city || state || country ? `<p><strong>Location:</strong> ${[city, state, country].filter(Boolean).join(", ")}</p>` : ""}
      <p><strong>Message:</strong><br/>${(message || "—").replace(/\n/g, "<br/>")}</p>
      ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeFilename}</a> (link valid 30 days)</p>` : ""}
    `;

    await resend.emails.send({
      from: "RUDRON Careers <careers@rudrongts.com>", // must be a verified domain in Resend
      to: NOTIFY_EMAIL,
      replyTo: email || undefined,
      subject,
      html: emailHtml,
      attachments:
        file && fileBuffer
          ? [{ filename: file.name, content: fileBuffer }]
          : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}