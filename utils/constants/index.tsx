import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

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
        link: "/about-us",
      },
      {
        label: "Objectives & Core Values",
        link: "/objectives-and-core-values",
      },
      {
        label: "SRHR Team",
        link: "/srhr-team",
      },
      {
        label: "Partners",
        link: "/partners",
      },
      {
        label: "Our History",
        link: "/our-history",
      },
    ],
  },
  {
    label: "What we do",
    subItems: [
      {
        label: "Our Priorities",
        link: "/our-priorities",
      },
      {
        label: "Our Work",
        link: "/our-work",
      },
    ],
  },
  {
    label: "Programs",
    subItems: [
      {
        label: "GUSO",
        link: "/guso",
      },
      {
        label: "AMPLIFYCHANGE",
        link: "/amplifychange",
      },
      {
        label: "ASK",
        link: "/ask",
      },
      {
        label: "UFBR",
        link: "/ufbr",
      },
      {
        label: "THEORY OF CHANGE",
        link: "/theory-of-change",
      },
      {
        label: "OUR IMPACT",
        link: "/our-impact",
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
      {
        label: "Downloads",
        link: "/downloads",
      },
      {
        label: "Videos",
        link: "/videos",
      },
    ],
  },
  {
    label: "News & Events",
    subItems: [
      {
        label: "Blog",
        link: "/blog",
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
