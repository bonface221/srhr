import directus from "@/lib/directus";
import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { readItems } from "@directus/sdk";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MainHeading from "../common/main-heading";
import { CMS_ASSETS_URL } from "@/config";

const PartnersGrid = async () => {
  const partnersData = await getPartners();
  return (
    <Box my="4rem" marginX={marginX}>
      <MainHeading text="Our Esteemed Partners" />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
        mt="2rem"
      >
        {partnersData.map((d, i) => (
          <Link href={`/who-we-are/partners/${d.slug}`} key={i}>
            <Stack
              align="center"
              bg="brand.white"
              p={4}
              gap={3}
              boxShadow="md"
              borderRadius="lg"
              h="fit-content"
              transition="all .3s ease-in-out"
              _hover={{
                boxShadow: "0px 0px 10px 0px var(--chakra-colors-brand-red)",
                borderColor: "var(--chakra-colors-brand-red)",
              }}
            >
              <Box h="10rem">
                <Image
                  src={`${CMS_ASSETS_URL}/${d.image}`}
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

async function getPartners() {
  try {
    const partners = await directus.request(
      readItems("partners", {
        fields: ["slug", "name", "image"],
      })
    );
    return partners;
  } catch (error) {
    notFound();
  }
}
