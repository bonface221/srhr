import { marginX, navData } from "@/utils/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import MenuDropdown from "./menu-dropdown";

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
            <MenuDropdown key={i} menuItem={item} />
          ))}
        </Flex>
        <Link href="/contact">
          <Button
            display={{ base: "none", lg: "block" }}
            bg="brand.main"
            _hover={{
              bg: "brand.dark",
            }}
            color="brand.white"
          >
            Contact Us
          </Button>
        </Link>

        <Box display={{ base: "block", lg: "none" }}>
          <MobileNav />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNav;
