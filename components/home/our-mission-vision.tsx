import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const misssionCards = [
  {
    label: "Vision",
    description: `"Sexual Reproductive Health and Rights For All."`,
    by: "FRANKIE A.",
  },
  {
    label: "Mission",
    description: `"To harness strategic partnerships that promote sustainable realization of SRHR for young people, women and marginalized groups that contribute to empowerment and sustainability of communities."`,
    by: "EZRA S.",
  },
];

const OurMission = () => {
  return (
    <Stack
      bgImage="/our-vision-bg.JPG"
      py="4rem"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos={{ base: "10% 50%", sm: "50% 60%" }}
      pos="relative"
      minH="60vh"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: 999,
      }}
    >
      <SimpleGrid
        marginX={marginX}
        zIndex={999}
        columns={{ base: 1, md: 2 }}
        spacing={6}
        alignItems="center"
      >
        <Stack>
          <Heading
            color="#ffdede"
            w="80%"
            fontSize={{ base: "3.5rem", md: "5.3rem" }}
            dropShadow="brand.red"
            fontStyle="italic"
            textShadow="0 5px 15px var(--chakra-colors-brand-red)"
          >
            OUR VISION AND MISSION
          </Heading>
        </Stack>
        <Stack gap={4}>
          {misssionCards.map((card, i) => (
            <Stack key={i}>
              <Heading
                color="brand.white"
                fontSize={{ base: "1.9rem", md: "3.5rem" }}
              >
                {card.label}
              </Heading>
              <StackDivider bg="brand.red" h=".2rem" />
              <Text
                color="#ffdede"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="semibold"
              >
                {card.description}
              </Text>
              <Text
                color="#ffdede"
                fontStyle="italic"
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight="semibold"
              >
                - {card.by}
              </Text>
            </Stack>
          ))}
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default OurMission;
