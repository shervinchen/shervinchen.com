import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Masonry from 'react-masonry-css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import Layout from '../components/Layout';
import { PhotoData, PhotoProps } from '../types';
import { getPhotos } from '../lib/getPhotos';

const PhotosPage: NextPage<{
  photosData: PhotoData[];
  photosProps: PhotoProps[];
}> = ({ photosData, photosProps }) => {
  return (
    <Layout>
      <Head>
        <title>Photos</title>
        <meta name="title" content="Posts" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content="Photos" />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content="Photos" />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Photos</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        Here are some of the photos I took during the travel.
      </p>
      <div>
        <Masonry
          breakpointCols={{ default: 3, 768: 2, 640: 1 }}
          className="photos-grid"
          columnClassName="photos-grid_column"
        >
          {photosData.map((photoData, index) => {
            return (
              <PhotoProvider
                key={index}
                overlayRender={() => {
                  return (
                    <div className="absolute left-0 bottom-0 p-2 w-full min-h-24 text-sm text-center text-slate-300 z-50 bg-black/50">
                      <p>Location: {photosData[index].location}</p>
                      <p>Date: {photosData[index].date}</p>
                    </div>
                  );
                }}
              >
                <PhotoView src={photoData.original}>
                  <div>
                    <Image
                      {...photosProps[index]}
                      alt={photoData.location}
                      placeholder="blur"
                    />
                  </div>
                </PhotoView>
              </PhotoProvider>
            );
          })}
        </Masonry>
      </div>
    </Layout>
  );
};

export default PhotosPage;

export const getStaticProps: GetStaticProps = async () => {
  const result = await getPhotos();
  const { photosData, photosProps } = result;

  return {
    props: {
      photosData,
      photosProps,
    },
  };
};
