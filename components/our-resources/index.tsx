import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const OurResources = () => {
  return (
    <Stack marginX={marginX} my="4rem">
      <Heading as="h2" size="lg" mb="1.4rem">
        Learn more about what we do
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box>
          <Image
            src="/publication.webp"
            alt="publication"
            width={500}
            height={500}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Stack justify="center" gap={3}>
          <Heading as="h3" fontSize="3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            sapiente perferendis provident sed labore nemo nisi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facere sequi molestias
            voluptatibus alias ipsa non obcaecati incidunt iure! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Mollitia adipisci,
            voluptatum iusto est et ad optio, eos unde soluta minima
            voluptatibus officia fuga, rerum ipsam magnam praesentium eaque quia
            deleniti.
          </Text>
          <Button
            variant="outline"
            w="fit-content"
            borderColor="brand.red"
            borderRadius="20px"
            color="brand.red"
          >
            <Flex align="center" gap={2}>
              <Text>Download Pdf</Text>
              <IoCloudDownloadOutline size={20} />
            </Flex>
          </Button>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default OurResources;
