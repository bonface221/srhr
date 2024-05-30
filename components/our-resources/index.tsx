import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
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
            2023 ANNUAL REPORT SRHR Alliance
          </Heading>
          <Text>
            2023 ANNUAL REPORT SRHR Alliance is a comprehensive report that
            details the activities and achievements of the SRHR Alliance in the
            year 2023.
          </Text>
          <Tooltip
            label="Download button disabled for now"
            aria-label="Button disabled"
            hasArrow
            bg="brand.red"
          >
            <Button
              variant="outline"
              w="fit-content"
              borderColor="brand.red"
              borderRadius="20px"
              color="brand.red"
              isDisabled
            >
              <Flex align="center" gap={2}>
                <Text>Download Pdf</Text>
                <IoCloudDownloadOutline size={20} />
              </Flex>
            </Button>
          </Tooltip>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default OurResources;
