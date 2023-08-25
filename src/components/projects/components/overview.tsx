// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from "react";
import validator from "validator";

import { useStepperContext } from "@/components/project/context/StepperContext";
// import { storage } from '@/config/firebase';
import { isEmpty } from "@/validator";

const OverviewCard = ({ getDone }) => {
  //  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (
      isEmpty(userData.primary_need) ||
      isEmpty(userData.area_of_expertise) ||
      isEmpty(userData.business_focus) ||
      validator.isEmpty(userData.primary_gap)
    ) {
      getDone(false);
    } else {
      getDone(true);
    }
  };

  const savetoDb = async (e: any) => {
    e.preventDefault();
    if (
      validator.isEmpty(userData.primary_need) ||
      validator.isEmpty(userData.primary_gap) ||
      validator.isEmpty(userData.area_of_expertise) ||
      validator.isEmpty(userData.business_focus) ||
      validator.isEmpty(userData.business_resources)
    ) {
      setError(true);
    } else {
      // handleFormData('business_focus');
      // const docRef = await addDoc(collection(db, 'projects'), {
      //   primary_need: values.primary_need,
      //   primary_gap: data.primary_gap,
      //   area_of_expertise: data.area_of_expertise,
      //   business_focus: data.business_focus,
      //   business_resources: resource,
      //   entrepreneur_id: user.uid,
      //   v
      // });
      // console.log(docRef.id);
    }
  };

  return (
    <div>
      <div className="top-6">
        <div className="mt-10 sm:mt-0">
          <div className="mb-1 mt-3 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
            Project Overview
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-slate-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <form action="#" onSubmit={savetoDb}>
              <div className="sm:overflow-hidden">
                <div className="space-y-6 px-4 py-2 sm:p-5">
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Project Primary Need
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="hidden items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-50 px-3 text-base text-gray-500 md:inline-flex">
                        Project Title
                      </span>
                      <input
                        type="text"
                        name="primary_need"
                        id="pr-mary"
                        className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base md:rounded-none md:rounded-r-md"
                        placeholder=" "
                        value={userData.primary_need}
                        style={{ border: error ? "2px solid red" : "" }}
                        onChange={handleChange}
                        required
                      />
                      {error ? (
                        <div style={{ color: "red" }}>
                          This is a required field
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-700">
                      Brief title of your project. Should be short and precise
                    </div>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-base font-medium text-slate-900"
                    >
                      Project gap/need details
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="primary_gap"
                        rows={7}
                        className="mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                        placeholder="Description of Business Need"
                        value={userData.primary_gap}
                        onChange={handleChange}
                        required
                      />
                      {error ? (
                        <div style={{ color: "red" }}>
                          This is a required field
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-700">
                      Detailed description for your project need. URLs are
                      hyperlinked. Ensure to include references if any.
                    </div>
                    <p className="mt-2 text-base text-gray-500"></p>
                  </div>

                  {/* <div>
                    <div className="w-full items-center justify-center">
                      <label
                        className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="file_input"
                      >
                        Upload Business Resources
                      </label>
                      <input
                        className="mt-5 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-base text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                        type="file"
                        onChange={handleFileSelected}
                      />
                      {progress !== 0 && (
                        <input
                          type="text"
                          className="hidden w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder=" "
                          name="business_resource"
                          value={userData.business_resource}
                          onChange={handleChange}
                          required
                        />
                      )}
                    </div>

                    {progress !== 0 && (
                      <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium text-blue-100"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    )}

                    <div className="mt-2 ml-3 text-xs font-normal text-slate-700">
                      {progress === 100
                        ? 'Upload Complete'
                        : 'Only one document is allowed, PDF, Docs are supported.'}
                    </div>
                  </div> */}
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  <div className="grid grid-cols-2 divide-x">
                    <div className="mr-2">
                      <label
                        htmlFor="company-website"
                        className="block text-base font-medium text-slate-900"
                      >
                        Area of Expertise Needed
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="area_of_expertise"
                          id="company-website"
                          className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder=" "
                          value={userData.area_of_expertise}
                          onChange={handleChange}
                          required
                        />
                        {error ? (
                          <div style={{ color: "red" }}>
                            This is a required field
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mt-2 text-xs font-normal text-slate-700">
                        The Area of expertise of the project this could be the
                        category.
                      </div>
                    </div>
                    <div className="px-2">
                      <label
                        htmlFor="company-website"
                        className="block text-base font-medium text-slate-900"
                      >
                        Business Focus
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="business_focus"
                          id="company-website"
                          className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder=" "
                          value={userData.business_focus}
                          onChange={handleChange}
                          required
                        />
                        {error ? (
                          <div style={{ color: "red" }}>
                            This is a required field
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mt-2 text-xs font-normal text-slate-700">
                        Goals of your business.
                      </div>
                    </div>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>

                  <div className="px-2">
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Help Required
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="hidden items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-50 px-3 text-base text-gray-500 md:inline-flex"></span>
                      <input
                        type="text"
                        name="help_required"
                        id="pr-mary"
                        className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base md:rounded-none md:rounded-r-md"
                        placeholder=" "
                        value={userData.help_required}
                        style={{ border: error ? "2px solid red" : "" }}
                        onChange={handleChange}
                        required
                      />
                      {error ? (
                        <div style={{ color: "red" }}>
                          This is a required field
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-700">
                      Brief explanation od your project need.
                    </div>
                  </div>
                </div>
                <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>

                {/* <div className="bg-gray-50 px-4 text-right sm:px-6">
                    {progress !== 0 && (
                      <button
                        type="button"
                        className="mr-2 mb-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        onClick={() => {
                          handleOnClick();
                        }}
                      >
                        Save Resource and Proceed
                      </button>
                    )}
                  </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverviewCard;
