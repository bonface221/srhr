import { marginX, prioritiesData } from "@/utils/constants";
import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const PrioritiesComponent = () => {
  return (
    <Stack my={{ base: "2rem", sm: "4rem" }} marginX={marginX} gap={8}>
      {prioritiesData.map((d, i) => (
        <Box key={i}>
          <Flex
            gap={6}
            flexDir={{ base: "column", sm: "row" }}
            mb="2rem"
            align="center"
          >
            <Stack bg="#F74D4D" p={5} borderRadius="50%" h="fit-content">
              <Box as={d.icon} boxSize="4rem" color="brand.white" />
            </Stack>

            <Stack>
              <Heading
                color="#F74D4D"
                textAlign={{ base: "center", sm: "left" }}
              >
                {d.label}
              </Heading>
              <Text fontSize="lg" fontWeight="semibold" textAlign="justify">
                {d.content}
              </Text>
            </Stack>
          </Flex>
          {i !== prioritiesData.length - 1 && (
            <StackDivider h=".1rem" bg="#242121" />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default PrioritiesComponent;
