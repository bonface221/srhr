import CommonPageHero from "@/components/common/common-page-hero";
import OurResources from "@/components/our-resources";
import Folders from "@/components/our-resources/folders";

import React from "react";

const ResourcesPage = () => {
  return (
    <>
      <CommonPageHero text="Our Resources" bgImg="" />
      <Folders />
      <OurResources />
    </>
  );
};

export default ResourcesPage;
