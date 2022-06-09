import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center gap-x-4 mb-5">
        <a
          href="https://github.com/shervinchen"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-fit"
        >
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/github-dark.svg"
              height={24}
              width={24}
              alt="github"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt="github"
            />
          </div>
        </a>
        <a
          href="https://twitter.com/shervinchen"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-fit"
        >
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/twitter-dark.svg"
              height={24}
              width={24}
              alt="twitter"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/twitter.svg"
              height={24}
              width={24}
              alt="twitter"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/shervinchen"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-fit"
        >
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/instagram-dark.svg"
              height={24}
              width={24}
              alt="instagram"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/instagram.svg"
              height={24}
              width={24}
              alt="instagram"
            />
          </div>
        </a>
        <a
          href="mailto:shervinchen@gmail.com"
          className="inline-flex min-w-fit"
        >
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/mail-dark.svg"
              height={24}
              width={24}
              alt="mail"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/mail.svg"
              height={24}
              width={24}
              alt="mail"
            />
          </div>
        </a>
        <a href="/feed.xml" className="inline-flex min-w-fit">
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/rss-dark.svg"
              height={24}
              width={24}
              alt="rss"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/rss.svg"
              height={24}
              width={24}
              alt="rss"
            />
          </div>
        </a>
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
        © {new Date().getFullYear()} Shervin Chen.
      </div>
    </footer>
  );
}
