/* eslint-disable tailwindcss/no-custom-classname */
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import useSWR from "swr";

import { DashBoard } from "@/base/Dashboard";
import FeedCard from "@/components/bids/e/components/feedcard";
import { Modal } from "@/components/bids/e/components/modal";
import EmptyCard from "@/components/entrepreneur/components/emptycard";
import Loading from "@/components/loading";
import { Meta } from "@/layouts/Meta";
import fetcher from "@/utils/fetcher";

import { Side } from "../../../components/entrepreneur/components/side";
import { Top } from "../../../components/entrepreneur/components/top";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const [termId, setTermId] = useState({});
  const { user } = useUser();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const getTermId = (idDetails: string) => {
    setTermId(idDetails);
  };
  const [studentId, setStudentId] = useState({});
  const getStudentId = (idDetails: string) => {
    setStudentId(idDetails);
  };

  // changables
  const where = "student";
  const { data: fetchBids } = useSWR(`/api/bids/e/${user?.id}`, fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: studentDetails } = useSWR(`/api/users/${studentId}`, fetcher);
  const { data: userDetails } = useSWR(`/api/users/${user?.id}`, fetcher);
  const { data: fetchBidTerms } = useSWR(
    `/api/bids/details/${termId}`,
    fetcher
  );
  const terms = fetchBidTerms?.getBidsDetails;
  const ud = userDetails?.userDetails;
  const feeds = fetchBids?.getBids;
  const sd = studentDetails?.userDetails;
  const feedDetail = feedDetails?.feedD;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Bidded Projects | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard="entrepreneurBids"
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div className="top-6">{user ? <Top /> : <Loading />}</div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                getStudentId={getStudentId}
                from={where}
                getTermId={getTermId}
              />
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            {user ? <Side /> : <Loading />}
          </div>
        </div>
      </DashBoard>
      {terms?.length ? (
        <Modal
          feeds={terms}
          feedDetails={feedDetail}
          open={open}
          setOpen={setOpen}
          ud={sd}
          ed={ud}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
