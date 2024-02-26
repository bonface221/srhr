import AddedValue from "@/components/about/added-value";
import VisionAndMission from "@/components/about/vision-and-mission";
import WhoWeAre from "@/components/about/who-we-are";
import CommonPageHero from "@/components/common/common-page-hero";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <CommonPageHero text="About Us" bgImg="/images/about-us-hero.jpg" />
      <WhoWeAre />
      <AddedValue />
      <VisionAndMission />
    </>
  );
};

export default AboutUsPage;
