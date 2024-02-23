import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const mainNavData = [
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
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

const MainNav = () => {
  return (
    <Box bg="brand.white" py=".5rem">
      <Flex justify="space-between" align="center" marginX={marginX}>
        <Image
          src="/logo.png"
          alt="Kenya SRHR Alliance"
          width={100}
          height={100}
        />
        <Flex gap={4}>
          {mainNavData.map((item, i) => (
            <Link key={i} href={item.link ? item.link : "/"}>
              <Text fontWeight="500" fontSize="lg" color="brand.main">
                {item.label}
              </Text>
            </Link>
          ))}
        </Flex>
        <Button bg="brand.main" color="brand.white">
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default MainNav;
