import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://joyprofits.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://joyprofits.com/how-it-works",
      lastModified: new Date(),
      priority: 2,
    },
    {
      url: "https://joyprofits.com/earn-methods",
      lastModified: new Date(),
      priority: 2,
    },
    {
      url: "https://joyprofits.com/support",
      lastModified: new Date(),
      priority: 2,
    },
  ]
}
