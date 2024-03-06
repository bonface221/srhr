import CommonPageHero from "@/components/common/common-page-hero";
import { PartnersDetailContent } from "@/components/partners";
import { getPartnerBySlug } from "@/utils/functions";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const PartnersDetail = ({ params: { slug } }: Props) => {
  const partner = getPartnerBySlug(slug);
  if (!partner) return notFound();
  return (
    <>
      <CommonPageHero text={partner.name} bgImg="" />
      <PartnersDetailContent partner={partner} />
    </>
  );
};

export default PartnersDetail;
