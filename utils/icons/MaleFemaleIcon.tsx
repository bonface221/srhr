"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoMaleFemale } from "react-icons/io5";

const MaleFemaleIcon = (props: ChakraProps) => {
  return <Icon as={IoMaleFemale} {...props} />;
};

export default MaleFemaleIcon;
