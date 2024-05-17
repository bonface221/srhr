import { latestNewsData, whoWeAreMoreAbout } from "../constants";

export function getBlogBySlug(slug: string) {
  return latestNewsData.find((d) => d.slug === slug);
}

export function getWhoWeAreData(slug: string) {
  return whoWeAreMoreAbout.find((d) => d.slug === slug);
}
