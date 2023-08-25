import type { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { Main } from "@/base/Main";
import type { Blogs } from "@/interfaces/blog";
import { Meta } from "@/layouts/Meta";
import { blogData } from "@/utils/blogData";

type Props = {
  item: Blogs;
  errors?: string;
  items?: Blogs[];
};

const StaticPropsDetail = ({ item, errors, items }: Props) => {
  if (errors) {
    return (
      <section className="flex h-full items-center p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className=" mb-8 text-6xl font-extrabold dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn&asop;t find this page.
            </p>
            <p className="mb-8 mt-4 dark:text-gray-400">{errors}</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded px-8 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title={`${item.bg_title} | TransCIIT Project`}
          description="Matching the needs of climate entrepreneurs with the skills of master's students"
        />
      }
      name={"blogDetails"}
    >
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-16">
        <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl md:tracking-tight">
              {item.bg_title}
            </h1>
            <div className="flex w-full flex-col items-start justify-between dark:text-gray-400 md:flex-row md:items-center">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="h-4 w-4 rounded-full border dark:border-gray-700 dark:bg-gray-500"
                />
                <p className="text-sm"> {item.bg_author}</p>
              </div>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p className=" ">
              <ReactMarkdown>{item.bg_description}</ReactMarkdown>
            </p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap space-x-2 border-t border-dashed py-6 dark:border-gray-400">
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded-sm bg-indigo-400 px-3 py-1 text-lg font-semibold text-white hover:underline"
            >
              {item.bg_title}
            </a>
          </div>
          <div className="mt-5 space-y-2">
            <h4 className="text-lg font-semibold">Other Projects</h4>
            <ul className="ml-4 list-disc">
              {items?.map((itm) => (
                <li key={itm.bg_id}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm text-indigo-400 hover:underline"
                  >
                    {itm.bg_title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on projects
  const paths = blogData.map((item) => ({
    params: { id: item.bg_id.toString() },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = blogData.find((data) => data.bg_id === Number(id));
    const items: Blogs[] = blogData;

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item, items } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
