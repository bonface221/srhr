import CommonPageHero from "@/components/common/common-page-hero";
import { PartnersDetailContent } from "@/components/partners";
import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";

import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const PartnersDetail = async ({ params: { slug } }: Props) => {
  const partner = await getPartnerBySlug(slug);
  if (!partner) return notFound();
  return (
    <>
      <CommonPageHero text={partner.name} bgImg="" />
      <PartnersDetailContent partner={partner} />
    </>
  );
};

export default PartnersDetail;

async function getPartnerBySlug(slug: string) {
  try {
    const partners = await directus.request(
      readItem("partners", slug, {
        fields: ["slug", "name", "description", "link", "image"],
      })
    );
    return partners;
  } catch (error) {
    notFound();
  }
}
