import { SITE } from "@/lib/constants";

export default function manifest() {
  return {
    name: SITE.brandName,
    short_name: "Sable Gas",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FCFCFA",
    theme_color: "#B45309",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
