import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-screen-sm	min-h-screen mx-auto py-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:image" content="" />
        <meta name="og:title" content="Shervin Chen" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="grow py-8">{children}</main>
      <Footer />
    </div>
  );
}
