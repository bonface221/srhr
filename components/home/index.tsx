import React from "react";
import Hero from "./hero";
import ABitAboutUs from "./abit-about-us";
import OurMission from "./our-mission-vision";
import OurServices from "./our-services";

import Stats from "./stats";
import dynamic from "next/dynamic";
import LatestNews from "../common/latest-news";

const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube")
);

const Landing = () => {
  return (
    <>
      <Hero />
      <ABitAboutUs />
      <OurMission />
      <OurServices />
      <SRHRAllianceOnYoutube />
      <Stats />
      <LatestNews />
    </>
  );
};

export default Landing;
