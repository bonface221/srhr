<<<<<<< HEAD
import ABitAboutUs from "./abit-about-us";
import OurMission from "./our-mission-vision";
import OurServices from "./our-services";
=======
>>>>>>> eef776693366567900442d37b87efc1de12f4777
import dynamic from "next/dynamic";

export { default as ABitAboutUs } from "./abit-about-us";
export { default as Hero } from "./hero";
export { default as OurMission } from "./our-mission-vision";
export { default as OurServices } from "./our-services";
export { default as LatestNews } from "../common/latest-news";
export { default as Stats } from "./stats";

export const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube"),
  { ssr: false }
);
<<<<<<< HEAD

const Hero = dynamic(() => import("./hero"));

const Landing = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ABitAboutUs />
      <OurMission />
      <OurServices />
      <SRHRAllianceOnYoutube />
      <LatestNews />
    </>
  );
};

export default Landing;
=======
>>>>>>> eef776693366567900442d37b87efc1de12f4777
