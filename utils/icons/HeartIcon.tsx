"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

const HeartIcon = (props: ChakraProps) => {
  return <Icon as={FaRegHeart} {...props} />;
};

export default HeartIcon;
