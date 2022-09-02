/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React from 'react';

interface DataProps {
  feeds: any;
  setOpen: any;
  getId: (arg: string) => void;
  getStudentId: (arg: string) => void;
  from: string;
}

const FeedCard = ({ feeds, setOpen, getId, getStudentId, from }: DataProps) => {
  return (
    <div>
      {feeds?.map((feed) => (
        <div
          key={feed.id}
          className="group mt-5 rounded-lg border border-slate-300 bg-white p-1 hover:cursor-pointer hover:bg-slate-100"
          onClick={() => {
            setOpen(true);
            getId(feed.project_id);
            getStudentId(feed.student_id);
          }}
        >
          <div className="mb-2 flex justify-start border-t border-gray-100 pt-3">
            <div className="flex w-full flex-row pl-3">
              <div className="flex px-2">
                <div className="h-auto w-auto rounded-full">
                  <Image
                    src={
                      feed.entrepreneur_profile !== undefined
                        ? feed.entrepreneur_profile
                        : '/assets/images/placeholder.png'
                    }
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="mb-2 ml-4 mt-1 flex flex-col">
                  <div className="text-sm font-medium text-slate-800 lg:text-base">
                    {feed.entrepreneur_name}
                  </div>
                  <div className="flex w-full">
                    <div className="font-base mr-1 cursor-pointer text-xs text-blue-700">
                      {feed.business_name}
                    </div>
                    <div
                      className="hidden
              text-xs text-gray-600 md:flex"
                    >
                      • {feed.entrepreneur_email}
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
              getId(feed.project_id);
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
