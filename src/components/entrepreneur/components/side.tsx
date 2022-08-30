import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

export const Side = ({ ud }) => {
  return (
    <div className="mx-4 max-w-sm overflow-hidden rounded-lg shadow-sm">
      <div className="flex">
        <div className="rounded-lg border border-slate-300 bg-slate-100 p-1">
          <Menu as="div" className="relative mt-6 flex justify-center">
            <div>
              <Image
                src={
                  ud !== undefined
                    ? ud[0].profile
                    : '/assets/images/placeholder.png'
                }
                alt="Picture of the author"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
          </Menu>
          <div className="mt-3 mb-1 px-4 text-center font-inter text-lg font-medium text-slate-700">
            {`${ud[0].firstName} ${ud[0].lastName}`}
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-gray-600 line-clamp-4">
              {ud[0].about}
            </div>
          </div>
          <div className="mx-3 mb-3 flex-1 rounded-lg border p-4 px-2 text-center text-sm">
            <Link href="/user">
              <a className="font-bold text-indigo-500"> View Profile</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="mt-5 flex-1 rounded-lg border border-slate-300 p-4 ">
          <h2 className="ml-2 px-4 text-sm font-semibold text-indigo-400">
            Show more
          </h2>
        </div>
      </div>
    </div>
  );
};
