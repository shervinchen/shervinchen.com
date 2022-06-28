import type { NextPage } from 'next';
import Head from 'next/head';
import Comment from '../components/Comment';

import Layout from '../components/Layout';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="title" content="Contact" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content="Contact" />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Contact</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        Welcome to my personal website, if you have any suggestions or
        questions, you can leave a comment below.
      </p>
      <Comment />
    </Layout>
  );
};

export default ContactPage;
