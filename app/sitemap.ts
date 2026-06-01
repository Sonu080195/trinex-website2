import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rudrongts.com";

  const routes = [
    "",

    // Main Pages
    "/about",
    "/employers",
    "/candidates",
    "/industries",
    "/industries/[slug]",
    "/commercial",
    "/industrial",
    "/residential",
    "/civil",
    "/jobs",
    "/insights",
    "/insights/[slug]",
    "/contact",
    "/saved-jobs",

    // Civil
    "/civil/airport",
    "/civil/bridge",
    "/civil/rail-metro",
    "/civil/roadways",
    "/civil/tunnel",

    // Commercial
    "/commercial/data-centers",
    "/commercial/educational",
    "/commercial/healthcare",
    "/commercial/office-buildings",
    "/commercial/retail",

    // Industrial
    "/industrial/distributioncenter",
    "/industrial/powerplant",
    "/industrial/tiltup",
    "/industrial/warehouse",
    "/industrial/wastewater",

    // Residential
    "/residential/highrise",
    "/residential/multi-family",
    "/residential/senior-housing",
    "/residential/single-family",
    "/residential/student-housing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/jobs")
        ? 0.9
        : 0.8,
  }));
}