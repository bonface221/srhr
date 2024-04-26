import {
  BuildingWorkerIcon,
  CommunityHealthIcon,
  CommunityIcon,
  EnvironmentIcon,
  FemaleIcon,
  HealthIcon,
  HospitalIcon,
  InformationIcon,
  PeopleIcon,
  ServicesIcon,
  VisionIcon,
  WomenIcon,
  YouthIcon,
} from "@/utils/icons";
import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { Blog, Team } from "../types";

export const marginX = { base: "3%", sm: "5%", md: "10%" };

export const contactsData = [
  {
    icon: LocationIcon,
    text: "Southgate Residence, Plainsview, Likoni Road",
  },
  {
    icon: MailIcon,
    text: "info@srhralliance.or.ke",
  },
  {
    icon: PhoneIcon,
    text: "+254-769478605",
  },
];

export const programs = [
  {
    title: "GUSO",
    slug: "guso",
    desc: "Get Up Speak Out (GUSO) is a 5-year programme (2016-2020) funded by the Dutch Ministry of Foreign Affairs and is being implemented in 11 countries in Africa and Asia. The programme aims to improve the Sexual and Reproductive Health and Rights (SRHR) of young people (10-24 years) by ensuring that they have access to Comprehensive Sexuality Education (CSE), youth-friendly services, and safe and supportive environments.",
    images: ["guso1.JPG", "guso2.jpg", "guso3.jpg", "guso4.JPG"],
  },
  {
    title: "AMPLIFYCHANGE",
    slug: "amplifychange",
    desc: "AmplifyChange is a multi-donor challenge fund that aims to empower young people  to realize their sexual and reproductive health and rights. The fund is managed by MannionDaniels, in association with African Women’s Development Fund, and the Global Network of  People Living with HIV/AIDS.",
    images: ["amplify1.JPG", "amplify2.jpg", "amplify3.jpg"],
  },
  {
    title: "ASK",
    slug: "ask",
    desc: "Adolescents 360 (A360) is a four-year project funded by the Bill & Melinda Gates Foundation, which aims to increase the number of adolescents using modern contraception in Ethiopia, Nigeria and Tanzania.",
    images: ["ask1.JPG", "ask2.JPG", "ask3.JPG"],
  },
  {
    title: "UFBR",
    slug: "ufbr",
    desc: "Unite for Body Rights (UFBR) is a 5-year programme (2016-2020) funded by the Dutch Ministry of Foreign Affairs and is being implemented in 11 countries in Africa and Asia. The programme aims to improve the Sexual and Reproductive Health and Rights (SRHR) of young people (10-24 years) by ensuring that they have access to Comprehensive Sexuality Education (CSE), youth-friendly services, and safe and supportive environments.",
    images: ["ufbr1.JPG", "ufbr2.JPG"],
  },
  {
    title: "THEORY OF CHANGE",
    slug: "theory-of-change",
    desc: "The Theory of Change (ToC) is a management and evaluation tool that is used to promote social change. It is a comprehensive description and illustration of how and why a desired change is expected to happen in a particular context.",
    images: ["theory-of-change1.jpg"],
  },
  {
    title: "Right Here Right Now (RHRN)",
    slug: "rhrn",
    desc: `
    The Kenya RHRN II programme is a 5 year programme implemented by a consortium of 7 partner organizations who are progressive, youth led or youth serving, working around SRHR and deploying innovative approaches in programming and advocacy. The program implements a robust human right based approach focusing on an innovative locally rooted, youth-led high impact, cost effective and sustainable programme underpinning its interventions around meaningful involvement of adolescents and young people particularly in informal settlements to improve the poor SRHR outcomes in Nairobi, Mombasa and Kisumu counties by 2025.
    `,
    images: ["rhrn1.JPG", "rhrn2.JPG", "rhrn3.JPG", "rhrn4.JPG", "rhrn5.JPG"],
  },
  {
    title: "Too Pressed To Wait",
    slug: "too-pressed-to-wait",
    desc: `
    The "Too Pressed to Wait" campaign is a compelling initiative that revolves around sexual and reproductive justice for young people, particularly focusing on the context of some of the communities we serve, Airbase in Nairobi Kamkunji, Mnazi mmoja in Mombasa and Alendu in Kisumu. It aims to address the multifaceted challenges surrounding SRHR in Kenya. It is a call to action against some of the injustice and arrogance from duty-bearers at every level asking that we can no longer bear the heavy weight and burden of sexual reproductive health and gender injustices. This campaign is bold and strategic to reach out to whoever needs to be told. At the Alliance, the campaign strategy aims to engage, educate, empower, and evaluate changes in public discourse at grassroot level and impact change reactions for people to act to realize the enabling environment for SRHR for all.

    `,
    images: ["tptw1.JPG", "tptw2.JPG", "tptw3.JPG", "tptw4.JPG"],
  },
];

export const navData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Who we are",
    subItems: [
      {
        label: "Introduction and Background",
        link: "/who-we-are/about-us",
      },
      {
        label: "Objectives & Core Values",
        link: "/who-we-are/objectives-and-core-values",
      },
      {
        label: "SRHR Team",
        link: "/who-we-are/our-team",
      },
      {
        label: "Partners",
        link: "/who-we-are/partners",
      },
      {
        label: "Our History",
        link: "/who-we-are/srhr-history",
      },
      {
        label: "OUR IMPACT",
        link: "/who-we-are/our-impact",
      },
    ],
  },
  {
    label: "What we do",
    subItems: [
      {
        label: "Our Priorities",
        link: "/srhr-priorities",
      },
      {
        label: "Our Work",
        link: "/srhr-work",
      },
    ],
  },
  {
    label: "Programmes",
    subItems: [
      {
        label: "GUSO",
        link: "/programmes/get-up-speak-out-guso",
      },
      {
        label: "AMPLIFYCHANGE",
        link: "/programmes/amplify-change-network-grant-2015-2017-program",
      },
      {
        label: "ASK",
        link: "/programmes/access-services-and-knowledge-ask-2013-2015-program",
      },
      {
        label: "UFBR",
        link: "/programmes/unite-for-body-rights-ufbr-2010-2015-program",
      },

      {
        label: "Right Here Right Now (RHRN)",
        link: "/programmes/right-here-right-now-rhrn",
      },
    ],
  },
  {
    label: "Info Hub",
    subItems: [
      {
        label: "Gallery",
        link: "/gallery",
      },
      {
        label: "Resources",
        link: "/resources",
      },
    ],
  },
  {
    label: "News & Events",
    subItems: [
      {
        label: "Blog",
        link: "/blogs",
      },
      {
        label: "Events",
        link: "/events",
      },
    ],
  },
];

export const latestNewsData: Blog[] = [
  {
    title: "NARRATIVES FROM FGM SURVIVORS",
    slug: "narratives-from-fgm-survivors",
    desc: "To mark International Day of Zero Tolerance for Female Genital Mutilation 2021 the following are real-life accounts of experiences from girls who have undergone FGM.",
    date: "February 6, 2021",
    content: `
    `,
    thumbnail: "/news1.jpeg",
  },
  {
    title: "World Health Day 2019; Universal Health Coverage For All",
    slug: "world-health-day-2019-universal-health-coverage-for-all",
    desc: "According to Census 2009, young people below the age of 25 constitute 66% of the total population in Kenya. Adolescents on the other hand, make up 24% of the country’s",
    date: "April 7, 2019",
    content: ``,
    thumbnail: "/news2.png",
  },
  {
    title: "Why we need CSE now",
    slug: "why-we-need-cse-now",
    content: ``,
    desc: "Evidence from various studies on the value of comprehensive sexuality education in young people’s lives is very clear and convincing. Over the years, a growing number of governments have committed",
    date: "February 6, 2021",
    thumbnail: "/news3.jpg",
  },
];

export const whoWeAreMoreAbout = [
  {
    slug: "more-about-srhr",
    title: "Learn More About SRHR",
    img: "/who-we-are/learn-more-about-srhr.jpg",
    content: `
    The Sexual Reproductive Health and Rights (SRHR) Alliance, commonly known as the SRHR Alliance, or the Alliance is a national coalition of nineteen (19) civil society organizations spread across the country dedicated to promote, advance and protect the sexual and reproductive health and rights of adolescent girls and young women, vulnerable and marginalized groups including people living with HIV, persons with disabilities and LGBTIQ community aged 10-24 years in Kenya. In Kenya the Alliance brings together 19 organizations comprising of Africa Alive (AA), ADS- Nyanza, African Gender and Media Initiative Trust (GEM Trust), Aga Khan University- Center of Excellence in Women and Child Health (AKU-COEWCH), Amref Health, Africa, Ambassador for Youth and Adolescent Reproductive Health Program (AYARHEP), Centre for the Study of Adolescence (CSA), ChildLine Kenya (CLK), International Center for Research on Women (ICRW) – Africa Regional, Kisumu Medical Education Trust (KMET), NairoBits Trust, Network for Adolescence and Youth of Africa (NAYA), National Empowerment Network of People Living with HIV/AIDS in Kenya (NEPHAK), Plan Kenya, Reproductive Health Network Kenya (RHNK), Support Activities in Poverty Eradication and Health (SAIPEH), Tropical Institute of Community Health and Development (TICH), Women Fighting AIDS in Kenya (WOFAK) and UNESCO. The collective expertise and experience of members spans over 25 years in programming, policy development and advocacy. Our partners are progressive, women led, youth led and youth serving, who deploy innovative and practical approaches in programming and advocacy.
    The Alliance has built a strong reputation and strength in movement building and has a positive history of working with key stakeholders including county and national government through the Ministries of Education, Health, Gender, Youth and Justice. The Alliance collaborates and partners with relevant UN international development agencies including UNESCO, UNICEF, UNFPA, UNAIDS and UN Women and engages in multi-sectoral discussions that brings together traditional and non-tradition actors within the CSO, government, and media sectors in Kenya.
    
    `,
  },
  {
    slug: "more-about-value-added",
    title: "More On Value Added",
    img: "/about/about-srhr.jpg",
    content: `
    The Alliance provides a great platform and opportunity for National, Regional and International advocacy to influence the SRHR agenda given the greater voice that comes with numbers. It has offered leverage on resources and expertise to do better programming and a framework for fundraising to partners by mobilizing funds from local and other sources. Working as an Alliance has been affirmed as an effective way to have a bigger voice/influence in advocacy and also in fundraising. It has added value to the profile and work of the individual organizations; complimenting their individual strengths and weaknesses. This partnership has further enabled member organizations to share strategies, align objectives and resources, and agree on interventions to achieve more together than they would have been able to achieve individually. Capitalize on its specific added value. The Alliance has a strong domestic track record in different SRHR areas as well as HIV prevention and harm reduction.
    The mix of expertise in the membership particularly in the areas of SRHR information and service offers a unique opportunity for synergy and complementary thereby translating to greater impact. The coalition arrangement minimises duplication in program implementation given that the partners frequently share information on their initiatives It has added value to the profile and work of the individual organizations; complimenting their individual strengths and weaknesses. This partnership has further enabled member organizations to share strategies, align objectives and resources, and agree on interventions to achieve more together than they would have been able to achieve individually.
    
    The Alliance is considered an effective broker and bridge-builder between different constituencies, we are prepared to raise sensitive issues in national and international discussions and have a reputation as a flexible and reliable donor partner with significant resources at its disposal.

    Interface between programs, both within the SRHR program and with other MFA priorities such as programmes on WASH, nutrition, gender, governance and financing.
  Align to national priorities and domestic investments, contributing to sustainable and resilient (domestic) health systems
  Our investments of political, human and financial capital are well attuned and complementary to one another.

    `,
  },
];

export const prioritiesData = [
  {
    label: "information",
    content: `The goal of the SRHR Alliance is to deliver SRHR information directly to young people, by making sure content is made available; meaning that the information is accessible to young people and is delivered to young people through strategic dissemination such as social media. We strongly believe information should increase young people’s comprehensive and correct knowledge on SRHR and HIV, as well as increase their capacity to assess services or seek their own information. We do this by increasing access and quality of SRHR education/CSE, through the provision of in- and out-of-school SRHR education. These programmes empower young people to make healthy and well-informed decisions and in turn the demand for services by young people will grow, and as such the demand for youth friendly SRH services will increase.`,
    icon: InformationIcon,
  },
  {
    label: "SERVICES",
    content: `
        Increasing access and quality of SRH Services is key for the alliance and through select partner organizations we create demand for and ensures access to quality SRH services including commodities by young people and women of reproductive age. Our programmes strengthen the provision of quality public and private SRH services (accessible, acceptable and affordable for young people) to meet the increased demand. By strengthening the provision of services the supply increases. These services include youth-friendly sexual and reproductive health services that deliver a comprehensive range of SRH services in ways that are responsive to the specific needs, vulnerabilities and desires of young people. Some of the services provided by partners either directly or in collaboration with government include HIV testing, counselling and treatment( HTC), STI testing and counseling, family planning services, Maternal health services, comprehensive abortion care services, counselling services and Referral services. Partners in the alliance providing SRH services include FHOK, KMET, CHAI, WOFAK, GLUK, Child-Line Kenya AMREF Health Africa, SAIPEH, ADS Nyanza and CSA.
    `,
    icon: ServicesIcon,
  },
  {
    label: "ENABLING ENVIRONMENT",
    content: `
    After decades of efforts to improve adolescent sexual and reproductive health (SRH), it has become increasingly clear that strengthening health services alone is not enough. Building enabling environments so that adolescents realize their SRH and human rights requires interventions that work at multiple levels with adolescents, with families, with communities, and at the societal level. A range of social, cultural, political, and economic factors increase adolescents’ vulnerability to sexual and reproductive health problems. Addressing these underlying determinants is essential for adolescents to realize their fundamental human rights and protect their health. Building enabling environments for young people includes working with various stakeholders, such as parents, community members, and policy makers. A true enabling environment reflects a set of interrelated conditions that affect the ability of young people to access relevant and necessary health services, information, and products.
    Interventions span four categories: empowering individuals (e.g., educating girls, building their assets, and creating safe spaces), building healthy relationships (e.g., enhancing parental communication and peer networks), and engaging communities (e.g., working with men and boys to change harmful gender norms), and transforming societies (e.g., promoting laws and policies that protect human rights).
    `,
    icon: EnvironmentIcon,
  },
  {
    label: "MEANINGFUL YOUTH PARTICIPATION",
    content: `
    The SRHR Alliance aspires to have young people at the center and as leaders of our work. The participation of young people is meaningful when they are structurally engaged in all layers of decision-making and in the research, design, planning, implementation and evaluation of our programmes. The SRHR Alliance aims for the high involvement of young people and strive towards models where all alliance partner organizations work with young people as equal partners.
    Young people with a particular focus on the marginalized and under-served young people, are at the center of the GUSO program’s Theory of Change. The SRHR Alliance’s aim for MYP is not only to ensure effectiveness of youth focused policies and programmes, but also to empower young people to become leaders; by developing confidence in themselves and their abilities.
    `,
    icon: YouthIcon,
  },
  {
    label: "BUILDING AND SUSTAINING THE ALLIANCE",
    content: `
    To effectively deliver on our mandate, it is essential for the SRHR Alliance to build institutional capacity and enhance its sustainability. The SRHR Alliance aims to enhance her identity, visibility, leadership and governance, and resource base. We will also strengthen the SRHR Alliance by sustaining partnerships and increasing synergies that will lead to successful resource mobilization and effective SRHR interventions.
    `,
    icon: BuildingWorkerIcon,
  },
];

export const ourWorkData = [
  {
    label: "CAPACITY BUILDING",
    img: "/our-work/srhr-alliance-work-capacity-building.jpg",
    content: `
    The Alliance seeks to reinforce CSOs institutional capacity and provide them with sustainable resources to ensure their effectiveness to promote and implement sustainable and localized SRHR interventions in their communities and to encourage public participation. The training focuses on: advocacy; rights-based approach to development; stakeholder mapping and analysis; financial control management; budget advocacy; and gender transformative approaches; monitoring and evaluation (M&E) and Value Clarification (VCAT).

    `,
  },
  {
    label: "RESEARCH",
    img: `/our-work/srhr-alliance-work-research.JPG`,
    content: `
    Generation of evidence has the potential to shift the narrative of sexual reproductive health and rights from programmes focused on systems and processes to one that is focused on lived realities. We focus our research on current trends and emerging priority areas such as comprehensive sexuality education (CSE), abortion; Gender-based violence (GBV), HIV, SRHR Services, Covid-19, health systems and infrastructure among others. 
    Systematic data gathering and analysis are continuous processes within the monitoring of the programmes under the Alliance. Analysis on reflection both on factors that contribute positively to the achievement of objectives as well as on the factors that hamper these achievements are crucial for learning, and as such, for achieving the organization's goals. 
    
    `,
  },
  {
    label: "ADVOCACY",
    img: "/our-work/srhr-alliance-work-advocacy.JPG",
    content: `
    The Alliance partners with various stakeholders to enhance women's and girls' rights and health globally. It supports youth-led advocacy, recognizing young people as experts in their experiences. The Alliance aims to build the capacity of youth-led organizations in proposal writing, policy development, and planning transformative advocacy campaigns. Its advocacy focuses on ensuring young people have access to accurate SRHR information and services, and promoting strong advocacy skills. It advocates for policies that protect and fulfill the SRHR of all young people, influencing policy development to ensure these rights are respected and protected.
    
    `,
  },
  {
    label: "NETWORKING",
    img: "/our-work/srhr-alliance-work-networking.jpg",
    content: `
    Networking plays a big role in education and advocacy on Adolescent Sexual Reproductive Health by allowing different groups to work together toward a shared goal and by coordinating strategies and pooling resources. The Alliance organizes regional learning and exchange meetings for partner CSOs working in similar regions in the country to share experiences and best practices in SRHR programming. These networking opportunities provide a basis for partner CSOs to harmonize their work plans and avoid elements of duplication in existing programmes. The Alliance also supports partners to attend national, regional and international conferences organized by different organizations around the country. Through these conferences, partner CSOs have opportunities to submit abstracts, and make presentations on the different SRHR interventions generated by the projects we implement.
    `,
  },
  {
    label: "Intersectionality",
    img: "/our-work/srhr-alliance-work-intersectionality.jpg",
    content: `
    The inequality of accessing quality and comprehensive sexual reproductive health and rights among adolescence and young women interconnect, overlap and with each other putting them in situations of disadvantage. These are most likely to be affected by race, gender, culture, financial status, geographical location, migration, refugees, education, religious background, age among others which all become grounds of stigma and discrimination 
    Alliance programmes look at the nexus between social norms and sexual and reproductive health and rights and uses a theoretical ‘lens’ to understand and acknowledge the distribution of power in society and show how the power structures and wider social, political and economic processes shape the SRHR experiences and outcomes. 
    `,
  },
];

export const teamData: Team[] = [
  {
    name: "Our  Executive Director",
    img: "/our-team/executive-director.png",
    role: "Our  Executive Director",
    content:
      "Our  Executive Director serves as the organization's primary leader, responsible for overseeing its day-to-day operations and strategic vision. They play a crucial role in liaising with stakeholders, advocating for SRHR issues, and ensuring the effective implementation of programs and initiatives. The mandate of the Executive Director is to advance the Alliance's mission of promoting sexual and reproductive health and rights globally, while also fostering collaboration among member organizations and driving impactful advocacy efforts.",
  },
  {
    name: "Glory Kathambi",
    img: "/our-team/head-of-programmes.jpg",
    role: "Head of Programs and Advocacy Department",
    content:
      "The Alliance’s Head of Programs and Advocacy plays a pivotal role in designing and implementing strategic initiatives aimed at promoting sexual and reproductive health and rights. They lead efforts to advocate for policies and practices that advance these rights on local, national, and international levels. With a mandate focused on driving impactful program development and effective advocacy campaigns, they ensure the organization remains at the forefront of SRHR initiatives. This office has programs officers and program assistants who collectively design and implement programs within the Alliance Secretariat.",
  },
  {
    name: "Lucy Okwemba",
    img: "/our-team/head-of-finance.jpg",
    role: "Head of Finance, Administration and Procurement Departments",
    content: `
    The Head of the Finance Department oversees all financial operations within the organization, ensuring transparency, accuracy, and compliance with regulatory standards. Their responsibilities include budget management, financial reporting, and strategic financial planning to support the organization's objectives. With a mandate to maintain fiscal health and optimize resource allocation, they play a crucial role in sustaining the organization's mission and impact. Under this office, we have accountants and finance officers who support the work done
    `,
  },

  {
    name: "Ramwaka Nyadzuwa",
    img: "/our-team/communications-and-youth-engagement-officer.jpg",
    role: "Communications and Youth Engagement Officer",
    content: `
    The Communication and Youth Engagement Department, a burgeoning addition to the organization, is dedicated to amplifying the voice of youth in matters concerning sexual and reproductive health and rights. This department is tasked with developing innovative communication strategies tailored to effectively engage young people and raise awareness about SRHR issues. With a mandate to foster meaningful dialogue and empower youth-led initiatives, it aims to create a more inclusive and responsive approach to addressing SRHR challenges.

    `,
  },
];

export const impactData = [
  {
    icon: CommunityIcon,
    content: `
  Over 2 million young people (10-24 years) in and out of school reached with Comprehensive Sexuality Education across 15 counties (Nairobi, Mombasa, Kisumu, Kwale, Kilifi, Homabay, Siaya, Migori, Kisii, Busia, Kakamega, Bungoma, Uasin Gishu, Trans-Nzoia and Kajiado).
  `,
  },
  {
    icon: WomenIcon,
    content: `
  Over 500 women and men reached with sexual reproductive health information.
  `,
  },
  {
    icon: PeopleIcon,
    content: `
    Over 1.5 million community members and leaders have been engaged towards creating a supportive SRHR environment.

    `,
  },
  {
    icon: HealthIcon,
    content: `
    Over 21,000 health care providers trained on essential aspects of service provision including Youth friendly Services, commodity supply management and Basic Emergency Obstetric Care (BEmOC) towards increased access to SRHR services. 

    `,
  },
  {
    icon: HospitalIcon,
    content: `
    28 health facilities supported for the establishment of Youth Friendly Centres towards increased access to SRHR services.
    `,
  },
  {
    icon: CommunityHealthIcon,
    content: `
    Supported setting up and strengthening of Community Health Units (CHUs) towards increased access to SRHR services.    `,
  },
  {
    icon: FemaleIcon,
    content: `
    Significantly contributed to the fight against FGM through a community led alternative rites of passage model implemented in Kajiado County. `,
  },
  {
    icon: YouthIcon,
    content: `
    Over 8 million Young people and women aged 15-49 have accessed SRH services and commodities in Counties of operation.`,
  },
  {
    icon: YouthIcon,
    content: `
    The SRHR Alliance has utilized the comparative strengths of the partner CSOs to influence different policies and guidelines including but not limited to: The review and development of the National Adolescent Sexual and Reproductive Health Policy 2015, National Guidelines for provision of Adolescent and Youth Friendly Services in Kenya 2016, The development of guidelines on Comprehensive Sexuality Education, The formulation of the Kenya AIDS Strategic Framework, County budget processes for Reproductive Health and ICPD beyond 2014 and post 2015 agenda.
    `,
  },
  {
    icon: YouthIcon,
    content: `
    30 SRHR Youth Champions trained from 7 Counties namely Nairobi, Siaya, Kisumu, Mombasa, Kajiado, Kakamega and Homabay. The 30 SRHR champions have held activities in their own Counties with the support of our partner CSOs. For instance, the SRHR Youth Champions have engaged the opinion leaders and community elders on the specific SRHR issues in their Counties of operation.  In Kajiado, the SRHR Youth Champions organized an activity to discourage FGM in the community and gave recommendations that could solve teenage pregnancies, early marriages and drug abuse among other SRH issues. 
    `,
  },
  {
    icon: YouthIcon,
    content: `
    Over 1 million young people were reached in 2016 with witty, attractive and crucial messages on their SRHR often accompanied by videos or pictures through the social media thus setting the agenda for most of their topics of discussions on SRHR and answers for their disturbing questions provided.    `,
  },
  {
    icon: YouthIcon,
    content: `
    Strengthened capacity of partner CSOs in the Kenya SRHR Alliance in a number of areas but not limited to Program Monitoring and Evaluation, Operational Research, positive SRHR reporting, HIV and YFS integration and SRHR advocacy leading to greater community impact in their Counties of operation.

    `,
  },
  {
    icon: VisionIcon,
    content: `
    The Kenya SRHR Alliance has increased visibility, stability and strengthened its networks.

    `,
  },
];

export const eventsData = [
  {
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    tags: ["Talks"],
  },
];
