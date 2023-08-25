import { useUser } from "@clerk/nextjs";
import { Menu } from "@headlessui/react";
import Image from "next/image";

export const Side = () => {
  const { user } = useUser();

  return (
    <div className="mx-4 mt-3 max-w-xl overflow-hidden rounded-lg">
      <div className="flex w-full">
        <div className="w-full rounded-lg border border-slate-300 bg-slate-100 p-1">
          <Menu as="div" className="relative mt-6 flex justify-center">
            <div>
              <Image
                src={
                  user?.imageUrl !== undefined
                    ? user?.imageUrl
                    : "/assets/images/placeholder.png"
                }
                alt="Picture of the author"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
          </Menu>
          <div className="mb-1 mt-3 px-4 text-center font-inter text-lg font-medium text-slate-700">
            {user?.fullName}
          </div>
          <div className="relative mx-5 mb-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 line-clamp-4 text-xs font-normal text-gray-600">
              {user?.primaryEmailAddress?.emailAddress}
            </div>
          </div>
          {/* <div className="mx-3 mb-3 flex-1 rounded-lg border p-4 px-2 text-center text-sm">
            <Link href="/user">
              <a className="font-bold text-indigo-500"> View Profile</a>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="flex">
        <div className="mt-5 w-full flex-1 items-center rounded-lg border border-slate-300 p-4 text-center">
          <h2 className="ml-2 text-sm font-semibold text-gray-500">
            TransCIIT Project
          </h2>
        </div>
      </div>
    </div>
  );
};
