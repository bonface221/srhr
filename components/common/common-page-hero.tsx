import { marginX } from "@/utils/constants";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const CommonPageHero = ({ text, bgImg }: { text: string; bgImg: string }) => {
  return (
    <Flex
      h="40vh"
      align="center"
      justify="center"
      bg={`url(${bgImg}) rgba(33, 115, 41,0.5)`}
      bgBlendMode="multiply"
      bgPos="50% 70%"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box marginX={marginX}>
        <Heading textAlign="center" color="brand.white">
          {text}
        </Heading>
      </Box>
    </Flex>
  );
};

export default CommonPageHero;
