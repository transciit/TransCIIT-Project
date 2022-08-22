/* eslint-disable tailwindcss/no-custom-classname */
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import FeedCard from './feedcard';

export default function index() {
  return (
    <>
      <Main
        meta={
          <Meta
            title="TransCIIT Project"
            description="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
        }
        name={'feed'}
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
              <div className="col-span-3 py-5">
                <div className="top-6">
                  <div className="rounded-lg border border-slate-300 bg-white p-1">
                    <div className="font-playfair mt-3 mb-1 px-5 text-xl font-black text-slate-700 sm:text-3xl">
                      Good Morning, User
                    </div>
                    <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <div className="text-grey-600 mb-4 text-xs font-normal">
                        All listed Projects are certified and Approved by
                        TransCIIT
                      </div>
                    </div>
                  </div>
                </div>
                <FeedCard />
              </div>
              <div className="sticky top-6 hidden py-5 md:block lg:block">
                <div className="mx-4 max-w-sm overflow-hidden rounded-lg shadow-sm">
                  <div className="flex">
                    <div className="rounded-lg border border-slate-300 bg-slate-100 p-1">
                      <Menu
                        as="div"
                        className="relative mt-3 flex justify-center"
                      >
                        <div>
                          <Menu.Button className="flex justify-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                      </Menu>
                      <div className="mt-3 mb-1 px-4 text-center font-inter text-lg font-medium text-slate-700">
                        John Doe
                      </div>
                      <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
                        <div className="text-grey-600 mb-4 text-xs font-normal">
                          All listed Projects are certified and Approved by
                          TransCIIT
                        </div>
                      </div>
                      <div className="borderp-4 mx-3 mb-3 flex-1 rounded-lg px-2 text-center text-sm">
                        <Link href="#">
                          <a className="font-bold text-indigo-500">
                            {' '}
                            View Profile
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mt-5 flex-1 rounded-lg border border-slate-300 p-4 ">
                      <h2 className="ml-2 w-48 px-4 text-sm font-semibold text-indigo-400">
                        Show more
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
