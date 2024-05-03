import CommonPageHero from "@/components/common/common-page-hero";
import Team from "@/components/team/team";
import { CMS_URL } from "@/config";

const SRHRTeam = async () => {
  const ourTeam = await getOurTeam();

  return (
    <>
      <CommonPageHero text="Our Team" bgImg="" />
      <Team ourTeam={ourTeam} />
    </>
  );
};

export default SRHRTeam;

async function getOurTeam() {
  try {
    const res = await fetch(getUrl(), {
      cache: "no-cache",
    });
    const team: {
      data: Team[];
    } = await res.json();

    return team.data;
  } catch (error) {
    return [] as Team[];
  }
}

function getUrl() {
  return (
    CMS_URL + "/items" + "/our_team" + "?fields=name,position,bio,profile_pic"
  );
}
