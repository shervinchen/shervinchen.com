import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/Layout';
import { getPosts } from '../../lib/getPosts';
import { getTags } from '../../lib/getTags';
import { Post } from '../../types';
import { formatDate } from '../../utils';

const TagPage: NextPage<{
  slug: string;
  posts: Post[];
}> = ({ slug, posts }) => {
  return (
    <Layout>
      <Head>
        <title>Tag: {slug}</title>
        <meta name="title" content={`Tag: ${slug}`} />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content={`Tag: ${slug}`} />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content={`Tag: ${slug}`} />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Tag: {slug}</h1>
      <ul className="flex flex-col gap-y-8">
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <p className="text-base text-gray-800 dark:text-gray-400 mb-3">
              {post.description}
            </p>
            <div>
              <time className="text-base text-gray-500 dark:text-gray-300">
                {formatDate(post.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getPosts().filter((post: Post) => post.tags.includes(slug));

  return {
    props: {
      slug,
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getTags();
  const paths = tags.map((tag: string) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
