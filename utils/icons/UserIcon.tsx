"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";

const UserIcon = (props: ChakraProps) => {
  return <Icon as={FaRegUser} {...props} />;
};

export default UserIcon;
