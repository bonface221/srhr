import { latestNewsData, partnersData, programs } from "../constants";

export function getPartnerBySlug(slug: string) {
  return partnersData.find((d) => d.slug === slug);
}
export function getBlogBySlug(slug: string) {
  return latestNewsData.find((d) => d.slug === slug);
}
export function getProgrammeBySlug(slug: string) {
  return programs.find((d) => d.slug === slug);
}
