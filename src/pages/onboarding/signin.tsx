/* eslint-disable no-console */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Onboarding } from '@/base/Onboarding';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';

export default function SignIn() {
  const newLocal =
    'focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-900 focus:outline-none';
  const socialButtons = [
    {
      iconImageSrc: '/assets/images/google-icon.png',
      text: 'Sign In With Google',
      url: 'https://google.com',
    },
  ];
  const router = useRouter();
  const { signin } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signin(data.email, data.password);
      router.push('/redirecting');
      // const ref = doc(db, 'users', user.uid);

      // const docSnap = await getDoc(ref);

      // if (docSnap.exists()) {
      //   if (docSnap.data().type.includes('student')) {
      //     router.push('/students');
      //   } else {
      //     router.push('/entrepreneur');
      //   }
      // }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Onboarding
      metaOnboard={<Meta title="Log In" description="Log in to TransCIIT" />}
    >
      <a href="#">
        <img src="/favicon.ico" alt="icon" className="mx-auto h-12" />
      </a>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl font-extrabold xl:text-3xl">
          TransCIIT Project
        </h1>
        <div className="mt-8 w-full flex-1">
          <div className="flex flex-col items-center">
            {socialButtons.map((socialButton, index) => (
              <a
                key={index}
                href={socialButton.url}
                className="w-full max-w-xl font-semibold rounded-lg py-3 border text-gray-900  hocus:bg-gray-200 hocus:border-gray-400 border-slate-300 flex items-center justify-center transition-all duration-300 outline-none shadow-outline text-sm mt-5 first:mt-0`}"
              >
                <span className="rounded-full bg-white p-2">
                  <img src={socialButton.iconImageSrc} className="w-4" alt="" />
                </span>
                <span className="ml-4 text-gray-700">{socialButton.text}</span>
              </a>
            ))}
          </div>
          <div className="relative my-12 border-b text-center">
            <div className="absolute inset-x-0 top-1/2 inline-block -translate-y-1/2 px-2 text-sm font-medium tracking-wide text-gray-900 hover:bg-white">
              Or Sign in with your e-mail
            </div>
          </div>
          <form className="mx-auto max-w-xl" onSubmit={handleLogin}>
            <div className="relative mt-5">
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e: any) =>
                  setData({ ...data, email: e.target.value })
                }
                className="peer block w-full appearance-none rounded-lg border border-slate-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-700 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Email
              </label>
            </div>

            <div className="relative mt-5">
              <input
                type="password"
                id="password"
                className="peer block w-full appearance-none rounded-lg border border-slate-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                placeholder=" "
                value={data.password}
                onChange={(e: any) =>
                  setData({ ...data, password: e.target.value })
                }
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-700 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Password
              </label>
            </div>
            <button type="submit" className={newLocal}>
              <span className="ml-3">Log In</span>
            </button>

            <p className="mt-8 text-center text-sm text-gray-600">
              I don&apos;t have an account?{' '}
              <Link href="/onboarding/signup">
                <a className="border-b border-dotted border-indigo-600">
                  Sign Up
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Onboarding>
  );
}
