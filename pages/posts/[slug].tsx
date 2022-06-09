import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';

import Layout from '../../components/Layout';
import { getPostPaths, getPost } from '../../lib/getPost';
import { Post } from '../../types';
import { formatDate } from '../../utils';

interface Params extends ParsedUrlQuery {
  slug: string;
}

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
      <div className="text-base text-gray-500 dark:text-gray-300 mb-8">
        <time>{formatDate(post.date)}</time>
        <span> · </span>
        <span>{`${Math.round(post.readingTime.minutes)}min`}</span>
      </div>
      <article className="prose dark:prose-dark">
        <MDXRemote {...post.source} />
      </article>
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const paths = getPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
  };
};
