import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import { contactsData, marginX } from "@/utils/constants";
import ContactForm from "./contact-form";
import Map from "@/components/common/map";

const ContactSection = () => {
  return (
    <>
      {" "}
      <Stack marginX={marginX} my="4rem">
        <MainHeading text="Get In Touch" />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt="4rem">
          <Stack gap={6}>
            <Heading as="h2" color="brand.main">
              Contact our support team to get a consultation
            </Heading>
            <Text fontSize="lg">
              Visit our FAQ page first, to see if your questions have already
              been answered.
            </Text>
            {contactsData.map((item, i) => (
              <Flex key={i} align="center" gap={2}>
                <Box as={item.icon} color="brand.red" width={6} height={6} />
                <Text fontSize="lg">{item.text}</Text>
              </Flex>
            ))}
          </Stack>
          <ContactForm />
        </SimpleGrid>
      </Stack>
      <Box h="50vh">
        <Map />
      </Box>
    </>
  );
};

export default ContactSection;
