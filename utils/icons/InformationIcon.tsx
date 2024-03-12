"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoMdInformationCircle } from "react-icons/io";

const InformationIcon = (props: ChakraProps) => {
  return <Icon as={IoMdInformationCircle} {...props} />;
};

export default InformationIcon;
