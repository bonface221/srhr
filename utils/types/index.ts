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

export interface Team {
  name: string;
  img: string;
  role: string;
  content: string;
}
