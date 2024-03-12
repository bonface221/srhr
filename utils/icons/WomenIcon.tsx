"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GrRestroomWomen } from "react-icons/gr";

const WomenIcon = (props: ChakraProps) => {
  return <Icon as={GrRestroomWomen} {...props} />;
};

export default WomenIcon;
