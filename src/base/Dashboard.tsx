import type { ReactNode } from "react";
import React from "react";

import { Meta } from "@/layouts/Meta";

import { Main } from "./Main";

type IMainProps = {
  metaDashboard: ReactNode;
  nameDashboard: string;
  children: ReactNode;
};

export const DashBoard = (props: IMainProps) => {
  return (
    <Main meta={<Meta title=" " description=" " />} name={props.nameDashboard}>
      <div className="relative w-full items-center justify-center overflow-x-hidden md:px-10">
        {props.metaDashboard}
        <div className="mx-auto max-w-6xl">{props.children}</div>
      </div>
    </Main>
  );
};
