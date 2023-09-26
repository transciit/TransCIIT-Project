/* eslint-disable tailwindcss/no-custom-classname */
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";

export const EmptyCard = () => (
  <div>
    <div className="relative mt-5 justify-center">
      <div className="flex flex-col justify-center rounded-lg p-10 text-center">
        <ExclamationCircleIcon
          className="h-8 w-8 items-center self-center"
          aria-hidden="true"
        />
        <div className="mb-1 mt-3 px-4 text-center font-inter text-2xl font-semibold text-slate-700">
          No data at this time
        </div>
        <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
          <div className="text-grey-600 mb-4 text-xs font-normal">
            Check back later or try again
          </div>
        </div>
      </div>
    </div>
  </div>
);
