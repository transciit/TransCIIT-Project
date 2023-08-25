import { ClipboardListIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const AddProjects = () => (
  <div>
    <div className="relative mt-5 justify-center">
      <div className="flex flex-col  justify-center rounded-lg p-10 text-center">
        <ClipboardListIcon
          className="h-8 w-8 items-center self-center"
          aria-hidden="true"
        />
        <div className="mb-1 mt-3 px-4 text-center font-inter text-2xl font-semibold text-slate-700">
          You do not have any projects
        </div>
        <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
          <div className="mb-4 text-xs font-normal text-gray-600">
            Click the Add Projects Link to Start Adding Projects
          </div>
        </div>
        <div className="mx-3 mb-3 items-center rounded-lg  text-center text-base hover:underline">
          <Link href="/project">
            <a className="font-bold text-green-500 "> Add project</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AddProjects;
