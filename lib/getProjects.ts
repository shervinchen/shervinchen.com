import fs from 'fs';
import path from 'path';

const directory = path.join(process.cwd(), 'data');

export function getProjectCategories() {
  const filePath = path.join(directory, 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');

  return {
    projectCategories: JSON.parse(jsonData),
  };
}
