import {
  ABitAboutUs,
  Hero,
  LatestNews,
  OurMission,
  OurServices,
  SRHRAllianceOnYoutube,
  Stats,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ABitAboutUs />
      <OurMission />
      <OurServices />
      <SRHRAllianceOnYoutube />
      <LatestNews />
    </>
  );
}
