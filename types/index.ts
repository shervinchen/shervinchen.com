import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  source: MDXRemoteSerializeResult;
};
