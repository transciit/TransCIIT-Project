/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { useAuth } from '@/lib/auth';

interface DataProps {
  feeds: any;
  setOpen: any;
  getId: (arg: string) => void;
  getStudentId: (arg: string) => void;
  from: string;
}

const FeedCard = ({ feeds, setOpen, getId, getStudentId, from }: DataProps) => {
  const { user } = useAuth();
  return (
    <div>
      {feeds?.map((feed) => (
        <div
          key={feed.id}
          className="group mt-5 rounded-lg border border-slate-300 bg-white p-1 hover:cursor-pointer hover:bg-slate-100"
          onClick={() => {
            setOpen(true);
            getId(feed.id);
            getStudentId(feed.student_id);
          }}
        >
          <div className="mb-2 flex justify-start border-t border-gray-100 pt-3">
            <div className="flex w-full flex-row pl-3">
              <div className="flex px-2">
                <div className="h-auto w-auto rounded-full">
                  <span className="inline-block h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-gray-100 object-cover lg:h-12 lg:w-12">
                    <svg
                      className="h-full w-full text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div className="mb-2 ml-4 mt-1 flex flex-col">
                  <div className="text-sm font-medium text-slate-800 lg:text-base">
                    {user.displayName}
                  </div>
                  <div className="flex w-full">
                    <div className="font-base mr-1 cursor-pointer text-xs text-blue-700">
                      {feed.business_name}
                    </div>
                    <div
                      className="hidden
              text-xs text-gray-600 md:flex"
                    >
                      • Sorted by date
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex justify-end pr-5">
              {from.includes('invested') ? (
                <p></p>
              ) : (
                <span className="mr-2 h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-400 px-[7px] pt-2 text-center text-slate-400 transition duration-300 ease-out hover:border-red-500 hover:text-red-500 lg:h-10 lg:w-10 lg:px-[9px] lg:pt-[9px]">
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
              )}
            </div>
          </div>
          <div
            className="m-3 mb-2 px-2 text-lg font-medium text-slate-800 line-clamp-2 hover:line-clamp-none group-hover:cursor-pointer group-hover:text-indigo-500 group-hover:underline md:text-xl lg:line-clamp-1"
            onClick={() => {
              setOpen(true);
              getId(feed.id);
            }}
          >
            {feed.primary_need}
          </div>
          <div className="mt-3 mb-2 flex w-full">
            <div className="ml-5  items-center rounded-md text-sm font-normal text-primary-500">
              {feed.business_focus}
            </div>
          </div>
          <div className="mx-3 mb-3 px-2 text-base text-slate-700 line-clamp-3">
            {feed.primary_gap}
          </div>

          <div className="mx-3 flex justify-start px-2">
            <button
              type="button"
              className="mr-2 mb-2 rounded-full border border-slate-200 bg-slate-100 py-[6px] px-5 text-sm text-slate-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              {feed.area_of_expertise}
            </button>

            {/* {feed.area_of_expertise?.map((item) => (
              <button
                type="button"
                key={item}
                className="mr-2 mb-2 rounded-full border border-slate-200 bg-slate-100 py-[6px] px-5 text-sm text-slate-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                {item}
              </button>
            ))} */}
          </div>

          <div className="relative mx-3 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;
