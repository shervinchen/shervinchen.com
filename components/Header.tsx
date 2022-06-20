import Image from 'next/image';
import Link from 'next/link';

import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
      <Link href="/">
        <a className="inline-flex min-w-fit">
          <div data-hide-on-theme="light">
            <Image
              priority
              src="/images/logo-dark.svg"
              height={52}
              width={40}
              alt="Shervin Chen"
            />
          </div>
          <div data-hide-on-theme="dark">
            <Image
              priority
              src="/images/logo.svg"
              height={52}
              width={40}
              alt="Shervin Chen"
            />
          </div>
        </a>
      </Link>
      <nav className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-4">
        <Link href="/posts">
          <a className="text-gray-600 dark:text-gray-300">Posts</a>
        </Link>
        <Link href="/tags">
          <a className="text-gray-600 dark:text-gray-300">Tags</a>
        </Link>
        <Link href="/projects">
          <a className="text-gray-600 dark:text-gray-300">Projects</a>
        </Link>
        <Link href="/photos">
          <a className="text-gray-600 dark:text-gray-300">Photos</a>
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
