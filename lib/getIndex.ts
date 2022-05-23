import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const directory = path.join(process.cwd(), 'data');

export async function getIndex() {
  const fullPath = path.join(directory, 'index.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const mdxSource = await serialize(fileContents);

  return {
    source: mdxSource,
  };
}
