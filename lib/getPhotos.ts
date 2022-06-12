import fs from 'fs';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

import { PhotoData } from '../types';

const directory = path.join(process.cwd(), 'data');

export async function getPhotos() {
  const filePath = path.join(directory, 'photos.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const photosData = JSON.parse(jsonData).sort((a: PhotoData, b: PhotoData) =>
    new Date(b.date) > new Date(a.date) ? 1 : -1
  );

  const photosProps = await Promise.all(
    photosData.map(async (photoData: PhotoData) => {
      const { thumbnail } = photoData;
      const { base64, img } = await getPlaiceholder(thumbnail);

      return {
        ...img,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    photosProps,
    photosData,
  };
}
