import Link from 'next/link';
import React from 'react';

const AddSkills = () => (
  <div>
    <div className="flex w-full justify-end">
      <Link href="/skills">
        <a className="mr-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          {' '}
          Update Your Skillset
        </a>
      </Link>
    </div>
  </div>
);

export default AddSkills;
