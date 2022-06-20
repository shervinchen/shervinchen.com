import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { getTags } from '../lib/getTags';

const TagsPage: NextPage<{
  tags: string[];
}> = ({ tags }) => {
  return (
    <Layout>
      <Head>
        <title>Tags</title>
        <meta name="title" content="Tags" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content="Tags" />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content="Tags" />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Tags</h1>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`}>
            <a className="bg-gray-200 text-gray-400 hover:text-gray-800 dark:bg-gray-400 dark:text-gray-100 dark:hover:text-gray-800 rounded-md px-2 cursor-pointer">
              {tag}
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps = async () => {
  const tags = getTags();
  return {
    props: {
      tags,
    },
  };
};
