import FacebookIcon from "@/utils/icons/FacebookIcon";
import LinkedinIcon from "@/utils/icons/LinkedinIcon";
import XIcon from "@/utils/icons/XIcon";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const socials = [
  {
    name: "facebook",
    link: "",
    icon: FacebookIcon,
  },
  {
    name: "x",
    link: "",
    icon: XIcon,
  },
  {
    name: "LinkendIn",
    link: "",
    icon: LinkedinIcon,
  },
];

const TeamCard = () => {
  return (
    <Stack
      className="team-card"
      borderRadius="20px"
      bg="brand.white"
      padding="20px"
      boxShadow="0px 4px 15px 0px rgba(0,0,0,0.06)"
      zIndex={2}
      gap={4}
      marginTop="40px"
      transition="all .4s ease-in-out"
    >
      <Box height="17rem">
        <Image
          src="/team.avif"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
          alt="team"
          width={150}
          height={150}
        />
      </Box>

      <Stack>
        <Heading as="h5" fontSize="xl" fontWeight="semibold">
          Bonface Maina
        </Heading>
        <Text>Executive developer</Text>
        <Flex>
          {socials.map((social, i) => (
            <Box key={i} as={social.icon} boxSize="6" />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default TeamCard;
