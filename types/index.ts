import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReadTimeResults } from 'reading-time';

export type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tag: string;
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
