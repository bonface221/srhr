import { CMS_URL } from "@/config";
import { createDirectus, rest } from "@directus/sdk";

export type Programme = {
  title: string;
  slug: string;
  content: string;
  programme_images: {
    directus_files_id: string;
  }[];
};

type Schema = {
  programmes: Programme[];
};

const directus = createDirectus<Schema>(CMS_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
