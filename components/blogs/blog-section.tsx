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
import { CMS_ASSETS_URL } from "@/config";
import { friendlyTime } from "@/lib/friendly-time";
import RenderContent from "../common/render-content";

const BlogSection = async ({ blog }: { blog: Blog }) => {
  const { thumbnail, title, date_created, content } = blog;

  if (!blog) return notFound();

  return (
    <Stack gap={5}>
      <Box h="500px" borderRadius="20px" overflow="hidden">
        <Image
          src={`${CMS_ASSETS_URL}/${thumbnail}`}
          alt={title}
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
            by srhr
          </Heading>
        </Flex>

        <Flex gap={1} align="center">
          <CiCalendar
            style={{
              fontSize: "1.5rem",
              color: "var(--chakra-colors-brand-main)",
            }}
          />
          <Text fontWeight="semibold">
            {friendlyTime(new Date(date_created))}
          </Text>
        </Flex>
      </Flex>
      <Heading>{title}</Heading>
      <RenderContent content={content} />
    </Stack>
  );
};

export default BlogSection;
