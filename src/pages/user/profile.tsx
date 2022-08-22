/* eslint-disable tailwindcss/no-custom-classname */
const ProfileCard = () => (
  <div>
    <div className="top-6 mt-4">
      <div className="rounded-xl border border-slate-300 bg-white p-1">
        <div className="mt-10 sm:mt-0">
          <div className="font-playfair mt-3 mb-1 px-5 text-xl font-extrabold text-slate-700 sm:text-2xl">
            Profile
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="text-grey-600 mb-4 text-xs font-normal">
              This information will be displayed publicly so be careful what you
              share.
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div className="sm:overflow-hidden">
                <div className="space-y-6 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-400 bg-gray-50 px-3 text-sm text-gray-500">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 text-right sm:px-6">
                  <button
                    type="button"
                    className="mr-2 mb-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProfileCard;
