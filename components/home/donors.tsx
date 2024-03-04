import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import MainHeading from "../common/main-heading";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { marginX } from "@/utils/constants";

const organizations = [
  "/o1.jpeg",
  "/o2.png",
  "/o3.jpg",
  "/o4.jpg",
  "/o5.jpg",
  "/o6.jpg",
  "/o7.png",
  "/o8.png",
];

const Donors = () => {
  return (
    <Stack marginX={marginX}>
      <MainHeading text="International Donors" />
      <Box mb={10} mt="1.5rem">
        <Marquee
          className="organizations-marquee"
          autoFill={true}
          pauseOnHover={true}
        >
          {organizations.map((o, i) => (
            <Stack
              mx={6}
              w={{ base: "50vw", sm: "40vw", md: "30vw", lg: "20vw" }}
              key={i}
              gap={4}
              align="center"
            >
              <Stack maxW="150px" minH="50px" align="center" justify="center">
                <Image width={150} height={50} src={o} alt={o} />
              </Stack>
            </Stack>
          ))}
        </Marquee>
      </Box>
    </Stack>
  );
};

export default Donors;
