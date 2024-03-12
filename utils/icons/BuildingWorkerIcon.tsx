"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GrUserWorker } from "react-icons/gr";

const BuildingWorkerIcon = (props: ChakraProps) => {
  return <Icon as={GrUserWorker} {...props} />;
};

export default BuildingWorkerIcon;
