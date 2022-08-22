/* eslint-disable no-console */
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { db } from '@/config/firebase';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import { Onboarding } from '@/templates/Onboarding';

export default function SignIn() {
  const [isToggledOn, setToggle] = useState(false);
  const newLocal =
    'focus:shadow-outline mt-10 flex w-full items-center justify-center rounded-lg bg-slate-500 py-4 font-semibold tracking-wide text-gray-100';

  const newLocal2 =
    'focus:shadow-outline mt-10 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-900 focus:outline-none';

  const [data, setData] = useState({
    type: '',
  });

  const { user } = useAuth();
  const router = useRouter();

  const savetoDb = async (e: any) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        name: user.displayName,
        type: data.type,
      });
      router.push('/onboarding/account');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Onboarding
      metaOnboard={
        <Meta title="About You" description="Tell Us about Yourself" />
      }
    >
      <div className="">
        <a href="#">
          <img src="/favicon.ico" alt="icon" className="mx-auto h-12" />
        </a>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl font-extrabold xl:text-3xl">
            Tell us about yourself
          </h1>
          <div className="mt-8 w-full flex-1">
            <form className="mx-auto max-w-xl" onSubmit={savetoDb}>
              <h3 className="mb-5 text-lg font-medium text-gray-500 dark:text-white">
                This will help us setup your account type
              </h3>
              <ul className="mt-10 grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="entrepreneur"
                    name="yourself"
                    value="entrepreneur"
                    className="peer hidden"
                    onChange={(e: any) => {
                      setData({ ...data, type: e.target.value });
                      setToggle(true);
                    }}
                  />
                  <label
                    htmlFor="entrepreneur"
                    className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:bg-gray-100 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
                  >
                    <div className="block">
                      <div className="w-full text-base">I am an</div>
                      <div className="w-full text-lg font-semibold">
                        Entrepreneur
                      </div>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="ml-3 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="student"
                    name="yourself"
                    value="student"
                    className="peer hidden"
                    onChange={(e: any) => {
                      setData({ ...data, type: e.target.value });
                      setToggle(true);
                    }}
                  />
                  <label
                    htmlFor="student"
                    className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:bg-gray-100 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
                  >
                    <div className="block">
                      <div className="w-full text-base">I am a</div>
                      <div className="w-full text-lg font-semibold">
                        Student
                      </div>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="ml-3 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </label>
                </li>
              </ul>

              <button
                type="submit"
                className={isToggledOn ? newLocal2 : newLocal}
                disabled={!isToggledOn}
              >
                <span className="ml-3">Account Details</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Onboarding>
  );
}
