import BlogSection from "@/components/blogs/blog-section";
import RecentPosts from "@/components/blogs/recent-posts";
import CommonPageHero from "@/components/common/common-page-hero";
import { marginX } from "@/utils/constants";
import { getBlogBySlug } from "@/utils/functions";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const BlogDetails = ({ params: { slug } }: Props) => {
  const blog = getBlogBySlug(slug);
  if (!blog) return notFound();
  return (
    <>
      <CommonPageHero text={blog.title} bgImg="" />

      <Grid
        gap={8}
        gridTemplateColumns="auto 300px"
        marginX={marginX}
        my="6rem"
      >
        <GridItem>
          <BlogSection blog={blog} />
        </GridItem>
        <GridItem>
          <RecentPosts slug={slug} />
        </GridItem>
      </Grid>
    </>
  );
};

export default BlogDetails;
