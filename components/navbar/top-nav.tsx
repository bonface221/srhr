import { marginX } from "@/utils/constants";
import FacebookIcon from "@/utils/icons/FacebookIcon";
import InstagramIcon from "@/utils/icons/InstagramIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";
import LocationIcon from "@/utils/icons/LocationIcon";
import MailIcon from "@/utils/icons/MailIcon";
import PhoneIcon from "@/utils/icons/PhoneIcon";
import XIcon from "@/utils/icons/XIcon";
import { Box, Flex, Text } from "@chakra-ui/react";

const topNavData = [
  {
    label: "info@srhralliance.or.ke",
    icon: MailIcon,
  },
  {
    label: "+254 20 2398723",
    icon: PhoneIcon,
  },
  {
    label: "Southgate Residence, Plainsview, Likoni Road",
    icon: LocationIcon,
  },
];

const socials = [
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/KenyaSRHR/",
  },
  {
    icon: XIcon,
    link: "https://twitter.com/KenyaSRHR",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/KenyaSRHR",
  },
  {
    icon: LinkedinIcon,
    link: "https://ke.linkedin.com/in/kenya-srhr-alliance-39b433117",
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
          ))}
        </Flex>
        <Flex align="center" gap={2}>
          {socials.map((item, i) => (
            <Box as={item.icon} key={i} color="brand.white" cursor="pointer" />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
