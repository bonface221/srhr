"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaPeopleGroup } from "react-icons/fa6";

const CommunityIcon = (props: ChakraProps) => {
  return <Icon as={FaPeopleGroup} {...props} />;
};

export default CommunityIcon;
