/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import React from 'react';

const FeedCard = () => (
  <div>
    <div className="mt-5 rounded-lg border border-slate-400 p-1 drop-shadow-sm hover:bg-slate-100">
      <div className="mb-2 flex justify-start border-t border-gray-100 pt-3">
        <div className="flex w-full flex-row pl-3">
          <div className="flex px-2">
            <div className="h-auto w-auto rounded-full">
              <img
                className="h-12 w-12 cursor-pointer rounded-full object-cover shadow"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"
              />
            </div>
            <div className="mb-2 ml-4 mt-1 flex flex-col">
              <div className="text-base font-medium text-gray-700">
                Jane Doe
              </div>
              <div className="flex w-full">
                <div className="font-base mr-1 cursor-pointer text-xs text-blue-700">
                  UX Design
                </div>
                <div
                  className="hidden
              text-xs text-gray-600 md:flex"
                >
                  • 1 day ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-1 flex w-full justify-end pr-5">
          <span className="mr-2 h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-400 px-[9px] pt-[9px] text-center text-slate-400 transition duration-300 ease-out hover:border-red-500 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="20px"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="m-3 mb-2 px-2 text-xl font-medium text-slate-700">
        Dummy text of the project name
      </div>
      <div className="mt-3 mb-2 flex w-full border-t border-gray-100">
        <div className="ml-5  items-center rounded-md text-xs font-normal text-primary-500">
          Agriculture and Technology
        </div>
      </div>
      <div className="mx-3 mb-3 px-2 text-sm text-slate-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys standard dummy
        text ever since the 1500...
        <span className="font-bold text-primary-500">
          <Link href="#">
            <a> More</a>
          </Link>
        </span>
      </div>

      <div className="mx-3 flex justify-start border-t border-gray-100 px-2">
        <button
          type="button"
          className="mr-2 mb-2 rounded-full border border-gray-200 bg-gray-100 py-[6px] px-5 text-sm text-slate-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Technology
        </button>
        <button
          type="button"
          className="mr-2 mb-2 rounded-full border border-gray-200 bg-gray-100 py-[6px] px-5 text-sm text-slate-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Business
        </button>
      </div>

      <div className="relative mx-3 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
        <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="text-grey-600 ml-3 mb-4 text-xs font-normal">
          <span className="mr-2 inline-flex items-center rounded-full bg-green-100 p-1 text-sm font-semibold text-green-800 dark:bg-gray-700 dark:text-gray-300">
            <svg
              aria-hidden="true"
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Icon description</span>
          </span>
          This project is approved for investing
        </div>
      </div>
    </div>
  </div>
);

export default FeedCard;
