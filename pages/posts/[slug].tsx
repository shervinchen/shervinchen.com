import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Layout from '../../components/Layout';
import { getPostPaths, getPost } from '../../lib/getPost';
import { Post } from '../../types';
import { formatDate } from '../../utils';
import Comment from '../../components/Comment';

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <h1 className="text-[32px] mb-4 font-extrabold">{post.title}</h1>
      <div className="flex flex-wrap gap-3 mb-4">
        {post.tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`}>
            <a className="bg-gray-200 text-gray-400 hover:text-gray-800 dark:bg-gray-400 dark:text-gray-100 dark:hover:text-gray-800 rounded-md px-2 cursor-pointer">
              {tag}
            </a>
          </Link>
        ))}
      </div>
      <div className="text-base text-gray-500 dark:text-gray-300 mb-8">
        <time>{formatDate(post.date)}</time>
        <span> · </span>
        <span>{`${Math.round(post.readingTime.minutes)}min`}</span>
      </div>
      <article className="prose dark:prose-dark mb-8">
        <MDXRemote {...post.source} />
      </article>
      <Comment />
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
};
