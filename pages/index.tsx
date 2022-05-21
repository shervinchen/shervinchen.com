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
      </Head>
      <div className="prose">
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
