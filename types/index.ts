import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReadTimeResults } from 'reading-time';

export type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  source: MDXRemoteSerializeResult;
  readingTime: ReadTimeResults;
};

export interface ProjectCategory {
  name: string;
  projects: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export type PhotoData = {
  thumbnail: string;
  original: string;
  date: string;
  location: string;
};

export type PhotoProps = {
  src: string;
  alt: string;
};
