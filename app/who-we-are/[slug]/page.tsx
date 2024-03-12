import CommonPageHero from "@/components/common/common-page-hero";
import { marginX } from "@/utils/constants";
import { getWhoWeAreData } from "@/utils/functions";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const DetailsOnWhoWeAre = ({ params: { slug } }: Props) => {
  if (!slug) return;

  const data = getWhoWeAreData(slug);

  if (!data) return notFound();

  return (
    <>
      <CommonPageHero text={data.title} bgImg="" />
      <Stack marginX={marginX} my="4rem" gap="2rem">
        <Box h="40rem" overflow="hidden">
          <Image
            src={data.img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            alt={data.title}
            width={1080}
            height={720}
          />
        </Box>
        <Heading color="brand.main" fontSize="3xl">
          {data.title}:
        </Heading>

        <Text fontSize="lg">{data.content}</Text>
      </Stack>
    </>
  );
};

export default DetailsOnWhoWeAre;
