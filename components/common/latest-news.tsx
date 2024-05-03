import { marginX } from "@/utils/constants";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import BlogCard from "./blog-card";
import MainHeading from "./main-heading";

const LatestNews = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <Stack marginX={marginX} my="4rem">
      <MainHeading text="Latest Stories and News" />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt="2rem">
        {blogs.map((d, i) => (
          <BlogCard key={i} blog={d} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default LatestNews;
