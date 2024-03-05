import { marginX, partnersData } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Image from "next/image";
import MainHeading from "../common/main-heading";
import Link from "next/link";

const PartnersGrid = () => {
  return (
    <Box my="4rem" marginX={marginX}>
      <MainHeading text="Our Partners" />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
        mt="2rem"
      >
        {partnersData.map((d, i) => (
          <Link href={`/partners/${d.slug}`} key={i}>
            <Stack
              align="center"
              bg="brand.white"
              p={4}
              gap={3}
              boxShadow="md"
              borderRadius="lg"
              h="fit-content"
            >
              <Box h="10rem">
                <Image
                  src={d.image}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  alt={d.name}
                  width={200}
                  height={200}
                />
              </Box>
              <Heading
                textAlign="center"
                _hover={{
                  color: "brand.red",
                }}
                color="brand.main"
                fontSize="lg"
              >
                {d.name}
              </Heading>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnersGrid;
