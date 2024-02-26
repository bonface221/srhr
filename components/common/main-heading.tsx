import { ChakraProps, Flex, Heading } from "@chakra-ui/react";

const MainHeading = ({
  text,
  color = "red",
}: {
  text: string;
  color?: string;
}) => {
  return (
    <Flex
      gap={4}
      align="center"
      _before={{
        content: '""',
        display: "block",
        borderBottom: 0,
        flexGrow: 1,
        borderTop: `1px solid var(--chakra-colors-brand-${color})`,
      }}
      _after={{
        content: '""',
        display: "block",

        flexGrow: 1,

        borderTop: `1px solid var(--chakra-colors-brand-${color})`,
      }}
    >
      <Heading
        fontSize={{ base: "xl", sm: "2xl" }}
        flexShrink={0}
        lineHeight={1}
        fontWeight={600}
        color={`var(--chakra-colors-brand-${color})`}
      >
        {text}
      </Heading>
    </Flex>
  );
};

export default MainHeading;
