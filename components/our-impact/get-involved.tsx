import { marginX } from "@/utils/constants";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const GetInvolved = () => {
  return (
    <Stack
      minH="50vh"
      bgImage="/people-map.jpg"
      bgPos="center center"
      pos="relative"
      align="center"
      justify="center"
    >
      <Box
        bg="brand.lightMain"
        mixBlendMode="multiply"
        w="100%"
        h="100%"
        pos="absolute"
        left={0}
        top={0}
      />
      <Stack
        align="center"
        h="100%"
        justify="center"
        marginX={marginX}
        zIndex={99}
        gap={6}
        w="70%"
      >
        <Heading
          color="brand.white"
          fontSize={{ base: "1.8rem", md: "3rem" }}
          textAlign="center"
        >
          More Than 1.5M Community members and leaders engaged
        </Heading>
        <Button w="fit-content" bg="brand.red" color="brand.white">
          Get Involved
        </Button>
      </Stack>
    </Stack>
  );
};

export default GetInvolved;
