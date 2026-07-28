import type { MetadataRoute } from "next";
import { jobs } from "@/data/jobs";

const BASE_URL = "https://www.rudrongts.com";

/**
 * Route definitions with explicit metadata.
 * - changeFrequency: how often the content is expected to change
 * - priority: relative importance to crawlers (0.0 – 1.0)
 */
const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: string;
}> = [
  // ── Homepage ──────────────────────────────────────────────
  { path: "",            changeFrequency: "weekly",   priority: 1.0 },

  // ── Core pages ────────────────────────────────────────────
  { path: "/about",      changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",    changeFrequency: "monthly", priority: 0.8 },
  { path: "/employers",  changeFrequency: "weekly",  priority: 0.85 },
  { path: "/candidates", changeFrequency: "weekly",  priority: 0.85 },

  // ── Jobs & Insights (high-traffic, frequently updated) ────
  { path: "/jobs",       changeFrequency: "daily",   priority: 0.95 },
  { path: "/insights",   changeFrequency: "weekly",  priority: 0.85 },
  // NOTE: /saved-jobs removed — it's disallowed in robots.ts (personalized,
  // login-gated content), so listing it in the sitemap contradicted that
  // and Google would never index it anyway.

  // ── Sector landing pages ──────────────────────────────────
  { path: "/industries",  changeFrequency: "monthly", priority: 0.8 },
  { path: "/commercial",  changeFrequency: "monthly", priority: 0.75 },
  { path: "/industrial",  changeFrequency: "monthly", priority: 0.75 },
  { path: "/residential", changeFrequency: "monthly", priority: 0.75 },
  { path: "/civil",       changeFrequency: "monthly", priority: 0.75 },

  // ── Civil sub-pages ───────────────────────────────────────
  { path: "/civil/airport",   changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/bridge",    changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/rail-metro",changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/roadways",  changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/tunnel",    changeFrequency: "monthly", priority: 0.65 },

  // ── Commercial sub-pages ──────────────────────────────────
  { path: "/commercial/data-centers",    changeFrequency: "monthly", priority: 0.65 },
  { path: "/commercial/educational",     changeFrequency: "monthly", priority: 0.65 },
  { path: "/commercial/healthcare",      changeFrequency: "monthly", priority: 0.65 },
  { path: "/commercial/office-buildings",changeFrequency: "monthly", priority: 0.65 },
  { path: "/commercial/retail",          changeFrequency: "monthly", priority: 0.65 },

  // ── Industrial sub-pages ──────────────────────────────────
  { path: "/industrial/distributioncenter", changeFrequency: "monthly", priority: 0.65 },
  { path: "/industrial/powerplant",         changeFrequency: "monthly", priority: 0.65 },
  { path: "/industrial/tiltup",             changeFrequency: "monthly", priority: 0.65 },
  { path: "/industrial/warehouse",          changeFrequency: "monthly", priority: 0.65 },
  { path: "/industrial/wastewater",         changeFrequency: "monthly", priority: 0.65 },

  // ── Residential sub-pages ─────────────────────────────────
  { path: "/residential/highrise",      changeFrequency: "monthly", priority: 0.65 },
  { path: "/residential/multi-family",  changeFrequency: "monthly", priority: 0.65 },
  { path: "/residential/senior-housing",changeFrequency: "monthly", priority: 0.65 },
  { path: "/residential/single-family", changeFrequency: "monthly", priority: 0.65 },
  { path: "/residential/student-housing",changeFrequency: "monthly", priority: 0.65 },

  // ── Privacy Policy and T&C ─────────────────────────────────
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-22" },
  { path: "/terms",          changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-22" },
  { path: "/cookie-policy",  changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-22" },
  { path: "/disclaimer",     changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-27" },
  { path: "/accessibility",  changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-27" },
];

// ── Insights articles ────────────────────────────────────────
// Matches the `articles` object in app/insights/[slug]/page.tsx.
// If that content moves to a CMS, generate this list from the same
// source instead of hand-maintaining two copies.
const insightArticles: Array<{ slug: string; lastModified: string }> = [
  { slug: "construction-hiring-trends",         lastModified: "2026-06-02" },
  { slug: "data-center-construction-hiring",    lastModified: "2026-06-08" },
  { slug: "mep-talent-shortage",                lastModified: "2026-06-14" },
  { slug: "commercial-construction-outlook",    lastModified: "2026-06-19" },
  { slug: "executive-search-construction",      lastModified: "2026-06-24" },
  { slug: "infrastructure-talent-shortage",     lastModified: "2026-06-29" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // ── Individual job pages ─────────────────────────────────
  const jobEntries: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE_URL}/jobs/${job.slug}`,
    lastModified: new Date(job.datePosted),
    changeFrequency: "weekly" as const,
    priority: job.featured ? 0.85 : 0.75,
  }));

  // ── Individual insight articles ──────────────────────────
  const insightEntries: MetadataRoute.Sitemap = insightArticles.map(
    ({ slug, lastModified }) => ({
      url: `${BASE_URL}/insights/${slug}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticEntries, ...jobEntries, ...insightEntries];
}