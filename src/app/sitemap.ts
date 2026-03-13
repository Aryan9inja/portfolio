import type { MetadataRoute } from "next";
import { Projects } from "@/components/Projects/projectData";

const BASE_URL = "https://portfolio-aryan-singh-thakur.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = Projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
