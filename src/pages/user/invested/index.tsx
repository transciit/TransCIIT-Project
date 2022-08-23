/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import EmptyCard from '@/pages/feed/components/emptycard';
import FeedCard from '@/pages/feed/components/feedcard';
import { Modal } from '@/pages/feed/components/modal';
import { Side } from '@/pages/feed/components/side';
import { Top } from '@/pages/feed/components/top';
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
