/* eslint-disable consistent-return */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

import { db } from '@/config/firebase';
import { useAuth } from '@/lib/auth';

const onboard = 'onboard';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Matched Projects', href: '/matched', current: false },
  {
    name: 'Blogs',
    href: '/blogs',
    current: false,
  },
  { name: 'Contact', href: '/contact', current: false },
];

const entrepreneurs = [
  { name: 'My Projects', href: '/entrepreneur', current: false },
  { name: 'Invited Projects', href: '/invites/entrepreneur', current: false },
  { name: 'Bidded Projects', href: '/bids/entrepreneur', current: false },
  { name: 'Matched Projects', href: '/mp/entrepreneur', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const studentNav = [
  { name: 'Find Projects', href: '/students', current: false },
  { name: 'Bidded Projects', href: '/bids/student', current: false },
  { name: 'Invited Projects', href: '/invites/student', current: false },
  { name: 'Matched Projects', href: '/mp/student', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  needs: string;
};

const NavBar = (props: Props) => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState('/assets/images/placeholder.png');
  const [current, setCurrent] = useState('');
  const router = useRouter();
  const getUserFromDb = async () => {
    try {
      if (user) {
        const ref = doc(db, 'users', user?.uid);

        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
          if (docSnap.data().type.includes('student')) {
            setCurrent('student');
          } else {
            setCurrent('entrepreneur');
          }
          if (docSnap.data().profile) {
            setProfile(docSnap.data().profile);
          }
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  getUserFromDb();
  return (
    <div>
      <header className="relative z-50 h-24 w-full">
        {props.needs.includes(onboard) ? (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                <div className="flex shrink-0 items-center">
                  <Link href={'/'}>
                    <a className="relative flex h-full items-center font-black">
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
                      <span className="ml-3 font-manrope text-xl font-extrabold text-gray-800">
                        TransCIIT
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex h-7 items-center justify-center bg-gray-700 text-center">
              <p className=" pr-0 text-xs font-semibold text-gray-50 sm:text-base md:text-sm">
                TRANSCIIT WEBSITE IS STILL IN BETA.{' '}
                <span className="text-yellow-200 hover:underline">
                  <Link href="/about">LEARN MORE</Link>
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
                              <a className="relative flex h-full items-center font-black">
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
                                <span className="ml-3 font-manrope text-xl font-extrabold text-gray-800">
                                  TransCIIT
                                </span>
                              </a>
                            </Link>
                          </div>
                          <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                              {!user ? (
                                navigation.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a
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
                                  </Link>
                                ))
                              ) : (
                                <>
                                  {current === 'entrepreneur'
                                    ? entrepreneurs.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                          <a
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
                                        </Link>
                                      ))
                                    : studentNav.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                          <a
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
                                        </Link>
                                      ))}
                                </>
                              )}
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
                                    <Image
                                      src={profile}
                                      alt="Picture of the author"
                                      width={36}
                                      height={36}
                                      className="rounded-full"
                                    />
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
                                            try {
                                              logout();
                                            } catch (err) {
                                              console.log(err);
                                            } finally {
                                              router.push('/onboarding/signin');
                                            }
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
                                onClick={() => {
                                  router.push('/onboarding/signin');
                                }}
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
                                    <Image
                                      src={profile}
                                      alt="Picture of the author"
                                      width={36}
                                      height={36}
                                      className="rounded-full"
                                    />
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
                                            onClick={() => {
                                              router.push('/onboarding/signin');
                                            }}
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
                                          onClick={() => {
                                            router.push('/onboarding/signup');
                                          }}
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
                                className="relative z-40 hidden w-auto rounded bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase text-white shadow-md transition-all duration-300 hover:shadow-xl sm:w-full lg:block"
                                onClick={() => {
                                  router.push('/onboarding/signup');
                                }}
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
                        {!user ? (
                          navigation.map((item) => (
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
                          ))
                        ) : (
                          <>
                            {current === 'entrepreneur'
                              ? entrepreneurs.map((item) => (
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
                                    aria-current={
                                      item.current ? 'page' : undefined
                                    }
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                ))
                              : studentNav.map((item) => (
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
                                    aria-current={
                                      item.current ? 'page' : undefined
                                    }
                                  >
                                    {item.name}
                                  </Disclosure.Button>
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
        )}
      </header>
    </div>
  );
};

export default NavBar;
// /{navigation.map((item) => (
//   <Disclosure.Button
//     key={item.name}
//     as="a"
//     href={item.href}
//     className={classNames(

//     )}
//     aria-current={item.current ? 'page' : undefined}
//   >
//     {item.name}
//   </Disclosure.Button>
// ))}
