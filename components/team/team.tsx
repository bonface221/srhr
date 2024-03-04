import { marginX } from "@/utils/constants";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TeamCard from "./team-card";
import MainHeading from "../common/main-heading";

const Team = () => {
  return (
    <Box marginX={marginX} my="4rem">
      <MainHeading text="Our Proffesional team" />
      <SimpleGrid columns={{ base: 1, md: 3 }} mt="3rem" gap={8}>
        {[1, 2, 3, 4, 5, 6].map((t, i) => (
          <TeamCard key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Team;
