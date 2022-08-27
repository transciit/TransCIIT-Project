import { useState } from 'react';

import { useStepperContext } from '@/pages/project/context/StepperContext';
import { isEmpty } from '@/pages/validator';

const AdditionalCard = ({ getDone }) => {
  const [toggle, setToggle] = useState(false);
  const toggleChecked = () => setToggle((value) => !value);
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (
      isEmpty(userData.secondary_need) ||
      isEmpty(userData.secondary_gap) ||
      isEmpty(userData.secondary_expertise)
    ) {
      getDone(false);
    } else {
      getDone(true);
    }
  };

  return (
    <div>
      <div className="top-6">
        <div className="mt-10 sm:mt-0">
          <div className="mt-3 mb-1 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
            Additional Information
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-slate-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-gray-600">
              This information will be shown in the entrepreneur feed. Be as
              detailed and precise as you can.
            </div>
          </div>
          <div className="px-4 py-2">
            <label
              htmlFor="default-toggle"
              className="relative inline-flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="peer sr-only"
                checked={toggle}
                onChange={toggleChecked}
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
                Have Additional Information?
              </span>
            </label>
          </div>
          {toggle ? (
            <div className="mt-3 md:mt-0">
              <form action="#" method="POST">
                <div className="sm:overflow-hidden">
                  <div className="space-y-6 px-4 py-2 sm:p-5">
                    <div>
                      <label
                        htmlFor="company-website"
                        className="block text-base font-medium text-slate-900"
                      >
                        Secondary Need
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="hidden items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-50 px-3 text-base text-gray-500 md:inline-flex">
                          Secondary Title
                        </span>
                        <input
                          type="text"
                          id="company-website"
                          className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base md:rounded-none md:rounded-r-md"
                          placeholder=" "
                          name="secondary_need"
                          value={userData.secondary_need}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-2 ml-3 text-xs font-normal text-slate-700">
                        Brief name of your project, Consider it the Business
                        Title. Should be short and precise
                      </div>
                    </div>
                    <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                    <div>
                      <label
                        htmlFor="about"
                        className="block text-base font-medium text-slate-900"
                      >
                        Secondary gap/need details
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          rows={7}
                          className="mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder="Description of Business Need"
                          defaultValue={''}
                          name="secondary_gap"
                          value={userData.secondary_gap}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-2 ml-3 text-xs font-normal text-slate-700">
                        Detailed description for your project need. URLs are
                        hyperlinked. Ensure to include references if any.
                      </div>
                      <p className="mt-2 text-base text-gray-500"></p>
                    </div>
                    <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
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
                          id="company-website"
                          className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder=" "
                          name="secondary_expertise"
                          value={userData.secondary_expertise}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-2 text-xs font-normal text-slate-700">
                        The Area of expertise of the project this could be the
                        category.
                      </div>
                    </div>
                    <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AdditionalCard;
