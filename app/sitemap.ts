import type { MetadataRoute } from "next";

const siteUrl = "https://www.saranyasasikumar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/experience`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
