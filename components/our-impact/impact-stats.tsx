import { impactData, marginX } from "@/utils/constants";
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
      {impactData.map((item, i) => (
        <Stack
          key={i}
          border="1px solid var(--chakra-colors-brand-lightMain)"
          p={4}
          _hover={{
            boxShadow: "0 0 10px 0 var(--chakra-colors-brand-red)",
          }}
        >
          <Box
            color="brand.main"
            as={item.icon}
            boxSize={{ base: 10, md: 20 }}
          />
          <Heading fontWeight="semibold" fontSize="lg">
            {item.content}
          </Heading>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default ImpactStats;
