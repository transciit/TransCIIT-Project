/* eslint-disable tailwindcss/no-custom-classname */
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import useSWR from "swr";

import { DashBoard } from "@/base/Dashboard";
import FeedCard from "@/components/bids/s/components/feedcard";
import { Modal } from "@/components/bids/s/components/modal";
import { EmptyCard } from "@/components/entrepreneur/components/emptycard";
import Loading from "@/components/loading";
import { Top } from "@/components/students/components/top";
import { Meta } from "@/layouts/Meta";
import fetcher from "@/utils/fetcher";

import { Side } from "../../../components/entrepreneur/components/side";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const [termId, setTermId] = useState({});
  const { user } = useUser();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [entrepreneurId, setEntrepreneurId] = useState({});
  const getEntrepreneurId = (idDetails: string) => {
    setEntrepreneurId(idDetails);
  };

  const getTermId = (idDetails: string) => {
    setTermId(idDetails);
  };

  // changables
  const where = "student";
  const { data: fetchBids } = useSWR(`/api/bids/s/${user?.id}`, fetcher);
  const { data: fetchBidTerms } = useSWR(
    `/api/bids/details/${termId}`,
    fetcher
  );
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: studentDetails } = useSWR(
    `/api/users/${entrepreneurId}`,
    fetcher
  );
  const { data: userDetails } = useSWR(`/api/users/${user?.id}`, fetcher);
  const ud = userDetails?.userDetails;
  const feeds = fetchBids?.getBids;
  const terms = fetchBidTerms?.getBidsDetails;
  const ed = studentDetails?.userDetails;
  const feedDetail = feedDetails?.feedD;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="My Bids | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard="studentBids"
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div className="top-6">{user ? <Top /> : <Loading />}</div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                getTermId={getTermId}
                getEntrepreneurId={getEntrepreneurId}
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
      {terms?.length ? (
        <Modal
          feeds={terms}
          feedDetails={feedDetail}
          open={open}
          setOpen={setOpen}
          ud={ed}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
