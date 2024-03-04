import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainHeading from "./main-heading";
import { marginX } from "@/utils/constants";
import Image from "next/image";
import { CommentIcon, UserIcon } from "@/utils/icons";

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
          <Stack key={i} bg="brand.white" borderRadius="xl" overflow="hidden">
            <Box h="20rem">
              <Image
                src={d.thumbnail}
                alt={d.title}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Stack gap={4} p={3} flex={1}>
              <Flex gap={2}>
                <Flex align="center" gap={1}>
                  <Box as={UserIcon} color="brand.main" boxSize={5} />
                  <Text>By Jonson</Text>
                </Flex>
                |
                <Flex gap={1} align="center">
                  <Box as={CommentIcon} boxSize={5} color="brand.main" />
                  <Text>0 Comments</Text>
                </Flex>
              </Flex>
              <Heading size="md">{d.title}</Heading>
              <Button w="fit-content" mt="auto">
                Read More
              </Button>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default LatestNews;
