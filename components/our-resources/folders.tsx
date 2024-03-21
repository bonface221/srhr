import { marginX } from "@/utils/constants";
import FolderIcon from "@/utils/icons/FolderIcon";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const foldersData = [
  {
    name: "Publications",
  },
  {
    name: "Media Hub",
  },
  {
    name: "Policies",
  },
];

const Folders = () => {
  return (
    <Stack marginX={marginX} my="4rem">
      <Heading as="h2" size="lg" mb="1.4rem">
        Available Resources
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {foldersData.map((folder, i) => (
          <Stack key={i}>
            <FolderIcon boxSize={20} color="#e7c560" />
            <Text fontWeight="semibold" fontSize="lg">
              {folder.name}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Folders;
