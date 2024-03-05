export interface Partner {
  name: string;
  slug: string;
  description: string;
  image: string;
  link: string;
}

export interface Blog {
  title: string;
  slug: string;
  date: string;
  desc: string;
  content: string;
  thumbnail?: string;
}

export interface Programme {
  title: string;
  slug: string;
  desc: string;
  image: string;
}
