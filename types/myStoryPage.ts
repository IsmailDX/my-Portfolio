import { PortableTextBlock } from "sanity";

export type myStoryPage = {
  _id: string;
  _createdAt: string;
  name: string;
  language: string;
  colorMode: string;
  image: string;
  blurURL: string;
  video: string;
  header: string;
  content: PortableTextBlock[];
  type: string;
};
