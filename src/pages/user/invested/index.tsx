/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import EmptyCard from '@/components/entrepreneur/components/emptycard';
import FeedCard from '@/components/entrepreneur/components/feedcard';
import { Modal } from '@/components/entrepreneur/components/modal';
import { Side } from '@/components/entrepreneur/components/side';
import { Top } from '@/components/entrepreneur/components/top';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const getId = (idDetails: string) => {
    setId(idDetails);
  };

  const { user } = useAuth();

  // changables
  const where = 'invested';
  const { data: investmentData } = useSWR(`/api/invested/${user.uid}`, fetcher);
  const { data: investmentDetails } = useSWR(
    `/api/invested/detail/${id}`,
    fetcher
  );
  const investment = investmentData?.investments;
  const investmentDetail = investmentDetails?.investmentDetail;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title=" Feeds | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard={where}
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div className="top-6">
              <Top topName={`Good Morning, ${user.displayName}`} />
            </div>
            {investment?.length ? (
              <FeedCard
                feeds={investment}
                setOpen={setOpen}
                getId={getId}
                from={where}
              />
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            <Side />
          </div>
        </div>
      </DashBoard>
      <Modal
        feedDetails={investmentDetail}
        from={where}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
