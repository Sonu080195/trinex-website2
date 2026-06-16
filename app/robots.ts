import type { MetadataRoute } from "next";

const BASE_URL = "https://www.rudrongts.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── General crawlers ──────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // internal API routes – never index
          "/_next/",      // Next.js build artefacts
          "/admin/",      // any admin panel
          "/dashboard/",  // authenticated user dashboards
          "/saved-jobs",  // personalised / login-gated content
          "/*?*",         // URLs with query strings (avoids duplicate content)
        ],
      },

      // ── GPTBot (OpenAI) ───────────────────────────────────
      // Disallow training crawls; adjust to your policy.
      {
        userAgent: "GPTBot",
        disallow: "/",
      },

      // ── Google-Extended (Bard / Gemini training) ──────────
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },

      // ── CCBot (Common Crawl – used for LLM training) ──────
      {
        userAgent: "CCBot",
        disallow: "/",
      },

      // ── Bytespider (TikTok / ByteDance) ──────────────────
      {
        userAgent: "Bytespider",
        disallow: "/",
      },

      // ── AhrefsBot / SemrushBot (SEO auditors) ─────────────
      // Allow by default; comment-out if you prefer to block.
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/dashboard/"],
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}