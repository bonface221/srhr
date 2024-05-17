import dynamic from "next/dynamic";
import PageLoading from "../common/video-loader";

export { default as LatestNews } from "../common/latest-news";
export { default as ABitAboutUs } from "./abit-about-us";
export { default as OurMission } from "./our-mission-vision";
export { default as OurServices } from "./our-services";
export { default as Stats } from "./stats";

export const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube"),
  { ssr: false }
);

export const Hero = dynamic(() => import("./hero"), {
  ssr: false,
  loading: () => <PageLoading />,
});
