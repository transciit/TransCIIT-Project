/* eslint-disable tailwindcss/no-custom-classname */
// import FeedCard from './feedcard';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useSWR from 'swr';

import { Main } from '@/base/Main';
import Loading from '@/components/loading';
import { db, storage } from '@/config/firebase';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import PersonalCard from '../../components/users/components/personal';
import ProfileCard from '../../components/users/components/profile';

export default function UserProfile() {
  const { user } = useAuth();
  const reference = doc(db, 'users', user.uid);

  const { data: userDetails } = useSWR(`/api/users/${user.uid}`, fetcher);
  const ud = userDetails?.userDetails;
  const [profile, setProfile] = useState('/assets/images/placeholder.png');

  const getFromDB = async () => {
    const docSnap = await getDoc(reference);

    if (docSnap.exists()) {
      if (docSnap.data().profile) {
        setProfile(docSnap.data().profile);
      }
    }
  };

  getFromDB();

  const savetoDb = async (downloadURL: any) => {
    try {
      await updateDoc(reference, {
        profile: downloadURL,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;

    const file: any = e.target.files[0];

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `resources/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressBar =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progressBar}% done`);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;

          default:
        }
      },
      (onError) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (onError.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;

          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfile(downloadURL);
          savetoDb(downloadURL);
        });
      }
    );
  };

  return (
    <>
      <Main
        meta={
          <Meta
            title="User Profile"
            description="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
        }
        name={'user'}
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3">
              <div className="sticky top-6 hidden py-5 md:block lg:block">
                <div className="mx-4 max-w-sm overflow-hidden rounded-lg shadow-sm">
                  <div className="flex">
                    <div className="flex-1 rounded-xl border border-slate-300 bg-slate-100 p-1">
                      <div>
                        <div className="mt-1 flex flex-col items-center">
                          <div className="mx-6 my-3 font-inter text-lg font-bold text-slate-700">
                            Profile Photo
                          </div>
                          <Image
                            src={profile}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                          <div>
                            <label htmlFor="fileUpload">
                              <div>
                                <h3 className="leading-4 mt-4 rounded-xl bg-indigo-400 px-9 py-2 text-sm font-medium text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                  Change
                                </h3>
                              </div>
                            </label>
                            <input
                              hidden
                              id="fileUpload"
                              type="file"
                              accept="image/*"
                              onChange={handleFileSelected}
                            />
                          </div>
                          <div className="relative mx-5 mt-3 items-center self-center overflow-hidden text-center text-gray-600 focus-within:text-gray-400">
                            <div className="text-grey-600 text-xs font-normal">
                              Update your profile picture
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                      {ud?.length ? (
                        <div>
                          <div className="mx-6 mt-3 font-inter text-lg font-bold text-slate-700">
                            {`${ud[0].firstName} ${ud[0].lastName}`}
                          </div>
                          <div className="mx-6 mb-4 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                            Full name
                          </div>
                          <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                          <div className="mx-6 mt-3 font-inter text-sm text-slate-700">
                            {ud[0].about}
                          </div>
                          <div className="mx-6 mb-4 mt-2 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                            Description
                          </div>
                          <hr className="m-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
                          <div className="mx-6 mt-3 font-inter text-sm text-slate-700">
                            {ud[0].email}
                          </div>
                          <div className="mx-6 mb-4 mt-2 items-center text-xs font-normal text-gray-600 focus-within:text-gray-400">
                            Email
                          </div>
                          <div className="borderp-4 mx-3 mb-3 flex-1 rounded-lg px-2 text-center text-sm">
                            <Link href="#">
                              <a className="font-bold text-indigo-500">
                                {' '}
                                Edit Profile
                              </a>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        'Loading Profile'
                      )}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mt-5 flex-1 rounded-xl border border-slate-300 p-4 ">
                      <h2 className="ml-2 w-48 px-4 text-sm font-semibold text-indigo-400">
                        Show activity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 py-5">
                {ud?.length ? <PersonalCard usr={ud} /> : <Loading />}
                {ud?.length ? <ProfileCard usr={ud} /> : ''}
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
