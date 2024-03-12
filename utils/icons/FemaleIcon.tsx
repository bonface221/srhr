"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GiFemale } from "react-icons/gi";

const FemaleIcon = (props: ChakraProps) => {
  return <Icon as={GiFemale} {...props} />;
};

export default FemaleIcon;
