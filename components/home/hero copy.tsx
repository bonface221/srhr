import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <Stack
      h="95vh"
      bgImage="/home-bg.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos={{ base: "10% 50%", sm: "50% 60%" }}
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
    >
      <Grid
        zIndex={999}
        templateColumns="repeat(8,1fr)"
        templateRows="repeat(8,1fr)"
        h="100%"
        marginX={{ base: "1rem", sm: 0 }}
      >
        <GridItem
          gridRow={{ base: "3/7", sm: "4/7", md: "3/7", lg: "6/7" }}
          gridColumn={{ base: "1/9", sm: "2/8", md: "2/6", lg: "2/5" }}
          bg="rgba(247, 77, 77,.5)"
          p="1.3rem"
          borderRadius="xl"
          display="flex"
          alignItems="center"
        >
          <Stack>
            <Heading
              fontSize={{ base: "2rem", md: "4rem" }}
              color="brand.white"
            >
              KENYA SRHR ALLIANCE
            </Heading>
            <Text color="brand.white" fontSize="1.4rem" fontWeight="semibold">
              Working together to increase Access to Reproductive Health and
              Rights
            </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Box zIndex={999} pos="absolute" bottom={10} right={10}>
        <Link href="srhr-priorities">
          <Button
            bg="brand.lightRed"
            borderRadius="20px"
            color="brand.white"
            _hover={{
              bg: "brand.lightRedHover",
            }}
          >
            Our Priorities
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default Hero;
