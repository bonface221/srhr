import { marginX } from "@/utils/constants";
import { Partner } from "@/utils/types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PartnersDetailContent = ({ partner }: { partner: Partner }) => {
  const { name, image, description } = partner;
  return (
    <Stack marginX={marginX} my="4rem" align="center" gap={8}>
      <Box>
        <Image src={image} alt={name} width={300} height={300} />
      </Box>
      <Heading textAlign="center">{name}</Heading>
      <Text>{description}</Text>
    </Stack>
  );
};

export default PartnersDetailContent;
