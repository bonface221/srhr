import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import MaleFemaleIcon from "@/utils/icons/MaleFemaleIcon";
import CommunityIcon from "@/utils/icons/CommunityIcon";
import DoctorIcon from "@/utils/icons/DoctorIcon";
import { marginX } from "@/utils/constants";

const ourStatsData = [
  {
    stat: 2000,
    icon: MaleFemaleIcon,
    desc: "Women and men reached with sexual reproductive health information",
  },
  {
    stat: 3000,
    icon: CommunityIcon,
    desc: "Community members and leaders engaged towards a supportive SRHR environment",
  },
  {
    stat: 500,
    icon: DoctorIcon,
    desc: "Health care Providers trained on essential service provision towards increased access to SRHR services",
  },
];

const Stats = () => {
  return (
    <Box bgImage="/our-impact-img.jpg">
      <Stack minH="65vh" marginX={marginX} justify="center">
        <MainHeading text="Our Impact" color="white" />

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt="2rem">
          {ourStatsData.map((d, i) => (
            <Stack
              key={i}
              p="1.5rem"
              align="center"
              border="1px solid var(--chakra-colors-brand-white)"
              bg="rgba(33, 115, 41,0.5)"
            >
              <Box as={d.icon} boxSize="6rem" color="brand.white" />
              <Heading as="h6" color="brand.white">
                {d.stat}
              </Heading>
              <Text textAlign="center" color="brand.white">
                {d.desc}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Stats;
