import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { Blog, Partner, Programme } from "../types";

export const marginX = { base: "2%", sm: "5%", md: "10%" };

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
    text: "+254 20 2398723",
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
        link: "/who-we-are/srhr-team",
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
    label: "Programs",
    subItems: [
      {
        label: "GUSO",
        link: "/programs/guso",
      },
      {
        label: "AMPLIFYCHANGE",
        link: "/programs/amplifychange",
      },
      {
        label: "ASK",
        link: "/programs/ask",
      },
      {
        label: "UFBR",
        link: "/programs/ufbr",
      },
      {
        label: "THEORY OF CHANGE",
        link: "/programs/theory-of-change",
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
        label: "Publications",
        link: "/publications",
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
      {
        label: "Newsletter",
        link: "/newsletter",
      },
    ],
  },
];

export const partnersData: Partner[] = [
  {
    name: "Africa Alive!(AA)",
    slug: "africa-alive",
    description:
      "Is a youth-serving organization started in 1998 with a vision to build and empower a healthier HIV/AIDS free generation of African youth. Africa Alive! seeks to promote positive behaviour change among young people through advocacy, empowerment, partnership and resource/community mobilization.  The organization promotes the full participation of young people at every level of programme implementation using audience and message strategy of edutainment (entertainment education). Under the SRHR alliance, Africa Alive! is implementing the dance4life project reaching youth in and out of school in Nairobi and at the Coastal region.",
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/Africa-Alive.jpg",
    link: "",
  },
  {
    name: "AMREF Health Africa",
    slug: "amref-health-africa",
    description: `
    Is Africa’s largest International Health NGO. Founded in 1957 as the Flying Doctors of East Africa to provide critical health care to remote communities in East Africa, the organisation has since grown to become the main African based International Organisation working in Health Development.   Amref Health Africa’s vision is for “lasting health change in Africa”: communities with the knowledge, skills and means to maintain their good health and break the cycle of poor health and poverty. Amref Health Africa’s mission is to improve the health of people in Africa by partnering with and empowering communities, and strengthening health systems. With a focus on women and children, Amref Health Africa works with the most vulnerable African communities to achieve lasting health change. Amref Health Africa believes that the power to transform Africa’s health lies within its communities and works side by side with women and men in communities to build the knowledge, skills and means to transform their health, laying foundations that will be felt for generations to come.  Amref Health Africa ensures that health systems are functional and empower communities to play their role because they have the solutions to their problems. Since 2007 AMREF Kenya has been one of the implementers of a regional multi-site Nomadic Youth (10-24years) Reproductive Health Project which covers Kenya, Ethiopia, and Tanzania with funding from the Dutch Ministry of Foreign Affairs through AMREF Netherlands. The project now in its second phase as the Unite for Body Rights, covers Loitokitok Sub-County (district) and Magadi division in Kajiado County and targeting to reach at least 80,000 Kenyan youth with SRH information and services.    
    `,
    image: "/partners/amref.png",
    link: "https://amref.org",
  },
  {
    name: "Anglican Development Services (ADS) Nyanza",
    slug: "anglican-development-services-nyanza",
    description: `Anglican Development Services (ADS) Nyanza is a Faith Based organization serving vulnerable
    communities in Nyanza province. Its goal is to increase access to secure and sustainable livelihood and economic opportunities through integrated and participatory community development, capacity building and economic empowerment programs`,
    image: "/partners/adsnyanza.svg",
    link: "https://www.ads-nyanza.org/",
  },
  {
    name: "Ambassador For Youth And Adolescents Reproductive Health Programme (AYARHEP)",
    slug: "ambassador-for-youth-and-adolescents-reproductive-health-programme",
    description: `AYARHEP is by Adolescent and youth and for the adolescent and youth reproductive, health and rights organization that was established in May, 2016 by a group of Youth leaders and youth activists with passion in addressing human, health and reproductive rights issues of young people.`,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/AYARHEP-150x150.jpg",
    link: "https://www.ayarhep.or.ke/",
  },
  {
    name: "The Centre For The Study Of Adolescence",
    slug: "the-centre-for-the-study-of-adolescence",
    description: `
    Is an independent non-partisan, non-profit organization established in 1988 working in the field of adolescent sexual and reproductive health including HIV/AIDS. CSA’s mandate is to advocate and implement policies and programs that enable young people to exercise choice, access to services and participate fully in activities that promote their health and well-being.  CSA has a strong background in Community mobilization, adolescent program design and development, research, monitoring and evaluation and advocacy. CSA works with a wide range of youth, in and out of school and special groups of adolescents such as married young girls. CSA has been at the fore front of policy development and advocacy both at the grassroots level and at the national level working with public sector and parliamentarians in promoting and creating visibility for ASRHR issues. CSA has been working with Rutgers/WPF and Simavi to provide comprehensive sexuality education through innovative approaches including ICT. Under the SRHR Alliance, CSA works in Western, Central, Coast and Nairobi Regions.`,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/CSA-Kenya.jpg",
    link: "https://csakenya.org",
  },
  {
    name: "Clinton Health Access Initiative (CHAI)",
    slug: "clinton-health-access-initiative",
    description: `Founded in 2002 by President William J. Clinton, the Clinton Health Access Initiative (CHAI) is a global health organization committed to strengthening integrated health systems around the world and expanding access to care and treatment for HIV/AIDS, malaria and other illnesses. Based on the premise that business oriented strategy can facilitate solutions to global health challenges, CHAI acts as a catalyst to mobilize new resources and optimize the impact of these resources to save lives, via improved organization of commodity markets and more effective local management. By working in association with governments and other NGO partners, CHAI is focused on large-scale impact and, to date, CHAI has secured lower pricing agreements for treatment options in more than 70 countries. In addition, CHAI’s teams are working side-by-side with over 30 governments to tackle many of the largest barriers to effective treatment and care.`,
    image: "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/CHAI.jpg",
    link: "https://clintonhealthaccess.org/",
  },
  {
    name: "Child Line Kenya: Child Line Kenya",
    slug: "child-line-kenya",
    description:
      "Is a national Non-Governmental Organization (NGO) established in 2005 and works to promote children rights and protection through both response and prevention interventions. Childline Kenya operates the National Child Helpline 116, Kenya’s only 24-hour, toll-free telephone helpline where children and concerned adults can call in to report child abuse. Management of the Helpline is done through a partnership between the Government of Kenya through the Department of Children Services and Childline Kenya.  To successfully provide services to children, Childline Kenya trains child protection actors in Kenya on the role of the children helpline as reporting mechanism for child safety, case management and referral guidelines, children rights and other child protection laws. The partners key to Chidline’s work include the Police, Hospitals, Teachers Service Commission, Ministries of Education and Health, Civil Society organizations, caregivers, Community and Faith based Organizations dealing among other government and non -governmental agencies in provision of child protection services.",
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/Childline-128x150.jpg",
    link: "https://www.childlinekenya.co.ke/  ",
  },
  {
    name: "Family Health Options Kenya (FHOK)",
    slug: "family-health-options-kenya",
    description: `Is a local Non-Governmental organization which has been a leading service provider of sexual and reproductive health services in the country for the last five decades. It has presence in seven of the eight provinces with a strong grassroots network. FHOK has played a leading role in providing   sustainable, innovative and comprehensive services in response to health and socio-economic needs of all Kenyans. Since its inception, it has been a center of excellence in providing capacity building in sexual and reproductive health. It is also committed to offering quality services as well as championing sexual and reproductive health and other rights. It works to ensure the empowerment of young people so that they can exercise and enjoy these rights.`,
    image: "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/FHOK.jpg",
    link: "http://fhok.org/",
  },
  {
    name: "The Tropical Institute Of Community Health And Development (TICH)",
    slug: "the-tropical-institute-of-community-health-and-development",
    description: `Is an international research and training Institution, established in 1998 and registered with the Ministry of Higher Education, Science and Technology and Lands under the Trust Act in the Republic of Kenya.
    TICH specializes in health systems capacity building, research and community development. The institute pools together a large body of researchers of diverse backgrounds drawn from 11 countries in Africa with vast experience.`,
    image: "https://www.srhralliance.or.ke/wp-content/uploads/2019/12/ti.jpg",
    link: "https://tichinafrica.org/",
  },
  {
    name: "Kisumu Medical And Educational Trust (KMET)",
    slug: "kisumu-medical-and-educational-trust",
    description: `Is an indigenous NGO formed in Kenya in 1995 and dedicated to provision of quality Reproductive Health and Educational Services. K-MET exists to promote sustainable development among underserved communities through innovative health and education programs -KMET’s Core Values are encapsulated in the acronym CHIGAID where: C – Community participation, H- Human rights promotion , I – Innovation, G – Gender Equity , A – Accountability, I – Integrity  and D – Diversity. KMET also advocates for sexual and reproductive health rights.`,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/KMET-128x150.jpg",
    link: "https://kmet.co.ke/",
  },
  {
    name: "Nairobits Trust",
    slug: "nairobits-trust",
    description:
      "Is a not-for profit organization registered in 1999 and based in Nairobi working towards changing the lives of vulnerable 15 to 24 year old youth in Kenya by improving their access to productive employment as well as their ability to cope with their social environment through creativity and innovation. Nairobits provides these youth with training in ICT multimedia, entrepreneurship, reproductive health and rights and life skills in order to enhance their confidence and self-esteem as well as their chances for gainful employment. Since inception, Nairobits has provided more than 7,000 youth from disadvantaged backgrounds with multimedia, SRHR, entrepreneurship and life skills. Over 60% of these are gainfully employed both formally and informally.   Nairobits works closely with community based organizations in reaching and training youth. This involves partnering with the CBOs to set up information centers within their premises to ensure ease of access to the training by the youth and community ownership in the larger context. Under the SRHR Alliance, Nairobits works in Nairobi region.",
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/Nairo-Bits-128x150.jpg",
    link: "https://nairobits.com/",
  },
  {
    name: "Network Of Adolescence And Youth Of Africa (NAYA)",
    slug: "network-of-adolescence-and-youth-of-africa",
    description: `Is a youth led regional advocacy network founded in October 2001 during the Second Adolescent International Conference convened by the African Regional Office of the Planned Parenthood Federation of America (PPFA). NAYA aims at enhancing the capacity of youth advocates and civil society organizations (CSO’s) to advocate for comprehensive Sexual and Reproductive Health and Rights (SRH&R). This is achieved by enlisting the support of policy makers, opinion leaders, donors, the media, like-minded organizations and individuals in advocating for reforms and implementation of international, national and county policies and legislation to improve the quality and accessibility of Sexual and Reproductive Health and Rights information and services. Under the SRHR Alliance, NAYA works in Kisumu, Siaya and Migori.`,
    image: "/partners/naya.png",
    link: "https://nayakenya.org/",
  },
  {
    name: "National Empowerment Network Of People Living With HIV/AIDS In Kenya (NEPHAK)",
    slug: "national-empowerment-network-of-people-living-with-hiv-aids-in-kenya",
    description: `The National Empowerment Network of people living with HIV/AIDS in Kenya (NEPHAK) is an organization that unites individuals and support groups of PLHIV, community based organizations, non-governmental organizations and networks into a national and formidable social movement to counter the impact of HIV and spearheads meaningful involvement of PLHIV towards the goal of zero new HIV infection, Zero stigma and Zero AIDS related deaths. NEPHAK runs programs in Advocacy, capacity building, peer and social support to those affected and living with HIV engaging members in national policy making, implementation, local service delivery as well as accountability mechanisms for improved healthcare and quality of life for PLHIV and their communities.`,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/nctzbbrz.jpg",
    link: "https://nephak.or.ke/",
  },
  {
    name: "Support Activities In Poverty Eradication And Health (SAIPEH)",
    slug: "support-activities-in-poverty-eradication-and-health",
    description: `Is a registered Non-governmental organization [NGO] based in Kakamega County in Western region of Kenya. SAIPEH works to provide structural and sustainable support services to alleviate poverty and increase ways of bettering living standards of all members of the community, especially the orphans and vulnerable children, youth, women and the marginalized through development of strategies and initiatives at grass root level in the community that will enable these groups to be self-supportive and independent. The Organisation runs a reproductive health and rights programme supporting SRHR/HIV outreach in and out of schools targeting young people, performing arts, community peer education and youth friendly services. SAIPEH has a strong community background and contributes immensely in supporting CSE implementation in Western region, under the SRHR Alliance. SAIPEH implements programmes in Kakamega and Busia Counties.`,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/Saipeh-128x150.jpg",
    link: "https://saipeh.or.ke/",
  },
  {
    name: "WAYAN Kenya",
    slug: "wayan-kenya",
    description: `World Starts with me Alumni Youth Advocacy Network is a youth-led advocacy network of youth from the regions of Nairobi, Nyanza and Central and Coast Kenya focusing on SRHR. WAYAN was the outcome of the successful implementation of the computer-based sexuality education program WSWM in secondary schools. Through advocacy and raising awareness, WAYAN aims to improve the SRHR situation of youth in Kenya.`,
    image: `https://www.srhralliance.or.ke/wp-content/uploads/2017/03/wayan.jpg`,
    link: "https://wayankenya.wordpress.com/",
  },
  {
    name: "Women Fighting AIDS In Kenya (WOFAK)",
    slug: "women-fighting-aids-in-kenya",
    description: `
    Women Fighting AIDS in Kenya (WOFAK) is a national non-governmental organization founded and registered in Kenya in 1994 by a group of women most of whom had tested positive to HIV. The founding group had in mind an entity that would provide them with a forum for mutual support and empowerment. Since inception, WOFAK has continued to grow to its present status of a national network of women living with HIV and AIDS, contributing significantly to national efforts aimed at prevention and to provide comprehensive care and support to women youth and children living with and affected by HIV and AIDS to enable them lead more wholesome lives. WOFAK’s vision under strategic plan 2013- 2017 was crafted along the Kenya National HIV and AIDS strategic plan (KNASP III) 2008-2013 which strives for a ‘Society free of HIV’. Today, WOFAK is visible in the Coast, Nyanza, Western, Rift Valley and Nairobi.
    `,
    image:
      "https://www.srhralliance.or.ke/wp-content/uploads/2017/03/Wofak-128x150.jpg",
    link: "https://www.wofak.org",
  },
  {
    name: "UNESCO",
    slug: "unesco",
    description: `
    In 1945, UNESCO was created in order to respond to the firm belief of nations, forged by two world wars in less than a generation that political and economic agreements are not enough to build a lasting peace. Peace must be established on the basis of humanity’s moral and intellectual solidarity. UNESCO strives to build networks among nations that enable this kind of solidarity, by Mobilizing for education so that every child, boy or girl, has access to quality education as a fundamental human right and as a prerequisite for human development and building intercultural understanding through protection of heritage and support for cultural diversity. According to the UN division of labour among the UN family, UNESCO is lead agency for ensuring high quality education for a more effective HIV response. In the division of labour, UNESCO is also a partner in reducing sexual transmission of HIV, policy development and stopping sexual and gender based violence. UNESCO supports inclusion of comprehensive sexuality education, advocacy on emerging issues and generation of strategic information within the education sector.
    `,
    image: "/partners/unesco.png",
    link: "https://en.unesco.org    ",
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

export const programs: Programme[] = [
  {
    title: "GUSO",
    slug: "guso",
    desc: "Get Up Speak Out (GUSO) is a 5-year programme (2016-2020) funded by the Dutch Ministry of Foreign Affairs and is being implemented in 11 countries in Africa and Asia. The programme aims to improve the Sexual and Reproductive Health and Rights (SRHR) of young people (10-24 years) by ensuring that they have access to Comprehensive Sexuality Education (CSE), youth-friendly services, and safe and supportive environments.",
    image: "/programs/guso.jpg",
  },
  {
    title: "AMPLIFYCHANGE",
    slug: "amplifychange",
    desc: "AmplifyChange is a multi-donor challenge fund that aims to empower young people  to realize their sexual and reproductive health and rights. The fund is managed by MannionDaniels, in association with African Women’s Development Fund, and the Global Network of  People Living with HIV/AIDS.",
    image: "/programs/amplifychange.jpg",
  },
  {
    title: "ASK",
    slug: "ask",
    desc: "Adolescents 360 (A360) is a four-year project funded by the Bill & Melinda Gates Foundation, which aims to increase the number of adolescents using modern contraception in Ethiopia, Nigeria and Tanzania.",
    image: "/programs/ask.jpg",
  },
  {
    title: "UFBR",
    slug: "ufbr",
    desc: "Unite for Body Rights (UFBR) is a 5-year programme (2016-2020) funded by the Dutch Ministry of Foreign Affairs and is being implemented in 11 countries in Africa and Asia. The programme aims to improve the Sexual and Reproductive Health and Rights (SRHR) of young people (10-24 years) by ensuring that they have access to Comprehensive Sexuality Education (CSE), youth-friendly services, and safe and supportive environments.",
    image: "/programs/ufbr.jpg",
  },
  {
    title: "THEORY OF CHANGE",
    slug: "theory-of-change",
    desc: "The Theory of Change (ToC) is a management and evaluation tool that is used to promote social change. It is a comprehensive description and illustration of how and why a desired change is expected to happen in a particular context.",
    image: "/programs/theory-of-change.jpg",
  },
];
