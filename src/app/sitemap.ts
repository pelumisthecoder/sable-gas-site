import { SITE } from "@/lib/constants";

export default function sitemap() {
  const now = new Date();

  // Remove any trailing slashes to prevent double-slash URLs
  const base = SITE.url.replace(/\/+$/, "");

  const routes = [
    "/",
    "/order",
    "/service-area",
    "/safety",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${base}${path === "/" ? "/" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/order" ? 0.9 : 0.7,
  }));
}
