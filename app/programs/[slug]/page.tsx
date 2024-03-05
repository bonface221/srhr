import CommonPageHero from "@/components/common/common-page-hero";
import ProgrammeContent from "@/components/programme";
import { getProgrammeBySlug } from "@/utils/functions";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const ProgramDetails = ({ params: { slug } }: Props) => {
  const programme = getProgrammeBySlug(slug);

  if (!programme) return notFound();
  return (
    <>
      <CommonPageHero text={programme.title} bgImg="" />
      <ProgrammeContent programme={programme} />
    </>
  );
};

export default ProgramDetails;
