import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return [
    "",
    "/about",
    "/adopt",
    "/animals",
    "/blog",
    "/contact",
    "/donate",
    "/donate/monthly",
    "/faq",
    "/foster",
    "/locations",
    "/privacy",
    "/search",
    "/stories",
    "/terms",
    "/volunteer",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
