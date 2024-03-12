"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { AiFillEnvironment } from "react-icons/ai";

const EnvironmentIcon = (props: ChakraProps) => {
  return <Icon as={AiFillEnvironment} {...props} />;
};

export default EnvironmentIcon;
