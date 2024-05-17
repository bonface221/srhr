import { contactsData, marginX } from "@/utils/constants";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import MainHeading from "../common/main-heading";
import ContactForm from "./contact-form";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
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
              <Link href={item.link} key={i}>
                <Flex align="center" gap={2}>
                  <Box as={item.icon} color="brand.red" width={6} height={6} />
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    _hover={{
                      color: "brand.red",
                    }}
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Stack>
          <ContactForm />
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default ContactSection;
