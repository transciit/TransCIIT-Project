import { useStepperContext } from "@/components/project/context/StepperContext";
import { isEmpty } from "@/validator";

const BusinessCard = ({ getDone }) => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (
      isEmpty(userData.business_name) ||
      isEmpty(userData.business_description) ||
      isEmpty(userData.business_contact_name) ||
      isEmpty(userData.business_email)
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
          <div className="mb-1 mt-3 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
            Business Information
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-slate-600">
              This information will be shown in the entrepreneur feed. Be as
              detailed and precise as you can.
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <form action="#" method="POST">
              <div className="sm:overflow-hidden">
                <div className="space-y-6 px-4 py-2 sm:p-5">
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Business Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="hidden items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-50 px-3 text-base text-gray-500 md:inline-flex">
                        Name
                      </span>
                      <input
                        type="text"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base md:rounded-none md:rounded-r-md"
                        placeholder=" "
                        name="business_name"
                        value={userData.business_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-600">
                      Name of your business.
                    </div>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-base font-medium text-slate-900"
                    >
                      Description of Business
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                        placeholder="Description of Business"
                        defaultValue={""}
                        name="business_description"
                        value={userData.business_description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-700">
                      Brief description for your business
                    </div>
                    <p className="mt-2 text-base text-gray-500"></p>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  <div className="grid grid-cols-2 divide-x">
                    <div className="mr-2">
                      <label
                        htmlFor="company-website"
                        className="block text-base font-medium text-slate-900"
                      >
                        Business Contact Person
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          id="company-website"
                          className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                          placeholder=" "
                          name="business_contact_name"
                          value={userData.business_contact_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-2 text-xs font-normal text-slate-700">
                        Your business contact person
                      </div>
                    </div>
                    <div className="px-2">
                      <label
                        htmlFor="company-website"
                        className="block text-base font-medium text-slate-900"
                      >
                        Business Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <div className="relative w-full">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="input-group-1"
                            className="block w-full flex-1 rounded-md border-slate-400 pl-10 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                            placeholder="name@transciit.com"
                            name="business_email"
                            value={userData.business_email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-normal text-slate-700">
                        Business email address.
                      </div>
                    </div>
                  </div>

                  {/* <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>

                  <div>
                    <div className="w-full items-center justify-center">
                      <label
                        htmlFor="company-website"
                        className="mb-3 block text-base font-medium text-slate-900"
                      >
                        Upload Business Cover Photo
                      </label>
                      <label
                        htmlFor="dropzone-file"
                        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="mb-3 h-10 w-10 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <div className="mb-2 text-base text-slate-700 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </div>
                          <div className="mb-2 text-xs text-slate-700 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </div>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="mt-2 ml-3 text-xs font-normal text-slate-700">
                      Only one document is allowed
                    </div>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessCard;
