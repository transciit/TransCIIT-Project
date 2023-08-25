/* eslint-disable no-console */
import { useUser } from "@clerk/nextjs";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";

import { db } from "@/config/firebase";

import { useStepperContext } from "../context/StepperContext";

const StudentReviewCard = () => {
  const { myData } = useStepperContext();
  const { user } = useUser();
  const router = useRouter();
  const savetoDb = async () => {
    const referenceData = doc(db, "users", user?.id || "0");
    await updateDoc(referenceData, {
      about: myData.about_you,
      skills: myData.area_of_expertise,
    });
    router.push("/students");
  };
  return (
    <div>
      <div className="top-6">
        <div className="mt-10 sm:mt-0">
          <div className="mb-1 mt-3 px-5 font-playfair text-2xl font-extrabold text-slate-900 sm:text-2xl">
            Review Submission
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-slate-600">
              This information will be shown in the entrepreneur feed. Be as
              detailed and precise as you can.
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <div className="sm:overflow-hidden">
              <div className="space-y-6 px-4 py-2 sm:p-5">
                <div>
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      About You
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {myData.about_you}
                      </div>
                      <div className="mr-4 flex justify-end">
                        <Image
                          src="/assets/images/dash/edit.svg"
                          alt="Picture of the author"
                          width={29}
                          height={29}
                        />
                      </div>
                    </div>
                    <div className="text-xs font-normal text-slate-600">
                      A summary of who you are and what you would like to
                      achieve. You can also include previous projects youve
                      successfully handled
                    </div>
                  </div>
                </div>
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                <div className="grid grid-cols-2 divide-x">
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Area of Expertise
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {myData.area_of_expertise}
                      </div>
                      <div className="mr-4 flex justify-end">
                        <Image
                          src="/assets/images/dash/edit.svg"
                          alt="Picture of the author"
                          width={29}
                          height={29}
                        />
                      </div>
                    </div>
                    <div className="text-xs font-normal text-slate-600">
                      Your Area of expertise
                    </div>
                  </div>
                </div>

                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
              </div>
              <hr className="my-4 h-3 border-0 bg-gray-200 dark:bg-gray-700"></hr>
            </div>

            <div className="sm:overflow-hidden">
              <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
              <div className="bg-gray-50 px-4 text-right sm:px-6">
                <button
                  type="button"
                  className="mb-2 mr-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  onClick={() => {
                    savetoDb();
                  }}
                >
                  Submit Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentReviewCard;
