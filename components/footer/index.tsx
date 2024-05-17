import { contactsData, marginX, quickLinks, socials } from "@/utils/constants";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import XTweet from "../common/tweet";

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
          height="fit-content"
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
          {quickLinks.map((item, i) => (
            <Link href={item.link} key={i}>
              <Text key={i}>{item.label}</Text>
            </Link>
          ))}
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={2}>
          <Heading as="h3" size="md">
            Socials
          </Heading>
          {socials.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Flex key={i} align="center" gap={1}>
                <Box as={item.icon} color="brand.white" cursor="pointer" />
                <Text>{item.name}</Text>
              </Flex>
            </Link>
          ))}
        </GridItem>
        <GridItem
          display="flex"
          flexDir="column"
          gap={2}
          colSpan={{ base: 2, lg: 1 }}
        >
          <Heading as="h3" size="md">
            Contact Us
          </Heading>
          {contactsData.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Flex align="center">
                <Box as={item.icon} width={6} height={6} />
                <Text ml="1rem">{item.text}</Text>
              </Flex>
            </Link>
          ))}
        </GridItem>
        <GridItem
          display="flex"
          flexDir="column"
          gap={2}
          colSpan={{ base: 2, lg: 3 }}
        >
          <Heading as="h3" size="md">
            SRHR on Twitter
          </Heading>

          <XTweet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
