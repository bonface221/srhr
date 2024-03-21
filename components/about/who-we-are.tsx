import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MainHeading from "../common/main-heading";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <Box mt="4rem" marginX={marginX}>
      <MainHeading text="Who We Are" />
      <SimpleGrid
        mt="2rem"
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        gap={8}
      >
        <Box>
          <Image
            src="/about/about-srhr2.jpg"
            alt="About SRHR"
            width={500}
            height={700}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Stack gap={4}>
          <Heading color="brand.main" fontSize="3xl">
            ABOUT THE SRHR ALLIANCE
          </Heading>
          <Text fontSize="lg">
            The Sexual Reproductive Health and Rights (SRHR) Alliance, commonly
            known as the SRHR Alliance, or the Alliance is a national coalition
            of nineteen (19) civil society organizations spread across the
            country dedicated to promote, advance and protect the sexual and
            reproductive health and rights of adolescent girls and young women,
            vulnerable and marginalized groups including people living with HIV,
            persons with disabilities and LGBTIQ community aged 10-24 years in
            Kenya.
          </Text>
          <Flex gap={3}>
            <Link href="/who-we-are/more-about-srhr/">
              <Button
                w="fit-content"
                bg="brand.main"
                _hover={{
                  bg: "brand.red",
                }}
                color="brand.white"
              >
                Learn more
              </Button>
            </Link>

            {/* <Button w="fit-content" bg="brand.red" color="brand.white">
              Donate
            </Button> */}
          </Flex>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default WhoWeAre;
