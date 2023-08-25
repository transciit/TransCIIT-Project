/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

import type { GetStaticProps } from "next";

import { Main } from "@/base/Main";
import Article from "@/components/matched/Article";
import type { Projects } from "@/interfaces/projects";
import { Meta } from "@/layouts/Meta";
import { matchedProjectData } from "@/utils/matchedProjectData";

type Props = {
  items: Projects[];
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
      name={"matched"}
    >
      <div className="relative w-full items-center justify-center overflow-x-hidden lg:py-20 xl:pb-6 xl:pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Matched Projects
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
  const items: Projects[] = matchedProjectData;
  return { props: { items } };
};

// eslint-disable-next-line no-lone-blocks
{
  /* {data?.map(
              (project: {
                id?: any;
                b_id?: string | undefined;
                b_name?: string | undefined;
                b_focus?: string | undefined;
                b_image?: string | undefined;
                b_need?: string | undefined;
                s_name?: string | undefined;
                s_expertise?: string | undefined;
              }) => (
                <Article key={project.id} item={project} />
              )
            )} */
}
