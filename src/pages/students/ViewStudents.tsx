import { Menu } from '@headlessui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

import { Main } from '@/base/Main';
import { db } from '@/config/firebase';
import { Meta } from '@/layouts/Meta';
import fetcher from '@/utils/fetcher';

const ViewStudents = ({ feedDetail }) => {
  const router = useRouter();
  const { data: fetchStudents } = useSWR('/api/students', fetcher);
  const students = fetchStudents?.fetchStudents;
  const handleMatch = async (student) => {
    try {
      const referenceData = doc(db, 'feed', feedDetail[0].id);
      await updateDoc(referenceData, {
        student_id: student,
        matched: true,
      });
      router.push('/matchedprojects');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Main
        meta={
          <Meta
            title="View Students"
            description="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
        }
        name={'entrepreneur'}
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3">
              <div className="col-span-2 grid grid-cols-2">
                <div className="mx-4 max-w-md py-2">
                  <div className="flex">
                    <div className="rounded-lg border border-slate-300">
                      <div className="mx-5 grid grid-cols-4 ">
                        <div>
                          <Menu as="div" className="relative mt-5">
                            <div>
                              <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-16 w-16 rounded-full"
                                  src="#"
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                          </Menu>
                        </div>

                        <div className="col-span-3 ml-3">
                          <div className="mt-5 mb-1 font-inter text-lg font-medium text-slate-700">
                            {students.name}
                          </div>
                          <div className="relative overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <div className="mb-4 text-xs font-normal text-gray-600 line-clamp-2">
                              {students.about_you}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mx-5 mb-2 grid grid-cols-2 justify-start pt-3">
                        <div className="text-sm text-gray-900">
                          {students.area_of_expertise}
                        </div>
                        <div className="mt-1 flex items-end justify-end text-sm text-gray-900"></div>
                      </div>
                      <div className="mx-3 mb-3 flex-1 rounded-lg border bg-indigo-600 p-3 px-2 text-center text-sm hover:bg-indigo-700">
                        <a className="font-bold text-white">Invite to Match</a>
                        <button
                          type="button"
                          onClick={() => {
                            handleMatch(students.id);
                          }}
                          className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
                        >
                          Invite to Match
                        </button>
                      </div>
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
};

export default ViewStudents;
