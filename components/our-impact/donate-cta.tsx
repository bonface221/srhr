import { marginX } from "@/utils/constants";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

const DonateCTA = () => {
  return (
    <Stack align="center" marginX={marginX} py="4rem">
      <Stack w={{ base: "96%", md: "90%" }} align="center" gap={6}>
        <Heading
          textAlign="center"
          color="brand.main"
          fontSize={{ base: "1.8rem", md: "2.5rem" }}
          lineHeight={{ base: "2.3rem", md: "3.3rem" }}
        >
          With The Support Of People Like You, We&apos;re Making Progress in
          Promoting and protecting sexual and reproductive health and rights
        </Heading>
        <Text textAlign="center" fontSize={{ base: "lg", md: "xl" }}>
          Over 2 million young people (10-24 years) in and out of school reached
          with Comprehensive Sexuality Education across 15 counties (Nairobi,
          Mombasa, Kisumu, Kwale, Kilifi, Homabay, Siaya, Migori, Kisii, Busia,
          Kakamega, Bungoma, Uasin Gishu, Trans-Nzoia and Kajiado).
        </Text>
        <Button bg="brand.red" color="brand.white">
          See the Annual Report
        </Button>
      </Stack>
    </Stack>
  );
};

export default DonateCTA;
