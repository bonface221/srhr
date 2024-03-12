"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoIosPeople } from "react-icons/io";

const PeopleIcon = (props: ChakraProps) => {
  return <Icon as={IoIosPeople} {...props} />;
};

export default PeopleIcon;
