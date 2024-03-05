import { marginX } from "@/utils/constants";
import { Button, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Stack
      minH="70vh"
      align="center"
      justify="center"
      marginX={marginX}
      py="3rem"
    >
      <Image src="/not-found.svg" alt="404" width={400} height={400} />
      <Heading>Page Not Found</Heading>
      <Link href="/">
        <Button
          bg="brand.main"
          color="brand.white"
          transition="all .3s ease-in-out"
          _hover={{
            bg: "brand.red",
          }}
        >
          Go Home
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFound;
