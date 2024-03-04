"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const CommentIcon = (props: ChakraProps) => {
  return <Icon as={FaComments} {...props} />;
};

export default CommentIcon;
