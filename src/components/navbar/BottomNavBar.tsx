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
      <header className="relative z-50 w-full">
        <>
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
                          <Link
                            href={"/"}
                            className="relative flex h-full items-center"
                          >
                            <span className="ml-3  text-xl font-extrabold text-gray-700">
                              TransCIIT
                            </span>
                          </Link>
                        </div>
                        <div className="hidden items-center pl-3 lg:flex">
                          <div className="flex items-center space-x-2">
                            {!user ? (
                              navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
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
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                      item.id === currentTab
                                        ? " bg-slate-600 text-white hover:bg-slate-500 py-1.5"
                                        : "text-gray-700 hover:bg-slate-600 hover:text-white",
                                      "px-3 py-1 rounded-md text-sm font-medium"
                                    )}
                                    aria-current={
                                      item.id === currentTab
                                        ? "page"
                                        : undefined
                                    }
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {!user && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                          <div className="w-full text-gray-600 lg:w-auto lg:pr-3 lg:pt-0">
                            <div className="flex flex-col gap-6 truncate font-medium tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                              <div className="hidden rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-600 transition lg:block lg:text-xs">
                                <span>
                                  Welcome to TransCIIT, Sign in to proceed
                                </span>
                              </div>
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
                      )}
                    </div>
                  </div>

                  <Disclosure.Panel className="hidden">
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
                            <Link
                              key={item.name}
                              href={item.href}
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
