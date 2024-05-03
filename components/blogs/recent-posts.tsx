import { CMS_ASSETS_URL, CMS_URL } from "@/config";
import { friendlyTime } from "@/lib/friendly-time";
import { Box, Heading, Image, Stack, Tag } from "@chakra-ui/react";
import Link from "next/link";

const RecentPosts = async ({ slug }: { slug: string }) => {
  const recentBlogs = await getRecentBlogs(slug);

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
                src={`${CMS_ASSETS_URL}/${blog.thumbnail}`}
                alt="blog image placeholder"
              />
              <Tag pos="absolute" colorScheme="blue" left={2} bottom={1}>
                {friendlyTime(new Date(blog.date_created))}
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

async function getRecentBlogs(slug: string) {
  try {
    const res = await fetch(getUrl(slug), {
      cache: "no-cache",
    });
    const data: { data: Blog[] } = await res.json();

    return data.data;
  } catch (e) {
    return [];
  }
}

function getUrl(slug: string) {
  return (
    CMS_URL +
    "/items" +
    "/blogs" +
    "?fields=slug,title,thumbnail,date_created" +
    "&status=published" +
    "&sort=-date_created" +
    "&filter[slug][_neq]=" +
    slug +
    "&limit=3"
  );
}
