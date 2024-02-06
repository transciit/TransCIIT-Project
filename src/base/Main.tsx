import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";

import NavBar from "@/components/navbar";

type IMainProps = {
  meta: ReactNode;
  name: string;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full bg-slate-50/80 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <div>
          <NavBar currentTab={props.name} />
          <div className="mx-auto">
            <div className="content text-xl">{props.children}</div>
          </div>
        </div>
        <div className="mx-auto mt-5">
          <footer className="border-t border-gray-200 bg-white py-4 text-white">
            <div className="container mx-auto flex flex-col justify-between overflow-hidden">
              <div className="mr-4 flex w-full items-center justify-center text-center sm:pl-0">
                <div className="flex shrink-0 items-center">
                  <Image
                    src={"/assets/images/transciit-logo.png"}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Link
                    href={"/"}
                    className="relative flex h-full items-center"
                  >
                    <span className="ml-3  text-xl font-extrabold text-gray-700">
                      TransCIIT
                    </span>
                  </Link>
                </div>
                <p className="mx-4 font-manrope text-base text-gray-500">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export { Main };
