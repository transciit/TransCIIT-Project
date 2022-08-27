/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import React from 'react';

const EmptyCard = () => (
  <div>
    <div className="relative mt-5 justify-center">
      <div className="rounded-lg border border-slate-300 p-10">
        <div className="mt-3 mb-1 px-4 text-center font-inter text-2xl font-medium text-slate-700">
          No feeds at this time
        </div>
        <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
          <div className="text-grey-600 mb-4 text-xs font-normal">
            Check back later or try again
          </div>
        </div>
        <div className="borderp-4 mx-3 mb-3 flex-1 rounded-lg px-2 text-center text-sm">
          <Link href="/projects/matched">
            <a className="font-bold text-indigo-500"> Go to Matched projects</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default EmptyCard;