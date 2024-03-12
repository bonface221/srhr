"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdOutlineLocalHospital } from "react-icons/md";

const CommunityHealthIcon = (props: ChakraProps) => {
  return <Icon as={MdOutlineLocalHospital} {...props} />;
};

export default CommunityHealthIcon;
