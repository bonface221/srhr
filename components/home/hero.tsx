import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Stack
      h="95vh"
      bgImage="/home-bg.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="50% 60%"
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(33, 115, 41,0.5)",
        zIndex: 999,
      }}
    >
      <Stack
        pos="absolute"
        top="50%"
        left="50%"
        zIndex={999}
        bg="rgba(255, 255, 255, 0.6)"
        p="1.5rem"
        borderTopColor="brand.main"
        borderLeftColor="brand.red"
        borderRightColor="brand.main"
        borderBottomColor="brand.red"
        borderWidth="10px"
        maxW="xl"
        gap={4}
      >
        <Heading as="h1">SRHR Alliance in Kenya</Heading>
        <Text as="h3" fontWeight={500} fontSize="xl">
          Working together to increase Access to Reproductive Health and Rights.
        </Text>
        <Flex gap={3}>
          <Button
            bg="brand.main"
            color="brand.white"
            border="2px solid var(--chakra-colors-brand-main)"
          >
            Our Priorities
          </Button>
          <Button
            bg="transparent"
            color="brand.red"
            border="2px solid var(--chakra-colors-brand-red)"
          >
            Our Priorities
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Hero;
