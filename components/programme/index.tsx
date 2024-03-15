"use client";
import { marginX } from "@/utils/constants";

import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import { Programme } from "@/lib/directus";
import RenderContent from "../common/render-content";
import { CMS_ASSETS_URL } from "@/config";

const ProgrammeContent = ({ programme }: { programme: Programme }) => {
  const { title, content, slug, programme_images } = programme;
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
          {programme_images.map((image, i) => (
            <SplideSlide key={i}>
              <Image
                src={`${CMS_ASSETS_URL}/${image.directus_files_id}`}
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
      <RenderContent content={content} />
    </Stack>
  );
};

export default ProgrammeContent;
