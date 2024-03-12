import { marginX, ourWorkData } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const OurWork = () => {
  return (
    <Stack marginX={marginX} my="4rem" gap="3.5rem">
      {ourWorkData.map((d, i) => (
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
              src={d.img}
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
              {d.label}
            </Heading>
            <Text fontSize="lg">{d.content}</Text>
            {/* <Button
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
            </Button> */}
          </Stack>
        </SimpleGrid>
      ))}
    </Stack>
  );
};

export default OurWork;
