import { BlogListing } from "@/components/blogs";
import CommonPageHero from "@/components/common/common-page-hero";

const Blogs = () => {
  return (
    <>
      <CommonPageHero text="Our Blogs" bgImg="" />
      <BlogListing />
    </>
  );
};

export default Blogs;
