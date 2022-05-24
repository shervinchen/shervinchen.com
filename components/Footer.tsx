import Image from 'next/image';

export default function Footer() {
  return (
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
  );
}
