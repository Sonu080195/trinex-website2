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
}> = [
  // ── Homepage ──────────────────────────────────────────────
  { path: "",            changeFrequency: "daily",   priority: 1.0 },

  // ── Core pages ────────────────────────────────────────────
  { path: "/about",      changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",    changeFrequency: "monthly", priority: 0.8 },
  { path: "/employers",  changeFrequency: "weekly",  priority: 0.85 },
  { path: "/candidates", changeFrequency: "weekly",  priority: 0.85 },

  // ── Jobs & Insights (high-traffic, frequently updated) ────
  { path: "/jobs",       changeFrequency: "daily",   priority: 0.95 },
  { path: "/saved-jobs", changeFrequency: "daily",   priority: 0.7  },
  { path: "/insights",   changeFrequency: "weekly",  priority: 0.85 },

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
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms",          changeFrequency: "yearly", priority: 0.4 },
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
  // Sourced directly from the static jobs data — no CMS needed.
  // Featured/urgent roles get a slightly higher priority since
  // they're the highest-value pages to get indexed quickly.
  const jobEntries: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE_URL}/jobs/${job.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: job.featured ? 0.85 : 0.75,
  }));

  return [...staticEntries, ...jobEntries];
}

/*
  ┌─────────────────────────────────────────────────────────────────┐
  │  FUTURE: INSIGHTS / BLOG DYNAMIC ROUTES                          │
  │                                                                 │
  │  /insights/[slug]  → fetch all published article slugs          │
  │  once that content moves to a CMS or gets its own data file,    │
  │  add it here the same way jobEntries was added above.           │
  └─────────────────────────────────────────────────────────────────┘
*/