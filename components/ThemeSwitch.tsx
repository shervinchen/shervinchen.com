import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <a
      className="inline-flex min-w-fit cursor-pointer"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <Image
          priority
          src="/images/sun.svg"
          height={24}
          width={24}
          alt="sun"
        />
      ) : (
        <Image
          priority
          src="/images/moon.svg"
          height={24}
          width={24}
          alt="moon"
        />
      )}
    </a>
  );
}
