import { marginX, teamData } from "@/utils/constants";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MainHeading from "../common/main-heading";
import TeamCard2 from "./team-card2";

const Team = () => {
  return (
    <Box marginX={marginX} my="4rem">
      <MainHeading text="Our Proffesional team" />
      <SimpleGrid columns={{ base: 1, md: 2 }} mt="3rem" gap={8}>
        {teamData.map((t, i) => (
          <TeamCard2 key={i} data={t} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Team;
