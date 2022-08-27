import Link from 'next/link';
import React from 'react';

const AddSkills = () => (
  <div>
    <div className="relative justify-center ">
      <div className="rounded-lg border border-slate-300 bg-gray-50 p-5">
        <div className="mt-3 mb-1 px-4 text-center font-inter text-2xl font-medium text-slate-700">
          Update your Skill Set
        </div>
        <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
          <div className="mb-4 text-xs font-normal text-gray-600">
            Click update Skills Link to Setup
          </div>
        </div>
        <div className="relative mx-3 flex-1 items-center rounded-lg p-4 px-2 text-center text-base hover:underline">
          <Link href="/skills">
            <a className="font-bold text-green-500 "> Update Your Skillset</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AddSkills;
