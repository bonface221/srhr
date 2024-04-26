import dynamic from "next/dynamic";

export { default as ABitAboutUs } from "./abit-about-us";
export { default as Hero } from "./hero";
export { default as OurMission } from "./our-mission-vision";
export { default as OurServices } from "./our-services";
export { default as LatestNews } from "../common/latest-news";
export { default as Stats } from "./stats";

export const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube")
);
