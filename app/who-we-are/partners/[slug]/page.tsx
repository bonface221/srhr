import CommonPageHero from "@/components/common/common-page-hero";
import { PartnersDetailContent } from "@/components/partners";
import { CMS_URL } from "@/config";

import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const url = CMS_URL + "/items/partners/";

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
    const res = await fetch(url + slug, {
      cache: "no-cache",
    });
    const partner: {
      data: Partner;
    } = await res.json();

    return partner.data;
  } catch (error) {
    notFound();
  }
}
