/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';
import fetcher from '@/utils/fetcher';

import AddProjects from './components/AddProjects';
import FeedCard from './components/feedcard';
import { Modal } from './components/modal';
import { Side } from './components/side';
import { Top } from './components/top';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const getId = (idDetails: string) => {
    setId(idDetails);
  };

  // changables
  const where = 'entrepreneur';
  const { data: feedData } = useSWR('/api/feed', fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const feeds = feedData?.feeds;
  const feedDetail = feedDetails?.feedD;
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
              <Top topName={`Good Afternoon`} />
            </div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                from={where}
              />
            ) : (
              <AddProjects />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            <Side />
          </div>
        </div>
      </DashBoard>
      <Modal
        feedDetails={feedDetail}
        from={where}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}