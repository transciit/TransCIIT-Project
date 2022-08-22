/* eslint-disable no-console */
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import { Meta } from '@/layouts/Meta';
import { Onboarding } from '@/templates/Onboarding';

export default function SignUp() {
  const newLocal =
    'focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-900 focus:outline-none';
  const socialButtons = [
    {
      iconImageSrc: '/assets/images/google-icon.png',
      text: 'Sign Up With Google',
      url: 'https://google.com',
    },
    {
      iconImageSrc: '/assets/images/twitter-icon.png',
      text: 'Sign Up With Twitter',
      url: 'https://google.com',
    },
  ];
  const { user, signup } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
      Router.push('/onboarding/as');
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  return (
    <Onboarding
      metaOnboard={<Meta title="Sign Up" description="Sign up to TransCIIT" />}
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
              Or Sign up with your e-mail
            </div>
          </div>
          <form className="mx-auto max-w-xl" onSubmit={handleSignup}>
            <div className="relative mt-5">
              <input
                type="email"
                id="email"
                className="peer block w-full appearance-none rounded-lg border border-slate-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                placeholder=" "
                required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
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
                required
                className="peer block w-full appearance-none rounded-lg border border-slate-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                placeholder=" "
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-700 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Password
              </label>
            </div>
            <button type="submit" className={newLocal}>
              <span className="ml-3">Sign Up</span>
            </button>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/onboarding/signin">
                <a className="border-b border-dotted border-indigo-600">
                  Sign In
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Onboarding>
  );
}
