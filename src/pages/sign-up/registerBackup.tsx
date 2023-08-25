import Link from "next/link";
import React from "react";

import { Main } from "@/base/Onboarding";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Register = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Register - ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div>
        <div className="flex h-screen items-center justify-center gap-72 bg-gray-200">
          <div className="hidden items-center justify-around lg:flex">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800"></h1>
              <p className="mt-1 text-slate-600"></p>
              <div className="mb-2 mt-4 block w-28 rounded-2xl py-2 font-bold text-indigo-800"></div>
            </div>
          </div>
          <div className="3xl:w-4/12 mx-4 w-full rounded-lg bg-white shadow md:mx-0 md:mt-0 md:w-7/12 xl:w-5/12">
            <div className="space-y-4 p-6 sm:px-8 sm:py-10 xl:space-y-6">
              <h1 className="text-2xl font-bold tracking-tighter text-slate-600">
                Create your Evi-Pol account
              </h1>
              <div className="items-center gap-2 pt-2 md:flex">
                <button
                  type="button"
                  className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    className="-ml-1 mr-2 h-5 w-5"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="mb-2 inline-flex w-full items-center  justify-center rounded-lg border border-gray-200 bg-white py-2.5  text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-1/2"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  Sign in with Apple
                </button>
              </div>
              <hr></hr>
              <form className="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-slate-500 sm:text-sm"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-slate-50 p-2.5 text-gray-900 dark:border-slate-600 dark:text-white dark:placeholder:text-slate-400 dark:focus:ring-slate-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-slate-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-start pt-4">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border border-gray-600 bg-gray-50 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-600">
                      I accept the{" "}
                      <a
                        className="font-medium text-gray-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-900"
                >
                  Create an account
                </button>
                <p className="text-center text-sm font-light text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-slate-700 hover:underline "
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Register;
