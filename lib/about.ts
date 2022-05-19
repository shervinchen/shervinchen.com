import fs from 'fs';
import path from 'path';

const directory = path.join(process.cwd(), 'pages');

export async function getAbout() {
  const fullPath = path.join(directory, 'about.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return {
    content: fileContents,
  };
}
