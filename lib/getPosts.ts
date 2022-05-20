import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Post } from '../types';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export function getPosts() {
  const posts = postFilePaths.map((filePath) => {
    const id = filePath.replace(/\.mdx?$/, '');
    const fullPath = path.join(POSTS_PATH, filePath);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(source);

    return {
      id,
      ...data,
    } as Post;
  });
  return posts.sort((a, b) => {
    return new Date(b.date) > new Date(a.date) ? 1 : -1;
  });
}
