import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";
import { getAllArticleMeta } from "@/lib/articles";
import { hubs } from "@/data/hubs";

const routes = [
  "",
  "/learn",
  "/resources",
  "/meetups",
  "/buy-and-sell",
  "/group",
  "/about",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const hubRoutes = hubs.map((hub) => ({
    url: `${base}/${hub.id}`,
    lastModified: new Date(),
  }));
  const articleRoutes = getAllArticleMeta().map((article) => ({
    url: `${base}/${article.slug}`,
    lastModified: new Date(article.dateModified),
  }));
  const postRoutes = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...staticRoutes, ...hubRoutes, ...articleRoutes, ...postRoutes];
}
