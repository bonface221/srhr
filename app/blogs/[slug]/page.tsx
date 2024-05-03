import BlogSection from "@/components/blogs/blog-section";
import RecentPosts from "@/components/blogs/recent-posts";
import CommonPageHero from "@/components/common/common-page-hero";
import { CMS_URL } from "@/config";
import { marginX } from "@/utils/constants";
import { Grid, GridItem } from "@chakra-ui/react";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const BlogDetails = async ({ params: { slug } }: Props) => {
  const blog = await getSingleBlog(slug);

  return (
    <>
      <CommonPageHero text={blog.title} bgImg="" />

      <Grid
        gap={8}
        gridTemplateColumns={{ base: "1fr", md: "1fr 300px" }}
        marginX={marginX}
        mt={{ base: "1rem", md: "6rem" }}
        mb="6rem"
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

async function getSingleBlog(slug: string) {
  try {
    const res = await fetch(getUrl(slug), {
      cache: "no-cache",
    });
    const blog: {
      data: Blog;
    } = await res.json();

    return blog.data;
  } catch (error) {
    notFound();
  }
}

function getUrl(slug: string) {
  return (
    CMS_URL +
    "/items" +
    "/blogs" +
    "/" +
    slug +
    "?fields=slug,title,thumbnail,excerpt,date_created,content" +
    "&status=published"
  );
}
