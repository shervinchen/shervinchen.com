import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comment() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="shervinchen/shervinchen.com"
      repoId="R_kgDOHCyJYw"
      category="Announcements"
      categoryId="DIC_kwDOHCyJY84CP6t0"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
