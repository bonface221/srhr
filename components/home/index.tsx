import React from "react";
import Hero from "./hero";
import ABitAboutUs from "./abit-about-us";
import OurMission from "./our-mission-vision";
import OurServices from "./our-services";

import Stats from "./stats";
import dynamic from "next/dynamic";
import LatestNews from "../common/latest-news";
import Donors from "./donors";

const SRHRAllianceOnYoutube = dynamic(
  () => import("./srhr-alliance-on-youtube")
);

const Landing = () => {
  return (
    <>
      <Hero />
      <Donors />
      <Stats />
      <ABitAboutUs />
      <OurMission />
      <OurServices />
      <LatestNews />
      <SRHRAllianceOnYoutube />
    </>
  );
};

export default Landing;
