/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import EmptyCard from '@/components/entrepreneur/components/emptycard';
import FeedCard from '@/components/invites/s/components/feedcard';
import { Modal } from '@/components/invites/s/components/modal';
import Loading from '@/components/loading';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import { Side } from '../../../components/entrepreneur/components/side';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const { user } = useAuth();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [entrepreneurId, setEntrepreneurId] = useState({});
  const getEntrepreneurId = (idDetails: string) => {
    setEntrepreneurId(idDetails);
  };

  // changables
  const where = 'student';
  const { data: fetchInvites } = useSWR(`/api/invites/s/${user?.uid}`, fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: studentDetails } = useSWR(
    `/api/users/${entrepreneurId}`,
    fetcher
  );
  const { data: userDetails } = useSWR(`/api/users/${user?.uid}`, fetcher);
  const ud = userDetails?.userDetails;
  const feeds = fetchInvites?.getInvites;
  const ed = studentDetails?.userDetails;
  const feedDetail = feedDetails?.feedD;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Invites | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard={where}
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3">
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                getEntrepreneurId={getEntrepreneurId}
                from={where}
              />
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            {ud?.length ? <Side ud={ud} /> : <Loading />}
          </div>
        </div>
      </DashBoard>

      <Modal
        feeds={feeds}
        feedDetails={feedDetail}
        open={open}
        setOpen={setOpen}
        ud={ed}
        sd={ud}
      />
    </>
  );
}
