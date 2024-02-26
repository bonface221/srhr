import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import Image from "next/image";
import HandsIcon from "@/utils/icons/HandsIcon";
import RespectIcon from "@/utils/icons/RespectIcon";
import HumanRights from "@/utils/icons/HumanRights";
import CommitIcon from "@/utils/icons/CommitIcon";
import LawIcon from "@/utils/icons/LawIcon";
import { marginX } from "@/utils/constants";

const coreValues = [
  {
    title: "Commitment to partnership",
    icon: HandsIcon,
  },
  {
    title: "Respect for diversity",
    icon: RespectIcon,
  },
  {
    title: "Respect for human Rights",
    icon: HumanRights,
  },
  {
    title: "Commitment to uphold integrity and accountability",
    icon: LawIcon,
  },
  {
    title: "Commitment to learning and Innovation.",
    icon: CommitIcon,
  },
];

const CoreValues = () => {
  return (
    <Stack my="6rem" marginX={marginX}>
      <MainHeading text="Our Core Values" />
      <SimpleGrid
        mt="2rem"
        alignItems="center"
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={8}
      >
        {coreValues.map((value, i) => (
          <Stack
            key={i}
            border="2px solid var(--chakra-colors-brand-main)"
            gap={4}
            padding="1rem"
            _hover={{
              boxShadow: "0px 0px 10px 0px var(--chakra-colors-brand-red)",
              borderColor: "var(--chakra-colors-brand-red)",
            }}
          >
            <Box as={value.icon} boxSize={10} color="brand.red" />
            <Heading fontSize="xl" color="brand.main">
              {value.title}
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vehicula, libero non tincidunt tincidunt, magna libero fermentum
              lectus, eu scelerisque purus elit sit amet ante.
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CoreValues;
