import { latestNewsData } from "@/utils/constants";
import { Box, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const RecentPosts = ({ slug }: { slug: string }) => {
  const recentBlogs = latestNewsData.filter((blog) => blog.slug !== slug);

  return (
    <Stack gap={6} bg="brand.white" p="1rem" borderRadius="md">
      <Heading as="h3" fontSize="2xl" color="brand.main">
        Recent Posts
      </Heading>

      {recentBlogs.map((blog, i) => (
        <Link href={`/blogs/${blog.slug}`} key={i}>
          <Stack cursor="pointer">
            <Box
              h="100px"
              borderRadius="5px"
              pos="relative"
              overflow="hidden"
              transition=".4s"
            >
              <Image
                h="100%"
                w="100%"
                transition=".4s ease"
                objectFit="cover"
                src={blog.thumbnail}
                alt="blog image placeholder"
              />
              <Tag pos="absolute" colorScheme="blue" left={2} bottom={1}>
                {blog.date}
              </Tag>
            </Box>
            <Heading fontSize="md" fontFamily='"Open sans" san-serif'>
              {blog.title}
            </Heading>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default RecentPosts;
