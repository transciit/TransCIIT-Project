/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
import { Menu } from "@headlessui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";

import Loading from "@/components/loading";
import { db } from "@/config/firebase";

type Props = {
  feedDetail: any;
  ud: any;
  feeds: any;
};

const DescriptionCard = ({ feeds, feedDetail, ud }: Props) => {
  const [open, setOpen] = useState(false);

  const handleMatch = async () => {
    try {
      const referenceData = doc(db, "bids", feeds[0].id);
      await deleteDoc(referenceData);
      router.push("/students");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {feedDetail?.map((feedDetails) => (
        <div className="top-6 grid grid-cols-3" key={feedDetails.id}>
          <div className="col-span-3 mb-28 grid rounded-xl border border-slate-400 bg-white p-1 shadow-lg md:mb-24 lg:col-span-2 lg:mb-0">
            <div className="top-6 hidden md:block lg:block">
              <div className="mx-5 overflow-hidden rounded-lg  shadow-sm">
                <div>
                  <div className="mb-2 mt-4 text-base font-bold text-indigo-600 sm:text-xl">
                    My Terms
                  </div>
                  <div className="grid grid-cols-2 divide-x rounded-lg border border-slate-500 bg-slate-100 p-1 text-center">
                    <div className="my-2">
                      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                        <div className="text-sm font-normal text-indigo-600">
                          Duration
                        </div>
                      </div>
                      <div className="mx-3 line-clamp-3 px-2 text-lg font-bold text-indigo-800">
                        {feeds[0].duration}
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                        <div className="text-sm font-normal text-indigo-600">
                          Cost
                        </div>
                      </div>
                      <div className="mx-3 line-clamp-3 px-2 text-lg font-bold text-indigo-800">
                        ${feeds[0].cost}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-5 h-px border-0 bg-gray-300 dark:bg-gray-700" />
            <div className="mt-2 sm:mt-0">
              <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400 sm:mt-5">
                <div className="text-grey-600 text-xs font-normal">
                  {feedDetails.business_focus}
                </div>
              </div>
              <div className="mb-3 mt-1 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
                {feedDetails.business_name}
              </div>
              <div className="mb-7 ml-5 items-center rounded-md text-base font-normal text-primary-500">
                By {feeds[0].entrepreneur_name}
              </div>

              <div>
                <div>
                  <div className="m-3 mb-2 px-2 text-base font-medium text-slate-900 sm:text-xl">
                    {feedDetails.primary_need}
                  </div>
                  <div className="mb-2 mt-3 flex w-full"></div>
                  <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                  <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <div className="text-grey-600 mb-4 text-xs font-normal">
                      More Details
                    </div>
                  </div>
                  <div className="mx-3 mb-3 line-clamp-3 px-2 text-base text-slate-800">
                    {feedDetails.primary_gap}
                  </div>

                  <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                  <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <div className="text-grey-600 mb-4 text-xs font-normal">
                      Area of Expertise Needed
                    </div>
                  </div>
                  <div className="mx-3 flex justify-start px-2">
                    <button
                      type="button"
                      className="mb-2 mr-2 rounded-full border border-slate-300 bg-slate-100 px-5 py-[6px] text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      {feedDetails.area_of_expertise}
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

                  <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                  <div className="grid grid-cols-2 divide-x">
                    <div>
                      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                        <div className="text-grey-600 mb-4 text-xs font-normal">
                          Secondary Business Need
                        </div>
                      </div>
                      <div className="mx-3 mb-3 px-2 text-base text-slate-800">
                        {feedDetails.secondary_need}
                      </div>
                    </div>
                    <div>
                      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
                        <div className="text-grey-600 mb-4  text-xs font-normal">
                          Secondary Area of Expertise
                        </div>
                      </div>
                      <div className="mx-3 px-2">
                        <button
                          type="button"
                          className="mb-2 mr-2 rounded-full border border-slate-300 bg-slate-100 px-5 py-[6px] text-base text-slate-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          {feedDetails.secondary_expertise}
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
                    <hr className="my-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
                    <div className="text-grey-600 mb-4 ml-3 text-xs font-normal">
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
                      This project is approved for matching
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-3 hidden p-1 lg:block">
            <button
              type="button"
              onClick={() => {
                setOpen(true);
              }}
              className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Cancel Bid
            </button>
            <button
              type="button"
              className="col-span-2 mb-2 w-full rounded-full border border-indigo-500 bg-white px-5 py-2.5 text-base font-semibold text-indigo-600 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Talk to Entrepreneur
            </button>
            <div className="sticky top-6 hidden py-5 md:block lg:block">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <div>
                  <div className="rounded-lg border border-slate-300 bg-slate-100 p-1">
                    <Menu
                      as="div"
                      className="relative mt-3 flex justify-center"
                    >
                      <div>
                        <Image
                          src={
                            ud[0].profile !== undefined
                              ? ud[0].profile
                              : "/assets/images/placeholder.png"
                          }
                          alt="Picture of the author"
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                      </div>
                    </Menu>
                    <div className="mb-1 mt-3 px-4 text-center font-inter text-lg font-medium text-slate-900">
                      {`${ud[0].firstName} ${ud[0].lastName}`}
                    </div>
                    <div className="relative mx-5 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
                      <div className="text-grey-600 text-xs font-normal">
                        {ud[0].about}
                      </div>
                    </div>
                    <div className="relative mx-1 items-center self-center overflow-hidden text-center text-indigo-700 focus-within:text-gray-400">
                      <div className="text-grey-600 mb-4 text-xs font-normal">
                        {ud[0].email}
                      </div>
                    </div>
                    <div className="borderp-4 mx-3 mb-3 flex-1 rounded-lg px-2 text-center text-base">
                      <Link href="#">
                        <a className="font-bold text-indigo-500">Contact</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="mt-5 flex-1 rounded-lg border border-slate-300 p-4 ">
                    <h2 className="ml-2 px-4 text-base font-semibold text-indigo-400">
                      Show more
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-x-0 bottom-0 block rounded-xl border border-slate-300 bg-gray-100 sm:mt-0 lg:hidden">
            <div className="mx-5 mt-5 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none">
              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                }}
                className="mb-2 w-full rounded-full bg-indigo-800 px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mr-2"
              >
                Cancel Bid
              </button>
              <button
                type="button"
                className="col-span-2 mb-2 w-full rounded-full border border-indigo-500 bg-white px-5 py-2.5 text-base font-semibold text-indigo-600 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:ml-2"
              >
                Talk to Entrepreneur
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal show={open} popup={true} size="lg">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <BsExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to cancel the bid?
            </h3>
          </div>
          <div className="mt-7 flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                <Loading />;
                handleMatch();
                setOpen(false);
              }}
            >
              Yes, I&apos;m sure
            </Button>
            <Button
              color="gray"
              onClick={() => {
                setOpen(false);
              }}
            >
              No, cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default DescriptionCard;
