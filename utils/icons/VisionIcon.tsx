"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

const VisionIcon = (props: ChakraProps) => {
  return <Icon as={FaEye} {...props} />;
};

export default VisionIcon;
