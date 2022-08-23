/* eslint-disable tailwindcss/no-custom-classname */
// import FeedCard from './feedcard';
import Link from 'next/link';
import React from 'react';

import { Main } from '@/base/Main';
import { Meta } from '@/layouts/Meta';

import PersonalCard from './components/personal';
import ProfileCard from './components/profile';

export default function UserProfile() {
  return (
    <>
      <Main
        meta={
          <Meta
            title="User Profile"
            description="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
        }
        name={'user'}
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3">
              <div className="sticky top-6 hidden py-5 md:block lg:block">
                <div className="mx-4 max-w-sm overflow-hidden rounded-lg shadow-sm">
                  <div className="flex">
                    <div className="flex-1 rounded-xl border border-slate-300 bg-slate-100 p-1">
                      <div>
                        <div className="mt-1 flex flex-col items-center">
                          <div className="mx-6 my-3 font-inter text-lg font-bold text-slate-700">
                            Profile Photo
                          </div>
                          <span className="inline-block h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="leading-4 mt-4 rounded-xl bg-indigo-400 px-9 py-2 text-sm font-medium text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Change
                          </button>

                          <div className="relative mx-5 mt-3 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
                            <div className="text-grey-600 text-xs font-normal">
                              Update your profile picture
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                      <div className="mx-6 mt-3 font-inter text-lg font-bold text-slate-700">
                        John Doe
                      </div>
                      <div className="mx-6 mb-4 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                        Full name
                      </div>
                      <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                      <div className="mx-6 mt-3 font-inter text-sm text-slate-700">
                        This information will be displayed publicly so be
                        careful what you share.
                      </div>
                      <div className="mx-6 mb-4 mt-2 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                        Description
                      </div>
                      <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                      <div className="mx-6 mt-3 font-inter text-sm text-slate-700">
                        user@email.com
                      </div>
                      <div className="mx-6 mb-4 mt-2 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                        Email
                      </div>
                      <div className="borderp-4 mx-3 mb-3 flex-1 rounded-lg px-2 text-center text-sm">
                        <Link href="#">
                          <a className="font-bold text-indigo-500">
                            {' '}
                            Edit Profile
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mt-5 flex-1 rounded-xl border border-slate-300 p-4 ">
                      <h2 className="ml-2 w-48 px-4 text-sm font-semibold text-indigo-400">
                        Show activity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 py-5">
                <PersonalCard />
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
