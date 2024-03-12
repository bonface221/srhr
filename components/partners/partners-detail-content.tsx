import { marginX } from "@/utils/constants";
import { ArrowDown } from "@/utils/icons";
import { Partner } from "@/utils/types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnersDetailContent = ({ partner }: { partner: Partner }) => {
  const { name, image, description, link } = partner;
  return (
    <Stack marginX={marginX} my="4rem" align="center" gap={8}>
      <Box>
        <Image src={image} alt={name} width={300} height={300} />
      </Box>
      <Heading textAlign="center">
        {name}{" "}
        <Link href={link} target="_blank">
          <Box
            as={ArrowDown}
            boxSize="2rem"
            transform="rotate(-130deg)"
            color="brand.red"
            cursor="pointer"
          />
        </Link>
      </Heading>
      <Text>{description}</Text>
    </Stack>
  );
};

export default PartnersDetailContent;
