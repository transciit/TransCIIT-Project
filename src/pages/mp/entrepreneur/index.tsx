/* eslint-disable tailwindcss/no-custom-classname */
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import useSWR from "swr";

import { DashBoard } from "@/base/Dashboard";
import Loading from "@/components/loading";
import FeedCard from "@/components/mp/e/components/feedcard";
import { Modal } from "@/components/mp/e/components/modal";
import { Meta } from "@/layouts/Meta";
import fetcher from "@/utils/fetcher";

import { Side } from "../../../components/entrepreneur/components/side";
import { Top } from "../../../components/entrepreneur/components/top";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const { user } = useUser();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [studentId, setStudentId] = useState({});
  const getStudentId = (idDetails: string) => {
    setStudentId(idDetails);
  };

  // changables
  const where = "student";
  const { data: fetchMatchedE } = useSWR(`/api/matched/e/${user?.id}`, fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: studentDetails } = useSWR(`/api/users/${studentId}`, fetcher);
  const { data: userDetails } = useSWR(`/api/users/${user?.id}`, fetcher);
  const ud = userDetails?.userDetails;
  const feeds = fetchMatchedE?.fetchMatchedE;
  const sd = studentDetails?.userDetails;
  const feedDetail = feedDetails?.feedD;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Matched Projects | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard="entrepreneurMatched"
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div>{user ? <Top /> : <Loading />}</div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                getStudentId={getStudentId}
                from={where}
              />
            ) : (
              <Loading />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            {ud?.length ? <Side /> : <Loading />}
          </div>
        </div>
      </DashBoard>

      <Modal feedDetails={feedDetail} open={open} setOpen={setOpen} ud={sd} />
    </>
  );
}
