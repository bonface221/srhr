import CommonPageHero from "@/components/common/common-page-hero";
import CoreValues from "@/components/objectives-and-core-values/core-values";
import OurGoal from "@/components/objectives-and-core-values/goal";
import SRHRObjectives from "@/components/objectives-and-core-values/objectives";
import React from "react";

const ObjectivesAndCoreValuesPage = () => {
  return (
    <>
      <CommonPageHero text="Objectives and Core Values" bgImg="" />
      <OurGoal />
      <CoreValues />
      <SRHRObjectives />
    </>
  );
};

export default ObjectivesAndCoreValuesPage;
