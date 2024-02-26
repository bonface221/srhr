"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuIcon = (props: ChakraProps) => {
  return <Icon as={RxHamburgerMenu} {...props} />;
};

export default MenuIcon;
