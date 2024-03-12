import {
  latestNewsData,
  partnersData,
  programs,
  whoWeAreMoreAbout,
} from "../constants";

export function getPartnerBySlug(slug: string) {
  return partnersData.find((d) => d.slug === slug);
}
export function getBlogBySlug(slug: string) {
  return latestNewsData.find((d) => d.slug === slug);
}
export function getProgrammeBySlug(slug: string) {
  return programs.find((d) => d.slug === slug);
}

export function getWhoWeAreData(slug: string) {
  return whoWeAreMoreAbout.find((d) => d.slug === slug);
}

export function getNavPrograms(): { label: string; link: string }[] {
  return programs.map((program) => ({
    label: program.title.toLocaleUpperCase(),
    link: `/programs/${program.slug}`,
  }));
}
