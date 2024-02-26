import { marginX, navData } from "@/utils/constants";
import MenuIcon from "@/utils/icons/MenuIcon";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  return (
    <Box bg="brand.white" py=".5rem">
      <Flex justify="space-between" align="center" marginX={marginX}>
        <Image
          src="/logo.png"
          alt="Kenya SRHR Alliance"
          width={100}
          height={100}
        />
        <Flex gap={4} display={{ base: "none", lg: "flex" }}>
          {navData.map((item, i) => (
            <Link key={i} href={item.link ? item.link : "/"}>
              <Text fontWeight="500" fontSize="lg" color="brand.main">
                {item.label}
              </Text>
            </Link>
          ))}
        </Flex>
        <Button
          display={{ base: "none", lg: "block" }}
          bg="brand.main"
          color="brand.white"
        >
          Contact Us
        </Button>
        <Box display={{ base: "block", lg: "none" }}>
          <MobileNav />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNav;
