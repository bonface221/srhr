import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";

const ourMissionCardsData = [
  {
    title: "Information",
    description:
      "The goal of the SRHR Alliance is to deliver SRHR information directly to young people, by making sure",
    link: "/our-priorities",
  },
  {
    title: "Services",
    description:
      "Increasing access and quality of SRH Services is key for the alliance and through select partner organizations",
    link: "/our-priorities",
  },
  {
    title: "Enabling Environment",
    description:
      "After decades of efforts to improve adolescent sexual and reproductive health (SRH), it has become increasingly",
    link: "/our-priorities",
  },
  {
    title: "Youth Participation",
    description:
      "The SRHR Alliance aspires to have young people at the center and as leaders of our work. The participation of young people",
    link: "/our-priorities",
  },
];

const OurMission = () => {
  return (
    <Box
      bgImage="/our-mission-img.jpg"
      bgSize="cover"
      bgPos="50% 40%"
      bgRepeat="no-repeat"
    >
      <Stack justify="center" minH="65vh" marginX={marginX}>
        <MainHeading text="Our Mission & Vision" color="white" />
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mt="2rem">
          {ourMissionCardsData.map((d, i) => (
            <Stack
              key={i}
              border="1px solid var(--chakra-colors-brand-white)"
              p="2rem 1rem"
              align="center"
              gap={4}
              bg="rgba(33, 115, 41, 0.7)"
            >
              <Heading as="h3" fontSize="xl" color="brand.white">
                {d.title}
              </Heading>
              <Text fontSize="lg" color="brand.white" textAlign="center">
                {d.description}
              </Text>
              <Button mt="auto" size="sm" bg="brand.red" color="brand.white">
                Learn More {">"}
              </Button>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default OurMission;
