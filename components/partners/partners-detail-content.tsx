import { CMS_ASSETS_URL } from "@/config";
import { Partner } from "@/lib/directus";
import { marginX } from "@/utils/constants";
import { ArrowDown } from "@/utils/icons";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderContent from "../common/render-content";

const PartnersDetailContent = ({ partner }: { partner: Partner }) => {
  const { name, image, description, link } = partner;
  return (
    <Stack marginX={marginX} my="4rem" align="center" gap={8}>
      <Box>
        <Image
          src={`${CMS_ASSETS_URL}/${image}`}
          alt={name}
          width={300}
          height={300}
        />
      </Box>{" "}
      <Link href={link || ""} target="_blank">
        <Heading
          textAlign="center"
          _hover={{
            color: "brand.red",
          }}
        >
          {name}{" "}
          <Box
            as={ArrowDown}
            boxSize="2rem"
            transform="rotate(-130deg)"
            color="brand.red"
            cursor="pointer"
          />
        </Heading>{" "}
      </Link>
      <RenderContent content={description} />
    </Stack>
  );
};

export default PartnersDetailContent;
