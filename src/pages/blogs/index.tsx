/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

import type { GetStaticProps } from 'next';

import Article from '@/components/blog/Article';
import type { Blogs } from '@/interfaces/blog';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { blogData } from '@/utils/blogData';

type Props = {
  items: Blogs[];
};

export default function Matched({ items }: Props) {
  return (
    <Main
      meta={
        <Meta
          title="Matched Projects | TransCIIT Project"
          description="Matching the needs of climate entrepreneurs with the skills of master's students"
        />
      }
      name={'blogs'}
    >
      <div className="relative w-full items-center justify-center overflow-x-hidden lg:py-20 xl:pt-10 xl:pb-6">
        <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 lg:mb-20">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Our Blogs
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Transforming Climate Innovation Ecosystems through Inclusive
              Transdisciplinarity (TransCIIT) project
            </p>
          </div>
          <Article items={items} />
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Blogs[] = blogData;
  return { props: { items } };
};
