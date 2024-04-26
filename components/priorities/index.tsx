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
    <Stack my="4rem" marginX={marginX} gap={8}>
      {prioritiesData.map((d, i) => (
        <Box key={i}>
          <Flex gap={6} mb="2rem" align="center">
            <Stack bg="#F74D4D" p={4} borderRadius="50%" h="fit-content">
              <Box as={d.icon} boxSize="4rem" color="brand.white" />
            </Stack>

            <Stack>
              <Heading color="#F74D4D">{d.label}</Heading>
              <Text fontSize="lg" textAlign="justify">
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
