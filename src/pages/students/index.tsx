/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';
import fetcher from '@/utils/fetcher';

import EmptyCard from '../../components/entrepreneur/components/emptycard';
import FeedCard from '../../components/entrepreneur/components/feedcard';
import { Side } from '../../components/entrepreneur/components/side';
import AddSkills from '../../components/students/components/AddSkills';
import { Modal } from '../../components/students/components/modal';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [enterId, setEnterId] = useState({});
  const getEnterId = (idDetails: string) => {
    setEnterId(idDetails);
  };

  // changables
  const where = 'student';
  const { data: feedData } = useSWR('/api/feed', fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: userWho } = useSWR(`/api/profile/${enterId}`, fetcher);
  const feeds = feedData?.feeds;
  const userW = userWho?.userWho;
  const feedDetail = feedDetails?.feedD;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Projects | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard={where}
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <AddSkills />
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
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
        feedDetails={feedDetail}
        from={where}
        open={open}
        setOpen={setOpen}
        getEnterId={getEnterId}
        userE={userW}
      />
    </>
  );
}
