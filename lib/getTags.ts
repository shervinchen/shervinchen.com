import { getPosts } from './getPosts';

export function getTags() {
  const posts = getPosts();
  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()));

  return tags;
}
