"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaUsersGear } from "react-icons/fa6";

const YouthIcon = (props: ChakraProps) => {
  return <Icon as={FaUsersGear} {...props} />;
};

export default YouthIcon;
