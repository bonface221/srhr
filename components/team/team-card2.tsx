import { UserIcon } from "@/utils/icons";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  data: {
    name: string;
    role: string;
    content: string;
  };
}

const TeamCard2 = ({ data }: Props) => {
  return (
    <Stack
      gap={3}
      border="1px solid black"
      p={4}
      borderRadius="md"
      transition="all .3s ease-in-out"
      textAlign="center"
      align="center"
      _hover={{
        boxShadow: "0 0 10px 0 #000000",
      }}
    >
      <Box as={UserIcon} boxSize="4rem" color="brand.red" />

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
