import { Menu } from '@headlessui/react';
import { doc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { db } from '@/config/firebase';

const ViewStudents = ({ feedDetail, student }) => {
  const router = useRouter();

  const handleMatch = async (studentss) => {
    try {
      const referenceData = doc(db, 'feed', feedDetail[0].id);
      await updateDoc(referenceData, {
        student_id: studentss,
        matched: true,
      });
      router.push('/mp/entrepreneur');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {student?.map((students) => (
          <div
            className="max-w-xl rounded-lg border border-slate-300"
            key={students.id}
          >
            <div>
              <div>
                <div className="mx-5 grid grid-cols-4 ">
                  <div>
                    <Menu as="div" className="relative mt-5">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            src={
                              students?.profile !== undefined
                                ? students.profile
                                : '/assets/images/placeholder.png'
                            }
                            alt="Picture of the Student"
                            width={64}
                            height={64}
                            className="rounded-full"
                          />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>

                  <div className="col-span-3">
                    <div className="mt-5 mb-1 font-inter text-lg font-medium text-slate-700">
                      {`${students.firstName} ${students.lastName}`}
                    </div>
                    <div className="relative overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <div className="mb-4 text-xs font-normal text-gray-600 line-clamp-3">
                        {students.about}
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
              </div>
              <div>
                <div className="bottom-0 px-5">
                  <button
                    type="button"
                    onClick={() => {
                      handleMatch(students.id);
                    }}
                    className="mb-2 w-full rounded-full bg-indigo-800 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
                  >
                    Invite to Match
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewStudents;
