/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

import { DashBoard } from "@/base/Dashboard";
import { Meta } from "@/layouts/Meta";

export default function Index() {
  // changables
  const where = "invested";

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
              {/* <Top topName={`Good Morning, ${user.displayName}`} /> */}
            </div>
            {/* {investment?.length ? (
              <FeedCard
                feeds={investment}
                setOpen={setOpen}
                getId={getId}
                from={where}
              />
            ) : (
              <EmptyCard />
            )} */}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            {/* <Side /> */}
          </div>
        </div>
      </DashBoard>
      {/* <Modal
        feedDetails={investmentDetail}
        from={where}
        open={open}
        setOpen={setOpen}
      /> */}
    </>
  );
}
