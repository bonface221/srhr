import { Box, Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import Image from "next/image";
import { marginX } from "@/utils/constants";
import Link from "next/link";

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
    <Box py="6rem" bgRepeat="no-repeat" bg="brand.green">
      <Stack marginX={marginX}>
        <Heading textAlign="center" color="brand.white">
          OUR SERVICES
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mt="2rem">
          {ourServicesData.map((d, i) => (
            <Stack key={i} gap={8}>
              <Box
                h="24rem"
                borderRadius="5.5rem"
                overflow="hidden"
                border="4px solid #fff"
                pos="relative"
              >
                <Image
                  src={d.img}
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                  alt={d.title}
                  width={500}
                  height={600}
                />

                <Button
                  borderRadius="20px"
                  boxShadow="md"
                  pos="absolute"
                  bottom={6}
                  left="50%"
                  transform="translate(-50%,0)"
                  bg="brand.white"
                  color="brand.red"
                >
                  {d.title}
                </Button>
              </Box>
              <Link
                href="/srhr-work"
                style={{
                  alignSelf: "center",
                }}
              >
                <Button
                  w="fit-content"
                  borderRadius="20px"
                  boxShadow="md"
                  bottom={6}
                  bg="brand.black"
                  color="brand.white"
                  _hover={{
                    bg: "brand.red",
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default OurServices;
