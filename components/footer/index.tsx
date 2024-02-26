import { contactsData, marginX, navData } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Box bg="brand.main" py="4rem">
      <Grid
        marginX={marginX}
        templateColumns={{
          base: "repeat(2,1fr)",
          lg: "repeat(7,1fr)",
        }}
        gap={{ base: 7, lg: 6 }}
        color="brand.white"
        px="1rem"
      >
        <GridItem
          colSpan={{ base: 2, lg: "auto" }}
          display="flex"
          justifyContent={{ base: "center", sm: "normal" }}
        >
          <Image
            src="/logo.png"
            alt="SRHR Alliance in Kenya"
            width={200}
            height={200}
          />
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={2}>
          <Heading as="h3" size="md">
            Quick Links
          </Heading>
          {navData.map((item, i) => (
            <Text key={i}>{item.label}</Text>
          ))}
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={2}>
          <Heading as="h3" size="md">
            Socials
          </Heading>
          <Text>Twitter</Text>
          <Text>Youtube</Text>
          <Text>Facebook</Text>
        </GridItem>
        <GridItem
          display="flex"
          flexDir="column"
          gap={2}
          colSpan={{ base: 2, lg: 2 }}
        >
          <Heading as="h3" size="md">
            Contact Us
          </Heading>
          {contactsData.map((item, i) => (
            <Flex key={i} align="center">
              <Box as={item.icon} width={6} height={6} />
              <Text ml="1rem">{item.text}</Text>
            </Flex>
          ))}
        </GridItem>
        <GridItem
          display="flex"
          flexDir="column"
          gap={2}
          colSpan={{ base: 2, lg: 2 }}
        >
          <Heading as="h3" size="md">
            Subscribe for updates
          </Heading>

          <Stack bg="rgba(112, 174, 118, 0.8)" p=".5rem">
            <Input
              variant="flushed"
              placeholder="Name"
              color="brand.black"
              _placeholder={{
                color: "brand.white",
                opacity: 0.8,
              }}
            />
            <Input
              variant="flushed"
              placeholder="Phone"
              type="tel"
              _placeholder={{
                color: "brand.white",
                opacity: 0.8,
              }}
            />
            <Input
              variant="flushed"
              placeholder="name@domain.com"
              _placeholder={{
                color: "brand.white",
                opacity: 0.8,
              }}
            />

            <Button bg="brand.red" color="brand.white">
              Subscribe
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
