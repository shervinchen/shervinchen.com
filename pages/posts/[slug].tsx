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
      </Head>
      <h1 className="text-[32px] mb-4 font-extrabold">{post.title}</h1>
      <div className="mb-8">
        <time className="text-base text-[#718096]">
          {formatDate(post.date)}
        </time>
      </div>
      <article className="prose">
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
