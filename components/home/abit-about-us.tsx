import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import { marginX } from "@/utils/constants";
import Image from "next/image";

const ABitAboutUs = () => {
  return (
    <Box my="4rem" marginX={marginX}>
      <MainHeading text="SRHR Alliance Kenya" />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={8}
        mt="2.5rem"
        alignItems="center"
      >
        <Box>
          <Image
            src="/a-bit-about-us-img.jpg"
            alt="A bit about us"
            width={500}
            height={500}
            style={{
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack gap={6}>
          <Heading color="brand.main">
            Sexual Reproductive Health and Rights Alliance Kenya
          </Heading>
          <Text fontSize="lg">
            The SRHR Alliance in Kenya is a coalition of 17 civil society
            organizations and institutions working to promote the sexual and
            reproductive health and rights of young people and women in Africa,
            Asia and the Europe. The alliance was first established in the
            Netherlands in 2010. In Kenya the alliance brings together 17
            organizations comprising of Africa Alive (AA), AMREF Health Africa,
            Anglican Development Services (ADS) Nyanza,
          </Text>
          <Button
            bg="brand.red"
            w="fit-content"
            color="brand.white"
            _hover={{
              bg: "brand.main",
            }}
          >
            More About Us
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default ABitAboutUs;
