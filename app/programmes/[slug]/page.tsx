import CommonPageHero from "@/components/common/common-page-hero";
import ProgrammeContent from "@/components/programme";
import { CMS_URL } from "@/config";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const ProgramDetails = async ({ params: { slug } }: Props) => {
  const programme = await getProgrammeBySlug(slug);

  return (
    <>
      <CommonPageHero text={programme.title} bgImg="" />
      <ProgrammeContent programme={programme} />
    </>
  );
};

export default ProgramDetails;

async function getProgrammeBySlug(slug: string) {
  try {
    const res = await fetch(getUrl(slug), {
      cache: "no-cache",
    });

    const programme: {
      data: Programme;
    } = await res.json();

    return programme.data;
  } catch (error) {
    notFound();
  }
}

function getUrl(slug: string) {
  return (
    CMS_URL +
    "/items/programmes/" +
    slug +
    "/items/programmes?fields=*,programme_images.directus_files_id"
  );
}
