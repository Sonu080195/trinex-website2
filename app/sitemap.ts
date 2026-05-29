import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    "https://www.rudrongts.com";

  const routes = [

    "",
    "/about",
    "/employers",
    "/candidates",
    "/industries",
    "/commercial",
    "/industrial",
    "/residential",
    "/civil",
    "/jobs",
    "/insights",
    "/contact",
    "/saved-jobs",

  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}