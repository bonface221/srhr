import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "./main-heading";
import { marginX } from "@/utils/constants";
import Image from "next/image";

const latestNewsData = [
  {
    title: "NARRATIVES FROM FGM SURVIVORS",
    desc: "To mark International Day of Zero Tolerance for Female Genital Mutilation 2021 the following are real-life accounts of experiences from girls who have undergone FGM.",
    date: "February 6, 2021",
    thumbnail: "/news1.jpeg",
  },
  {
    title: "World Health Day 2019; Universal Health Coverage For All",
    desc: "According to Census 2009, young people below the age of 25 constitute 66% of the total population in Kenya. Adolescents on the other hand, make up 24% of the country’s",
    date: "April 7, 2019",
    thumbnail: "/news2.png",
  },
  {
    title: "Why we need CSE now",
    desc: "Evidence from various studies on the value of comprehensive sexuality education in young people’s lives is very clear and convincing. Over the years, a growing number of governments have committed",
    date: "February 6, 2021",
    thumbnail: "/news3.jpg",
  },
];

const LatestNews = () => {
  return (
    <Stack marginX={marginX} my="4rem">
      <MainHeading text="Latest Stories and News" />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt="2rem">
        {latestNewsData.map((d, i) => (
          <Stack key={i}>
            <Box h="20rem">
              <Image
                src={d.thumbnail}
                alt={d.title}
                width={500}
                height={500}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Stack
              bg="brand.white"
              borderRadius="md"
              mt="-4rem"
              boxShadow="md"
              w="90%"
              p=".7rem"
              alignSelf="center"
              textAlign="center"
              gap={4}
            >
              <Heading as="h4" fontSize="xl">
                {d.title}
              </Heading>
              <Text>{d.desc}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default LatestNews;
