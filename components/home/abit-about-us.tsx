import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ABitAboutUs = () => {
  return (
    <Box py={{ base: "2rem", sm: "5rem" }} bg="brand.green">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={8}
        mt="2.5rem"
        marginX={marginX}
        alignItems="center"
      >
        <Stack gap={3}>
          <Heading fontSize={{ base: "1.7rem", md: "3rem" }} color="brand.red">
            Sexual Reproductive Health and Rights Alliance Kenya
          </Heading>
          <Box>
            <Image
              src="/about/a-bit-about.JPG"
              alt="A bit about us"
              width={500}
              height={600}
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>

        <Stack gap={6}>
          <Text
            fontSize={{ base: "1.3rem", md: "1.8rem" }}
            fontWeight="semibold"
            textAlign="justify"
          >
            <Box as="span" color="brand.red">
              The SRHR Alliance in Kenya
            </Box>{" "}
            is a coalition of 19 civil society organizations and institutions
            working to promote the sexual and reproductive health and rights of
            young people and women in Africa, Asia and the Europe. The alliance
            was first established in the Netherlands in 2010. In Kenya the
            alliance brings together 17 organizations comprising of{" "}
            <Box as="span" color="brand.red">
              Africa Alive (AA)
            </Box>{" "}
            ,{" "}
            <Box as="span" color="brand.red">
              AMREF Health Africa
            </Box>
            ,
            <Box as="span" color="brand.red">
              Anglican Development Services (ADS) Nyanza
            </Box>{" "}
            ,
          </Text>
          <Box alignSelf={{ base: "center", sm: "flex-start" }}>
            <Link href="/who-we-are/about-us">
              <Button
                bg="brand.red"
                w="fit-content"
                color="brand.white"
                _hover={{
                  bg: "brand.main",
                }}
              >
                More About Us
              </Button>
            </Link>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default ABitAboutUs;
