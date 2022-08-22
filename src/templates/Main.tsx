/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable tailwindcss/no-custom-classname */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React, { Fragment } from 'react';

import { useAuth } from '@/context/AuthContext';

import { AppConfig } from '../utils/AppConfig';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Matched Projects', href: '/matched', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const newLocal_2 =
  'relative flex items-center inline-block h-5 h-full font-black leading-none';
const styling = {
  backgroundImage: "url('/assets/images/bg.png')",
  width: '100%',
  height: '100%',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
};

const Main = (props: IMainProps) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <div style={styling}>
          <header className="relative z-50 h-24 w-full">
            <div className="flex h-7 items-center justify-center bg-indigo-500 text-center">
              <p className=" sm:text-md pr-0 text-xs font-semibold text-gray-50 md:text-sm">
                Get the TransCIIT Mobile App.{' '}
                <span className="text-yellow-400 hover:underline">
                  <Link href="/about">Download Now</Link>
                </span>
              </p>
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
                        <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                          <div className="flex shrink-0 items-center">
                            <Link href={'/'}>
                              <a className={newLocal_2}>
                                <svg
                                  className="h-6 w-auto fill-current text-indigo-500"
                                  viewBox="0 0 194 116"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g fillRule="evenodd">
                                    <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                                    <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
                                  </g>
                                </svg>
                                <span className="text-gray-80 ml-3 font-manrope text-xl font-extrabold">
                                  TransCIIT
                                </span>
                              </a>
                            </Link>
                          </div>
                          <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'text-indigo-600'
                                      : 'text-gray-700 hover:bg-gray-800 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-semibold uppercase'
                                  )}
                                  aria-current={
                                    item.current ? 'page' : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="hidden lg:ml-6 lg:block"></div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                          {user ? (
                            <>
                              <button
                                type="button"
                                className="hidden rounded-full border border-gray-800 p-1 text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 sm:block"
                              >
                                <span className="sr-only">
                                  View notifications
                                </span>
                                <BellIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>

                              <Menu as="div" className="relative ml-3">
                                <div>
                                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">
                                      Open user menu
                                    </span>
                                    <span className="inline-block h-9 w-9 overflow-hidden rounded-full bg-gray-100">
                                      <svg
                                        className="h-full w-full text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                      </svg>
                                    </span>
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
                                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link href="/user">
                                          <a
                                            className={classNames(
                                              active ? 'bg-gray-100' : '',
                                              'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                          >
                                            Your Profile
                                          </a>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                          onClick={() => {
                                            logout();
                                            router.push('/onboarding/signin');
                                          }}
                                        >
                                          Sign out
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </>
                          ) : (
                            <>
                              <a
                                href="#_"
                                className="relative mr-2 hidden py-2 text-sm font-semibold uppercase text-indigo-500 sm:mr-3 md:mt-0 md:pr-5 lg:block"
                              >
                                Login
                              </a>
                              <Menu
                                as="div"
                                className="relative ml-3 block lg:hidden"
                              >
                                <div>
                                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">
                                      Open user menu
                                    </span>
                                    <span className="inline-block h-7 w-7 overflow-hidden rounded-full bg-gray-100 md:h-9 md:w-9">
                                      <svg
                                        className="h-full w-full text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                      </svg>
                                    </span>
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
                                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link href="/user">
                                          <a
                                            className={classNames(
                                              active ? 'bg-gray-100' : '',
                                              'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                          >
                                            Login
                                          </a>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          Sign Up
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                              <a
                                href="#_"
                                className="leading-none relative z-40 inline-block hidden w-auto rounded bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase text-white shadow-md transition-all duration-300 hover:shadow-xl sm:w-full lg:block"
                              >
                                Sign up
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                      <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                              'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </header>

          <div className="mx-auto px-7">
            <div className="content py-5 text-xl">{props.children}</div>
          </div>
        </div>

        <div className="mx-auto px-6 md:max-w-screen-xl">
          <footer className="border-t border-gray-200 bg-white px-4 pt-12 pb-8 text-white">
            <div className="container mx-auto flex max-w-6xl flex-col justify-between overflow-hidden px-4 lg:flex-row">
              <div className="mr-4 w-full pl-12 text-left sm:pl-0 sm:text-center lg:w-1/4 lg:text-left">
                <Link href="/">
                  <a className="flex justify-start text-left sm:justify-center sm:text-center lg:justify-start lg:text-left">
                    <span className="flex items-start sm:items-center">
                      <svg
                        className="h-6 w-auto fill-current text-gray-800"
                        viewBox="0 0 194 116"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fillRule="evenodd">
                          <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                          <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </Link>
                <p className="mt-6 mr-4 font-manrope text-base text-gray-500">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity (TransCIIT) project
                </p>
              </div>
              <div className="mt-6 block w-full pl-10 text-sm sm:flex lg:mt-0 lg:w-3/4">
                <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                  <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                    Services
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Matched Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Entrepreneurs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Academia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
                <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                  <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                    Company
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#_"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
                <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                  <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                    Contact
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
                <div className="flex w-full flex-col text-gray-700">
                  <div className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase text-gray-800 md:mt-0">
                    Follow Us
                  </div>
                  <div className="mt-2 flex justify-start pl-4">
                    <a
                      className="mr-6  flex items-center font-manrope text-gray-600 no-underline hover:text-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                      </svg>
                    </a>
                    <a
                      className="mr-6  flex items-center text-gray-600 no-underline hover:text-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a
                      className=" flex items-center text-gray-600 no-underline hover:text-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="border-t border-gray-300 py-8 text-center text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.title}
            {'. '}{' '}
            <a href="https://transciit.phanuelmutuma.co.ke">
              TransCIIT Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
