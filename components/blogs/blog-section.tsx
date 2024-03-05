import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import "./blog-detail.scss";
import { Blog } from "@/utils/types";

const BlogSection = async ({ blog }: { blog: Blog }) => {
  const { thumbnail, title, content } = blog;

  if (!blog) return notFound();

  return (
    <Stack gap={5}>
      <Box h="440px" borderRadius="20px" overflow="hidden">
        <Image
          src={thumbnail}
          alt="blog image placeholder"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
      <Flex gap={6}>
        <Flex align="center" gap={2}>
          <Avatar boxSize="44px" src="" borderRadius="full" />

          <Heading
            fontSize="md"
            color="brand.main"
            textTransform="uppercase"
            fontFamily='"Open Sans" san-serif'
          >
            julius
          </Heading>
        </Flex>

        <Flex gap={1} align="center">
          <CiCalendar
            style={{
              fontSize: "1.5rem",
              color: "var(--chakra-colors-brand-main)",
            }}
          />
          <Text fontWeight="semibold">JANUARY 8, 2024</Text>
        </Flex>
      </Flex>
      <Heading mb="3rem">{title}</Heading>
      <Box id="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
    </Stack>
  );
};

export default BlogSection;
