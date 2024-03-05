import { marginX } from "@/utils/constants";
import { Programme } from "@/utils/types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const ProgrammeContent = ({ programme }: { programme: Programme }) => {
  const { title, desc, slug } = programme;
  return (
    <Stack marginX={marginX} my="4rem">
      <Heading as="h2" size="lg" mb="1.4rem">
        {title} Programme
      </Heading>
      <Box
        h="40rem"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
        pos="relative"
      >
        <Image
          src="/guso.jpg"
          width={700}
          height={700}
          alt="guso"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {slug === "guso" && (
          <Box>
            <Image
              src="/guso-logo.jpg"
              width={150}
              height={150}
              alt="guso-logo"
              style={{
                position: "absolute",
                top: "10%",
                left: "90%",
                transform: "translate(-50%, -50%)",

                border: "2px solid white",
              }}
            />
          </Box>
        )}
      </Box>
      <Text mt="1.4rem" fontSize="lg">
        {desc}
      </Text>
    </Stack>
  );
};

export default ProgrammeContent;
