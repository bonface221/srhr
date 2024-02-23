"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

const LocationIcon = (props: ChakraProps) => {
  return <Icon as={FaLocationDot} {...props} />;
};

export default LocationIcon;
