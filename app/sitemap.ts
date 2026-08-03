import type { MetadataRoute } from "next";
import { jobs } from "@/data/jobs";

const BASE_URL = "https://www.rudrongts.com";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: string;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },

  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/employers", changeFrequency: "weekly", priority: 0.9 },
  { path: "/candidates", changeFrequency: "weekly", priority: 0.9 },

  {
    path: "/recruitment-specialties",
    changeFrequency: "weekly",
    priority: 0.9,
  },

  {
    path: "/project-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/superintendent-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/estimator-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/preconstruction-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/mep-project-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/mechanical-project-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/electrical-project-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/bim-vdc-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/commissioning-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/qa-qc-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/safety-manager-recruitment",
    changeFrequency: "monthly",
    priority: 0.85,
  },

  { path: "/jobs", changeFrequency: "daily", priority: 0.95 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.85 },

  { path: "/industries", changeFrequency: "monthly", priority: 0.85 },
  { path: "/commercial", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industrial", changeFrequency: "monthly", priority: 0.8 },
  { path: "/residential", changeFrequency: "monthly", priority: 0.8 },
  { path: "/civil", changeFrequency: "monthly", priority: 0.8 },

  {
    path: "/commercial/data-centers",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/commercial/educational",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/commercial/healthcare",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/commercial/office-buildings",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/commercial/retail",
    changeFrequency: "monthly",
    priority: 0.65,
  },

  {
    path: "/industrial/distributioncenter",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/industrial/powerplant",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/industrial/tiltup",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/industrial/warehouse",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/industrial/wastewater",
    changeFrequency: "monthly",
    priority: 0.65,
  },

  {
    path: "/residential/highrise",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/residential/multi-family",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/residential/senior-housing",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/residential/single-family",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/residential/student-housing",
    changeFrequency: "monthly",
    priority: 0.65,
  },

  { path: "/civil/airport", changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/bridge", changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/rail-metro", changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/roadways", changeFrequency: "monthly", priority: 0.65 },
  { path: "/civil/tunnel", changeFrequency: "monthly", priority: 0.65 },

  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-07-22",
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-07-22",
  },
  {
    path: "/cookie-policy",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-07-22",
  },
  {
    path: "/disclaimer",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-07-27",
  },
  {
    path: "/accessibility",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-07-27",
  },
];

const insightArticles: Array<{
  slug: string;
  lastModified: string;
}> = [
  {
    slug: "construction-hiring-trends",
    lastModified: "2026-06-02",
  },
  {
    slug: "data-center-construction-hiring",
    lastModified: "2026-06-08",
  },
  {
    slug: "mep-talent-shortage",
    lastModified: "2026-06-14",
  },
  {
    slug: "commercial-construction-outlook",
    lastModified: "2026-06-19",
  },
  {
    slug: "executive-search-construction",
    lastModified: "2026-06-24",
  },
  {
    slug: "infrastructure-talent-shortage",
    lastModified: "2026-06-29",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority, lastModified }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: lastModified ? new Date(lastModified) : generatedAt,
      changeFrequency,
      priority,
    })
  );

  const jobEntries: MetadataRoute.Sitemap = jobs.map((job) => {
    const parsedDate = new Date(job.datePosted);
    const hasValidDate = !Number.isNaN(parsedDate.getTime());

    return {
      url: `${BASE_URL}/jobs/${job.slug}`,
      lastModified: hasValidDate ? parsedDate : generatedAt,
      changeFrequency: "weekly" as const,
      priority: job.featured ? 0.85 : 0.75,
    };
  });

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