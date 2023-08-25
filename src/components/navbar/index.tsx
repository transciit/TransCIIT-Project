/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
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

const entrepreneurs = [
  { name: "My Projects", href: "/entrepreneur", id: "entrepreneurProjects" },
  {
    name: "Invited Projects",
    href: "/invites/entrepreneur",
    id: "entrepreneurInvites",
  },
  {
    name: "Bidded Projects",
    href: "/bids/entrepreneur",
    id: "entrepreneurBids",
  },
  {
    name: "Matched Projects",
    href: "/mp/entrepreneur",
    id: "entrepreneurMatched",
  },
  { name: "Contact", href: "/contact", id: "contact" },
];

const studentNav = [
  { name: "Find Projects", href: "/students", id: "studentProjects" },
  { name: "Bidded Projects", href: "/bids/student", id: "studentBids" },
  { name: "Invited Projects", href: "/invites/student", id: "studentInvites" },
  { name: "Matched Projects", href: "/mp/student", id: "studentMatched" },
  { name: "Contact", href: "/contact", id: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  currentTab: string;
};

const NavBar = ({ currentTab }: Props) => {
  const { user } = useUser();

  return (
    <div>
      <header className="relative z-50 h-24 w-full">
        <>
          <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div
              className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
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
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="text-sm text-gray-900">
                <strong className="font-semibold">Beta Program</strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                This includes fine tuning the site&apos;s content and
                navigation.
              </p>
              <Link href="/contact">
                <a className="flex-none text-xs font-medium">
                  Tell us what you think <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
            <div className="flex flex-1 justify-end">
              <button
                type="button"
                className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              >
                <span className="sr-only">Dismiss</span>
                {/* <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" /> */}
              </button>
            </div>
          </div>

          <div>
            <Disclosure as="nav" className="bg-white">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-1 items-start justify-start space-x-3 divide-x lg:items-stretch">
                        <div className="flex shrink-0 items-center">
                          <Image
                            src={"/assets/images/transciit-logo.png"}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <Link href={"/"}>
                            <a className="relative flex h-full items-center">
                              <span className="ml-3  text-xl font-extrabold text-gray-700">
                                TransCIIT
                              </span>
                            </a>
                          </Link>
                        </div>
                        <div className="hidden items-center pl-3 lg:flex">
                          <div className="flex items-center space-x-2">
                            {!user ? (
                              navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <a
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-700 hover:bg-gray-800 hover:text-white",
                                      "px-3 py-2 rounded-md text-sm font-semibold uppercase"
                                    )}
                                    aria-current={
                                      item.current ? "page" : undefined
                                    }
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              ))
                            ) : (
                              <>
                                {(user?.unsafeMetadata?.data?.[
                                  "accountType"
                                ] === "entrepreneur"
                                  ? entrepreneurs
                                  : studentNav
                                ).map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a
                                      className={classNames(
                                        item.id === currentTab
                                          ? " bg-slate-600 text-white hover:bg-slate-500"
                                          : "text-grey-600 hover:bg-slate-600 hover:text-white",
                                        "px-3 py-1 rounded-md text-sm font-medium"
                                      )}
                                      aria-current={
                                        item.id === currentTab
                                          ? "page"
                                          : undefined
                                      }
                                    >
                                      {item.name}
                                    </a>
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                        <div className="w-full text-gray-600 lg:w-auto lg:pr-3 lg:pt-0">
                          <div className="flex flex-col gap-6 truncate font-medium tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                            {user ? (
                              user?.unsafeMetadata?.data?.["accountType"] ===
                              "entrepreneur" ? (
                                <div className="hidden rounded-full bg-orange-50 px-4 py-1.5 text-orange-600 transition lg:block lg:text-xs">
                                  <span>Signed in as an Entrepreneur</span>
                                </div>
                              ) : (
                                <div className="hidden rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-600 transition lg:block lg:text-xs">
                                  <span>
                                    You&apos;re signed in as a Student
                                  </span>
                                </div>
                              )
                            ) : (
                              <div className="hidden rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-600 transition lg:block lg:text-xs">
                                <span>
                                  Welcome to TransCIIT, Sign in to proceed
                                </span>
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
                          <Link href="/sign-in">
                            <a className="relative flex h-9 w-full items-center justify-center rounded-full bg-gray-900 px-4 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:bg-gray-800 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                              <span className="relative text-sm font-semibold  text-white">
                                Get Started
                              </span>
                            </a>
                          </Link>
                        )}
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

                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {!user ? (
                        navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-700 hover:bg-gray-700 hover:text-white",
                              "block px-3 py-2 rounded-md text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))
                      ) : (
                        <>
                          {(user?.unsafeMetadata?.data?.["accountType"] ===
                          "entrepreneur"
                            ? entrepreneurs
                            : studentNav
                          ).map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                className={classNames(
                                  item.id === currentTab
                                    ? " bg-slate-800 text-white font-medium"
                                    : "text-grey-600 hover:bg-gray-900 hover:text-white",
                                  "px-3 py-1 rounded-md text-sm "
                                )}
                                aria-current={
                                  item.name === currentTab ? "page" : undefined
                                }
                              >
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </>
      </header>
    </div>
  );
};

export default NavBar;
