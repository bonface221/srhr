import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import MissionIcon from "@/utils/icons/MissionIcon";
import VisionIcon from "@/utils/icons/VisionIcon";
import { marginX } from "@/utils/constants";

const data = [
  {
    title: "Mission",
    text: "To promote the realization of sexual reproductive health and Human rights.",
    icon: MissionIcon,
    bg: "brand.red",
  },
  {
    title: "Vision",
    text: "Sexual and reproductive health and rights for all.",
    icon: VisionIcon,
    bg: "brand.main",
  },
];

const VisionAndMission = () => {
  return (
    <Stack marginX={marginX} my="4rem">
      <MainHeading text="Our Pillars" />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        gap={4}
        mt="3rem"
      >
        <Stack gap={4}>
          <Heading color="brand.main">THE SRHR ALLIANCE</Heading>
          <Text maxW="80%">
            The SRHR Alliance&apos;s mission is to provide evidence-based
            information and quality comprehensive reproductive health services
            in Kenya.
          </Text>
        </Stack>

        <Flex gap={4}>
          {data.map((item, i) => (
            <Stack
              key={i}
              bg={item.bg}
              borderRadius="md"
              p="1.6rem"
              color="brand.white"
            >
              <Box as={item.icon} w={10} h={10} />
              <Heading as="h5" size="md">
                {item.title}
              </Heading>
              <Text>{item.text}</Text>
            </Stack>
          ))}
        </Flex>
      </SimpleGrid>
    </Stack>
  );
};

export default VisionAndMission;
