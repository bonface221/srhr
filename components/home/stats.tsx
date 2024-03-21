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
import MaleFemaleIcon from "@/utils/icons/MaleFemaleIcon";
import CommunityIcon from "@/utils/icons/CommunityIcon";
import DoctorIcon from "@/utils/icons/DoctorIcon";
import { marginX } from "@/utils/constants";
import Link from "next/link";
import { AnimatedCounter } from "../common/animated-counter";

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
    <Box bg="brand.lightMain">
      <Stack minH="65vh" marginX={marginX} justify="center" py="3rem">
        <MainHeading text="Our Impact" color="white" />

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt="2rem">
          {ourStatsData.map((d, i) => (
            <Stack
              key={i}
              p="1.5rem"
              borderRadius="2xl"
              align="center"
              bg="brand.red"
            >
              <Box as={d.icon} boxSize="6rem" color="brand.brown" />
              <Heading
                as="h6"
                fontSize="5xl"
                color="brand.white"
                fontFamily="monospace"
              >
                <AnimatedCounter from={0} to={d.stat} />
                <Box as="span">+</Box>
              </Heading>
              <Text textAlign="center" color="brand.white">
                {d.desc}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
        <Box alignSelf="center">
          <Link href="/who-we-are/our-impact">
            <Button
              bg="brand.brown"
              w="fit-content"
              alignSelf="center"
              color="brand.red"
              mt=".7rem"
            >
              View More
            </Button>{" "}
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Stats;
