import { marginX } from "@/utils/constants";
import { CalendarIcon } from "@/utils/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const EventsListing = () => {
  return (
    <Stack marginX={marginX} my="4rem" gap="2rem">
      <Heading>
        Upcoming{" "}
        <span style={{ color: "var(--chakra-colors-brand-main)" }}>events</span>{" "}
      </Heading>
      {[1, 2, 3, 4, 5].map((item) => (
        <Grid
          key={item}
          gridTemplateColumns="300px auto"
          gap={6}
          border="1px solid var(--chakra-colors-brand-lightMain)"
          p={4}
        >
          <GridItem>
            <Image
              src="/our-vision-bg.JPG"
              width={500}
              height={500}
              style={{
                borderRadius: ".75rem",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="event1"
            />
          </GridItem>
          <GridItem display="flex" flexDir="column" gap={4}>
            <Heading fontSize="3xl">
              FutureFest 2024: Unleashing Tommorrow&apos;s Innovations
            </Heading>
            <Flex gap={3}>
              {[1, 2, 3].map((i) => (
                <Flex key={i} align="center" gap={2}>
                  <Box as={CalendarIcon} boxSize={5} color="brand.main" />
                  <Stack gap={0}>
                    <Box as="h6">Date:</Box>
                    <Text>February 3,2024</Text>
                  </Stack>
                </Flex>
              ))}
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              dolore mollitia officia saepe? Animi dolore, iure illum fuga et
              quis ab est. Maxime nihil laboriosam fuga adipisci laborum harum.
              Aliquid!
            </Text>
            <Flex wrap="wrap" gap={2}>
              {[1, 2, 3, 4].map((i) => (
                <Tag key={i} bg="brand.main" color="brand.white" size="lg">
                  Tag {i}
                </Tag>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      ))}
    </Stack>
  );
};

export default EventsListing;
