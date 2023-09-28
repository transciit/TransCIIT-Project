/* eslint-disable no-console */
import { useUser } from "@clerk/nextjs";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";

import { useStepperContext } from "@/components/project/context/StepperContext";
import { db } from "@/config/firebase";

const ReviewCard = () => {
  const { userData } = useStepperContext();
  const { user } = useUser();
  const router = useRouter();
  const savetoDb = async () => {
    const docRef = await addDoc(collection(db, "feed"), {
      primary_need: userData.primary_need,
      primary_gap: userData.primary_gap,
      area_of_expertise: userData.area_of_expertise,
      business_focus: userData.business_focus,
      secondary_need: userData.secondary_need || "",
      secondary_gap: userData.secondary_gap || "",
      secondary_expertise: userData.secondary_expertise || "",
      business_name: userData.business_name,
      business_description: userData.business_description,
      business_contact_name: userData.business_contact_name,
      business_contact_email: userData.business_email,
      matched: false,
      help_required: userData.help_required || "",
      entrepreneur_id: user?.id,
      entrepreneur_name: user?.fullName,
      entrepreneur_profile: user?.imageUrl,
      entrepreneur_email: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(docRef.id);
    router.push("/entrepreneur");
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
                  <label
                    htmlFor="company-website"
                    className="block text-base font-medium text-slate-900"
                  >
                    Project Primary Need
                  </label>
                  <div className="mt-1 grid grid-cols-2 rounded-md">
                    <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                      {userData.primary_need}
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
                    Title of your project. Should be short and precise
                  </div>
                </div>
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                <div>
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Project gap/need details
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.primary_gap}
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
                      Detailed description for your project need. URLs are
                      hyperlinked. Ensure to include references if any.
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
                      Area of Expertise Needed
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.area_of_expertise}
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
                      The Area of expertise of the project this could be the
                      category.
                    </div>
                  </div>
                  <div className="pl-3">
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Business Focus
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.business_focus}
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
                      Goals of your business.
                    </div>
                  </div>
                </div>

                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
              </div>
              <hr className="my-4 h-3 border-0 bg-gray-200 dark:bg-gray-700"></hr>
            </div>

            <div className="sm:overflow-hidden">
              <div className="space-y-6 px-4 py-2 sm:p-5">
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-base font-medium text-slate-900"
                  >
                    Business Name
                  </label>
                  <div className="mt-1 grid grid-cols-2 rounded-md">
                    <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                      {userData.business_name}
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
                    Name of your business.
                  </div>
                </div>
                <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                <div>
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Business Description
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.business_description}
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
                      Brief description for your business
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
                      Business Contact Person
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.business_contact_name}
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
                      Your business contact person
                    </div>
                  </div>
                  <div className="pl-3">
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Business Email
                    </label>
                    <div className="mt-1 grid grid-cols-2 rounded-md">
                      <div className="mb-1 justify-start text-xl font-semibold text-slate-900 sm:text-2xl">
                        {userData.business_email}
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
                      Business email address.
                    </div>
                  </div>
                </div>
              </div>
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
export default ReviewCard;
