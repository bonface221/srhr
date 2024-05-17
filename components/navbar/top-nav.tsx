import { marginX, socials } from "@/utils/constants";
import MailIcon from "@/utils/icons/MailIcon";
import PhoneIcon from "@/utils/icons/PhoneIcon";
import { Box, Flex, Text } from "@chakra-ui/react";
import { link } from "fs";
import Link from "next/link";

const topNavData = [
  {
    label: "info@srhralliance.or.ke",
    icon: MailIcon,
    link: "mailto:info@srhralliance.or.ke",
  },
  {
    label: " +254 769 478605",
    link: "tel:+254769478605",
    icon: PhoneIcon,
  },
];

const TopNav = () => {
  return (
    <Box bg="brand.main" py=".6rem">
      <Flex
        marginX={marginX}
        justify="space-between"
        flexWrap="wrap"
        align="center"
      >
        <Flex gap={3} flexDir={{ base: "column", sm: "row" }}>
          {topNavData.map((item, i) => (
            <Link href={item.link} key={i}>
              <Flex
                key={i}
                display={i == 2 ? { base: "none", lg: "flex" } : "flex"}
                align="center"
                gap={1}
              >
                <Box as={item.icon} color="brand.white" />

                <Text fontSize="md" color="brand.white">
                  {item.label}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex align="center" gap={2}>
          {socials.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Box
                as={item.icon}
                color="brand.white"
                _hover={{
                  color: "brand.red",
                }}
                cursor="pointer"
              />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
