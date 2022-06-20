import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { postFilePaths, POSTS_PATH } from '../utils/path';
import { Post } from '../types';

export function getPosts() {
  const posts = postFilePaths.map((filePath) => {
    const id = filePath.replace(/\.mdx?$/, '');
    const fullPath = path.join(POSTS_PATH, filePath);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(source);
    data.date = data.date.toString();

    return {
      id,
      ...data,
    } as Post;
  });
  return posts.sort((a, b) => {
    return new Date(b.date) > new Date(a.date) ? 1 : -1;
  });
}
