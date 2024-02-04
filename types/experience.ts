import { PortableTextBlock } from "sanity";

export type experience = {
  _id: string;
  _createdAt: string;
  jobTitle: string;
  company: string;
  country: string;
  employment_status: string;
  employment_period: string;
  responsibilities: PortableTextBlock[];
  language: string;
  order: number;
};
