/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';

import { Side } from '../../components/entrepreneur/components/side';
import { Top } from '../../components/entrepreneur/components/top';

export default function Index() {
  // changables
  const where = 'student';
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Bidded Projects | TransCIIT Project"
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
            {/* {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                from={where}
              />
            ) : (
              <AddSkills />
            )} */}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            <Side />
          </div>
        </div>
      </DashBoard>
      {/* <Modal
        feedDetails={feedDetail}
        open={open}
        setOpen={setOpen}
      /> */}
    </>
  );
}
