import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { getPosts } from '../lib/getPosts';
import { Post } from '../types';
import { formatDate } from '../utils';

const PostsPage: NextPage<{
  posts: Post[];
}> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Posts - Shervin Chen</title>
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Posts</h1>
      <ul className="flex flex-col gap-y-8">
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2 className="text-xl font-semibold text-[#1A202C] mb-3">
                  {post.title}
                </h2>
              </a>
            </Link>
            <p className="text-base text-[#313233] mb-3">{post.description}</p>
            <div>
              <time className="text-base text-[#718096]">
                {formatDate(post.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
