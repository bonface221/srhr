import { Team } from "@/utils/types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  data: Team;
}

const TeamCard2 = ({ data }: Props) => {
  return (
    <Stack
      gap={3}
      p={4}
      border="1px solid black"
      borderRadius="md"
      transition="all .3s ease-in-out"
      textAlign="center"
      align="center"
      _hover={{
        boxShadow: "0 0 10px 0 #000000",
      }}
    >
      <Box h="15rem">
        <Image
          src={data.img}
          alt={data.name}
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            height: "100%",
          }}
        />
      </Box>

      <Heading as="h3" fontSize="3xl">
        {data.name}
      </Heading>
      <Box as="h5" fontSize="xl" fontWeight="semibold">
        {data.role}
      </Box>
      <Text>{data.content}</Text>
    </Stack>
  );
};

export default TeamCard2;
