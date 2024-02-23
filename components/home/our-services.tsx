import { Box, Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import Image from "next/image";
import { marginX } from "@/utils/constants";

const ourServicesData = [
  {
    title: "Services",
    img: "/s1.jpg",
  },
  {
    title: "Research",
    img: "/s2.jpg",
  },
  {
    title: "Advocacy",
    img: "/s3.jpg",
  },
  {
    title: "Networking",
    img: "/s4.jpg",
  },
];

const OurServices = () => {
  return (
    <Box
      bgImage="/our-work-img.jpg"
      bgSize="cover"
      my="6rem"
      bgRepeat="no-repeat"
    >
      <Stack marginX={marginX}>
        <MainHeading text="Our Services" color="red" />
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mt="2rem">
          {ourServicesData.map((d, i) => (
            <Stack
              key={i}
              bg="rgba(33, 115, 41, 0.8)"
              boxShadow="md"
              borderBottomRadius="md"
            >
              <Box h="16rem">
                <Image
                  src={d.img}
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                  alt={d.title}
                  width={500}
                  height={500}
                />
              </Box>
              <Stack p=".5rem" gap={4} pb="1rem" align="center">
                <Heading as="h4" fontSize="2xl" color="brand.white">
                  {d.title}
                </Heading>
                <Button
                  bg="brand.red"
                  w="fit-content"
                  color="brand.white"
                  size="sm"
                >
                  Learn more {">"}
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default OurServices;
