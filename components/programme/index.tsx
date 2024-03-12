"use client";
import { marginX } from "@/utils/constants";
import { Programme } from "@/utils/types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const ProgrammeContent = ({ programme }: { programme: Programme }) => {
  const { title, desc, images, slug } = programme;
  return (
    <Stack marginX={marginX} my="4rem">
      <Heading as="h2" size="lg" mb="1.4rem">
        {title} Programme
      </Heading>
      <Box overflow="hidden" borderRadius="lg" pos="relative">
        <Splide
          options={{
            rewind: true,
            type: "loop",
            autoplay: true,
            fixedHeight: "37rem",
          }}
          aria-label="My Favorite Images"
        >
          {images.map((imageUrl, i) => (
            <SplideSlide key={i}>
              <Image
                src={`/program-images/${imageUrl}`}
                width={1200}
                height={500}
                style={{
                  borderRadius: ".75rem",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="banner"
              />
            </SplideSlide>
          ))}
        </Splide>
      </Box>
      <Text mt="1.4rem" fontSize="lg">
        {desc}
      </Text>
    </Stack>
  );
};

export default ProgrammeContent;
