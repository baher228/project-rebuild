import type { MetadataRoute } from "next";

const baseUrl = "https://ardivia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/studio", "/services", "/projects", "/process", "/clients", "/journal", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
