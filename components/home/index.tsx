import ABitAboutUs from "./abit-about-us";
import OurMission from "./our-mission-vision";
import OurServices from "./our-services";
import dynamic from "next/dynamic";
import LatestNews from "../common/latest-news";
import Stats from "./stats";

const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube")
);

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
