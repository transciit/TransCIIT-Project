import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

import { db } from '@/config/firebase';
import { useAuth } from '@/lib/auth';

const PersonalCard = ({ usr }) => {
  const { user } = useAuth();
  const reference = doc(db, 'users', user.uid);

  const [userData, setUserData] = useState({
    firstName: usr[0].firstName,
    lastName: usr[0].lastName,
    emailAddress: usr[0].email,
    country: usr[0].country,
    phoneNumber: usr[0].phone,
    rate: usr[0].rate,
  });

  const getDetails = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const savetoDb = async () => {
    try {
      await updateDoc(reference, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.emailAddress,
        country: userData.country,
        phone: userData.phoneNumber,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="top-6">
        <div className="rounded-xl border border-slate-300 bg-white p-1">
          <div className="mt-10 sm:mt-0">
            <div className="mt-3 mb-1 px-5 font-playfair text-xl font-extrabold text-slate-700 sm:text-2xl">
              Personal Information
            </div>
            <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
              <div className="mb-4 text-xs font-normal text-gray-600">
                Use a permanent address where you can receive mail.
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <form action="#" method="POST">
                <div className=" overflow-hidden">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          value={userData.firstName}
                          onChange={getDetails}
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={userData.lastName}
                          onChange={getDetails}
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="emailAddress"
                          value={userData.emailAddress}
                          onChange={getDetails}
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={userData.country}
                          onChange={getDetails}
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={userData.phoneNumber}
                          onChange={getDetails}
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      {usr[0].includes('student') ? (
                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Your Rate
                          </label>
                          <input
                            type="text"
                            name="rate"
                            value={userData.rate}
                            onChange={getDetails}
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      ) : (
                        ''
                      )}
                      <div className="col-span-6">
                        <button
                          type="button"
                          onClick={() => {
                            savetoDb();
                          }}
                          className="mr-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalCard;
