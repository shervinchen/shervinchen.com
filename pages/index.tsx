import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Layout from '../components/Layout';
import { getAbout } from '../lib/about';

interface AboutData {
  source: MDXRemoteSerializeResult;
}

const Home: NextPage<AboutData> = ({ source }) => {
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
  const { content } = await getAbout();
  const mdxSource = await serialize(content);
  return {
    props: {
      source: mdxSource,
    },
  };
};

export default Home;
