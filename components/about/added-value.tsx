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
import MainHeading from "../common/main-heading";

const AddedValue = () => {
  return (
    <Box mt="4rem" marginX={marginX}>
      <MainHeading text="Added Value By SRHR" />
      <SimpleGrid
        mt="2rem"
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        gap={8}
      >
        <Stack gap={4}>
          <Heading color="brand.main" fontSize="3xl">
            What Value have we added?
          </Heading>
          <Text maxW="94%">
            The Alliance provides a great platform and opportunity for National,
            Regional and International advocacy to influence the SRHR agenda
            given the greater voice that comes with numbers. It has offered
            leverage on resources and expertise to do better programming and a
            framework for fundraising to partners by mobilizing funds from local
            and other sources. Working as an Alliance has been affirmed as an
            effective way to have a bigger voice/influence in advocacy and also
            in fundraising.
          </Text>
          <Flex gap={3}>
            <Button w="fit-content" bg="brand.main" color="brand.white">
              Learn more
            </Button>
            <Button w="fit-content" bg="brand.red" color="brand.white">
              Donate
            </Button>
          </Flex>
        </Stack>
        <Box>
          <Image
            src="/about/added-value-by-srhr.jpg"
            alt="About SRHR"
            width={500}
            height={600}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AddedValue;
