/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import useSWR from 'swr';

import Loading from '@/components/loading';
import { db } from '@/config/firebase';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import { ModalDescription } from './modalDescription';
import StudentCard from './studentCard';

const ViewStudents = ({ feedDetail, student }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const { data: userDetails } = useSWR(`/api/users/${id}`, fetcher);
  const ud = userDetails?.userDetails;

  const handleSaved = async (stud, dab) => {
    try {
      const referenceData = doc(db, 'users', stud);
      if (dab) {
        await updateDoc(referenceData, {
          liked: arrayUnion(user.uid),
        });
      } else {
        await updateDoc(referenceData, {
          liked: arrayRemove(user.uid),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getId = (idDetails: string, showDetails: boolean) => {
    handleSaved(idDetails, showDetails);
  };

  const getStudentId = (idDetails: string) => {
    setId(idDetails);
  };

  return (
    <>
      {/* <Search /> */}
      <div
        className="mb-28 grid rounded-2xl border border-slate-300 bg-white p-1 md:mb-24 lg:col-span-2 
        lg:mb-0"
      >
        <div className="mt-10 sm:mt-0">
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="View Students" active={true}>
              <div className="grid-cols-3 gap-8 md:grid">
                {student.length ? (
                  student?.map((students) => (
                    <StudentCard
                      key={students.id}
                      fav={
                        students?.liked !== undefined
                          ? !!students?.liked.includes(user.uid)
                          : false
                      }
                      students={students}
                      getId={getId}
                      getStudentId={getStudentId}
                      setOpen={setOpen}
                    />
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </Tabs.Item>
            <Tabs.Item title="Saved Students">
              <div className="grid-cols-3 gap-8 md:grid">
                {student.length ? (
                  student?.map((students) =>
                    students?.liked !== undefined ? (
                      students?.liked.includes(user.uid) ? (
                        <StudentCard
                          key={students.id}
                          fav={
                            students?.liked !== undefined
                              ? !!students?.liked.includes(user.uid)
                              : false
                          }
                          students={students}
                          getId={getId}
                          getStudentId={getStudentId}
                          setOpen={setOpen}
                        />
                      ) : (
                        ''
                      )
                    ) : (
                      ''
                    )
                  )
                ) : (
                  <Loading />
                )}
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
      {ud?.length ? (
        <ModalDescription
          feedDetails={feedDetail}
          ud={ud}
          open={open}
          setOpen={setOpen}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ViewStudents;
