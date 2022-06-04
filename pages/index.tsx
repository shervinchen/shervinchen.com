import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Layout from '../components/Layout';
import { getIndex } from '../lib/getIndex';

interface AboutData {
  source: MDXRemoteSerializeResult;
}

const HomePage: NextPage<AboutData> = ({ source }) => {
  return (
    <Layout>
      <Head>
        <title>Shervin Chen</title>
        <meta name="title" content="Shervin Chen" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content="Shervin Chen" />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content="Shervin Chen" />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <div className="prose dark:prose-dark">
        <MDXRemote {...source} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { source } = await getIndex();

  return {
    props: {
      source,
    },
  };
};

export default HomePage;
