import { marginX } from "@/utils/constants";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TeamCard from "./team-card";

const Team = () => {
  return (
    <Box marginX={marginX} my="4rem">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {[1, 2, 3, 4, 5, 6].map((t, i) => (
          <TeamCard key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Team;
