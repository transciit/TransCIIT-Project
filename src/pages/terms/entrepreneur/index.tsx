/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable tailwindcss/no-custom-classname */
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import Loading from '@/components/loading';
import { db } from '@/config/firebase';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { isEmpty } from '@/validator';

const Index = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [done, setDone] = useState(false);

  const [userData, setUserData] = useState({
    cost: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (isEmpty(userData.cost) || isEmpty(userData.duration)) {
      setDone(false);
    } else {
      setDone(true);
    }
  };
  // changables
  const where = 'student';
  const { data: feedDetails } = useSWR(
    `/api/feeds/${router?.query?.id}`,
    fetcher
  );
  const { data: userDetails } = useSWR(`/api/users/${user?.uid}`, fetcher);
  const ud = userDetails?.userDetails;
  const feedDetail = feedDetails?.feedD;

  const handleInvite = async () => {
    try {
      await addDoc(collection(db, 'invites'), {
        primary_need: feedDetail[0].primary_need,
        primary_gap: feedDetail[0].primary_gap,
        area_of_expertise: feedDetail[0].area_of_expertise,
        business_focus: feedDetail[0].business_focus,
        business_name: feedDetail[0].business_name,
        cost: userData.cost,
        duration: userData.duration,
        matched: false,
        entrepreneur_id: user.uid,
        entrepreneur_name: `${ud[0].firstName} ${ud[0].lastName}`,
        entrepreneur_profile: ud[0].profile,
        entrepreneur_email: ud[0].email,
        student_id: router?.query?.uid,
        project_id: feedDetail[0].id,
      });

      await addDoc(collection(db, 'mail'), {
        to: router?.query?.email,
        template: {
          name: 'invites',
          data: {
            main: `You have been invited to match with ${ud[0].firstName} ${ud[0].lastName}`,
            subject: `${ud[0].firstName} ${ud[0].lastName} has invited you to  ${feedDetail[0].primary_need}`,
            body: 'You can proceed by visiting the link below to take you to the TransCIIT Dashboard. Signin with your TransCIIT account. If you do not want to match, just ignore this email',
          },
        },
      });
      router.push('/invites/entrepreneur');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Send Invite | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard={where}
      >
        <div className="my-8 block">
          {feedDetail?.length ? (
            <>
              {feedDetail?.map((feedDetails) => (
                <div className="top-6" key={feedDetails.id}>
                  <div className="mb-28 grid rounded-xl border border-slate-300 bg-white p-1 shadow-lg md:mb-24 lg:col-span-2 lg:mb-0">
                    <div className="mt-10 sm:mt-0">
                      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400 sm:mt-5">
                        <div className="text-grey-600 text-xs font-normal">
                          {feedDetails.business_focus}
                        </div>
                      </div>
                      <div className="mt-1 mb-3 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
                        {feedDetails.business_name}
                      </div>
                      <div className="ml-5 mb-7 items-center rounded-md text-base font-normal text-primary-500">
                        By {user.displayName}
                      </div>

                      <div>
                        <div>
                          <div className="m-3 mb-2 px-2 text-base font-medium text-slate-900 sm:text-xl">
                            {feedDetails.primary_need}
                          </div>
                          <div className="mt-3 mb-2 flex w-full"></div>
                          <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <div className="text-grey-600 mb-4 text-xs font-normal">
                              More Details
                            </div>
                          </div>
                          <div className="mx-3 mb-3 px-2 text-base text-slate-800 line-clamp-3">
                            {feedDetails.primary_gap}
                          </div>

                          <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <div className="text-grey-600 mb-4 text-xs font-normal">
                              Area of Expertise Needed
                            </div>
                          </div>
                          <div className="mx-3 flex justify-start px-2">
                            <button
                              type="button"
                              className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                              {feedDetails.area_of_expertise}
                            </button>
                            {/* {feedDetails.area_of_expertise?.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        {item}
                      </button>
                    ))} */}
                          </div>

                          <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                          <div className="grid grid-cols-2 divide-x">
                            <div>
                              <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                                <div className="text-grey-600 mb-4 text-xs font-normal">
                                  Secondary Business Need
                                </div>
                              </div>
                              <div className="mx-3 mb-3 px-2 text-base text-slate-800">
                                {feedDetails.secondary_need}
                              </div>
                            </div>
                            <div>
                              <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                                <div className="text-grey-600 mb-4  text-xs font-normal">
                                  Secondary Area of Expertise
                                </div>
                              </div>
                              <div className="mx-3 px-2">
                                <button
                                  type="button"
                                  className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                                >
                                  {feedDetails.secondary_expertise}
                                </button>
                                {/* {feedDetails.secondary_expertise?.map((item) => (
                          <button
                            type="button"
                            key={item}
                            className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                          >
                            {item}
                          </button>
                        ))} */}
                              </div>
                            </div>
                          </div>

                          <div className="relative mx-3 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                            <div className="text-grey-600 ml-3 mb-4 text-xs font-normal">
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
                                <span className="sr-only">
                                  Icon description
                                </span>
                              </span>
                              This project is approved for matching
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="my-6 rounded-xl border border-slate-300 bg-white p-1 shadow-xl">
                <div className="mt-10 sm:mt-0">
                  <div className="mt-3 mb-1 px-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    Your Terms
                  </div>
                  <div className="relative mx-5 items-center self-center overflow-hidden text-slate-600 focus-within:text-gray-400">
                    <div className="mb-4 text-xs font-normal text-gray-600">
                      This information will be visible by the student invited
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <form>
                      <div className="sm:overflow-hidden">
                        <div className="space-y-6 px-4 py-2 sm:p-5">
                          <div>
                            <div>
                              <div className="mr-2">
                                <label
                                  htmlFor="company-website"
                                  className="block text-base font-medium text-slate-900"
                                >
                                  Duration of the Project
                                </label>
                                <div className="mt-1 flex rounded-md">
                                  <div className="flex">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                                      Estimated Duration
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="duration"
                                    id="company-website"
                                    value={userData.duration}
                                    onChange={handleChange}
                                    className="block w-full flex-1 rounded-none rounded-r-lg border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                    placeholder=" "
                                    required
                                  />
                                </div>
                                <div className="mt-2 text-xs font-normal text-slate-700">
                                  Specify the estimated duration of the Project.
                                </div>
                              </div>
                            </div>
                            <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                            <div>
                              <div className="mr-2">
                                <label
                                  htmlFor="company-website"
                                  className="block text-base font-medium text-slate-900"
                                >
                                  How much will you be paying?
                                </label>
                                <div className="mt-1 flex rounded-md">
                                  <div className="flex">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="cost"
                                    id="company-website"
                                    value={userData.cost}
                                    onChange={handleChange}
                                    className="block w-full flex-1 rounded-r-lg border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                    placeholder="0"
                                    required
                                  />
                                </div>
                                <div className="mt-2 text-xs font-normal text-slate-700">
                                  If you don&apos;t have an amount you can type
                                  0.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-5 text-xs font-normal text-gray-600">
                            This information will be visible by the student
                            invited. By proceeding you agree with TransCIIT
                            Project{' '}
                            <a
                              href="#"
                              className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                              terms and conditions
                            </a>
                            .
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="block rounded-xl sm:mt-0">
                  {done ? (
                    <div className="m-5 grid grid-cols-4">
                      <button
                        onClick={handleInvite}
                        className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
                      >
                        Send Invite
                      </button>
                      <button
                        type="button"
                        className="mb-2 w-full rounded-full border border-gray-400 bg-white px-5 py-2.5 text-base font-semibold text-indigo-600 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:ml-2"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </DashBoard>
    </>
  );
};

export default Index;
