import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../common/blog-card";

import { latestNewsData, marginX } from "@/utils/constants";

const BlogListing = () => {
  return (
    <Box marginX={marginX} my="4rem">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {latestNewsData.map((d, i) => (
          <BlogCard key={i} blog={d} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BlogListing;
