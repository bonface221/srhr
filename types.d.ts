interface Partner {
  slug: string;
  name: string;
  image: string;
  link: string;
  description?: string;
}

interface Programme {
  slug: string;
  title: string;
  content: string;
  programme_images: {
    directus_files_id: string;
  }[];
}

interface Blog {
  slug: string;
  title: string;
  date_created: string;
  thumbnail: string;
  excerpt?: string;
  content?: strings;
}

interface Homepage {
  home_blogs: Blog[];
}

interface Team {
  name: string;
  position: string;
  bio: string;
  profile_pic: string;
}

type FormResponse = {
  status: number;
  body: {
    message: string;
  };
};
