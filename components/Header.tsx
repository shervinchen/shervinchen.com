import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
      <Link href="/">
        <a className="inline-flex min-w-fit">
          <Image
            priority
            src="/images/logo.svg"
            height={52}
            width={40}
            alt="Shervin Chen"
          />
        </a>
      </Link>
      <nav className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-4">
        <Link href="/posts">
          <a className="text-[#4B5563]">Posts</a>
        </Link>
        <Link href="/projects">
          <a className="text-[#4B5563]">Projects</a>
        </Link>
        <Link href="/photos">
          <a className="text-[#4B5563]">Photos</a>
        </Link>
        <a className="inline-flex min-w-fit">
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
  );
}
