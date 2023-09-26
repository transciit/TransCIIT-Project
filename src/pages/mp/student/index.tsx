/* eslint-disable tailwindcss/no-custom-classname */
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import useSWR from "swr";

import { DashBoard } from "@/base/Dashboard";
import Loading from "@/components/loading";
import { Modal } from "@/components/mp/s/components/modal";
import FeedCard from "@/components/students/components/feedcard";
import { Top } from "@/components/students/components/top";
import { Meta } from "@/layouts/Meta";
import fetcher from "@/utils/fetcher";

import { EmptyCard } from "../../../components/entrepreneur/components/emptycard";
import { Side } from "../../../components/entrepreneur/components/side";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const { user } = useUser();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [enterId, setEnterId] = useState({});
  const getEnterId = (idDetails: string) => {
    setEnterId(idDetails);
  };

  // changables
  const where = "student";
  const { data: fetchMatchedS } = useSWR(`/api/matched/s/${user?.id}`, fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: userDetails } = useSWR(`/api/users/${user?.id}`, fetcher);
  const { data: enterDetails } = useSWR(`/api/users/${enterId}`, fetcher);
  const ed = enterDetails?.userDetails;
  const ud = userDetails?.userDetails;
  const feeds = fetchMatchedS?.fetchMatchedS;

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
        nameDashboard="studentMatched"
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div className="top-6">{user ? <Top /> : <Loading />}</div>
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
            {ud?.length ? <Side /> : <Loading />}
          </div>
        </div>
      </DashBoard>
      <Modal feedDetails={feedDetail} open={open} setOpen={setOpen} ud={ed} />
    </>
  );
}
