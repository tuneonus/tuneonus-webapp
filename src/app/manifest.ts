import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TuneOnus",
    short_name: "TuneOnus",
    description:
      "AI product, web, mobile, SaaS, and software development services.",
    start_url: "/",
    display: "standalone",
    background_color: "#080610",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
