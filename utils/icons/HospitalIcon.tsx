"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaRegHospital } from "react-icons/fa6";

const HospitalIcon = (props: ChakraProps) => {
  return <Icon as={FaRegHospital} {...props} />;
};

export default HospitalIcon;
