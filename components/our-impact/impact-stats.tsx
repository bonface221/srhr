import { marginX } from "@/utils/constants";
import CommunityIcon from "@/utils/icons/CommunityIcon";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

const impactStatsData = [
  {
    icon: CommunityIcon,
    title: "Over 2 million young people (10-24 years) Reached",
  },
];

const ImpactStats = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      marginX={marginX}
      my="5rem"
    >
      {[1, 2, 3, 4, 5, 6].map((item, i) => (
        <Stack
          key={i}
          border="1px solid var(--chakra-colors-brand-lightMain)"
          p={4}
        >
          <Box color="brand.main" as={CommunityIcon} boxSize={20} />
          <Heading fontWeight="semibold">
            Over 2 million young people (10-24 years)
          </Heading>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default ImpactStats;
