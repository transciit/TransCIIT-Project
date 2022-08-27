import Link from 'next/link';
import React from 'react';

const AddProjects = () => (
  <div>
    <div className="relative mt-5 justify-center">
      <div className="rounded-lg border border-slate-300 p-10">
        <div className="mt-3 mb-1 px-4 text-center font-inter text-2xl font-medium text-slate-700">
          You do not have and Projects Yet
        </div>
        <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
          <div className="mb-4 text-xs font-normal text-gray-600">
            Click the Add Projects Link to Start Adding Projects
          </div>
        </div>
        <div className="relative mx-3 mb-3  flex-1 items-center rounded-lg p-4 px-2 text-center text-base hover:underline">
          <Link href="/project">
            <a className="font-bold text-green-500 "> Add projects</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AddProjects;
