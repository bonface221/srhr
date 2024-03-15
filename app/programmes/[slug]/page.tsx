import CommonPageHero from "@/components/common/common-page-hero";
import ProgrammeContent from "@/components/programme";
import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
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
    const programme = await directus.request(
      readItem("programmes", slug, {
        fields: ["*", "programme_images.directus_files_id"],
      })
    );
    return programme;
  } catch (error) {
    notFound();
  }
}
