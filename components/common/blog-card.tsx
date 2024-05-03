import { CMS_ASSETS_URL } from "@/config";
import { friendlyTime } from "@/lib/friendly-time";
import { CalendarIcon, UserIcon } from "@/utils/icons";

import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  const { title, slug, excerpt, date_created, thumbnail } = blog;
  return (
    <Stack bg="brand.white" borderRadius="xl" overflow="hidden" h="fit-content">
      <Box h="20rem">
        <Image
          src={`${CMS_ASSETS_URL}/${thumbnail}`}
          alt={title}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack gap={4} p={3} flex={1}>
        <Flex gap={2}>
          <Flex align="center" gap={1}>
            <Box as={UserIcon} color="brand.main" boxSize={5} />
            <Text>By srhr</Text>
          </Flex>
          |
          <Flex gap={1} align="center">
            <Box as={CalendarIcon} boxSize={5} color="brand.main" />
            <Text>{friendlyTime(new Date(date_created))}</Text>
          </Flex>
        </Flex>
        <Heading size="md">{title}</Heading> <Text>{excerpt}</Text>
        <Button
          w="fit-content"
          borderRadius="20px"
          size="sm"
          mt="auto"
          bg="brand.main"
          color="brand.white"
          _hover={{
            bg: "brand.red",
          }}
        >
          <Link href={`/blogs/${slug}`}>Read More</Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
