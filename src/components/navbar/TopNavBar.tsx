/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-nested-ternary */
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Menu, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Matched Projects", href: "/matched", current: false },
  {
    name: "Blogs",
    href: "/blogs",
    current: false,
  },
  { name: "Contact", href: "/contact", current: false },
];

interface Props {
  currentTab: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const BottomNavBar = ({ currentTab }: Props) => {
  const { user } = useUser();

  return (
    <Popover className="">
      <>
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-1.5 sm:px-3.5 ">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffc2db] to-[#bab7ff] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffbcd8] to-[#d5d2ff] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="flex w-full items-center justify-between gap-x-3 gap-y-2 px-10">
            <div className="-my-2 -mr-2 flex justify-start md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-gray-100 hover:text-gray-500">
                <span className="sr-only">Open menu</span>
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden justify-start space-x-5 md:flex "
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.name === currentTab
                      ? " bg-gray-100 text-slate-50 font-medium"
                      : "text-gray-700 hover:font-semibold",
                    "px-3 py-1 rounded-md text-sm"
                  )}
                  aria-current={item.name === currentTab ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </Popover.Group>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
              <div className="w-full text-gray-600 lg:w-auto lg:pr-3">
                <div className="flex flex-col gap-6 truncate font-medium tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {user ? (
                    user?.unsafeMetadata?.data?.["accountType"] ===
                    "entrepreneur" ? (
                      <div className="hidden rounded-full bg-orange-50 px-4 py-1.5 text-orange-600 transition lg:block lg:text-xs">
                        <span>Signed in as an Entrepreneur</span>
                      </div>
                    ) : (
                      <div className="hidden rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-600 transition lg:block lg:text-xs">
                        <span>You&apos;re signed in as a Student</span>
                      </div>
                    )
                  ) : (
                    <div className="hidden rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-600 transition lg:block lg:text-xs">
                      <span>Welcome to TransCIIT, Sign in to proceed</span>
                    </div>
                  )}
                </div>
              </div>
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton
                  appearance={{
                    variables: {
                      fontFamily: "Inter",
                    },
                    userProfile: {
                      variables: { fontFamily: "Inter" },
                    },
                  }}
                />
              </SignedIn>
              {!user && (
                <Link
                  href="/sign-in"
                  className="relative flex h-9 w-full items-center justify-center rounded-full bg-gray-900 px-4 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:bg-gray-800 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold  text-white">
                    Get Started
                  </span>
                </Link>
              )}
              <div className="pl-5">
                <Link href="https://github.com/transciit/TransCIIT-Project">
                  <Image
                    src="/assets/images/github-mark.png"
                    alt="Github"
                    width={30}
                    height={30}
                    className="opacity-80 hover:opacity-100"
                  />
                </Link>
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 hidden">
                <div>
                  <Menu.Button className="flex rounded-full text-sm ">
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-9 w-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {/* <img className="h-9 w-9 rounded-full" src="" alt="" /> */}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Popover>
  );
};

export default BottomNavBar;
