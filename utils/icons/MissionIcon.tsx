"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { BsBullseye } from "react-icons/bs";

const MissionIcon = (props: ChakraProps) => {
  return <Icon as={BsBullseye} {...props} />;
};

export default MissionIcon;
