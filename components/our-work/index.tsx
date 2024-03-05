import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import Image from "next/image";

const items = [
  "https://res.cloudinary.com/duzmcqimi/image/upload/c_scale,w_720/v1709632388/srhr/ilxeow1tszyiceuut9y7.webp",
  "https://res.cloudinary.com/duzmcqimi/image/upload/c_scale,w_720/v1709632388/srhr/bu1xz3maooyeeu9qquzi.webp",
  "https://res.cloudinary.com/duzmcqimi/image/upload/c_scale,w_720/v1709632388/srhr/l3zbqfwxqo7hkzrsr9i0.webp",
];

const OurWork = () => {
  return (
    <Stack marginX={marginX} my="4rem" gap={4}>
      <Box mb="2rem">
        <MainHeading text="What we do" />
      </Box>{" "}
      {items.map((item, i) => (
        <SimpleGrid
          key={i}
          columns={{ base: 1, md: 2 }}
          gap={6}
          alignItems="center"
          mb="2rem"
        >
          <Box
            overflow="hidden"
            order={i % 2 === 0 ? 1 : 0}
            borderRadius="lg"
            boxShadow="md"
          >
            <Image
              src={item}
              alt="first task"
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack gap={4}>
            <Heading as="h3" fontSize="3xl">
              <Box as="span" color="brand.red">
                {i + 1}.
              </Box>{" "}
              Lorem, ipsum dolor.
            </Heading>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, quod, quos, voluptates voluptate quae voluptatem
              exercitationem fugit atque nesciunt quibusdam. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Sequi, magni.
            </Text>
            <Button
              w="fit-content"
              variant="outline"
              borderRadius="20px"
              borderColor="brand.main"
              _hover={{
                bg: "brand.red",
                borderColor: "brand.red",
                color: "brand.white",
              }}
            >
              Read More &gt;
            </Button>
          </Stack>
        </SimpleGrid>
      ))}
    </Stack>
  );
};

export default OurWork;
