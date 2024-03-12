"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdMiscellaneousServices } from "react-icons/md";

const ServicesIcon = (props: ChakraProps) => {
  return <Icon as={MdMiscellaneousServices} {...props} />;
};

export default ServicesIcon;
