import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-screen-sm	min-h-screen mx-auto py-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Shervin Chen" />
        <meta property="og:url" content="https://shervinchen.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shervinchen.com/logo.png" />
        <meta property="og:site_name" content="Shervin Chen" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@shervinchen" />
        <meta name="twitter:site" content="@shervinchen" />
        <meta
          property="twitter:image"
          content="https://shervinchen.com/logo.png"
        />
      </Head>
      <Header />
      <main className="grow py-8">{children}</main>
      <Footer />
    </div>
  );
}
