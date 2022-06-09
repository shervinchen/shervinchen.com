import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { ProjectCategory } from '../types';
import { getProjectCategories } from '../lib/getProjects';

const ProjectsPage: NextPage<{
  projectCategories: ProjectCategory[];
}> = ({ projectCategories }) => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta name="title" content="Posts" />
        <meta name="description" content="Shervin Chen's personal website" />
        <meta property="og:title" content="Projects" />
        <meta
          property="og:description"
          content="Shervin Chen's personal website"
        />
        <meta name="twitter:title" content="Projects" />
        <meta
          name="twitter:description"
          content="Shervin Chen's personal website"
        />
      </Head>
      <h1 className="text-[32px] mb-8 font-extrabold">Projects</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        {"Here are some of the projects I've worked on."}
      </p>
      <div className="flex flex-col gap-y-8">
        {projectCategories.map(
          (projectCategory: ProjectCategory, categoryIndex) => {
            return (
              <section key={categoryIndex}>
                <h2 className="text-gray-900 dark:text-gray-100 mb-4">
                  {projectCategory.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {projectCategory.projects.map((project, projectIndex) => {
                    return (
                      <a
                        className="flex items-center"
                        href=""
                        key={projectIndex}
                      >
                        <div className="flex items-center p-4 w-full h-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50">
                          <div className="w-[30px] h-[30px] bg-[#C4C4C4] text-gray-500 dark:text-gray-300 mr-4">
                            {/* <Image
                              priority
                              src="/images/projects/.svg"
                              height={30}
                              width={30}
                              alt="project logo"
                            /> */}
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1">{project.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const result = getProjectCategories();
  const { projectCategories } = result;

  return {
    props: {
      projectCategories,
    },
  };
};
