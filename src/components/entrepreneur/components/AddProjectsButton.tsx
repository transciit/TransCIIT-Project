import Link from 'next/link';
import React from 'react';

const AddProjectButton = () => (
  <div>
    <div className="flex w-full justify-end">
      <Link href="/project">
        <a className="rounded-lg bg-gray-800 px-5 py-2.5 text-xs font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2 md:text-sm">
          Add Project
        </a>
      </Link>
    </div>
  </div>
);

export default AddProjectButton;
