/* eslint-disable tailwindcss/no-custom-classname */
import { Menu } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

interface DataProps {
  students: any;
  fav: boolean;
  getId: (arg: string, arg2: boolean) => void;
  setOpen: any;
  getStudentId: (arg: string) => void;
}

const StudentCard = ({
  students,
  fav,
  getId,
  setOpen,
  getStudentId,
}: DataProps) => {
  const [showSFav, setSShowFav] = useState(fav);

  return (
    <div>
      <div className="group mt-4 rounded-lg border border-slate-300 hover:cursor-pointer hover:bg-slate-100 md:mt-0 ">
        <div>
          <div className="relative">
            <div className="absolute right-0 top-0 mr-5 mt-3">
              {showSFav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-indigo-700"
                  onClick={() => {
                    setSShowFav(false);
                    getId(students.id, false);
                  }}
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 hover:text-indigo-600"
                  onClick={() => {
                    setSShowFav(true);
                    getId(students.id, true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              )}
            </div>
            <div
              className="mx-5 grid grid-cols-4"
              onClick={() => {
                getStudentId(students.id);
                setOpen(true);
              }}
            >
              <div>
                <Menu as="div" className="relative mt-5">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        src={
                          students.profile ||
                          students.profileUrl ||
                          "/assets/images/placeholder.png"
                        }
                        alt="Picture of the Student"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>

              <div className="col-span-3 ml-3">
                <div className="mb-1 mt-5 font-inter text-lg font-medium text-slate-700 group-hover:underline">
                  {students.firstName
                    ? `${students.firstName} ${students.lastName}`
                    : students.name || students.email}
                </div>
                <div className="relative overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <div className="mb-2 line-clamp-2 text-xs font-normal text-gray-600">
                    {students.about || "No bio provided"}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className=" rounded-full border border-indigo-500 px-4 py-[2px] text-xs text-indigo-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    {students.area_of_expertise || "Not Specified"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-5 my-3 grid grid-cols-2 justify-start pt-3">
              <div className="text-sm text-gray-900">
                <div className="text-xs font-normal text-gray-600">
                  <span className="mr-2 inline-flex items-center rounded-full bg-green-100 p-1 text-base font-semibold text-green-800 dark:bg-gray-700 dark:text-gray-300">
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
                  Student is verified
                </div>
              </div>
              <div className="flex items-end justify-end text-xs text-gray-700">
                Rate:
                <span className="ml-1 font-medium text-indigo-700">
                  {students.rate || "Not Specified"}
                </span>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="bottom-0 px-5">
                  <button
                    type="button"
                    onClick={() => {
                      handleMatch(students.id);
                    }}
                    className="mb-2 w-full rounded-full bg-indigo-800 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
                  >
                    Invite to Match
                  </button>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
