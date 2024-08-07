import {
  ABitAboutUs,
  Hero,
  LatestNews,
  OurMission,
  OurServices,
  SRHRAllianceOnYoutube,
  Stats,
} from "@/components/home";
import { CMS_URL } from "@/config";

export default async function Home() {
  const data = await getHomepageData();

  return (
    <>
      <Hero />
      <Stats />
      <ABitAboutUs />
      <OurMission />
      <OurServices />
      <SRHRAllianceOnYoutube />
      <LatestNews blogs={data.home_blogs} />
    </>
  );
}

async function getHomepageData() {
  try {
    const res = await fetch(getUrl(), {
      cache: "no-cache",
    });

    const homepageData: {
      data: Homepage;
    } = await res.json();

    return homepageData.data;
  } catch (error) {
    return {
      home_blogs: [
        {
          slug: "narratives-from-fgm-survivors",
          title: "NARRATIVES FROM FGM SURVIVORS",
          thumbnail: "b63d240b-8f7f-4ff6-8367-75ea96263140",
          excerpt:
            "Survivors speak: Women leading the movement to end FGM, amplifying voices for change.",
          date_created: "2024-05-03T07:26:43.997Z",
        },
        {
          slug: "why-we-need-comprehensive-sex-education-in-young-peoples-lives",
          title: "WHY WE NEED CSE NOW.",
          thumbnail: "bd8473c3-d122-4476-b52d-b417a44ab9dd",
          excerpt:
            "vidence from various studies on the value of comprehensive sexuality education in young people’s lives is very clear and convincing. Over the years, a growing number of governments have committed to deliver Comprehensive sexuality education and Youth friendly",
          date_created: "2024-05-03T07:29:39.942Z",
        },
        {
          slug: "world-health-day-2019",
          title: "world health day 2019",
          thumbnail: "4ee7adcd-9b4a-4e28-a76a-8351a5d57fb1",
          excerpt:
            "According to Census 2009, young people below the age of 25 constitute 66% of the total population in Kenya. Adolescents on the other hand, make up 24% of the country’s total population (9.2 million). Unfortunately,",
          date_created: "2024-05-03T07:28:11.899Z",
        },
      ],
    };
  }
}

function getUrl() {
  return (
    CMS_URL +
    "/items/homepage?fields=home_blogs.slug,home_blogs.title,home_blogs.thumbnail,home_blogs.excerpt,home_blogs.date_created&limit=3"
  );
}
