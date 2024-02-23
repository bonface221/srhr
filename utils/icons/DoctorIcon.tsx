"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaUserDoctor } from "react-icons/fa6";

const DoctorIcon = (props: ChakraProps) => {
  return <Icon as={FaUserDoctor} {...props} />;
};

export default DoctorIcon;
