/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import FeedCard from '@/components/students/components/feedcard';
import { Top } from '@/components/students/components/top';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import EmptyCard from '../../components/entrepreneur/components/emptycard';
import { Side } from '../../components/entrepreneur/components/side';
import { Modal } from '../../components/students/components/modal';

export default function Index() {
  const { user } = useAuth();

  const { data: userDetails } = useSWR(`/api/users/${user.uid}`, fetcher);
  const ud = userDetails?.userDetails;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const [enterId, setEnterId] = useState({});
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const getEnterId = (idDetails: string) => {
    setEnterId(idDetails);
  };

  // changables
  const where = 'student';
  const { data: feedData } = useSWR('/api/feed', fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: enterDetails } = useSWR(`/api/users/${enterId}`, fetcher);
  const ed = enterDetails?.userDetails;
  const feeds = feedData?.feeds;
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
            <div className="top-6">{ud?.length ? <Top ud={ud} /> : ''}</div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                getEnterId={getEnterId}
                from={where}
              />
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            {ud?.length ? <Side ud={ud} /> : ''}
          </div>
        </div>
      </DashBoard>
      <Modal feedDetails={feedDetail} open={open} setOpen={setOpen} ud={ed} />
    </>
  );
}
