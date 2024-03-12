"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdHealthAndSafety } from "react-icons/md";

const HealthIcon = (props: ChakraProps) => {
  return <Icon as={MdHealthAndSafety} {...props} />;
};

export default HealthIcon;
