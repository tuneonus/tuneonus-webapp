export const siteConfig = {
  name: "TuneOnus",
  url: "https://www.tuneonus.com",
  email: "tuneonus@gmail.com",
  description:
    "TuneOnus is a software development company building custom AI products, web and mobile applications, SaaS platforms, automation, and backend systems.",
  ogImage: "/og-image.png",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
