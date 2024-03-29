import EventsListing from "@/components/Events";
import CommonPageHero from "@/components/common/common-page-hero";
import React from "react";

const EventsPage = () => {
  return (
    <>
      <CommonPageHero text="Upcoming events" bgImg="" />
      <EventsListing />
    </>
  );
};

export default EventsPage;
