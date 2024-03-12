import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const KeepingOurPromise = () => {
  return (
    <Box bg="rgba(134, 194, 140,.4)" py="4.5rem">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        marginX={marginX}
        spacing={8}
      >
        <Box borderRadius="xl" overflow="hidden">
          <Image
            src="/goal-img.jpg"
            alt="keeping our promise image"
            width={500}
            height={500}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Stack>
          <Text fontSize="2xl" fontWeight={500}>
            Keeping Our Promise
          </Text>
          <Heading fontWeight={600} fontSize={{ base: "2.5rem", md: "3.5rem" }}>
            Together, We Are Turning Tragedy Into Transformation
          </Heading>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default KeepingOurPromise;
