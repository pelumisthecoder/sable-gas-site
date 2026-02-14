import { SITE } from "@/lib/constants";

export default function sitemap() {
  const now = new Date();

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
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/order" ? 0.9 : 0.7,
  }));
}
