import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import MainHeading from "../common/main-heading";

const OurGoal = () => {
  return (
    <Box my="4rem" marginX={marginX}>
      <MainHeading text="Our Goal" />
      <SimpleGrid
        mt="2rem"
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        gap={8}
      >
        <Stack gap={4}>
          <Heading color="brand.main" fontSize="3xl">
            What is Our Goal?
          </Heading>
          <Text fontSize="lg">
            To ensure all young people enjoy their sexual reproductive health
            and rights in productive, equal and healthy societies.
          </Text>

          {/* <Button w="fit-content" bg="brand.red" color="brand.white">
            Donate
          </Button> */}
        </Stack>
        <Box>
          <Image
            src="/who-we-are/our-goal.JPG"
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

export default OurGoal;
