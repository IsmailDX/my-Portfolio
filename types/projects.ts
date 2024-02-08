import { PortableTextBlock } from "sanity";

export type projects = {
  _id: string;
  _createdAt: string;
  projectTitle: string;
  image: string;
  blurURL: string;
  description: PortableTextBlock[];
  technologies: {
    tech: string;
    color: string;
  }[];
  webLink: string;
  language: string;
  order: number;
};
