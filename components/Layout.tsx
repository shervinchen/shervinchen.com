import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
      <header className="flex items-center justify-between">
        <Link href="/">
          <a className="inline-flex">
            <Image
              priority
              src="/images/logo.svg"
              className=""
              height={52}
              width={40}
              alt="Shervin Chen"
            />
          </a>
        </Link>
        <nav className="flex items-center gap-x-4">
          <Link href="/posts">
            <a className="text-[#4B5563]">Posts</a>
          </Link>
          <Link href="/projects">
            <a className="text-[#4B5563]">Projects</a>
          </Link>
          <Link href="/photos">
            <a className="text-[#4B5563]">Photos</a>
          </Link>
          <a className="inline-flex">
            <Image
              priority
              src="/images/sun.svg"
              height={24}
              width={24}
              alt="sun"
            />
          </a>
        </nav>
      </header>
      <main className="grow py-8">{children}</main>
      <footer>
        <div className="flex justify-center gap-x-4 mb-5">
          <a
            href="https://github.com/shervinchen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt="github"
            />
          </a>
          <a
            href="https://twitter.com/shervinchen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Image
              priority
              src="/images/twitter.svg"
              height={24}
              width={24}
              alt="twitter"
            />
          </a>
          <a
            href="https://instagram.com/shervinchen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Image
              priority
              src="/images/instagram.svg"
              height={24}
              width={24}
              alt="instagram"
            />
          </a>
          <a href="mailto:shervinchen@gmail.com" className="inline-flex">
            <Image
              priority
              src="/images/mail.svg"
              height={24}
              width={24}
              alt="mail"
            />
          </a>
          <a href="/feed.xml" className="inline-flex">
            <Image
              priority
              src="/images/rss.svg"
              height={24}
              width={24}
              alt="rss"
            />
          </a>
        </div>
        <div className="text-sm text-[#313233] text-center">
          © {new Date().getFullYear()} Shervin Chen.
        </div>
      </footer>
    </div>
  );
}
