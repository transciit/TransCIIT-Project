/* eslint-disable tailwindcss/no-custom-classname */
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  feedDetail: any;
  student: any;
};

const DescriptionCard = ({ feedDetail, student }: Props) => {
  const router = useRouter();

  const handleMatch = async () => {
    try {
      router.push(
        {
          pathname: '/terms/entrepreneur',
          query: { id: feedDetail[0].id, uid: student[0].id },
        },
        '/terms/entrepreneur'
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="top-6">
        <div className="col-span-3 mb-28 grid rounded-xl border border-slate-300 bg-white p-1  md:mb-24 lg:col-span-2 lg:mb-0">
          <div className="mt-10 sm:mt-0">
            <div className="grid-cols-3 divide-x md:grid">
              <div className="col-span-2 mx-5 grid-cols-4 md:grid">
                <div>
                  <Menu
                    as="div"
                    className="relative mt-2 flex justify-center md:mt-5"
                  >
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          src={
                            student[0].profile !== undefined
                              ? student[0].profile
                              : '/assets/images/placeholder.png'
                          }
                          alt="Picture of the Student"
                          width={120}
                          height={120}
                          className="rounded-full"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>

                <div className="col-span-3 mt-4 text-center md:text-start">
                  <div className="my-1 font-playfair text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    {`${student[0].firstName} ${student[0].lastName}`}
                  </div>
                  <div className="mb-1 items-center rounded-md text-base font-normal text-primary-500">
                    {student[0].email}
                  </div>
                  <div className="relative mt-2 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400 sm:mt-5">
                    <button
                      type="button"
                      className=" rounded-full border border-indigo-500 py-[2px] px-4 text-xs text-indigo-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      {student[0].area_of_expertise}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mr-2 mt-7 rounded-xl border border-slate-300 sm:mt-5">
                <div className="mx-5 my-2">
                  <button
                    type="button"
                    className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
                    onClick={() => {
                      handleMatch();
                    }}
                  >
                    Invite to Match
                  </button>

                  <button
                    type="button"
                    className="mb-2 w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Save to Favorites
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="mt-3 mb-2 flex w-full"></div>
                <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <div className="text-grey-600 mb-4 text-xs font-normal">
                    More Details
                  </div>
                </div>
                <div className="mx-3 mb-3 px-2 text-base text-slate-800 line-clamp-6">
                  {student[0].about}
                </div>

                <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <div className="text-grey-600 mb-4 text-xs font-normal">
                    Area of Expertise
                  </div>
                </div>
                <div className="mx-3 flex justify-start px-2">
                  <button
                    type="button"
                    className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    {student[0].area_of_expertise}
                  </button>
                  {/* {feedDetails.area_of_expertise?.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        {item}
                      </button>
                    ))} */}
                </div>

                <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                <div className="grid grid-cols-2 divide-x">
                  <div>
                    <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <div className="text-grey-600 mb-4 text-xs font-normal">
                        Website
                      </div>
                    </div>
                    <div className="mx-3 mb-3 px-2 text-base text-slate-800">
                      {student[0].website}
                    </div>
                  </div>
                  <div>
                    <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <div className="text-grey-600 mb-4  text-xs font-normal">
                        Rate
                      </div>
                    </div>
                    <div className="mx-3 px-2">
                      <button
                        type="button"
                        className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        {student[0].rate}
                      </button>
                      {/* {feedDetails.secondary_expertise?.map((item) => (
                          <button
                            type="button"
                            key={item}
                            className="mr-2 mb-2 rounded-full border border-slate-300 bg-slate-100 py-[6px] px-5 text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                          >
                            {item}
                          </button>
                        ))} */}
                    </div>
                  </div>
                </div>

                <div className="relative mx-3 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                  <div className="text-grey-600 ml-3 mb-4 text-xs font-normal">
                    <span className="mr-2 inline-flex items-center rounded-full bg-green-100 p-1 text-base font-semibold text-green-800 dark:bg-gray-700 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </span>
                    Student is verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-3 hidden p-1 lg:hidden">
          <div className="mt-10 rounded-xl border border-slate-300 bg-gray-100 sm:mt-0 ">
            <div className="mx-5 mt-5">
              <button
                type="button"
                className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
              >
                Match Project
              </button>

              <button
                type="button"
                className="mb-2 w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Talk to Student
              </button>
            </div>
            <div className="ml-5 mb-3 items-center rounded-md text-base font-medium text-primary-600">
              Contact Support for help!
            </div>

            <div>
              <div>
                <div className="m-3 mb-2 px-2 text-xl font-medium text-slate-900"></div>
                <div className="mt-3 mb-2 flex w-full"></div>
                <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                <div>
                  <div className="relative mx-5 items-center self-center overflow-hidden  text-gray-900 focus-within:text-gray-400">
                    <div className="text-grey-600 mb-4 text-xs font-normal">
                      Business Help Required
                    </div>
                  </div>
                  <div className="mx-3 mb-3 px-2 text-base text-indigo-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 hidden rounded-xl border border-slate-300 bg-gray-100 sm:mt-0 lg:hidden">
          <div className="mx-5 mt-5 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none">
            <button
              type="button"
              className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
            >
              Match Project
            </button>
            <button
              type="button"
              className="mb-2 w-full rounded-full border border-indigo-500 bg-white px-5 py-2.5 text-base font-semibold text-indigo-600 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:ml-2"
            >
              Talk to Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescriptionCard;
