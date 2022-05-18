import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Shervin Chen</title>
      </Head>
      <h1 className="text-[32px] text-[#111827] mb-5">Hey, Welcome</h1>
    </Layout>
  );
};

export default Home;
