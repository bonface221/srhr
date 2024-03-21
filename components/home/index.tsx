import ABitAboutUs from "./abit-about-us";
import Hero from "./hero";
import OurMission from "./our-mission-vision";
import OurServices from "./our-services";

import dynamic from "next/dynamic";
import LatestNews from "../common/latest-news";
import Stats from "./stats";

const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube")
);

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
