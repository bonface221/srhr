"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaFolder } from "react-icons/fa";

const FolderIcon = (props: ChakraProps) => {
  return <Icon as={FaFolder} {...props} />;
};

export default FolderIcon;
