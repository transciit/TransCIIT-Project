import Image from "next/image";
import React from "react";

import type { Projects } from "../../interfaces/projects";

type Props = {
  items: Projects[];
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Article = ({ items }: Props) => (
  <div className="grid gap-8 lg:grid-cols-3">
    {items.map((item) => (
      <article
        key={item.b_id}
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="mb-5 flex items-center justify-between text-gray-500">
          <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5  text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
            <svg
              className="mr-1 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            {item.b_focus}
          </span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#" className="">
            {item.b_name}
          </a>
        </h2>
        <p className="mb-5 text-lg font-light text-gray-700 dark:text-gray-800">
          {item.b_need}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/images/1.png"
              alt={item.b_name}
              width={30}
              height={30}
              className="h-7 w-7 rounded-lg"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
            <span className="text-base font-medium dark:text-white ">
              {item.s_name}
            </span>
          </div>
          {/* <Link
            href="/projects/[id]"
            as={`/projects/${item.b_id}`}
            className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </div>
      </article>
    ))}
  </div>
);

export default Article;
