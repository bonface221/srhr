import { marginX } from "@/utils/constants";
import CommitIcon from "@/utils/icons/CommitIcon";
import HandsIcon from "@/utils/icons/HandsIcon";
import HumanRights from "@/utils/icons/HumanRights";
import LawIcon from "@/utils/icons/LawIcon";
import RespectIcon from "@/utils/icons/RespectIcon";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import MainHeading from "../common/main-heading";

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
            padding="2rem 1rem"
            align="center"
            _hover={{
              boxShadow: "0px 0px 10px 0px var(--chakra-colors-brand-red)",
              borderColor: "var(--chakra-colors-brand-red)",
            }}
          >
            <Box as={value.icon} boxSize={16} color="brand.red" />
            <Heading fontSize="2xl" color="brand.main" textAlign="center">
              {value.title}
            </Heading>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CoreValues;
